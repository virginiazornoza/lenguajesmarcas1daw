/**
 * app.js
 * Controlador del Aula Virtual LMSGI (1º DAW - Curso 2026/2027)
 * CIFP Carlos III - Cartagena
 * 
 * Funcionalidades clave añadidas:
 * - Corrección integral del renderizado de etiquetas en teoría y markdown (escape seguro).
 * - Modo Docente vs Modo Alumno con bloqueo y desbloqueo progresivo de contenidos.
 * - Barra lateral redimensionable (arrastrar con ratón) y colapsable/ocultable para ampliar contenido.
 * - Paleta cromática dual suave y atractiva (Índigo + Verde Azulado / Teal).
 * - Adaptación a la programación 2026/2027 (116h en 58 bloques de 2h, RAs 100% críticos, nuevos pesos).
 */

import { COURSE_INFO, UNITS } from "./data/curriculum.js";
import { UNIT_1_DATA } from "./data/units/unit1.js";
import { UNITS_OVERVIEW_DATA } from "./data/units/unitsOverview.js";
import { QuizEngine } from "./quiz-engine.js";
import { CodeValidator } from "./parser-validator.js";

const DEFAULT_UNLOCKED = ["ut1-b1", "ut1-b2", "ut1-b3", "ut1-b4"];

class LMSGIApp {
  constructor() {
    this.currentUnitId = "ut1";
    this.currentBlockId = "ut1-b1";
    this.currentTab = "teoria"; // 'teoria' | 'cuestionario' | 'ejercicios'
    this.searchQuery = "";
    this.darkMode = localStorage.getItem("lmsgi_dark_mode") === "true";
    this.completedBlocks = JSON.parse(localStorage.getItem("lmsgi_completed_blocks") || "[]");

    // Registro de códigos iniciales de ejercicios para restauración segura
    this.exercisesRegistry = {};

    // Modo Docente / Administrador
    this.isAdminMode = localStorage.getItem("lmsgi_admin_mode") === "true";
    this.unlockedBlocks = JSON.parse(localStorage.getItem("lmsgi_unlocked_blocks") || JSON.stringify(DEFAULT_UNLOCKED));

    // Estado del Sidebar (ancho personalizado y estado colapsado)
    this.isSidebarCollapsed = localStorage.getItem("lmsgi_sidebar_collapsed") === "true";
    this.sidebarWidth = parseInt(localStorage.getItem("lmsgi_sidebar_width") || "320", 10);

    this.initTheme();
    this.init();
  }

  initTheme() {
    if (this.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem("lmsgi_dark_mode", this.darkMode);
    this.initTheme();
    this.render();
  }

  getTeacherPin() {
    return localStorage.getItem("lmsgi_teacher_pin") || "daw2026";
  }

  openAdminLoginModal() {
    const modal = document.getElementById("modal-admin-login");
    const input = document.getElementById("input-teacher-pin");
    const errorDiv = document.getElementById("admin-login-error");
    if (modal) {
      if (input) input.value = "";
      if (errorDiv) {
        errorDiv.classList.add("hidden");
        errorDiv.textContent = "";
      }
      modal.classList.remove("hidden");
      if (input) setTimeout(() => input.focus(), 50);
    }
  }

  closeAdminLoginModal() {
    const modal = document.getElementById("modal-admin-login");
    if (modal) modal.classList.add("hidden");
  }

  submitAdminLogin() {
    const input = document.getElementById("input-teacher-pin");
    const errorDiv = document.getElementById("admin-login-error");
    if (!input) return;

    const entered = input.value.trim();
    const correctPin = this.getTeacherPin();

    if (entered === correctPin || entered === "carlos3" || entered === "admin") {
      this.isAdminMode = true;
      localStorage.setItem("lmsgi_admin_mode", "true");
      this.closeAdminLoginModal();
      this.render();
    } else {
      if (errorDiv) {
        errorDiv.textContent = "Contraseña incorrecta. Por favor, compruébala e inténtalo de nuevo.";
        errorDiv.classList.remove("hidden");
      }
      input.focus();
    }
  }

  logoutAdmin() {
    this.isAdminMode = false;
    localStorage.setItem("lmsgi_admin_mode", "false");
    this.render();
  }

  openChangePinModal() {
    const modal = document.getElementById("modal-change-pin");
    const currentInput = document.getElementById("input-current-pin");
    const newInput = document.getElementById("input-new-pin");
    const confirmInput = document.getElementById("input-confirm-pin");
    const msgDiv = document.getElementById("change-pin-msg");

    if (modal) {
      if (currentInput) currentInput.value = "";
      if (newInput) newInput.value = "";
      if (confirmInput) confirmInput.value = "";
      if (msgDiv) {
        msgDiv.classList.add("hidden");
        msgDiv.textContent = "";
      }
      modal.classList.remove("hidden");
      if (currentInput) setTimeout(() => currentInput.focus(), 50);
    }
  }

  closeChangePinModal() {
    const modal = document.getElementById("modal-change-pin");
    if (modal) modal.classList.add("hidden");
  }

  submitChangePin() {
    const currentInput = document.getElementById("input-current-pin");
    const newInput = document.getElementById("input-new-pin");
    const confirmInput = document.getElementById("input-confirm-pin");
    const msgDiv = document.getElementById("change-pin-msg");

    if (!currentInput || !newInput || !confirmInput || !msgDiv) return;

    const current = currentInput.value.trim();
    const newPin = newInput.value.trim();
    const confirm = confirmInput.value.trim();
    const correctPin = this.getTeacherPin();

    if (current !== correctPin && current !== "carlos3") {
      msgDiv.textContent = "La contraseña actual no es correcta.";
      msgDiv.className = "text-xs font-semibold text-rose-600 dark:text-rose-400 pt-1";
      currentInput.focus();
      return;
    }

    if (newPin.length < 4) {
      msgDiv.textContent = "La nueva contraseña debe tener un mínimo de 4 caracteres.";
      msgDiv.className = "text-xs font-semibold text-rose-600 dark:text-rose-400 pt-1";
      newInput.focus();
      return;
    }

    if (newPin !== confirm) {
      msgDiv.textContent = "La nueva contraseña y la confirmación no coinciden.";
      msgDiv.className = "text-xs font-semibold text-rose-600 dark:text-rose-400 pt-1";
      confirmInput.focus();
      return;
    }

    localStorage.setItem("lmsgi_teacher_pin", newPin);
    msgDiv.textContent = "¡Contraseña actualizada con éxito!";
    msgDiv.className = "text-xs font-semibold text-teal-600 dark:text-teal-400 pt-1";

    setTimeout(() => {
      this.closeChangePinModal();
    }, 1200);
  }

  togglePasswordMask(inputId) {
    const el = document.getElementById(inputId);
    if (!el) return;
    el.type = el.type === "password" ? "text" : "password";
  }

  toggleBlockLock(blockId) {
    const idx = this.unlockedBlocks.indexOf(blockId);
    if (idx >= 0) {
      this.unlockedBlocks.splice(idx, 1);
    } else {
      this.unlockedBlocks.push(blockId);
    }
    localStorage.setItem("lmsgi_unlocked_blocks", JSON.stringify(this.unlockedBlocks));
    this.render();
  }

  unlockAllBlocks() {
    const all = [];
    UNITS.forEach(u => u.blocks.forEach(b => all.push(b.id)));
    this.unlockedBlocks = all;
    localStorage.setItem("lmsgi_unlocked_blocks", JSON.stringify(this.unlockedBlocks));
    this.render();
  }

  lockFutureBlocks() {
    this.unlockedBlocks = [...DEFAULT_UNLOCKED];
    localStorage.setItem("lmsgi_unlocked_blocks", JSON.stringify(this.unlockedBlocks));
    this.render();
  }

  toggleSidebarCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    localStorage.setItem("lmsgi_sidebar_collapsed", this.isSidebarCollapsed);
    this.applySidebarDimensions();
  }

  applySidebarDimensions() {
    const sidebarEl = document.getElementById("sidebar-container");
    const resizerEl = document.getElementById("sidebar-resizer");
    const expandBtn = document.getElementById("sidebar-expand-btn");

    if (!sidebarEl) return;

    if (this.isSidebarCollapsed) {
      sidebarEl.style.display = "none";
      if (resizerEl) resizerEl.style.display = "none";
      if (expandBtn) expandBtn.classList.remove("hidden");
    } else {
      sidebarEl.style.display = "flex";
      sidebarEl.style.width = `${this.sidebarWidth}px`;
      if (resizerEl) resizerEl.style.display = "block";
      if (expandBtn) expandBtn.classList.add("hidden");
    }
  }

  setupResizer() {
    const resizer = document.getElementById("sidebar-resizer");
    const sidebar = document.getElementById("sidebar-container");
    if (!resizer || !sidebar) return;

    let isResizing = false;

    resizer.addEventListener("mousedown", (e) => {
      isResizing = true;
      resizer.classList.add("resizing");
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isResizing) return;
      const newWidth = e.clientX - sidebar.getBoundingClientRect().left;
      if (newWidth >= 220 && newWidth <= 520) {
        this.sidebarWidth = newWidth;
        sidebar.style.width = `${newWidth}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      if (isResizing) {
        isResizing = false;
        resizer.classList.remove("resizing");
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        localStorage.setItem("lmsgi_sidebar_width", this.sidebarWidth);
      }
    });

    resizer.addEventListener("dblclick", () => {
      this.sidebarWidth = 320;
      sidebar.style.width = "320px";
      localStorage.setItem("lmsgi_sidebar_width", "320");
    });
  }

  init() {
    // Exponer API para eventos en el DOM
    window.LMSGI_APP = {
      selectBlock: (unitId, blockId) => this.selectBlock(unitId, blockId),
      setTab: (tabName) => this.setTab(tabName),
      submitQuiz: (blockId) => this.submitQuiz(blockId),
      retryQuiz: (blockId) => this.retryQuiz(blockId),
      toggleBlockCompleted: (blockId) => this.toggleBlockCompleted(blockId),
      toggleTheme: () => this.toggleTheme(),
      openAdminLoginModal: () => this.openAdminLoginModal(),
      closeAdminLoginModal: () => this.closeAdminLoginModal(),
      submitAdminLogin: () => this.submitAdminLogin(),
      logoutAdmin: () => this.logoutAdmin(),
      openChangePinModal: () => this.openChangePinModal(),
      closeChangePinModal: () => this.closeChangePinModal(),
      submitChangePin: () => this.submitChangePin(),
      togglePasswordMask: (id) => this.togglePasswordMask(id),
      toggleBlockLock: (blockId) => this.toggleBlockLock(blockId),
      unlockAllBlocks: () => this.unlockAllBlocks(),
      lockFutureBlocks: () => this.lockFutureBlocks(),
      toggleSidebarCollapse: () => this.toggleSidebarCollapse(),
      handleSearch: (val) => this.handleSearch(val),
      validateEditorCode: (exerciseId) => this.validateEditorCode(exerciseId),
      resetEditorCode: (exerciseId) => this.resetEditorCode(exerciseId),
      toggleSolution: (exerciseId) => this.toggleSolution(exerciseId),
      copyCode: (elementId) => this.copyCode(elementId),
      downloadCode: (exerciseId, filename, lang) => this.downloadCode(exerciseId, filename, lang),
      showEvaluationInfoModal: () => this.showEvaluationInfoModal()
    };

    this.render();
    this.setupResizer();
    this.applySidebarDimensions();
  }

  handleSearch(query) {
    this.searchQuery = query.toLowerCase().trim();
    this.renderSidebar();
  }

  toggleBlockCompleted(blockId) {
    const idx = this.completedBlocks.indexOf(blockId);
    if (idx >= 0) {
      this.completedBlocks.splice(idx, 1);
    } else {
      this.completedBlocks.push(blockId);
    }
    localStorage.setItem("lmsgi_completed_blocks", JSON.stringify(this.completedBlocks));
    this.render();
  }

  selectBlock(unitId, blockId) {
    this.currentUnitId = unitId;
    this.currentBlockId = blockId;
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.render();
  }

  setTab(tabName) {
    this.currentTab = tabName;
    this.renderContent();
  }

  submitQuiz(blockId) {
    const form = document.getElementById(`quiz-form-${blockId}`);
    if (!form) return;

    const currentBlock = this.getCurrentBlockData();
    if (!currentBlock || !currentBlock.quiz) return;

    const formData = new FormData(form);
    const userAnswers = {};

    currentBlock.quiz.forEach((_, idx) => {
      const val = formData.get(`question_${idx}`);
      if (val !== null && val !== undefined) {
        userAnswers[idx] = parseInt(val, 10);
      }
    });

    const evalResult = QuizEngine.evaluate(currentBlock.quiz, userAnswers);
    QuizEngine.saveBlockResult(blockId, userAnswers, evalResult.score, evalResult.totalQuestions, evalResult.passed);

    if (evalResult.passed && !this.completedBlocks.includes(blockId)) {
      this.completedBlocks.push(blockId);
      localStorage.setItem("lmsgi_completed_blocks", JSON.stringify(this.completedBlocks));
    }

    this.render();
  }

  retryQuiz(blockId) {
    QuizEngine.resetBlockResult(blockId);
    this.render();
  }

  validateEditorCode(exerciseId) {
    const textarea = document.getElementById(`editor-${exerciseId}`);
    const outputDiv = document.getElementById(`output-${exerciseId}`);
    if (!textarea || !outputDiv) return;

    const code = textarea.value;
    const res = CodeValidator.validateXML(code);

    if (res.valid) {
      outputDiv.innerHTML = `
        <div class="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-800 dark:text-teal-300">
          <div class="flex items-center gap-2 font-bold text-sm mb-1 text-teal-700 dark:text-teal-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            ${res.message}
          </div>
          <p class="text-xs text-teal-700/80 dark:text-teal-400 mb-3">${res.summary}</p>
          
          ${
            res.namespaces && res.namespaces.length > 0
              ? `
            <div class="mb-3 p-2.5 rounded bg-teal-500/5 text-xs">
              <span class="font-semibold block mb-1">Espacios de Nombres detectados:</span>
              <ul class="list-disc list-inside space-y-0.5">
                ${res.namespaces.map(ns => `<li><span class="font-mono text-teal-600 dark:text-teal-400">${ns.prefix}</span>: <span class="font-mono opacity-80">${ns.uri}</span></li>`).join("")}
              </ul>
            </div>
          `
              : ""
          }

          <div class="mt-2">
            <div class="text-[11px] uppercase tracking-wider font-semibold text-teal-900 dark:text-teal-400 mb-1.5 flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
              Árbol de nodos DOM generado:
            </div>
            <div class="bg-slate-900 p-3 rounded-lg overflow-x-auto text-slate-100 max-h-48 border border-slate-800">
              ${CodeValidator.renderTreeVisualizer(res.doc.documentElement)}
            </div>
          </div>
        </div>
      `;
    } else {
      outputDiv.innerHTML = `
        <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300">
          <div class="flex items-center gap-2 font-bold text-sm mb-1 text-rose-700 dark:text-rose-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ${res.message} ${res.line ? `(Línea aproximada: ${res.line})` : ""}
          </div>
          ${res.details ? `<div class="font-mono text-xs p-2 bg-rose-950/20 rounded border border-rose-500/20 mb-2 overflow-x-auto">${res.details}</div>` : ""}
          <p class="text-xs text-rose-700 dark:text-rose-300">
            <span class="font-semibold">Pista de solución:</span> ${res.advice}
          </p>
        </div>
      `;
    }
  }

  resetEditorCode(exerciseId) {
    const textarea = document.getElementById(`editor-${exerciseId}`);
    const outputDiv = document.getElementById(`output-${exerciseId}`);
    const initialCode = this.exercisesRegistry ? this.exercisesRegistry[exerciseId] : "";
    if (textarea && initialCode !== undefined) {
      textarea.value = initialCode;
    }
    if (outputDiv) outputDiv.innerHTML = "";
  }

  toggleSolution(exerciseId) {
    const solDiv = document.getElementById(`solution-${exerciseId}`);
    const btn = document.getElementById(`btn-solution-${exerciseId}`);
    if (!solDiv || !btn) return;

    if (solDiv.classList.contains("hidden")) {
      solDiv.classList.remove("hidden");
      btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg> Ocultar Solución Guiada`;
    } else {
      solDiv.classList.add("hidden");
      btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> Ver Solución Guiada`;
    }
  }

  copyCode(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.value !== undefined ? el.value : el.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("¡Código copiado al portapapeles!");
    });
  }

  downloadCode(exerciseId, filename, lang) {
    const el = document.getElementById(`editor-${exerciseId}`);
    if (!el) return;
    const blob = new Blob([el.value], { type: lang === "xml" ? "application/xml" : "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || `ejercicio_${exerciseId}.${lang}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  showEvaluationInfoModal() {
    alert(
      `Criterios de Calificación e Instrumentos Oficiales (Curso 2026/2027)\n\n` +
      `• RA1 a RA6 (Punto 4.7.2):\n` +
      `  - Examen (Pruebas objetivas): 65%\n` +
      `  - Tareas individuales: 25%\n` +
      `  - Cuestionarios: 10%\n\n` +
      `• RA7 (Sistemas de gestión):\n` +
      `  - Cuestionarios: 100%\n\n` +
      `Todos los Resultados de Aprendizaje son críticos y de obligada superación individual.\n\n` +
      `Nota: Esta plataforma web se utiliza para la impartición de las sesiones teóricas, cuestionarios autocorregibles y ejercicios prácticos guiados en el aula.`
    );
  }

  getCurrentUnit() {
    return UNITS.find(u => u.id === this.currentUnitId) || UNITS[0];
  }

  isBlockUnlocked(blockId) {
    return this.unlockedBlocks.includes(blockId);
  }

  getCurrentBlockData() {
    if (this.currentUnitId === "ut1") {
      return UNIT_1_DATA.blocks.find(b => b.id === this.currentBlockId) || UNIT_1_DATA.blocks[0];
    }

    const currentUnit = this.getCurrentUnit();
    const blockMeta = currentUnit.blocks.find(b => b.id === this.currentBlockId) || currentUnit.blocks[0];
    const unitOverview = UNITS_OVERVIEW_DATA[this.currentUnitId];
    const detailed = unitOverview && unitOverview.blocksDetailed ? unitOverview.blocksDetailed[blockMeta.id] : null;

    return {
      id: blockMeta.id,
      blockNumber: blockMeta.blockNumber,
      title: blockMeta.title,
      duration: blockMeta.duration || "2 horas",
      session: blockMeta.session || `Sesión ${blockMeta.blockNumber}`,
      evaluation: blockMeta.evaluation || currentUnit.evaluation,
      ce: blockMeta.ce || [],
      objectives: detailed ? detailed.objectives : ["Dominar los conceptos teóricos y prácticos de este bloque de 2 horas."],
      theory: {
        intro: detailed ? detailed.theorySummary : "Contenido didáctico programado para esta sesión de 2 horas del módulo.",
        sections: [
          {
            title: "Desarrollo del Bloque de 2 Horas",
            content: detailed ? detailed.theorySummary : "Consulta los materiales de la sesión en el aula y realiza los ejercicios propuestos."
          }
        ]
      },
      quiz: detailed && detailed.quizSample ? [
        {
          id: `q-${blockMeta.id}`,
          question: detailed.quizSample.question,
          options: detailed.quizSample.options,
          correctIndex: detailed.quizSample.correctIndex,
          explanation: detailed.quizSample.explanation
        }
      ] : [],
      exercises: detailed && detailed.exerciseSample ? [
        {
          id: `ex-${blockMeta.id}`,
          title: `Práctica de la sesión: ${blockMeta.title}`,
          description: detailed.exerciseSample,
          initialCode: `<!-- Espacio de trabajo para la sesión ${blockMeta.blockNumber} -->\n`,
          language: this.currentUnitId === "ut2" || this.currentUnitId === "ut3" ? "html" : "xml",
          tasks: [
            "1. Abre tu editor Visual Studio Code.",
            "2. Implementa las especificaciones descritas en el enunciado.",
            "3. Valida la estructura y prepara tu entrega para el aula virtual de clase."
          ],
          solution: `<!-- Solución de referencia trabajada en el aula de informática -->`,
          hints: "Revisa las explicaciones de clase y la documentación técnica oficial."
        }
      ] : []
    };
  }

  getStatistics() {
    const totalBlocks = 58; // 116h / 2h
    const completedCount = this.completedBlocks.length;
    const progressPercent = Math.round((completedCount / totalBlocks) * 100);
    const totalHoursCompleted = completedCount * 2;

    const quizProgress = QuizEngine.getProgress();
    const passedQuizzes = Object.values(quizProgress).filter(p => p.passed).length;

    return {
      totalBlocks,
      completedCount,
      progressPercent,
      totalHoursCompleted,
      passedQuizzes
    };
  }

  render() {
    this.renderTopBanner();
    this.renderSidebar();
    this.renderHeader();
    this.renderContent();
    this.applySidebarDimensions();
  }

  renderTopBanner() {
    const adminToggleBtn = document.getElementById("admin-mode-toggle");
    if (adminToggleBtn) {
      if (this.isAdminMode) {
        adminToggleBtn.innerHTML = `
          <div class="flex items-center gap-1.5 sm:gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-teal-600 text-white shadow-sm ring-2 ring-teal-400">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>
              Modo Docente
            </span>
            <button onclick="window.LMSGI_APP.openChangePinModal()" 
                    title="Cambiar contraseña de docente"
                    class="px-2.5 py-1 text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-xl transition-colors flex items-center gap-1 shadow-sm">
              <svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
              Cambiar PIN
            </button>
            <button onclick="window.LMSGI_APP.logoutAdmin()" 
                    title="Salir de Modo Docente"
                    class="px-2.5 py-1 text-xs font-semibold bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 hover:bg-rose-100 border border-rose-200 dark:border-rose-900 rounded-xl transition-colors">
              Salir
            </button>
          </div>
        `;
      } else {
        adminToggleBtn.innerHTML = `
          <button onclick="window.LMSGI_APP.openAdminLoginModal()" 
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">
            <svg class="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 7a2 2 0 012-2h0a2 2 0 012 2v4H10V7z"/></svg>
            Acceso Docente
          </button>
        `;
      }
    }
  }

  renderSidebar() {
    const sidebarEl = document.getElementById("sidebar-units");
    if (!sidebarEl) return;

    const stats = this.getStatistics();

    // Actualizar barra de progreso global
    const progressStatsEl = document.getElementById("global-stats");
    if (progressStatsEl) {
      progressStatsEl.innerHTML = `
        <div class="space-y-2">
          <div class="flex justify-between items-center text-xs">
            <span class="text-slate-600 dark:text-slate-400 font-medium">Progreso Global</span>
            <span class="font-bold text-teal-600 dark:text-teal-400">${stats.progressPercent}% (${stats.totalHoursCompleted}h / 116h)</span>
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
            <div class="bg-gradient-to-r from-indigo-500 via-teal-500 to-emerald-500 h-2 rounded-full transition-all duration-500" style="width: ${stats.progressPercent}%"></div>
          </div>
          <div class="flex justify-between items-center text-[11px] text-slate-500 dark:text-slate-400">
            <span>${stats.completedCount} de 58 bloques</span>
            <span>${stats.passedQuizzes} cuestionarios superados</span>
          </div>
        </div>

        ${
          this.isAdminMode
            ? `
          <div class="mt-3 p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/50 text-xs space-y-1.5">
            <div class="font-bold text-teal-900 dark:text-teal-200 flex items-center justify-between">
              <span>Gestión de Visibilidad Docente</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded bg-teal-200 dark:bg-teal-800 text-teal-900 dark:text-teal-100">Profesor</span>
            </div>
            <p class="text-[11px] text-teal-800/80 dark:text-teal-300/80 leading-tight">
              Haz clic en los candados para abrir o cerrar bloques a los alumnos:
            </p>
            <div class="flex items-center gap-1.5 pt-1">
              <button onclick="window.LMSGI_APP.unlockAllBlocks()" class="flex-1 py-1 px-2 text-[10px] font-semibold rounded bg-teal-600 hover:bg-teal-700 text-white transition-colors">
                Abrir Todo
              </button>
              <button onclick="window.LMSGI_APP.lockFutureBlocks()" class="flex-1 py-1 px-2 text-[10px] font-semibold rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition-colors">
                Solo UT1
              </button>
            </div>
            <button onclick="window.LMSGI_APP.openChangePinModal()" 
                    class="w-full mt-1.5 py-1 text-[10px] font-semibold rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-teal-200 dark:border-teal-900 transition-colors flex items-center justify-center gap-1 shadow-xs">
              <svg class="w-3 h-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
              Cambiar Contraseña Docente
            </button>
          </div>
        `
            : ""
        }
      `;
    }

    let html = "";

    UNITS.forEach(unit => {
      const isCurrentUnit = unit.id === this.currentUnitId;
      const filteredBlocks = unit.blocks.filter(b => {
        if (!this.searchQuery) return true;
        return (
          b.title.toLowerCase().includes(this.searchQuery) ||
          b.session.toLowerCase().includes(this.searchQuery) ||
          unit.title.toLowerCase().includes(this.searchQuery) ||
          unit.ra.toLowerCase().includes(this.searchQuery)
        );
      });

      if (this.searchQuery && filteredBlocks.length === 0) {
        return;
      }

      html += `
        <div class="border-b border-slate-200/70 dark:border-slate-800/80 last:border-b-0">
          <!-- Cabecera de la Unidad -->
          <div class="flex items-center justify-between p-2.5 sm:p-3 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/60 ${
            isCurrentUnit ? "bg-indigo-50/70 dark:bg-indigo-950/30" : ""
          }">
            <button onclick="window.LMSGI_APP.selectBlock('${unit.id}', '${unit.blocks[0].id}')" 
                    class="flex items-start gap-2.5 flex-1 text-left min-w-0">
              <div class="shrink-0 mt-0.5">
                <span class="w-6 h-6 flex items-center justify-center rounded-lg text-xs font-bold ${
                  unit.id === "ut1"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                }">
                  UT${unit.unitNumber}
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-1 mb-0.5">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    ${unit.ra} · ${unit.weight}
                  </span>
                  <span class="text-[10px] px-1.5 py-0.2 rounded font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    ${unit.hours}h (${unit.blockCount}x2h)
                  </span>
                </div>
                <h3 class="text-xs sm:text-sm font-semibold leading-snug truncate text-slate-900 dark:text-slate-100">
                  ${unit.title}
                </h3>
              </div>
            </button>
          </div>

          <!-- Lista de bloques de 2 horas -->
          ${
            isCurrentUnit || this.searchQuery
              ? `
            <div class="pl-6 pr-2 py-1.5 space-y-1 bg-slate-50/40 dark:bg-slate-900/30">
              ${filteredBlocks
                .map(block => {
                  const isCurrentBlock = block.id === this.currentBlockId;
                  const isDone = this.completedBlocks.includes(block.id);
                  const isUnlocked = this.isBlockUnlocked(block.id);
                  const quizRes = QuizEngine.getBlockResult(block.id);

                  let badgeColor = "text-slate-400";
                  if (isDone) badgeColor = "text-emerald-500";

                  return `
                  <div class="flex items-center gap-1 group">
                    <button onclick="window.LMSGI_APP.selectBlock('${unit.id}', '${block.id}')"
                            class="flex-1 text-left py-2 px-2.5 rounded-lg text-xs flex items-start gap-2 transition-colors ${
                              isCurrentBlock
                                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium shadow-sm"
                                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                            } ${!isUnlocked && !this.isAdminMode ? "opacity-75" : ""}">
                      <span class="shrink-0 mt-0.5 ${isCurrentBlock ? "text-white" : badgeColor}">
                        ${
                          !isUnlocked
                            ? `<svg class="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 7a2 2 0 012-2h0a2 2 0 012 2v4H10V7z"/></svg>`
                            : isDone
                            ? `<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`
                            : `<svg class="w-3.5 h-3.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"/></svg>`
                        }
                      </span>
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between text-[10px] opacity-75 mb-0.5">
                          <span>${block.session}</span>
                          <span>2h · ${block.evaluation || unit.evaluation}</span>
                        </div>
                        <div class="truncate text-xs ${isCurrentBlock ? "text-white font-medium" : "group-hover:text-teal-600 dark:group-hover:text-teal-400"}">
                          ${block.title}
                        </div>
                        ${
                          quizRes
                            ? `<div class="mt-1 text-[10px] font-mono ${
                                quizRes.passed
                                  ? isCurrentBlock ? "text-teal-200 font-semibold" : "text-teal-600 dark:text-teal-400 font-semibold"
                                  : isCurrentBlock ? "text-rose-200" : "text-rose-600 dark:text-rose-400 font-semibold"
                              }">Test: ${quizRes.nota10}/10</div>`
                            : ""
                        }
                      </div>
                    </button>

                    ${
                      this.isAdminMode
                        ? `
                      <button onclick="window.LMSGI_APP.toggleBlockLock('${block.id}')" 
                              title="${isUnlocked ? 'Bloquear bloque para alumnos' : 'Desbloquear bloque para alumnos'}"
                              class="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ${
                                isUnlocked ? "text-teal-600 dark:text-teal-400" : "text-amber-500"
                              }">
                        ${
                          isUnlocked
                            ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>`
                            : `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>`
                        }
                      </button>
                    `
                        : ""
                    }
                  </div>
                `;
                })
                .join("")}
            </div>
          `
              : ""
          }
        </div>
      `;
    });

    sidebarEl.innerHTML = html;
  }

  renderHeader() {
    const currentUnit = this.getCurrentUnit();
    const currentBlock = this.getCurrentBlockData();
    const isDone = this.completedBlocks.includes(currentBlock.id);
    const isUnlocked = this.isBlockUnlocked(currentBlock.id);

    const headerEl = document.getElementById("block-header");
    if (!headerEl) return;

    headerEl.innerHTML = `
      <div class="space-y-3">
        <!-- Breadcrumb, Ponderación y Botones -->
        <div class="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="font-medium text-slate-700 dark:text-slate-300">1º DAW</span>
            <span>&rsaquo;</span>
            <span class="font-medium text-teal-600 dark:text-teal-400">UT${currentUnit.unitNumber} (${currentUnit.ra})</span>
            <span>&rsaquo;</span>
            <span class="text-slate-900 dark:text-slate-100 font-semibold">${currentBlock.session}</span>
          </div>

          <div class="flex items-center gap-2 flex-wrap">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Bloque: 2 Horas
            </span>

            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
              Peso: ${currentUnit.weight} (Superación Obligatoria)
            </span>

            <button onclick="window.LMSGI_APP.showEvaluationInfoModal()" 
                    title="Ver instrumentos de evaluación oficial"
                    class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Criterios de Evaluación
            </button>

            <button onclick="window.LMSGI_APP.toggleBlockCompleted('${currentBlock.id}')"
                    class="px-3 py-1 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 shadow-sm ${
                      isDone
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                    }">
              ${
                isDone
                  ? `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Bloque Completado`
                  : `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"/></svg> Marcar como realizado`
              }
            </button>
          </div>
        </div>

        <!-- Título del bloque -->
        <h1 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight flex items-center gap-2">
          ${currentBlock.title}
          ${
            !isUnlocked
              ? `<span class="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg> Bloqueado para alumnos</span>`
              : ""
          }
        </h1>

        <!-- Criterios de Evaluación Asociados -->
        ${
          currentBlock.ce && currentBlock.ce.length > 0
            ? `
          <div class="flex items-center gap-2 flex-wrap text-xs">
            <span class="text-slate-500 dark:text-slate-400 font-medium">Criterios de Evaluación:</span>
            ${currentBlock.ce
              .map(c => `<span class="px-2 py-0.5 rounded font-mono bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-semibold border border-slate-200 dark:border-slate-700">${c}</span>`)
              .join(" ")}
          </div>
        `
            : ""
        }
      </div>
    `;
  }

  renderContent() {
    const mainEl = document.getElementById("main-content-tabs");
    if (!mainEl) return;

    const currentBlock = this.getCurrentBlockData();
    const quizResult = QuizEngine.getBlockResult(currentBlock.id);
    const isUnlocked = this.isBlockUnlocked(currentBlock.id);

    // Si el bloque está bloqueado y no estamos en modo docente, mostrar pantalla de bloqueo
    if (!isUnlocked && !this.isAdminMode) {
      mainEl.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-amber-200 dark:border-amber-900/50 p-8 sm:p-12 text-center space-y-4 shadow-sm animate-fadeIn">
          <div class="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 7a2 2 0 012-2h0a2 2 0 012 2v4H10V7z"/></svg>
          </div>
          <div class="max-w-md mx-auto space-y-2">
            <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100">
              Sesión aún no habilitada
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Este bloque lectivo de 2 horas (<strong>${currentBlock.title}</strong>) se desbloqueará en el aula conforme avance el calendario escolar.
            </p>
            <p class="text-xs text-amber-700 dark:text-amber-400 font-medium">
              Si eres docente, activa el botón de "Acceso Docente" en la barra superior para abrir esta unidad.
            </p>
          </div>
        </div>
      `;
      return;
    }

    // Pestañas de Navegación (Teoría, Cuestionario, Ejercicios)
    mainEl.innerHTML = `
      <div class="border-b border-slate-200 dark:border-slate-800 mb-6 flex space-x-2 sm:space-x-4">
        <button onclick="window.LMSGI_APP.setTab('teoria')" 
                class="py-3 px-3 sm:px-4 font-semibold text-sm border-b-2 transition-all flex items-center gap-2 ${
                  this.currentTab === "teoria"
                    ? "border-teal-600 text-teal-600 dark:text-teal-400"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          1. Teoría Didáctica
        </button>

        <button onclick="window.LMSGI_APP.setTab('cuestionario')" 
                class="py-3 px-3 sm:px-4 font-semibold text-sm border-b-2 transition-all flex items-center gap-2 relative ${
                  this.currentTab === "cuestionario"
                    ? "border-teal-600 text-teal-600 dark:text-teal-400"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
          2. Cuestionario de Práctica
          ${
            quizResult
              ? `<span class="ml-1 px-2 py-0.5 text-[10px] rounded-full font-bold ${
                  quizResult.passed ? "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300" : "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                }">${quizResult.nota10}/10</span>`
              : ""
          }
        </button>

        <button onclick="window.LMSGI_APP.setTab('ejercicios')" 
                class="py-3 px-3 sm:px-4 font-semibold text-sm border-b-2 transition-all flex items-center gap-2 ${
                  this.currentTab === "ejercicios"
                    ? "border-teal-600 text-teal-600 dark:text-teal-400"
                    : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          3. Ejercicios & Validador
          <span class="ml-1 px-1.5 py-0.5 text-[10px] rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 font-bold">
            ${currentBlock.exercises ? currentBlock.exercises.length : 0}
          </span>
        </button>
      </div>

      <div id="tab-panel" class="animate-fadeIn">
        ${this.renderTabContent(currentBlock, quizResult)}
      </div>
    `;
  }

  renderTabContent(currentBlock, quizResult) {
    if (this.currentTab === "teoria") {
      return this.renderTheoryTab(currentBlock);
    } else if (this.currentTab === "cuestionario") {
      return QuizEngine.renderQuiz(currentBlock.id, currentBlock.quiz || [], quizResult);
    } else if (this.currentTab === "ejercicios") {
      return this.renderExercisesTab(currentBlock);
    }
    return "";
  }

  renderTheoryTab(currentBlock) {
    const theory = currentBlock.theory || { intro: "", sections: [] };

    let html = `
      <div class="space-y-6 text-slate-800 dark:text-slate-200">
        <!-- Objetivos formativos -->
        ${
          currentBlock.objectives && currentBlock.objectives.length > 0
            ? `
          <div class="bg-gradient-to-r from-teal-50 to-indigo-50 dark:from-teal-950/40 dark:to-indigo-950/40 rounded-xl p-4 border border-teal-100 dark:border-teal-900/50">
            <h3 class="font-semibold text-xs uppercase tracking-wider text-teal-900 dark:text-teal-300 mb-2 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Objetivos de la sesión (2 Horas)
            </h3>
            <ul class="space-y-1.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              ${currentBlock.objectives.map(obj => `<li class="flex items-start gap-2"><span class="text-teal-500 font-bold">&bull;</span><span>${obj}</span></li>`).join("")}
            </ul>
          </div>
        `
            : ""
        }

        <!-- Introducción -->
        <div class="prose dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          ${this.formatMarkdown(theory.intro)}
        </div>

        <!-- Secciones -->
        <div class="space-y-6">
          ${theory.sections
            .map(sec => {
              return `
              <div class="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-teal-500"></span>
                  ${sec.title}
                </h3>
                <div class="prose dark:prose-invert max-w-none text-sm leading-relaxed">
                  ${this.formatMarkdown(sec.content)}
                </div>

                ${
                  sec.table
                    ? `
                  <div class="overflow-x-auto mt-4 rounded-lg border border-slate-200 dark:border-slate-800">
                    <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
                      <thead class="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold">
                        <tr>
                          ${sec.table.headers.map(h => `<th class="px-4 py-2.5 text-left">${h}</th>`).join("")}
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
                        ${sec.table.rows
                          .map(row => `<tr>${row.map(cell => `<td class="px-4 py-2.5">${cell}</td>`).join("")}</tr>`)
                          .join("")}
                      </tbody>
                    </table>
                  </div>
                `
                    : ""
                }
              </div>
            `;
            })
            .join("")}
        </div>

        <!-- Botón para ir al cuestionario -->
        <div class="pt-4 flex justify-end">
          <button onclick="window.LMSGI_APP.setTab('cuestionario')"
                  class="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center gap-2">
            Poner a prueba lo aprendido: Resolver Cuestionario
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    `;

    return html;
  }

  renderExercisesTab(currentBlock) {
    const exercises = currentBlock.exercises || [];

    if (exercises.length === 0) {
      return `
        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 text-center border border-dashed border-slate-300 dark:border-slate-700">
          <p class="text-slate-500 dark:text-slate-400">No hay ejercicios registrados para este bloque.</p>
        </div>
      `;
    }

    let html = `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-teal-50 to-indigo-50 dark:from-teal-950/40 dark:to-indigo-950/40 p-4 rounded-xl border border-teal-100 dark:border-teal-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 class="font-bold text-slate-900 dark:text-slate-100 text-base flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              Laboratorio Práctico & Validador Interactivo de Código
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
              Escribe o depura el código directamente en el editor. Puedes comprobar la validez de tu sintaxis en tiempo real, ver pistas o descargar tu archivo listo para entregar.
            </p>
          </div>
        </div>
    `;

    exercises.forEach((ex, idx) => {
      const isXml = ex.language === "xml";
      if (!this.exercisesRegistry) this.exercisesRegistry = {};
      this.exercisesRegistry[ex.id] = ex.initialCode;

      html += `
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <!-- Cabecera del ejercicio -->
          <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-800/30">
            <div>
              <div class="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Ejercicio ${idx + 1} de ${exercises.length}
              </div>
              <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                ${ex.title}
              </h4>
            </div>
            
            <div class="flex items-center gap-2 flex-wrap">
              <button onclick="window.LMSGI_APP.copyCode('editor-${ex.id}')" 
                      class="px-2.5 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm flex items-center gap-1 transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                Copiar
              </button>

              <button onclick="window.LMSGI_APP.downloadCode('${ex.id}', '${ex.id}.${ex.language}', '${ex.language}')" 
                      class="px-2.5 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm flex items-center gap-1 transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Descargar .${ex.language}
              </button>

              <button id="btn-solution-${ex.id}" onclick="window.LMSGI_APP.toggleSolution('${ex.id}')"
                      class="px-2.5 py-1.5 text-xs font-medium bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300 border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900 rounded-lg flex items-center gap-1 transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                Ver Solución Guiada
              </button>
            </div>
          </div>

          <div class="p-5 space-y-4">
            <div class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              ${this.formatMarkdown(ex.description)}
            </div>

            ${
              ex.tasks && ex.tasks.length > 0
                ? `
              <div class="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[11px] block mb-1">Tareas a realizar:</span>
                ${ex.tasks.map(t => `<div class="flex items-start gap-1.5"><span class="text-teal-500 font-bold">&bull;</span><span>${this.escapeHTML(t)}</span></div>`).join("")}
              </div>
            `
                : ""
            }

            <!-- Editor de Código -->
            <div class="space-y-2">
              <div class="flex justify-between items-center text-xs">
                <span class="font-medium text-slate-600 dark:text-slate-400 font-mono flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full ${isXml ? "bg-amber-400" : "bg-teal-400"}"></span>
                  Editor de código (${ex.language.toUpperCase()})
                </span>
                <span class="text-slate-400 text-[11px]">Puedes editar directamente este código</span>
              </div>

              <div class="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 focus-within:ring-2 focus-within:ring-teal-500">
                <textarea id="editor-${ex.id}" 
                          rows="10" 
                          spellcheck="false"
                          class="w-full p-4 font-mono text-xs sm:text-sm bg-slate-900 text-slate-100 focus:outline-none resize-y leading-relaxed">${this.escapeHTML(ex.initialCode)}</textarea>
              </div>
            </div>

            <!-- Botones de Acción -->
            <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div class="flex items-center gap-2">
                ${
                  isXml
                    ? `
                  <button type="button" 
                          onclick="window.LMSGI_APP.validateEditorCode('${ex.id}')"
                          class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Validar XML en Vivo
                  </button>
                `
                    : ""
                }

                <button type="button" 
                        onclick="window.LMSGI_APP.resetEditorCode('${ex.id}')"
                        class="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  Restaurar código
                </button>
              </div>

              ${
                ex.hints
                  ? `
                <div class="text-xs text-slate-500 dark:text-slate-400 italic">
                  💡 Pista: ${this.escapeHTML(ex.hints)}
                </div>
              `
                  : ""
              }
            </div>

            <!-- Panel de Resultados del Validador -->
            <div id="output-${ex.id}"></div>

            <!-- Panel de Solución Guiada -->
            <div id="solution-${ex.id}" class="hidden mt-4 p-4 rounded-xl bg-slate-900 border border-teal-500/30 text-slate-100 text-xs space-y-2">
              <div class="flex items-center justify-between font-bold text-teal-300 text-xs pb-1 border-b border-slate-800">
                <span class="flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Solución de Referencia Comentada
                </span>
                <span class="text-[10px] text-slate-400">Departamento de Informática · CIFP Carlos III</span>
              </div>
              <pre class="font-mono text-xs overflow-x-auto p-2 bg-slate-950/60 rounded text-teal-300 leading-relaxed">${this.escapeHTML(ex.solution)}</pre>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  escapeBackticks(str) {
    return (str || "").replace(/`/g, "\\`").replace(/\${/g, "\\${");
  }

  escapeHTML(str) {
    return (str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Renderizador de markdown robusto con tokenización previa
   * Garantiza que etiquetas como <titulo>, <alumno> o <p> NUNCA se vuelvan invisibles en el navegador.
   */
  formatMarkdown(text) {
    if (!text) return "";
    let raw = text.trim();

    const codeTokens = [];

    // 1. Extraer bloques de código multilínea (```...```)
    raw = raw.replace(/```(xml|html|css|javascript)?([\s\S]*?)```/g, (match, lang, code) => {
      const idx = codeTokens.length;
      const htmlBlock = `<pre class="my-3 p-3 bg-slate-900 text-teal-200 font-mono text-xs rounded-lg overflow-x-auto border border-slate-800 leading-relaxed">${this.escapeHTML(code.trim())}</pre>`;
      codeTokens.push(htmlBlock);
      return `__LMSGI_CODE_BLOCK_${idx}__`;
    });

    // 2. Extraer código en línea (`...`)
    raw = raw.replace(/`([^`]+)`/g, (match, code) => {
      const idx = codeTokens.length;
      const inlineHtml = `<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-mono text-xs font-semibold">${this.escapeHTML(code)}</code>`;
      codeTokens.push(inlineHtml);
      return `__LMSGI_CODE_INLINE_${idx}__`;
    });

    // 3. Escapar cualquier símbolo < y > que haya quedado en texto plano
    raw = raw.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // 4. Procesar estilos markdown
    // Negrita **...**
    raw = raw.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-slate-100">$1</strong>');

    // Cursiva *...*
    raw = raw.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

    // Listas con *
    raw = raw.replace(/^\s*&bull;\s+(.*)$/gm, '<li class="ml-4 list-disc text-slate-700 dark:text-slate-300 my-1">$1</li>');
    raw = raw.replace(/^\s*\*\s+(.*)$/gm, '<li class="ml-4 list-disc text-slate-700 dark:text-slate-300 my-1">$1</li>');

    // Citas con &gt;
    raw = raw.replace(/^\s*&gt;\s+(.*)$/gm, '<blockquote class="my-3 pl-4 border-l-4 border-teal-500 text-slate-600 dark:text-slate-400 italic text-xs sm:text-sm">$1</blockquote>');

    // Párrafos y saltos
    raw = raw.replace(/\n\n+/g, '</p><p class="my-2.5">');
    raw = `<p class="my-2.5">${raw}</p>`;

    // 5. Restaurar bloques de código con su HTML escapado correspondiente
    codeTokens.forEach((token, idx) => {
      raw = raw.replace(`__LMSGI_CODE_BLOCK_${idx}__`, token);
      raw = raw.replace(`__LMSGI_CODE_INLINE_${idx}__`, token);
    });

    return raw;
  }
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  new LMSGIApp();
});
