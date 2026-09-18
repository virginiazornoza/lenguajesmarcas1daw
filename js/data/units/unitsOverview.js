/**
 * unitsOverview.js
 * Datos pedagógicos y bloques de 2 horas para las Unidades 2 a 7 (Curso 2026/2027)
 * Conforme a la nueva distribución temporal oficial del CIFP Carlos III.
 */

export const UNITS_OVERVIEW_DATA = {
  ut2: {
    unitNumber: 2,
    title: "Utilización de lenguajes de marcas en entornos web",
    ra: "RA2: Utiliza lenguajes de marcas para la transmisión de información a través de la web, analizando la estructura de los documentos e identificando sus elementos.",
    hours: 32,
    weight: "26%",
    evaluation: "1ª Evaluación",
    blocksDetailed: {
      "ut2-b1": {
        title: "Evolución web: De HTML 4.01 y XHTML a HTML5",
        duration: "2 horas",
        session: "Sesión 1",
        objectives: ["Analizar la transición histórica de la web", "Comprender la ruptura del W3C con XHTML 2.0 y el surgimiento del grupo WHATWG", "Conocer los principios de diseño de HTML5"],
        theorySummary: "Estudio de las especificaciones HTML clásicas, la rigidez de XHTML y el triunfo pragmático de HTML5 liderado por el consorcio WHATWG. Doctype simplificado (&lt;!DOCTYPE html&gt;) y compatibilidad retroactiva.",
        quizSample: {
          question: "¿Por qué el doctype en HTML5 se simplificó a simplemente `<!DOCTYPE html>`?",
          options: ["Porque no hace referencia a ninguna DTD de SGML y sirve solo para activar el modo de renderizado estándar en los navegadores.", "Porque HTML5 ya no utiliza etiquetas.", "Para que los archivos se compriman en formato gzip.", "Fue un error de tipografía que se mantuvo."],
          correctIndex: 0,
          explanation: "En HTML5 no hay DTD, por lo que el DOCTYPE únicamente previene el modo 'quirks' (modo de compatibilidad retroactiva) de los navegadores."
        },
        exerciseSample: "Crear una plantilla mínima HTML5 válida con metadatos de viewport, charset UTF-8 y descripción para motores de búsqueda."
      },
      "ut2-b2": {
        title: "Estructura básica de un documento HTML5 y elementos del head",
        duration: "2 horas",
        session: "Sesión 2",
        objectives: ["Estructurar un documento con html, head y body", "Configurar etiquetas meta esenciales (charset, viewport, description)", "Enlazar hojas de estilo externas y favicon"],
        theorySummary: "Análisis pormenorizado del elemento &lt;head&gt;: títulos con &lt;title&gt;, enlaces con &lt;link&gt;, scripts diferidos con defer/async, y etiquetas &lt;meta&gt; para SEO y dispositivos móviles.",
        quizSample: {
          question: "¿Para qué sirve la etiqueta `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`?",
          options: ["Para cambiar el fondo a modo oscuro.", "Para adaptar el ancho del área visible a la pantalla física del dispositivo móvil.", "Para habilitar la cámara web.", "Para cargar imágenes retina."],
          correctIndex: 1,
          explanation: "La directiva viewport es la piedra angular del diseño web responsivo en dispositivos móviles."
        },
        exerciseSample: "Diseñar la cabecera completa para un portal corporativo del CIFP Carlos III incluyendo metadatos OpenGraph."
      },
      "ut2-b3": {
        title: "Etiquetas semánticas estructurales de HTML5 (header, nav, main, article...)",
        duration: "2 horas",
        session: "Sesión 3",
        objectives: ["Reemplazar el 'div-soup' por etiquetas semánticas de HTML5", "Diferenciar entre <article> y <section>", "Uso correcto de <header>, <footer>, <aside> y <nav>"],
        theorySummary: "La revolución semántica de HTML5: dar significado estructural a cada región del documento para mejorar la accesibilidad (lectores de pantalla) y el posicionamiento en buscadores (SEO).",
        quizSample: {
          question: "¿Qué diferencia semántica existe entre `<article>` y `<section>`?",
          options: ["Ninguna, son sinónimos absolutos.", "`<article>` representa contenido autocontenido y reutilizable de forma independiente, mientras que `<section>` representa una sección temática genérica.", "`<article>` solo puede usarse una vez por página.", "`<section>` solo se utiliza para tablas."],
          correctIndex: 1,
          explanation: "Un `<article>` podría distribuirse o sindicarse de forma autónoma (ej. una noticia, un post), mientras que `<section>` agrupa contenido temático afín."
        },
        exerciseSample: "Maquetar la estructura semántica completa de una revista digital de tecnología usando header, nav, main, article, aside y footer."
      },
      "ut2-b4": {
        title: "Formato de texto, enlaces relativos y absolutos, e imágenes",
        duration: "2 horas",
        session: "Sesión 4",
        objectives: ["Manejar párrafos, encabezados h1-h6 y texto enfatizado", "Dominar rutas relativas '../' y absolutas en enlaces <a>", "Insertar imágenes accesibles con <img> y atributos alt obligatorios"],
        theorySummary: "Jerarquía de títulos, etiquetas &lt;em&gt; vs &lt;i&gt;, &lt;strong&gt; vs &lt;b&gt;. Rutas de ficheros en el árbol del proyecto. Formatos web modernos de imagen (WebP, AVIF, SVG, PNG, JPG).",
        quizSample: {
          question: "Si tu página está en `/alumnos/index.html` y una imagen está en `/img/foto.jpg`, ¿cuál es la ruta relativa correcta?",
          options: ["img/foto.jpg", "../img/foto.jpg", "../../img/foto.jpg", "./foto.jpg"],
          correctIndex: 1,
          explanation: "Se debe subir un nivel en el árbol de carpetas con `../` para acceder a la carpeta hermana `img/`."
        },
        exerciseSample: "Construir un menú de navegación hipertexto entre 3 páginas interconectadas con enlaces relativos."
      },
      "ut2-b5": {
        title: "Listas ordenadas, desordenadas y de descripción",
        duration: "2 horas",
        session: "Sesión 5",
        objectives: ["Crear listas con <ul>, <ol> y <li>", "Construir listas de descripción con <dl>, <dt> y <dd>", "Anidar listas complejas multinivel para menús"],
        theorySummary: "Uso de listas para menús de navegación, listados de requisitos y glosarios de términos en aplicaciones web.",
        quizSample: {
          question: "¿Qué etiquetas se utilizan para crear un glosario de términos y definiciones?",
          options: ["<ul> y <li>", "<dl>, <dt> y <dd>", "<table y <td>", "<ol> y <dt>"],
          correctIndex: 1,
          explanation: "`<dl>` (Description List), `<dt>` (Description Term) y `<dd>` (Description Details)."
        },
        exerciseSample: "Crear el temario y glosario técnico de 1º DAW mediante listas anidadas y listas de descripción."
      },
      "ut2-b6": {
        title: "Tablas en HTML5: estructura, cabeceras, agrupaciones y accesibilidad",
        duration: "2 horas",
        session: "Sesión 6",
        objectives: ["Construir tablas semánticas con <thead>, <tbody>, <tfoot>", "Usar celdas combinadas con colspan y rowspan", "Garantizar la accesibilidad con <caption> y atributo scope"],
        theorySummary: "Las tablas deben utilizarse exclusivamente para datos tabulares, nunca para maquetación. Atributos colspan, rowspan y celdas de cabecera con &lt;th&gt;.",
        quizSample: {
          question: "¿Qué atributo permite que una celda ocupe el ancho de 3 columnas contiguas?",
          options: ["rowspan=\"3\"", "colspan=\"3\"", "width=\"3\"", "span=\"3\""],
          correctIndex: 1,
          explanation: "`colspan` (column span) expande la celda horizontalmente a través de varias columnas."
        },
        exerciseSample: "Crear la tabla del horario semanal y carga horaria del ciclo DAW con combinación de celdas y cabeceras accesibles."
      },
      "ut2-b7": {
        title: "Formularios web I: controles básicos, inputs, labels y métodos GET/POST",
        duration: "2 horas",
        session: "Sesión 7",
        objectives: ["Construir formularios con la etiqueta <form>", "Diferenciar entre los métodos HTTP GET y POST", "Asociar etiquetas <label> con sus campos mediante el atributo 'for' e 'id'"],
        theorySummary: "El mecanismo principal de interacción de usuario en la web: atributos action, method, name y la importancia de la accesibilidad en los formularios.",
        quizSample: {
          question: "¿Por qué no se debe utilizar el método GET para enviar formularios de login con contraseñas?",
          options: ["Porque no permite caracteres alfanuméricos.", "Porque los datos viajan visibles en la URL del navegador y quedan registrados en el historial.", "Porque solo funciona con servidores Linux.", "Porque GET no soporta texto en UTF-8."],
          correctIndex: 1,
          explanation: "El método GET concatena los parámetros en la Query String de la URL, lo cual expone credenciales en logs, proxies e historial."
        },
        exerciseSample: "Crear un formulario de matrícula de alumnos con campos de texto, contraseña, radio buttons, checkboxes y select desplegable."
      },
      "ut2-b8": {
        title: "Formularios web II: validaciones nativas HTML5, tipos específicos y atributos",
        duration: "2 horas",
        session: "Sesión 8",
        objectives: ["Usar tipos de input modernos (email, tel, url, number, date, range, color)", "Aplicar restricciones nativas: required, min, max, pattern (regex), maxlength", "Personalizar mensajes y experiencia de usuario"],
        theorySummary: "Validación del lado del cliente sin JavaScript mediante la API nativa de restricciones de HTML5 y expresiones regulares.",
        quizSample: {
          question: "¿Qué atributo de HTML5 permite validar que un campo de texto coincida con una expresión regular?",
          options: ["validate", "regex", "pattern", "check"],
          correctIndex: 2,
          explanation: "El atributo `pattern` recibe una expresión regular (Regex) para validar el formato en el cliente."
        },
        exerciseSample: "Crear un formulario de registro con validación nativa de NIF/NIE, código postal de 5 dígitos y fecha de nacimiento mayor de 18 años."
      },
      "ut2-b9": {
        title: "Multimedia en la web: audio, vídeo e incrustaciones iframe",
        duration: "2 horas",
        session: "Sesión 9",
        objectives: ["Incrustar audio con <audio> y múltiples fuentes <source>", "Reproducir vídeo con <video> y controles nativos", "Integrar contenido externo seguro mediante <iframe> y sandbox"],
        theorySummary: "Formatos multimedia web (MP4/H.264, WebM, MP3, OGG). Atributos controls, autoplay, muted, loop, poster. Políticas de seguridad y aislamiento de iframes.",
        quizSample: {
          question: "¿Por qué se colocan múltiples etiquetas `<source>` dentro de un elemento `<video>`?",
          options: ["Para reproducir varios vídeos a la vez en mosaico.", "Para ofrecer diferentes formatos y códecs alternativos para que el navegador reproduzca el primero compatible.", "Para subtítulos en diferentes idiomas.", "Para aumentar el volumen."],
          correctIndex: 1,
          explanation: "Permite la degradación elegante: el navegador evalúa las fuentes en orden y reproduce el formato que soporte nativamente."
        },
        exerciseSample: "Crear una sección multimedia con un reproductor de vídeo corporativo con imagen poster y un mapa incrustado seguro."
      },
      "ut2-b10": {
        title: "Introducción a CSS3: sintaxis, formas de inclusión y selectores básicos",
        duration: "2 horas",
        session: "Sesión 10",
        objectives: ["Comprender la anatomía de una regla CSS (selector, propiedad, valor)", "Comparar formas de inclusión: externa (<link>), interna (<style>) y en línea (style=)", "Dominar selectores de etiqueta, clase (.) e identificador (#)"],
        theorySummary: "Separación estricta de estructura y presentación. Buenas prácticas: priorizar siempre hojas de estilo externas enlazadas.",
        quizSample: {
          question: "¿Cuál es la forma más recomendada profesionalmente para aplicar estilos CSS en un sitio web?",
          options: ["En un atributo style=\"\" en cada etiqueta.", "En una hoja de estilos externa vinculada con `<link rel=\"stylesheet\" href=\"...\">`.", "Dentro de comentarios HTML.", "Descargando un archivo PHP."],
          correctIndex: 1,
          explanation: "Una hoja externa permite la reutilización de estilos en múltiples páginas, mantenimiento centralizado y aprovechamiento de la memoria caché del navegador."
        },
        exerciseSample: "Vincular una hoja de estilos externa y estilizar la tipografía y colores de una página web."
      },
      "ut2-b11": {
        title: "Herencia, cascada y especificidad en CSS",
        duration: "2 horas",
        session: "Sesión 11",
        objectives: ["Calcular la especificidad de un selector (en línea > ID > Clase > Etiqueta)", "Entender el algoritmo de la cascada y la herencia de propiedades", "Uso y abuso de !important"],
        theorySummary: "Cómo resuelve el motor CSS los conflictos cuando múltiples reglas apuntan al mismo elemento. Cálculo numérico de especificidad (0,0,0,0).",
        quizSample: {
          question: "Entre las reglas `p { color: red; }` y `.destacado { color: blue; }`, ¿qué color tendrá `<p class=\"destacado\">`?",
          options: ["Rojo, porque la etiqueta p es más importante.", "Azul, porque las clases tienen mayor especificidad que las etiquetas.", "Verde, color por defecto.", "El navegador da un error sintáctico."],
          correctIndex: 1,
          explanation: "El selector de clase tiene una especificidad (0,0,1,0) superior a la del selector de elemento o etiqueta (0,0,0,1)."
        },
        exerciseSample: "Resolver un laberinto de especificidad ordenando reglas y prediciendo el color final de varios elementos."
      },
      "ut2-b12": {
        title: "Modelo de Caja (Box Model): margin, border, padding, content y box-sizing",
        duration: "2 horas",
        session: "Sesión 12",
        objectives: ["Comprender las 4 capas de toda caja CSS", "Dominar la propiedad box-sizing: border-box", "Gestionar colapso de márgenes verticales y desbordamiento (overflow)"],
        theorySummary: "El corazón del diseño web: el modelo de caja estándar vs border-box. Cómo se calcula el ancho total renderizado de un elemento.",
        quizSample: {
          question: "¿Qué efecto tiene aplicar `box-sizing: border-box` a un elemento con `width: 200px` y `padding: 20px`?",
          options: ["El ancho total será de 240px.", "El ancho total se mantiene exactamente en 200px, absorbiendo el padding en el interior.", "El elemento se oculta de la pantalla.", "El padding se elimina automáticamente."],
          correctIndex: 1,
          explanation: "`border-box` incluye el padding y el borde dentro del ancho y alto especificados, evitando cálculos de desbordamiento."
        },
        exerciseSample: "Crear una tarjeta de producto (card) perfectamente dimensionada usando `box-sizing: border-box`, márgenes y bordes redondeados."
      },
      "ut2-b13": {
        title: "Propiedades de tipografía, colores (HEX, RGB, HSL) y fondos",
        duration: "2 horas",
        session: "Sesión 13",
        objectives: ["Aplicar fuentes web con @font-face y Google Fonts", "Manejar sistemas de color: hexadecimal, rgb/rgba, hsl/hsla", "Diseñar fondos con imágenes, gradientes lineales y radiales"],
        theorySummary: "Tipografía web moderna, line-height, letter-spacing. Modelos de color y transparencia (canal alfa). background-size: cover/contain.",
        quizSample: {
          question: "En la notación de color `rgba(255, 0, 0, 0.5)`, ¿qué representa el último valor 0.5?",
          options: ["El 50% de brillo.", "El canal alfa (50% de opacidad o semitransparencia).", "La saturación del rojo.", "El desenfoque de la sombra."],
          correctIndex: 1,
          explanation: "El canal 'a' (alpha) controla el nivel de opacidad del color, desde 0 (totalmente transparente) hasta 1 (completamente opaco)."
        },
        exerciseSample: "Diseñar una cabecera hero (Hero banner) con degradado semitransparente sobre una imagen de fondo y tipografía moderna."
      },
      "ut2-b14": {
        title: "Posicionamiento en CSS: static, relative, absolute, fixed y sticky",
        duration: "2 horas",
        session: "Sesión 14",
        objectives: ["Diferenciar el flujo normal del documento del posicionamiento manual", "Combinar position: relative en el contenedor y absolute en el hijo", "Implementar barras de navegación fijas o pegajosas (fixed y sticky)"],
        theorySummary: "La propiedad position y las coordenadas top, right, bottom, left. z-index y contextos de apilamiento en 3D.",
        quizSample: {
          question: "¿Respecto a qué se posiciona un elemento con `position: absolute`?",
          options: ["Siempre respecto a la ventana del navegador.", "Respecto al ancestro posicionado más cercano (con position distinto de static).", "Respecto a su elemento hermano anterior.", "Respecto al cursor del ratón."],
          correctIndex: 1,
          explanation: "Un elemento absoluto busca hacia arriba en el árbol DOM el primer contenedor que tenga `position` definida (habitualmente `relative`)."
        },
        exerciseSample: "Crear una barra de navegación 'sticky' que quede fijada en la parte superior al hacer scroll y un botón flotante de WhatsApp con 'fixed'."
      },
      "ut2-b15": {
        title: "Maquetación moderna I: Flexbox para interfaces unidimensionales",
        duration: "2 horas",
        session: "Sesión 15",
        objectives: ["Comprender el modelo Flexbox: eje principal (main axis) y eje transversal (cross axis)", "Dominar justify-content, align-items y flex-direction", "Distribuir el espacio con flex-grow, flex-shrink y flex-basis"],
        theorySummary: "La solución definitiva para el alineamiento en una dirección (filas o columnas). Centrado vertical y horizontal perfecto sin hacks.",
        quizSample: {
          question: "¿Cómo se centra un elemento tanto horizontal como verticalmente dentro de un contenedor flex?",
          options: ["`float: center; margin: auto;`", "`display: flex; justify-content: center; align-items: center;`", "`text-align: middle;`", "`position: center;`"],
          correctIndex: 1,
          explanation: "En Flexbox, `justify-content: center` centra en el eje principal y `align-items: center` en el eje transversal."
        },
        exerciseSample: "Maquetar una barra de navegación con logo a la izquierda y enlaces a la derecha usando `justify-content: space-between` en Flexbox."
      },
      "ut2-b16": {
        title: "Maquetación moderna II: CSS Grid, Media Queries y Responsive Design",
        duration: "2 horas",
        session: "Sesión 16",
        objectives: ["Comprender CSS Grid para filas y columnas simultáneas", "Escribir Media Queries (@media) según breakpoints móviles y de escritorio", "Culminar el proyecto web completo responsive de la UT2"],
        theorySummary: "La combinación definitiva de CSS Grid y Responsive Web Design. Mobile-First, unidades de fracción fr, repeat(auto-fit, minmax()) y proyecto evaluativo de la 1ª Evaluación.",
        quizSample: {
          question: "¿Qué crea la regla `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`?",
          options: ["Una cuadrícula responsive automática que ajusta tantas columnas de al menos 250px como quepan en la pantalla.", "Una sola fila fija de 250px.", "Un menú de navegación horizontal sin wrapping.", "Un error de sintaxis."],
          correctIndex: 0,
          explanation: "Esta fórmula mágica de CSS Grid genera una rejilla adaptable que añade o reduce columnas sin necesidad de escribir media queries."
        },
        exerciseSample: "Diseñar una landing page corporativa completa y totalmente adaptable que cambie fluidamente desde smartphones hasta monitores de escritorio."
      }
    }
  },
  ut3: {
    unitNumber: 3,
    title: "Manipulación de documentos web mediante scripts y sindicación",
    ra: "RA3: Genera canales de contenidos analizando y utilizando tecnologías de sindicación / Manipulación de documentos web mediante scripts.",
    hours: 12,
    weight: "12%",
    evaluation: "1ª y 2ª Evaluación",
    blocksDetailed: {
      "ut3-b1": {
        title: "Introducción a JavaScript en el navegador y vinculación en HTML",
        duration: "2 horas",
        session: "Sesión 1 (1ª Ev)",
        objectives: ["Integrar scripts con <script src=\"...\">", "Diferenciar la carga normal de los atributos defer y async", "Uso de la consola del desarrollador (DevTools)"],
        theorySummary: "Sintaxis básica de JS, tipos de datos, vinculación segura en el documento HTML y depuración con console.log.",
        quizSample: {
          question: "¿Qué ventaja aporta el atributo `defer` en una etiqueta `<script>`?",
          options: ["Cancela la ejecución del script.", "Descarga el script en paralelo sin bloquear el parseo del HTML y lo ejecuta en orden cuando el DOM está listo.", "Oculta el código a los usuarios.", "Ejecuta el código antes de que cargue el CSS."],
          correctIndex: 1,
          explanation: "`defer` evita que el navegador detenga la construcción del DOM mientras se descarga el archivo JavaScript."
        },
        exerciseSample: "Escribir un script externo que capture valores del usuario e imprima diagnósticos en la consola de Chrome."
      },
      "ut3-b2": {
        title: "El DOM (Document Object Model): estructura arbórea y métodos de selección",
        duration: "2 horas",
        session: "Sesión 2 (1ª Ev)",
        objectives: ["Comprender la representación en memoria del documento HTML como árbol de objetos", "Dominar document.querySelector y document.querySelectorAll", "Manejar métodos tradicionales (getElementById, getElementsByClassName)"],
        theorySummary: "El objeto global document. Tipos de nodos en el DOM: nodos elemento, nodos texto, nodos atributo. Navegación entre nodos padre/hijo.",
        quizSample: {
          question: "¿Qué devuelve `document.querySelector('.tarjeta')` si hay tres elementos con esa clase en la página?",
          options: ["Un array con los tres elementos.", "El primer elemento que coincida con el selector en el orden del DOM.", "Un error de tipo.", "El último elemento."],
          correctIndex: 1,
          explanation: "`querySelector` devuelve únicamente el primer elemento coincidente, mientras que `querySelectorAll` devuelve la NodeList con todos."
        },
        exerciseSample: "Seleccionar elementos clave de una página y resaltar sus bordes dinámicamente según su jerarquía."
      },
      "ut3-b3": {
        title: "Modificación dinámica de atributos, contenido textual e inyección de estilos",
        duration: "2 horas",
        session: "Sesión 3 (1ª Ev)",
        objectives: ["Modificar texto con textContent e innerHTML de forma segura", "Manipular atributos con setAttribute, getAttribute y removeAttribute", "Gestionar clases CSS mediante la propiedad classList (add, remove, toggle)"],
        theorySummary: "Manipulación reactiva de la interfaz. Buenas prácticas de seguridad: evitar vulnerabilidades XSS prefiriendo textContent sobre innerHTML.",
        quizSample: {
          question: "¿Por qué se prefiere `element.classList.toggle('activo')` sobre modificar directamente `element.className`?",
          options: ["Porque no borra el resto de clases existentes y alterna limpiamente el estado en una sola línea.", "Porque acelera el procesador gráfico.", "Porque funciona sin CSS.", "Por compatibilidad con Internet Explorer 6."],
          correctIndex: 0,
          explanation: "`classList.toggle` añade la clase si no está presente o la elimina si ya existe, sin sobreescribir las demás clases del elemento."
        },
        exerciseSample: "Crear un interruptor de Modo Oscuro / Modo Claro dinámico mediante JavaScript y classList."
      },
      "ut3-b4": {
        title: "Creación y eliminación dinámica de nodos en el DOM y gestión de eventos",
        duration: "2 horas",
        session: "Sesión 4 (2ª Ev)",
        objectives: ["Crear nodos con document.createElement y textNode", "Insertar nodos con appendChild y append", "Escuchar eventos de usuario con addEventListener ('click', 'submit', 'input')"],
        theorySummary: "Ciclo de vida de eventos en el navegador. Delegación de eventos, prevención del comportamiento por defecto con e.preventDefault().",
        quizSample: {
          question: "¿Qué método se utiliza para evitar que un formulario recargue la página completa al pulsar el botón de envío?",
          options: ["e.stopPropagation()", "e.preventDefault()", "form.cancel()", "window.stop()"],
          correctIndex: 1,
          explanation: "`e.preventDefault()` cancela la acción nativa del evento, permitiendo procesar el formulario de forma asíncrona."
        },
        exerciseSample: "Construir una lista de tareas (To-Do List) interactiva donde el usuario pueda agregar y eliminar tareas dinámicamente."
      },
      "ut3-b5": {
        title: "Sindicación de contenidos: arquitectura de RSS 2.0 y Atom",
        duration: "2 horas",
        session: "Sesión 5 (2ª Ev)",
        objectives: ["Comprender los canales de sindicación (RSS 2.0 y Atom)", "Estructurar canales con <channel>, <item>, <title>, <link>, <pubDate>", "Identificar la sintaxis de marcado XML en sindicación"],
        theorySummary: "La sindicación web como aplicación directa de XML para la distribución automatizada de noticias, blogs y podcasts.",
        quizSample: {
          question: "¿Cuál es el elemento contenedor principal que engloba a todas las noticias en un archivo RSS 2.0?",
          options: ["<feed>", "<channel>", "<rss_list>", "<articles>"],
          correctIndex: 1,
          explanation: "En RSS 2.0, dentro de la raíz `<rss version=\"2.0\">` se define el elemento obligatorio `<channel>` que contiene los metadatos y los `<item>`."
        },
        exerciseSample: "Crear un canal de sindicación RSS 2.0 completo con 3 noticias sobre las novedades del CIFP Carlos III."
      },
      "ut3-b6": {
        title: "Validación de canales de sindicación, consumo con agregadores y proyecto",
        duration: "2 horas",
        session: "Sesión 6 (2ª Ev)",
        objectives: ["Validar feeds RSS/Atom con validadores W3C", "Consumir feeds en lectores y agregadores (Feedly, Thunderbird)", "Proyecto evaluativo de la UT3"],
        theorySummary: "Mecanismos de validación formal de feeds web y automatización de distribución de información.",
        quizSample: {
          question: "¿Qué herramienta oficial permite verificar si un feed RSS o Atom cumple con las normas del W3C?",
          options: ["W3C Feed Validation Service", "CSS Validator", "HTML Lint", "Google Search Console"],
          correctIndex: 0,
          explanation: "El W3C Feed Validation Service es el estándar oficial para certificar canales de sindicación."
        },
        exerciseSample: "Validar y suscribir el canal RSS del centro educativo en un lector de noticias y verificar su actualización."
      }
    }
  },
  ut4: {
    unitNumber: 4,
    title: "Esquemas y vocabularios en XML",
    ra: "RA4: Establece mecanismos de validación para documentos XML utilizando métodos para definir su sintaxis y estructura.",
    hours: 24,
    weight: "20%",
    evaluation: "2ª Evaluación",
    blocksDetailed: {
      "ut4-b1": {
        title: "Necesidad de validación en XML y documentos válidos vs bien formados",
        duration: "2 horas",
        session: "Sesión 1",
        objectives: ["Diferenciar entre documento bien formado y documento válido", "Comprender la necesidad empresarial de esquemas de datos", "Comparar DTD y XML Schema (XSD)"],
        theorySummary: "Un documento bien formado respeta la sintaxis general de XML; un documento válido respeta además un esquema formal específico que define qué etiquetas, tipos y órdenes están permitidos.",
        quizSample: {
          question: "¿Puede un documento XML ser válido si no está bien formado?",
          options: ["Sí, si el validador ignora la sintaxis.", "No, la buena formación es un requisito previo indispensable para la validez.", "Solo si utiliza DTD externa.", "Solo en entornos empresariales."],
          correctIndex: 1,
          explanation: "La buena formación es la base de XML. Un archivo con fallos sintácticos es rechazado de inmediato antes de cualquier validación."
        },
        exerciseSample: "Analizar varios documentos y clasificarlos en: no bien formados, bien formados pero no válidos, o válidos."
      },
      "ut4-b2": {
        title: "Introducción a DTD (Document Type Definition): internas y externas",
        duration: "2 horas",
        session: "Sesión 2",
        objectives: ["Escribir la declaración <!DOCTYPE ...>", "Diferenciar DTD interna [ ... ] de DTD externa (SYSTEM y PUBLIC)", "Declarar la estructura raíz del documento"],
        theorySummary: "Sintaxis de las Definiciones de Tipo de Documento heredadas de SGML. Identificadores SYSTEM (ficheros locales) y PUBLIC (estándares formales).",
        quizSample: {
          question: "¿Cómo se referencia una DTD externa ubicada en el mismo directorio con el nombre `tienda.dtd`?",
          options: ["<!DOCTYPE tienda SYSTEM \"tienda.dtd\">", "<!DOCTYPE tienda PUBLIC \"tienda.dtd\">", "<link rel=\"dtd\" href=\"tienda.dtd\">", "<?xml-dtd href=\"tienda.dtd\"?>"],
          correctIndex: 0,
          explanation: "Se usa la palabra clave `SYSTEM` seguida del URI o ruta del archivo DTD local."
        },
        exerciseSample: "Declarar una DTD interna para un catálogo simple de productos y vincularla en el documento XML."
      },
      "ut4-b3": {
        title: "Declaración de elementos en DTD: operadores de cardinalidad y secuencias",
        duration: "2 horas",
        session: "Sesión 3",
        objectives: ["Declarar elementos con <!ELEMENT nombre (contenido)>", "Manejar los operadores de repetición: ? (0 o 1), * (0 o más), + (1 o más)", "Definir secuencias (comas) y alternativas (plecas |)"],
        theorySummary: "Gramática formal de elementos en DTD. Elementos vacíos (EMPTY), cualquier contenido (ANY) y texto plano (#PCDATA).",
        quizSample: {
          question: "En DTD, ¿qué significa la regla `<!ELEMENT libro (titulo, autor+, capitulo*)>`?",
          options: ["Un libro tiene un título opcional, ningún autor y varios capítulos.", "Un libro tiene exactamente un título, uno o más autores, y cero o más capítulos, en ese orden exacto.", "Un autor tiene varios libros.", "El orden de aparición es indiferente."],
          correctIndex: 1,
          explanation: "La coma exige orden secuencial, `+` exige al menos una ocurrencia y `*` permite cero o múltiples repeticiones."
        },
        exerciseSample: "Definir la DTD completa para una factura comercial con líneas de detalle repetibles y datos de cliente obligatorios."
      },
      "ut4-b4": {
        title: "Declaración de atributos en DTD: CDATA, ID, IDREF y modificadores",
        duration: "2 horas",
        session: "Sesión 4",
        objectives: ["Sintaxis de <!ATTLIST elemento atributo tipo modificador>", "Diferenciar modificadores: #REQUIRED, #IMPLIED, #FIXED", "Garantizar unicidad con ID e integridad referencial con IDREF"],
        theorySummary: "Restricción de atributos en DTD. Tipos CDATA, listas de valores enumerados (opcion1|opcion2) y relaciones entre elementos mediante ID e IDREFS.",
        quizSample: {
          question: "¿Qué modificador de atributo en DTD indica que el atributo es totalmente opcional?",
          options: ["#REQUIRED", "#IMPLIED", "#OPTIONAL", "#FIXED"],
          correctIndex: 1,
          explanation: "`#IMPLIED` significa que el atributo no es obligatorio y el procesador no asigna ningún valor por defecto si se omite."
        },
        exerciseSample: "Definir atributos con identificadores únicos ID e IDREF para relacionar alumnos con matrículas en una DTD."
      },
      "ut4-b5": {
        title: "Entidades generales, paramétricas y validación práctica con DTD",
        duration: "2 horas",
        session: "Sesión 5",
        objectives: ["Crear entidades generales para abreviaturas o textos repetidos (&entidad;)", "Manejar entidades paramétricas (%) para modularizar DTDs", "Validar documentos con XML Copy Editor o VS Code"],
        theorySummary: "Definición de macroinstrucciones y constantes en DTD mediante <!ENTITY>. Entidades internas y externas.",
        quizSample: {
          question: "¿Para qué sirve una entidad general en una DTD?",
          options: ["Para definir un alias o constante reutilizable en el documento XML (ej. &cifp; por CIFP Carlos III).", "Para ocultar contraseñas.", "Para crear una base de datos.", "Para saltar de línea."],
          correctIndex: 0,
          explanation: "Las entidades generales actúan como constantes de sustitución de texto en el documento XML."
        },
        exerciseSample: "Crear una DTD con entidades para el nombre del centro y derechos de autor y validar un documento completo."
      },
      "ut4-b6": {
        title: "Limitaciones de DTD y necesidad de XML Schema (XSD)",
        duration: "2 horas",
        session: "Sesión 6",
        objectives: ["Identificar las debilidades de DTD (falta de tipos de datos, sintaxis no XML)", "Comprender la superioridad de XML Schema del W3C", "Reconocer las ventajas de que un esquema XSD sea en sí mismo un documento XML"],
        theorySummary: "Por qué la industria migró de DTD a XSD: soporte de tipos numéricos y fechas, restricciones con regex, soporte nativo de namespaces y extensibilidad.",
        quizSample: {
          question: "¿Cuál es una limitación crítica de DTD frente a XML Schema?",
          options: ["DTD no soporta texto.", "DTD no tiene tipos de datos numéricos ni de fechas; casi todo es texto simple (#PCDATA).", "DTD solo funciona en ordenadores Apple.", "DTD fue prohibido por el W3C."],
          correctIndex: 1,
          explanation: "En DTD no se puede validar que una edad sea un entero positivo o que una fecha tenga formato AAAA-MM-DD; XSD sí lo permite."
        },
        exerciseSample: "Hacer un cuadro comparativo entre DTD y XSD listando al menos 5 diferencias técnicas esenciales."
      },
      "ut4-b7": {
        title: "Estructura básica de un archivo XSD y asociación con documentos XML",
        duration: "2 horas",
        session: "Sesión 7",
        objectives: ["Conocer el elemento raíz <xs:schema>", "Asociar el documento XML con el esquema mediante xsi:noNamespaceSchemaLocation o xsi:schemaLocation", "Declarar elementos simples con xs:element"],
        theorySummary: "La especificación W3C XML Schema. El espacio de nombres http://www.w3.org/2001/XMLSchema y su prefijo canónico xs: o xsd:.",
        quizSample: {
          question: "¿Cuál es el elemento raíz obligatorio de cualquier archivo XML Schema?",
          options: ["<schema>", "<xs:schema>", "<xml:schema>", "<dtd:schema>"],
          correctIndex: 1,
          explanation: "La raíz de un esquema XSD es `<xs:schema>` vinculada al namespace de esquemas del W3C."
        },
        exerciseSample: "Escribir el esqueleto de un archivo .xsd y vincularlo en un archivo .xml para su validación."
      },
      "ut4-b8": {
        title: "Tipos de datos simples predefinidos en XSD (string, integer, decimal, boolean, date)",
        duration: "2 horas",
        session: "Sesión 8",
        objectives: ["Manejar tipos primitivos: xs:string, xs:boolean, xs:decimal, xs:float", "Utilizar tipos derivados enteros: xs:integer, xs:positiveInteger, xs:int", "Formatear fechas y horas: xs:date, xs:time, xs:dateTime"],
        theorySummary: "El catálogo de más de 40 tipos de datos integrados en el W3C XML Schema. Formatos ISO 8601 de fecha (YYYY-MM-DD).",
        quizSample: {
          question: "¿Cuál es el formato correcto para un valor de tipo `xs:date` en un XML validado por XSD?",
          options: ["18/09/2026", "2026-09-18", "18-09-2026", "Septiembre 18, 2026"],
          correctIndex: 1,
          explanation: "XSD sigue la norma internacional ISO 8601: cuatro dígitos de año, guion, dos de mes, guion, dos de día (YYYY-MM-DD)."
        },
        exerciseSample: "Tipar un catálogo de productos con tipos simples exactos: precio (decimal), stock (positiveInteger), fechaAlta (date)."
      },
      "ut4-b9": {
        title: "Definición de tipos simples personalizados mediante restricciones (facetas y regex)",
        duration: "2 horas",
        session: "Sesión 9",
        objectives: ["Crear tipos con <xs:simpleType> y <xs:restriction>", "Aplicar facetas numéricas: minInclusive, maxInclusive, totalDigits", "Validar formatos complejos mediante expresiones regulares con xs:pattern"],
        theorySummary: "Derivación por restricción. Facetas de longitud (length, minLength, maxLength), enumeraciones (xs:enumeration) y patrones regex.",
        quizSample: {
          question: "¿Qué faceta de XSD se utiliza para restringir que una nota esté entre 0 y 10?",
          options: ["xs:between", "xs:minInclusive=\"0\" y xs:maxInclusive=\"10\"", "xs:range=\"0-10\"", "xs:limit=\"10\""],
          correctIndex: 1,
          explanation: "`xs:minInclusive` fija el límite inferior (inclusive) y `xs:maxInclusive` el límite superior."
        },
        exerciseSample: "Crear un tipo simple personalizado para validar DNI/NIE españoles y teléfonos móviles con `xs:pattern`."
      },
      "ut4-b10": {
        title: "Tipos complejos en XSD: xs:sequence, xs:choice y xs:all con minOccurs/maxOccurs",
        duration: "2 horas",
        session: "Sesión 10",
        objectives: ["Declarar elementos complejos con <xs:complexType>", "Diferenciar indicadores de orden: xs:sequence (secuencia ordenada), xs:choice (exclusión mutua), xs:all (cualquier orden)", "Controlar ocurrencias con minOccurs y maxOccurs=\"unbounded\""],
        theorySummary: "Los tipos complejos pueden contener subelementos y atributos. Indicadores de composición de contenido.",
        quizSample: {
          question: "¿Qué significa `maxOccurs=\"unbounded\"` en una declaración de elemento en XSD?",
          options: ["Que el elemento no puede aparecer nunca.", "Que no tiene límite máximo de repeticiones (puede aparecer tantas veces como sea necesario).", "Que solo puede aparecer una vez.", "Que el elemento está deshabilitado."],
          correctIndex: 1,
          explanation: "`unbounded` equivale al operador de repetición indefinida (ilimitado)."
        },
        exerciseSample: "Diseñar la estructura compleja de un pedido con cliente, múltiples líneas de productos y forma de pago con xs:choice."
      },
      "ut4-b11": {
        title: "Definición de atributos, tipos mixtos y espacios de nombres en XSD",
        duration: "2 horas",
        session: "Sesión 11",
        objectives: ["Declarar atributos con <xs:attribute>", "Manejar use=\"required\" y use=\"optional\"", "Manejar targetNamespace y elementFormDefault=\"qualified\""],
        theorySummary: "Ubicación de atributos dentro de complexType y cualificación de vocabularios corporativos con namespaces en XSD.",
        quizSample: {
          question: "¿Dónde se declara un `<xs:attribute>` dentro de un `<xs:complexType>`?",
          options: ["Antes de xs:sequence.", "Siempre al final de la definición del tipo complejo, después de los indicadores de elementos.", "Dentro de un elemento simple.", "En el prólogo."],
          correctIndex: 1,
          explanation: "En la gramática XSD, las declaraciones de atributos deben colocarse después del modelo de contenido de subelementos."
        },
        exerciseSample: "Crear un elemento <precio moneda=\"EUR\">19.95</precio> mediante una extensión de tipo simple con atributo."
      },
      "ut4-b12": {
        title: "Taller práctico de diseño, validación y depuración de esquemas XSD",
        duration: "2 horas",
        session: "Sesión 12",
        objectives: ["Modelar un esquema XSD completo para un sistema real de gestión", "Validar y depurar errores comunes en procesadores de esquemas", "Superar la evaluación práctica de la Unidad de Trabajo 4"],
        theorySummary: "Práctica global intensiva integrando tipos simples, restricciones de expresiones regulares, tipos complejos anidados y validación real.",
        quizSample: {
          question: "¿Qué herramienta integrada en VS Code permite verificar al instante si un XML cumple con su XSD?",
          options: ["La extensión 'XML by Red Hat'.", "El comando npm start.", "El depurador de C#.", "El visor Markdown."],
          correctIndex: 0,
          explanation: "La extensión oficial de Red Hat para VS Code valida en tiempo real documentos XML frente a sus archivos XSD asociados."
        },
        exerciseSample: "Diseñar el esquema XSD íntegro para el sistema de matriculación de Formación Profesional y validar casos de prueba válidos e inválidos."
      }
    }
  },
  ut5: {
    unitNumber: 5,
    title: "Conversión y adaptación de documentos XML",
    ra: "RA5: Realiza conversiones sobre documentos XML utilizando técnicas y herramientas de procesamiento.",
    hours: 20,
    weight: "20%",
    evaluation: "2ª y 3ª Evaluación",
    blocksDetailed: {
      "ut5-b1": {
        title: "Introducción a la transformación de documentos XML y modelo en árbol",
        duration: "2 horas",
        session: "Sesión 1 (2ª Ev)",
        objectives: ["Comprender la necesidad de transformar información XML", "Conocer las tecnologías del ecosistema: XPath, XSLT y XSL-FO", "Analizar el árbol de nodos de XPath (raíz, elementos, atributos, texto)"],
        theorySummary: "Por qué transformar XML: adaptación a formatos legibles por personas (HTML), intercambio con otros sistemas B2B y generación de informes (PDF).",
        quizSample: {
          question: "¿Qué papel cumple XPath dentro del estándar de transformación XSLT?",
          options: ["Es el compilador binario de XML.", "Es el lenguaje de navegación y direccionamiento para seleccionar fragmentos y nodos del árbol XML.", "Es un gestor de bases de datos relacionales.", "Es un protocolo de correo."],
          correctIndex: 1,
          explanation: "XPath es la herramienta que permite apuntar y seleccionar qué elementos o atributos del documento XML se van a procesar."
        },
        exerciseSample: "Dibujar el árbol de nodos XPath de un documento de biblioteca e identificar los 7 tipos de nodos."
      },
      "ut5-b2": {
        title: "Fundamentos de XPath: rutas de localización absolutas y relativas",
        duration: "2 horas",
        session: "Sesión 2 (2ª Ev)",
        objectives: ["Diferenciar rutas absolutas (/raíz/hijo) de rutas descendientes (//)", "Seleccionar atributos mediante la arroba (@)", "Manejar comodines (* y @*)"],
        theorySummary: "Sintaxis de rutas similar al sistema de archivos. La barra simple `/` (paso de un solo nivel) frente a la doble barra `//` (búsqueda en cualquier profundidad).",
        quizSample: {
          question: "¿Qué selecciona la expresión XPath `//libro/@isbn`?",
          options: ["Todos los libros que tienen ISBN.", "El valor del atributo 'isbn' de todos los elementos <libro> del documento, sin importar su profundidad.", "Solo los libros del primer nivel.", "El número de páginas."],
          correctIndex: 1,
          explanation: "`//libro` busca cualquier libro en el documento y `/@isbn` extrae su atributo isbn."
        },
        exerciseSample: "Escribir consultas XPath para seleccionar títulos de libros, autores y precios en un catálogo."
      },
      "ut5-b3": {
        title: "Expresiones y predicados en XPath: filtrado por posición y atributos",
        duration: "2 horas",
        session: "Sesión 3 (3ª Ev)",
        objectives: ["Filtrar nodos usando corchetes [predicado]", "Seleccionar por posición: [1], [last()], [last()-1]", "Filtrar por comparaciones numéricas y lógicas"],
        theorySummary: "Los predicados `[...]` aplican condiciones de filtro a los conjuntos de nodos seleccionados.",
        quizSample: {
          question: "¿Cómo se selecciona con XPath el último alumno matriculado en un módulo?",
          options: ["//alumno[final]", "//alumno[last()]", "//alumno[end]", "//alumno[max]"],
          correctIndex: 1,
          explanation: "La función estándar `last()` devuelve el número de posición del último nodo del conjunto."
        },
        exerciseSample: "Crear consultas con predicados compuestos para filtrar alumnos aprobados con nota superior a 7."
      },
      "ut5-b4": {
        title: "Funciones XPath para texto, números, fechas y secuencias",
        duration: "2 horas",
        session: "Sesión 4 (3ª Ev)",
        objectives: ["Manejar funciones de texto: contains(), starts-with(), substring()", "Manejar funciones numéricas: count(), sum(), round()", "Combinar funciones lógicas: not()"],
        theorySummary: "Biblioteca estándar de funciones de XPath 1.0 y 2.0. Agregaciones para estadísticas de datos.",
        quizSample: {
          question: "¿Qué expresión XPath devuelve el número total de módulos de 1º DAW?",
          options: ["total(//modulo)", "count(//modulo)", "sum(//modulo)", "length(//modulo)"],
          correctIndex: 1,
          explanation: "`count()` es la función estándar de XPath para contar el número de nodos de un conjunto."
        },
        exerciseSample: "Obtener el precio medio de los libros de un catálogo calculando `sum(//precio) div count(//libro)`."
      },
      "ut5-b5": {
        title: "Ejes de navegación en XPath (ancestor, descendant, siblings)",
        duration: "2 horas",
        session: "Sesión 5 (3ª Ev)",
        objectives: ["Comprender la sintaxis eje::nodo", "Navegar hacia arriba (ancestor, parent) y hacia abajo (descendant)", "Navegar lateralmente entre hermanos (following-sibling)"],
        theorySummary: "Navegación espacial multidireccional por el árbol DOM. Pasos de localización completos: eje::test-de-nodo[predicado].",
        quizSample: {
          question: "¿Qué eje de XPath selecciona todos los nodos hermanos que aparecen después del nodo actual?",
          options: ["next-sibling", "following-sibling", "after-sibling", "brother"],
          correctIndex: 1,
          explanation: "El eje `following-sibling::` selecciona todos los elementos que comparten el mismo padre y van después en el documento."
        },
        exerciseSample: "Escribir expresiones con ejes de navegación para encontrar el elemento padre de un atributo o el hermano anterior de un párrafo."
      },
      "ut5-b6": {
        title: "Introducción a XSLT: hojas de estilo de transformación y procesadores",
        duration: "2 horas",
        session: "Sesión 6 (3ª Ev)",
        objectives: ["Conocer la arquitectura de transformación XSLT (XML + XSLT = Resultado)", "Estructurar el archivo con <xsl:stylesheet>", "Conocer procesadores XSLT (Saxon, xsltproc, motor nativo del navegador)"],
        theorySummary: "XSLT como lenguaje funcional y declarativo basado en reglas para transformar árboles XML en otros documentos (HTML, texto, XML).",
        quizSample: {
          question: "¿Cuál es la etiqueta raíz de una hoja de estilos de transformación XSLT?",
          options: ["<transform>", "<xsl:stylesheet> o <xsl:transform>", "<xml-style>", "<converter>"],
          correctIndex: 1,
          explanation: "Tanto `<xsl:stylesheet>` como su sinónimo `<xsl:transform>` son las raíces oficiales válidas según el W3C."
        },
        exerciseSample: "Crear una hoja XSLT mínima que tome un archivo XML y lo transforme en una página HTML con un título h1."
      },
      "ut5-b7": {
        title: "Plantillas en XSLT: xsl:template, xsl:apply-templates y xsl:value-of",
        duration: "2 horas",
        session: "Sesión 7 (3ª Ev)",
        objectives: ["Definir plantillas basadas en patrones con <xsl:template match=\"...\">", "Delegar el procesamiento con <xsl:apply-templates>", "Extraer valores con <xsl:value-of select=\"...\">"],
        theorySummary: "El paradigma de reglas y plantillas en XSLT. La plantilla raíz `match=\"/\"` y el procesamiento recursivo.",
        quizSample: {
          question: "¿Qué instrucción XSLT extrae el valor textual de un nodo seleccionado por XPath?",
          options: ["<xsl:print>", "<xsl:value-of select=\"...\">", "<xsl:get-text>", "<xsl:echo>"],
          correctIndex: 1,
          explanation: "`<xsl:value-of select=\"...\">` evalúa la expresión XPath y emite su valor como texto en el documento de salida."
        },
        exerciseSample: "Crear plantillas modulares para transformar cada elemento <alumno> en una tarjeta HTML."
      },
      "ut5-b8": {
        title: "Estructuras de control en XSLT: xsl:for-each, xsl:sort, xsl:if y xsl:choose",
        duration: "2 horas",
        session: "Sesión 8 (3ª Ev)",
        objectives: ["Iterar sobre colecciones de nodos con <xsl:for-each>", "Ordenar resultados alfabética o numéricamente con <xsl:sort>", "Aplicar lógica condicional con <xsl:if> y bifurcaciones con <xsl:choose>, <xsl:when> y <xsl:otherwise>"],
        theorySummary: "Estructuras de control declarativas en XSLT para generar tablas y listados ordenados y con formato condicional según los datos.",
        quizSample: {
          question: "¿Cuál es el equivalente en XSLT a la estructura 'switch-case' o 'if-else' de programación?",
          options: ["<xsl:switch>", "<xsl:choose> con <xsl:when> y <xsl:otherwise>", "<xsl:select-case>", "<xsl:if-else>"],
          correctIndex: 1,
          explanation: "`<xsl:choose>` evalúa secuencialmente los `<xsl:when test=\"...\">` y ejecuta el `<xsl:otherwise>` si ninguno coincide."
        },
        exerciseSample: "Generar una tabla HTML donde las filas de alumnos con nota suspenso (<5) se pinten con fondo rojo y los aprobados con fondo verde usando `xsl:choose`."
      },
      "ut5-b9": {
        title: "Generación de salidas en HTML5, XML y texto plano mediante XSLT",
        duration: "2 horas",
        session: "Sesión 9 (3ª Ev)",
        objectives: ["Configurar la directiva <xsl:output>", "Diferenciar métodos de salida: method=\"html\", method=\"xml\", method=\"text\"", "Crear archivos CSV o scripts SQL a partir de un XML"],
        theorySummary: "Generación de diferentes formatos de destino sin modificar el documento XML fuente original.",
        quizSample: {
          question: "Si queremos generar un archivo CSV separado por comas a partir de un XML, ¿qué método de salida debemos indicar en `<xsl:output>`?",
          options: ["method=\"csv\"", "method=\"text\"", "method=\"plain\"", "method=\"raw\""],
          correctIndex: 1,
          explanation: "El valor estándar para emitir texto sin etiquetas de ningún tipo es `method=\"text\"`."
        },
        exerciseSample: "Crear una hoja XSLT que transforme un catálogo XML de inventario en un archivo CSV importable en Excel."
      },
      "ut5-b10": {
        title: "Taller práctico: transformación completa de catálogo XML a sitio web accesible",
        duration: "2 horas",
        session: "Sesión 10 (3ª Ev)",
        objectives: ["Integrar XPath y XSLT en un proyecto integral", "Generar un sitio web completo, semántico y responsive a partir de un archivo de datos XML", "Superar la prueba de transformación de datos"],
        theorySummary: "Caso real de publicación automatizada multiformato en empresas editoriales y portales de comercio electrónico.",
        quizSample: {
          question: "¿Cómo se enlaza una hoja XSLT directamente en un archivo XML para que el navegador la transforme al abrirlo?",
          options: ["<link rel=\"stylesheet\" type=\"text/xsl\" href=\"estilo.xsl\">", "<?xml-stylesheet type=\"text/xsl\" href=\"estilo.xsl\"?>", "<xsl:include href=\"estilo.xsl\"/>", "No es posible hacerlo en el navegador."],
          correctIndex: 1,
          explanation: "Se utiliza la instrucción de procesamiento estándar `<?xml-stylesheet type=\"text/xsl\" href=\"...\"?>` en el prólogo del XML."
        },
        exerciseSample: "Transformar el XML de alumnos del CIFP Carlos III en una web con tablas ordenadas por nota media y filtros por ciclo formativo."
      }
    }
  },
  ut6: {
    unitNumber: 6,
    title: "Almacenamiento de información",
    ra: "RA6: Gestiona información en formato XML analizando y utilizando tecnologías de almacenamiento y lenguajes de consulta.",
    hours: 14,
    weight: "12%",
    evaluation: "3ª Evaluación",
    blocksDetailed: {
      "ut6-b1": {
        title: "Métodos de almacenamiento de datos XML y ámbitos de aplicación",
        duration: "2 horas",
        session: "Sesión 1",
        objectives: ["Analizar los retos de almacenar datos semiestructurados", "Comparar almacenamiento en ficheros planos vs bases de datos", "Conocer los casos de uso: data-centric vs document-centric"],
        theorySummary: "Data-centric XML frente a Document-centric XML. Ventajas e inconvenientes de almacenar XML nativo.",
        quizSample: {
          question: "¿Qué caracteriza a un documento XML 'Data-Centric' (centrado en datos)?",
          options: ["Que contiene novelas con mucho texto libre.", "Que posee una estructura muy regular y predecible pensada para ser consumida automáticamente por máquinas (ej. catálogos, facturas).", "Que solo tiene etiquetas <data>.", "Que no admite números."],
          correctIndex: 1,
          explanation: "Los documentos 'Data-centric' tienen estructura rígida y ordenada, ideales para mapearse con bases de datos relacionales."
        },
        exerciseSample: "Clasificar varios documentos reales en data-centric o document-centric."
      },
      "ut6-b2": {
        title: "Almacenamiento de XML en sistemas gestores relacionales (SGBDR)",
        duration: "2 horas",
        session: "Sesión 2",
        objectives: ["Conocer el tipo de dato nativo XML en SGBD modernos", "Almacenar fragmentos XML en columnas", "Consultar nodos XML con funciones SQL/XML"],
        theorySummary: "Cómo los motores relacionales incorporaron soporte XML nativo para combinar SQL con la flexibilidad de árboles jerárquicos.",
        quizSample: {
          question: "¿Qué ventaja tiene almacenar un XML en una columna de tipo `XML` frente a una de tipo `VARCHAR` o `TEXT`?",
          options: ["Ocupa cero bytes.", "El motor de base de datos valida la buena formación del XML al insertar y permite indexar y hacer consultas XPath directamente.", "Permite guardar virus sin peligro.", "No tiene ninguna ventaja."],
          correctIndex: 1,
          explanation: "El tipo XML comprueba la sintaxis, optimiza el almacenamiento interno en árbol y permite ejecutar funciones de consulta como XPath sin procesar cadenas de texto."
        },
        exerciseSample: "Crear una tabla en PostgreSQL con una columna de tipo XML e insertar registros con la configuración de usuarios."
      },
      "ut6-b3": {
        title: "Técnicas de mapeo y exportación de datos relacionales a XML",
        duration: "2 horas",
        session: "Sesión 3",
        objectives: ["Mapeo basado en tablas", "Mapeo objeto-relacional a esquemas XML", "Generar XML desde consultas SQL mediante xmlelement()"],
        theorySummary: "Puentes de interoperabilidad entre el mundo relacional y el intercambio de datos en la web.",
        quizSample: {
          question: "¿Qué función estándar de SQL permite construir un elemento XML a partir de una columna relacional?",
          options: ["XMLMAKE()", "XMLELEMENT()", "TO_XML()", "BUILD_XML()"],
          correctIndex: 1,
          explanation: "`XMLELEMENT(NAME nombre_etiqueta, valor)` es la función estándar ANSI SQL/XML para crear elementos."
        },
        exerciseSample: "Escribir una consulta SQL que devuelva la lista de alumnos y notas de una base de datos en formato XML estructurado."
      },
      "ut6-b4": {
        title: "Bases de datos nativas XML (NXD): arquitectura y BaseX",
        duration: "2 horas",
        session: "Sesión 4",
        objectives: ["Comprender qué es una Base de Datos Nativa XML", "Diferencias con relacionales y NoSQL", "Instalación y gestión de colecciones en BaseX"],
        theorySummary: "Las NXD utilizan el documento XML como unidad fundamental de almacenamiento lógico sin necesidad de mapeo relacional previo.",
        quizSample: {
          question: "¿Cuál es la unidad lógica fundamental de almacenamiento en una Base de Datos Nativa XML?",
          options: ["La fila o tupla.", "El documento XML.", "El registro binario.", "El fichero .exe."],
          correctIndex: 1,
          explanation: "En las NXD (como BaseX o eXist-db), el documento XML íntegro o la colección de documentos es la unidad de almacenamiento y consulta."
        },
        exerciseSample: "Descargar y explorar la interfaz gráfica de BaseX y crear una primera base de datos documental."
      },
      "ut6-b5": {
        title: "Introducción a XQuery y modelo FLWOR (For, Let, Where, Order, Return)",
        duration: "2 horas",
        session: "Sesión 5",
        objectives: ["Comprender qué es XQuery y su relación con XPath", "Acceder a documentos con la función doc()", "Dominar la sintaxis FLWOR"],
        theorySummary: "XQuery es para XML lo que SQL es para las bases de datos relacionales: el lenguaje estándar del W3C para consultar y extraer información.",
        quizSample: {
          question: "¿Cuál es la diferencia fundamental entre la cláusula `for` y la cláusula `let` en una expresión FLWOR?",
          options: ["No hay diferencia.", "`for` itera elemento a elemento produciendo una secuencia de pasadas, mientras que `let` asigna la colección completa a una variable en una sola pasada.", "`for` es para números y `let` para texto.", "`for` es obligatorio y `let` no existe."],
          correctIndex: 1,
          explanation: "`for $x in ...` hace un bucle sobre cada nodo; `let $x := ...` asigna el resultado completo a la variable sin iterar."
        },
        exerciseSample: "Escribir una consulta FLWOR que seleccione todos los alumnos, ordene por nota descendente y devuelva solo nombre y calificación."
      },
      "ut6-b6": {
        title: "Constructores de elementos, funciones y operadores en XQuery",
        duration: "2 horas",
        session: "Sesión 6",
        objectives: ["Construir nuevos elementos XML en la cláusula return usando corchetes {expresión}", "Manejar constructores computados", "Crear funciones definidas por el usuario (UDF)"],
        theorySummary: "Transformación y enriquecimiento de datos al vuelo. Sintaxis de constructores directos e interpolación de variables.",
        quizSample: {
          question: "En el bloque return de XQuery, ¿para qué se utilizan las llaves `{ ... }` dentro de una etiqueta como `<nota>{$x/calificacion}</nota>`?",
          options: ["Para indicar que es un comentario.", "Para evaluar el código XQuery/XPath que está dentro e insertar su resultado dinámico en el XML generado.", "Para crear un objeto JSON.", "Para dar estilo CSS."],
          correctIndex: 1,
          explanation: "Las llaves `{}` marcan una expresión evaluable dentro de los constructores directos de elementos XML."
        },
        exerciseSample: "Construir una consulta XQuery que transforme un catálogo plano en un nuevo XML agrupado por categorías de producto."
      },
      "ut6-b7": {
        title: "Taller práctico: consultas complejas y generación de informes XML con BaseX",
        duration: "2 horas",
        session: "Sesión 7",
        objectives: ["Resolver casos prácticos de consulta avanzada con múltiples documentos enlazados", "Generar informes HTML dinámicos directamente desde XQuery", "Superar la evaluación del RA6"],
        theorySummary: "Práctica integradora de almacenamiento y consulta sobre bases de datos XML reales de gran tamaño.",
        quizSample: {
          question: "¿Puede una consulta XQuery devolver directamente código HTML para mostrar en un navegador?",
          options: ["No, XQuery solo produce texto plano.", "Sí, XQuery puede construir cualquier estructura XML/HTML bien formada en su cláusula return.", "Solo si se convierte previamente a binario.", "Solo con extensiones comerciales."],
          correctIndex: 1,
          explanation: "Como HTML5 es compatible con la sintaxis de marcado, XQuery es ampliamente utilizado para generar páginas y tablas HTML dinámicas a partir de datos XML."
        },
        exerciseSample: "Crear un informe gerencial que calcule la facturación total mensual y el listado de clientes morosos a partir de una base de datos XML en BaseX."
      }
    }
  },
  ut7: {
    unitNumber: 7,
    title: "Sistemas de gestión empresarial",
    ra: "RA7: Opera sistemas empresariales de gestión de información realizando tareas de importación, integración, aseguramiento y extracción de la información.",
    hours: 4,
    weight: "2%",
    evaluation: "3ª Evaluación",
    blocksDetailed: {
      "ut7-b1": {
        title: "Conceptos, flujos de información y arquitectura de ERP y CRM",
        duration: "2 horas",
        session: "Sesión 1",
        objectives: ["Identificar los flujos de información en una empresa moderna", "Diferenciar ERP (Enterprise Resource Planning) y CRM (Customer Relationship Management)", "Analizar las soluciones líderes (Odoo, Dolibarr)"],
        theorySummary: "Integración de procesos de negocio: compras, ventas, contabilidad, almacén y recursos humanos en una base de datos única y centralizada.",
        quizSample: {
          question: "¿Cuál es la misión principal de un sistema ERP en una organización?",
          options: ["Diseñar páginas web atractivas.", "Integrar y centralizar los flujos de información y procesos de todos los departamentos (compras, ventas, finanzas, inventario) en un único sistema.", "Gestionar únicamente las redes sociales.", "Sustituir al sistema operativo de los ordenadores."],
          correctIndex: 1,
          explanation: "El ERP unifica la información corporativa evitando duplicidades e inconsistencias entre departamentos."
        },
        exerciseSample: "Mapear el flujo de información completo desde que un cliente realiza un pedido hasta la emisión de la factura y entrega logística."
      },
      "ut7-b2": {
        title: "Seguridad, usuarios/roles, importación/exportación estructurada e informes",
        duration: "2 horas",
        session: "Sesión 2",
        objectives: ["Configurar permisos y roles en Odoo/Dolibarr", "Importar y exportar catálogos en XML y CSV", "Generar informes de gestión empresarial"],
        theorySummary: "Parametrización del ERP, principio de mínimo privilegio y uso de formatos XML para intercambio con aplicaciones ofimáticas.",
        quizSample: {
          question: "¿Por qué es crítico configurar perfiles de permisos y roles en un ERP?",
          options: ["Para que el software funcione más rápido.", "Para garantizar el principio de mínimo privilegio y evitar que usuarios no autorizados modifiquen datos confidenciales.", "Porque el ERP solo admite un usuario administrador.", "Por exigencias de la memoria RAM."],
          correctIndex: 1,
          explanation: "La segregación de funciones previene fraudes, fugas de datos y alteraciones involuntarias de la información crítica."
        },
        exerciseSample: "Importar un catálogo de 25 productos mediante un archivo XML estructurado en una instancia ERP y emitir un informe de existencias."
      }
    }
  }
};
