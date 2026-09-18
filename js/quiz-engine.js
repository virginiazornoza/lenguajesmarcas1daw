/**
 * quiz-engine.js
 * Motor interactivo de cuestionarios con corrección instantánea, desglose de aciertos/fallos
 * y retroalimentación pedagógica con persistencia en localStorage.
 */

const STORAGE_KEY = "lmsgi_daw_quiz_progress_v1";

export class QuizEngine {
  /**
   * Carga el estado guardado de cuestionarios desde localStorage
   */
  static getProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.warn("No se pudo acceder a localStorage:", e);
      return {};
    }
  }

  /**
   * Guarda el resultado de un bloque específico
   */
  static saveBlockResult(blockId, userAnswers, score, totalQuestions, passed) {
    try {
      const progress = this.getProgress();
      progress[blockId] = {
        userAnswers,
        score,
        totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        nota10: ((score / totalQuestions) * 10).toFixed(1),
        passed,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      return progress[blockId];
    } catch (e) {
      console.warn("Error guardando progreso:", e);
      return null;
    }
  }

  /**
   * Obtiene el resultado guardado de un bloque
   */
  static getBlockResult(blockId) {
    const progress = this.getProgress();
    return progress[blockId] || null;
  }

  /**
   * Limpia el progreso de un bloque para reintentarlo
   */
  static resetBlockResult(blockId) {
    try {
      const progress = this.getProgress();
      if (progress[blockId]) {
        delete progress[blockId];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      }
    } catch (e) {
      console.warn("Error reseteando progreso:", e);
    }
  }

  /**
   * Evalúa las respuestas del usuario frente a las preguntas del cuestionario
   */
  static evaluate(questions, userAnswers) {
    let score = 0;
    const review = [];

    questions.forEach((q, index) => {
      const selected = userAnswers[index] !== undefined ? userAnswers[index] : null;
      const isCorrect = selected !== null && selected === q.correctIndex;
      if (isCorrect) score++;

      review.push({
        questionId: q.id,
        questionIndex: index,
        questionText: q.question,
        options: q.options,
        selectedIndex: selected,
        correctIndex: q.correctIndex,
        isCorrect,
        explanation: q.explanation
      });
    });

    const totalQuestions = questions.length;
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    const nota10 = totalQuestions > 0 ? ((score / totalQuestions) * 10).toFixed(1) : "0.0";
    const passed = parseFloat(nota10) >= 5.0;

    return {
      score,
      totalQuestions,
      percentage,
      nota10,
      passed,
      review
    };
  }

  /**
   * Genera el HTML interactivo del cuestionario
   */
  static renderQuiz(blockId, questions, savedResult = null) {
    if (!questions || questions.length === 0) {
      return `
        <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 text-center border border-dashed border-slate-300 dark:border-slate-700">
          <p class="text-slate-500 dark:text-slate-400">No hay preguntas de cuestionario registradas para este bloque.</p>
        </div>
      `;
    }

    const isResolved = !!savedResult;
    const userAnswers = savedResult ? savedResult.userAnswers : {};

    let html = `
      <div id="quiz-container-${blockId}" class="space-y-6">
        <!-- Encabezado del cuestionario -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-indigo-50/80 dark:bg-indigo-950/40 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
          <div>
            <h3 class="font-semibold text-indigo-950 dark:text-indigo-200 text-lg flex items-center gap-2">
              <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Cuestionario de Autoevaluación (${questions.length} preguntas)
            </h3>
            <p class="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300/80">
              Selecciona una opción por pregunta. Al pulsar en <strong>Resolver Cuestionario</strong> verás el desglose inmediato de fallos, aciertos y explicaciones.
            </p>
          </div>
          ${
            isResolved
              ? `
            <div class="flex items-center gap-3">
              <div class="px-4 py-2 rounded-lg text-center font-bold ${
                savedResult.passed
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                  : "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-800"
              }">
                <div class="text-xs uppercase tracking-wider">Calificación</div>
                <div class="text-2xl">${savedResult.nota10} <span class="text-xs font-normal">/ 10</span></div>
              </div>
              <button onclick="window.LMSGI_APP.retryQuiz('${blockId}')" 
                      class="px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Reintentar
              </button>
            </div>
          `
              : ""
          }
        </div>

        <!-- Lista de preguntas -->
        <form id="quiz-form-${blockId}" class="space-y-6">
    `;

    questions.forEach((q, qIndex) => {
      const savedAnswer = userAnswers[qIndex];
      const hasAnswered = savedAnswer !== undefined && savedAnswer !== null;
      const isCorrect = isResolved && hasAnswered && savedAnswer === q.correctIndex;
      const isIncorrect = isResolved && hasAnswered && savedAnswer !== q.correctIndex;
      const isUnanswered = isResolved && !hasAnswered;

      let cardBorder = "border-slate-200 dark:border-slate-800";
      let statusBadge = "";

      if (isResolved) {
        if (isCorrect) {
          cardBorder = "border-emerald-500 dark:border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10";
          statusBadge = `<span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            ¡Correcto! (+${(10 / questions.length).toFixed(1)} pts)
          </span>`;
        } else {
          cardBorder = "border-rose-500 dark:border-rose-500 bg-rose-50/20 dark:bg-rose-950/10";
          statusBadge = `<span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ${isUnanswered ? "No respondida" : "Incorrecto"}
          </span>`;
        }
      }

      html += `
        <div class="p-5 rounded-xl bg-white dark:bg-slate-900 border ${cardBorder} shadow-sm transition-all duration-200">
          <div class="flex items-start justify-between gap-4 mb-3">
            <h4 class="font-medium text-slate-900 dark:text-slate-100 text-base leading-snug">
              <span class="inline-block w-6 h-6 text-center text-xs font-bold leading-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mr-1.5">
                ${qIndex + 1}
              </span>
              ${q.question}
            </h4>
            ${statusBadge}
          </div>

          <div class="space-y-2.5 mt-3">
      `;

      q.options.forEach((optionText, optIndex) => {
        const optionId = `q_${blockId}_${qIndex}_${optIndex}`;
        const isSelected = savedAnswer === optIndex;
        const isThisCorrect = isResolved && optIndex === q.correctIndex;
        const isThisChosenWrong = isResolved && isSelected && !isCorrect;

        let optStyle = "border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300";

        if (isResolved) {
          if (isThisCorrect) {
            optStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium ring-1 ring-emerald-500";
          } else if (isThisChosenWrong) {
            optStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 ring-1 ring-rose-500";
          } else {
            optStyle = "opacity-60 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400";
          }
        } else if (isSelected) {
          optStyle = "border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/50 text-indigo-900 dark:text-indigo-200 font-medium ring-1 ring-indigo-500";
        }

        html += `
          <label for="${optionId}" class="flex items-center gap-3 p-3 rounded-lg border text-sm cursor-pointer transition-colors ${optStyle}">
            <input type="radio" 
                   id="${optionId}" 
                   name="question_${qIndex}" 
                   value="${optIndex}" 
                   ${isSelected ? "checked" : ""} 
                   ${isResolved ? "disabled" : ""}
                   class="w-4 h-4 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400 border-slate-300 dark:border-slate-700">
            <span class="flex-1">${optionText}</span>
            ${
              isResolved && isThisCorrect
                ? `<svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
                : ""
            }
            ${
              isResolved && isThisChosenWrong
                ? `<svg class="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`
                : ""
            }
          </label>
        `;
      });

      html += `</div>`;

      // Explicación pedagógica cuando el cuestionario se ha resuelto
      if (isResolved) {
        html += `
          <div class="mt-3.5 p-3 rounded-lg text-xs leading-relaxed ${
            isCorrect
              ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
              : "bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
          }">
            <span class="font-bold flex items-center gap-1 mb-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              ${isCorrect ? "Explicación de acierto:" : "Explicación didáctica del fallo:"}
            </span>
            ${q.explanation}
          </div>
        `;
      }

      html += `</div>`;
    });

    if (!isResolved) {
      html += `
        <div class="pt-2 flex justify-end">
          <button type="button" 
                  onclick="window.LMSGI_APP.submitQuiz('${blockId}')" 
                  class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Resolver Cuestionario y Ver Fallos
          </button>
        </div>
      `;
    }

    html += `
        </form>
      </div>
    `;

    return html;
  }
}
