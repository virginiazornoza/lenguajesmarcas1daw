/**
 * unit3.js
 * Unidad de Trabajo 3: Manipulación de documentos web mediante scripts y sindicación (JavaScript, DOM y RSS/Atom)
 * RA3: Genera canales de contenidos analizando y utilizando tecnologías de sindicación / Manipulación de documentos web mediante scripts.
 * Ponderación: 12% (Curso 2026/2027) - 14 horas lectivas (7 bloques de 2 horas: 4 bloques en 1ª Ev + 3 bloques en 2ª Ev)
 * CIFP Carlos III - Cartagena (1º DAW)
 *
 * Progresión didáctica:
 * - Sesión 1: Introducción a JavaScript en el navegador, vinculación segura (defer/async) y consola DevTools.
 * - Sesión 2: El DOM como árbol genealógico de objetos y métodos modernos de selección (querySelector / querySelectorAll).
 * - Sesión 3: Modificación dinámica de contenido (textContent vs innerHTML), atributos (getAttribute/setAttribute, dataset) y estilos con classList.
 * - Sesión 4: Gestión reactiva de eventos con addEventListener, objeto Event, e.preventDefault() y delegación de eventos.
 * - Sesión 5: Creación, inserción y eliminación dinámica de nodos en el DOM (createElement, append, DocumentFragment, remove).
 * - Sesión 6: Sindicación de contenidos: arquitectura de la web abierta, estándares RSS 2.0 y Atom 1.0, y formato de fechas RFC 822.
 * - Sesión 7: Validación de canales (W3C Feed Validator), autodescubrimiento (<link rel="alternate">), consumo con agregadores y procesamiento con scripts.
 * - Proyecto Integrador UT3: Portal de noticias dinámico con filtrado interactivo y canal de sindicación RSS 2.0.
 */

export const UNIT_3_DATA = {
  id: "ut3",
  unitNumber: 3,
  title: "Manipulación de documentos web mediante scripts y sindicación",
  shortTitle: "UT3: Scripts (DOM) y Sindicación de contenidos",
  ra: "RA3: Genera canales de contenidos analizando y utilizando tecnologías de sindicación / Manipulación de documentos web mediante scripts.",
  hours: 14,
  weight: "12%",
  evaluation: "1ª y 2ª Evaluación",
  blocks: [
    /* =========================================================================
       BLOQUE 1 (2 HORAS - 1ª EVALUACIÓN)
       ========================================================================= */
    {
      id: "ut3-b1",
      blockNumber: 1,
      title: "Introducción a JavaScript en el navegador y vinculación en HTML",
      duration: "2 horas",
      session: "Sesión 1 (1ª Ev)",
      evaluation: "1ª Evaluación",
      ce: ["CE3a", "CE3b"],
      objectives: [
        "Comprender el rol de JavaScript como motor de comportamiento en la tríada web frontend.",
        "Diferenciar las formas de inclusión: script embebido frente a archivo externo (.js).",
        "Dominar los atributos de carga diferida: defer y async frente al bloqueo tradicional del parser HTML.",
        "Manejar la consola de desarrollo (F12 DevTools) y los métodos console.log, console.warn, console.error y console.table.",
        "Dominar la declaración de variables modernas (const y let) y tipos primitivos básicos."
      ],
      theory: {
        intro: `
          En las unidades anteriores aprendimos que **HTML** aporta la **estructura semántica** y los datos del documento, mientras que **CSS** define su **presentación visual y maquetación**.
          
          En esta unidad incorporamos el tercer pilar fundamental de la web: **JavaScript (JS)**. JavaScript es el lenguaje de programación estándar que dota a las páginas web de **comportamiento dinámico**, interactividad en tiempo real y capacidad de respuesta inmediata a las acciones del usuario sin necesidad de recargar la página.
          
          > **La Tríada del Desarrollo Web Frontend**:
          > * **HTML5**: ¿Qué hay en la página? (Estructura y significado semántico).
          > * **CSS3**: ¿Cómo se ve? (Colores, tipografía, cajas, flexbox, adaptabilidad).
          > * **JavaScript**: ¿Cómo se comporta? (Reacción a eventos, cálculo, manipulación en vivo de la interfaz).
        `,
        sections: [
          {
            title: "1. Formas de inclusión de JavaScript en un documento HTML",
            content: `
              Al igual que ocurría con CSS, existen tres maneras de vincular código JavaScript, pero su idoneidad en entornos profesionales es muy distinta:

              * **1. Archivo externo (Buena práctica obligatoria en DAW)**:
                * El código JavaScript se escribe en un fichero independiente con extensión \`.js\` y se referencia mediante el atributo \`src\` de la etiqueta \`<script>\`.
                * **Ventajas**: Separa estrictamente la lógica de la estructura, permite reutilizar el mismo script en múltiples páginas del portal y el navegador almacena el archivo en caché, acelerando la carga.
                \`\`\`html
                <script src="js/main.js"></script>
                \`\`\`

              * **2. Script embebido o interno**:
                * El código se ubica directamente entre las etiquetas \`<script>\` y \`</script>\`, generalmente al final del \`<body>\` o dentro del \`<head>\`.
                * Se recomienda únicamente para pequeños ejemplos didácticos o scripts de inicialización muy específicos:
                \`\`\`html
                <script>
                  console.log("¡Script embebido ejecutándose con éxito!");
                </script>
                \`\`\`

              * **3. JavaScript en línea mediante atributos HTML (Mala práctica - Prohibido en código profesional)**:
                * Escribir código directamente en atributos HTML como \`onclick="alert('hola')"\`.
                * **Inconvenientes**: Mezcla estructura y comportamiento, dificulta el mantenimiento, impide la depuración modular y vulnera las políticas modernas de seguridad de contenidos (*Content Security Policy - CSP*).
            `
          },
          {
            title: "2. El ciclo de vida de la página: Bloqueo del parser vs defer y async",
            content: `
              Cuando el navegador lee un archivo HTML, procesa las etiquetas secuencialmente línea por línea (proceso conocido como **parseo del HTML**).
              
              Cuando se encuentra una etiqueta tradicional \`<script src="app.js">\`:
              1. El navegador **detiene por completo la lectura y renderizado del HTML** (*parser blocking*).
              2. Solicita por la red la descarga del archivo JavaScript.
              3. Ejecuta el script inmediatamente en el hilo principal.
              4. Solo cuando el script ha finalizado, el navegador reanuda la construcción del HTML.
              
              Si el archivo \`app.js\` es pesado o la conexión es lenta, el usuario percibe una **pantalla en blanco o congelada**. Para solucionar este problema histórico, HTML5 introdujo dos atributos clave: **\`defer\`** y **\`async\`**:

              | Atributo | Descarga | Momento de Ejecución | ¿Respeta el orden de los scripts? | Caso de uso típico |
              | :--- | :--- | :--- | :--- | :--- |
              | **Sin atributo** | Bloquea el HTML | Inmediata (bloqueando) | Sí | Scripts obsoletos o ubicados justo antes del \`</body>\` |
              | **\`defer\`** | En segundo plano (paralelo) | **Al finalizar el parseo del HTML** (justo antes de \`DOMContentLoaded\`) | **Sí, en el orden en que aparecen** | **Estándar recomendado para scripts de aplicación que interactúan con el DOM** |
              | **\`async\`** | En segundo plano (paralelo) | **En cuanto termina de descargarse** (interrumpiendo el HTML si aún no ha terminado) | **No** (el primero que baje se ejecuta) | Scripts de terceros independientes (Google Analytics, anuncios, métricas) |

              \`\`\`html
              <!-- RECOMENDACIÓN OFICIAL EN EL <head>: defer garantiza que todo el HTML ya está leído -->
              <head>
                <meta charset="UTF-8">
                <title>Portal DAW</title>
                <script src="js/utilidades.js" defer></script>
                <script src="js/app.js" defer></script>
              </head>
              \`\`\`
            `
          },
          {
            title: "3. La Consola de Desarrollo (DevTools) y diagnóstico profesional",
            content: `
              En 1º DAW nunca utilizaremos \`alert()\` para depurar aplicaciones, ya que bloquea el hilo del navegador y degrada la experiencia de usuario. En su lugar, utilizamos la **Consola de Herramientas de Desarrollador** (accesible pulsando **F12** o \`Ctrl + Mayús + I\` en Chrome/Firefox):

              * **\`console.log(mensaje, valor)\`**: Muestra información general y valores de variables.
              * **\`console.warn(mensaje)\`**: Emite un mensaje de advertencia visualizado con triángulo amarillo.
              * **\`console.error(mensaje)\`**: Registra un error crítico destacado en rojo, incluyendo la traza de la llamada.
              * **\`console.table(arrayUObjeto)\`**: Renderiza colecciones de datos o arrays en una elegante tabla interactiva con columnas ordenables.
              * **\`console.clear()\`**: Limpia el historial de la consola.

              \`\`\`javascript
              // Ejemplo en consola
              const modulo = "Lenguajes de Marcas";
              const horas = 14;
              console.log("Módulo activo:", modulo, "| Horas UT3:", horas);

              const alumnos = [
                { id: 1, nombre: "Lucía", nota: 9 },
                { id: 2, nombre: "Marcos", nota: 8.5 }
              ];
              console.table(alumnos);
              \`\`\`
            `
          },
          {
            title: "4. Fundamentos sintácticos modernos: const, let y tipos primitivos",
            content: `
              En el estándar moderno de JavaScript (ECMAScript 6 en adelante) la antigua palabra clave \`var\` ha quedado en desuso debido a sus problemas de elevación (*hoisting*) y ámbito global. En su lugar, aplicamos la regla de oro:

              * **\`const\` (Uso predeterminado)**: Declara identificadores cuyo valor o referencia no se reasignará. Aporta inmutabilidad y previene errores accidentales.
              * **\`let\`**: Se utiliza exclusivamente cuando la variable va a cambiar de valor a lo largo del tiempo (por ejemplo, contadores o acumuladores en bucles).
              * Ambas poseen **ámbito de bloque** (*block scope*), delimitado por las llaves \`{ ... }\`.

              \`\`\`javascript
              // Correcto: const por defecto
              const IVA = 0.21;
              const centro = "CIFP Carlos III";

              // let solo si su valor va a variar
              let contadorAsistentes = 0;
              contadorAsistentes += 1;

              // Tipos primitivos en JS
              const texto = "Cadena de caracteres"; // string
              const edad = 20;                     // number (enteros y decimales)
              const matriculado = true;            // boolean (true / false)
              const vacio = null;                  // null (intencionadamente sin valor)
              let noDefinido;                      // undefined (variable declarada sin asignar)

              // Cadenas de plantilla (Template Literals) con comillas invertidas
              const saludo = \`Bienvenido al \${centro}. El IVA aplicable es del \${IVA * 100}%.\`;
              console.log(saludo);
              \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut3-b1-1",
          question: "¿Por qué se recomienda utilizar el atributo `defer` al enlazar scripts JavaScript en la cabecera `<head>`?",
          options: [
            "Porque comprime el archivo JavaScript a la mitad de su tamaño original.",
            "Porque descarga el script en segundo plano sin detener el análisis del HTML y lo ejecuta en orden una vez que el árbol DOM está completamente construido.",
            "Porque desactiva la ejecución de JavaScript en dispositivos móviles lentos.",
            "Porque evita que otros usuarios puedan ver el código fuente en las herramientas de desarrollo."
          ],
          correctIndex: 1,
          explanation: "El atributo 'defer' descarga el script asíncronamente en paralelo al parseo del HTML y pospone su ejecución exactamente hasta que el documento HTML ha sido completamente procesado, respetando el orden secuencial de los scripts declarados."
        },
        {
          id: "q-ut3-b1-2",
          question: "Entre los atributos `async` y `defer`, ¿cuál es la diferencia principal en el momento de ejecución?",
          options: [
            "`async` solo funciona en navegadores basados en Linux.",
            "`defer` ejecuta el script inmediatamente tras descargarse interrumpiendo el HTML, mientras que `async` espera a que termine la página.",
            "`async` ejecuta el script tan pronto como finaliza su descarga (sin garantizar el orden entre scripts), mientras que `defer` espera a que termine el parseo del HTML y mantiene el orden relativo.",
            "No existe ninguna diferencia; son dos palabras sinónimas introducidas en HTML5."
          ],
          correctIndex: 2,
          explanation: "Los scripts con 'async' se ejecutan inmediatamente en cuanto terminan de descargarse, lo que puede romper dependencias entre librerías si se descargan en orden inesperado. Por contra, 'defer' siempre preserva el orden de aparición y espera al final del parseo del documento."
        },
        {
          id: "q-ut3-b1-3",
          question: "¿Cuál es la recomendación profesional moderna para declarar variables en JavaScript en lugar del clásico `var`?",
          options: [
            "Usar siempre `global` para que estén disponibles en todas las funciones.",
            "Utilizar `const` por defecto para valores constantes o referencias estables, y `let` únicamente cuando la variable deba reasignarse.",
            "Declarar todas las variables sin ninguna palabra clave delante.",
            "Utilizar únicamente `define` como en el lenguaje C."
          ],
          correctIndex: 1,
          explanation: "'const' y 'let' poseen ámbito de bloque (block scope) y evitan la fuga de variables al ámbito global; se debe usar 'const' como primera opción y 'let' solo si el valor necesita mutar."
        },
        {
          id: "q-ut3-b1-4",
          question: "¿Qué método del objeto `console` es ideal para mostrar colecciones de objetos o arrays tabulados con filas y columnas?",
          options: [
            "console.alert()",
            "console.print()",
            "console.table()",
            "console.window()"
          ],
          correctIndex: 2,
          explanation: "console.table() renderiza matrices y listas de objetos de forma estructurada en una tabla visual con cabeceras y ordenación por columna."
        }
      ],
      exercises: [
        {
          id: "ex-ut3-b1",
          title: "Diagnóstico inicial de entorno y vinculación segura de scripts",
          description: "Configura la estructura HTML con un script diferido (defer) y escribe la lógica de inicialización en JavaScript utilizando const, let, template literals y mensajes estructurados por consola.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 1: Vinculación JS</title>
  <!-- Tarea 1: Vincula aquí el script 'app.js' con el atributo defer -->

</head>
<body>
  <header>
    <h1>Consola de Control - 1º DAW</h1>
    <p id="estado">Iniciando aplicación...</p>
  </header>

  <script>
    // Tarea 2: Declara una constante para el nombre del centro 'CIFP Carlos III'
    // Tarea 3: Declara con let un contador de visitas inicializado en 1
    // Tarea 4: Imprime en consola un mensaje con template literals mostrando centro y visitas
    // Tarea 5: Muestra en consola una tabla con al menos dos módulos: LMSGI (116h) y BD (192h)
    
  </script>
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Añade en el <head> la etiqueta <script src=\"app.js\" defer></script> para demostrar la vinculación externa no bloqueante.",
            "2. En el bloque de script interno, declara con const la variable 'centro' con el valor 'CIFP Carlos III'.",
            "3. Declara con let la variable 'contadorVisitas' inicializada a 1 e increméntala en 1 unidad.",
            "4. Utiliza console.log() con cadenas de plantilla (template literals con backticks `...`) para imprimir: 'Bienvenido al [centro]. Visitas registradas: [contadorVisitas]'.",
            "5. Declara un array 'modulos' con dos objetos ({ nombre: 'LMSGI', horas: 116 }, { nombre: 'BD', horas: 192 }) y visualízalo con console.table(modulos)."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 1: Vinculación JS</title>
  <script src="app.js" defer></script>
</head>
<body>
  <header>
    <h1>Consola de Control - 1º DAW</h1>
    <p id="estado">Iniciando aplicación...</p>
  </header>

  <script>
    const centro = "CIFP Carlos III";
    let contadorVisitas = 1;
    contadorVisitas++;

    console.log(\`Bienvenido al \${centro}. Visitas registradas: \${contadorVisitas}\`);

    const modulos = [
      { nombre: "LMSGI", horas: 116 },
      { nombre: "BD", horas: 192 }
    ];
    console.table(modulos);

    document.getElementById("estado").textContent = \`Sistema operativo en \${centro} (Sesión iniciada).\`;
  </script>
</body>
</html>`,
          hints: "Recuerda que las plantillas de texto se delimitan con comillas invertidas `...` y permiten interpolar variables mediante la sintaxis ${variable}."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 2 (2 HORAS - 1ª EVALUACIÓN)
       ========================================================================= */
    {
      id: "ut3-b2",
      blockNumber: 2,
      title: "El DOM (Document Object Model): estructura arbórea y métodos de selección",
      duration: "2 horas",
      session: "Sesión 2 (1ª Ev)",
      evaluation: "1ª Evaluación",
      ce: ["CE3c", "CE3d"],
      objectives: [
        "Comprender el DOM como la representación en memoria en forma de árbol de objetos del documento HTML.",
        "Identificar la jerarquía de nodos: Document, ElementNode, TextNode y AttributeNode.",
        "Navegar entre nodos por sus relaciones de parentesco (parentNode, children, firstElementChild, nextElementSibling).",
        "Dominar los métodos estándar de selección moderna: document.querySelector y document.querySelectorAll.",
        "Diferenciar con precisión técnica entre una NodeList estática y una HTMLCollection viva."
      ],
      theory: {
        intro: `
          Cuando el motor de un navegador carga un archivo HTML, no manipula directamente el código en texto plano. En su lugar, el analizador sintáctico procesa cada etiqueta y construye una **estructura de datos en memoria en forma de árbol jerárquico** denominada **DOM** (*Document Object Model*).
          
          El DOM es una **interfaz de programación de aplicaciones (API)** estándar del W3C/WHATWG que permite a lenguajes como JavaScript inspeccionar, consultar, recorrer y modificar cada elemento, atributo y texto de la página en tiempo real.
        `,
        sections: [
          {
            title: "1. La estructura arbórea del DOM: El objeto global document",
            content: `
              En el vértice superior de la jerarquía se encuentra el objeto global **\`window\`** (que representa la ventana del navegador), y dentro de él, la propiedad **\`window.document\`** (o simplemente **\`document\`**), que constituye el punto de entrada a todo el contenido del documento web:

              \`\`\`text
                                     [window]
                                        |
                                    [document]
                                        |
                                 <html> (Element)
                                  /            \\
                        <head> (Element)     <body> (Element)
                          /        \\             /         \\
                      <title>    <meta>     <header>      <main>
                         |                     |             |
                    "Mi Portal" (Text)        <h1>        <article>
              \`\`\`

              * **Tipos de Nodos principales**:
                * **\`Document\`**: El nodo raíz del documento (\`document\`).
                * **\`Element\` (tipo 1)**: Nodos que representan etiquetas HTML (\`<div>\`, \`<p>\`, \`<button>\`). Tienen atributos y pueden contener hijos.
                * **\`Text\` (tipo 3)**: El contenido textual encerrado dentro de un elemento. Los espacios en blanco y saltos de línea también cuentan como nodos de texto.
                * **\`Comment\` (tipo 8)**: Los comentarios HTML \`<!-- ... -->\`.
            `
          },
          {
            title: "2. Métodos modernos de selección: querySelector y querySelectorAll",
            content: `
              La forma estándar y profesional de seleccionar elementos en JavaScript moderno es la API de selectores CSS mediante dos métodos:

              * **\`document.querySelector(selectorCSS)\`**:
                * Busca en el documento y **devuelve el PRIMER elemento** que coincida con la consulta CSS proporcionada.
                * Si no encuentra ninguna coincidencia, devuelve **\`null\`**.
                \`\`\`javascript
                // Selecciona por ID
                const cabecera = document.querySelector("#encabezado-principal");

                // Selecciona por clase (el primero que encuentre)
                const primeraTarjeta = document.querySelector(".tarjeta-producto");

                // Selector descendiente complejo
                const primerBotonActivo = document.querySelector("main .panel button.btn-primario");
                \`\`\`

              * **\`document.querySelectorAll(selectorCSS)\`**:
                * Busca y **devuelve TODOS los elementos** que coincidan con el selector, empaquetados en una **\`NodeList\`** (lista de nodos).
                * Si no hay coincidencias, devuelve una lista vacía (\`length === 0\`), nunca \`null\`.
                * La \`NodeList\` dispone nativamente del método **\`forEach()\`** para iterar sobre cada coincidencia:
                \`\`\`javascript
                const todosLosEnlaces = document.querySelectorAll("nav a");
                todosLosEnlaces.forEach((enlace, indice) => {
                  console.log(\`Enlace \${indice + 1}: \${enlace.href}\`);
                });
                \`\`\`
            `
          },
          {
            title: "3. Métodos tradicionales vs modernos y NodeList vs HTMLCollection",
            content: `
              En códigos antiguos de JavaScript es habitual encontrar métodos del DOM Level 1 y 2:

              * \`document.getElementById("nombreId")\`: Muy rápido, pero solo busca por ID simple.
              * \`document.getElementsByClassName("clase")\`: Devuelve una colección de elementos.
              * \`document.getElementsByTagName("div")\`: Devuelve todos los elementos con esa etiqueta.

              ### Diferencia crítica entre HTMLCollection y NodeList:
              * **\`HTMLCollection\` (viva / live)**: Devuelta por \`getElementsByClassName\` y \`getElementsByTagName\`. Si se añade o elimina un elemento del DOM más adelante, la colección se actualiza automáticamente en memoria, lo que puede provocar bucles infinitos o comportamientos inesperados. No tiene método \`forEach\` directo.
              * **\`NodeList\` (estática / static)**: Devuelta por **\`querySelectorAll()\`**. Es una "fotografía" instantánea del DOM en el momento exacto de la consulta. Es inmutable frente a cambios posteriores, más segura y cuenta con \`.forEach()\`. Por ello, en 1º DAW **priorizamos siempre \`querySelector\` y \`querySelectorAll\`**.
            `
          },
          {
            title: "4. Navegación por relaciones de parentesco en el DOM",
            content: `
              Una vez seleccionado un elemento de partida, podemos movernos por el árbol usando sus propiedades relacionales de elementos (ignorando nodos de texto vacíos):

              * **\`elemento.parentElement\`**: Accede al nodo padre directo.
              * **\`elemento.children\`**: Colección de todos los elementos hijos inmediatos.
              * **\`elemento.firstElementChild\`**: Primer elemento hijo.
              * **\`elemento.lastElementChild\`**: Último elemento hijo.
              * **\`elemento.nextElementSibling\`**: El siguiente elemento hermano contiguo.
              * **\`elemento.previousElementSibling\`**: El elemento hermano anterior.

              \`\`\`javascript
              const lista = document.querySelector("#menu-navegacion");
              const primerItem = lista.firstElementChild; // Primer <li>
              const siguienteItem = primerItem.nextElementSibling; // Segundo <li>
              const contenedorPadre = lista.parentElement; // <nav>
              \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut3-b2-1",
          question: "¿Qué devuelve la instrucción `document.querySelector('.alerta')` si en el documento HTML existen cuatro elementos con la clase 'alerta'?",
          options: [
            "Un array con los cuatro elementos.",
            "Únicamente el primer elemento que coincide con la clase según el orden del documento.",
            "Un error de tipo porque la consulta es ambigua.",
            "El último elemento con dicha clase."
          ],
          correctIndex: 1,
          explanation: "querySelector devuelve siempre y únicamente el primer elemento coincidente que encuentra en el árbol DOM. Si se desearan los cuatro elementos, debería emplearse document.querySelectorAll('.alerta')."
        },
        {
          id: "q-ut3-b2-2",
          question: "¿Cuál es el valor retornado por `document.querySelector('#elemento-inexistente')` si dicho ID no figura en el documento?",
          options: [
            "undefined",
            "false",
            "null",
            "Una excepción de tipo DOMException."
          ],
          correctIndex: 2,
          explanation: "Cuando querySelector no encuentra ninguna coincidencia para el selector especificado, devuelve formalmente el valor 'null'."
        },
        {
          id: "q-ut3-b2-3",
          question: "¿Qué diferencia técnica fundamental existe entre la NodeList devuelta por `querySelectorAll` y la HTMLCollection devuelta por `getElementsByClassName`?",
          options: [
            "La NodeList es estática (una captura fija en el momento de la llamada) y soporta forEach, mientras que HTMLCollection es viva y se actualiza automáticamente si el DOM cambia.",
            "HTMLCollection solo funciona en navegadores antiguos y NodeList solo en Chrome.",
            "La NodeList solo puede almacenar nodos de texto, nunca etiquetas HTML.",
            "No existe ninguna diferencia; son dos alias del mismo objeto interno."
          ],
          correctIndex: 0,
          explanation: "querySelectorAll devuelve una NodeList estática que no muta si se crean o borran elementos en el DOM posteriormente, ofreciendo mayor predictibilidad e incluyendo métodos de iteración como forEach()."
        },
        {
          id: "q-ut3-b2-4",
          question: "Si tenemos un elemento `itemLi`, ¿qué propiedad permite saltar de forma limpia al siguiente elemento hermano directo sin tropezar con espacios en blanco o saltos de línea?",
          options: [
            "itemLi.nextSibling",
            "itemLi.nextElementSibling",
            "itemLi.brotherElement",
            "itemLi.nextChild"
          ],
          correctIndex: 1,
          explanation: "nextElementSibling salta exclusivamente al siguiente nodo de tipo Elemento (ignorando los nodos de tipo Text generados por saltos de línea o espacios en blanco del código fuente)."
        }
      ],
      exercises: [
        {
          id: "ex-ut3-b2",
          title: "Auditoría e inspección del árbol DOM con querySelector y navegación familiar",
          description: "Aplica los métodos de selección modernos sobre una lista de módulos de DAW para identificar elementos, resaltar los cursos y recorrer el árbol mediante relaciones de parentesco.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 2: Selección en el DOM</title>
  <style>
    .destacado { background-color: #fef08a; font-weight: bold; }
    .borde-padre { border: 2px dashed #0284c7; padding: 10px; }
  </style>
</head>
<body>
  <div id="contenedor-daw">
    <h2>Módulos Profesionales de 1º DAW</h2>
    <ul id="lista-modulos">
      <li class="modulo teorico">Sistemas Informáticos</li>
      <li class="modulo practico">Bases de Datos</li>
      <li class="modulo practico">Programación</li>
      <li class="modulo prioritario">Lenguajes de Marcas</li>
      <li class="modulo legal">Entornos de Desarrollo</li>
    </ul>
    <p id="total-info">Total de módulos inspeccionados: 0</p>
  </div>

  <script>
    // Tarea 1: Selecciona con querySelector el módulo prioritario y almacénalo en 'moduloLM'
    
    // Tarea 2: Selecciona con querySelectorAll todos los elementos 'li.modulo' en 'todosLosModulos'
    
    // Tarea 3: Modifica el texto de '#total-info' indicando el número real de módulos encontrados
    
    // Tarea 4: A partir de 'moduloLM', accede a su elemento padre y añádele la clase 'borde-padre'
    
  </script>
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Utiliza document.querySelector() con el selector '.modulo.prioritario' para capturar el elemento de Lenguajes de Marcas.",
            "2. Utiliza document.querySelectorAll() con el selector '#lista-modulos li' para obtener la lista de todos los módulos.",
            "3. Actualiza el texto de '#total-info' usando textContent para que muestre exactamente: 'Total de módulos inspeccionados: [número]' empleando todosLosModulos.length.",
            "4. A través de la propiedad parentElement del módulo capturado, accede al <ul> y añádele la clase 'borde-padre' mediante lista.classList.add('borde-padre').",
            "5. Itera sobre todosLosModulos con forEach y muestra el nombre de cada uno por consola."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 2: Selección en el DOM</title>
  <style>
    .destacado { background-color: #fef08a; font-weight: bold; }
    .borde-padre { border: 2px dashed #0284c7; padding: 10px; }
  </style>
</head>
<body>
  <div id="contenedor-daw">
    <h2>Módulos Profesionales de 1º DAW</h2>
    <ul id="lista-modulos">
      <li class="modulo teorico">Sistemas Informáticos</li>
      <li class="modulo practico">Bases de Datos</li>
      <li class="modulo practico">Programación</li>
      <li class="modulo prioritario">Lenguajes de Marcas</li>
      <li class="modulo legal">Entornos de Desarrollo</li>
    </ul>
    <p id="total-info">Total de módulos inspeccionados: 0</p>
  </div>

  <script>
    const moduloLM = document.querySelector(".modulo.prioritario");
    const todosLosModulos = document.querySelectorAll("#lista-modulos li");

    const parrafoInfo = document.querySelector("#total-info");
    parrafoInfo.textContent = \`Total de módulos inspeccionados: \${todosLosModulos.length}\`;

    if (moduloLM && moduloLM.parentElement) {
      moduloLM.parentElement.classList.add("borde-padre");
      moduloLM.classList.add("destacado");
    }

    todosLosModulos.forEach((mod, index) => {
      console.log(\`[\${index + 1}] \${mod.textContent}\`);
    });
  </script>
</body>
</html>`,
          hints: "El método querySelectorAll('#lista-modulos li') devuelve una NodeList que posee la propiedad length con la cantidad exacta de elementos hijos."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 3 (2 HORAS - 1ª EVALUACIÓN)
       ========================================================================= */
    {
      id: "ut3-b3",
      blockNumber: 3,
      title: "Modificación dinámica de atributos, contenido textual e inyección de estilos",
      duration: "2 horas",
      session: "Sesión 3 (1ª Ev)",
      evaluation: "1ª Evaluación",
      ce: ["CE3d", "CE3e"],
      objectives: [
        "Actualizar texto de forma segura con textContent y comprender los riesgos de inyección de código (XSS) al usar innerHTML.",
        "Manejar atributos HTML con getAttribute, setAttribute, removeAttribute y hasAttribute.",
        "Gestionar atributos de datos personalizados mediante la API dataset (data-*).",
        "Controlar el aspecto visual mediante la API classList (add, remove, toggle, contains) frente a la manipulación en línea de style.",
        "Implementar un conmutador interactivo de Modo Claro / Modo Oscuro."
      ],
      theory: {
        intro: `
          Una vez localizados los elementos del árbol DOM mediante los selectores, el siguiente paso consiste en **alterar su contenido, modificar sus atributos y cambiar su presentación visual** en respuesta a la lógica de la aplicación.
          
          En esta sesión aprenderemos a manipular el DOM con **criterios estrictos de seguridad** y buenas prácticas, garantizando una separación limpia entre la lógica de programación y las reglas de diseño CSS.
        `,
        sections: [
          {
            title: "1. Modificación de contenido: textContent frente a innerHTML (Riesgos XSS)",
            content: `
              Existen dos propiedades principales para alterar el interior de un elemento:

              * **\`elemento.textContent\` (Propiedad segura y recomendada)**:
                * Inserta o lee texto plano.
                * **Seguridad total**: Si el texto contiene caracteres como \`<script>\` o \`<img onerror=...>\`, el navegador los trata como texto literal plano, neutralizando cualquier intento de inyección de código malicioso (**ataques XSS - Cross-Site Scripting**).
                * Rendimiento superior: No invoca al motor de parseo de HTML.
                \`\`\`javascript
                const parrafo = document.querySelector("#aviso");
                // Seguro: no se interpretará como etiqueta HTML
                parrafo.textContent = "El resultado es: <strong>Correcto</strong>";
                \`\`\`

              * **\`elemento.innerHTML\` (Usar con extrema precaución)**:
                * Interpreta el string proporcionado como código HTML y genera nuevos nodos en el DOM.
                * **Riesgo crítico**: Si se concatena directamente información introducida por un usuario (por ejemplo desde un campo de formulario), un atacante puede ejecutar scripts no autorizados o robar cookies de sesión.
                * **Regla de oro en 1º DAW**: Si solo necesitas mostrar texto o datos, utiliza siempre **\`textContent\`**. Reserva \`innerHTML\` exclusivamente cuando necesites inyectar plantillas HTML estáticas y controladas por el propio desarrollador.
            `
          },
          {
            title: "2. Manipulación de atributos: La API de atributos y propiedades DOM",
            content: `
              Los atributos de una etiqueta HTML se gestionan mediante cuatro métodos estándar:

              * **\`elemento.setAttribute("nombre", "valor")\`**: Añade un atributo o actualiza su valor.
              * **\`elemento.getAttribute("nombre")\`**: Lee el valor del atributo (devuelve \`null\` si no existe).
              * **\`elemento.hasAttribute("nombre")\`**: Devuelve \`true\` o \`false\` según si el atributo existe.
              * **\`elemento.removeAttribute("nombre")\`**: Elimina el atributo por completo del elemento.

              \`\`\`javascript
              const enlace = document.querySelector("#enlace-portal");
              enlace.setAttribute("href", "https://cifpcarlos3.es");
              enlace.setAttribute("target", "_blank");
              enlace.setAttribute("title", "Abre el sitio web del centro en una nueva pestaña");

              // Atributos booleanos (disabled, required, checked)
              const botonEnviar = document.querySelector("#btn-submit");
              botonEnviar.setAttribute("disabled", ""); // Deshabilita el botón
              botonEnviar.removeAttribute("disabled");  // Vuelve a habilitarlo
              \`\`\`

              * **Acceso directo a propiedades reflejadas**:
                Muchos atributos estándar tienen propiedades correspondientes directas en el objeto DOM:
                \`\`\`javascript
                const imagen = document.querySelector("#foto-perfil");
                imagen.src = "img/avatar.png";
                imagen.alt = "Foto del usuario";
                \`\`\`
            `
          },
          {
            title: "3. Atributos de datos personalizados (data-* y la API dataset)",
            content: `
              HTML5 permite almacenar información y metadatos personalizados en cualquier elemento mediante atributos que comienzan con el prefijo **\`data-\`** (por ejemplo: \`data-id\`, \`data-precio\`, \`data-rol\`).
              
              En JavaScript, se accede a estos atributos de forma elegante a través de la propiedad **\`elemento.dataset\`**:

              \`\`\`html
              <button id="btn-comprar" data-producto-id="402" data-precio="19.95" data-en-oferta="true">
                Comprar
              </button>
              \`\`\`

              \`\`\`javascript
              const boton = document.querySelector("#btn-comprar");

              // Los nombres kebab-case (data-producto-id) se convierten automáticamente a camelCase (productoId)
              console.log("ID del producto:", boton.dataset.productoId); // "402"
              console.log("Precio:", boton.dataset.precio);              // "19.95"

              // Modificar un dato personalizado
              boton.dataset.precio = "24.95";
              \`\`\`
            `
          },
          {
            title: "4. Estilos y estados: La API classList frente a la propiedad style",
            content: `
              Para cambiar el diseño de un elemento hay dos aproximaciones:

              * **Aproximación incorrecta / desaconsejada**: Modificar estilos en línea con \`elemento.style.color = "red"\`. Genera estilos inline difíciles de sobreescribir, dispersa el diseño en el código JavaScript y rompe la separación de responsabilidades.
              * **Aproximación profesional (classList)**: Definir las clases visuales en la hoja de estilos CSS y limitarse desde JavaScript a añadir, quitar o alternar dichas clases.

              ### Métodos de \`classList\`:
              * **\`classList.add("nombreClase")\`**: Añade una o varias clases.
              * **\`classList.remove("nombreClase")\`**: Elimina la clase si está presente.
              * **\`classList.toggle("nombreClase")\`**: **La estrella del diseño reactivo**: Si la clase ya existe, la quita; si no existe, la añade. Devuelve \`true\` si se añadió o \`false\` si se eliminó.
              * **\`classList.contains("nombreClase")\`**: Comprueba si el elemento posee actualmente esa clase.

              \`\`\`javascript
              // Conmutador de modo oscuro en una sola línea
              const botonModo = document.querySelector("#btn-modo");
              botonModo.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");
              });
              \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut3-b3-1",
          question: "¿Por qué motivo de seguridad se debe evitar el uso de `innerHTML` al mostrar datos introducidos por usuarios?",
          options: [
            "Porque consume el triple de memoria RAM en el servidor web.",
            "Porque puede permitir ataques de inyección de código malicioso XSS (Cross-Site Scripting) si el texto contiene etiquetas ejecutables.",
            "Porque la W3C eliminó innerHTML de la especificación oficial de HTML5.",
            "Porque solo funciona en navegadores en inglés."
          ],
          correctIndex: 1,
          explanation: "innerHTML interpreta cualquier código HTML embebido; si un usuario introduce texto malicioso como <img src=x onerror=...>, el navegador lo ejecutará. Por contra, textContent neutraliza el ataque tratándolo como texto plano inofensivo."
        },
        {
          id: "q-ut3-b3-2",
          question: "¿Qué acción realiza la instrucción `caja.classList.toggle('visible')`?",
          options: [
            "Elimina permanentemente el elemento del árbol DOM.",
            "Añade la clase 'visible' si no estaba presente, o la elimina si ya existía en el elemento.",
            "Obliga a que todos los elementos hermanos tengan la clase 'visible'.",
            "Cambia el color del texto a azul visible."
          ],
          correctIndex: 1,
          explanation: "classList.toggle actúa como un interruptor binario: si la clase existe, la retira; si no existe, la añade en una única instrucción limpia y atómica."
        },
        {
          id: "q-ut3-b3-3",
          question: "Si un elemento HTML contiene el atributo `data-codigo-postal=\"30201\"`, ¿cómo se accede a dicho valor en JavaScript mediante la API `dataset`?",
          options: [
            "elemento.dataset['data-codigo-postal']",
            "elemento.dataset.codigoPostal",
            "elemento.data.codigo_postal",
            "elemento.getAttributeData('codigo-postal')"
          ],
          correctIndex: 1,
          explanation: "La API dataset convierte automáticamente los atributos kebab-case (data-codigo-postal) a notación camelCase (codigoPostal) para su acceso como propiedades directas."
        },
        {
          id: "q-ut3-b3-4",
          question: "¿Cómo se elimina completamente el atributo `disabled` de un botón para que vuelva a estar operativo?",
          options: [
            "boton.disabled = 'habilitado';",
            "boton.setAttribute('disabled', 'false');",
            "boton.removeAttribute('disabled');",
            "boton.deleteAttribute('disabled');"
          ],
          correctIndex: 2,
          explanation: "Los atributos booleanos como disabled se activan por su simple presencia en la etiqueta (incluso si tienen valor 'false'). Para deshabilitarlos efectivamente en el HTML se debe emplear removeAttribute('disabled') o asignar la propiedad boton.disabled = false."
        }
      ],
      exercises: [
        {
          id: "ex-ut3-b3",
          title: "Diseño de un conmutador de tema visual y tarjeta de perfil reactiva",
          description: "Manipula los atributos, clases y contenidos textuales de una tarjeta de alumno utilizando textContent, dataset, setAttribute y classList.toggle.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 3: Manipulación y Clases</title>
  <style>
    body { font-family: sans-serif; transition: background 0.3s, color 0.3s; padding: 20px; }
    .modo-oscuro { background-color: #1e293b; color: #f8fafc; }
    .tarjeta { border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; max-width: 320px; }
    .tarjeta.aprobado { border-color: #22c55e; background-color: #f0fdf4; color: #166534; }
    .badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
    .btn { cursor: pointer; padding: 8px 12px; margin-top: 10px; border-radius: 4px; border: none; }
  </style>
</head>
<body>
  <button id="btn-tema" class="btn">Alternar Modo Oscuro</button>

  <div id="perfil-alumno" class="tarjeta" data-matricula="DAW-2026-99" data-calificacion="8.7">
    <h3 id="nombre-alumno">Nombre Pendiente</h3>
    <p>Estado de Matrícula: <span id="estado-matricula" class="badge">Sin verificar</span></p>
    <a id="enlace-expediente" href="#">Ver Expediente</a>
  </div>

  <script>
    // Tarea 1: Asigna a #nombre-alumno el texto 'Elena Ruiz Martínez' usando textContent
    
    // Tarea 2: Lee los atributos data-matricula y data-calificacion del div #perfil-alumno
    
    // Tarea 3: Si la calificación es >= 5, añade la clase 'aprobado' a la tarjeta y cambia el badge a 'Aprobado (8.7)'
    
    // Tarea 4: Configura el enlace #enlace-expediente con href="expediente.html?id=DAW-2026-99" y target="_blank"
    
    // Tarea 5: Al pulsar #btn-tema, haz un toggle de la clase 'modo-oscuro' sobre document.body
    
  </script>
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Localiza '#nombre-alumno' y asigna con textContent el nombre 'Elena Ruiz Martínez'.",
            "2. Lee mediante la propiedad dataset la matrícula y la calificación del elemento '#perfil-alumno'.",
            "3. Convierte la calificación a número (parseFloat) y, si es >= 5, añade la clase 'aprobado' al contenedor '#perfil-alumno' y cambia el texto de '#estado-matricula' a 'Aprobado ([calificacion])'.",
            "4. Utiliza setAttribute sobre '#enlace-expediente' para definir href=\"expediente.html?id=[matricula]\" y target=\"_blank\".",
            "5. Añade al botón '#btn-tema' el evento click (o función) que ejecute document.body.classList.toggle('modo-oscuro')."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 3: Manipulación y Clases</title>
  <style>
    body { font-family: sans-serif; transition: background 0.3s, color 0.3s; padding: 20px; }
    .modo-oscuro { background-color: #1e293b; color: #f8fafc; }
    .tarjeta { border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; max-width: 320px; }
    .tarjeta.aprobado { border-color: #22c55e; background-color: #f0fdf4; color: #166534; }
    .badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
    .btn { cursor: pointer; padding: 8px 12px; margin-top: 10px; border-radius: 4px; border: none; }
  </style>
</head>
<body>
  <button id="btn-tema" class="btn">Alternar Modo Oscuro</button>

  <div id="perfil-alumno" class="tarjeta" data-matricula="DAW-2026-99" data-calificacion="8.7">
    <h3 id="nombre-alumno">Nombre Pendiente</h3>
    <p>Estado de Matrícula: <span id="estado-matricula" class="badge">Sin verificar</span></p>
    <a id="enlace-expediente" href="#">Ver Expediente</a>
  </div>

  <script>
    const nombreEl = document.querySelector("#nombre-alumno");
    nombreEl.textContent = "Elena Ruiz Martínez";

    const tarjeta = document.querySelector("#perfil-alumno");
    const matricula = tarjeta.dataset.matricula;
    const calificacion = parseFloat(tarjeta.dataset.calificacion);

    const estadoEl = document.querySelector("#estado-matricula");
    if (calificacion >= 5) {
      tarjeta.classList.add("aprobado");
      estadoEl.textContent = \`Aprobado (\${calificacion})\`;
    }

    const enlace = document.querySelector("#enlace-expediente");
    enlace.setAttribute("href", \`expediente.html?id=\${matricula}\`);
    enlace.setAttribute("target", "_blank");

    const btnTema = document.querySelector("#btn-tema");
    btnTema.addEventListener("click", () => {
      document.body.classList.toggle("modo-oscuro");
    });
  </script>
</body>
</html>`,
          hints: "Accede a los atributos de datos con tarjeta.dataset.matricula y tarjeta.dataset.calificacion. parseFloat() convierte el string a número decimal para la comparación lógica."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 4 (2 HORAS - 1ª EVALUACIÓN)
       ========================================================================= */
    {
      id: "ut3-b4",
      blockNumber: 4,
      title: "Gestión de eventos en el DOM (listeners, bubbling y delegación)",
      duration: "2 horas",
      session: "Sesión 4 (1ª Ev)",
      evaluation: "1ª Evaluación",
      ce: ["CE3e", "CE3f"],
      objectives: [
        "Comprender el paradigma de programación dirigida por eventos en la web.",
        "Implementar escuchadores con el método estándar addEventListener y funciones callback.",
        "Manejar el objeto Event (e) y diferenciar e.target de e.currentTarget.",
        "Prevenir la recarga y acciones por defecto con e.preventDefault() en formularios y enlaces.",
        "Comprender el ciclo de propagación de eventos (captura y burbujeo / bubbling) y dominar la técnica de delegación de eventos."
      ],
      theory: {
        intro: `
          Hasta ahora hemos alterado el DOM al cargar la página. Sin embargo, una aplicación web moderna es eminentemente **reactiva**: permanece a la escucha esperando a que ocurran **eventos** (un clic del ratón, la pulsación de una tecla, el envío de un formulario o el movimiento táctil) para ejecutar una respuesta lógica inmediata.
          
          El modelo de eventos del W3C proporciona un mecanismo robusto y desacoplado mediante el método **\`addEventListener\`**, el control de la propagación por burbujeo y la intercepción de comportamientos predeterminados.
        `,
        sections: [
          {
            title: "1. Escuchadores de eventos estándar: addEventListener",
            content: `
              La forma profesional y estándar de vincular lógica a un evento es **\`elemento.addEventListener(tipoEvento, callback)\`**:

              * **\`tipoEvento\`**: String con el nombre del evento (en minúsculas, sin el prefijo 'on'): \`"click"\`, \`"submit"\`, \`"input"\`, \`"change"\`, \`"keydown"\`.
              * **\`callback\`**: La función que el navegador ejecutará cuando el evento tenga lugar.
              * **Ventajas frente a propiedades antiguas (\`onclick = fn\`)**:
                * Permite registrar **múltiples escuchadores independientes** sobre el mismo evento sin pisarse entre sí.
                * Permite desregistrar escuchadores con \`removeEventListener\`.
                * Funciona limpiamente en cualquier elemento del DOM.

              \`\`\`javascript
              const boton = document.querySelector("#btn-accion");

              // Función flecha como callback
              boton.addEventListener("click", () => {
                console.log("¡El usuario ha hecho clic!");
              });

              // Función con nombre
              function notificarCambio() {
                console.log("Campo modificado");
              }
              document.querySelector("#nombre").addEventListener("input", notificarCambio);
              \`\`\`
            `
          },
          {
            title: "2. El objeto Event (e) y la prevención de acciones: preventDefault()",
            content: `
              Cuando se dispara un evento, el navegador crea automáticamente un **objeto con información detallada sobre el suceso** y lo pasa como primer parámetro a la función de callback (comúnmente denominado \`e\` o \`event\`):

              * **\`e.target\`**: El elemento exacto y específico sobre el que ocurrió la acción física (por ejemplo, el botón que se pulsó).
              * **\`e.type\`**: El nombre del evento (\`"click"\`, \`"submit"\`).
              * **\`e.key\`**: En eventos de teclado (\`keydown\`), la tecla física pulsada (\`"Enter"\`, \`"Escape"\`).

              ### Cancelación de la acción nativa con \`e.preventDefault()\`:
              Por defecto, cuando un usuario envía un formulario (\`<form>\`), el navegador envía la petición HTTP y **recarga la página completa**. De igual modo, al pulsar un enlace (\`<a>\`), el navegador salta a otra URL.
              
              Si queremos validar los datos con JavaScript en el cliente o realizar una petición asíncrona sin recarga, debemos invocar obligatoriamente **\`e.preventDefault()\`**:

              \`\`\`javascript
              const formulario = document.querySelector("#form-contacto");

              formulario.addEventListener("submit", (e) => {
                // FRENAR LA RECARGA NATIVA DEL NAVEGADOR
                e.preventDefault();

                const campoEmail = document.querySelector("#email");
                if (campoEmail.value.trim() === "") {
                  alert("El correo es obligatorio");
                  return;
                }

                console.log("Formulario validado con éxito sin recargar la página.");
              });
              \`\`\`
            `
          },
          {
            title: "3. Propagación de eventos: Fases de captura y burbujeo (Bubbling)",
            content: `
              Cuando un usuario hace clic en un elemento interno (por ejemplo, un botón dentro de un \`<div>\`), el evento no ocurre de forma aislada. Atraviesa tres fases:

              1. **Fase de Captura (*Capturing*)**: El evento desciende desde el nodo raíz \`window\` y \`document\` hacia abajo hasta alcanzar el elemento diana.
              2. **Fase de Diana (*Target*)**: El evento llega al elemento que recibió la interacción directa.
              3. **Fase de Burbujeo (*Bubbling*)**: El evento asciende hacia arriba como una burbuja de aire, disparando los manejadores de sus padres, abuelos y ancestros hasta llegar a \`document\`.

              \`\`\`text
                 [document]        ^
                     |             |  Fase 3: Burbujeo (Bubbling)
                  <main>           |  (Los ancestros reciben el evento)
                     |             |
                   <div>           |
                     |             |
                  <button> --------+  Fase 2: Target
              \`\`\`

              * **\`e.stopPropagation()\`**: Detiene el ascenso del evento, evitando que los contenedores superiores se enteren del suceso. Se debe usar con moderación.
            `
          },
          {
            title: "4. Técnica de alto rendimiento: Delegación de eventos (Event Delegation)",
            content: `
              ¿Qué ocurre si tenemos una tabla con 100 filas o una lista donde el usuario añade elementos dinámicamente? Si añadiéramos un \`addEventListener\` a cada botón individual, consumiríamos memoria innecesaria y los botones que se creasen más adelante no tendrían el escuchador registrado.

              ### La solución: Delegación de eventos:
              Registramos **un único escuchador en el contenedor padre** y aprovechamos el burbujeo para detectar sobre qué hijo exacto se hizo clic mediante **\`e.target\`** y el método **\`closest()\`**:

              \`\`\`javascript
              const lista = document.querySelector("#lista-tareas");

              // Un solo listener para todos los botones presentes y futuros
              lista.addEventListener("click", (e) => {
                // Comprobamos si el clic provino de un botón de borrar
                const botonBorrar = e.target.closest(".btn-eliminar");
                if (botonBorrar) {
                  const tarea = botonBorrar.parentElement;
                  tarea.remove();
                  console.log("Tarea eliminada mediante delegación.");
                }
              });
              \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut3-b4-1",
          question: "¿Para qué sirve llamar a `e.preventDefault()` dentro del manejador del evento `submit` de un formulario?",
          options: [
            "Para vaciar inmediatamente todos los campos de texto del formulario.",
            "Para evitar que el navegador recargue la página o salte a la URL del action de forma nativa, permitiendo controlarlo con JavaScript.",
            "Para obligar al usuario a escribir una contraseña con números.",
            "Para cifrar los datos con una clave pública."
          ],
          correctIndex: 1,
          explanation: "e.preventDefault() cancela el comportamiento predeterminado que el navegador tiene asignado al evento, permitiendo validar y gestionar el envío en el cliente sin refrescar la página."
        },
        {
          id: "q-ut3-b4-2",
          question: "¿En qué consiste la técnica de 'Delegación de Eventos' (Event Delegation) en JavaScript?",
          options: [
            "En delegar la ejecución del código a un servidor Node.js remoto.",
            "En colocar un único escuchador de eventos en un contenedor ancestro común y usar el burbujeo (bubbling) para gestionar las interacciones de sus hijos.",
            "En llamar a una función desde un archivo CSS externo.",
            "En registrar un escuchador independiente por cada etiqueta <li> de la página."
          ],
          correctIndex: 1,
          explanation: "La delegación aprovecha la propagación por burbujeo colocando el listener en el elemento padre, lo que ahorra memoria y permite responder automáticamente a elementos creados dinámicamente en el futuro."
        },
        {
          id: "q-ut3-b4-3",
          question: "Dentro de una función de callback de evento, ¿qué representa `e.target`?",
          options: [
            "El nombre de la función JavaScript que se está ejecutando.",
            "El elemento HTML más profundo que disparó originalmente la acción del usuario.",
            "El contenedor que tiene registrado el addEventListener.",
            "El tamaño en píxeles del cursor del ratón."
          ],
          correctIndex: 1,
          explanation: "e.target apunta al elemento exacto donde se originó el evento físico (a diferencia de e.currentTarget, que hace referencia al elemento al que se vinculó el escuchador)."
        },
        {
          id: "q-ut3-b4-4",
          question: "¿Cuál es el evento que se dispara cada vez que el usuario teclea o modifica el contenido de un `<input>` en tiempo real?",
          options: [
            "event 'press'",
            "event 'input'",
            "event 'update'",
            "event 'hover'"
          ],
          correctIndex: 1,
          explanation: "El evento 'input' se dispara de forma inmediata con cada pulsación de tecla o cambio en el valor del control, a diferencia de 'change', que espera a que el campo pierda el foco."
        }
      ],
      exercises: [
        {
          id: "ex-ut3-b4",
          title: "Interceptación reactiva de formularios y contador dinámico de caracteres",
          description: "Implementa la validación de un formulario sin recarga mediante addEventListener y preventDefault, e incorpora un contador en vivo de caracteres usando el evento 'input'.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 4: Eventos y Validación</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .campo { margin-bottom: 15px; }
    .error { color: #dc2626; font-size: 13px; display: none; }
    .contador { font-size: 12px; color: #64748b; }
    .limite { color: #dc2626; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Soporte Técnico - 1º DAW</h2>
  <form id="formulario-soporte">
    <div class="campo">
      <label for="asunto">Asunto del ticket:</label><br>
      <input type="text" id="asunto" maxlength="50" style="width: 300px;">
      <span id="char-counter" class="contador">0/50 caracteres</span>
      <p id="error-asunto" class="error">El asunto debe tener al menos 5 caracteres.</p>
    </div>

    <button type="submit" id="btn-enviar">Crear Ticket</button>
  </form>
  <div id="resultado" style="margin-top: 15px; font-weight: bold;"></div>

  <script>
    const form = document.querySelector("#formulario-soporte");
    const inputAsunto = document.querySelector("#asunto");
    const charCounter = document.querySelector("#char-counter");
    const errorAsunto = document.querySelector("#error-asunto");
    const resultado = document.querySelector("#resultado");

    // Tarea 1: Escucha el evento 'input' en inputAsunto y actualiza el texto de charCounter
    
    // Tarea 2: Escucha el evento 'submit' en el formulario y frena la recarga con preventDefault()
    
    // Tarea 3: Si el asunto tiene menos de 5 caracteres, muestra el error; si es correcto, ocúltalo y muestra en #resultado "Ticket creado con éxito."
    
  </script>
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Añade un escuchador de evento 'input' a inputAsunto para actualizar el texto de charCounter con '${longitud}/50 caracteres'.",
            "2. Si la longitud supera 40 caracteres, añade la clase 'limite' al contador; si no, quítasela.",
            "3. En el formulario, añade el escuchador para 'submit' e invoca e.preventDefault() para evitar que se refresque la página.",
            "4. Valida: si inputAsunto.value.trim().length < 5, pon errorAsunto.style.display = 'block' y limpia el resultado.",
            "5. Si la validación es correcta, oculta el mensaje de error y escribe en #resultado: 'Ticket registrado: [asunto]' en color verde."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 4: Eventos y Validación</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .campo { margin-bottom: 15px; }
    .error { color: #dc2626; font-size: 13px; display: none; }
    .contador { font-size: 12px; color: #64748b; }
    .limite { color: #dc2626; font-weight: bold; }
  </style>
</head>
<body>
  <h2>Soporte Técnico - 1º DAW</h2>
  <form id="formulario-soporte">
    <div class="campo">
      <label for="asunto">Asunto del ticket:</label><br>
      <input type="text" id="asunto" maxlength="50" style="width: 300px;">
      <span id="char-counter" class="contador">0/50 caracteres</span>
      <p id="error-asunto" class="error">El asunto debe tener al menos 5 caracteres.</p>
    </div>

    <button type="submit" id="btn-enviar">Crear Ticket</button>
  </form>
  <div id="resultado" style="margin-top: 15px; font-weight: bold;"></div>

  <script>
    const form = document.querySelector("#formulario-soporte");
    const inputAsunto = document.querySelector("#asunto");
    const charCounter = document.querySelector("#char-counter");
    const errorAsunto = document.querySelector("#error-asunto");
    const resultado = document.querySelector("#resultado");

    inputAsunto.addEventListener("input", () => {
      const long = inputAsunto.value.length;
      charCounter.textContent = \`\${long}/50 caracteres\`;
      if (long >= 40) {
        charCounter.classList.add("limite");
      } else {
        charCounter.classList.remove("limite");
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const texto = inputAsunto.value.trim();

      if (texto.length < 5) {
        errorAsunto.style.display = "block";
        resultado.textContent = "";
      } else {
        errorAsunto.style.display = "none";
        resultado.style.color = "#16a34a";
        resultado.textContent = \`Ticket registrado con éxito: "\${texto}"\`;
        inputAsunto.value = "";
        charCounter.textContent = "0/50 caracteres";
        charCounter.classList.remove("limite");
      }
    });
  </script>
</body>
</html>`,
          hints: "El evento 'input' se dispara con cada carácter tecleado o borrado en el campo de texto. Utiliza e.preventDefault() en el callback de submit."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 5 (2 HORAS - 2ª EVALUACIÓN)
       ========================================================================= */
    {
      id: "ut3-b5",
      blockNumber: 5,
      title: "Creación y eliminación dinámica de nodos en el DOM",
      duration: "2 horas",
      session: "Sesión 5 (2ª Ev)",
      evaluation: "2ª Evaluación",
      ce: ["CE3e", "CE3f"],
      objectives: [
        "Crear elementos en memoria con document.createElement() y nodos de texto con createTextNode.",
        "Insertar elementos en el árbol mediante appendChild, append y prepend.",
        "Optimizar el rendimiento y prevenir el 'reflow' mediante el uso de DocumentFragment.",
        "Eliminar elementos del documento mediante el método moderno element.remove() y parent.removeChild().",
        "Construir una lista de tareas (To-Do List) interactiva con creación, marcado y borrado dinámico."
      ],
      theory: {
        intro: `
          Hasta ahora hemos modificado elementos preexistentes en el código HTML estático. En esta sesión damos el salto a la **generación y destrucción de elementos en tiempo de ejecución**.
          
          Esta capacidad es la base sobre la que se construyen las aplicaciones web dinámicas: añadir publicaciones a un feed en vivo, renderizar productos de un catálogo descargado de una API o gestionar listas interactivas de tareas sin necesidad de recargar la página.
        `,
        sections: [
          {
            title: "1. El ciclo de vida de un elemento dinámico: Creación, configuración e inserción",
            content: `
              Para incorporar un nuevo elemento a la interfaz web se siguen siempre **tres pasos fundamentales**:

              * **Paso 1: Crear el elemento en memoria**:
                * Se utiliza **\`document.createElement("nombreEtiqueta")\`**.
                * El elemento existe únicamente en la memoria RAM de JavaScript; aún no es visible en pantalla ni forma parte del árbol DOM.
                \`\`\`javascript
                const nuevoParrafo = document.createElement("p");
                \`\`\`

              * **Paso 2: Configurar sus propiedades, clases y contenidos**:
                * Le asignamos texto, clases CSS, identificadores o escuchadores de eventos.
                \`\`\`javascript
                nuevoParrafo.textContent = "¡Este párrafo fue generado dinámicamente con JS!";
                nuevoParrafo.classList.add("mensaje-exito");
                \`\`\`

              * **Paso 3: Insertarlo en el contenedor deseado del DOM**:
                * Se elige el elemento padre y se inserta el nuevo hijo en su interior:
                \`\`\`javascript
                const contenedor = document.querySelector("#seccion-mensajes");
                contenedor.appendChild(nuevoParrafo);
                \`\`\`
            `
          },
          {
            title: "2. Métodos de inserción modernos: appendChild frente a append y prepend",
            content: `
              El estándar moderno del DOM incorporó métodos más versátiles y cómodos que el tradicional \`appendChild\`:

              * **\`padre.appendChild(nodoHijo)\` (Método clásico)**:
                * Inserta el nodo como **último hijo** del contenedor.
                * Solo admite un único nodo por llamada (no admite strings directos). Devuelve el nodo insertado.

              * **\`padre.append(...nodosOStrings)\` (Método moderno)**:
                * Puede insertar **múltiples nodos o texto plano directamente** en una sola instrucción.
                * Añade los elementos al final del contenedor.
                \`\`\`javascript
                contenedor.append(nuevoParrafo, "Texto plano añadido al final", otroElemento);
                \`\`\`

              * **\`padre.prepend(...nodosOStrings)\`**:
                * Inserta los elementos al **principio del contenedor**, antes del primer hijo actual.
                * Ideal para feeds de noticias donde la información más reciente debe aparecer en la cabecera.

              * **\`elemento.before()\` y \`elemento.after()\`**:
                * Permiten insertar nuevos elementos inmediatamente antes o después del elemento de referencia como hermanos.
            `
          },
          {
            title: "3. Optimización de rendimiento: DocumentFragment",
            content: `
              Cada vez que insertamos un elemento directamente en el árbol del DOM con \`appendChild\` o \`append\`, el motor del navegador realiza un cálculo geométrico y de repintado de pantalla (**reflow / repaint**).
              
              Si insertamos 500 elementos uno a uno dentro de un bucle \`for\`, el navegador repinta la pantalla 500 veces, provocando caídas de fotogramas y lentitud extrema.

              ### La solución técnica: DocumentFragment
              Un **\`DocumentFragment\`** es un contenedor ligero en memoria que actúa como un "DOM virtual en miniatura":
              1. Creamos el fragmento: \`const fragment = document.createDocumentFragment();\`.
              2. Dentro del bucle, añadimos todos los elementos al fragmento (operación ultra rápida en memoria sin repintado).
              3. Finalmente, insertamos el fragmento una **única vez** en el DOM real. Al insertarlo, el fragmento desaparece y vuelca todos sus hijos de golpe en un solo repintado:

              \`\`\`javascript
              const lista = document.querySelector("#lista-alumnos");
              const fragmento = document.createDocumentFragment();

              const datos = ["Ana", "Carlos", "David", "Elena", "Fernando"];

              datos.forEach(nombre => {
                const li = document.createElement("li");
                li.textContent = nombre;
                fragmento.appendChild(li); // Se acumula en memoria
              });

              // Una sola inserción en pantalla
              lista.appendChild(fragmento);
              \`\`\`
            `
          },
          {
            title: "4. Eliminación de nodos: remove() vs removeChild()",
            content: `
              Para retirar un elemento del documento disponemos de dos aproximaciones:

              * **\`elemento.remove()\` (Estándar moderno recomendado)**:
                * El elemento se autoelimina directamente sin necesidad de referenciar a su padre:
                \`\`\`javascript
                const alerta = document.querySelector("#banner-promocional");
                alerta.remove(); // Desaparece del DOM
                \`\`\`

              * **\`padre.removeChild(hijo)\` (Método tradicional)**:
                * Requiere invocar al nodo padre y pasarle como argumento el hijo a eliminar:
                \`\`\`javascript
                alerta.parentElement.removeChild(alerta);
                \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut3-b5-1",
          question: "¿En qué estado se encuentra un elemento inmediatamente después de ejecutar `const div = document.createElement('div')`?",
          options: [
            "Se muestra inmediatamente al final del <body> de la página web.",
            "Existe únicamente en la memoria de JavaScript; aún no es visible ni forma parte del árbol DOM del documento.",
            "Se almacena en el disco duro del servidor web.",
            "El navegador genera un error si no tiene id asignado."
          ],
          correctIndex: 1,
          explanation: "document.createElement crea el objeto en memoria RAM. Para que forme parte del documento y sea visible para el usuario, debe insertarse explícitamente en el árbol con métodos como appendChild(), append() o prepend()."
        },
        {
          id: "q-ut3-b5-2",
          question: "¿Por qué se utiliza `document.createDocumentFragment()` al generar cientos de elementos en un bucle?",
          options: [
            "Porque cifra los elementos para que no puedan ser copiados.",
            "Para evitar múltiples repintados de pantalla (reflow/repaint), agrupando todas las inserciones en memoria para inyectarlas en el DOM en una única operación.",
            "Porque es el único método que permite insertar texto en negrita.",
            "Para sincronizar los datos con una base de datos MySQL."
          ],
          correctIndex: 1,
          explanation: "DocumentFragment actúa como un contenedor temporal en memoria. Acumular las inserciones en el fragmento y volcarlo una sola vez en el DOM minimiza los costosos cálculos de reflow y repaint del navegador."
        },
        {
          id: "q-ut3-b5-3",
          question: "¿Qué método moderno permite insertar un nuevo elemento al PRINCIPIO de un contenedor, antes de todos sus hijos actuales?",
          options: [
            "contenedor.prepend(nuevoElemento)",
            "contenedor.appendChild(nuevoElemento)",
            "contenedor.beforeChild(nuevoElemento)",
            "contenedor.push(nuevoElemento)"
          ],
          correctIndex: 0,
          explanation: "prepend() inserta los nodos al inicio del contenedor, mientras que appendChild() o append() los añaden al final."
        },
        {
          id: "q-ut3-b5-4",
          question: "¿Cuál es la forma más directa y moderna de eliminar un elemento `tarjeta` del DOM sin necesidad de buscar a su nodo padre?",
          options: [
            "tarjeta.deleteNode()",
            "tarjeta.parentElement.delete(tarjeta)",
            "tarjeta.remove()",
            "document.destroy(tarjeta)"
          ],
          correctIndex: 2,
          explanation: "El método moderno element.remove() elimina el nodo sobre el que se invoca directamente de su árbol jerárquico."
        }
      ],
      exercises: [
        {
          id: "ex-ut3-b5",
          title: "Gestor dinámico de lista de tareas con creación, completado y borrado de nodos",
          description: "Construye una aplicación interactiva de tareas donde el usuario pueda escribir un texto, crearlo dinámicamente con createElement, insertarlo en la lista con prepend, tacharlo al hacer clic y borrarlo con un botón individual.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 5: Creación Dinámica de Nodos</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .completada { text-decoration: line-through; color: #94a3b8; }
    li { display: flex; justify-content: space-between; align-items: center; padding: 8px; border-bottom: 1px solid #e2e8f0; max-width: 400px; }
    .btn-borrar { background: #ef4444; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; }
  </style>
</head>
<body>
  <h2>Lista de Tareas - 1º DAW</h2>
  <div>
    <input type="text" id="input-tarea" placeholder="Nueva tarea pendiente..." style="width: 250px; padding: 6px;">
    <button id="btn-agregar" style="padding: 6px 12px;">Añadir Tarea</button>
  </div>

  <ul id="lista-tareas" style="padding-left: 0; margin-top: 20px;">
    <!-- Las tareas dinámicas se inyectarán aquí -->
  </ul>

  <script>
    const inputTarea = document.querySelector("#input-tarea");
    const btnAgregar = document.querySelector("#btn-agregar");
    const lista = document.querySelector("#lista-tareas");

    // Tarea 1: Escucha el clic en #btn-agregar
    // Tarea 2: Si el input no está vacío, crea un <li> con document.createElement
    // Tarea 3: Crea un <span> con el texto y un <button> con clase 'btn-borrar' y texto 'Eliminar'
    // Tarea 4: Inserta el <li> al principio de la lista con lista.prepend(li)
    // Tarea 5: Implementa que al hacer clic en el texto se alterne la clase 'completada' y en el botón se elimine el li con .remove()
    
  </script>
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Asocia al botón #btn-agregar un escuchador de evento 'click'.",
            "2. Recupera el valor del input recortando espacios (.trim()). Si está vacío, no hagas nada.",
            "3. Crea con document.createElement('li') el elemento contenedor de la tarea.",
            "4. Crea un <span> con el texto de la tarea y un <button class=\"btn-borrar\"> con el texto 'Eliminar'.",
            "5. Añade al span un listener para hacer toggle de la clase 'completada'. Añade al botón de eliminar un listener para llamar a li.remove().",
            "6. Inserta el <li> al principio de #lista-tareas con lista.prepend(li) y limpia el input."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 5: Creación Dinámica de Nodos</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .completada { text-decoration: line-through; color: #94a3b8; }
    li { display: flex; justify-content: space-between; align-items: center; padding: 8px; border-bottom: 1px solid #e2e8f0; max-width: 400px; }
    .btn-borrar { background: #ef4444; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; }
    span.texto-tarea { cursor: pointer; flex-grow: 1; }
  </style>
</head>
<body>
  <h2>Lista de Tareas - 1º DAW</h2>
  <div>
    <input type="text" id="input-tarea" placeholder="Nueva tarea pendiente..." style="width: 250px; padding: 6px;">
    <button id="btn-agregar" style="padding: 6px 12px;">Añadir Tarea</button>
  </div>

  <ul id="lista-tareas" style="padding-left: 0; margin-top: 20px;">
  </ul>

  <script>
    const inputTarea = document.querySelector("#input-tarea");
    const btnAgregar = document.querySelector("#btn-agregar");
    const lista = document.querySelector("#lista-tareas");

    function agregarTarea() {
      const texto = inputTarea.value.trim();
      if (texto === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.className = "texto-tarea";
      span.textContent = texto;
      span.addEventListener("click", () => {
        span.classList.toggle("completada");
      });

      const btnBorrar = document.createElement("button");
      btnBorrar.className = "btn-borrar";
      btnBorrar.textContent = "Eliminar";
      btnBorrar.addEventListener("click", () => {
        li.remove();
      });

      li.append(span, btnBorrar);
      lista.prepend(li);

      inputTarea.value = "";
      inputTarea.focus();
    }

    btnAgregar.addEventListener("click", agregarTarea);
    inputTarea.addEventListener("keydown", (e) => {
      if (e.key === "Enter") agregarTarea();
    });
  </script>
</body>
</html>`,
          hints: "Recuerda limpiar el input tras la inserción asignando inputTarea.value = '' y reenfocar el cursor con inputTarea.focus()."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 6 (2 HORAS - 2ª EVALUACIÓN)
       ========================================================================= */
    {
      id: "ut3-b6",
      blockNumber: 6,
      title: "Sindicación de contenidos: arquitectura de RSS 2.0 y Atom",
      duration: "2 horas",
      session: "Sesión 6 (2ª Ev)",
      evaluation: "2ª Evaluación",
      ce: ["CE3f", "CE3g"],
      objectives: [
        "Comprender el concepto y el valor de la sindicación de contenidos (web feeds) en la arquitectura de la web abierta.",
        "Analizar la evolución histórica: de los formatos propietarios a RSS 2.0 y el estándar IETF Atom (RFC 4287).",
        "Estructurar formalmente un documento XML de sindicación RSS 2.0: canal (<channel>) e items (<item>).",
        "Conocer los elementos obligatorios y recomendados de un canal y de una entrada según la especificación formal.",
        "Manejar el estándar de fechas y horas en sindicación (RFC 822 / RFC 2822 frente a ISO 8601)."
      ],
      theory: {
        intro: `
          El **Resultado de Aprendizaje 3 (RA3)** del currículo oficial integra dos competencias simbióticas: la **manipulación de documentos mediante scripts** y la **generación de canales de contenidos mediante tecnologías de sindicación**.
          
          La **sindicación de contenidos** (*web syndication*) es una tecnología basada en XML que permite a los sitios web (periódicos, blogs, centros educativos, podcasts) difundir sus novedades de forma estandarizada y automática, para que cualquier usuario o aplicación externa pueda suscribirse y recibirlas sin necesidad de navegar sitio por sitio.
          
          > **El principio de la Web Abierta y Descentralizada**:
          > A diferencia de las redes sociales cerradas gobernadas por algoritmos opacos, la sindicación mediante RSS/Atom es un estándar abierto, libre de intermediarios y de lectura universal.
        `,
        sections: [
          {
            title: "1. ¿Qué es la sindicación de contenidos y cuáles son sus ventajas?",
            content: `
              El término procede de las agencias de prensa tradicionales (como Reuters o EFE), que "sindican" sus noticias a periódicos de todo el mundo. En la web:

              * **El emisor (Publisher)**: Genera y actualiza un archivo XML en su servidor web (habitualmente \`feed.xml\` o \`rss.xml\`).
              * **El receptor (Subscriber)**: Utiliza un programa llamado **lector de feeds o agregador** (como Feedly, Thunderbird o NetNewsWire). El agregador consulta periódicamente el archivo XML y avisa al usuario únicamente cuando detecta noticias nuevas.

              ### Ventajas clave:
              * **Eficiencia**: El usuario centraliza cientos de fuentes de información en una sola bandeja de entrada.
              * **Privacidad**: La suscripción a un feed RSS no exige registrar correo electrónico ni ceder datos personales.
              * **Independencia algorítmica**: La información se recibe en orden estrictamente cronológico, sin filtros comerciales.
              * **Automatización**: Los canales RSS pueden alimentar bots de Telegram, newsletters automáticas o integraciones entre servidores.
            `
          },
          {
            title: "2. Anatomía de un canal RSS 2.0 en XML",
            content: `
              **RSS 2.0** (*Really Simple Syndication*, especificación mantenida por el *Berkman Klein Center for Internet & Society* de Harvard) es el formato de sindicación más extendido en el mundo.
              
              Su estructura consta de tres niveles jerárquicos:

              1. **Prólogo y raíz \`<rss version="2.0">\`**: Declara la versión del estándar.
              2. **Elemento \`<channel>\` único**: Contenedor principal que describe al canal o publicación en su conjunto.
              3. **Elementos \`<item>\` repetibles**: Cada una de las noticias, artículos o episodios individuales.

              ### Elementos obligatorios de \`<channel>\`:
              * **\`<title>\`**: Nombre oficial del canal (ej. *Novedades CIFP Carlos III*).
              * **\`<link>\`**: URL absoluta del sitio web al que corresponde el canal.
              * **\`<description>\`**: Breve resumen descriptivo del propósito del canal.

              ### Elementos opcionales muy recomendados en \`<channel>\`:
              * **\`<language>\`**: Código de idioma según RFC 1766 (ej: \`es-es\`).
              * **\`<pubDate>\`**: Fecha de última publicación del contenido.
              * **\`<lastBuildDate>\`**: Fecha y hora exactas en que el archivo XML fue compilado o actualizado.
              * **\`<managingEditor>\`**: Correo electrónico del responsable editorial.
            `
          },
          {
            title: "3. Estructura de las entradas `<item>` y formato de fechas RFC 822",
            content: `
              Dentro de \`<channel>\`, cada publicación se modela mediante una etiqueta **\`<item>\`**. Al menos uno de los elementos \`<title>\` o \`<description>\` debe estar presente:

              * **\`<title>\`**: Titular de la noticia o artículo.
              * **\`<link>\`**: URL absoluta que conduce al artículo completo en la web.
              * **\`<description>\`**: Resumen o cuerpo completo de la noticia (puede contener texto plano o entidades HTML escapadas como \`&lt;p&gt;\`).
              * **\`<guid>\`** (*Globally Unique Identifier*): Cadena única e irrepetible que identifica a ese artículo frente a los demás. Evita que un agregador marque una noticia como nueva si solo se corrigió una errata. Por defecto suele ser la URL con el atributo \`isPermaLink="true"\`.
              * **\`<category>\`**: Categoría temática de la noticia.
              * **\`<pubDate>\`**: Fecha y hora en formato estricto **RFC 822 / RFC 2822**.

              ### Formato estricto de fechas RFC 822 / 2822:
              Las fechas en RSS 2.0 no pueden escribirse en formato libre español (como "14 de octubre de 2026"). Deben seguir el estándar en inglés con zona horaria:
              
              \`\`\`text
              DíaSem, DD Mes AAAA HH:MM:SS ZonaHoraria
              Wed, 14 Oct 2026 09:30:00 +0200
              \`\`\`
              * Nombres de días en inglés: \`Mon, Tue, Wed, Thu, Fri, Sat, Sun\`.
              * Nombres de meses en inglés: \`Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec\`.
            `
          },
          {
            title: "4. Ejemplo canónico de archivo RSS 2.0 completo",
            content: `
              \`\`\`xml
              <?xml version="1.0" encoding="UTF-8"?>
              <rss version="2.0">
                <channel>
                  <title>Canal Informativo - CIFP Carlos III</title>
                  <link>https://www.cifpcarlos3.es</link>
                  <description>Noticias, eventos y novedades académicas del departamento de Informática.</description>
                  <language>es-es</language>
                  <pubDate>Mon, 12 Oct 2026 10:00:00 +0200</pubDate>
                  <lastBuildDate>Mon, 12 Oct 2026 12:00:00 +0200</lastBuildDate>
                  <managingEditor>informatica@cifpcarlos3.es (Dpto. Informática)</managingEditor>

                  <!-- Entrada 1 -->
                  <item>
                    <title>Apertura del plazo de becas de FP para el curso 2026/2027</title>
                    <link>https://www.cifpcarlos3.es/noticias/becas-2026</link>
                    <description>Se ha publicado la convocatoria oficial de becas generales para alumnos de ciclos formativos de grado superior.</description>
                    <guid isPermaLink="true">https://www.cifpcarlos3.es/noticias/becas-2026</guid>
                    <pubDate>Mon, 12 Oct 2026 09:00:00 +0200</pubDate>
                    <category>Becas</category>
                  </item>

                  <!-- Entrada 2 -->
                  <item>
                    <title>Seminario técnico sobre Desarrollo de Aplicaciones Web</title>
                    <link>https://www.cifpcarlos3.es/noticias/seminario-daw</link>
                    <description>Jornada técnica con empresas punteras de la Región de Murcia sobre tecnologías frontend y backend.</description>
                    <guid isPermaLink="true">https://www.cifpcarlos3.es/noticias/seminario-daw</guid>
                    <pubDate>Sun, 11 Oct 2026 17:30:00 +0200</pubDate>
                    <category>Eventos</category>
                  </item>
                </channel>
              </rss>
              \`\`\`
            `
          },
          {
            title: "5. El estándar alternativo: IETF Atom 1.0 (RFC 4287)",
            content: `
              En 2005, el IETF estandarizó **Atom 1.0** para subsanar ciertas ambigüedades de RSS 2.0:
              
              * Elemento raíz: **\`<feed xmlns="http://www.w3.org/2005/Atom">\`**.
              * Las entradas se llaman **\`<entry>\`** en lugar de \`<item>\`.
              * Utiliza enlaces con atributos semánticos: \`<link rel="self" href="..." />\`.
              * Las fechas siguen el estándar internacional estricto **ISO 8601 / RFC 3339** (ej: \`2026-10-14T09:30:00Z\`), eliminando las abreviaturas inglesas de días y meses.
              * Todos los agregadores modernos son compatibles indistintamente con RSS 2.0 y Atom 1.0.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut3-b6-1",
          question: "¿Cuáles son los tres elementos obligatorios que debe contener obligatoriamente el elemento `<channel>` en un canal RSS 2.0?",
          options: [
            "<author>, <date> y <category>",
            "<title>, <link> y <description>",
            "<header>, <main> y <footer>",
            "<name>, <url> y <summary>"
          ],
          correctIndex: 1,
          explanation: "Según la especificación formal de RSS 2.0, el elemento <channel> exige obligatoriamente los tres elementos: <title> (título), <link> (enlace al sitio web) y <description> (descripción general del canal)."
        },
        {
          id: "q-ut3-b6-2",
          question: "¿Cuál de las siguientes cadenas representa una fecha y hora válida conforme al estándar RFC 822 exigido por RSS 2.0?",
          options: [
            "14/10/2026 09:30:00",
            "Wed, 14 Oct 2026 09:30:00 +0200",
            "2026-10-14T09:30:00Z",
            "Miércoles, 14 de Octubre de 2026"
          ],
          correctIndex: 1,
          explanation: "RSS 2.0 requiere el formato RFC 822/2822: 'DíaSem, DD Mes AAAA HH:MM:SS ZonaHoraria' con los nombres de días y meses obligatoriamente en inglés de tres letras."
        },
        {
          id: "q-ut3-b6-3",
          question: "¿Cuál es el propósito del elemento `<guid>` dentro de un `<item>` en RSS 2.0?",
          options: [
            "Definir el color del texto de la noticia.",
            "Proporcionar un identificador único a nivel global (Globally Unique Identifier) para que los agregadores no dupliquen la noticia aunque cambie su título.",
            "Conectar el archivo XML con la base de datos MySQL.",
            "Indicar el nombre del diseñador gráfico del portal."
          ],
          correctIndex: 1,
          explanation: "<guid> (Globally Unique Identifier) garantiza que cada noticia tiene una identidad unívoca, permitiendo al agregador saber con certeza si ya fue leída por el usuario."
        },
        {
          id: "q-ut3-b6-4",
          question: "¿Qué formato estándar utiliza Atom 1.0 para representar las fechas en sus elementos `<updated>`?",
          options: [
            "Formato ISO 8601 / RFC 3339 (ej: 2026-10-14T09:30:00Z).",
            "La fecha en número de milisegundos desde 1970.",
            "Formato de fecha UNIX Timestamp de 10 dígitos.",
            "Solo admite el año en cuatro dígitos."
          ],
          correctIndex: 0,
          explanation: "Atom 1.0 estandarizó el uso de fechas ISO 8601/RFC 3339 con formato AAAA-MM-DDTHH:MM:SSZ, superando las ambigüedades del estándar RFC 822 de RSS."
        }
      ],
      exercises: [
        {
          id: "ex-ut3-b6",
          title: "Creación y codificación de un canal de sindicación RSS 2.0 completo",
          description: "Escribe un documento XML bien formado y válido de sindicación RSS 2.0 para el departamento de Informática del centro educativo con al menos dos noticias estructuradas.",
          initialCode: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Tarea 1: Declara la etiqueta raíz <rss> con el atributo version="2.0" -->

  <!-- Tarea 2: Declara el contenedor <channel> -->
  
    <!-- Tarea 3: Añade los 3 metadatos obligatorios: <title>, <link> y <description> -->
    
    <!-- Tarea 4: Añade <language>es-es</language> y <pubDate> válida en RFC 822 -->
    
    <!-- Tarea 5: Añade al menos dos elementos <item> con title, link, description, guid y pubDate -->

`,
          language: "xml",
          tasks: [
            "1. Abre la raíz con <rss version=\"2.0\"> y ciérrala al final del documento.",
            "2. Define el elemento <channel> que agrupe toda la información del canal.",
            "3. Incluye los elementos obligatorios del canal: <title>Canal DAW - CIFP Carlos III</title>, <link>https://cifpcarlos3.es</link> y <description>Canal oficial de noticias del ciclo formativo DAW.</description>.",
            "4. Añade <language>es-es</language> y la fecha de publicación <pubDate>Tue, 13 Oct 2026 10:00:00 +0200</pubDate>.",
            "5. Crea dos elementos <item> completos: el primero sobre el inicio del módulo de Lenguajes de Marcas y el segundo sobre las prácticas en empresa (FEM), asegurando fechas RFC 822 válidas y elementos <guid isPermaLink=\"true\">."
          ],
          solution: `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Canal DAW - CIFP Carlos III</title>
    <link>https://cifpcarlos3.es</link>
    <description>Canal oficial de noticias y eventos del ciclo formativo Desarrollo de Aplicaciones Web.</description>
    <language>es-es</language>
    <pubDate>Tue, 13 Oct 2026 10:00:00 +0200</pubDate>
    <lastBuildDate>Tue, 13 Oct 2026 12:00:00 +0200</lastBuildDate>
    <managingEditor>informatica@cifpcarlos3.es (Dpto. Informatica)</managingEditor>

    <item>
      <title>Inicio del bloque práctico de JavaScript y DOM en 1º DAW</title>
      <link>https://cifpcarlos3.es/noticias/inicio-js-daw</link>
      <description>Los alumnos comienzan las sesiones interactivas de manipulación de documentos web mediante scripts y eventos.</description>
      <guid isPermaLink="true">https://cifpcarlos3.es/noticias/inicio-js-daw</guid>
      <pubDate>Tue, 13 Oct 2026 09:30:00 +0200</pubDate>
      <category>Docencia</category>
    </item>

    <item>
      <title>Convocatoria de Formación en Empresa (FEM) 2026/2027</title>
      <link>https://cifpcarlos3.es/noticias/fem-daw-2026</link>
      <description>Publicado el calendario de asignación de empresas colaboradoras en la comarca de Cartagena para el segundo curso.</description>
      <guid isPermaLink="true">https://cifpcarlos3.es/noticias/fem-daw-2026</guid>
      <pubDate>Mon, 12 Oct 2026 16:00:00 +0200</pubDate>
      <category>Empresa</category>
    </item>
  </channel>
</rss>`,
          hints: "Comprueba que las etiquetas XML abran y cierren exactamente con las mismas mayúsculas y minúsculas (RSS es sensible a mayúsculas: <pubDate>, <item>, <channel>)."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 7 (2 HORAS - 2ª EVALUACIÓN)
       ========================================================================= */
    {
      id: "ut3-b7",
      blockNumber: 7,
      title: "Validación de canales de sindicación, consumo con agregadores y proyecto",
      duration: "2 horas",
      session: "Sesión 7 (2ª Ev)",
      evaluation: "2ª Evaluación",
      ce: ["CE3f", "CE3g"],
      objectives: [
        "Configurar el autodescubrimiento de feeds en documentos HTML mediante la etiqueta <link rel=\"alternate\"> en el <head>.",
        "Validar formalmente archivos RSS/Atom utilizando el validador oficial W3C Feed Validation Service.",
        "Conocer las tipologías de agregadores y lectores de noticias (web, escritorio, móviles) y el proceso de suscripción.",
        "Comprender el consumo de canales de sindicación mediante JavaScript: descarga asíncrona con fetch y parseo XML con DOMParser.",
        "Desarrollar el Proyecto Integrador de la UT3 que combina manipulación dinámica del DOM y sindicación RSS."
      ],
      theory: {
        intro: `
          Crear un archivo XML de sindicación es solo la primera mitad del proceso. Para que la información llegue eficazmente a los usuarios y a los sistemas distribuidos, el canal debe ser **fácilmente descubrible por los navegadores**, estar **estrictamente validado según las directrices del W3C** y poder ser **consumido y renderizado por aplicaciones web y lectores de noticias**.
          
          En esta última sesión de la UT3 cerramos el círculo: conectamos el mundo XML de la sindicación con el mundo dinámico del DOM y JavaScript.
        `,
        sections: [
          {
            title: "1. Autodescubrimiento de canales en HTML (<link rel=\"alternate\">)",
            content: `
              ¿Cómo sabe un navegador web o un lector de noticias que una página web dispone de un canal de sindicación?
              
              El estándar establece que debemos incluir en el **\`<head>\`** del documento HTML una o varias etiquetas **\`<link>\`** con los siguientes atributos:

              * **\`rel="alternate"\`**: Indica que el enlace apunta a una representación alternativa del contenido de la página.
              * **\`type="application/rss+xml"\`**: Especifica el tipo MIME oficial para canales RSS 2.0 (o \`application/atom+xml\` para canales Atom).
              * **\`title="..."\`**: Nombre descriptivo que el agregador mostrará al usuario al sugerirle la suscripción.
              * **\`href="..."\`**: Ruta absoluta o relativa al archivo XML del feed.

              \`\`\`html
              <head>
                <meta charset="UTF-8">
                <title>Portal Web - CIFP Carlos III</title>

                <!-- AUTODESCUBRIMIENTO DE FEEDS RSS Y ATOM -->
                <link rel="alternate" type="application/rss+xml" title="Noticias CIFP Carlos III (RSS 2.0)" href="/rss.xml">
                <link rel="alternate" type="application/atom+xml" title="Noticias CIFP Carlos III (Atom 1.0)" href="/atom.xml">
              </head>
              \`\`\`

              Al incluir esta etiqueta, los navegadores y extensiones de sindicación muestran automáticamente el icónico **botón naranja de RSS** en la barra de direcciones o permiten suscribirse con un solo clic.
            `
          },
          {
            title: "2. Validación formal de canales: W3C Feed Validation Service",
            content: `
              Al igual que validamos HTML y CSS, los canales de sindicación deben someterse a certificación formal. El consorcio W3C mantiene la herramienta de referencia:

              * **W3C Feed Validation Service**: \`https://validator.w3.org/feed/\`
              
              ### Errores más comunes detectados en auditorías:
              1. **Errores de sintaxis XML**: Etiquetas sin cerrar, ausencia del prólogo \`<?xml ...?>\` o discrepancia de mayúsculas/minúsculas.
              2. **Fechas en formato incorrecto**: Escribir fechas con nombres de meses en español o sin zona horaria (recuerda: siempre RFC 822 en inglés para RSS 2.0).
              3. **URLs relativas en lugar de absolutas**: En \`<link>\` y \`<guid>\` deben usarse siempre URLs completas que comiencen por \`https://\`, ya que el agregador del usuario lee el feed fuera del dominio de origen.
              4. **Caracteres especiales no escapados**: El uso de \`&\` en títulos o descripciones sin escribirlo como \`&amp;\`.
            `
          },
          {
            title: "3. Tipología de agregadores y consumo de noticias",
            content: `
              Los agregadores (*feed readers*) se clasifican según su arquitectura:

              * **Agregadores de escritorio / clientes de correo**: Como **Mozilla Thunderbird** o NetNewsWire. Almacenan los artículos localmente en el equipo del usuario sin depender de servidores de terceros.
              * **Agregadores basados en web (*Cloud readers*)**: Como **Feedly**, **Inoreader** o **The Old Reader**. Sincronizan el estado de lectura (leído/no leído) entre todos los dispositivos del usuario mediante la nube.
              * **Agregadores integrados en el navegador**: Extensiones como *Feedbro* o lectores RSS nativos de navegadores orientados a la privacidad como Vivaldi.
            `
          },
          {
            title: "4. Consumo de canales RSS en aplicaciones web con JavaScript (fetch + DOMParser)",
            content: `
              Una de las aplicaciones más potentes de JavaScript en el desarrollo web moderno consiste en **descargar un feed RSS y renderizarlo dinámicamente en la página** sin recargas:

              \`\`\`javascript
              // 1. Descargamos el archivo XML de sindicación mediante la API fetch
              fetch("rss.xml")
                .then(response => response.text())
                .then(xmlTexto => {
                  // 2. Parseamos el texto plano a un documento XML navegable en memoria
                  const parser = new DOMParser();
                  const xmlDoc = parser.parseFromString(xmlTexto, "application/xml");

                  // 3. Seleccionamos todos los <item> del canal
                  const items = xmlDoc.querySelectorAll("item");
                  const contenedor = document.querySelector("#contenedor-noticias");

                  // 4. Generamos los elementos del DOM dinámicamente
                  items.forEach(item => {
                    const titulo = item.querySelector("title").textContent;
                    const enlace = item.querySelector("link").textContent;
                    const descripcion = item.querySelector("description").textContent;

                    const tarjeta = document.createElement("article");
                    tarjeta.className = "tarjeta-noticia";

                    const h3 = document.createElement("h3");
                    const a = document.createElement("a");
                    a.href = enlace;
                    a.textContent = titulo;
                    a.target = "_blank";
                    h3.appendChild(a);

                    const p = document.createElement("p");
                    p.textContent = descripcion;

                    tarjeta.append(h3, p);
                    contenedor.appendChild(tarjeta);
                  });
                })
                .catch(err => console.error("Error al cargar el canal RSS:", err));
              \`\`\`
            `
          }
        ]
      },
      quiz: [
        {
          id: "q-ut3-b7-1",
          question: "¿Qué etiqueta HTML5 debe incluirse en la sección `<head>` para que los navegadores y lectores detecten automáticamente un canal de sindicación RSS 2.0?",
          options: [
            "<a href=\"rss.xml\" rel=\"feed\">",
            "<link rel=\"alternate\" type=\"application/rss+xml\" title=\"Noticias\" href=\"rss.xml\">",
            "<script src=\"rss.xml\" type=\"xml/rss\"></script>",
            "<meta name=\"rss\" content=\"rss.xml\">"
          ],
          correctIndex: 1,
          explanation: "La directiva estándar de autodescubrimiento es <link rel=\"alternate\" type=\"application/rss+xml\" title=\"...\" href=\"...\"> dentro de la cabecera del documento HTML."
        },
        {
          id: "q-ut3-b7-2",
          question: "¿Por qué se exige el uso de URLs absolutas (comenzando por `https://`) en las etiquetas `<link>` dentro de un feed RSS?",
          options: [
            "Porque las URLs relativas consumen mayor ancho de banda.",
            "Porque los lectores de feeds y agregadores se ejecutan fuera del servidor web de origen y no tienen contexto de dominio base para resolver rutas relativas.",
            "Porque el lenguaje XML prohíbe las barras diagonales.",
            "Para impedir que los usuarios descarguen imágenes."
          ],
          correctIndex: 1,
          explanation: "Los feeds son consumidos por agregadores en escritorios o servicios en la nube externos. Una ruta relativa como '/noticias/1.html' carece de dominio de referencia y dará error 404 en el cliente."
        },
        {
          id: "q-ut3-b7-3",
          question: "Al consumir un feed XML en JavaScript mediante la API del navegador, ¿qué clase nativa permite convertir el string de texto XML en un documento DOM consultable?",
          options: [
            "JSON.parse()",
            "new DOMParser()",
            "new XMLSerializer()",
            "document.createXML()"
          ],
          correctIndex: 1,
          explanation: "const parser = new DOMParser(); parser.parseFromString(xmlTexto, 'application/xml') analiza la cadena y genera un documento XML explorable mediante los métodos habituales del DOM."
        },
        {
          id: "q-ut3-b7-4",
          question: "¿Qué herramienta oficial y gratuita del W3C certifica si un feed cumple estrictamente las normas sintácticas y semánticas de la sindicación web?",
          options: [
            "W3C Feed Validation Service",
            "W3C CSS Validator",
            "Google PageSpeed Insights",
            "W3C Markup Validation Service"
          ],
          correctIndex: 0,
          explanation: "El W3C Feed Validation Service (validator.w3.org/feed/) es el estándar oficial para validar canales RSS y Atom."
        }
      ],
      exercises: [
        {
          id: "ex-ut3-b7",
          title: "Autodescubrimiento y visor interactivo de noticias RSS con DOMParser",
          description: "Configura el autodescubrimiento en la cabecera HTML y escribe la lógica con DOMParser para leer una cadena XML con estructura RSS 2.0 y generar tarjetas de noticias dinámicas en el DOM.",
          initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 7: Visor RSS y DOM</title>
  <!-- Tarea 1: Añade aquí la etiqueta <link> de autodescubrimiento para el canal RSS 'noticias.xml' -->

  <style>
    body { font-family: sans-serif; padding: 20px; }
    .noticia-card { border-left: 4px solid #0284c7; background: #f8fafc; padding: 12px 16px; margin-bottom: 12px; border-radius: 0 6px 6px 0; }
    .noticia-card h3 { margin: 0 0 6px 0; font-size: 16px; }
    .noticia-card a { color: #0369a1; text-decoration: none; }
    .noticia-card a:hover { text-decoration: underline; }
    .noticia-card p { margin: 0; color: #475569; font-size: 14px; }
  </style>
</head>
<body>
  <h2>Tablón Digital de Noticias DAW</h2>
  <div id="contenedor-feed">
    <!-- Las tarjetas generadas desde el RSS deben inyectarse aquí -->
  </div>

  <script>
    // Cadena XML simulando el archivo 'noticias.xml' del centro
    const feedXmlString = \`<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Canal CIFP Carlos III</title>
        <link>https://cifpcarlos3.es</link>
        <description>Novedades del centro</description>
        <item>
          <title>Feria de Empleo y FP Dual 2026</title>
          <link>https://cifpcarlos3.es/feria-2026</link>
          <description>Encuentro entre alumnado y empresas tecnológicas de Cartagena.</description>
        </item>
        <item>
          <title>Hackathon de Desarrollo Web Frontend</title>
          <link>https://cifpcarlos3.es/hackathon</link>
          <description>Competición de diseño de interfaces accesibles con premios para 1º DAW.</description>
        </item>
      </channel>
    </rss>\`;

    // Tarea 2: Parsea 'feedXmlString' usando new DOMParser() con tipo 'application/xml'
    // Tarea 3: Selecciona todos los elementos <item>
    // Tarea 4: Itera sobre cada item, crea una etiqueta <article class="noticia-card"> con h3, a y p, y añádela a #contenedor-feed
    
  </script>
</body>
</html>`,
          language: "html",
          tasks: [
            "1. Añade en el <head> la etiqueta <link rel=\"alternate\" type=\"application/rss+xml\" title=\"Noticias CIFP Carlos III\" href=\"noticias.xml\">.",
            "2. Instancia un objeto DOMParser() y parsea feedXmlString con parser.parseFromString(feedXmlString, 'application/xml').",
            "3. Obtén la lista de elementos <item> usando xmlDoc.querySelectorAll('item').",
            "4. Itera sobre los items y para cada uno extrae title, link y description usando textContent.",
            "5. Crea un <article class=\"noticia-card\">, un <h3> con su <a> (con href y target=\"_blank\") y un <p> con la descripción, e insértalos en #contenedor-feed."
          ],
          solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>UT3 - Sesión 7: Visor RSS y DOM</title>
  <link rel="alternate" type="application/rss+xml" title="Noticias CIFP Carlos III" href="noticias.xml">
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .noticia-card { border-left: 4px solid #0284c7; background: #f8fafc; padding: 12px 16px; margin-bottom: 12px; border-radius: 0 6px 6px 0; }
    .noticia-card h3 { margin: 0 0 6px 0; font-size: 16px; }
    .noticia-card a { color: #0369a1; text-decoration: none; }
    .noticia-card a:hover { text-decoration: underline; }
    .noticia-card p { margin: 0; color: #475569; font-size: 14px; }
  </style>
</head>
<body>
  <h2>Tablón Digital de Noticias DAW</h2>
  <div id="contenedor-feed">
  </div>

  <script>
    const feedXmlString = \`<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Canal CIFP Carlos III</title>
        <link>https://cifpcarlos3.es</link>
        <description>Novedades del centro</description>
        <item>
          <title>Feria de Empleo y FP Dual 2026</title>
          <link>https://cifpcarlos3.es/feria-2026</link>
          <description>Encuentro entre alumnado y empresas tecnológicas de Cartagena.</description>
        </item>
        <item>
          <title>Hackathon de Desarrollo Web Frontend</title>
          <link>https://cifpcarlos3.es/hackathon</link>
          <description>Competición de diseño de interfaces accesibles con premios para 1º DAW.</description>
        </item>
      </channel>
    </rss>\`;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(feedXmlString, "application/xml");

    const items = xmlDoc.querySelectorAll("item");
    const contenedor = document.querySelector("#contenedor-feed");

    items.forEach(item => {
      const titulo = item.querySelector("title").textContent;
      const enlace = item.querySelector("link").textContent;
      const desc = item.querySelector("description").textContent;

      const card = document.createElement("article");
      card.className = "noticia-card";

      const h3 = document.createElement("h3");
      const a = document.createElement("a");
      a.href = enlace;
      a.textContent = titulo;
      a.target = "_blank";
      h3.appendChild(a);

      const p = document.createElement("p");
      p.textContent = desc;

      card.append(h3, p);
      contenedor.appendChild(card);
    });
  </script>
</body>
</html>`,
          hints: "Comprueba que xmlDoc.querySelectorAll('item') encuentra los nodos de la estructura XML antes de acceder a sus propiedades textContent."
        }
      ]
    }
  ]
};

/* =========================================================================
   PROYECTO INTEGRADOR UT3 (SEPARADO DE LAS SESIONES - SIN RESOLVER)
   ========================================================================= */
export const UNIT_3_PROJECT = {
  id: "ut3-proyecto",
  blockNumber: 8,
  title: "Proyecto Integrador UT3: Portal de Novedades Dinámico y Canal de Sindicación RSS 2.0",
  duration: "Proyecto de Síntesis",
  session: "Proyecto Final UT3",
  evaluation: "2ª Evaluación",
  ce: ["CE3a", "CE3b", "CE3c", "CE3d", "CE3e", "CE3f", "CE3g"],
  objectives: [
    "Integrar en un proyecto práctico completo los dos bloques temáticos del RA3: scripts en el DOM y sindicación XML.",
    "Manipular el árbol de objetos del documento mediante selectores modernos, creación de nodos y eventos reactivos.",
    "Construir un canal de sindicación formal RSS 2.0 con autodescubrimiento en HTML.",
    "Fomentar la autonomía técnica y las buenas prácticas de codificación en 1º DAW."
  ],
  theory: {
    intro: `
      El **Proyecto Integrador de la Unidad 3** constituye el hito culminante del **Resultado de Aprendizaje 3 (RA3)**.
      
      En este proyecto deberás demostrar tu competencia para diseñar una aplicación web completa que combine:
      1. La **manipulación dinámica del DOM** mediante JavaScript (creación de nodos, gestión de eventos sin recarga y filtrado interactivo en tiempo real).
      2. La **sindicación de contenidos** mediante un canal formal RSS 2.0 en XML, asegurando su autodescubrimiento y cumplimiento estricto de las especificaciones del W3C.
    `,
    sections: [
      {
        title: "Especificaciones Técnicas del Proyecto Integrador UT3",
        content: `
          El proyecto simula el portal de comunicación interactivo del CIFP Carlos III y debe cumplir las siguientes especificaciones:

          * **1. Estructura y Autodescubrimiento**:
            * Documento HTML5 válido con metadatos de viewport, charset UTF-8 y autor.
            * Etiqueta \`<link rel="alternate" type="application/rss+xml" ...>\` en la cabecera que enlace al canal \`canal_noticias.xml\`.

          * **2. Interfaz y Maquetación con CSS**:
            * Cabecera con título del centro y buscador en tiempo real (\`<input type="search">\`).
            * Contenedor para el listado de noticias estructurado en tarjetas legibles.
            * Formulario para que el usuario o docente agregue una nueva publicación al portal.

          * **3. Comportamiento Dinámico con JavaScript**:
            * **Filtrado en tiempo real**: Al escribir en el buscador, escuchar el evento \`input\` y ocultar/mostrar las tarjetas que contengan el texto buscado en su título.
            * **Formulario sin recarga**: Interceptar el evento \`submit\` con \`e.preventDefault()\`, validar que los campos no estén vacíos y crear dinámicamente con \`document.createElement\` una nueva tarjeta insertándola al principio de la lista (\`prepend\`).
            * **Eliminación y completado**: Cada tarjeta debe contar con un botón para eliminarla del DOM (\`.remove()\`) y un botón para marcarla como destacada mediante \`classList.toggle\`.

          * **4. Canal de Sindicación RSS 2.0 (\`canal_noticias.xml\`)**:
            * Documento XML independiente, bien formado y válido según W3C.
            * Elemento raíz \`<rss version="2.0">\` con contenedor \`<channel>\`.
            * Metadatos obligatorios (\`<title>\`, \`<link>\`, \`<description>\`) y recomendados (\`<language>\`, \`<pubDate>\` en RFC 822).
            * Al menos 3 entradas \`<item>\` con \`<title>\`, \`<link>\`, \`<description>\`, \`<guid>\` y \`<pubDate>\`.
        `
      }
    ]
  },
  quiz: [
    {
      id: "q-ut3-proy-1",
      question: "¿Cuál es la forma más eficiente y limpia de filtrar tarjetas de noticias en tiempo real mientras el usuario escribe en un campo de búsqueda?",
      options: [
        "Recargar la página web enviando una petición GET al servidor con cada pulsación de tecla.",
        "Escuchar el evento 'input' en el campo de texto, iterar sobre las tarjetas con querySelectorAll y alternar una clase CSS (o style.display) comparando textContent con el valor buscado.",
        "Borrar todo el árbol DOM y volver a crear el archivo index.html desde cero.",
        "Desconectar la conexión a Internet mientras dure la búsqueda."
      ],
      correctIndex: 1,
      explanation: "El evento 'input' se dispara reactivamente con cada tecla; comparar el texto en minúsculas (toLowerCase) y alternar la visibilidad de las tarjetas mediante clases es el estándar de alto rendimiento en frontend."
    }
  ],
  exercises: [
    {
      id: "ex-ut3-proyecto",
      title: "Desarrollo del Portal Interactivo y Canal de Sindicación RSS 2.0",
      description: "Implementa el código del portal interactivo integrando buscador en tiempo real, inserción dinámica de noticias y enlace al canal RSS 2.0 del centro.",
      initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal de Novedades DAW - CIFP Carlos III</title>
  
  <!-- Especificación 1: Autodescubrimiento del canal RSS 2.0 -->

  <style>
    body { font-family: system-ui, sans-serif; margin: 0; padding: 20px; background: #f1f5f9; color: #1e293b; }
    header { background: #0f172a; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .panel { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 20px; }
    .tarjeta { border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 12px; background: white; transition: all 0.2s; }
    .tarjeta.destacada { border-left: 6px solid #f59e0b; background: #fffbeb; }
    .oculto { display: none; }
    .btn { cursor: pointer; padding: 6px 12px; border-radius: 4px; border: none; }
    .btn-borrar { background: #ef4444; color: white; }
    .btn-destacar { background: #f59e0b; color: white; margin-right: 8px; }
  </style>
</head>
<body>

  <header>
    <h1>Portal de Comunicación y Novedades - 1º DAW</h1>
    <p>CIFP Carlos III | Cartagena</p>
  </header>

  <main>
    <!-- Buscador en tiempo real -->
    <div class="panel">
      <label for="buscador"><strong>Buscar noticia en tiempo real:</strong></label><br>
      <input type="search" id="buscador" placeholder="Escribe para filtrar noticias..." style="width: 100%; max-width: 400px; padding: 8px; margin-top: 6px;">
    </div>

    <!-- Formulario para agregar noticias dinámicamente -->
    <div class="panel">
      <h3>Publicar Nueva Noticia</h3>
      <form id="form-noticia">
        <div style="margin-bottom: 10px;">
          <input type="text" id="nuevo-titulo" placeholder="Titular de la noticia..." style="width: 100%; max-width: 400px; padding: 8px;" required>
        </div>
        <div style="margin-bottom: 10px;">
          <textarea id="nueva-desc" placeholder="Resumen o descripción..." rows="3" style="width: 100%; max-width: 400px; padding: 8px;" required></textarea>
        </div>
        <button type="submit" class="btn" style="background: #2563eb; color: white;">Publicar en el Portal</button>
      </form>
    </div>

    <!-- Listado de noticias del portal -->
    <section id="lista-noticias">
      <article class="tarjeta">
        <h3>Bienvenida al curso 2026/2027 en el CIFP Carlos III</h3>
        <p>Comienza el periodo lectivo para los alumnos de Grado Superior en Desarrollo de Aplicaciones Web.</p>
        <div style="margin-top: 10px;">
          <button class="btn btn-destacar">Destacar</button>
          <button class="btn btn-borrar">Eliminar</button>
        </div>
      </article>
    </section>
  </main>

  <script>
    // Desarrolla aquí las especificaciones del Proyecto Integrador UT3:
    // 1. Filtrado en tiempo real con el evento 'input' sobre #buscador
    // 2. Interceptación de #form-noticia con preventDefault, validación y prepend de la nueva tarjeta
    // 3. Delegación de eventos o listeners individuales para botones de destacar (.destacada) y eliminar (.remove)
    
  </script>
</body>
</html>`,
      language: "html",
      tasks: [
        "1. Añade la etiqueta <link rel=\"alternate\" ...> en el <head> para el autodescubrimiento del feed RSS 2.0.",
        "2. Implementa la búsqueda en tiempo real: al teclear en #buscador, recorre las tarjetas con querySelectorAll y añade/quita la clase 'oculto' si el título no coincide con el texto escrito.",
        "3. Intercepta el evento 'submit' de #form-noticia, cancela la recarga con preventDefault(), crea la estructura completa del nuevo <article class=\"tarjeta\"> con su h3, p y botonera, e insértala con prepend en #lista-noticias.",
        "4. Programa la interactividad de los botones: 'Destacar' debe alternar la clase 'destacada' con classList.toggle, y 'Eliminar' debe retirar la tarjeta del DOM con .remove().",
        "5. Diseña en un archivo independiente 'canal_noticias.xml' el canal RSS 2.0 correspondiente a las noticias publicadas."
      ],
      solution: `<!-- Este proyecto integrador no cuenta con solución directa para fomentar tu aprendizaje autónomo y activo. Utiliza el botón 'Previsualizar HTML/CSS en Vivo' para comprobar tu diseño e interactúa con el profesor en clase para resolver tus dudas. -->`,
      hints: "Recuerda que cada técnica (búsqueda en vivo con input, createElement, prepend, preventDefault y autodescubrimiento RSS) ha sido explicada paso a paso en las sesiones 1 a 7 de la unidad."
    }
  ]
};

UNIT_3_DATA.project = UNIT_3_PROJECT;
