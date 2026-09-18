/**
 * parser-validator.js
 * Motor interactivo de validación de sintaxis XML en tiempo real y visor HTML.
 * Diseñado específicamente para el aprendizaje de alumnos de 1º DAW.
 */

export class CodeValidator {
  /**
   * Valida un texto XML usando el DOMParser nativo del navegador.
   * Retorna un objeto con status: 'success' | 'error', mensaje explicativo y detalles.
   */
  static validateXML(xmlString) {
    if (!xmlString || !xmlString.trim()) {
      return {
        valid: false,
        type: "empty",
        message: "El editor está vacío. Escribe o pega código XML para validarlo.",
        advice: "Recuerda comenzar con el prólogo: <?xml version=\"1.0\" encoding=\"UTF-8\"?>"
      };
    }

    const trimmed = xmlString.trim();

    // 1. Verificación pedagógica rápida previa
    if (!trimmed.startsWith("<?xml") && !trimmed.startsWith("<")) {
      return {
        valid: false,
        type: "pre_check",
        message: "El código no comienza con una etiqueta XML válida ni prólogo.",
        advice: "Un documento XML debe comenzar con el prólogo '<?xml ... ?>' o con la etiqueta del elemento raíz."
      };
    }

    // 2. Comprobación mediante DOMParser
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "application/xml");
      const parserError = xmlDoc.querySelector("parsererror");

      if (parserError) {
        const errorText = parserError.textContent || parserError.innerText || "Error de sintaxis desconocido";
        const diagnosis = this.diagnoseXMLError(errorText, xmlString);
        return {
          valid: false,
          type: "syntax_error",
          rawError: errorText,
          message: diagnosis.summary,
          details: diagnosis.details,
          line: diagnosis.line,
          advice: diagnosis.advice
        };
      }

      // 3. Comprobación de que exista el elemento documento
      if (!xmlDoc.documentElement) {
        return {
          valid: false,
          type: "no_root",
          message: "No se ha encontrado ningún elemento raíz.",
          advice: "Todo documento XML debe tener un elemento raíz que envuelva a todos los demás."
        };
      }

      // 4. Si es válido, extraer información útil
      const rootName = xmlDoc.documentElement.nodeName;
      const childCount = xmlDoc.documentElement.children.length;
      const allElements = xmlDoc.getElementsByTagName("*").length;
      const namespaces = this.extractNamespaces(xmlDoc.documentElement);

      return {
        valid: true,
        type: "well_formed",
        message: "¡Excelente! El documento XML está BIEN FORMADO.",
        summary: `Elemento raíz: <${rootName}>, Total de elementos: ${allElements}, Elementos hijos directos: ${childCount}.`,
        rootName,
        childCount,
        allElements,
        namespaces,
        doc: xmlDoc
      };
    } catch (e) {
      return {
        valid: false,
        type: "exception",
        message: "Error al procesar el documento XML.",
        details: e.message,
        advice: "Revisa caracteres no válidos o comillas incompletas."
      };
    }
  }

  /**
   * Analiza el mensaje nativo del navegador y ofrece un diagnóstico pedagógico en español
   */
  static diagnoseXMLError(rawError, xmlString) {
    const errorLower = rawError.toLowerCase();
    let line = null;
    const lineMatch = rawError.match(/line\s+(\d+)/i) || rawError.match(/línea\s+(\d+)/i);
    if (lineMatch) {
      line = parseInt(lineMatch[1], 10);
    }

    let summary = "Error de sintaxis XML (Documento NO bien formado)";
    let details = rawError.split("\n")[0];
    let advice = "Revisa las reglas básicas de un documento bien formado.";

    if (errorLower.includes("mismatched tag") || errorLower.includes("does not match") || errorLower.includes("no coincide")) {
      summary = "Discrepancia en etiqueta de cierre (Mismatched Tag)";
      advice = "Comprueba que la etiqueta de cierre tenga exactamente el mismo nombre y mayúsculas/minúsculas que la de apertura (ej: <Modulo> no se cierra con </modulo>).";
    } else if (errorLower.includes("unclosed token") || errorLower.includes("not closed") || errorLower.includes("sin cerrar")) {
      summary = "Etiqueta sin cerrar o símbolo no terminado";
      advice = "Comprueba si olvidaste cerrar una etiqueta con '>' o una comilla en un atributo.";
    } else if (errorLower.includes("extra content at the end") || errorLower.includes("junk after document") || errorLower.includes("multiple root")) {
      summary = "Múltiples elementos raíz o texto fuera de la raíz";
      advice = "XML solo permite UN ÚNICO elemento raíz. Si tienes varios elementos hermanos de nivel superior, debes envolverlos dentro de una etiqueta contenedora.";
    } else if (errorLower.includes("xml declaration not at start") || errorLower.includes("prólogo")) {
      summary = "El prólogo XML debe ser la primera línea absoluta";
      advice = "No puede haber espacios ni saltos de línea antes de '<?xml version=\"1.0\" ... ?>'.";
    } else if (errorLower.includes("entity") || errorLower.includes("&")) {
      summary = "Uso indebido de carácter especial reservado (& o <)";
      advice = "En XML el carácter '&' debe escribirse como '&amp;' y el carácter '<' como '&lt;'. O bien utiliza una sección <![CDATA[ ... ]]>.";
    } else if (errorLower.includes("attribute") || errorLower.includes("quote") || errorLower.includes("comillas")) {
      summary = "Faltan comillas en el valor de un atributo";
      advice = "En XML todos los atributos deben llevar obligatoriamente su valor entre comillas dobles o simples: nombre=\"valor\".";
    }

    return { summary, details, advice, line };
  }

  /**
   * Extrae los espacios de nombres declarados en el elemento raíz
   */
  static extractNamespaces(rootElement) {
    const namespaces = [];
    if (!rootElement || !rootElement.attributes) return namespaces;
    for (let i = 0; i < rootElement.attributes.length; i++) {
      const attr = rootElement.attributes[i];
      if (attr.name === "xmlns") {
        namespaces.push({ prefix: "(por defecto)", uri: attr.value });
      } else if (attr.name.startsWith("xmlns:")) {
        namespaces.push({ prefix: attr.name.split(":")[1], uri: attr.value });
      }
    }
    return namespaces;
  }

  /**
   * Genera una representación de árbol interactiva en HTML para visualizar el XML
   */
  static renderTreeVisualizer(element, depth = 0) {
    if (!element || element.nodeType !== 1) return "";
    const indent = depth * 16;
    const tagName = element.nodeName;
    const attrs = Array.from(element.attributes || [])
      .map(a => `<span class="text-amber-400 font-mono">${a.name}</span>=<span class="text-emerald-300 font-mono">"${a.value}"</span>`)
      .join(" ");

    const hasChildren = element.children.length > 0;
    const textOnly = !hasChildren && element.textContent && element.textContent.trim().length > 0;

    let html = `<div class="font-mono text-xs py-0.5" style="padding-left: ${indent}px">`;
    html += `<span class="text-blue-400">&lt;<span class="text-indigo-300 font-semibold">${tagName}</span>${attrs ? " " + attrs : ""}`;

    if (!hasChildren && !textOnly) {
      html += ` /&gt;</span></div>`;
      return html;
    }

    html += `&gt;</span>`;

    if (textOnly) {
      const cleanText = element.textContent.trim();
      const display = cleanText.length > 50 ? cleanText.substring(0, 50) + "..." : cleanText;
      html += `<span class="text-slate-100 font-sans mx-1">${this.escapeHTML(display)}</span>`;
      html += `<span class="text-blue-400">&lt;/<span class="text-indigo-300 font-semibold">${tagName}</span>&gt;</span></div>`;
      return html;
    }

    html += `</div>`;

    for (let child of element.children) {
      html += this.renderTreeVisualizer(child, depth + 1);
    }

    html += `<div class="font-mono text-xs py-0.5" style="padding-left: ${indent}px"><span class="text-blue-400">&lt;/<span class="text-indigo-300 font-semibold">${tagName}</span>&gt;</span></div>`;
    return html;
  }

  static escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
