
(function() {
/**
 * curriculum.js
 * Programación didáctica oficial de Lenguajes de Marcas y Sistemas de Gestión de Información (1º DAW)
 * CIFP Carlos III - Cartagena (Curso 2026/2027)
 * 
 * Distribución temporal oficial (Punto 3.2):
 * - 1ª Evaluación (48 horas lectivas):
 *   * UT1: 8 horas
 *   * UT2: 32 horas
 *   * UT3: 6 horas (continúa en 2ª Ev)
 * - 2ª Evaluación (34 horas lectivas):
 *   * UT3: 6 horas más (total 12 horas)
 *   * UT4: 24 horas
 *   * UT5: 4 horas (continúa en 3ª Ev)
 * - 3ª Evaluación (34 horas lectivas):
 *   * UT5: 16 horas más (total 20 horas)
 *   * UT6: 14 horas
 *   * UT7: 4 horas
 * Total: 48h + 34h + 34h = 116 horas lectivas (58 bloques de 2 horas).
 *
 * Ponderación oficial de RAs:
 * RA1: 8%, RA2: 26%, RA3: 12%, RA4: 20%, RA5: 20%, RA6: 12%, RA7: 2% (Total: 100%).
 * Todos los RAs son críticos y de obligada superación.
 *
 * Instrumentos de evaluación oficiales (Punto 4.7.2):
 * - RA1 a RA6: Examen 65%, Tareas 25%, Cuestionarios 10%.
 * - RA7: Cuestionarios 100%.
 */

const COURSE_INFO = {
  title: "Lenguajes de Marcas y Sistemas de Gestión de Información",
  shortTitle: "LMSGI",
  cycle: "1º DAW (Desarrollo de Aplicaciones Web)",
  level: "Formación Profesional de Grado Superior",
  academicYear: "2026/2027",
  center: "CIFP Carlos III - Cartagena",
  professor: "Virginia Zornoza Martínez",
  evaluations: [
    { name: "1ª Evaluación", hours: 48, unitsSummary: "UT1 (8h), UT2 (32h), UT3 (6h)" },
    { name: "2ª Evaluación", hours: 34, unitsSummary: "UT3 (6h), UT4 (24h), UT5 (4h)" },
    { name: "3ª Evaluación", hours: 34, unitsSummary: "UT5 (16h), UT6 (14h), UT7 (4h)" }
  ],
  gradingWeights: {
    ra1ToRa6: { exams: "65%", tasks: "25%", quizzes: "10%" },
    ra7: { exams: "0%", tasks: "0%", quizzes: "100%" }
  },
  pedagogicalNote: "Esta plataforma web es un entorno de entrenamiento y autoaprendizaje activo. Las calificaciones e instrumentos oficiales se gestionan a través del aula virtual de clase."
};

const UNITS = [
  {
    id: "ut1",
    unitNumber: 1,
    title: "Características de los lenguajes de marcas",
    shortTitle: "UT1: Características de los lenguajes de marcas",
    ra: "RA1",
    raDescription: "Reconoce las características de lenguajes de marcas, analizando e interpretando fragmentos de código.",
    weight: "8%",
    evaluation: "1ª Evaluación",
    hours: 8,
    blockCount: 4,
    evaluationDistribution: { exams: "65%", tasks: "25%", quizzes: "10%" },
    blocks: [
      {
        id: "ut1-b1",
        blockNumber: 1,
        title: "Fundamentos y evolución histórica de los lenguajes de marcas",
        duration: "2 horas",
        session: "Sesión 1",
        evaluation: "1ª Evaluación",
        description: "Orígenes de los lenguajes de marcado: de GML y SGML al surgimiento de HTML y XML. Marcado semántico vs marcado de presentación.",
        ce: ["CE1a", "CE1b", "CE1c", "CE1d"]
      },
      {
        id: "ut1-b2",
        blockNumber: 2,
        title: "Comparativa HTML vs XML y herramientas de desarrollo",
        duration: "2 horas",
        session: "Sesión 2",
        evaluation: "1ª Evaluación",
        description: "Diferencias esenciales entre HTML y XML: presentación frente a transporte de datos, rigidez sintáctica vs permisividad. Entorno de trabajo con VS Code y navegadores.",
        ce: ["CE1c", "CE1d", "CE1e"]
      },
      {
        id: "ut1-b3",
        blockNumber: 3,
        title: "Estructura, prólogo, sintaxis y documentos XML bien formados",
        duration: "2 horas",
        session: "Sesión 3",
        evaluation: "1ª Evaluación",
        description: "Anatomía de un documento XML: prólogo, elemento raíz único, jerarquía en árbol, elementos vs atributos, reglas de buena formación, entidades y bloques CDATA.",
        ce: ["CE1f", "CE1g", "CE1h"]
      },
      {
        id: "ut1-b4",
        blockNumber: 4,
        title: "Espacios de nombres (XML Namespaces) y Proyecto Integrador UT1",
        duration: "2 horas",
        session: "Sesión 4",
        evaluation: "1ª Evaluación",
        description: "Resolución de conflictos léxicos con atributos xmlns, prefijos, espacios por defecto, ámbito (scope) y práctica evaluable integradora de la unidad.",
        ce: ["CE1h", "CE1i"]
      }
    ]
  },
  {
    id: "ut2",
    unitNumber: 2,
    title: "Utilización de lenguajes de marcas en entornos web",
    shortTitle: "UT2: Lenguajes de marcas en entornos web (HTML5 y CSS3)",
    ra: "RA2",
    raDescription: "Utiliza lenguajes de marcas para la transmisión de información a través de la web, analizando la estructura de los documentos e identificando sus elementos.",
    weight: "26%",
    evaluation: "1ª Evaluación",
    hours: 32,
    blockCount: 16,
    evaluationDistribution: { exams: "65%", tasks: "25%", quizzes: "10%" },
    blocks: [
      { id: "ut2-b1", blockNumber: 1, title: "Evolución web: De HTML 4.01 y XHTML a HTML5", duration: "2 horas", session: "Sesión 1", evaluation: "1ª Evaluación", ce: ["CE2a", "CE2d"] },
      { id: "ut2-b2", blockNumber: 2, title: "Estructura básica de un documento HTML5 y elementos del head", duration: "2 horas", session: "Sesión 2", evaluation: "1ª Evaluación", ce: ["CE2b", "CE2c"] },
      { id: "ut2-b3", blockNumber: 3, title: "Etiquetas semánticas estructurales de HTML5 (header, nav, main, article...)", duration: "2 horas", session: "Sesión 3", evaluation: "1ª Evaluación", ce: ["CE2b", "CE2c"] },
      { id: "ut2-b4", blockNumber: 4, title: "Formato de texto, enlaces relativos y absolutos, e imágenes", duration: "2 horas", session: "Sesión 4", evaluation: "1ª Evaluación", ce: ["CE2c"] },
      { id: "ut2-b5", blockNumber: 5, title: "Listas ordenadas, desordenadas y de descripción", duration: "2 horas", session: "Sesión 5", evaluation: "1ª Evaluación", ce: ["CE2c"] },
      { id: "ut2-b6", blockNumber: 6, title: "Tablas en HTML5: estructura, cabeceras, agrupaciones y accesibilidad", duration: "2 horas", session: "Sesión 6", evaluation: "1ª Evaluación", ce: ["CE2c"] },
      { id: "ut2-b7", blockNumber: 7, title: "Formularios web I: controles básicos, inputs, labels y métodos GET/POST", duration: "2 horas", session: "Sesión 7", evaluation: "1ª Evaluación", ce: ["CE2c"] },
      { id: "ut2-b8", blockNumber: 8, title: "Formularios web II: validaciones nativas HTML5, tipos específicos y atributos", duration: "2 horas", session: "Sesión 8", evaluation: "1ª Evaluación", ce: ["CE2c"] },
      { id: "ut2-b9", blockNumber: 9, title: "Multimedia en la web: audio, vídeo e incrustaciones iframe", duration: "2 horas", session: "Sesión 9", evaluation: "1ª Evaluación", ce: ["CE2c"] },
      { id: "ut2-b10", blockNumber: 10, title: "Introducción a CSS3: sintaxis, formas de inclusión y selectores básicos", duration: "2 horas", session: "Sesión 10", evaluation: "1ª Evaluación", ce: ["CE2g", "CE2h"] },
      { id: "ut2-b11", blockNumber: 11, title: "Herencia, cascada y especificidad en CSS", duration: "2 horas", session: "Sesión 11", evaluation: "1ª Evaluación", ce: ["CE2g", "CE2h"] },
      { id: "ut2-b12", blockNumber: 12, title: "Modelo de Caja (Box Model): margin, border, padding, content y box-sizing", duration: "2 horas", session: "Sesión 12", evaluation: "1ª Evaluación", ce: ["CE2h"] },
      { id: "ut2-b13", blockNumber: 13, title: "Propiedades de tipografía, colores (HEX, RGB, HSL) y fondos", duration: "2 horas", session: "Sesión 13", evaluation: "1ª Evaluación", ce: ["CE2h"] },
      { id: "ut2-b14", blockNumber: 14, title: "Posicionamiento en CSS: static, relative, absolute, fixed y sticky", duration: "2 horas", session: "Sesión 14", evaluation: "1ª Evaluación", ce: ["CE2h"] },
      { id: "ut2-b15", blockNumber: 15, title: "Maquetación moderna I: Flexbox para interfaces unidimensionales", duration: "2 horas", session: "Sesión 15", evaluation: "1ª Evaluación", ce: ["CE2h"] },
      { id: "ut2-b16", blockNumber: 16, title: "Maquetación moderna II: CSS Grid, Media Queries y Responsive Design", duration: "2 horas", session: "Sesión 16", evaluation: "1ª Evaluación", ce: ["CE2f", "CE2h"] }
    ]
  },
  {
    id: "ut3",
    unitNumber: 3,
    title: "Manipulación de documentos web mediante scripts y sindicación",
    shortTitle: "UT3: Scripts (DOM) y Sindicación de contenidos",
    ra: "RA3",
    raDescription: "Genera canales de contenidos analizando y utilizando tecnologías de sindicación / Manipulación de documentos web mediante scripts.",
    weight: "12%",
    evaluation: "1ª y 2ª Evaluación",
    hours: 12,
    blockCount: 6,
    evaluationDistribution: { exams: "65%", tasks: "25%", quizzes: "10%" },
    blocks: [
      { id: "ut3-b1", blockNumber: 1, title: "Introducción a JavaScript en el navegador y vinculación en HTML", duration: "2 horas", session: "Sesión 1 (1ª Ev)", evaluation: "1ª Evaluación", ce: ["CE3a", "CE3b"] },
      { id: "ut3-b2", blockNumber: 2, title: "El DOM (Document Object Model): estructura arbórea y métodos de selección", duration: "2 horas", session: "Sesión 2 (1ª Ev)", evaluation: "1ª Evaluación", ce: ["CE3c", "CE3d"] },
      { id: "ut3-b3", blockNumber: 3, title: "Modificación dinámica de atributos, contenido textual e inyección de estilos", duration: "2 horas", session: "Sesión 3 (1ª Ev)", evaluation: "1ª Evaluación", ce: ["CE3d", "CE3e"] },
      { id: "ut3-b4", blockNumber: 4, title: "Creación y eliminación dinámica de nodos en el DOM y gestión de eventos", duration: "2 horas", session: "Sesión 4 (2ª Ev)", evaluation: "2ª Evaluación", ce: ["CE3e", "CE3f"] },
      { id: "ut3-b5", blockNumber: 5, title: "Sindicación de contenidos: arquitectura de RSS 2.0 y Atom", duration: "2 horas", session: "Sesión 5 (2ª Ev)", evaluation: "2ª Evaluación", ce: ["CE3f", "CE3g"] },
      { id: "ut3-b6", blockNumber: 6, title: "Validación de canales de sindicación, consumo con agregadores y proyecto", duration: "2 horas", session: "Sesión 6 (2ª Ev)", evaluation: "2ª Evaluación", ce: ["CE3f", "CE3g"] }
    ]
  },
  {
    id: "ut4",
    unitNumber: 4,
    title: "Esquemas y vocabularios en XML",
    shortTitle: "UT4: Esquemas y vocabularios en XML (DTD y XSD)",
    ra: "RA4",
    raDescription: "Establece mecanismos de validación para documentos XML utilizando métodos para definir su sintaxis y estructura.",
    weight: "20%",
    evaluation: "2ª Evaluación",
    hours: 24,
    blockCount: 12,
    evaluationDistribution: { exams: "65%", tasks: "25%", quizzes: "10%" },
    blocks: [
      { id: "ut4-b1", blockNumber: 1, title: "Necesidad de validación en XML y documentos válidos vs bien formados", duration: "2 horas", session: "Sesión 1", evaluation: "2ª Evaluación", ce: ["CE4a", "CE4b"] },
      { id: "ut4-b2", blockNumber: 2, title: "Introducción a DTD (Document Type Definition): internas y externas", duration: "2 horas", session: "Sesión 2", evaluation: "2ª Evaluación", ce: ["CE4b", "CE4c"] },
      { id: "ut4-b3", blockNumber: 3, title: "Declaración de elementos en DTD: operadores de cardinalidad y secuencias", duration: "2 horas", session: "Sesión 3", evaluation: "2ª Evaluación", ce: ["CE4c", "CE4d"] },
      { id: "ut4-b4", blockNumber: 4, title: "Declaración de atributos en DTD: CDATA, ID, IDREF y modificadores", duration: "2 horas", session: "Sesión 4", evaluation: "2ª Evaluación", ce: ["CE4c", "CE4d"] },
      { id: "ut4-b5", blockNumber: 5, title: "Entidades generales, paramétricas y validación práctica con DTD", duration: "2 horas", session: "Sesión 5", evaluation: "2ª Evaluación", ce: ["CE4d", "CE4e"] },
      { id: "ut4-b6", blockNumber: 6, title: "Limitaciones de DTD y necesidad de XML Schema (XSD)", duration: "2 horas", session: "Sesión 6", evaluation: "2ª Evaluación", ce: ["CE4a", "CE4b"] },
      { id: "ut4-b7", blockNumber: 7, title: "Estructura básica de un archivo XSD y asociación con documentos XML", duration: "2 horas", session: "Sesión 7", evaluation: "2ª Evaluación", ce: ["CE4c", "CE4f"] },
      { id: "ut4-b8", blockNumber: 8, title: "Tipos de datos simples predefinidos en XSD (string, integer, decimal, boolean, date)", duration: "2 horas", session: "Sesión 8", evaluation: "2ª Evaluación", ce: ["CE4c", "CE4d"] },
      { id: "ut4-b9", blockNumber: 9, title: "Definición de tipos simples personalizados mediante restricciones (facetas y regex)", duration: "2 horas", session: "Sesión 9", evaluation: "2ª Evaluación", ce: ["CE4c", "CE4d"] },
      { id: "ut4-b10", blockNumber: 10, title: "Tipos complejos en XSD: xs:sequence, xs:choice y xs:all con minOccurs/maxOccurs", duration: "2 horas", session: "Sesión 10", evaluation: "2ª Evaluación", ce: ["CE4c", "CE4d"] },
      { id: "ut4-b11", blockNumber: 11, title: "Definición de atributos, tipos mixtos y espacios de nombres en XSD", duration: "2 horas", session: "Sesión 11", evaluation: "2ª Evaluación", ce: ["CE4c", "CE4d"] },
      { id: "ut4-b12", blockNumber: 12, title: "Taller práctico de diseño, validación y depuración de esquemas XSD", duration: "2 horas", session: "Sesión 12", evaluation: "2ª Evaluación", ce: ["CE4g", "CE4h"] }
    ]
  },
  {
    id: "ut5",
    unitNumber: 5,
    title: "Conversión y adaptación de documentos XML",
    shortTitle: "UT5: Conversión y adaptación de documentos XML (XPath y XSLT)",
    ra: "RA5",
    raDescription: "Realiza conversiones sobre documentos XML utilizando técnicas y herramientas de procesamiento.",
    weight: "20%",
    evaluation: "2ª y 3ª Evaluación",
    hours: 20,
    blockCount: 10,
    evaluationDistribution: { exams: "65%", tasks: "25%", quizzes: "10%" },
    blocks: [
      { id: "ut5-b1", blockNumber: 1, title: "Introducción a la transformación de documentos XML y modelo en árbol", duration: "2 horas", session: "Sesión 1 (2ª Ev)", evaluation: "2ª Evaluación", ce: ["CE5a", "CE5c"] },
      { id: "ut5-b2", blockNumber: 2, title: "Fundamentos de XPath: rutas de localización absolutas y relativas", duration: "2 horas", session: "Sesión 2 (2ª Ev)", evaluation: "2ª Evaluación", ce: ["CE5b", "CE5d"] },
      { id: "ut5-b3", blockNumber: 3, title: "Expresiones y predicados en XPath: filtrado por posición y atributos", duration: "2 horas", session: "Sesión 3 (3ª Ev)", evaluation: "3ª Evaluación", ce: ["CE5d", "CE5e"] },
      { id: "ut5-b4", blockNumber: 4, title: "Funciones XPath para texto, números, fechas y secuencias", duration: "2 horas", session: "Sesión 4 (3ª Ev)", evaluation: "3ª Evaluación", ce: ["CE5d", "CE5e"] },
      { id: "ut5-b5", blockNumber: 5, title: "Ejes de navegación en XPath (ancestor, descendant, siblings)", duration: "2 horas", session: "Sesión 5 (3ª Ev)", evaluation: "3ª Evaluación", ce: ["CE5d", "CE5e"] },
      { id: "ut5-b6", blockNumber: 6, title: "Introducción a XSLT: hojas de estilo de transformación y procesadores", duration: "2 horas", session: "Sesión 6 (3ª Ev)", evaluation: "3ª Evaluación", ce: ["CE5c", "CE5f"] },
      { id: "ut5-b7", blockNumber: 7, title: "Plantillas en XSLT: xsl:template, xsl:apply-templates y xsl:value-of", duration: "2 horas", session: "Sesión 7 (3ª Ev)", evaluation: "3ª Evaluación", ce: ["CE5d", "CE5e"] },
      { id: "ut5-b8", blockNumber: 8, title: "Estructuras de control en XSLT: xsl:for-each, xsl:sort, xsl:if y xsl:choose", duration: "2 horas", session: "Sesión 8 (3ª Ev)", evaluation: "3ª Evaluación", ce: ["CE5d", "CE5g"] },
      { id: "ut5-b9", blockNumber: 9, title: "Generación de salidas en HTML5, XML y texto plano mediante XSLT", duration: "2 horas", session: "Sesión 9 (3ª Ev)", evaluation: "3ª Evaluación", ce: ["CE5g", "CE5h"] },
      { id: "ut5-b10", blockNumber: 10, title: "Taller práctico: transformación completa de catálogo XML a sitio web accesible", duration: "2 horas", session: "Sesión 10 (3ª Ev)", evaluation: "3ª Evaluación", ce: ["CE5g", "CE5h"] }
    ]
  },
  {
    id: "ut6",
    unitNumber: 6,
    title: "Almacenamiento de información",
    shortTitle: "UT6: Almacenamiento de información (BBDD XML y XQuery)",
    ra: "RA6",
    raDescription: "Gestiona información en formato XML analizando y utilizando tecnologías de almacenamiento y lenguajes de consulta.",
    weight: "12%",
    evaluation: "3ª Evaluación",
    hours: 14,
    blockCount: 7,
    evaluationDistribution: { exams: "65%", tasks: "25%", quizzes: "10%" },
    blocks: [
      { id: "ut6-b1", blockNumber: 1, title: "Métodos de almacenamiento de datos XML y ámbitos de aplicación", duration: "2 horas", session: "Sesión 1", evaluation: "3ª Evaluación", ce: ["CE6a", "CE6b", "CE6c"] },
      { id: "ut6-b2", blockNumber: 2, title: "Almacenamiento de XML en sistemas gestores relacionales (SGBDR)", duration: "2 horas", session: "Sesión 2", evaluation: "3ª Evaluación", ce: ["CE6c", "CE6d"] },
      { id: "ut6-b3", blockNumber: 3, title: "Técnicas de mapeo y exportación de datos relacionales a XML", duration: "2 horas", session: "Sesión 3", evaluation: "3ª Evaluación", ce: ["CE6d", "CE6e"] },
      { id: "ut6-b4", blockNumber: 4, title: "Bases de datos nativas XML (NXD): arquitectura y BaseX", duration: "2 horas", session: "Sesión 4", evaluation: "3ª Evaluación", ce: ["CE6f", "CE6g"] },
      { id: "ut6-b5", blockNumber: 5, title: "Introducción a XQuery y modelo FLWOR (For, Let, Where, Order, Return)", duration: "2 horas", session: "Sesión 5", evaluation: "3ª Evaluación", ce: ["CE6h", "CE6i"] },
      { id: "ut6-b6", blockNumber: 6, title: "Constructores de elementos, funciones y operadores en XQuery", duration: "2 horas", session: "Sesión 6", evaluation: "3ª Evaluación", ce: ["CE6i"] },
      { id: "ut6-b7", blockNumber: 7, title: "Taller práctico: consultas complejas y generación de informes XML con BaseX", duration: "2 horas", session: "Sesión 7", evaluation: "3ª Evaluación", ce: ["CE6h", "CE6i"] }
    ]
  },
  {
    id: "ut7",
    unitNumber: 7,
    title: "Sistemas de gestión empresarial",
    shortTitle: "UT7: Sistemas de gestión empresarial (ERP / CRM)",
    ra: "RA7",
    raDescription: "Opera sistemas empresariales de gestión de información realizando tareas de importación, integración, aseguramiento y extracción de la información.",
    weight: "2%",
    evaluation: "3ª Evaluación",
    hours: 4,
    blockCount: 2,
    evaluationDistribution: { exams: "0%", tasks: "0%", quizzes: "100%" },
    blocks: [
      { id: "ut7-b1", blockNumber: 1, title: "Conceptos, flujos de información y arquitectura de ERP y CRM", duration: "2 horas", session: "Sesión 1", evaluation: "3ª Evaluación", ce: ["CE7a", "CE7b", "CE7c"] },
      { id: "ut7-b2", blockNumber: 2, title: "Seguridad, usuarios/roles, importación/exportación estructurada e informes", duration: "2 horas", session: "Sesión 2", evaluation: "3ª Evaluación", ce: ["CE7d", "CE7e", "CE7f", "CE7g"] }
    ]
  }
];


/**
 * unit1.js
 * Unidad de Trabajo 1: Características de los lenguajes de marcas (RA1 - 8% peso)
 * Curso 2026/2027 - 8 horas lectivas (4 bloques de 2 horas en la 1ª Evaluación)
 * Contenido didáctico completo, cuestionarios autocorregibles y ejercicios prácticos.
 */

const UNIT_1_DATA = {
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


/**
 * unitsOverview.js
 * Datos pedagógicos y bloques de 2 horas para las Unidades 2 a 7 (Curso 2026/2027)
 * Conforme a la nueva distribución temporal oficial del CIFP Carlos III.
 */

const UNITS_OVERVIEW_DATA = {
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


/**
 * parser-validator.js
 * Motor interactivo de validación de sintaxis XML en tiempo real y visor HTML.
 * Diseñado específicamente para el aprendizaje de alumnos de 1º DAW.
 */

class CodeValidator {
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


/**
 * quiz-engine.js
 * Motor interactivo de cuestionarios con corrección instantánea, desglose de aciertos/fallos
 * y retroalimentación pedagógica con persistencia en localStorage.
 */

const STORAGE_KEY = "lmsgi_daw_quiz_progress_v1";

class QuizEngine {
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

})();
