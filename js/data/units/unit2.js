/**
 * unit2.js
 * Unidad de Trabajo 2: Utilización de lenguajes de marcas en entornos web (HTML5 y CSS3)
 * RA2: Utiliza lenguajes de marcas para la transmisión de información a través de la web, analizando la estructura de los documentos e identificando sus elementos.
 * Ponderación: 28% (Curso 2026/2027) - 32 horas lectivas (16 bloques de 2 horas en la 1ª Evaluación)
 * 
 * Diseñado conforme a la progresión didáctica oficial y al modelo de proyecto integrador de HTML y CSS (Cena de Navidad DAW):
 * - De HTML básico a formularios y semántica.
 * - De sintaxis CSS y selectores (etiqueta, clase, ID) al Modelo de Caja.
 * - Culminación en maquetación moderna con Flexbox (display: flex, justify-content, align-items, flex-direction: column).
 * - Sin JavaScript (se aborda en la UT3).
 */

export const UNIT_2_DATA = {
  id: "ut2",
  unitNumber: 2,
  title: "Utilización de lenguajes de marcas en entornos web",
  shortTitle: "UT2: Lenguajes de marcas en entornos web (HTML5 y CSS3)",
  ra: "RA2: Utiliza lenguajes de marcas para la transmisión de información a través de la web, analizando la estructura de los documentos e identificando sus elementos.",
  hours: 32,
  weight: "28%",
  evaluation: "1ª Evaluación",
  blocks: [
    /* =========================================================================
       BLOQUE 1 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b1",
      blockNumber: 1,
      title: "Evolución de la Web: De HTML 4.01 y XHTML al estándar HTML5",
      duration: "2 horas",
      session: "Sesión 1",
      evaluation: "1ª Evaluación",
      ce: ["CE2a", "CE2d"],
      objectives: [
        "Comprender la transición histórica de la web desde el caos de versiones hasta HTML5.",
        "Analizar la divergencia entre el W3C (XHTML 2.0) y el grupo WHATWG (HTML Viviente).",
        "Conocer los principios de diseño de HTML5 y la simplificación del DOCTYPE."
      ],
      theory: {
        intro: `
          **HTML5** no es solo una revisión del lenguaje de marcado para páginas web; representó una **auténtica revolución pragmática** en la historia de Internet.
          
          Tras años de fragmentación entre las especificaciones teóricas del W3C y las necesidades reales de los desarrolladores y fabricantes de navegadores, HTML5 consolidó un estándar unificado, tolerante y enfocado a aplicaciones interactivas.
          
          > **Principio de Diseño de HTML5**:
          > *"Pavimentar los caminos ya transitados"* (*Pave the cowpaths*): estandarizar aquellas prácticas que los desarrolladores y navegadores ya utilizaban de facto, garantizando la compatibilidad hacia atrás con toda la web existente.
        `,
        sections: [
          {
            title: "1. La ruptura histórica: W3C frente a WHATWG",
            content: `
              A finales de los años 90, tras la publicación de **HTML 4.01** (1999), el consorcio **W3C** decidió que el futuro de la web pasaba por reformular HTML bajo las reglas estrictas de XML, dando lugar a **XHTML 1.0** y al fallido proyecto **XHTML 2.0**.
              
              Sin embargo, esta aproximación estricta presentaba un defecto crítico:
              * En XML, un simple error sintáctico (un corchete mal cerrado o una comilla omitida) provocaba el bloqueo absoluto del renderizado del documento (*Yellow Screen of Death*).
              * En una web viva con millones de autores humanos, esta rigidez resultaba inviable.
              
              En 2004, ingenieros de Apple, Mozilla y Opera fundaron el **WHATWG** (*Web Hypertext Application Technology Working Group*) con tres objetivos:
              1. Mantener la compatibilidad retroactiva total con la web existente.
              2. Diseñar un estándar adaptado a aplicaciones web ricas e interactivas.
              3. Gestionar los errores de forma predecible y elegante en los navegadores.
              
              Ante el éxito masivo del WHATWG, el W3C reconoció en 2007 el fracaso de XHTML 2.0 y adoptó el trabajo del WHATWG como base de lo que hoy conocemos como **HTML5**.
            `
          },
          {
            title: "2. La simplificación del DOCTYPE: adiós a las DTD de SGML",
            content: `
              En HTML 4.01 y XHTML 1.0, el prólogo del documento requería una compleja declaración de DTD (*Document Type Definition*) de SGML:
              
              \`\`\`html
              <!-- Obsoleto en HTML 4.01: Imposible de recordar y propenso a errores -->
              <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
              \`\`\`
              
              En **HTML5**, dado que el lenguaje ya no depende formalmente de SGML ni de XML, el \`DOCTYPE\` se reduce a su mínima expresión:
              
              \`\`\`html
              <!DOCTYPE html>
              \`\`\`
              
              * **¿Por qué sigue siendo necesario?**:
                * Su única misión es indicar al motor del navegador que debe renderizar la página en **modo estándar** (*standards mode*), evitando el modo de compatibilidad antiguo (*quirks mode*).
                * No distingue entre mayúsculas y minúsculas (\`<!doctype html>\` es válido), pero por convenio profesional en DAW se escribe siempre en mayúsculas: \`<!DOCTYPE html>\`.
            `
          },
          {
            title: "3. Buenas prácticas sintácticas en 1º DAW",
            content: `
              Aunque la sintaxis de HTML5 es flexible y tolerante, en el desarrollo profesional de software exigimos buenas prácticas de codificación:
              
              * Escribir todos los nombres de etiquetas y atributos en **minúsculas** (\`<header>\`, no \`<HEADER>\`).
              * Encerrar siempre el valor de los atributos entre **comillas dobles**: \`class="bloque-form"\`.
              * Declarar siempre el idioma del documento: \`<html lang="es">\`.
              * Las etiquetas vacías (*void elements* como \`<meta>\`, \`<link>\`, \`<img>\`, \`<br>\`, \`<hr>\`) no requieren cierre en HTML5, aunque pueden cerrarse con \`/>\` si se desea compatibilidad con XML.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b1-1",
          question: "¿Cuál es la función primordial de la instrucción `<!DOCTYPE html>` en HTML5?",
          options: [
            "Descargar una DTD externa desde los servidores del W3C para validar la gramática.",
            "Forzar al navegador a renderizar la página en 'Modo Estándar' (evitando el modo Quirks retroactivo).",
            "Indicar al servidor Apache que procese el archivo con el intérprete de PHP.",
            "Comprimir el archivo en formato gzip para acelerar la carga en redes móviles."
          ],
          correctIndex: 1,
          explanation: "En HTML5 no hay DTD; la declaración <!DOCTYPE html> previene el 'quirks mode' y asegura que el navegador aplique los estándares web modernos."
        },
        {
          id: "q-ut2-b1-2",
          question: "¿Qué grupo de trabajo lideró la creación de HTML5 tras la ruptura con el modelo estricto de XHTML 2.0?",
          options: [
            "WHATWG (fundado por desarrolladores de Apple, Mozilla y Opera).",
            "ISO (International Organization for Standardization).",
            "IETF (Internet Engineering Task Force).",
            "Microsoft Internet Explorer Working Group."
          ],
          correctIndex: 0,
          explanation: "El WHATWG fundado en 2004 diseñó HTML5 basándose en el pragmatismo, la compatibilidad hacia atrás y las necesidades de las aplicaciones web."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b1",
          title: "Creación de la plantilla mínima HTML5 para DAW",
          description: "Crea el esqueleto mínimo y riguroso de una página HTML5 conforme a las directrices de 1º DAW, declarando el doctype, el idioma español y la estructura esencial.",
          initialCode: `<!-- Escribe aquí la plantilla mínima HTML5 -->\n`,
          language: "html",
          tasks: [
            "1. Declara el doctype estándar de HTML5.",
            "2. Abre la etiqueta raíz <html> indicando el idioma español con el atributo lang=\"es\".",
            "3. Añade los dos elementos hijos directos esenciales: <head> y <body>.",
            "4. Dentro del <head>, define la codificación de caracteres en UTF-8 y un título descriptivo: 'Inicio · 1º DAW'."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Inicio · 1º DAW</title>
</head>
<body>
  <h1>Bienvenido a Lenguajes de Marcas</h1>
  <p>Entorno de aprendizaje web para 1º DAW.</p>
</body>
</html>`,
          hints: "El doctype debe ser la primera línea absoluta del archivo, sin espacios previos."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 2 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b2",
      blockNumber: 2,
      title: "Anatomía de un documento HTML5 y metadatos del <head>",
      duration: "2 horas",
      session: "Sesión 2",
      evaluation: "1ª Evaluación",
      ce: ["CE2b", "CE2c"],
      objectives: [
        "Dominar la función de la cabecera técnica del documento (`<head>`).",
        "Configurar metadatos esenciales: charset, author, description y viewport.",
        "Enlazar hojas de estilo externas (<link rel=\"stylesheet\">) y el favicon corporativo."
      ],
      theory: {
        intro: `
          El elemento **\`<head>\`** es el cerebro invisible de un documento web. No contiene texto que el usuario lea directamente en la página, sino **metadatos**: información sobre el propio documento que utilizan el navegador, los motores de búsqueda (SEO) y las redes sociales.
          
          En cualquier proyecto profesional o prueba técnica de DAW, la configuración pulcra del \`<head>\` es evaluable y obligatoria.
          
          > **Metadatos obligatorios en el proyecto de DAW**:
          > * Idioma del documento: \`<html lang="es">\`
          > * Codificación: \`<meta charset="UTF-8">\`
          > * Título: \`<title>Cena de Navidad DAW 2025</title>\`
          > * Autor: \`<meta name="author" content="Nombre del Alumno">\`
        `,
        sections: [
          {
            title: "1. Codificación de caracteres: UTF-8",
            content: `
              En español e idiomas con caracteres no anglosajones (tildes, eñes, aperturas de interrogación ¿), es imperativo indicar la tabla de caracteres mediante:
              
              \`\`\`html
              <meta charset="UTF-8">
              \`\`\`
              
              * Debe ser una de las **primeras etiquetas** dentro de \`<head>\` para que el navegador sepa cómo interpretar los bytes siguientes antes de procesar el título o los contenidos.
              * UTF-8 (*Unicode Transformation Format - 8 bits*) soporta prácticamente todos los caracteres y alfabetos del planeta.
            `
          },
          {
            title: "2. Metadatos de autoría, descripción y viewport móvil",
            content: `
              Mediante la etiqueta \`<meta name="..." content="...">\` aportamos información estructurada clave:
              
              * **Autoría**:
                \`\`\`html
                <meta name="author" content="Virginia Zornoza - 1º DAW">
                \`\`\`
                Indica quién ha programado o redactado la página web.
                
              * **Descripción para buscadores (SEO)**:
                \`\`\`html
                <meta name="description" content="Formulario de inscripción para la cena navideña del ciclo DAW.">
                \`\`\`
                Es el texto de resumen que Google muestra en los resultados de búsqueda.
                
              * **Adaptabilidad a móviles (Viewport)**:
                \`\`\`html
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                \`\`\`
                Indica al navegador del smartphone que ajuste el ancho virtual de la página al ancho real de la pantalla física del dispositivo (\`width=device-width\`) con un zoom inicial del 100% (\`initial-scale=1.0\`). Sin esta línea, los móviles renderizan la página alejándola como si fuera un monitor de sobremesa.
            `
          },
          {
            title: "3. Vinculación de recursos externos: Estilos y Favicon",
            content: `
              La etiqueta \`<link>\` es un elemento vacío que conecta el documento con recursos externos:
              
              * **Hoja de estilos CSS externa**:
                \`\`\`html
                <link rel="stylesheet" href="css/estilos.css">
                \`\`\`
                
              * **Icono de pestaña (Favicon)**:
                \`\`\`html
                <link rel="icon" type="image/svg+xml" href="img/favicon.svg">
                <link rel="icon" type="image/png" href="img/favicon.png">
                \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b2-1",
          question: "¿Qué metadato es indispensable para que los caracteres como 'ñ' o 'á' se muestren correctamente sin símbolos extraños?",
          options: [
            "<meta charset=\"UTF-8\">",
            "<meta name=\"idioma\" content=\"castellano\">",
            "<meta http-equiv=\"refresh\" content=\"30\">",
            "<link rel=\"language\" href=\"es\">"
          ],
          correctIndex: 0,
          explanation: "La directiva <meta charset=\"UTF-8\"> define la codificación Unicode universal en el documento."
        },
        {
          id: "q-ut2-b2-2",
          question: "En las especificaciones técnicas del proyecto: 'Tu nombre como autor de la página (metadato)'. ¿Cómo se codifica exactamente?",
          options: [
            "<meta name=\"author\" content=\"Nombre del Alumno\">",
            "<author>Nombre del Alumno</author>",
            "<link rel=\"author\" value=\"Nombre del Alumno\">",
            "<!-- autor = Nombre del Alumno -->"
          ],
          correctIndex: 0,
          explanation: "El metadato estándar de autoría en HTML5 utiliza <meta name=\"author\" content=\"...\">."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b2",
          title: "Cabecera técnica completa del Proyecto Web de Navidad",
          description: "Configura el <head> completo para el proyecto 'Cena de Navidad DAW 2025' cumpliendo con la especificación 1 del proyecto integrador.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Inserta aquí los metadatos requeridos -->
</head>
<body>
  <p>Página en construcción.</p>
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Añade el metadato charset en UTF-8.",
            "2. Define el título de la página: 'Cena de Navidad DAW 2025'.",
            "3. Añade tu nombre como autor mediante la etiqueta <meta name=\"author\" content=\"...\">.",
            "4. Añade la directiva viewport para diseño responsive.",
            "5. Enlaza una hoja de estilos externa ficticia llamada 'estilos.css'."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Alumno de 1º DAW">
  <title>Cena de Navidad DAW 2025</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <p>Página en construcción.</p>
</body>
</html>`,
          hints: "El título se escribe dentro de <title> y el autor dentro del atributo content de <meta name=\"author\">."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 3 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b3",
      blockNumber: 3,
      title: "Etiquetas semánticas estructurales de HTML5",
      duration: "2 horas",
      session: "Sesión 3",
      evaluation: "1ª Evaluación",
      ce: ["CE2b", "CE2c"],
      objectives: [
        "Reemplazar la vieja práctica del 'div-soup' por marcas semánticas nativas.",
        "Dominar la función de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`.",
        "Comprender por qué la semántica es vital para la accesibilidad (a11y) y el SEO."
      ],
      theory: {
        intro: `
          Antes de HTML5, las páginas web se maquetaban mediante divisiones genéricas anidadas sin significado: \`<div id="header">\`, \`<div class="menu">\`, \`<div class="content">\`, \`<div class="noticia">\`, \`<div id="footer">\`.
          
          Esto se conocía peyorativamente como **"div soup"** (sopa de divs). Un lector de pantalla para personas ciegas o un robot de Google no podía distinguir qué parte era el contenido principal y cuál era publicidad secundaria.
          
          HTML5 introdujo etiquetas **semánticas estructurales** que describen con precisión el rol de cada región del documento.
        `,
        sections: [
          {
            title: "1. Las etiquetas semánticas fundamentales",
            content: `
              * **\`<header>\`**:
                * Representa la cabecera introductoria de la página o de una sección/artículo.
                * Suele contener títulos (\`<h1>\`, \`<h2>\`), logotipos, eslóganes o barras de navegación.
                * *En el proyecto integrador*: Contiene el título \`<h1>Cena de Navidad DAW</h1>\` y \`<h2>Formulario de participación</h2>\` junto a la imagen navideña.
                
              * **\`<nav>\`**:
                * Agrupa enlaces de navegación primaria o secundaria del sitio web.
                * No todos los enlaces van en \`<nav>\`, solo los bloques principales de navegación.
                
              * **\`<main>\`**:
                * Contiene el **contenido central, único y principal** del documento.
                * **Regla estricta**: Solo puede existir **un único elemento \`<main>\`** por página y no puede ser hijo de \`<header>\`, \`<nav>\`, \`<article>\` ni \`<footer>\`.
                * *En el proyecto integrador*: El elemento \`<main>\` contiene el formulario de la cena.
                
              * **\`<footer>\`**:
                * Pie de página del documento o sección.
                * Contiene información de autoría, derechos de autor (*copyright*), enlaces legales y fecha.
                * *En el proyecto integrador*: Contiene el autor, la fecha y el enlace a la web de ideas navideñas.
            `
          },
          {
            title: "2. Secciones de contenido: `<article>`, `<section>` y `<aside>`",
            content: `
              * **\`<article>\`**:
                * Representa una unidad de contenido **autocontenida e independiente**, que tendría sentido por sí misma si se distribuyera aisladamente (por ejemplo, en un canal RSS o agregador).
                * *Ejemplos*: Una noticia periodística, una entrada de blog, una tarjeta de producto en una tienda.
                
              * **\`<section>\`**:
                * Representa una sección temática genérica dentro de un documento. Suele agrupar un conjunto de contenidos relacionados que comparten un encabezado propio (\`<h2>\` o \`<h3>\`).
                
              * **\`<aside>\`**:
                * Contenido complementario o tangencial al contenido principal (barras laterales, enlaces recomendados, glosarios, publicidad).
            `
          },
          {
            title: "3. Jerarquía y maquetación de una página tipo DAW",
            content: `
              Un documento HTML5 semántico canónico presenta la siguiente arquitectura limpia:
              
              \`\`\`html
              <body>
                <!-- Cabecera -->
                <header>
                  <div class="titulos-header">
                    <h1>Cena de Navidad DAW</h1>
                    <h2>Formulario de participación</h2>
                  </div>
                  <img src="navidad.webp" alt="Icono navideño">
                </header>

                <!-- Contenido principal -->
                <main>
                  <form action="procesar_cena.php" method="post">
                    <!-- Bloques del formulario -->
                  </form>
                </main>

                <!-- Pie de página -->
                <footer>
                  <p>Autor: Nombre del Alumno</p>
                  <p>Fecha: 9/12/2025</p>
                  <p>Más ideas navideñas en <a href="https://www.navidad.es">esta página</a>.</p>
                </footer>
              </body>
              \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b3-1",
          question: "¿Cuántas veces puede aparecer la etiqueta `<main>` en una misma página web?",
          options: [
            "Tantas como secciones temáticas tenga la página.",
            "Exactamente una vez por documento (debe contener el contenido central y exclusivo de la página).",
            "Dos veces: una para escritorio y otra para móviles.",
            "No hay límite, es equivalente a un `<div>`."
          ],
          correctIndex: 1,
          explanation: "La especificación HTML5 estipula que <main> debe ser único en el documento para que lectores de pantalla y buscadores identifiquen el núcleo informativo."
        },
        {
          id: "q-ut2-b3-2",
          question: "¿Qué elemento semántico es el más adecuado para envolver un bloque de autoría, fecha y enlaces al final de la página?",
          options: [
            "<bottom>",
            "<footer>",
            "<aside>",
            "<end>"
          ],
          correctIndex: 1,
          explanation: "<footer> representa el pie de página del documento o sección."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b3",
          title: "Estructura semántica del Proyecto: Header, Main y Footer",
          description: "Construye el esqueleto semántico del proyecto 'Cena de Navidad' cumpliendo con la jerarquía de etiquetas estructurales.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cena de Navidad DAW 2025</title>
</head>
<body>
  <!-- Maqueta aquí la estructura semántica con header, main y footer -->
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Dentro de <body>, crea un elemento <header>.",
            "2. En el header, añade un div con clase 'titulos-header' que contenga un <h1> y un <h2>.",
            "3. En el header, incluye una imagen ficticia 'navidad.webp' con atributo alt=\"Icono navideño\".",
            "4. Crea el elemento <main> para alojar el futuro formulario.",
            "5. Crea el elemento <footer> con el autor, la fecha y un enlace a 'https://www.navidad.es'."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cena de Navidad DAW 2025</title>
</head>
<body>
  <header>
    <div class="titulos-header">
      <h1>Cena de Navidad DAW</h1>
      <h2>Formulario de participación</h2>
    </div>
    <img src="navidad.webp" alt="Icono navideño">
  </header>

  <main>
    <!-- Aquí se integrará el formulario en los siguientes bloques -->
  </main>

  <footer>
    <p>Autor: Alumno DAW</p>
    <p>Fecha: 9/12/2025</p>
    <p>Más ideas navideñas en <a href="https://www.navidad.es" target="_blank">esta página</a>.</p>
  </footer>
</body>
</html>`,
          hints: "Recuerda separar la cabecera (<header>), el cuerpo principal (<main>) y el pie (<footer>)."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 4 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b4",
      blockNumber: 4,
      title: "Jerarquía de textos, hiperenlaces e imágenes accesibles",
      duration: "2 horas",
      session: "Sesión 4",
      evaluation: "1ª Evaluación",
      ce: ["CE2c"],
      objectives: [
        "Aplicar correctamente la jerarquía de encabezados (h1 a h6).",
        "Diferenciar entre enlaces absolutos y relativos, y dominar el atributo target=\"_blank\".",
        "Insertar imágenes accesibles con `<img>`, especificando dimensiones y texto alternativo (`alt`)."
      ],
      theory: {
        intro: `
          El contenido elemental de toda página web se asienta sobre tres pilares: **tipografía estructurada**, **enlaces hipertexto** que conectan documentos y **recursos multimedia** como imágenes.
          
          En este bloque aprenderás a aplicar las etiquetas de texto con rigor semántico y a evitar los errores típicos que restan puntuación en las pruebas de desarrollo web.
        `,
        sections: [
          {
            title: "1. Jerarquía de encabezados y párrafos",
            content: `
              * **Encabezados \`<h1>\` a \`<h6>\`**:
                * Expresan el nivel de importancia y jerarquía en el documento, **no el tamaño visual de la letra** (el tamaño se controla con CSS).
                * **Regla de oro**: Se recomienda un único \`<h1>\` por página que defina el tema principal.
                * No se deben saltar niveles jerárquicos (por ejemplo, pasar de un \`<h1>\` directamente a un \`<h3>\` sin un \`<h2>\` intermedio).
              
              * **Párrafos \`<p>\`**:
                * Agrupan bloques de texto corrido. Los navegadores aplican márgenes superior e inferior por defecto.
              
              * **Énfasis y formato semántico**:
                * \`<strong>\`: Texto de gran importancia (se renderiza en negrita por defecto).
                * \`<em>\`: Texto con énfasis de tono o voz (se renderiza en cursiva por defecto).
                * \`<code>\`: Fragmentos de código fuente en fuente monoespaciada.
                * \`<br>\`: Salto de línea forzado dentro de un párrafo (usar solo en poemas o direcciones postales, nunca para separar bloques).
                * \`<hr>\`: Cambio temático o separador horizontal de contenido.
            `
          },
          {
            title: "2. Hiperenlaces: La esencia de la Web (`<a>`)",
            content: `
              La etiqueta \`<a>\` (*anchor*) crea hipervínculos hacia otros documentos, secciones o recursos:
              
              * **Enlaces absolutos**: Apuntan a URLs completas en servidores externos.
                \`\`\`html
                <a href="https://www.navidad.es" target="_blank" rel="noopener noreferrer">Más ideas navideñas</a>
                \`\`\`
                * El atributo \`target="_blank"\` abre el enlace en una pestaña nueva del navegador.
                * Por seguridad y rendimiento, siempre que se use \`target="_blank"\` se debe incluir \`rel="noopener noreferrer"\`.
                
              * **Enlaces relativos**: Apuntan a ficheros dentro del mismo proyecto web.
                * Fichero en la misma carpeta: \`<a href="contacto.html">\`
                * Fichero en una subcarpeta: \`<a href="docs/manual.pdf">\`
                * Fichero en una carpeta superior: \`<a href="../index.html">\`
            `
          },
          {
            title: "3. Imágenes accesibles con `<img>`",
            content: `
              La etiqueta \`<img>\` es un elemento vacío (*void*) que incrusta un mapa de bits o vector:
              
              \`\`\`html
              <img src="navidad.webp" alt="Campanas y adornos navideños dorados" width="70" height="70">
              \`\`\`
              
              * **\`src\`**: Ruta al archivo de imagen (relativa o absoluta).
              * **\`alt\` (Texto Alternativo)**: **OBLIGATORIO por accesibilidad (WCAG)**. Lo leen los sintetizadores de voz para invidentes y se muestra si la imagen no carga o se rompe la ruta.
              * **\`width\` y \`height\`**: Dimensiones en píxeles. Indicar el ancho y alto intrínseco previene saltos bruscos en la maquetación (*Cumulative Layout Shift - CLS*).
              * **Formatos recomendados**:
                * **WebP** y **AVIF**: Formatos modernos de alta compresión y excelente fidelidad.
                * **SVG**: Gráficos vectoriales ideales para iconos y logotipos escalables.
                * **PNG**: Para imágenes con canal alfa (transparencia).
                * **JPG/JPEG**: Para fotografías continuas.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b4-1",
          question: "¿Por qué es estrictamente obligatorio incluir el atributo `alt` en toda etiqueta `<img>`?",
          options: [
            "Porque sin el atributo alt, el navegador no descarga la imagen.",
            "Por accesibilidad (para lectores de pantalla de personas con discapacidad visual) y para mostrar un texto si la imagen no carga.",
            "Para cambiar el color de fondo de la imagen.",
            "Para que la imagen se convierta automáticamente en un enlace."
          ],
          correctIndex: 1,
          explanation: "El atributo alt es un pilar básico de accesibilidad web (WCAG) y del estándar HTML5."
        },
        {
          id: "q-ut2-b4-2",
          question: "¿Qué atributo hace que un enlace `<a>` se abra en una nueva pestaña del navegador?",
          options: [
            "window=\"new\"",
            "target=\"_blank\"",
            "open=\"tab\"",
            "mode=\"external\""
          ],
          correctIndex: 1,
          explanation: "target=\"_blank\" indica al navegador que debe abrir el documento de destino en un nuevo contexto de navegación (pestaña o ventana)."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b4",
          title: "Cabecera con imagen y Footer con enlace externo",
          description: "Implementa la cabecera con la imagen navideña de 70x70px y el pie de página con el enlace a https://www.navidad.es tal y como pide la especificación del proyecto.",
          initialCode: `<header>
  <div class="titulos-header">
    <h1>Cena de Navidad DAW</h1>
    <h2>Formulario de participación</h2>
  </div>
  <!-- Inserta aquí la imagen navideña navidad.webp de 70x70 px -->
</header>

<footer>
  <!-- Inserta aquí autor, fecha y enlace a https://www.navidad.es -->
</footer>`,
          language: "html",
          tasks: [
            "1. En el <header>, añade la imagen 'navidad.webp' con width=\"70\", height=\"70\" y texto alt=\"Icono navideño\".",
            "2. En el <footer>, añade un párrafo con el autor ('Autor: Nombre del Alumno').",
            "3. Añade un párrafo con la fecha ('Fecha: 9/12/2025').",
            "4. Añade un párrafo con el texto 'Más ideas navideñas en ' seguido de un enlace a 'https://www.navidad.es' que abra en nueva pestaña y tenga el texto 'esta página'."
          ],
          solution: `<header>
  <div class="titulos-header">
    <h1>Cena de Navidad DAW</h1>
    <h2>Formulario de participación</h2>
  </div>
  <img src="navidad.webp" alt="Icono navideño" width="70" height="70">
</header>

<footer>
  <p>Autor: Nombre del Alumno</p>
  <p>Fecha: 9/12/2025</p>
  <p>
    Más ideas navideñas en
    <a href="https://www.navidad.es" target="_blank" rel="noopener noreferrer">esta página</a>.
  </p>
</footer>`,
          hints: "El enlace debe tener href=\"https://www.navidad.es\" y target=\"_blank\"."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 5 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b5",
      blockNumber: 5,
      title: "Listas en HTML5: Ordenadas, desordenadas y de descripción",
      duration: "2 horas",
      session: "Sesión 5",
      evaluation: "1ª Evaluación",
      ce: ["CE2c"],
      objectives: [
        "Construir listas desordenadas (`<ul>`) y listas ordenadas (`<ol>`).",
        "Implementar listas de descripción (`<dl>`, `<dt>`, `<dd>`) para glosarios y fichas técnicas.",
        "Anidar listas de forma semánticamente válida para barras de navegación."
      ],
      theory: {
        intro: `
          Las listas son una de las herramientas de marcado más potentes de HTML. No solo se usan para enumerar elementos de texto, sino que constituyen la **estructura semántica sobre la que se construyen los menús de navegación**, barras laterales y catálogos en cualquier aplicación web.
        `,
        sections: [
          {
            title: "1. Listas desordenadas (`<ul>`) y ordenadas (`<ol>`)",
            content: `
              * **Listas desordenadas (\`<ul>\`)**:
                * Se utilizan cuando el orden de los elementos no altera su significado.
                * Cada elemento se encierra en un elemento de lista: \`<li>\` (*list item*).
                \`\`\`html
                <ul>
                  <li>Módulo de Lenguajes de Marcas</li>
                  <li>Módulo de Programación</li>
                  <li>Módulo de Bases de Datos</li>
                </ul>
                \`\`\`
                
              * **Listas ordenadas (\`<ol>\`)**:
                * Se utilizan cuando la secuencia u orden numérico o alfabético es significativo (recetas, instrucciones paso a paso, clasificaciones).
                * Atributos útiles:
                  * \`start="5"\`: Comienza a numerar en el 5.
                  * \`reversed\`: Numera en sentido descendente (cuenta atrás).
                  * \`type="A|a|I|i|1"\`: Tipo de numeración (alfabética mayúscula/minúscula, romana o arábiga).
            `
          },
          {
            title: "2. Listas de descripción (`<dl>`, `<dt>`, `<dd>`)",
            content: `
              A menudo necesitamos representar pares de **término y definición**, o pares clave-valor (por ejemplo, especificaciones de un producto o glosarios técnicos):
              
              \`\`\`html
              <dl>
                <dt>HTML5</dt>
                <dd>Lenguaje de marcado estándar para la estructura de páginas web.</dd>
                
                <dt>CSS3</dt>
                <dd>Lenguaje de hojas de estilo para la presentación visual.</dd>
                
                <dt>Flexbox</dt>
                <dd>Módulo de maquetación unidimensional para distribuir espacio y alinear elementos.</dd>
              </dl>
              \`\`\`
              * \`<dl>\`: *Description List* (contenedor principal).
              * \`<dt>\`: *Description Term* (el término o concepto a definir).
              * \`<dd>\`: *Description Details* (la explicación o valor del término).
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b5-1",
          question: "¿Qué conjunto de etiquetas es el adecuado para crear una lista de especificaciones técnicas con términos y definiciones?",
          options: [
            "<dl>, <dt> y <dd>",
            "<ul>, <li> y <p>",
            "<ol>, <li> y <span>",
            "<table>, <tr> y <td>"
          ],
          correctIndex: 0,
          explanation: "<dl> (Description List), <dt> (Description Term) y <dd> (Description Details) forman la estructura semántica nativa para pares término-descripción."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b5",
          title: "Menú de platos navideños mediante listas",
          description: "Crea la estructura del menú navideño utilizando listas de descripción y listas desordenadas.",
          initialCode: `<!-- Crea aquí las listas requeridas -->\n`,
          language: "html",
          tasks: [
            "1. Crea una lista desordenada <ul> con 3 platos principales: 'Pavo asado', 'Lasaña tradicional' y 'Pescado al horno'.",
            "2. Debajo, crea una lista de descripción <dl> con los alérgenos: término 'Gluten' con definición 'Presente en la lasaña', y término 'Pescado' con definición 'En plato de lubina'."
          ],
          solution: `<ul>
  <li>Pavo asado</li>
  <li>Lasaña tradicional</li>
  <li>Pescado al horno</li>
</ul>

<dl>
  <dt>Gluten</dt>
  <dd>Presente en la lasaña tradicional.</dd>
  <dt>Pescado</dt>
  <dd>Presente en el plato de lubina al horno.</dd>
</dl>`,
          hints: "Cada <li> va dentro de un <ul>, y los <dt> y <dd> van dentro del contenedor <dl>."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 6 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b6",
      blockNumber: 6,
      title: "Tablas en HTML5: Estructura semántica, agrupaciones y accesibilidad",
      duration: "2 horas",
      session: "Sesión 6",
      evaluation: "1ª Evaluación",
      ce: ["CE2c"],
      objectives: [
        "Comprender la regla de oro: tablas exclusivamente para datos tabulares, nunca para maquetar.",
        "Construir tablas semánticas completas con `<caption>`, `<thead>`, `<tbody>` y `<tfoot>`.",
        "Dominar la combinación de celdas mediante colspan (horizontal) y rowspan (vertical)."
      ],
      theory: {
        intro: `
          Durante los primeros años de la web (década de 1990 y principios de los 2000), las tablas se utilizaban de manera errónea para colocar elementos en la pantalla.
          
          Hoy en día, **está terminantemente prohibido maquetar con tablas**. Las tablas existen con un único y legítimo propósito: **representar datos bidimensionales en filas y columnas** (horarios, calendarios, tarifas, resultados deportivos).
        `,
        sections: [
          {
            title: "1. Estructura semántica de una tabla accesible",
            content: `
              Una tabla profesional en HTML5 se organiza en bloques lógicos:
              
              \`\`\`html
              <table>
                <!-- Título o descripción accesible de la tabla -->
                <caption>Distribución de Horas y RAs de 1º DAW</caption>
                
                <!-- Cabecera de columnas -->
                <thead>
                  <tr>
                    <th scope="col">Unidad de Trabajo</th>
                    <th scope="col">Horas</th>
                    <th scope="col">Ponderación</th>
                  </tr>
                </thead>
                
                <!-- Cuerpo de datos -->
                <tbody>
                  <tr>
                    <td>UT1: Características de marcas</td>
                    <td>8h</td>
                    <td>7%</td>
                  </tr>
                  <tr>
                    <td>UT2: Marcas en entornos web</td>
                    <td>32h</td>
                    <td>28%</td>
                  </tr>
                </tbody>
                
                <!-- Pie o totales -->
                <tfoot>
                  <tr>
                    <td>Total 1ª Evaluación (parcial)</td>
                    <td>40h</td>
                    <td>35%</td>
                  </tr>
                </tfoot>
              </table>
              \`\`\`
              
              * \`<th>\` (*table header*): Celda de encabezado. El texto aparece centrado y en negrita por defecto.
              * \`scope="col"\` o \`scope="row"\`: Atributo de accesibilidad que indica si el encabezado aplica a toda la columna o a toda la fila.
              * \`<td>\` (*table data*): Celda de datos estándar.
            `
          },
          {
            title: "2. Fusión y expansión de celdas: colspan y rowspan",
            content: `
              * **\`colspan="N"\`** (*column span*):
                * Hace que una celda se expanda horizontalmente ocupando el espacio de **N columnas** contiguas.
                * *Ejemplo*: \`<td colspan="2">Dato que ocupa dos columnas</td>\`
                
              * **\`rowspan="N"\`** (*row span*):
                * Hace que una celda se expanda verticalmente ocupando el espacio de **N filas** hacia abajo.
                * *Ejemplo*: \`<td rowspan="3">Turno de Mañana (3 sesiones)</td>\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b6-1",
          question: "¿Qué atributo se utiliza para que una celda ocupe el ancho equivalente a 3 columnas contiguas?",
          options: [
            "colspan=\"3\"",
            "rowspan=\"3\"",
            "width=\"3col\"",
            "span=\"3\""
          ],
          correctIndex: 0,
          explanation: "colspan (column span) expande la celda horizontalmente a través de varias columnas."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b6",
          title: "Tabla de precios del Menú Navideño con colspan",
          description: "Crea una tabla semántica con cabecera y una fila final de total que fusione 2 columnas con colspan.",
          initialCode: `<!-- Diseña la tabla de precios -->\n`,
          language: "html",
          tasks: [
            "1. Crea una tabla con caption 'Presupuesto Cena de Navidad'.",
            "2. Define thead con dos columnas: 'Concepto' y 'Precio'.",
            "3. En tbody, añade 'Menú completo' con precio '35 €' y 'Bebidas' con precio '10 €'.",
            "4. En tfoot, añade una fila donde una celda con colspan=\"2\" indique 'Total por asistente: 45 €'."
          ],
          solution: `<table>
  <caption>Presupuesto Cena de Navidad</caption>
  <thead>
    <tr>
      <th scope="col">Concepto</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Menú completo</td>
      <td>35 €</td>
    </tr>
    <tr>
      <td>Bebidas</td>
      <td>10 €</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total por asistente: 45 €</td>
    </tr>
  </tfoot>
</table>`,
          hints: "El atributo colspan se coloca directamente en el <td> del tfoot."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 7 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b7",
      blockNumber: 7,
      title: "Formularios Web I: Estructura, métodos HTTP y campos de texto y selección",
      duration: "2 horas",
      session: "Sesión 7",
      evaluation: "1ª Evaluación",
      ce: ["CE2c"],
      objectives: [
        "Construir formularios accesibles con la etiqueta `<form>`.",
        "Diferenciar entre los métodos HTTP GET y POST.",
        "Vincular etiquetas <label for=\"id\"> con campos de texto (<input type=\"text\">), radio buttons y checkboxes."
      ],
      theory: {
        intro: `
          Los **formularios web** constituyen el canal de comunicación interactivo por excelencia entre el usuario y el servidor. Mediante formularios, un usuario se autentica, compra productos o responde a encuestas.
          
          En este bloque aprenderás a construir los elementos requeridos en las especificaciones 3, 4 y 5 del proyecto integrador: el envío mediante método POST, campos de texto con longitud máxima, radio buttons agrupados y casillas de verificación.
        `,
        sections: [
          {
            title: "1. La etiqueta `<form>`: action y method (GET vs POST)",
            content: `
              El contenedor principal es \`<form>\`:
              
              \`\`\`html
              <form action="procesar_cena.php" method="post">
              \`\`\`
              
              * **\`action\`**: La URL o ruta del script del servidor que procesará los datos recibidos (ej: un script en PHP, NodeJS o Java).
              * **\`method\`**: El verbo HTTP utilizado para enviar la información:
                * **\`GET\`**: Los datos se concatenan de forma visible en la URL (\`pagina.php?nombre=Juan&plato=pavo\`).
                  * *Uso*: Consultas, filtros y búsquedas que pueden guardarse en marcadores.
                  * *Peligro*: **Nunca usar para contraseñas ni datos sensibles**.
                * **\`POST\`**: Los datos viajan ocultos en el cuerpo (*body*) de la petición HTTP.
                  * *Uso*: Envío de formularios con cambios de estado, contraseñas, subida de ficheros y peticiones del proyecto (\`method="post"\`).
            `
          },
          {
            title: "2. Accesibilidad obligatoria: <label for=\"id\"> y el atributo name",
            content: `
              Cada campo de entrada de datos debe ir acompañado de una etiqueta descriptiva:
              
              \`\`\`html
              <label for="nombre">Nombre completo:</label>
              <input type="text" id="nombre" name="nombre" maxlength="50">
              \`\`\`
              
              * **\`id\`**: Identificador único en el documento. Sirve para enlazar el \`<label for="nombre">\` y para aplicar estilos CSS o JavaScript. Al hacer clic en el texto del label, el cursor salta automáticamente al campo.
              * **\`name\`**: **La clave que recibe el servidor**. Si un input no tiene atributo \`name\`, el navegador **no envía ese dato al pulsar enviar**.
              * **\`maxlength="50"\`**: Limita la entrada a un máximo de 50 caracteres (especificación 5 del proyecto).
            `
          },
          {
            title: "3. Radio buttons y Checkboxes",
            content: `
              * **Radio buttons (\`<input type="radio">\`)**:
                * Se utilizan para **selección exclusiva** (elegir una única opción entre varias posibles).
                * **Regla fundamental**: Para que sean mutuamente excluyentes, todos los radios del grupo **deben compartir exactamente el mismo atributo \`name\`**:
                
                \`\`\`html
                <p>Plato favorito para la cena:</p>
                <div class="opciones-plato">
                  <label>
                    <input type="radio" name="plato" value="pavo"> Pavo asado
                  </label>
                  <label>
                    <input type="radio" name="plato" value="lasaña"> Lasaña
                  </label>
                  <label>
                    <input type="radio" name="plato" value="pescado"> Pescado al horno
                  </label>
                </div>
                \`\`\`
                * Cada radio debe tener un atributo \`value\` que indica qué texto se enviará al servidor cuando esté seleccionado.
                
              * **Casilla de verificación (\`<input type="checkbox">\`)**:
                * Se utiliza para confirmaciones booleanas (sí/no) o selecciones múltiples:
                \`\`\`html
                <label>
                  <input type="checkbox" name="confirmacion" value="si"> Confirmo que asistiré a la cena
                </label>
                \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b7-1",
          question: "¿Por qué los tres radio buttons de los platos deben tener el mismo atributo `name=\"plato\"`?",
          options: [
            "Para que compartan el mismo color en pantalla.",
            "Para que formen un grupo mutuamente excluyente y el usuario solo pueda elegir uno a la vez.",
            "Para que se envíen los tres simultáneamente al servidor.",
            "Es un requerimiento exclusivo de navegadores antiguos."
          ],
          correctIndex: 1,
          explanation: "En HTML, los radio buttons que comparten el mismo atributo 'name' pertenecen al mismo grupo y solo uno de ellos puede estar marcado a la vez."
        },
        {
          id: "q-ut2-b7-2",
          question: "¿Qué atributo de `<input type=\"text\">` restringe la longitud a un máximo de 50 caracteres según el proyecto?",
          options: [
            "length=\"50\"",
            "maxlength=\"50\"",
            "size=\"50\"",
            "limit=\"50\""
          ],
          correctIndex: 1,
          explanation: "maxlength=\"50\" impide al usuario teclear más de 50 caracteres en el campo de texto."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b7",
          title: "Primer bloque del formulario del proyecto: Datos del asistente",
          description: "Construye el bloque 1 del formulario con h3, label, input de texto con maxlength=\"50\" y los 3 radio buttons.",
          initialCode: `<form action="procesar_cena.php" method="post">
  <!-- Construye aquí la 1ª parte del formulario -->
</form>`,
          language: "html",
          tasks: [
            "1. Crea un contenedor <div class=\"bloque-form\" id=\"datos-personales\">.",
            "2. Añade un <h3> con el texto 'Datos del asistente'.",
            "3. Añade <label for=\"nombre\">Nombre completo:</label> seguido de <input type=\"text\" id=\"nombre\" name=\"nombre\" maxlength=\"50\">.",
            "4. Añade un párrafo <p> con 'Plato favorito para la cena:'.",
            "5. Crea un <div class=\"opciones-plato\"> con 3 radio buttons con name=\"plato\" para: 'Pavo asado' (value=\"pavo\"), 'Lasaña' (value=\"lasaña\") y 'Pescado al horno' (value=\"pescado\")."
          ],
          solution: `<form action="procesar_cena.php" method="post">
  <div class="bloque-form" id="datos-personales">
    <h3>Datos del asistente</h3>
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" maxlength="50">

    <p>Plato favorito para la cena:</p>
    <div class="opciones-plato">
      <label>
        <input type="radio" name="plato" value="pavo"> Pavo asado
      </label>
      <label>
        <input type="radio" name="plato" value="lasaña"> Lasaña
      </label>
      <label>
        <input type="radio" name="plato" value="pescado"> Pescado al horno
      </label>
    </div>
  </div>
</form>`,
          hints: "Asegúrate de que cada radio esté envuelto en su propio <label> para facilitar el clic del usuario."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 8 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b8",
      blockNumber: 8,
      title: "Formularios Web II: Áreas de texto, botones y validaciones nativas HTML5",
      duration: "2 horas",
      session: "Sesión 8",
      evaluation: "1ª Evaluación",
      ce: ["CE2c"],
      objectives: [
        "Manejar áreas de texto multilínea (<textarea rows=\"5\">).",
        "Implementar botones de tipo submit y reset (<input type=\"submit\"> e <input type=\"reset\">).",
        "Aplicar atributos de validación nativa HTML5: required, pattern, min, max."
      ],
      theory: {
        intro: `
          Completamos el estudio de los formularios web abordando la entrada de texto multilínea para comentarios u observaciones, la botonera de envío y reseteo, y el sistema de validaciones en cliente que ofrece HTML5 sin necesidad de escribir código JavaScript.
        `,
        sections: [
          {
            title: "1. Áreas de texto multilínea (`<textarea>`)",
            content: `
              A diferencia de \`<input>\`, la etiqueta \`<textarea>\` **no es un elemento vacío**; tiene etiqueta de apertura y de cierre:
              
              \`\`\`html
              <label for="comentarios">Comentarios (alergias, peticiones especiales):</label>
              <textarea id="comentarios" name="comentarios" rows="5">Observaciones</textarea>
              \`\`\`
              
              * **\`rows="5"\`**: Define la altura visible inicial en número de líneas de texto (especificación 6 del proyecto).
              * **\`cols="30"\`**: Define la anchura visible inicial en número medio de caracteres por línea (aunque en diseño moderno se suele controlar con CSS: \`width: 100%\`).
              * El texto inicial se coloca **entre la etiqueta de apertura y la de cierre**: cualquier espacio o salto de línea entre \`<textarea>\` y \`</textarea>\` se mostrará literalmente al usuario.
            `
          },
          {
            title: "2. Botones de acción: submit y reset",
            content: `
              En los requisitos técnicos del proyecto se solicita expresamente: *"3ª parte: 2 botones, submit y reset. Centrados, bordes redondeados. Otro color en hover"*:
              
              \`\`\`html
              <div class="botones-form">
                <input type="submit" value="Enviar formulario">
                <input type="reset" value="Borrar datos">
              </div>
              \`\`\`
              
              * **\`<input type="submit">\`**: Envía los datos del formulario al script indicado en el atributo \`action\`.
              * **\`<input type="reset">\`**: Devuelve todos los campos del formulario a sus valores iniciales por defecto.
              * El atributo \`value="..."\` determina el texto que aparece serigrafiado sobre el botón.
            `
          },
          {
            title: "3. Validaciones nativas en HTML5",
            content: `
              HTML5 introdujo atributos nativos de validación que el navegador comprueba automáticamente antes de enviar la petición:
              
              * **\`required\`**: El campo no puede dejarse en blanco.
              * **\`type="email"\`**: Valida que el texto introducido tenga formato de correo electrónico (\`usuario@dominio.com\`).
              * **\`type="number"\`**: Admite solo números con límites \`min="..."\` y \`max="..."\`.
              * **\`pattern="[0-9]{8}[A-Za-z]"\`**: Expresión regular para validar formatos específicos como un DNI español.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b8-1",
          question: "¿Cómo se define el texto inicial predeterminado en un elemento `<textarea>`?",
          options: [
            "Con el atributo value=\"texto\".",
            "Escribiéndolo entre la etiqueta de apertura `<textarea>` y la de cierre `</textarea>`.",
            "Con el atributo placeholder=\"texto\".",
            "Mediante la propiedad text=\"texto\"."
          ],
          correctIndex: 1,
          explanation: "<textarea> no utiliza el atributo value para su contenido inicial, sino el texto contenido entre <textarea> y </textarea>."
        },
        {
          id: "q-ut2-b8-2",
          question: "¿Qué acción ejecuta un botón `<input type=\"reset\">` en un formulario?",
          options: [
            "Envía el formulario por segunda vez al servidor.",
            "Borra o restablece todos los campos del formulario a sus valores originales.",
            "Cierra la pestaña actual del navegador.",
            "Borra la base de datos MySQL."
          ],
          correctIndex: 1,
          explanation: "type=\"reset\" restaura el formulario a su estado original inicial, limpiando el texto tecleado por el usuario."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b8",
          title: "Bloque 2 y 3 del formulario: Observaciones y Botonera",
          description: "Implementa el bloque de observaciones (textarea y checkbox) y la botonera (submit y reset).",
          initialCode: `<!-- Bloque 2: Observaciones -->
<!-- Bloque 3: Botonera -->`,
          language: "html",
          tasks: [
            "1. Crea el contenedor <div class=\"bloque-form\" id=\"observaciones\">.",
            "2. Añade un <h3> con 'Observaciones'.",
            "3. Añade el label 'Comentarios (alergias, peticiones especiales):' asociado al textarea con id=\"comentarios\".",
            "4. Añade <textarea id=\"comentarios\" name=\"comentarios\" rows=\"5\">Observaciones</textarea>.",
            "5. Añade el checkbox <input type=\"checkbox\" name=\"confirmacion\" value=\"si\"> con el texto 'Confirmo que asistiré a la cena'.",
            "6. Debajo del formulario, añade <div class=\"botones-form\"> con los inputs submit ('Enviar formulario') y reset ('Borrar datos')."
          ],
          solution: `<div class="bloque-form" id="observaciones">
  <h3>Observaciones</h3>
  <label for="comentarios">Comentarios (alergias, peticiones especiales):</label>
  <textarea id="comentarios" name="comentarios" rows="5">Observaciones</textarea>
  <label>
    <input type="checkbox" name="confirmacion" value="si">
    Confirmo que asistiré a la cena
  </label>
</div>

<div class="botones-form">
  <input type="submit" value="Enviar formulario">
  <input type="reset" value="Borrar datos">
</div>`,
          hints: "El textarea debe tener rows=\"5\" y el texto inicial 'Observaciones' entre sus etiquetas."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 9 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b9",
      blockNumber: 9,
      title: "Multimedia en la Web: Audio, vídeo e incrustaciones iframe",
      duration: "2 horas",
      session: "Sesión 9",
      evaluation: "1ª Evaluación",
      ce: ["CE2c"],
      objectives: [
        "Incrustar vídeo nativo con `<video>`, controles y múltiples fuentes `<source>`.",
        "Reproducir audio accesible con `<audio>`.",
        "Integrar contenido externo seguro mediante `<iframe>` con sandboxing."
      ],
      theory: {
        intro: `
          Antes de HTML5, reproducir un archivo de audio o vídeo en un navegador requería plugins externos propietarios como Adobe Flash Player o Silverlight.
          
          HTML5 estandarizó la reproducción multimedia nativa mediante los elementos **\`<video>\`** y **\`<audio>\`**, optimizando la velocidad, la seguridad y la duración de la batería en dispositivos móviles.
        `,
        sections: [
          {
            title: "1. Reproducción de vídeo nativo con `<video>`",
            content: `
              \`\`\`html
              <video controls width="640" height="360" poster="img/caratula.jpg">
                <source src="video/spot_daw.mp4" type="video/mp4">
                <source src="video/spot_daw.webm" type="video/webm">
                <p>Tu navegador no soporta vídeo HTML5. <a href="video/spot_daw.mp4">Descargar vídeo</a>.</p>
              </video>
              \`\`\`
              
              * **\`controls\`**: Muestra la barra de reproducción nativa (play/pausa, barra de progreso, volumen, pantalla completa).
              * **\`poster\`**: Imagen de portada fija que se muestra antes de pulsar play.
              * **Múltiples \`<source>\`**: Permiten ofrecer códecs alternativos (MP4 H.264 para compatibilidad universal, WebM para formato libre y ligero). El navegador descarga el primero que soporte.
            `
          },
          {
            title: "2. Incrustaciones externas seguras con `<iframe>`",
            content: `
              Un \`<iframe>\` (*inline frame*) permite incrustar otro documento HTML independiente dentro de la página actual (por ejemplo, un mapa de Google Maps o un vídeo de YouTube):
              
              \`\`\`html
              <iframe src="https://www.google.com/maps/embed?..." width="600" height="450" title="Ubicación CIFP Carlos III" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>
              \`\`\`
              * **\`title\`**: Obligatorio por accesibilidad para describir el contenido del marco.
              * **\`sandbox\`**: Medida de seguridad que aísla el contenido incrustado, impidiendo que ejecute scripts maliciosos o abra ventanas emergentes no deseadas.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b9-1",
          question: "¿Por qué se colocan varias etiquetas `<source>` dentro de un elemento `<video>`?",
          options: [
            "Para ofrecer diferentes formatos y códecs alternativos para que el navegador reproduzca el primero que soporte.",
            "Para reproducir varios vídeos simultáneamente en mosaico.",
            "Para cargar subtítulos en diferentes idiomas.",
            "Para acelerar la velocidad de fotogramas."
          ],
          correctIndex: 0,
          explanation: "La etiqueta <video> evalúa las fuentes en orden secuencial y reproduce el primer formato soportado nativamente por el navegador."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b9",
          title: "Vídeo corporativo con poster y controles",
          description: "Crea un reproductor de vídeo accesible con carátula y dos fuentes de vídeo.",
          initialCode: `<!-- Inserta aquí el elemento video -->\n`,
          language: "html",
          tasks: [
            "1. Crea un elemento <video> con atributos controls, width=\"480\" y poster=\"portada.webp\".",
            "2. Añade dos etiquetas <source> para 'video.mp4' (type=\"video/mp4\") y 'video.webm' (type=\"video/webm\").",
            "3. Añade un mensaje alternativo para navegadores sin soporte."
          ],
          solution: `<video controls width="480" poster="portada.webp">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <p>Tu navegador no admite reproducción de vídeo HTML5.</p>
</video>`,
          hints: "El atributo controls es un atributo booleano que no necesita valor."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 10 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b10",
      blockNumber: 10,
      title: "Introducción a CSS3: Sintaxis, formas de inclusión y selectores básicos",
      duration: "2 horas",
      session: "Sesión 10",
      evaluation: "1ª Evaluación",
      ce: ["CE2g", "CE2h"],
      objectives: [
        "Comprender la separación de capas: estructura (HTML) frente a presentación (CSS).",
        "Comparar formas de inclusión: externa (`<link>`), interna (`<style>`) y en línea (`style=`).",
        "Dominar los selectores elementales: de etiqueta, de clase (.) y de identificador (#)."
      ],
      theory: {
        intro: `
          **CSS** (*Cascading Style Sheets* - Hojas de Estilo en Cascada) es el lenguaje que dota de vida, color, tipografía y distribución espacial al esqueleto HTML.
          
          En la especificación 9 del proyecto integrador se exige taxativamente: *"En CSS se hace uso de selectores a nivel de identificador, de clase y de etiqueta"*. En este bloque dominarás con precisión quirúrgica cada uno de estos selectores.
        `,
        sections: [
          {
            title: "1. Las tres formas de aplicar CSS a un documento",
            content: `
              1. **Hoja de estilos externa (\`<link rel="stylesheet">\`)**:
                 * La hoja CSS se escribe en un archivo independiente (\`.css\`) y se vincula en el \`<head>\`.
                 * **Ventajas**: Reutilización de estilos en múltiples páginas, mantenimiento centralizado y caché de navegador. Es la **forma estándar profesional**.
                 
              2. **Hoja de estilos interna (\`<style>\`)**:
                 * Las reglas CSS se escriben dentro de la etiqueta \`<style>\` en el \`<head>\` de la página.
                 * Muy habitual en ejercicios, pruebas rápidas y en el propio proyecto integrador.
                 
              3. **Estilos en línea (\`style="..."\`)**:
                 * Se escriben directamente como atributo de una etiqueta HTML: \`<p style="color: red;">\`.
                 * **Mala práctica**: Mezcla diseño con estructura y es muy difícil de mantener. Evitar en 1º DAW salvo casos excepcionales.
            `
          },
          {
            title: "2. Anatomía de una regla CSS y comentarios",
            content: `
              Una regla CSS consta de un **selector**, seguido de un bloque de declaraciones entre llaves:
              
              \`\`\`css
              /* Comentario en CSS: se delimita con barra-asterisco */
              selector {
                propiedad: valor;
                otra-propiedad: otro-valor;
              }
              \`\`\`
            `
          },
          {
            title: "3. Los 3 selectores esenciales del Proyecto",
            content: `
              * **1. Selector de Tipo o Etiqueta**:
                * Apunta a todos los elementos HTML con ese nombre de etiqueta.
                \`\`\`css
                body {
                  font-family: Verdana, sans-serif;
                  margin: 0 30px;
                }
                header, footer {
                  background-color: #c62828;
                  color: #fff;
                  padding: 15px;
                }
                a {
                  color: #fff59d;
                  text-decoration: none;
                }
                \`\`\`
                
              * **2. Selector de Clase (se prefija con punto \`.\`)**:
                * Apunta a todos los elementos que tengan ese nombre en su atributo \`class="..."\`. Puede aplicarse a múltiples elementos en la misma página.
                \`\`\`css
                .bloque-form {
                  width: 50%;
                  background-color: #2e7d32;
                  border-radius: 10px;
                  padding: 15px;
                  color: #faf5f2;
                }
                .botones-form {
                  margin: 20px;
                  text-align: center;
                }
                \`\`\`
                
              * **3. Selector de Identificador (se prefija con almohadilla \`#\`)**:
                * Apunta al elemento único que tiene ese valor en su atributo \`id="..."\`.
                \`\`\`css
                #observaciones textarea {
                  width: 100%;
                  margin: 10px auto;
                  color: rgb(70, 69, 69);
                }
                \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b10-1",
          question: "¿Cómo se escribe un selector CSS que aplique estilos a todos los elementos con la clase 'bloque-form'?",
          options: [
            "#bloque-form { ... }",
            ".bloque-form { ... }",
            "bloque-form { ... }",
            "$bloque-form { ... }"
          ],
          correctIndex: 1,
          explanation: "Los selectores de clase en CSS se prefijan con un punto (.nombre-clase)."
        },
        {
          id: "q-ut2-b10-2",
          question: "¿Qué selector CSS tiene como objetivo un elemento concreto con id=\"observaciones\"?",
          options: [
            "#observaciones { ... }",
            ".observaciones { ... }",
            "id(observaciones) { ... }",
            "@observaciones { ... }"
          ],
          correctIndex: 0,
          explanation: "Los selectores de identificador (id) se prefijan con el símbolo almohadilla (#identificador)."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b10",
          title: "Selectores de etiqueta, clase e ID del proyecto",
          description: "Aplica las reglas CSS básicas solicitadas en el proyecto combinando selectores de etiqueta, clase e identificador.",
          initialCode: `<style>
  /* Escribe aquí las reglas CSS */
</style>
<div class="bloque-form" id="observaciones">
  <h3>Observaciones</h3>
  <textarea id="comentarios">Texto de prueba</textarea>
</div>`,
          language: "html",
          tasks: [
            "1. Crea una regla para la etiqueta h3 que elimine su margen superior (margin-top: 0).",
            "2. Crea una regla para la clase .bloque-form con background-color: #2e7d32 y color: #faf5f2.",
            "3. Crea una regla descendente para el id #observaciones textarea con width: 100% y color: rgb(70, 69, 69)."
          ],
          solution: `<style>
  h3 {
    margin-top: 0;
  }
  .bloque-form {
    background-color: #2e7d32;
    color: #faf5f2;
  }
  #observaciones textarea {
    width: 100%;
    color: rgb(70, 69, 69);
  }
</style>
<div class="bloque-form" id="observaciones">
  <h3>Observaciones</h3>
  <textarea id="comentarios">Texto de prueba</textarea>
</div>`,
          hints: "Recuerda: h3 es selector de etiqueta, .bloque-form es de clase y #observaciones es de ID."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 11 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b11",
      blockNumber: 11,
      title: "Herencia, Cascada y Cálculo de Especificidad en CSS",
      duration: "2 horas",
      session: "Sesión 11",
      evaluation: "1ª Evaluación",
      ce: ["CE2g", "CE2h"],
      objectives: [
        "Calcular con precisión numérica la especificidad de un selector CSS (0, 0, 0, 0).",
        "Diferenciar qué propiedades se heredan de padres a hijos y cuáles no.",
        "Comprender el algoritmo de resolución de conflictos de la Cascada."
      ],
      theory: {
        intro: `
          ¿Qué ocurre cuando dos reglas CSS intentan aplicar colores o márgenes contradictorios al mismo elemento? El motor CSS resuelve el conflicto mediante el **algoritmo de la Cascada**, basándose en tres factores: **Importancia**, **Especificidad** y **Orden en el código fuente**.
        `,
        sections: [
          {
            title: "1. El cuarteto de Especificidad: (A, B, C, D)",
            content: `
              Cada selector CSS tiene un peso numérico representado por cuatro componentes:
              
              * **A (Estilos en línea)**: Declarados mediante el atributo \`style="..."\`. Puntuación: \`(1, 0, 0, 0)\`.
              * **B (Identificadores)**: Selectores de \`#id\`. Puntuación: \`(0, 1, 0, 0)\`.
              * **C (Clases, atributos y pseudo-clases)**: \`.clase\`, \`[type="text"]\`, \`:hover\`. Puntuación: \`(0, 0, 1, 0)\`.
              * **D (Etiquetas y pseudo-elementos)**: \`body\`, \`p\`, \`h1\`, \`::before\`. Puntuación: \`(0, 0, 0, 1)\`.
              
              **Comparación de pesos**:
              * Se compara de izquierda a derecha. Un solo ID \`(0, 1, 0, 0)\` gana a cualquier cantidad de clases \`(0, 0, 99, 0)\`.
              * Si dos reglas tienen idéntica especificidad, **gana la última escrita en el archivo CSS** (orden de aparición).
              
              *Ejemplos prácticos del proyecto integrador*:
              * \`textarea\` &rarr; \`(0, 0, 0, 1)\`
              * \`.bloque-form textarea\` &rarr; \`(0, 0, 1, 1)\`
              * \`#observaciones textarea\` &rarr; \`(0, 1, 0, 1)\` &larr; **¡GANA este selector!**
            `
          },
          {
            title: "2. Herencia de propiedades",
            content: `
              * **Propiedades que SÍ se heredan**:
                * Propiedades tipográficas y de texto: \`font-family\`, \`font-size\`, \`color\`, \`line-height\`, \`text-align\`.
                * Por eso, definir \`font-family: Verdana, sans-serif;\` en el \`body\` hace que automáticamente todos los encabezados y párrafos hijos usen Verdana.
                
              * **Propiedades que NO se heredan**:
                * Propiedades del modelo de caja y espaciado: \`margin\`, \`padding\`, \`border\`, \`background-color\`, \`width\`, \`height\`.
                * Un padre con borde rojo no hace que sus hijos tengan borde rojo por defecto.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b11-1",
          question: "¿Qué especificidad tiene el selector `#observaciones textarea`?",
          options: [
            "(0, 1, 0, 1)",
            "(0, 0, 1, 1)",
            "(0, 2, 0, 0)",
            "(1, 0, 0, 1)"
          ],
          correctIndex: 0,
          explanation: "Tiene 1 ID (#observaciones) y 1 etiqueta (textarea), por lo que su especificidad es (0, 1, 0, 1)."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b11",
          title: "Resolución de especificidad en campos de texto",
          description: "Aplica estilos donde la especificidad de ID prevalezca sobre la de clase y etiqueta.",
          initialCode: `<style>
  /* 1. Aplica color gris general a todos los textarea */
  /* 2. Aplica color verde a los textarea dentro de .bloque-form */
  /* 3. Aplica color rgb(70, 69, 69) al textarea específico de #observaciones */
</style>
<div class="bloque-form" id="observaciones">
  <textarea id="comentarios">Texto de prueba</textarea>
</div>`,
          language: "html",
          tasks: [
            "1. Añade regla textarea { color: #999; } (especificidad 0,0,0,1).",
            "2. Añade regla .bloque-form textarea { color: green; } (especificidad 0,0,1,1).",
            "3. Añade regla #observaciones textarea { color: rgb(70, 69, 69); } (especificidad 0,1,0,1)."
          ],
          solution: `<style>
  textarea {
    color: #999;
  }
  .bloque-form textarea {
    color: green;
  }
  #observaciones textarea {
    color: rgb(70, 69, 69);
  }
</style>
<div class="bloque-form" id="observaciones">
  <textarea id="comentarios">Texto de prueba</textarea>
</div>`,
          hints: "El navegador aplicará rgb(70, 69, 69) porque el selector con ID tiene mayor especificidad."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 12 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b12",
      blockNumber: 12,
      title: "El Modelo de Caja (CSS Box Model), Dimensionamiento y Bordes",
      duration: "2 horas",
      session: "Sesión 12",
      evaluation: "1ª Evaluación",
      ce: ["CE2h"],
      objectives: [
        "Comprender las 4 capas de toda caja CSS: content, padding, border y margin.",
        "Dominar la propiedad box-sizing: border-box y evitar cálculos de desbordamiento.",
        "Aplicar márgenes, rellenos y bordes redondeados (border-radius: 10px)."
      ],
      theory: {
        intro: `
          Todo elemento visible en una página web es renderizado por el navegador como una **caja rectangular**.
          
          Comprender cómo interactúan el contenido, el relleno interno (*padding*), el borde y los márgenes exteriores es el paso imprescindible para que los formularios y las tarjetas queden alineados con exactitud milimétrica.
        `,
        sections: [
          {
            title: "1. Las cuatro capas del Box Model",
            content: `
              1. **Content (Contenido)**: El área donde se ubica el texto, la imagen o los controles. Definido por \`width\` y \`height\`.
              2. **Padding (Relleno interno)**: Espacio transparente que separa el contenido del borde de la caja.
              3. **Border (Borde)**: Línea que envuelve el padding y el contenido.
              4. **Margin (Margen externo)**: Espacio exterior que separa la caja de sus elementos vecinos.
              
              *Notación abreviada (Shorthand)*:
              * 1 valor: \`padding: 15px;\` (aplica a los 4 lados por igual).
              * 2 valores: \`margin: 0 30px;\` (0 arriba/abajo, 30px izquierda/derecha, como en el \`body\` del proyecto).
              * 4 valores (sentido horario: arriba, derecha, abajo, izquierda): \`margin: 5px 0 0 0;\` (usado en \`.titulos-header h2\`).
            `
          },
          {
            title: "2. La propiedad box-sizing: border-box",
            content: `
              * **\`box-sizing: content-box\` (Modelo clásico por defecto)**:
                * Si defines \`width: 50%\` y añades \`padding: 15px\`, el ancho total renderizado será \`50% + 30px\`.
                * **Resultado**: ¡Dos cajas con \`width: 50%\` no caben en la misma fila y se rompen en dos líneas!
                
              * **\`box-sizing: border-box\` (Modelo moderno recomendado)**:
                * El \`padding\` y el \`border\` se absorben **dentro** del ancho especificado.
                * Una caja con \`width: 50%\` medirá exactamente el 50% de su contenedor sin importar cuánto padding o borde le añadas.
            `
          },
          {
            title: "3. Bordes y esquinas redondeadas: border-radius",
            content: `
              En las especificaciones del proyecto se detalla:
              * Bloques de formulario: \`.bloque-form { border-radius: 10px; padding: 15px; }\`
              * Botones con esquinas redondeadas y sin borde por defecto:
                \`\`\`css
                .botones-form input {
                  border: none;
                  border-radius: 5px;
                  padding: 8px 16px;
                }
                \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b12-1",
          question: "¿Qué efecto produce la regla CSS `margin: 0 30px;` aplicada al body?",
          options: [
            "0 píxeles arriba y abajo, y 30 píxeles de margen a izquierda y derecha.",
            "30 píxeles de margen en los cuatro lados.",
            "0 píxeles de margen a la izquierda y 30 arriba.",
            "Centra la página automáticamente sin margen."
          ],
          correctIndex: 0,
          explanation: "Con 2 valores en margin o padding, el primer valor aplica arriba/abajo y el segundo a izquierda/derecha."
        },
        {
          id: "q-ut2-b12-2",
          question: "¿Qué propiedad CSS redondea las esquinas de una caja rectangular?",
          options: [
            "corner-round",
            "border-radius",
            "box-round",
            "border-style: curved"
          ],
          correctIndex: 1,
          explanation: "border-radius define el radio de curvatura de las esquinas del borde de un elemento."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b12",
          title: "Estilizado de los bloques de formulario y botones",
          description: "Aplica las dimensiones, bordes redondeados y rellenos del proyecto a los bloques de formulario y botones.",
          initialCode: `<style>
  /* Define aquí los estilos para .bloque-form y .botones-form input */
</style>
<div class="bloque-form">
  <h3>Datos</h3>
</div>
<div class="botones-form">
  <input type="submit" value="Enviar">
</div>`,
          language: "html",
          tasks: [
            "1. Para .bloque-form, aplica width: 50%, background-color: #2e7d32, border-radius: 10px, padding: 15px y color: #faf5f2.",
            "2. Para .botones-form input, aplica padding: 8px 16px, background-color: #ffca28, border: none y border-radius: 5px."
          ],
          solution: `<style>
  .bloque-form {
    width: 50%;
    background-color: #2e7d32;
    border-radius: 10px;
    padding: 15px;
    color: #faf5f2;
    box-sizing: border-box;
  }
  .botones-form input {
    padding: 8px 16px;
    background-color: #ffca28;
    border: none;
    border-radius: 5px;
  }
</style>
<div class="bloque-form">
  <h3>Datos</h3>
</div>
<div class="botones-form">
  <input type="submit" value="Enviar">
</div>`,
          hints: "El radio de borde de 10px en .bloque-form y 5px en los botones cumple con las especificaciones 4 y 7 del proyecto integrador."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 13 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b13",
      blockNumber: 13,
      title: "Tipografía, Sistemas de Color, Fondos y Pseudo-clases de Interacción",
      duration: "2 horas",
      session: "Sesión 13",
      evaluation: "1ª Evaluación",
      ce: ["CE2h"],
      objectives: [
        "Configurar pilas tipográficas seguras (font-family: Verdana, sans-serif).",
        "Manejar formatos de color: Hexadecimal (#c62828) y RGB rgb(70, 69, 69).",
        "Implementar interactividad con la pseudo-clase :hover en botones y enlaces."
      ],
      theory: {
        intro: `
          La armonía visual y la experiencia de usuario dependen directamente de la elección de fuentes legibles, contrastes cromáticos accesibles y respuestas interactivas cuando el usuario pasa el ratón sobre los controles interactivos.
        `,
        sections: [
          {
            title: "1. Tipografía y pila de fuentes seguras",
            content: `
              En las especificaciones del proyecto se requiere:
              \`\`\`css
              body {
                font-family: Verdana, sans-serif;
              }
              \`\`\`
              * **Pila tipográfica (*font stack*)**: El navegador intentará cargar \`Verdana\`. Si por cualquier motivo el sistema operativo no la tiene instalada, recurrirá a la familia genérica \`sans-serif\` (fuentes sin remates ni esquinas ornamentales).
              * Alineación centrada: \`text-align: center;\` (aplicada en \`footer\` y \`.botones-form\`).
              * Eliminación de subrayado: \`text-decoration: none;\` en enlaces \`<a>\`.
            `
          },
          {
            title: "2. Paleta cromática oficial del proyecto integrador",
            content: `
              El proyecto utiliza un esquema cromático navideño y funcional:
              * **Rojo institucional**: \`#c62828\` (para el fondo del \`header\` y \`footer\`).
              * **Verde abeto**: \`#2e7d32\` (para el fondo de los dos bloques del formulario).
              * **Blanco nieve**: \`#fff\` y \`#faf5f2\` (para textos y contraste sobre fondos oscuros).
              * **Amarillo dorado**: \`#ffca28\` (fondo de los botones submit y reset).
              * **Amarillo suave**: \`#fff59d\` (enlaces en el footer).
              * **Gris antracita**: \`rgb(70, 69, 69)\` (texto del textarea).
            `
          },
          {
            title: "3. Pseudo-clases de interacción: el estado :hover",
            content: `
              Una **pseudo-clase** selecciona un elemento cuando se encuentra en un estado determinado.
              
              El estado **\`:hover\`** se activa cuando el puntero del ratón se sitúa sobre el elemento:
              \`\`\`css
              /* Estado base del botón */
              .botones-form input {
                background-color: #ffca28;
                cursor: pointer;
                transition: background-color 0.2s;
              }

              /* Estado al pasar el ratón por encima (especificación 7 del proyecto) */
              .botones-form input:hover {
                background-color: #ffc107;
              }
              \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b13-1",
          question: "¿Qué pseudo-clase CSS permite cambiar el color de un botón cuando el usuario pasa el cursor por encima?",
          options: [
            ":focus",
            ":hover",
            ":active",
            ":target"
          ],
          correctIndex: 1,
          explanation: ":hover se activa en el momento en que el puntero del ratón sobrevuela el elemento."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b13",
          title: "Efecto Hover en los botones del proyecto",
          description: "Aplica los colores del proyecto integrador y el cambio de color en hover a la botonera.",
          initialCode: `<style>
  /* Define el botón y su estado hover */
</style>
<div class="botones-form">
  <input type="submit" value="Enviar formulario">
  <input type="reset" value="Borrar datos">
</div>`,
          language: "html",
          tasks: [
            "1. Define .botones-form con text-align: center y margin: 20px.",
            "2. Define .botones-form input con background-color: #ffca28, padding: 8px 16px, border: none y border-radius: 5px.",
            "3. Define .botones-form input:hover con background-color: #ffc107."
          ],
          solution: `<style>
  .botones-form {
    margin: 20px;
    text-align: center;
  }
  .botones-form input {
    margin: 0 10px;
    padding: 8px 16px;
    background-color: #ffca28;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .botones-form input:hover {
    background-color: #ffc107;
  }
</style>
<div class="botones-form">
  <input type="submit" value="Enviar formulario">
  <input type="reset" value="Borrar datos">
</div>`,
          hints: "La regla de hover se escribe exactamente como .botones-form input:hover."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 14 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b14",
      blockNumber: 14,
      title: "Modos de visualización (display) y el flujo normal del documento",
      duration: "2 horas",
      session: "Sesión 14",
      evaluation: "1ª Evaluación",
      ce: ["CE2h"],
      objectives: [
        "Comprender la propiedad display y los comportamientos block, inline e inline-block.",
        "Identificar las limitaciones del flujo normal para alinear cajas en columnas paralelas.",
        "Preparar la base conceptual antes de dar el salto definitivo a Flexbox."
      ],
      theory: {
        intro: `
          Por defecto, el navegador coloca las cajas una detrás de otra en lo que se conoce como el **flujo normal del documento** (*normal flow*).
          
          Los párrafos y encabezados se colocan uno debajo del otro, mientras que las palabras y enlaces fluyen horizontalmente hasta que alcanzan el borde derecho y saltan de línea. Comprender la propiedad **\`display\`** es la clave para transformar ese comportamiento.
        `,
        sections: [
          {
            title: "1. Elementos de Bloque frente a Elementos en Línea",
            content: `
              * **\`display: block\` (Cajas de bloque)**:
                * Elementos nativos: \`<div>\`, \`<p>\`, \`<h1>\`-\`<h6>\`, \`<header>\`, \`<main>\`, \`<footer>\`, \`<form>\`.
                * **Comportamiento**: Ocupan todo el ancho disponible del contenedor (100%), forzando un salto de línea antes y después. Aceptan \`width\`, \`height\`, y márgenes en los cuatro costados.
                
              * **\`display: inline\` (Cajas en línea)**:
                * Elementos nativos: \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`, \`<label>\`.
                * **Comportamiento**: Ocupan solo el espacio justo de su texto o contenido, fluyendo en la misma línea. **No aceptan width ni height**, y los márgenes verticales no desplazan a los elementos adyacentes.
                
              * **\`display: inline-block\`**:
                * Se colocan en línea uno al lado del otro, pero aceptan dimensiones de ancho, alto, padding y márgenes.
            `
          },
          {
            title: "2. El gran reto histórico: Colocar dos cajas al 50% lado a lado",
            content: `
              En las especificaciones del proyecto se requiere: *"El formulario está dividido en 3 partes. Las 2 primeras partes, quedan alineadas, y ocupan cada una el 50%"*.
              
              Si intentas hacer esto con cajas de bloque normales, aunque les pongas \`width: 50%\`, la segunda caja se colocará **debajo** de la primera debido al salto de línea forzado de los bloques.
              
              Para solucionar este problema de forma limpia, robusta y moderna, la especificación CSS3 introdujo **Flexbox** (\`display: flex\`).
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b14-1",
          question: "¿Qué característica distingue a un elemento con `display: block` de uno con `display: inline`?",
          options: [
            "El elemento de bloque ocupa el 100% del ancho disponible y fuerza salto de línea; el elemento en línea solo ocupa su contenido.",
            "El elemento en línea puede tener dimensiones de width y height, mientras que el de bloque no.",
            "Los elementos de bloque solo pueden contener imágenes.",
            "No hay diferencias, son conceptos idénticos."
          ],
          correctIndex: 0,
          explanation: "Los elementos de bloque generan una nueva línea y abarcan todo el ancho horizontal disponible."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b14",
          title: "Comparación práctica de block, inline e inline-block",
          description: "Experimenta con los valores de display para comprender el flujo antes de usar Flexbox.",
          initialCode: `<style>
  .caja-bloque { /* display: block */ }
  .caja-linea { /* display: inline */ }
</style>
<div class="caja-bloque">Caja Bloque 1</div>
<div class="caja-bloque">Caja Bloque 2</div>
<span class="caja-linea">Texto en línea 1</span>
<span class="caja-linea">Texto en línea 2</span>`,
          language: "html",
          tasks: [
            "1. Asigna a .caja-bloque background-color: #c62828 y color: white.",
            "2. Asigna a .caja-linea background-color: #2e7d32 y color: white.",
            "3. Observa cómo los bloques ocupan toda la línea y los spans se sientan juntos."
          ],
          solution: `<style>
  .caja-bloque {
    display: block;
    background-color: #c62828;
    color: white;
    margin-bottom: 5px;
    padding: 10px;
  }
  .caja-linea {
    display: inline;
    background-color: #2e7d32;
    color: white;
    padding: 5px;
  }
</style>
<div class="caja-bloque">Caja Bloque 1</div>
<div class="caja-bloque">Caja Bloque 2</div>
<span class="caja-linea">Texto en línea 1</span>
<span class="caja-linea">Texto en línea 2</span>`,
          hints: "Observa en la vista previa cómo se distribuyen en pantalla."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 15 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b15",
      blockNumber: 15,
      title: "Maquetación Moderna con Flexbox I: El contenedor flexible y alineaciones",
      duration: "2 horas",
      session: "Sesión 15",
      evaluation: "1ª Evaluación",
      ce: ["CE2h"],
      objectives: [
        "Activar el modelo Flexbox mediante display: flex.",
        "Dominar los dos ejes de Flexbox: Eje Principal (Main Axis) y Eje Transversal (Cross Axis).",
        "Alinear elementos con justify-content: space-between y align-items: center conforme a las especificaciones técnicas."
      ],
      theory: {
        intro: `
          **Flexbox** (*Flexible Box Layout*) es el estándar definitivo de CSS3 para maquetar interfaces unidimensionales. Resuelve de forma elegante el centrado vertical, la distribución equitativa del espacio y la alineación de columnas.
          
          En este bloque aprenderás a implementar exactamente las especificaciones 2 y 4 del proyecto integrador.
        `,
        sections: [
          {
            title: "1. El Contenedor Flexible (Flex Container) y sus dos ejes",
            content: `
              Al aplicar \`display: flex\` a un elemento padre, este se convierte en un **contenedor flexible**, y todos sus hijos directos pasan a ser **elementos flexibles** (*flex items*):
              
              * **Eje Principal (*Main Axis*)**: Por defecto discurre en sentido horizontal de izquierda a derecha.
              * **Eje Transversal (*Cross Axis*)**: Discurre en sentido perpendicular al eje principal (por defecto, vertical de arriba hacia abajo).
            `
          },
          {
            title: "2. Alineación horizontal en el Eje Principal: justify-content",
            content: `
              La propiedad \`justify-content\` controla cómo se distribuyen los elementos a lo largo del eje principal:
              
              * **\`space-between\`**:
                * El primer elemento se pega al borde izquierdo absoluto y el último al borde derecho absoluto. El espacio sobrante se reparte equitativamente entre los elementos intermedios.
                * *En el proyecto (especificación 2)*: \`header { display: flex; justify-content: space-between; align-items: center; }\`. Hace que los títulos queden a la izquierda y la imagen navideña pegada al extremo derecho.
                * *En el proyecto (especificación 4)*: \`form { display: flex; justify-content: space-between; gap: 20px; }\`. Hace que los dos bloques del formulario queden alineados lado a lado ocupando el 50% cada uno.
                
              * Otros valores habituales:
                * \`center\`: Centra todos los elementos en el medio.
                * \`flex-start\`: Empuja los elementos al principio.
                * \`space-around\`: Añade espacio uniforme alrededor de cada elemento.
            `
          },
          {
            title: "3. Alineación vertical en el Eje Transversal: align-items",
            content: `
              La propiedad \`align-items\` controla cómo se alinean los elementos en el eje vertical:
              
              * **\`center\`**:
                * Centra los elementos verticalmente respecto a la línea media del contenedor.
                * *En el proyecto*: En el \`<header>\`, los títulos y la imagen de 70x70px quedan centrados verticalmente de forma impecable sin necesidad de márgenes forzados.
              * **\`stretch\`** (valor por defecto): Las cajas hijas se estiran para ocupar la misma altura total que la caja más alta.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b15-1",
          question: "En la especificación 2 del proyecto: 'Header: modo alineado horizontal: space-between. Modo alineado vertical: center'. ¿Qué código CSS cumple esta instrucción?",
          options: [
            "header { display: flex; justify-content: space-between; align-items: center; }",
            "header { text-align: space-between; vertical-align: middle; }",
            "header { float: left; margin: auto; }",
            "header { position: absolute; top: 0; left: 0; }"
          ],
          correctIndex: 0,
          explanation: "display: flex activa Flexbox; justify-content: space-between alinea horizontalmente a los extremos y align-items: center centra verticalmente."
        },
        {
          id: "q-ut2-b15-2",
          question: "¿Cómo se logra que dos bloques .bloque-form dentro de form se muestren alineados en paralelo ocupando cada uno la mitad del ancho?",
          options: [
            "form { display: flex; justify-content: space-between; } y .bloque-form { width: 50%; }",
            "form { display: block; } y .bloque-form { width: 100%; }",
            "form { text-align: center; } y .bloque-form { float: none; }",
            "form { display: inline; }"
          ],
          correctIndex: 0,
          explanation: "El contenedor flex permite que dos cajas hijas con width: 50% se coloquen una al lado de la otra en la misma fila."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b15",
          title: "Maquetación del Header con Flexbox",
          description: "Aplica Flexbox al header para situar los títulos a la izquierda y la imagen a la derecha centrados verticalmente.",
          initialCode: `<style>
  header {
    background-color: #c62828;
    color: #fff;
    padding: 15px;
    /* Aplica Flexbox aquí */
  }
</style>
<header>
  <div class="titulos-header">
    <h1 style="margin:0;">Cena de Navidad DAW</h1>
    <h2 style="margin:5px 0 0 0;">Formulario de participación</h2>
  </div>
  <img src="navidad.webp" alt="Icono navideño" width="70" height="70" style="background:white; border-radius:50%;">
</header>`,
          language: "html",
          tasks: [
            "1. Añade a header la propiedad display: flex.",
            "2. Añade justify-content: space-between para separar títulos e imagen a los extremos.",
            "3. Añade align-items: center para centrar ambos elementos verticalmente."
          ],
          solution: `<style>
  header {
    background-color: #c62828;
    color: #fff;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
<header>
  <div class="titulos-header">
    <h1 style="margin:0;">Cena de Navidad DAW</h1>
    <h2 style="margin:5px 0 0 0;">Formulario de participación</h2>
  </div>
  <img src="navidad.webp" alt="Icono navideño" width="70" height="70" style="background:white; border-radius:50%;">
</header>`,
          hints: "Combina display: flex con justify-content: space-between y align-items: center."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 16 (2 HORAS)
       ========================================================================= */
    {
      id: "ut2-b16",
      blockNumber: 16,
      title: "Maquetación con Flexbox II: Dirección en columna y Caso Práctico Integrador",
      duration: "2 horas",
      session: "Sesión 16",
      evaluation: "1ª Evaluación",
      ce: ["CE2c", "CE2g", "CE2h"],
      objectives: [
        "Dominar la propiedad flex-direction: column para apilar elementos en vertical dentro de Flexbox.",
        "Integrar paso a paso todos los requisitos técnicos de la rúbrica del proyecto integrador (Cena de Navidad DAW).",
        "Validar y depurar la página completa con HTML5 semántico y CSS3 con Flexbox, con código comentado."
      ],
      theory: {
        intro: `
          Llegamos a la sesión culminante de la Unidad de Trabajo 2. En este bloque aprenderás a cambiar la dirección del eje flexible mediante **\`flex-direction: column\`** (requerido para los radio buttons de opciones de plato) y construiremos juntos el **proyecto integrador completo paso a paso**.
          
          Al finalizar esta sesión, dominarás con soltura el 100% de los criterios de evaluación del RA2.
        `,
        sections: [
          {
            title: "1. La propiedad flex-direction: column",
            content: `
              Por defecto, Flexbox coloca los elementos en fila horizontal (\`flex-direction: row\`).
              
              Sin embargo, cuando queremos que los elementos flexibles se apilen uno debajo del otro pero manteniendo el control de alineación y espaciado (\`gap\`), cambiamos la orientación del eje principal a vertical:
              
              \`\`\`css
              .opciones-plato {
                display: flex;
                flex-direction: column;
              }
              \`\`\`
              * En el proyecto (especificación 5): *"Párrafo y 3 input radio en columna con opciones"*. Con \`flex-direction: column\`, cada \`<label>\` que contiene un radio button se sitúa en una línea vertical propia, logrando una presentación clara y limpia.
            `
          },
          {
            title: "2. Rúbrica del Proyecto Integrador Desglosada (10 Puntos)",
            content: `
              Repasemos las 11 especificaciones técnicas del proyecto integrador (Cena Navideña DAW):
              
              | Nº | Especificación Técnica | Puntuación |
              |:---|:---|:---:|
              | **1** | HTML5 válido, \`lang="es"\`, \`charset="UTF-8"\`, título 'Cena de Navidad DAW 2025' y metadato de autor | 0.5 p |
              | **2** | Header dividido en 2 partes (títulos + imagen), \`space-between\`, centrado vertical (\`center\`), imagen 70x70px | 1.5 p |
              | **3** | En \`<main>\`, formulario que envía a \`cenanavidad.php\` (o \`procesar_cena.php\`) por método \`post\` | 0.25 p |
              | **4** | Formulario en 3 partes: 2 primeras alineadas al 50%, fondo verde (\`#2e7d32\`), letra blanca | 1.0 p |
              | **5** | 1ª parte form: \`<h3>\`, \`label\` e \`input text\` (max 50 car.), párrafo y 3 radios en columna | 1.5 p |
              | **6** | 2ª parte form: \`<h3>\`, \`label\` y \`textarea\` de 5 filas (\`rows="5"\`), y \`checkbox\` | 1.0 p |
              | **7** | 3ª parte: 2 botones (submit y reset) centrados, bordes redondeados y otro color en \`:hover\` | 1.0 p |
              | **8** | En \`footer\`, texto indicado y enlace a 'https://www.navidad.es' centrado | 0.5 p |
              | **9** | En CSS: uso de selectores de identificador (\`#\`), de clase (\`.\`) y de etiqueta | 1.0 p |
              | **10** | Aspecto visual fiel a la ilustración (espaciados, colores y dimensiones respetadas) | 1.5 p |
              | **11** | Código comentado pedagógicamente (\`<!-- ... -->\` y \`/* ... */\`) | 0.25 p |
              | **TOTAL** | **Calificación Máxima del Proyecto Integrador de RA2** | **10 PUNTOS** |
            `
          },
          {
            title: "3. Solución Técnica Oficial Comentada",
            content: `
              A continuación tienes el código fuente de referencia que resuelve el 100% de las especificaciones:
              
              \`\`\`html
              <!DOCTYPE html>
              <html lang="es">
              <head>
                <meta charset="UTF-8">
                <title>Cena de Navidad DAW 2025</title>
                <!-- Metadato de autoría oficial -->
                <meta name="author" content="Nombre del Alumno">
                <style>
                  /* Estilos generales */
                  body {
                    font-family: Verdana, sans-serif;
                    margin: 0 30px;
                  }
                  header, footer {
                    background-color: #c62828;
                    color: #fff;
                    padding: 15px;
                  }
                  /* Cabecera con Flexbox */
                  header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  }
                  .titulos-header h1 {
                    margin: 0;
                  }
                  .titulos-header h2 {
                    margin: 5px 0 0 0;
                  }
                  header img {
                    width: 70px;
                    height: 70px;
                  }
                  main {
                    margin-top: 20px;
                  }
                  /* Formulario en dos columnas con Flexbox */
                  form {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                  }
                  .bloque-form {
                    width: 50%;
                    background-color: #2e7d32;
                    border-radius: 10px;
                    padding: 15px;
                    color: #faf5f2;
                    box-sizing: border-box;
                  }
                  /* Radio buttons en columna con Flexbox */
                  .opciones-plato {
                    display: flex;
                    flex-direction: column;
                  }
                  #observaciones textarea {
                    width: 100%;
                    margin: 10px auto;
                    color: rgb(70, 69, 69);
                    box-sizing: border-box;
                  }
                  /* Botonera */
                  .botones-form {
                    margin: 20px;
                    text-align: center;
                  }
                  .botones-form input {
                    margin: 0 10px;
                    padding: 8px 16px;
                    background-color: #ffca28;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                  }
                  .botones-form input:hover {
                    background-color: #ffc107;
                  }
                  /* Pie de página */
                  footer {
                    text-align: center;
                  }
                  a {
                    color: #fff59d;
                    text-decoration: none;
                  }
                </style>
              </head>
              <body>
                <!-- Cabecera semántica -->
                <header>
                  <div class="titulos-header">
                    <h1>Cena de Navidad DAW</h1>
                    <h2>Formulario de participación</h2>
                  </div>
                  <img src="navidad.webp" alt="Icono navideño">
                </header>

                <!-- Contenido central -->
                <main>
                  <form action="procesar_cena.php" method="post">
                    <!-- 1ª parte: Datos del asistente -->
                    <div class="bloque-form" id="datos-personales">
                      <h3>Datos del asistente</h3>
                      <label for="nombre">Nombre completo:</label>
                      <input type="text" id="nombre" name="nombre" maxlength="50">

                      <p>Plato favorito para la cena:</p>
                      <div class="opciones-plato">
                        <label><input type="radio" name="plato" value="pavo"> Pavo asado</label>
                        <label><input type="radio" name="plato" value="lasaña"> Lasaña</label>
                        <label><input type="radio" name="plato" value="pescado"> Pescado al horno</label>
                      </div>
                    </div>

                    <!-- 2ª parte: Observaciones -->
                    <div class="bloque-form" id="observaciones">
                      <h3>Observaciones</h3>
                      <label for="comentarios">Comentarios (alergias, peticiones especiales):</label>
                      <textarea id="comentarios" name="comentarios" rows="5">Observaciones</textarea>
                      <label>
                        <input type="checkbox" name="confirmacion" value="si"> Confirmo que asistiré a la cena
                      </label>
                    </div>
                  </form>

                  <!-- 3ª parte: Botones centrados -->
                  <div class="botones-form">
                    <input type="submit" value="Enviar formulario">
                    <input type="reset" value="Borrar datos">
                  </div>
                </main>

                <!-- Pie de página -->
                <footer>
                  <p>Autor: Nombre del Alumno</p>
                  <p>Fecha: 9/12/2025</p>
                  <p>
                    Más ideas navideñas en
                    <a href="https://www.navidad.es" target="_blank" rel="noopener noreferrer">esta página</a>.
                  </p>
                </footer>
              </body>
              </html>
              \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut2-b16-1",
          question: "¿Qué propiedad de Flexbox permite colocar los radio buttons en orientación vertical uno debajo de otro?",
          options: [
            "flex-direction: column;",
            "flex-direction: row;",
            "flex-wrap: wrap;",
            "display: vertical;"
          ],
          correctIndex: 0,
          explanation: "flex-direction: column cambia la orientación del eje principal de horizontal a vertical, apilando los elementos flexibles."
        },
        {
          id: "q-ut2-b16-2",
          question: "En el proyecto integrador, ¿por qué los botones submit y reset están situados fuera de las dos columnas del 50%?",
          options: [
            "Porque representan la 3ª parte del formulario y deben aparecer debajo de ambas columnas centrados en la pantalla.",
            "Porque submit no funciona dentro de un contenedor flex.",
            "Fue un error involuntario.",
            "Porque ocupan el 100% de la pantalla."
          ],
          correctIndex: 0,
          explanation: "La especificación 4 y 7 definen que las 2 primeras partes ocupan el 50% cada una y la 3ª parte (los botones) actúa diferente situándose centrada debajo."
        }
      ],
      exercises: [
        {
          id: "ex-ut2-b16",
          title: "Proyecto Integrador de Maquetación Web (Cena de Navidad DAW)",
          description: "Desarrolla la página completa de la Cena de Navidad DAW con HTML5 semántico y CSS3 con Flexbox, cumpliendo las 11 especificaciones técnicas del proyecto integrador.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cena de Navidad DAW 2025</title>
  <!-- 1. Metadato de autor -->
  <style>
    /* 2. Estilos para body, header, titulos-header, form, bloque-form, opciones-plato, botones-form, footer */
  </style>
</head>
<body>
  <!-- 3. Header con títulos e imagen -->
  <!-- 4. Main con formulario (datos-personales, observaciones) y botones-form -->
  <!-- 5. Footer con autor, fecha y enlace -->
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Cumple la especificación 1: html lang=\"es\", charset UTF-8, título 'Cena de Navidad DAW 2025' y meta author.",
            "2. Cumple la especificación 2: header con títulos e imagen alineados con space-between y centrado vertical.",
            "3. Cumple las especificaciones 3, 4, 5 y 6: form con method=\"post\", 2 columnas del 50% en verde (#2e7d32), inputs, radios en columna y textarea con rows=\"5\".",
            "4. Cumple la especificación 7: botones submit y reset centrados con bordes redondeados y hover en #ffc107.",
            "5. Cumple la especificación 8: footer centrado con enlace a https://www.navidad.es.",
            "6. Cumple la especificación 9 y 11: selectores de etiqueta, clase e id, y código comentado."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cena de Navidad DAW 2025</title>
  <!-- Metadato de autoría requerido en la especificación 1 -->
  <meta name="author" content="Nombre del Alumno">
  <style>
    /* Estilos globales */
    body {
      font-family: Verdana, sans-serif;
      margin: 0 30px;
    }
    header, footer {
      background-color: #c62828;
      color: #fff;
      padding: 15px;
    }
    /* Especificación 2: Header alineado con Flexbox */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .titulos-header h1 {
      margin: 0;
    }
    .titulos-header h2 {
      margin: 5px 0 0 0;
    }
    header img {
      width: 70px;
      height: 70px;
    }
    main {
      margin-top: 20px;
    }
    /* Especificación 4: Formulario en dos columnas del 50% con Flexbox */
    form {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
    .bloque-form {
      width: 50%;
      background-color: #2e7d32;
      border-radius: 10px;
      padding: 15px;
      color: #faf5f2;
      box-sizing: border-box;
    }
    /* Especificación 5: Radios en columna con Flexbox */
    .opciones-plato {
      display: flex;
      flex-direction: column;
    }
    #observaciones textarea {
      width: 100%;
      margin: 10px auto;
      color: rgb(70, 69, 69);
      box-sizing: border-box;
    }
    /* Especificación 7: Botones centrados con hover */
    .botones-form {
      margin: 20px;
      text-align: center;
    }
    .botones-form input {
      margin: 0 10px;
      padding: 8px 16px;
      background-color: #ffca28;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .botones-form input:hover {
      background-color: #ffc107;
    }
    /* Especificación 8: Footer centrado y enlace */
    footer {
      text-align: center;
    }
    a {
      color: #fff59d;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <!-- Cabecera -->
  <header>
    <div class="titulos-header">
      <h1>Cena de Navidad DAW</h1>
      <h2>Formulario de participación</h2>
    </div>
    <img src="navidad.webp" alt="Icono navideño">
  </header>

  <!-- Contenido principal -->
  <main>
    <form action="procesar_cena.php" method="post">
      <!-- 1ª parte: Datos del asistente -->
      <div class="bloque-form" id="datos-personales">
        <h3>Datos del asistente</h3>
        <label for="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre" maxlength="50">

        <p>Plato favorito para la cena:</p>
        <div class="opciones-plato">
          <label><input type="radio" name="plato" value="pavo"> Pavo asado</label>
          <label><input type="radio" name="plato" value="lasaña"> Lasaña</label>
          <label><input type="radio" name="plato" value="pescado"> Pescado al horno</label>
        </div>
      </div>

      <!-- 2ª parte: Observaciones -->
      <div class="bloque-form" id="observaciones">
        <h3>Observaciones</h3>
        <label for="comentarios">Comentarios (alergias, peticiones especiales):</label>
        <textarea id="comentarios" name="comentarios" rows="5">Observaciones</textarea>
        <label>
          <input type="checkbox" name="confirmacion" value="si"> Confirmo que asistiré a la cena
        </label>
      </div>
    </form>

    <!-- 3ª parte: Botonera -->
    <div class="botones-form">
      <input type="submit" value="Enviar formulario">
      <input type="reset" value="Borrar datos">
    </div>
  </main>

  <!-- Pie de página -->
  <footer>
    <p>Autor: Nombre del Alumno</p>
    <p>Fecha: 9/12/2025</p>
    <p>
      Más ideas navideñas en
      <a href="https://www.navidad.es" target="_blank" rel="noopener noreferrer">esta página</a>.
    </p>
  </footer>
</body>
</html>`,
          hints: "Comprueba que las dos partes del formulario estén dentro de <form> y los botones estén debajo centrados en .botones-form."
        }
      ]
    }
  ]
};
