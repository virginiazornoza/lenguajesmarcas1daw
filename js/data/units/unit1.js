/**
 * unit1.js
 * Unidad de Trabajo 1: Características de los lenguajes de marcas (RA1 - 8% peso)
 * Curso 2026/2027 - 8 horas lectivas (4 bloques de 2 horas en la 1ª Evaluación)
 * Contenido didáctico completo, cuestionarios autocorregibles y ejercicios prácticos.
 */

export const UNIT_1_DATA = {
  id: "ut1",
  unitNumber: 1,
  title: "Características de los lenguajes de marcas",
  ra: "RA1: Reconoce las características de lenguajes de marcas, analizando e interpretando fragmentos de código.",
  hours: 8,
  weight: "8%",
  evaluation: "1ª Evaluación",
  blocks: [
    /* =========================================================================
       BLOQUE 1 (2 HORAS)
       ========================================================================= */
    {
      id: "ut1-b1",
      blockNumber: 1,
      title: "Fundamentos y evolución histórica de los lenguajes de marcas",
      duration: "2 horas",
      session: "Sesión 1",
      evaluation: "1ª Evaluación",
      ce: ["CE1a", "CE1b", "CE1c", "CE1d"],
      objectives: [
        "Identificar qué es un lenguaje de marcas y cómo se diferencia de un lenguaje de programación.",
        "Comprender la evolución histórica: de GML y SGML al surgimiento de HTML y XML.",
        "Distinguir con precisión entre marcado de presentación, de procedimiento y semántico/estructural."
      ],
      theory: {
        intro: `
          Un **lenguaje de marcas** (o *markup language*) es un sistema formal que combina texto plano con **etiquetas** (*tags*) o marcas sintácticas que aportan información sobre la estructura del documento, su significado o cómo debe presentarse. A diferencia de un lenguaje de programación como Java o Python, un lenguaje de marcas **no ejecuta algoritmos ni bucles**, sino que estructura y cualifica la información.
        `,
        sections: [
          {
            title: "1. ¿Qué es el marcado? Elementos fundamentales",
            content: `
              El término "marcar" proviene de las imprentas tradicionales, donde los correctores añadían marcas manuscritas al original para indicar al tipógrafo el tamaño de fuente, sangrías o cursivas.
              
              En informática, el marcado se realiza mediante secuencias delimitadas por corchetes angulares (&lt; y &gt;).
              
              Los tres componentes esenciales de cualquier lenguaje de marcado son:
              * **Etiqueta (Tag)**: Marca sintáctica que delimita el inicio o fin de un dato. Ejemplo: \`<titulo>\` (apertura) y \`</titulo>\` (cierre).
              * **Elemento (Element)**: Conjunto completo formado por la etiqueta de apertura, el contenido interior y la etiqueta de cierre. Ejemplo: \`<modulo>Lenguajes de Marcas</modulo>\`.
              * **Atributo (Attribute)**: Par nombre="valor" situado dentro de la etiqueta de apertura que proporciona metadatos adicionales sobre el elemento. Ejemplo: \`<alumno id="A104" estado="matriculado">\`.
            `
          },
          {
            title: "2. Tipos de marcado según su finalidad",
            content: `
              A lo largo de la evolución de la informática se han distinguido tres grandes tipos de marcado:
              
              1. **Marcado de Presentación (o de formato)**:
                 Indica visualmente cómo debe lucir el texto en pantalla o papel (negrita, tamaño de letra, colores, alineación).
                 *Ejemplos*: RTF (*Rich Text Format*), Markdown (\`**negrita**\`), o etiquetas obsoletas de HTML antiguo como \`<font>\` o \`<center>\`.
                 
              2. **Marcado de Procedimiento**:
                 Contiene instrucciones de bajo nivel dirigidas a un intérprete o procesador tipográfico sobre cómo imprimir el documento paso a paso.
                 *Ejemplos*: PostScript, LaTeX, troff.
                 
              3. **Marcado Descriptivo o Semántico (Estructural)**:
                 Separa radicalmente el contenido de su apariencia visual. Las etiquetas describen **qué es** el dato (su significado real), no cómo debe pintarse en la pantalla.
                 *Ejemplos*: **XML**, HTML5 semántico (\`<header>\`, \`<article>\`, \`<nav>\`), SVG (*Scalable Vector Graphics*).
                 
              > **Principio clave en DAW**: En el desarrollo web profesional moderno separamos estrictamente la estructura y semántica (HTML / XML) del diseño visual (CSS) y del comportamiento e interacción (JavaScript).
            `
          },
          {
            title: "3. Evolución histórica: El árbol genealógico",
            content: `
              Comprender el origen de los lenguajes de marcas es indispensable para entender el desarrollo web moderno:
              
              * **1969 - GML (Generalized Markup Language)**: Creado en IBM por Charles Goldfarb, Edward Mosher y Raymond Lorie (de sus apellidos surge el acrónimo GML). Permitió por primera vez que documentos de texto se compartieran entre distintos sistemas informáticos independientemente del formato de salida.
              * **1986 - SGML (Standard Generalized Markup Language - ISO 8879)**: Estándar internacional padre de todos los lenguajes modernos. Es un *metalenguaje* (un lenguaje para definir otros lenguajes de marcas). Muy potente pero sumamente complejo y pesado para ser procesado por los navegadores de la época.
              * **1990 - HTML (HyperText Markup Language)**: Creado por Tim Berners-Lee en el CERN. Es una aplicación concreta y sencilla de SGML pensada para enlazar y visualizar documentos en la World Wide Web.
              * **1998 - XML (eXtensible Markup Language)**: Creado por el consorcio **W3C**. Es un subconjunto simplificado y optimizado de SGML diseñado para estructurar, validar y transportar datos entre cualquier sistema de forma universal.
            `,
            table: {
              headers: ["Lenguaje", "Año", "Tipo de Lenguaje", "Objetivo Principal"],
              rows: [
                ["GML", "1969", "Lenguaje de marcado", "Gestión documental en grandes sistemas IBM."],
                ["SGML", "1986", "Metalenguaje (Norma ISO)", "Definición formal y compleja de vocabularios de marcas."],
                ["HTML", "1990", "Aplicación de SGML", "Visualización de documentos hipertexto en navegadores web."],
                ["XML", "1998", "Metalenguaje simplificado", "Estructuración, intercambio y transporte neutral de datos."]
              ]
            }
          }
        ]
      },
      quiz: [
        {
          id: "q1-1",
          question: "¿Cuál de las siguientes afirmaciones define con exactitud a un lenguaje de marcas?",
          options: [
            "Es un lenguaje de programación compilado que gestiona punteros de memoria en la CPU.",
            "Es un sistema para combinar texto con etiquetas que describen la estructura, semántica o formato del contenido.",
            "Es un gestor de base de datos relacional para ejecutar consultas SQL.",
            "Es un protocolo de red TCP/IP para transferir paquetes entre routers."
          ],
          correctIndex: 1,
          explanation: "Un lenguaje de marcas no compila algoritmos ni gestiona la memoria; anota y etiqueta textos para describir su estructura (XML) o semántica."
        },
        {
          id: "q1-2",
          question: "¿Quiénes fueron los autores de GML en IBM en 1969?",
          options: [
            "Tim Berners-Lee, Robert Cailliau y Marc Andreessen.",
            "Charles Goldfarb, Edward Mosher y Raymond Lorie.",
            "Dennis Ritchie, Ken Thompson y Brian Kernighan.",
            "Alan Turing, John von Neumann y Ada Lovelace."
          ],
          correctIndex: 1,
          explanation: "GML recibe su nombre de las iniciales de sus tres creadores en IBM: Goldfarb, Mosher y Lorie."
        },
        {
          id: "q1-3",
          question: "¿Qué relación exacta existe entre SGML y XML?",
          options: [
            "XML es un subconjunto estricto y optimizado de SGML diseñado por el W3C para la web.",
            "SGML es un derivado moderno de XML creado para inteligencia artificial.",
            "Son lenguajes idénticos sin ninguna diferencia técnica.",
            "XML sustituyó a JavaScript y no tiene relación con SGML."
          ],
          correctIndex: 0,
          explanation: "El W3C definió XML en 1998 eliminando las complejidades innecesarias de SGML para permitir analizadores ligeros y universales en la web."
        },
        {
          id: "q1-4",
          question: "¿A qué tipo de marcado pertenece una etiqueta como `<alumno_matriculado>`?",
          options: [
            "Marcado de presentación visual.",
            "Marcado semántico o descriptivo.",
            "Marcado procedimental de bajo nivel.",
            "Marcado binario no legible."
          ],
          correctIndex: 1,
          explanation: "Describe el significado real del dato (un alumno matriculado) y no su apariencia física o color en pantalla."
        },
        {
          id: "q1-5",
          question: "En `<modulo codigo=\"LMSGI\">Marcas</modulo>`, ¿qué parte corresponde al atributo?",
          options: [
            "El texto 'Marcas'.",
            "La etiqueta de cierre `</modulo>`.",
            "El par `codigo=\"LMSGI\"` situado en la etiqueta de apertura.",
            "El elemento raíz."
          ],
          correctIndex: 2,
          explanation: "Los atributos van en la etiqueta de apertura y constan de nombre seguido de signo igual y valor entre comillas."
        }
      ],
      exercises: [
        {
          id: "ex1-1",
          title: "Ejercicio 1: Anatomía de un fragmento de marcado",
          description: "Analiza el siguiente documento de ejemplo e identifica en el editor sus componentes esenciales: elemento raíz, elementos hijos, atributos y contenido textual.",
          initialCode: `<instituto codigo="30019702">
  <nombre>CIFP Carlos III</nombre>
  <localidad>Cartagena</localidad>
  <ciclo nivel="superior" familia="Informatica">
    <nombre>Desarrollo de Aplicaciones Web</nombre>
    <curso>1</curso>
  </ciclo>
</instituto>`,
          language: "xml",
          tasks: [
            "1. Localiza cuál es el elemento raíz único.",
            "2. Identifica los atributos y sus valores entre comillas.",
            "3. Observa la jerarquía: ¿quién es el padre de <curso>?"
          ],
          solution: `<!-- Solución comentada:
1. Elemento raíz: <instituto> (engloba a todos los demás nodos).
2. Atributos:
   - codigo="30019702" en <instituto>
   - nivel="superior" y familia="Informatica" en <ciclo>
3. El elemento padre de <curso> es <ciclo>.
-->`,
          hints: "El elemento raíz es el que no tiene padre. Los atributos van dentro de la etiqueta de apertura."
        },
        {
          id: "ex1-2",
          title: "Ejercicio 2: Conversión de marcado visual a marcado semántico",
          description: "Transforma este fragmento de formato visual clásico a un documento XML semántico donde cada información esté etiquetada por su concepto.",
          initialCode: `<!-- Formato visual antiguo -->
<p><b>Alumno:</b> Laura García</p>
<p><b>Módulo:</b> Lenguajes de Marcas</p>
<p><b>Nota:</b> 9.2</p>`,
          language: "xml",
          tasks: [
            "1. Crea un elemento raíz <expediente> o <matricula>.",
            "2. Utiliza etiquetas semánticas como <alumno>, <modulo> y <nota>.",
            "3. Valida en el editor que el XML esté bien formado."
          ],
          solution: `<?xml version="1.0" encoding="UTF-8"?>
<expediente>
  <alumno>
    <nombre>Laura García</nombre>
    <modulo>Lenguajes de Marcas</modulo>
    <nota>9.2</nota>
  </alumno>
</expediente>`,
          hints: "Elimina las etiquetas puramente visuales <p> y <b>. Representa la información en un árbol semántico."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 2 (2 HORAS)
       ========================================================================= */
    {
      id: "ut1-b2",
      blockNumber: 2,
      title: "Comparativa HTML vs XML y herramientas de desarrollo",
      duration: "2 horas",
      session: "Sesión 2",
      evaluation: "1ª Evaluación",
      ce: ["CE1c", "CE1d", "CE1e"],
      objectives: [
        "Comprender en profundidad las diferencias técnicas entre HTML y XML.",
        "Analizar la rigidez y tolerancia a errores de cada especificación.",
        "Configurar y utilizar el entorno de trabajo recomendado (VS Code, extensiones y validadores)."
      ],
      theory: {
        intro: `
          Aunque tanto **HTML** como **XML** emplean corchetes angulares (&lt; y &gt;), sus metas técnicas son radicalmente distintas. Confundirlos es uno de los errores iniciales más comunes.
        `,
        sections: [
          {
            title: "1. La gran comparativa: HTML vs XML",
            content: `
              La diferencia nuclear se resume en una frase:
              * **HTML se diseñó para MOSTRAR datos** (centrado en la presentación y renderizado en navegadores).
              * **XML se diseñó para DESCRIBIR Y TRANSPORTAR datos** (centrado en la estructura e intercambio entre aplicaciones).
              
              Los 4 pilares diferenciales:
              
              1. **Vocabulario de etiquetas**:
                 * *HTML*: Vocabulario cerrado y predefinido por el estándar WHATWG/W3C (\`<p>\`, \`<h1>\`, \`<table>\`, \`<a>\`). No puedes inventar etiquetas con semántica propia.
                 * *XML*: Vocabulario completamente libre. No existe ninguna etiqueta predefinida. Las etiquetas las inventa el desarrollador según el negocio (\`<factura>\`, \`<cliente>\`, \`<precio>\`).
                 
              2. **Tolerancia a fallos sintácticos**:
                 * *HTML*: Es muy permisivo. Si olvidas cerrar una etiqueta o comillas, el navegador intenta autocorregirlo.
                 * *XML*: Es **estricto e inflexible** (*draconian error handling*). Ante el menor fallo sintáctico, el analizador XML detiene la lectura inmediatamente.
                 
              3. **Sensibilidad a mayúsculas y minúsculas (Case Sensitivity)**:
                 * *HTML*: Es indiferente (case-insensitive). \`<DIV>\`, \`<div>\` y \`<Div>\` son equivalentes.
                 * *XML*: Es estrictamente sensible (case-sensitive). \`<Modulo>\` NO coincide con \`</modulo>\`.
                 
              4. **Cierre de elementos vacíos**:
                 * *HTML*: Permite etiquetas vacías sin cerrar (\`<img src="foto.png">\`, \`<br>\`, \`<input>\`).
                 * *XML*: Todo elemento sin contenido debe cerrarse obligatoriamente (\`<foto src="foto.png" />\` o \`<foto></foto>\`).
            `,
            table: {
              headers: ["Característica", "HTML", "XML"],
              rows: [
                ["Propósito", "Presentación y visualización en navegadores", "Estructuración y transporte de información"],
                ["Etiquetas", "Predefinidas y fijas por el estándar", "Extensibles y definidas libremente"],
                ["Tratamiento de errores", "Tolerante y permisivo", "Estricto (se detiene ante el 1er error)"],
                ["Mayúsculas / minúsculas", "No distingue (case-insensitive)", "Estrictamente sensible (case-sensitive)"],
                ["Cierre de etiquetas", "Opcional en ciertos elementos vacíos", "100% obligatorio en todos los elementos"],
                ["Comillas en atributos", "Opcionales en HTML clásico", "Obligatorias siempre en XML"]
              ]
            }
          },
          {
            title: "2. Herramientas de edición en el aula",
            content: `
              En el CIFP Carlos III empleamos herramientas profesionales para el desarrollo del módulo:
              
              * **Visual Studio Code (VS Code)**: Editor de código estándar. Extensiones recomendadas:
                * *XML Tools*: Formateo automático de código XML y evaluación de expresiones XPath.
                * *XML by Red Hat*: Validación sintáctica en tiempo real y soporte para esquemas XSD.
                * *Prettier*: Formateador de código para HTML y CSS.
              * **Navegadores web (Chrome, Edge, Firefox)**: Incluyen analizadores XML nativos con vista de árbol colapsable y detección de errores.
              * **XML Copy Editor**: Editor ligero especializado para validaciones contra DTD y esquemas.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q2-1",
          question: "¿Qué ocurre al abrir en un navegador un archivo XML que tiene una etiqueta sin cerrar?",
          options: [
            "El navegador la cierra automáticamente y muestra la página con normalidad.",
            "El navegador muestra una página de error sintáctico (XML Parsing Error) y detiene la carga.",
            "El archivo se convierte en binario.",
            "Se borra el archivo del disco."
          ],
          correctIndex: 1,
          explanation: "XML aplica una política estricta de control de errores: ante el más mínimo fallo de sintaxis, el procesador se detiene obligatoriamente."
        },
        {
          id: "q2-2",
          question: "¿Es válida en XML la etiqueta de apertura `<Modulo>` cerrada con `</modulo>`?",
          options: [
            "Sí, porque XML no distingue mayúsculas de minúsculas.",
            "No, porque XML es 'case-sensitive' y la grafía de apertura y cierre debe ser exactamente idéntica.",
            "Solo si el documento tiene prólogo en inglés.",
            "Sí, si se añade el atributo case=\"ignore\"."
          ],
          correctIndex: 1,
          explanation: "XML distingue mayúsculas de minúsculas. `<Modulo>` debe cerrarse obligatoriamente con `</Modulo>`."
        },
        {
          id: "q2-3",
          question: "¿Cuál es la principal ventaja de que XML no tenga etiquetas predefinidas?",
          options: [
            "Que cada sector u organización puede crear su propio vocabulario a medida (Facturae, SVG, MathML, etc.).",
            "Que los archivos no ocupan espacio en disco.",
            "Que no necesita procesador para ser interpretado.",
            "Que se ejecuta directamente en la CPU sin memoria RAM."
          ],
          correctIndex: 0,
          explanation: "La extensibilidad de XML permite crear vocabularios universales adaptados a cada área de negocio o intercambio de información."
        },
        {
          id: "q2-4",
          question: "¿Cómo se debe cerrar en XML un elemento que no contiene texto?",
          options: [
            "Dejándolo abierto sin más: `<separador>`.",
            "Con sintaxis de autocierre `<separador />` o la pareja `<separador></separador>`.",
            "Con una coma al final: `<separador,>`.",
            "XML prohíbe elementos que no contengan texto."
          ],
          correctIndex: 1,
          explanation: "En XML ningún elemento puede quedar sin cerrar. Los elementos vacíos se autocierran con `/>` o con la etiqueta de cierre correspondiente."
        },
        {
          id: "q2-5",
          question: "¿Qué extensión de VS Code es muy útil en DAW para formatear XML y ejecutar consultas XPath?",
          options: [
            "XML Tools.",
            "Python Runner.",
            "CSS Minifier.",
            "Docker Desktop."
          ],
          correctIndex: 0,
          explanation: "XML Tools es la extensión más popular para formateo, navegación por el árbol XML y evaluación XPath."
        }
      ],
      exercises: [
        {
          id: "ex2-1",
          title: "Ejercicio 1: De presentación HTML a datos puros XML",
          description: "Convierte esta tarjeta de presentación HTML de un producto en un archivo XML que almacene exclusivamente los datos limpios sin maquetación visual.",
          initialCode: `<!-- Ficha de producto en HTML -->
<div class="tarjeta-producto">
  <h2>Teclado Mecánico RGB</h2>
  <p class="marca">Fabricante: <span>KeyChron</span></p>
  <p class="precio">Precio: <strong>89.99 €</strong></p>
  <span class="stock">Disponible</span>
</div>`,
          language: "xml",
          tasks: [
            "1. Añade el prólogo XML con codificación UTF-8.",
            "2. Diseña un elemento raíz <producto>.",
            "3. Modela etiquetas semánticas como <nombre>, <fabricante>, <precio> y <disponible>."
          ],
          solution: `<?xml version="1.0" encoding="UTF-8"?>
<producto id="P-882">
  <nombre>Teclado Mecánico RGB</nombre>
  <fabricante>KeyChron</fabricante>
  <precio moneda="EUR">89.99</precio>
  <disponible>true</disponible>
</producto>`,
          hints: "Elimina divs, h2, p, span y diseña etiquetas con significado de datos."
        },
        {
          id: "ex2-2",
          title: "Ejercicio 2: Corrección de sintaxis no válida",
          description: "Corrige el siguiente fragmento en el editor para que cumpla con la rigidez sintáctica de XML.",
          initialCode: `<almacen>
  <articulo id=502>
    <NOMBRE>Disco SSD NVMe</nombre>
    <capacidad>1TB
    <icono src="ssd.png">
  </articulo>
</almacen>`,
          language: "xml",
          tasks: [
            "1. Añade comillas en el atributo id.",
            "2. Iguala las mayúsculas y minúsculas en NOMBRE.",
            "3. Cierra la etiqueta <capacidad>.",
            "4. Cierra el elemento vacío <icono>."
          ],
          solution: `<?xml version="1.0" encoding="UTF-8"?>
<almacen>
  <articulo id="502">
    <nombre>Disco SSD NVMe</nombre>
    <capacidad>1TB</capacidad>
    <icono src="ssd.png" />
  </articulo>
</almacen>`,
          hints: "Atributos con comillas, nombres idénticos y autocierre en elementos vacíos."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 3 (2 HORAS)
       ========================================================================= */
    {
      id: "ut1-b3",
      blockNumber: 3,
      title: "Estructura, prólogo, sintaxis y documentos XML bien formados",
      duration: "2 horas",
      session: "Sesión 3",
      evaluation: "1ª Evaluación",
      ce: ["CE1f", "CE1g", "CE1h"],
      objectives: [
        "Escribir correctamente el prólogo XML con sus tres directivas (version, encoding, standalone).",
        "Comprender la estructura arbórea jerárquica con un único elemento raíz.",
        "Aplicar el decálogo de reglas de buena formación, entidades predefinidas y bloques CDATA."
      ],
      theory: {
        intro: `
          Un documento XML posee una **estructura estrictamente jerárquica en forma de árbol invertido**. La primera exigencia de cualquier archivo XML es estar **bien formado** (*well-formed*). Si viola una sola regla sintáctica, ningún procesador podrá interpretarlo.
        `,
        sections: [
          {
            title: "1. El Prólogo XML",
            content: `
              El prólogo es la cabecera técnica obligatoria en entornos de producción:
              \`\`\`xml
              <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
              \`\`\`
              
              Directivas del prólogo:
              * **version**: Versión de la recomendación XML utilizada (habitualmente \`"1.0"\`).
              * **encoding**: Codificación de caracteres. \`"UTF-8"\` es el estándar universal (soporta tildes, eñes y caracteres internacionales).
              * **standalone**: Vale \`"yes"\` si el archivo no depende de declaraciones de tipo externas (como una DTD externa), o \`"no"\` si depende de un archivo exterior.
              
              > ⚠️ **Reglas de oro del prólogo**:
              > * Debe figurar en la **línea 1, columna 1** del archivo (sin espacios previos ni líneas en blanco).
              > * La palabra \`xml\` debe ir en **minúsculas**.
            `
          },
          {
            title: "2. Reglas fundamentales de un documento bien formado",
            content: `
              Un documento XML está **bien formado** si cumple todas las reglas de la especificación:
              
              1. **Único elemento raíz**: Todo el contenido debe estar englobado dentro de un único elemento contenedor raíz.
              2. **Cierre obligatorio**: Toda etiqueta que se abre debe cerrarse.
              3. **Anidamiento correcto**: Prohibido el solapamiento. El último elemento que se abre debe ser el primero en cerrarse (\`<modulo><nombre>LMSGI</nombre></modulo>\`).
              4. **Comillas obligatorias en atributos**: Todos los valores de atributos deben ir entre comillas dobles o simples (\`codigo="LMSGI"\`).
              5. **Nombres válidos**: Las etiquetas deben comenzar por letra o guion bajo (\`_\`), nunca por números, espacios ni por la secuencia reservada \`xml\`.
            `
          },
          {
            title: "3. Caracteres reservados, Entidades y Secciones CDATA",
            content: `
              En XML los símbolos \`<\` y \`&\` están estrictamente reservados:
              * \`<\` inicia etiquetas.
              * \`&\` inicia entidades.
              
              Si necesitas escribir estos símbolos en el texto, debes sustituirlos por su **entidad predefinida**:
              * \`&lt;\` representa el signo menor que (&lt;)
              * \`&gt;\` representa el signo mayor que (&gt;)
              * \`&amp;\` representa el signo ampersand (&amp;)
              * \`&quot;\` representa comillas dobles (&quot;)
              * \`&apos;\` representa comilla simple o apóstrofe (&apos;)
              
              **Secciones CDATA (Character Data)**:
              Para incrustar bloques de código de programación (JavaScript, scripts SQL o fórmulas con muchos \`<\` y \`&&\`) sin tener que escapar cada carácter, se utiliza:
              \`\`\`xml
              <script_ejemplo>
                <![CDATA[
                  if (nota >= 5 && faltas < 10) {
                    aprobado = true;
                  }
                ]]>
              </script_ejemplo>
              \`\`\`
              Todo lo que esté dentro de \`<![CDATA[ ... ]]>\` es tratado como texto plano sin interpretar etiquetas.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q3-1",
          question: "¿Cuál es la forma correcta de escribir el prólogo XML?",
          options: [
            "<?XML version=1.0 encoding=UTF-8?>",
            "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
            "<xml version=\"1.0\" encoding=\"UTF-8\">",
            "<!xml version=\"1.0\" encoding=\"UTF-8\"!>"
          ],
          correctIndex: 1,
          explanation: "Inicia con `<?xml` en minúsculas, lleva comillas en todos los atributos y finaliza con `?>`."
        },
        {
          id: "q3-2",
          question: "¿Por qué un archivo XML no puede tener dos elementos raíz al mismo nivel?",
          options: [
            "Porque la especificación XML exige una estructura en árbol con un único nodo raíz como ancestro común de todo el documento.",
            "Porque el ordenador solo tiene un procesador.",
            "Porque los elementos hermanos están prohibidos en XML.",
            "Solo se permite en sistemas Linux."
          ],
          correctIndex: 0,
          explanation: "La regla cardinal del modelo en árbol de XML exige que exista un único elemento raíz en la cúspide del documento."
        },
        {
          id: "q3-3",
          question: "¿Cómo se debe escribir en XML el texto: 'nota >= 5 & faltas <= 3'?",
          options: [
            "nota >= 5 & faltas <= 3",
            "nota &gt;= 5 &amp; faltas &lt;= 3",
            "nota >> 5 && faltas << 3",
            "nota => 5 + faltas =< 3"
          ],
          correctIndex: 1,
          explanation: "Se debe sustituir `>` por `&gt;`, `&` por `&amp;` y `<` por `&lt;`."
        },
        {
          id: "q3-4",
          question: "¿Para qué sirve un bloque `<![CDATA[ ... ]]>` en XML?",
          options: [
            "Para indicar que el texto es un enlace a una base de datos.",
            "Para indicar al procesador que trate el contenido como texto plano sin analizar etiquetas ni entidades.",
            "Para definir estilos CSS en el archivo.",
            "Para cifrar el documento con clave privada."
          ],
          correctIndex: 1,
          explanation: "CDATA ('Character Data') instruye al analizador para que ignore los caracteres especiales de marcado y los interprete literalmente."
        },
        {
          id: "q3-5",
          question: "¿Cuál de estos nombres de etiqueta es INVÁLIDO en XML?",
          options: [
            "<_alumno>",
            "<1erCurso>",
            "<nombre_alumno>",
            "<modulo-daw>"
          ],
          correctIndex: 1,
          explanation: "En XML los nombres de elementos no pueden comenzar nunca por un dígito numérico (`<1erCurso>`)."
        }
      ],
      exercises: [
        {
          id: "ex3-1",
          title: "Ejercicio 1: El reto del depurador XML (5 errores)",
          description: "El siguiente archivo contiene 5 errores de sintaxis que impiden que esté bien formado. Utiliza el botón 'Validar XML en Vivo' para corregirlos hasta obtener el mensaje verde de éxito.",
          initialCode: `<?xml version="1.0" encoding="UTF-8"?>
<centro>
  <departamento id=informatica>
    <Titulo>Informática y Comunicaciones</titulo>
    <jefe>García & Gómez</jefe>
    <logo url="img/logo.png">
  </departamento>
<centro>`,
          language: "xml",
          tasks: [
            "1. Pon comillas en el atributo id.",
            "2. Iguala las mayúsculas en Titulo.",
            "3. Sustituye & por la entidad &amp;.",
            "4. Cierra la etiqueta <logo />.",
            "5. Cierra correctamente la raíz con </centro>."
          ],
          solution: `<?xml version="1.0" encoding="UTF-8"?>
<centro>
  <departamento id="informatica">
    <titulo>Informática y Comunicaciones</titulo>
    <jefe>García &amp; Gómez</jefe>
    <logo url="img/logo.png" />
  </departamento>
</centro>`,
          hints: "Revisa: comillas en id, coincidencia de mayúsculas, entidad &amp;, autocierre de logo y barra / en </centro>."
        },
        {
          id: "ex3-2",
          title: "Ejercicio 2: Uso de secciones CDATA",
          description: "Escribe un documento XML que contenga un script JavaScript con comparadores lógicos (<, > y &&) dentro de una sección CDATA.",
          initialCode: `<?xml version="1.0" encoding="UTF-8"?>
<practica lenguaje="JavaScript">
  <descripcion>Comprobación de condiciones</descripcion>
  <!-- Inserta aquí el elemento <codigo> con la sección CDATA -->
</practica>`,
          language: "xml",
          tasks: [
            "1. Añade el elemento <codigo>.",
            "2. Declara la sección <![CDATA[ ... ]]> en su interior.",
            "3. Escribe una instrucción con if (x < 10 && y > 20) dentro del bloque."
          ],
          solution: `<?xml version="1.0" encoding="UTF-8"?>
<practica lenguaje="JavaScript">
  <descripcion>Comprobación de condiciones</descripcion>
  <codigo>
    <![CDATA[
      if (x < 10 && y > 20) {
        console.log("Valores en rango");
      }
    ]]>
  </codigo>
</practica>`,
          hints: "La sintaxis exacta es <![CDATA[ ... ]]>. Respeta las mayúsculas en CDATA."
        }
      ]
    },

    /* =========================================================================
       BLOQUE 4 (2 HORAS)
       ========================================================================= */
    {
      id: "ut1-b4",
      blockNumber: 4,
      title: "Espacios de nombres (XML Namespaces) y Proyecto Integrador UT1",
      duration: "2 horas",
      session: "Sesión 4",
      evaluation: "1ª Evaluación",
      ce: ["CE1h", "CE1i"],
      objectives: [
        "Comprender la necesidad de los espacios de nombres para evitar colisiones léxicas.",
        "Declarar y aplicar prefijos de espacios de nombres mediante el atributo xmlns:prefijo.",
        "Diferenciar espacios de nombres prefijados de espacios de nombres por defecto y su ámbito (scope).",
        "Superar el proyecto práctico integrador de la Unidad de Trabajo 1."
      ],
      theory: {
        intro: `
          Al integrar información procedente de múltiples fuentes o vocabularios (por ejemplo, datos comerciales combinados con una tabla HTML o un gráfico SVG), se producen inevitablemente **colisiones de nombres**: dos etiquetas con idéntico nombre pero con propósitos totalmente distintos. Para solucionar esto existen los **Espacios de Nombres en XML (Namespaces)**.
        `,
        sections: [
          {
            title: "1. El problema de la colisión de nombres",
            content: `
              Observa el siguiente dilema en un mismo documento:
              \`\`\`xml
              <inventario>
                <!-- ¿A qué se refiere 'tabla'? ¿Al mobiliario o a una tabla HTML? -->
                <tabla>
                  <nombre>Mesa de Roble</nombre>
                  <precio>120</precio>
                </tabla>
                <tabla>
                  <tr><td>Celda de datos</td></tr>
                </tabla>
              </inventario>
              \`\`\`
              Para un procesador automático es imposible diferenciar ambas etiquetas sin un calificador de contexto.
            `
          },
          {
            title: "2. Declaración con atributo xmlns y Prefijos",
            content: `
              Un espacio de nombres asocia un **prefijo** con un identificador unívoco universal (habitualmente una URI / URL):
              \`\`\`xml
              xmlns:prefijo="URI_identificadora"
              \`\`\`
              
              Ejemplo resuelto mediante prefijos:
              \`\`\`xml
              <inventario xmlns:mueble="https://tienda.es/muebles"
                          xmlns:html="http://www.w3.org/1999/xhtml">
                          
                <!-- Elemento cualificado del vocabulario de muebles -->
                <mueble:tabla>
                  <mueble:nombre>Mesa de Roble</mueble:nombre>
                  <mueble:precio>120</mueble:precio>
                </mueble:tabla>
                
                <!-- Elemento cualificado del vocabulario HTML -->
                <html:table>
                  <html:tr>
                    <html:td>Celda de datos</html:td>
                  </html:tr>
                </html:table>
                
              </inventario>
              \`\`\`
              
              > **Punto clave**: La URI **no necesita ser una página web que exista físicamente en internet**. El analizador XML no descarga nada de esa dirección; simplemente la utiliza como una cadena de texto única para distinguir un vocabulario de otro.
            `
          },
          {
            title: "3. Espacio de nombres por defecto y Ámbito (Scope)",
            content: `
              * **Espacio de nombres por defecto**:
                Si declaramos \`xmlns="URI"\` sin ningún prefijo, todos los elementos contenidos en ese nodo que no lleven prefijo pertenecerán automáticamente a ese espacio de nombres.
              * **Ámbito (*Scope*)**:
                Un espacio de nombres tiene vigencia únicamente en el elemento donde se declara y en todos sus elementos descendientes.
            `
          }
        ]
      },
      quiz: [
        {
          id: "q4-1",
          question: "¿Cuál es el propósito primordial de los espacios de nombres (namespaces) en XML?",
          options: [
            "Comprimir los archivos para que pesen menos kilobytes.",
            "Evitar conflictos o colisiones de nombres cuando se combinan diferentes vocabularios en un mismo documento.",
            "Obligar al usuario a navegar por internet.",
            "Traducir las etiquetas al inglés."
          ],
          correctIndex: 1,
          explanation: "Los espacios de nombres proporcionan nombres cualificados universalmente para evitar colisiones léxicas entre distintos vocabularios."
        },
        {
          id: "q4-2",
          question: "¿Es obligatorio que la URI declarada en un atributo `xmlns` exista como página web activa en internet?",
          options: [
            "Sí, si el servidor devuelve error 404 el documento XML no se puede abrir.",
            "No, la URI se utiliza exclusivamente como una cadena identificadora unívoca en todo el mundo.",
            "Solo si el documento tiene más de 100 líneas.",
            "Solo si el equipo utiliza Windows 11."
          ],
          correctIndex: 1,
          explanation: "El procesador XML no descarga recursos de la URI; la utiliza simplemente como un identificador único global."
        },
        {
          id: "q4-3",
          question: "En `<alumno xmlns:fp=\"https://cifpcarlos3.es/daw\">`, ¿qué representa 'fp'?",
          options: [
            "El prefijo del espacio de nombres que se usará para calificar las etiquetas.",
            "El valor del documento.",
            "El elemento raíz.",
            "Una clave de cifrado."
          ],
          correctIndex: 0,
          explanation: "'fp' es el prefijo que se antepone a las etiquetas de ese espacio de nombres: `<fp:modulo>`."
        },
        {
          id: "q4-4",
          question: "¿Qué ocurre al declarar `xmlns=\"https://ejemplo.org/daw\"` sin especificar ningún prefijo?",
          options: [
            "Se produce un error fatal de sintaxis.",
            "Se establece el espacio de nombres por defecto para ese elemento y todos sus descendientes no prefijados.",
            "Se desactiva la lectura del documento.",
            "Solo se aplica a los comentarios."
          ],
          correctIndex: 1,
          explanation: "La sintaxis `xmlns=\"URI\"` establece el espacio de nombres por defecto en su ámbito."
        },
        {
          id: "q4-5",
          question: "¿Los atributos sin prefijo pertenecen al espacio de nombres por defecto?",
          options: [
            "Sí, siempre heredan el espacio de nombres por defecto.",
            "No, los atributos sin prefijo nunca pertenecen a ningún espacio de nombres (ni siquiera al por defecto).",
            "Solo si su valor es una cadena de texto.",
            "Solo si el elemento padre es la raíz."
          ],
          correctIndex: 1,
          explanation: "Regla específica del W3C: los atributos sin prefijo no pertenecen a ningún espacio de nombres, incluso cuando hay un espacio por defecto activo."
        }
      ],
      exercises: [
        {
          id: "ex4-1",
          title: "Ejercicio 1: Declaración de dos espacios de nombres en un documento",
          description: "Crea un documento XML que combine la información de una factura comercial con un gráfico vectorial SVG simple usando dos prefijos diferenciados: 'fac' y 'svg'.",
          initialCode: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Declara en el elemento raíz <pedido> los dos espacios de nombres -->
<pedido>
  <!-- Elementos de la factura con fac: -->
  <!-- Elemento gráfico con svg: -->
</pedido>`,
          language: "xml",
          tasks: [
            "1. Declara xmlns:fac=\"https://facturas.empresa.es\" y xmlns:svg=\"http://www.w3.org/2000/svg\" en la raíz.",
            "2. Añade <fac:numero>2026-0042</fac:numero> y <fac:total>150.00</fac:total>.",
            "3. Añade <svg:rect x=\"10\" y=\"10\" width=\"100\" height=\"50\" />.",
            "4. Comprueba con el validador que los namespaces se reconozcan correctamente."
          ],
          solution: `<?xml version="1.0" encoding="UTF-8"?>
<pedido xmlns:fac="https://facturas.empresa.es"
        xmlns:svg="http://www.w3.org/2000/svg">
  <fac:datos>
    <fac:numero>2026-0042</fac:numero>
    <fac:total moneda="EUR">150.00</fac:total>
  </fac:datos>
  <svg:grafico>
    <svg:rect x="10" y="10" width="100" height="50" />
  </svg:grafico>
</pedido>`,
          hints: "Declara los dos atributos xmlns en la etiqueta de apertura del elemento raíz."
        },
        {
          id: "ex4-2",
          title: "Proyecto Integrador UT1: Expediente Académico Completo 1º DAW",
          description: "Aplica todos los conocimientos de la UT1: prólogo estricto, elemento raíz único, jerarquía de nodos, atributos con comillas, entidades predefinidas o secciones CDATA, y al menos un espacio de nombres oficial del CIFP Carlos III.",
          initialCode: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Diseña aquí el documento XML integrador completo de la UT1 -->
`,
          language: "xml",
          tasks: [
            "1. Prólogo XML completo con versión y codificación UTF-8.",
            "2. Raíz <instituto> con espacio de nombres https://cifpcarlos3.es/daw.",
            "3. Al menos 2 alumnos con sus datos personales, módulos cursados y notas numéricas.",
            "4. Uso de entidades predefinidas (&amp;) o bloques CDATA para observaciones técnicas.",
            "5. Valida con el botón interactivo para certificar que el archivo está BIEN FORMADO."
          ],
          solution: `<?xml version="1.0" encoding="UTF-8"?>
<instituto xmlns="https://cifpcarlos3.es/daw" codigo="30019702" curso="2026/2027">
  <centro>CIFP Carlos III</centro>
  <localidad>Cartagena</localidad>
  <alumnos>
    <alumno nia="10928374" estado="matriculado">
      <nombre>Alejandro</nombre>
      <apellidos>García &amp; Moreno</apellidos>
      <modulos>
        <modulo codigo="LMSGI">
          <nombre>Lenguajes de Marcas</nombre>
          <nota evaluacion="1">8.5</nota>
        </modulo>
        <modulo codigo="PROG">
          <nombre>Programación</nombre>
          <nota evaluacion="1">9.0</nota>
        </modulo>
      </modulos>
      <observaciones>
        <![CDATA[
          El alumno domina XML, sintaxis estricta y operadores if (nota >= 5 && asistencia > 85).
        ]]>
      </observaciones>
    </alumno>
  </alumnos>
</instituto>`,
          hints: "Comprueba que la sección CDATA se cierre correctamente con ]]> y que todos los atributos lleven comillas."
        }
      ]
    }
  ]
};
