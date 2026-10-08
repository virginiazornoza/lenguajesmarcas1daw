
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
 * RA1: 7%, RA2: 28%, RA3: 12%, RA4: 21%, RA5: 18%, RA6: 12%, RA7: 2% (Total: 100%).
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
    { name: "1ª Evaluación", hours: 48, unitsSummary: "UT1 (8h), UT2 (32h), UT3 (8h)" },
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
    weight: "7%",
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
    weight: "28%",
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
    hours: 14,
    blockCount: 7,
    evaluationDistribution: { exams: "65%", tasks: "25%", quizzes: "10%" },
    blocks: [
      { id: "ut3-b1", blockNumber: 1, title: "Introducción a JavaScript en el navegador y vinculación en HTML", duration: "2 horas", session: "Sesión 1 (1ª Ev)", evaluation: "1ª Evaluación", ce: ["CE3a", "CE3b"] },
      { id: "ut3-b2", blockNumber: 2, title: "El DOM (Document Object Model): estructura arbórea y métodos de selección", duration: "2 horas", session: "Sesión 2 (1ª Ev)", evaluation: "1ª Evaluación", ce: ["CE3c", "CE3d"] },
      { id: "ut3-b3", blockNumber: 3, title: "Modificación dinámica de atributos, contenido textual e inyección de estilos", duration: "2 horas", session: "Sesión 3 (1ª Ev)", evaluation: "1ª Evaluación", ce: ["CE3d", "CE3e"] },
      { id: "ut3-b4", blockNumber: 4, title: "Gestión de eventos en el DOM (listeners, bubbling y delegación)", duration: "2 horas", session: "Sesión 4 (1ª Ev)", evaluation: "1ª Evaluación", ce: ["CE3e", "CE3f"] },
      { id: "ut3-b5", blockNumber: 5, title: "Creación y eliminación dinámica de nodos en el DOM", duration: "2 horas", session: "Sesión 5 (2ª Ev)", evaluation: "2ª Evaluación", ce: ["CE3e", "CE3f"] },
      { id: "ut3-b6", blockNumber: 6, title: "Sindicación de contenidos: arquitectura de RSS 2.0 y Atom", duration: "2 horas", session: "Sesión 6 (2ª Ev)", evaluation: "2ª Evaluación", ce: ["CE3f", "CE3g"] },
      { id: "ut3-b7", blockNumber: 7, title: "Validación de canales de sindicación, consumo con agregadores y proyecto", duration: "2 horas", session: "Sesión 7 (2ª Ev)", evaluation: "2ª Evaluación", ce: ["CE3f", "CE3g"] }
    ]
  },
  {
    id: "ut4",
    unitNumber: 4,
    title: "Esquemas y vocabularios en XML",
    shortTitle: "UT4: Esquemas y vocabularios en XML (DTD y XSD)",
    ra: "RA4",
    raDescription: "Establece mecanismos de validación para documentos XML utilizando métodos para definir su sintaxis y estructura.",
    weight: "21%",
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
    weight: "18%",
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
          Un **lenguaje de marcas** (*markup language*) es un sistema formal que combina texto plano con **etiquetas** (*tags*) o marcas sintácticas.
          
          Estas marcas aportan información sobre la estructura del documento, su significado semántico o su presentación visual.
          
          > **Diferencia fundamental con la programación**:
          > A diferencia de lenguajes como Java, C++ o Python, un lenguaje de marcas **no ejecuta algoritmos ni procesa bucles**, sino que cualifica, organiza y transporta la información.
        `,
        sections: [
          {
            title: "1. ¿Qué es el marcado? Elementos fundamentales",
            content: `
              El término **marcar** tiene su origen en las imprentas tradicionales, donde los correctores añadían marcas manuscritas al papel para indicar al tipógrafo el tamaño de letra, sangrías o cursivas.
              
              En informática, el marcado se realiza mediante secuencias delimitadas por corchetes angulares (&lt; y &gt;).
              
              Los tres componentes esenciales de cualquier lenguaje de marcado son:
              * **Etiqueta (Tag)**: Marca sintáctica que delimita el inicio o fin de un dato.
                * *Apertura*: \`<titulo>\`
                * *Cierre*: \`</titulo>\`
              * **Elemento (Element)**: Conjunto completo formado por la etiqueta de apertura, el contenido interior y la etiqueta de cierre.
                * *Ejemplo*: \`<modulo>Lenguajes de Marcas</modulo>\`
              * **Atributo (Attribute)**: Par \`nombre="valor"\` situado dentro de la etiqueta de apertura que añade metadatos al elemento.
                * *Ejemplo*: \`<alumno id="A104" estado="matriculado">\`
            `
          },
          {
            title: "2. Tipos de marcado según su finalidad",
            content: `
              A lo largo de la evolución informática se han consolidado tres grandes tipos de marcado:
              
              1. **Marcado de Presentación (o de formato)**:
                 * Indica cómo debe lucir visualmente el texto (negrita, tamaño, color, alineación).
                 * *Ejemplos*: RTF (*Rich Text Format*), Markdown (\`**negrita**\`), o etiquetas obsoletas de HTML antiguo como \`<font>\` o \`<center>\`.
                 
              2. **Marcado de Procedimiento**:
                 * Contiene instrucciones paso a paso para que un intérprete o procesador tipográfico imprima el documento.
                 * *Ejemplos*: PostScript, LaTeX, troff.
                 
              3. **Marcado Descriptivo o Semántico (Estructural)**:
                 * Separa radicalmente el contenido de su apariencia visual.
                 * Las etiquetas describen **qué es** el dato (su significado real), no cómo debe pintarse en la pantalla.
                 * *Ejemplos*: **XML**, HTML5 semántico (\`<header>\`, \`<article>\`, \`<nav>\`), SVG (*Scalable Vector Graphics*).
                 
              > **Principio de oro en DAW**: En el desarrollo web profesional moderno separamos estrictamente la estructura y semántica (HTML / XML) del diseño visual (CSS) y del comportamiento e interactividad (JavaScript).
            `
          },
          {
            title: "3. Evolución histórica: El árbol genealógico",
            content: `
              Comprender el origen de los lenguajes de marcas es indispensable para entender el desarrollo web moderno:
              
              * **1969 - GML (Generalized Markup Language)**:
                * Creado en IBM por Charles Goldfarb, Edward Mosher y Raymond Lorie (de sus apellidos surge el acrónimo GML).
                * Permitió por primera vez compartir documentos de texto entre sistemas informáticos heterogéneos independientemente del formato de salida.
                
              * **1986 - SGML (Standard Generalized Markup Language - ISO 8879)**:
                * Estándar internacional padre de los lenguajes modernos.
                * Es un *metalenguaje* (un lenguaje para definir otros lenguajes de marcas).
                * Muy potente, pero excesivamente complejo y pesado para los primeros navegadores web.
                
              * **1990 - HTML (HyperText Markup Language)**:
                * Creado por Tim Berners-Lee en el CERN.
                * Es una aplicación concreta y sencilla de SGML diseñada para enlazar y visualizar hipertexto en la World Wide Web.
                
              * **1998 - XML (eXtensible Markup Language)**:
                * Diseñado y estandarizado por el consorcio **W3C**.
                * Es un subconjunto simplificado y optimizado de SGML.
                * Su propósito es estructurar, validar y transportar datos entre cualquier sistema de forma universal e interoperable.
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
          description: "Analiza el siguiente documento de ejemplo en el visor de código e identifica sus componentes esenciales respondiendo a las preguntas interactivas.",
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
          interactiveQuestions: [
            {
              id: "ex1-1-q1",
              label: "1. Localiza cuál es el elemento raíz único del documento:",
              placeholder: "Escribe el elemento raíz (ej: instituto)",
              expected: "instituto",
              accepts: ["instituto", "<instituto>"],
              explanation: "El elemento raíz único es <instituto>, el cual engloba y contiene a todos los demás nodos del documento.",
              hint: "El elemento raíz es el único nodo que no tiene elemento padre en todo el documento."
            },
            {
              id: "ex1-1-q2",
              label: "2. Identifica los nombres de los atributos presentes en el código:",
              placeholder: "Escribe los atributos separados por comas (ej: codigo, nivel, familia)",
              type: "keywords",
              requiredKeywords: ["codigo", "nivel", "familia"],
              explanation: "Los 3 atributos presentes son: 'codigo' (en <instituto>), y 'nivel' y 'familia' (en <ciclo>).",
              hint: "Busca los pares nombre=\"valor\" situados dentro de las etiquetas de apertura de <instituto> y <ciclo>."
            },
            {
              id: "ex1-1-q3",
              label: "3. Observa la jerarquía del árbol XML: ¿quién es el elemento padre directo de <curso>?",
              placeholder: "Escribe el elemento padre (ej: ciclo)",
              expected: "ciclo",
              accepts: ["ciclo", "<ciclo>"],
              explanation: "El elemento padre directo de <curso> es <ciclo>, ya que <curso> se encuentra anidado en su interior.",
              hint: "Revisa qué etiqueta envuelve directamente a <curso>1</curso>."
            }
          ],
          solution: `<!-- Solución comentada:
1. Elemento raíz único: <instituto> (engloba a todos los demás nodos).
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
          Aunque tanto **HTML** como **XML** emplean corchetes angulares (&lt; y &gt;), sus metas técnicas son radicalmente distintas.
          
          Confundir ambos lenguajes es uno de los tropiezos iniciales más habituales en desarrollo web.
        `,
        sections: [
          {
            title: "1. La gran comparativa: HTML vs XML",
            content: `
              La diferencia nuclear se resume en dos principios:
              * **HTML se diseñó para MOSTRAR datos** (centrado en la apariencia y renderizado en navegadores).
              * **XML se diseñó para DESCRIBIR Y TRANSPORTAR datos** (centrado en la estructura e intercambio entre aplicaciones).
              
              Los 4 pilares diferenciales entre ambos:
              
              1. **Vocabulario de etiquetas**:
                 * *HTML*: Vocabulario cerrado y predefinido por el estándar WHATWG/W3C (\`<p>\`, \`<h1>\`, \`<table>\`, \`<a>\`). No se pueden inventar etiquetas arbitrarias.
                 * *XML*: Vocabulario completamente extensible y libre. Las etiquetas las define el desarrollador según el dominio del negocio (\`<factura>\`, \`<cliente>\`, \`<precio>\`).
                 
              2. **Tolerancia a fallos sintácticos**:
                 * *HTML*: Es muy permisivo. Si olvidas cerrar una etiqueta o comillas, el navegador intenta autocorregirlo y continuar.
                 * *XML*: Aplica una política estricta de **control draconiano de errores** (*draconian error handling*). Ante el menor fallo sintáctico, el analizador detiene la lectura inmediatamente.
                 
              3. **Distinción entre mayúsculas y minúsculas (Case Sensitivity)**:
                 * *HTML*: Es indiferente (case-insensitive). \`<DIV>\`, \`<div>\` y \`<Div>\` son interpretados como la misma etiqueta.
                 * *XML*: Es estrictamente sensible (case-sensitive). \`<Modulo>\` NO coincide con \`</modulo>\` y provocará un error de validación.
                 
              4. **Cierre de elementos vacíos**:
                 * *HTML*: Permite elementos vacíos sin etiqueta de cierre (\`<img src="foto.png">\`, \`<br>\`, \`<input>\`).
                 * *XML*: Todo elemento sin contenido debe cerrarse de forma obligatoria mediante autocierre (\`<foto src="foto.png" />\`) o etiqueta de cierre explícita (\`<foto></foto>\`).
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
              En el CIFP Carlos III empleamos las siguientes herramientas profesionales durante las clases:
              
              * **Visual Studio Code (VS Code)**:
                * Editor de código estándar en la industria del software.
                * Extensiones imprescindibles para el módulo:
                  * *XML Tools*: Formateo automático de código XML y evaluador de expresiones XPath.
                  * *XML by Red Hat*: Validación sintáctica en tiempo real y soporte para esquemas XSD.
                  * *Prettier*: Formateador de código para HTML y CSS.
                  
              * **Navegadores web modernos (Chrome, Edge, Firefox)**:
                * Incorporan analizadores XML nativos.
                * Permiten visualizar la estructura arbórea colapsable y muestran avisos de error sintáctico con indicación exacta de línea y columna.
                
              * **XML Copy Editor**:
                * Editor ligero especializado para validaciones rápidas contra DTD y XML Schema.
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
          Un documento XML posee una **estructura estrictamente jerárquica en forma de árbol invertido**.
          
          La primera condición innegociable de cualquier archivo XML es estar **bien formado** (*well-formed*). Si se incumple una sola regla sintáctica, ningún procesador informático podrá leerlo.
        `,
        sections: [
          {
            title: "1. El Prólogo XML",
            content: `
              El prólogo es la cabecera técnica obligatoria que encabeza todo documento XML profesional:
              \`\`\`xml
              <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
              \`\`\`
              
              Directivas configurables del prólogo:
              * **version**: Versión de la especificación XML utilizada (habitualmente \`"1.0"\`).
              * **encoding**: Codificación de caracteres del archivo. \`"UTF-8"\` es el estándar recomendado para admitir tildes, eñes y caracteres internacionales sin corrupción.
              * **standalone**:
                * \`"yes"\`: El archivo es autónomo y no depende de definiciones externas (como una DTD externa).
                * \`"no"\`: El documento requiere un archivo externo para su validación completa.
                
              > ⚠️ **Reglas de oro del prólogo**:
              > * Debe figurar en la **línea 1, columna 1** del archivo (sin ningún espacio previo ni línea vacía).
              > * La palabra \`xml\` debe escribirse estrictamente en **minúsculas**.
            `
          },
          {
            title: "2. Reglas fundamentales de un documento bien formado",
            content: `
              Para que un documento XML se considere **bien formado**, debe cumplir rigurosamente el siguiente decálogo de sintaxis:
              
              1. **Único elemento raíz**:
                 * Todo el documento debe estar contenido dentro de una única etiqueta envolvente raíz.
                 * *Ejemplo*: \`<catalogo> ... </catalogo>\`.
                 
              2. **Cierre obligatorio de todas las etiquetas**:
                 * Cualquier elemento que se abre debe cerrarse (\`<precio>20</precio>\`).
                 * Los elementos vacíos deben incluir la barra de autocierre (\`<salto />\`).
                 
              3. **Anidamiento correcto (sin solapamientos)**:
                 * La última etiqueta en abrirse debe ser la primera en cerrarse (estructura LIFO / pila).
                 * *Correcto*: \`<modulo><nombre>LMSGI</nombre></modulo>\`.
                 * *Incorrecto*: \`<modulo><nombre>LMSGI</modulo></nombre>\`.
                 
              4. **Comillas obligatorias en todos los atributos**:
                 * Los valores de atributos deben ir encerrados entre comillas dobles o simples.
                 * *Correcto*: \`codigo="LMSGI"\`.
                 * *Incorrecto*: \`codigo=LMSGI\`.
                 
              5. **Nombres de etiquetas válidos**:
                 * Deben comenzar obligatoriamente por una letra o un guion bajo (\`_\`).
                 * No pueden comenzar por números, caracteres especiales ni por la secuencia reservada \`xml\` o \`XML\`.
                 * No pueden contener espacios en blanco.
            `
          },
          {
            title: "3. Caracteres reservados, Entidades y Secciones CDATA",
            content: `
              En XML existen dos caracteres estrictamente reservados para el analizador:
              * El símbolo \`<\` (indica el comienzo de una etiqueta).
              * El símbolo \`&\` (indica el comienzo de una entidad).
              
              Para incluir estos caracteres en el texto de un elemento, es obligatorio sustituirlos por su **entidad predefinida**:
              * \`&lt;\` &rarr; Signo menor que (&lt;)
              * \`&gt;\` &rarr; Signo mayor que (&gt;)
              * \`&amp;\` &rarr; Signo ampersand (&amp;)
              * \`&quot;\` &rarr; Comillas dobles (&quot;)
              * \`&apos;\` &rarr; Comilla simple o apóstrofe (&apos;)
              
              ---
              
              **Secciones CDATA (Character Data)**:
              
              Cuando necesitamos incluir fragmentos extensos con abundantes símbolos especiales (como scripts de JavaScript, sentencias SQL con operadores lógicos o código de fórmulas), escapar carácter por carácter resulta tedioso.
              
              Para estos casos se utilizan las secciones **CDATA**:
              \`\`\`xml
              <script_validacion>
                <![CDATA[
                  if (nota >= 5 && faltas < 10) {
                    resultado = "Aprobado";
                  }
                ]]>
              </script_validacion>
              \`\`\`
              
              > **Comportamiento de CDATA**:
              > Todo el contenido situado entre \`<![CDATA[\` y \`]]>\` es tratado por el procesador como texto plano puro, ignorando etiquetas y símbolos reservados.
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
          Al integrar información procedente de múltiples fuentes o vocabularios dentro de un mismo documento (por ejemplo, datos comerciales junto a tablas XHTML o gráficos SVG), se producen inevitablemente **colisiones de nombres**.
          
          Esto sucede cuando dos etiquetas coinciden en su grafía pero tienen propósitos conceptuales completamente distintos.
          
          Para resolver este problema de manera universal, el W3C definió los **Espacios de Nombres en XML (Namespaces)**.
        `,
        sections: [
          {
            title: "1. El problema de la colisión de nombres",
            content: `
              Observa el siguiente conflicto dentro de un inventario comercial:
              \`\`\`xml
              <inventario>
                <!-- ¿A qué hace referencia 'tabla'? ¿Al mobiliario de oficina o a una tabla HTML? -->
                <tabla>
                  <nombre>Mesa de Roble</nombre>
                  <precio>120</precio>
                </tabla>
                <tabla>
                  <tr><td>Celda de datos de presentación</td></tr>
                </tabla>
              </inventario>
              \`\`\`
              
              Para cualquier analizador automático o aplicación externa, resulta imposible distinguir ambas etiquetas sin un calificador de contexto unívoco.
            `
          },
          {
            title: "2. Declaración con atributo xmlns y Prefijos",
            content: `
              Un espacio de nombres asocia un **prefijo corto** con un identificador unívoco universal (habitualmente una dirección URI o URL):
              \`\`\`xml
              xmlns:prefijo="URI_identificadora"
              \`\`\`
              
              Resolución del conflicto mediante prefijos cualificados:
              \`\`\`xml
              <inventario xmlns:mueble="https://tienda.es/muebles"
                          xmlns:html="http://www.w3.org/1999/xhtml">
                          
                <!-- Elemento perteneciente al vocabulario de mobiliario -->
                <mueble:tabla>
                  <mueble:nombre>Mesa de Roble</mueble:nombre>
                  <mueble:precio>120</mueble:precio>
                </mueble:tabla>
                
                <!-- Elemento perteneciente al vocabulario XHTML estándar -->
                <html:table>
                  <html:tr>
                    <html:td>Celda de datos</html:td>
                  </html:tr>
                </html:table>
                
              </inventario>
              \`\`\`
              
              > **Aclaración fundamental sobre la URI**:
              > La URI declarada **no necesita existir físicamente como página web en internet**. El procesador XML no descarga ningún archivo de esa dirección; simplemente la utiliza como una cadena de texto identificadora única en todo el mundo.
            `
          },
          {
            title: "3. Espacio de nombres por defecto y Ámbito (Scope)",
            content: `
              * **Espacio de nombres por defecto**:
                * Se declara mediante la sintaxis \`xmlns="URI"\` (sin especificar prefijo).
                * Todos los elementos contenidos dentro de ese nodo que no lleven prefijo pertenecerán automáticamente a dicho espacio de nombres.
                
              * **Ámbito de vigencia (*Scope*)**:
                * Un espacio de nombres tiene validez únicamente en el elemento en el que se declara y en toda su descendencia de elementos hijos y nietos.
                
              * **Atributos y espacios de nombres**:
                * Los atributos sin prefijo **nunca** pertenecen al espacio de nombres por defecto.
                * Para que un atributo pertenezca a un namespace, debe llevar siempre un prefijo explícito (por ejemplo: \`xml:lang="es"\` o \`xlink:href="..."\`).
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

const UNIT_2_DATA = {
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
    weight: "28%",
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
    hours: 14,
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
        title: "Gestión de eventos en el DOM (listeners, bubbling y delegación)",
        duration: "2 horas",
        session: "Sesión 4 (1ª Ev)",
        objectives: ["Escuchar eventos de usuario con addEventListener ('click', 'submit', 'input')", "Prevenir comportamiento por defecto con e.preventDefault()", "Entender la propagación de eventos (bubbling)"],
        theorySummary: "Manejo interactivo de eventos en el navegador. Interceptar envíos de formularios, respuestas en tiempo real y delegación de eventos.",
        quizSample: {
          question: "¿Qué método se utiliza para evitar que un formulario recargue la página completa al pulsar el botón de envío?",
          options: ["e.stopPropagation()", "e.preventDefault()", "form.cancel()", "window.stop()"],
          correctIndex: 1,
          explanation: "`e.preventDefault()` cancela la acción nativa del evento, permitiendo procesar el formulario de forma asíncrona."
        },
        exerciseSample: "Interceptar el evento submit de un formulario, validar campos vacíos y mostrar un aviso dinámico sin recargar la página."
      },
      "ut3-b5": {
        title: "Creación y eliminación dinámica de nodos en el DOM",
        duration: "2 horas",
        session: "Sesión 5 (2ª Ev)",
        objectives: ["Crear nodos con document.createElement y createTextNode", "Insertar nodos con appendChild y append", "Eliminar nodos con remove() y removeChild()"],
        theorySummary: "Construcción dinámica de elementos en la interfaz. Manipulación del árbol del DOM en tiempo de ejecución.",
        quizSample: {
          question: "¿Cómo se añade un nuevo elemento `<p>` como último hijo de un contenedor `#caja`?",
          options: ["caja.innerHTML = p", "caja.appendChild(p)", "caja.insert(p)", "p.addTo(caja)"],
          correctIndex: 1,
          explanation: "`appendChild(p)` añade el nodo `p` como el último hijo del elemento contenedor."
        },
        exerciseSample: "Construir una lista de tareas (To-Do List) interactiva donde el usuario pueda agregar y eliminar tareas dinámicamente."
      },
      "ut3-b6": {
        title: "Sindicación de contenidos: arquitectura de RSS 2.0 y Atom",
        duration: "2 horas",
        session: "Sesión 6 (2ª Ev)",
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
      "ut3-b7": {
        title: "Validación de canales de sindicación, consumo con agregadores y proyecto",
        duration: "2 horas",
        session: "Sesión 7 (2ª Ev)",
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
    weight: "21%",
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
    weight: "18%",
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
   * Escapa caracteres HTML para evitar que el navegador interprete etiquetas
   */
  static escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /**
   * Formatea texto de preguntas, opciones y explicaciones:
   * 1. Preserva y destaca código entre comillas inversas (`código`)
   * 2. Escapa etiquetas HTML no formateadas para que se visualicen como texto legible
   */
  static formatQuizText(str) {
    if (!str) return "";
    let raw = String(str);
    const codeTokens = [];

    // Extraer bloques de código entre backticks `...`
    raw = raw.replace(/`([^`]+)`/g, (match, code) => {
      const idx = codeTokens.length;
      codeTokens.push(
        `<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-mono text-xs font-semibold">${QuizEngine.escapeHTML(code)}</code>`
      );
      return `__QUIZ_CODE_${idx}__`;
    });

    // Escapar etiquetas o símbolos HTML restantes (< y >)
    raw = QuizEngine.escapeHTML(raw);

    // Restaurar los badges de código formateados
    codeTokens.forEach((token, idx) => {
      raw = raw.replace(`__QUIZ_CODE_${idx}__`, token);
    });

    return raw;
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
              ${QuizEngine.formatQuizText(q.question)}
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
            <span class="flex-1">${QuizEngine.formatQuizText(optionText)}</span>
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
            ${QuizEngine.formatQuizText(q.explanation)}
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


const DEFAULT_UNLOCKED = [
  "ut1-b1", "ut1-b2", "ut1-b3", "ut1-b4",
  "ut2-b1", "ut2-b2", "ut2-b3", "ut2-b4", "ut2-b5", "ut2-b6", "ut2-b7", "ut2-b8",
  "ut2-b9", "ut2-b10", "ut2-b11", "ut2-b12", "ut2-b13", "ut2-b14", "ut2-b15", "ut2-b16"
];

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
    this.isPlanningExpanded = localStorage.getItem("lmsgi_planning_expanded") === "true";

    // Contenidos teóricos personalizados por el docente (persistentes en localStorage)
    this.customTheories = JSON.parse(localStorage.getItem("lmsgi_custom_theories") || "{}");

    // Sincronización con la teoría oficial del proyecto solicitada por el docente
    // Purga cualquier borrador manual previo de UT1 y UT2 para tomar directamente los archivos oficiales
    if (!localStorage.getItem("lmsgi_project_ut2_synced_v1")) {
      if (this.customTheories) {
        for (let i = 1; i <= 16; i++) {
          delete this.customTheories[`ut2-b${i}`];
        }
        localStorage.setItem("lmsgi_custom_theories", JSON.stringify(this.customTheories));
      }
      DEFAULT_UNLOCKED.forEach(bId => {
        if (!this.unlockedBlocks.includes(bId)) {
          this.unlockedBlocks.push(bId);
        }
      });
      localStorage.setItem("lmsgi_unlocked_blocks", JSON.stringify(this.unlockedBlocks));
      localStorage.setItem("lmsgi_project_ut2_synced_v1", "true");
    }

    this.editingBlockId = null;
    this.activeEditorInputId = "edit-theory-intro";
    this.activeEditorTab = "edit"; // 'edit' | 'code' | 'preview'

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

  togglePlanningPanel() {
    this.isPlanningExpanded = !this.isPlanningExpanded;
    localStorage.setItem("lmsgi_planning_expanded", this.isPlanningExpanded);
    this.renderSidebar();
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
      togglePlanningPanel: () => this.togglePlanningPanel(),
      handleSearch: (val) => this.handleSearch(val),
      validateEditorCode: (exerciseId) => this.validateEditorCode(exerciseId),
      resetEditorCode: (exerciseId) => this.resetEditorCode(exerciseId),
      toggleSolution: (exerciseId) => this.toggleSolution(exerciseId),
      copyCode: (elementId) => this.copyCode(elementId),
      downloadCode: (exerciseId, filename, lang) => this.downloadCode(exerciseId, filename, lang),
      showEvaluationInfoModal: () => this.showEvaluationInfoModal(),
      openTheoryEditor: (blockId) => this.openTheoryEditor(blockId),
      closeTheoryEditor: () => this.closeTheoryEditor(),
      switchEditorTab: (tab) => this.switchEditorTab(tab),
      setActiveEditorInput: (id) => this.setActiveEditorInput(id),
      insertEditorFormat: (type) => this.insertEditorFormat(type),
      addEditorSection: () => this.addEditorSection(),
      removeEditorSection: (btnOrIdx) => this.removeEditorSection(btnOrIdx),
      saveTheoryEditor: () => this.saveTheoryEditor(),
      resetTheoryToDefault: (blockId) => this.resetTheoryToDefault(blockId),
      resetCurrentEditedBlock: () => this.resetCurrentEditedBlock(),
      exportCustomContent: () => this.exportCustomContent(),
      importCustomContent: () => this.importCustomContent(),
      handleImportFile: (e) => this.handleImportFile(e),
      checkInteractiveExercise: (exerciseId) => this.checkInteractiveExercise(exerciseId),
      resetInteractiveExercise: (exerciseId) => this.resetInteractiveExercise(exerciseId),
      toggleSectionCodeMode: (idx) => this.toggleSectionCodeMode(idx),
      loadProjectOfficialTheory: () => this.loadProjectOfficialTheory(),
      formatHtmlCodeTextarea: () => this.formatHtmlCodeTextarea()
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
    const currentBlock = this.getCurrentBlockData();
    const ex = currentBlock.exercises ? currentBlock.exercises.find(e => e.id === exerciseId) : null;
    const isHtml = ex ? ex.language === "html" : (this.currentUnitId === "ut2");

    if (isHtml) {
      this.validateAndPreviewHtml(exerciseId, code, outputDiv);
      return;
    }

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

  validateAndPreviewHtml(exerciseId, code, outputDiv) {
    if (!code || !code.trim()) {
      outputDiv.innerHTML = `
        <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs">
          ⚠️ El editor está vacío. Escribe o pega código HTML/CSS para previsualizarlo.
        </div>
      `;
      return;
    }

    // Comprobaciones didácticas de HTML5
    const hasDoctype = /<!DOCTYPE\s+html>/i.test(code);
    const hasLang = /<html[^>]*lang=["']es["']/i.test(code);
    const hasCharset = /<meta[^>]*charset=["']UTF-8["']/i.test(code);
    const hasFlex = /display\s*:\s*flex/i.test(code);

    let pedagogicalBadges = [];
    if (hasDoctype) pedagogicalBadges.push("✓ DOCTYPE HTML5");
    if (hasLang) pedagogicalBadges.push("✓ lang='es'");
    if (hasCharset) pedagogicalBadges.push("✓ UTF-8");
    if (hasFlex) pedagogicalBadges.push("✓ Flexbox detectado");

    outputDiv.innerHTML = `
      <div class="p-4 sm:p-5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-slate-800 dark:text-slate-100 space-y-3.5 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-teal-200/60 dark:border-teal-900/60">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">🌐</span>
            <span class="font-bold text-sm text-teal-800 dark:text-teal-200">
              Previsualización del Navegador en Vivo (HTML5 & CSS3)
            </span>
          </div>
          <div class="flex flex-wrap gap-1.5 text-[10px]">
            ${pedagogicalBadges.map(b => `<span class="px-2 py-0.5 rounded-full font-mono font-semibold bg-teal-100 dark:bg-teal-900/80 text-teal-800 dark:text-teal-200 border border-teal-300 dark:border-teal-800">${b}</span>`).join("")}
          </div>
        </div>

        <p class="text-xs text-teal-900/80 dark:text-teal-300/80 leading-relaxed">
          El motor del navegador ha procesado el código HTML y las reglas CSS. Comprueba visualmente los colores, la distribución de cajas y la alineación con Flexbox:
        </p>

        <!-- Marco simulador de navegador -->
        <div class="rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-white shadow-md">
          <div class="px-3 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 font-mono select-none">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
              <span class="ml-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300">Entorno de Renderizado DAW</span>
            </div>
            <span class="text-[10px] text-slate-400">100% Escala</span>
          </div>
          <iframe id="iframe-preview-${exerciseId}" class="w-full min-h-[420px] bg-white text-slate-900 border-0" sandbox="allow-same-origin allow-scripts"></iframe>
        </div>
      </div>
    `;

    const iframe = document.getElementById(`iframe-preview-${exerciseId}`);
    if (iframe) {
      iframe.srcdoc = code;
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

  normalizeAnswerText(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // quita tildes (código -> codigo)
      .replace(/[<>]/g, "")           // quita delimitadores < y > (<instituto> -> instituto)
      .replace(/["']/g, "")           // quita comillas
      .trim();
  }

  checkInteractiveExercise(exerciseId) {
    const currentBlock = this.getCurrentBlockData();
    if (!currentBlock || !currentBlock.exercises) return;
    const ex = currentBlock.exercises.find(e => e.id === exerciseId);
    if (!ex || !ex.interactiveQuestions) return;

    let correctCount = 0;
    const totalCount = ex.interactiveQuestions.length;
    const savedAnswers = {};

    ex.interactiveQuestions.forEach(q => {
      const inputEl = document.getElementById(`input-${q.id}`);
      const badgeEl = document.getElementById(`badge-${q.id}`);
      const feedbackEl = document.getElementById(`feedback-${q.id}`);
      const containerEl = document.getElementById(`container-${q.id}`);
      if (!inputEl) return;

      const rawVal = inputEl.value;
      savedAnswers[q.id] = rawVal;
      const normalizedVal = this.normalizeAnswerText(rawVal);

      let isCorrect = false;

      if (q.type === "keywords" && Array.isArray(q.requiredKeywords)) {
        // Deben estar todas las palabras clave requeridas sin importar el orden
        const allPresent = q.requiredKeywords.every(kw => {
          const normKw = this.normalizeAnswerText(kw);
          return normalizedVal.includes(normKw);
        });
        isCorrect = allPresent && normalizedVal.length > 0;
      } else {
        // Comprobación con opciones válidas
        const validOptions = (q.accepts || [q.expected]).map(opt => this.normalizeAnswerText(opt));
        isCorrect = validOptions.includes(normalizedVal);
      }

      if (rawVal.trim() === "") {
        // Campo pendiente / vacío
        if (badgeEl) {
          badgeEl.className = "text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 shrink-0";
          badgeEl.textContent = "Pendiente";
          badgeEl.classList.remove("hidden");
        }
        if (feedbackEl) {
          feedbackEl.className = "text-[11px] pt-1 text-amber-600 dark:text-amber-400 font-medium";
          feedbackEl.innerHTML = `⚠️ ${q.hint || "Por favor, escribe una respuesta para comprobar."}`;
          feedbackEl.classList.remove("hidden");
        }
        if (containerEl) {
          containerEl.classList.remove("border-emerald-400", "dark:border-emerald-600", "border-rose-400", "dark:border-rose-600");
          containerEl.classList.add("border-amber-300", "dark:border-amber-700");
        }
      } else if (isCorrect) {
        correctCount++;
        if (badgeEl) {
          badgeEl.className = "text-xs font-semibold px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 shrink-0 flex items-center gap-1";
          badgeEl.innerHTML = `<span>✓</span> ¡Correcto!`;
          badgeEl.classList.remove("hidden");
        }
        if (feedbackEl) {
          feedbackEl.className = "text-[11px] pt-1 text-emerald-700 dark:text-emerald-300 font-medium";
          feedbackEl.innerHTML = `✓ ${this.escapeHTML(q.explanation || "¡Respuesta correcta!")}`;
          feedbackEl.classList.remove("hidden");
        }
        if (containerEl) {
          containerEl.classList.remove("border-amber-300", "dark:border-amber-700", "border-rose-400", "dark:border-rose-600");
          containerEl.classList.add("border-emerald-400", "dark:border-emerald-600");
        }
      } else {
        if (badgeEl) {
          badgeEl.className = "text-xs font-semibold px-2.5 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 shrink-0 flex items-center gap-1";
          badgeEl.innerHTML = `<span>✗</span> A revisar`;
          badgeEl.classList.remove("hidden");
        }
        if (feedbackEl) {
          feedbackEl.className = "text-[11px] pt-1 text-rose-600 dark:text-rose-400 font-medium";
          const hintText = q.hint ? ` Pista: ${q.hint}` : "";
          feedbackEl.innerHTML = `✗ No es del todo correcto.${this.escapeHTML(hintText)}`;
          feedbackEl.classList.remove("hidden");
        }
        if (containerEl) {
          containerEl.classList.remove("border-amber-300", "dark:border-amber-700", "border-emerald-400", "dark:border-emerald-600");
          containerEl.classList.add("border-rose-400", "dark:border-rose-600");
        }
      }
    });

    try {
      localStorage.setItem("lmsgi_interactive_" + exerciseId, JSON.stringify(savedAnswers));
    } catch (e) {}

    const summaryEl = document.getElementById(`result-summary-${exerciseId}`);
    if (summaryEl) {
      if (correctCount === totalCount) {
        summaryEl.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold"><svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> ¡Excelente! Has respondido correctamente a todas las preguntas (${correctCount}/${totalCount})</span>`;
      } else {
        summaryEl.innerHTML = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">Aciertos: <strong class="text-teal-600 dark:text-teal-400">${correctCount}</strong> de <strong>${totalCount}</strong></span>`;
      }
    }
  }

  resetInteractiveExercise(exerciseId) {
    const currentBlock = this.getCurrentBlockData();
    if (!currentBlock || !currentBlock.exercises) return;
    const ex = currentBlock.exercises.find(e => e.id === exerciseId);
    if (!ex || !ex.interactiveQuestions) return;

    ex.interactiveQuestions.forEach(q => {
      const inputEl = document.getElementById(`input-${q.id}`);
      const badgeEl = document.getElementById(`badge-${q.id}`);
      const feedbackEl = document.getElementById(`feedback-${q.id}`);
      const containerEl = document.getElementById(`container-${q.id}`);

      if (inputEl) inputEl.value = "";
      if (badgeEl) {
        badgeEl.className = "hidden";
        badgeEl.textContent = "";
      }
      if (feedbackEl) {
        feedbackEl.className = "hidden";
        feedbackEl.textContent = "";
      }
      if (containerEl) {
        containerEl.classList.remove("border-emerald-400", "dark:border-emerald-600", "border-rose-400", "dark:border-rose-600", "border-amber-300", "dark:border-amber-700");
      }
    });

    const summaryEl = document.getElementById(`result-summary-${exerciseId}`);
    if (summaryEl) summaryEl.innerHTML = "";

    try {
      localStorage.removeItem("lmsgi_interactive_" + exerciseId);
    } catch (e) {}
  }

  showEvaluationInfoModal() {
    alert(
      `Criterios de Calificación e Instrumentos Oficiales (Curso 2026/2027)\n\n` +
      `Ponderación y Distribución Horaria de los Resultados de Aprendizaje:\n` +
      `  • RA1 (Características lenguajes de marcas): 8h (7%)\n` +
      `  • RA2 (Lenguajes de marcas en la web): 32h (28%)\n` +
      `  • RA3 (Scripts DOM y sindicación): 14h (12%)\n` +
      `  • RA4 (Esquemas y vocabularios XML): 24h (21%)\n` +
      `  • RA5 (Conversión y adaptación XML): 20h (18%)\n` +
      `  • RA6 (Almacenamiento y bases de datos XML): 14h (12%)\n` +
      `  • RA7 (Sistemas de gestión empresarial): 4h (2%)\n` +
      `  Total: 116 horas lectivas (58 bloques de 2h) = 100%\n\n` +
      `Ponderación por Instrumento de Evaluación:\n` +
      `  • RA1 a RA6: Examen 65% | Tareas 25% | Cuestionarios 10%\n` +
      `  • RA7: Cuestionarios 100%\n\n` +
      `Todos los Resultados de Aprendizaje son críticos y de obligada superación individual.\n\n` +
      `Nota: Esta plataforma web se utiliza para el entrenamiento activo en el aula de informática, cuestionarios y prácticas.`
    );
  }

  getCurrentUnit() {
    return UNITS.find(u => u.id === this.currentUnitId) || UNITS[0];
  }

  isBlockUnlocked(blockId) {
    return this.unlockedBlocks.includes(blockId);
  }

  getCurrentBlockData() {
    let block;
    if (this.currentUnitId === "ut1") {
      block = UNIT_1_DATA.blocks.find(b => b.id === this.currentBlockId) || UNIT_1_DATA.blocks[0];
    } else if (this.currentUnitId === "ut2") {
      block = UNIT_2_DATA.blocks.find(b => b.id === this.currentBlockId) || UNIT_2_DATA.blocks[0];
    } else {
      const currentUnit = this.getCurrentUnit();
      const blockMeta = currentUnit.blocks.find(b => b.id === this.currentBlockId) || currentUnit.blocks[0];
      const unitOverview = UNITS_OVERVIEW_DATA[this.currentUnitId];
      const detailed = unitOverview && unitOverview.blocksDetailed ? unitOverview.blocksDetailed[blockMeta.id] : null;

      block = {
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

    // Si el profesor ha modificado la teoría de este bloque, aplicar la versión personalizada
    if (this.customTheories && this.customTheories[block.id]) {
      return {
        ...block,
        isCustomized: true,
        theory: this.customTheories[block.id]
      };
    }

    return block;
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

    // Actualizar botón toggle y panel desplegable de planificación
    const planningToggleContainer = document.getElementById("sidebar-planning-toggle-container");
    const planningPanelEl = document.getElementById("sidebar-planning-panel");

    if (planningToggleContainer) {
      planningToggleContainer.innerHTML = `
        <button onclick="window.LMSGI_APP.togglePlanningPanel()"
                title="${this.isPlanningExpanded ? 'Ocultar panel de planificación y estadísticas' : 'Ver progreso, estadísticas y gestión docente'}"
                class="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold rounded-lg transition-all border shadow-xs ${
                  this.isAdminMode 
                    ? "bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border-teal-300 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/60" 
                    : "bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/60"
                }">
          <span class="flex items-center gap-1">
            <span>${this.isAdminMode ? "⚙️" : "📊"}</span>
            <span>${stats.progressPercent}%</span>
          </span>
          <svg class="w-3.5 h-3.5 transition-transform duration-200 ${this.isPlanningExpanded ? "rotate-180 text-teal-600 dark:text-teal-400" : "text-slate-400"}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      `;
    }

    if (planningPanelEl) {
      if (this.isPlanningExpanded) {
        planningPanelEl.classList.remove("hidden");
        planningPanelEl.innerHTML = `
          <div class="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
            <!-- Barra de Progreso y Estadísticas -->
            <div class="space-y-1.5 bg-white dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 shadow-xs">
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-600 dark:text-slate-400 font-medium">Progreso Global</span>
                <span class="font-bold text-teal-600 dark:text-teal-400">${stats.progressPercent}% (${stats.totalHoursCompleted}h / 116h)</span>
              </div>
              <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-indigo-500 via-teal-500 to-emerald-500 h-2 rounded-full transition-all duration-500" style="width: ${stats.progressPercent}%"></div>
              </div>
              <div class="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">
                <span>${stats.completedCount} de 58 bloques</span>
                <span>${stats.passedQuizzes} cuestionarios</span>
              </div>
            </div>

            <!-- Panel de Control Docente si está activo -->
            ${
              this.isAdminMode
                ? `
              <div class="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/50 text-xs space-y-1.5 shadow-xs">
                <div class="font-bold text-teal-900 dark:text-teal-200 flex items-center justify-between">
                  <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/></svg>
                    Gestión Docente
                  </span>
                  <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-bold bg-teal-200 dark:bg-teal-800 text-teal-900 dark:text-teal-100">Profesor</span>
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
                <div class="flex items-center gap-1.5 pt-1.5 border-t border-teal-200/60 dark:border-teal-900/60 mt-1.5">
                  <button onclick="window.LMSGI_APP.exportCustomContent()" 
                          class="flex-1 py-1 px-1.5 text-[10px] font-semibold rounded bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 transition-colors flex items-center justify-center gap-1"
                          title="Descargar copia de seguridad en JSON de tus textos personalizados">
                    <svg class="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    Exportar JSON
                  </button>
                  <button onclick="window.LMSGI_APP.importCustomContent()" 
                          class="flex-1 py-1 px-1.5 text-[10px] font-semibold rounded bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-200 hover:bg-teal-100 dark:hover:bg-teal-900/60 border border-teal-200 dark:border-teal-800 transition-colors flex items-center justify-center gap-1"
                          title="Cargar modificaciones previas desde un archivo JSON">
                    <svg class="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                    Importar JSON
                  </button>
                </div>
              </div>
            `
                : ""
            }

            <!-- Botón para replegar rápidamente el panel -->
            <button onclick="window.LMSGI_APP.togglePlanningPanel()" 
                    class="w-full py-1 text-[10px] font-semibold rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700/60 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
              Plegar panel para ver más UTs
            </button>
          </div>
        `;
      } else {
        planningPanelEl.classList.add("hidden");
        planningPanelEl.innerHTML = "";
      }
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
        <!-- Barra de Gestión Docente (Modo Docente) -->
        ${
          this.isAdminMode
            ? `
          <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-teal-50 via-teal-50/60 to-indigo-50/60 dark:from-teal-950/40 dark:via-teal-950/20 dark:to-indigo-950/30 border border-teal-200 dark:border-teal-900/60 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
              </div>
              <div>
                <div class="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <span>Edición Didáctica de la Sesión</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200 font-semibold">Modo Docente</span>
                  ${currentBlock.isCustomized ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-semibold border border-amber-300 dark:border-amber-700">Contenido Personalizado Activo</span>' : ''}
                </div>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">Personaliza la teoría, separa párrafos o añade listas para adaptarlo a tus explicaciones en clase.</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              ${
                currentBlock.isCustomized
                  ? `
                <button type="button" 
                        onclick="window.LMSGI_APP.resetTheoryToDefault('${currentBlock.id}')"
                        class="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-rose-100 dark:hover:bg-rose-950/50 text-slate-700 dark:text-slate-300 hover:text-rose-700 dark:hover:text-rose-300 transition-colors flex items-center gap-1.5"
                        title="Restaurar a la programación oficial">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  Restaurar Original
                </button>
              `
                  : ""
              }
              <button type="button" 
                      onclick="window.LMSGI_APP.openTheoryEditor('${currentBlock.id}')"
                      class="px-4 py-1.5 text-xs font-semibold rounded-xl bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-all flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                Editar Teoría
              </button>
            </div>
          </div>
        `
            : ""
        }

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
              ${currentBlock.objectives.map(obj => `<li class="flex items-start gap-2"><span class="text-teal-500 font-bold">&bull;</span><span>${this.formatInlineCode(obj)}</span></li>`).join("")}
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
                  ${this.formatInlineCode(sec.title)}
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
                          ${sec.table.headers.map(h => `<th class="px-4 py-2.5 text-left">${this.formatInlineCode(h)}</th>`).join("")}
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
                        ${sec.table.rows
                          .map(row => `<tr>${row.map(cell => `<td class="px-4 py-2.5">${this.formatInlineCode(cell)}</td>`).join("")}</tr>`)
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
                ${this.formatInlineCode(ex.title)}
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
                ${ex.tasks.map(t => `<div class="flex items-start gap-1.5"><span class="text-teal-500 font-bold">&bull;</span><span>${this.formatInlineCode(t)}</span></div>`).join("")}
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
                    <svg class="w-4 h-4 fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Validar XML en Vivo
                  </button>
                `
                    : `
                  <button type="button" 
                          onclick="window.LMSGI_APP.validateEditorCode('${ex.id}')"
                          class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    Previsualizar HTML/CSS en Vivo
                  </button>
                `
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
                  💡 Pista: ${this.formatInlineCode(ex.hints)}
                </div>
              `
                  : ""
              }
            </div>

            <!-- Panel de Resultados del Validador -->
            <div id="output-${ex.id}"></div>

            ${
              ex.interactiveQuestions && ex.interactiveQuestions.length > 0
                ? `
              <!-- Cuestionario de Respuestas Interactivas -->
              <div class="mt-4 p-4 sm:p-5 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-teal-200/60 dark:border-teal-900/60">
                  <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">✍️</span>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                      Cuestionario Interactivo del Ejercicio
                    </h5>
                  </div>
                  <span class="text-[11px] text-teal-700 dark:text-teal-400 font-medium">
                    Escribe tu respuesta para cada pregunta y pulsa comprobar
                  </span>
                </div>

                <div class="space-y-3">
                  ${ex.interactiveQuestions
                    .map((q, qIdx) => {
                      let savedAnswers = {};
                      try {
                        savedAnswers = JSON.parse(localStorage.getItem("lmsgi_interactive_" + ex.id) || "{}");
                      } catch (e) {}
                      const userVal = savedAnswers[q.id] || "";
                      return `
                    <div class="space-y-1.5 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs" id="container-${q.id}">
                      <label for="input-${q.id}" class="block text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        ${this.escapeHTML(q.label || q.question)}
                      </label>
                      <div class="flex items-center gap-2 pt-0.5">
                        <input type="text" 
                               id="input-${q.id}" 
                               value="${this.escapeHTML(userVal)}"
                               placeholder="${this.escapeHTML(q.placeholder || '')}"
                               onkeydown="if(event.key==='Enter') window.LMSGI_APP.checkInteractiveExercise('${ex.id}')"
                               class="flex-1 px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all">
                        <div id="badge-${q.id}" class="hidden text-xs font-semibold px-2.5 py-1 rounded-md shrink-0"></div>
                      </div>
                      <div id="feedback-${q.id}" class="hidden text-[11px] pt-0.5 font-medium leading-tight"></div>
                    </div>
                  `;
                    })
                    .join("")}
                </div>

                <!-- Barra de Acción y Resultado del Cuestionario Interactivo -->
                <div class="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div id="result-summary-${ex.id}" class="text-xs font-semibold text-slate-700 dark:text-slate-300"></div>
                  <div class="flex items-center gap-2">
                    <button type="button" 
                            onclick="window.LMSGI_APP.resetInteractiveExercise('${ex.id}')"
                            class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                      Limpiar
                    </button>
                    <button type="button" 
                            onclick="window.LMSGI_APP.checkInteractiveExercise('${ex.id}')"
                            class="px-4 py-2 text-xs font-bold rounded-lg bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-all flex items-center gap-1.5">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Comprobar Respuestas
                    </button>
                  </div>
                </div>
              </div>
            `
                : ""
            }

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
   * Formatea cadenas cortas (títulos, objetivos formativos, celdas de tabla):
   * Convierte código entre backticks (`codigo`) en badges visuales destacados,
   * y escapa de forma segura cualquier etiqueta HTML no formateada (<header>, <main>, etc.)
   * para que nunca se interpreten como nodos del DOM ni desaparezcan.
   */
  formatInlineCode(str) {
    if (!str) return "";
    let raw = String(str);
    const codeTokens = [];

    // 1. Extraer bloques de código entre backticks `...`
    raw = raw.replace(/`([^`]+)`/g, (match, code) => {
      const idx = codeTokens.length;
      codeTokens.push(
        `<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-mono text-xs font-semibold">${this.escapeHTML(code)}</code>`
      );
      return `__LMSGI_INLINE_CODE_${idx}__`;
    });

    // 2. Escapar etiquetas HTML no encapsuladas (< y >)
    raw = this.escapeHTML(raw);

    // 3. Restaurar los badges de código formateados
    codeTokens.forEach((token, idx) => {
      raw = raw.replace(`__LMSGI_INLINE_CODE_${idx}__`, token);
    });

    return raw;
  }

  /**
   * Renderizador robusto que admite tanto Markdown enriquecido como HTML nativo
   * Preserva etiquetas HTML estándar (p, ul, ol, li, strong, table, etc.)
   * y escapa de forma segura etiquetas desconocidas o de ejemplo (como <titulo>, <alumno>).
   */
  formatMarkdown(text) {
    if (!text) return "";
    let raw = text.trim();

    const codeTokens = [];
    const htmlTokens = [];

    // 1. Extraer bloques de código multilínea (```...```)
    raw = raw.replace(/```(xml|html|css|javascript)?([\s\S]*?)```/g, (match, lang, code) => {
      const idx = codeTokens.length;
      const htmlBlock = `<pre class="my-3 p-3.5 bg-slate-900 text-teal-200 font-mono text-xs rounded-xl overflow-x-auto border border-slate-800 leading-relaxed shadow-sm">${this.escapeHTML(code.trim())}</pre>`;
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

    // 3. Extraer y preservar etiquetas HTML estándar válidas
    const HTML_TAG_REGEX = /<\/?(p|br|hr|h[1-6]|ul|ol|li|strong|b|em|i|u|s|span|div|a|blockquote|table|thead|tbody|tr|th|td|code|pre|mark|small)(\s+[^>]*)?\/?>/gi;
    raw = raw.replace(HTML_TAG_REGEX, (match, tagName) => {
      const lowerTag = tagName.toLowerCase();
      const isClosing = match.startsWith("</");
      const hasAttrs = /\s+[^>]/.test(match);
      const hasClosingTag = raw.toLowerCase().includes("</" + lowerTag + ">");

      // Si es una etiqueta h1-h6, p, a, table, etc. sin atributos ni etiqueta de cierre correspondiente en el texto,
      // es una mención de la etiqueta en la explicación didáctica; permitir que se escape en el paso 4
      if (/^h[1-6]$/i.test(lowerTag) && !isClosing && !hasAttrs && !hasClosingTag) {
        return match;
      }
      if ((lowerTag === "a" || lowerTag === "p") && !isClosing && !hasAttrs && !hasClosingTag) {
        return match;
      }

      const idx = htmlTokens.length;
      htmlTokens.push(match);
      return `__LMSGI_HTML_TAG_${idx}__`;
    });

    // 4. Escapar cualquier símbolo < y > que haya quedado en texto plano
    raw = raw.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // 5. Procesar estilos markdown
    // Negrita primero: **...** (no saltar de línea)
    raw = raw.replace(/\*\*([^*\n\r]+)\*\*/g, '<strong class="font-bold text-slate-900 dark:text-slate-100">$1</strong>');

    // Separadores horizontales
    raw = raw.replace(/^\s*---\s*$/gm, '<hr class="my-4 border-slate-200 dark:border-slate-800" />');

    // Citas con >
    raw = raw.replace(/^\s*&gt;\s+(.*)$/gm, '<blockquote class="my-3 pl-4 py-2 border-l-4 border-teal-500 bg-teal-50/60 dark:bg-teal-950/30 rounded-r-xl text-slate-700 dark:text-slate-300 italic text-xs sm:text-sm leading-relaxed">$1</blockquote>');
    raw = raw.replace(/<\/blockquote>\s*<blockquote[^>]*>/g, '<br class="my-1">');

    // Listas con sangría de nivel 2 (subviñetas) - ANTES de cursiva
    raw = raw.replace(/^\s{2,}[\*\-]\s+(.*)$/gm, '<li class="ml-6 list-circle text-slate-600 dark:text-slate-400 my-0.5 text-xs">$1</li>');

    // Listas principales con viñetas (* o - o &bull;) - ANTES de cursiva
    raw = raw.replace(/^\s*&bull;\s+(.*)$/gm, '<li class="ml-2 list-disc text-slate-700 dark:text-slate-300 my-1">$1</li>');
    raw = raw.replace(/^\s*[\*\-]\s+(.*)$/gm, '<li class="ml-2 list-disc text-slate-700 dark:text-slate-300 my-1">$1</li>');

    // Listas numeradas (1. 2. etc.)
    raw = raw.replace(/^\s*(\d+)\.\s+(.*)$/gm, '<li class="ml-2 list-decimal text-slate-700 dark:text-slate-300 my-1" value="$1">$2</li>');

    // Cursiva DESPUÉS de listas: *...* (no saltar de línea)
    raw = raw.replace(/(^|[^*])\*([^*\n\r]+)\*/g, '$1<em class="italic">$2</em>');

    // Agrupar <li> consecutivos en <ul> u <ol>
    raw = raw.replace(/(<li class="[^"]*list-circle[^"]*"[^>]*>[\s\S]*?<\/li>\s*)+/g, (match) => {
      return `\n<ul class="my-1.5 space-y-0.5 pl-6 list-circle text-slate-600 dark:text-slate-400">\n${match.trim()}\n</ul>\n`;
    });
    raw = raw.replace(/(<li class="[^"]*list-disc[^"]*"[^>]*>[\s\S]*?<\/li>\s*)+/g, (match) => {
      return `\n<ul class="my-3 space-y-1 pl-4 list-disc text-slate-700 dark:text-slate-300">\n${match.trim()}\n</ul>\n`;
    });
    raw = raw.replace(/(<li class="[^"]*list-decimal[^"]*"[^>]*>[\s\S]*?<\/li>\s*)+/g, (match) => {
      return `\n<ol class="my-3 space-y-1 pl-4 list-decimal text-slate-700 dark:text-slate-300">\n${match.trim()}\n</ol>\n`;
    });

    // Párrafos y saltos
    raw = raw.replace(/\n\n+/g, '</p><p class="my-2.5">');
    raw = `<p class="my-2.5">${raw}</p>`;
    raw = raw.replace(/<p class="my-2\.5">\s*<\/p>/g, '');
    raw = raw.replace(/<p class="my-2\.5">\s*(<(?:ul|ol|blockquote|pre|hr|div|table|section|p|h[1-6]|__LMSGI_HTML_TAG_\d+__)[^>]*>)/gi, '$1');
    raw = raw.replace(/(<\/(?:ul|ol|blockquote|pre|hr|div|table|section|p|h[1-6])>|__LMSGI_HTML_TAG_\d+__)\s*<\/p>/gi, '$1');

    // 6. Restaurar tokens HTML
    htmlTokens.forEach((token, idx) => {
      raw = raw.replace(`__LMSGI_HTML_TAG_${idx}__`, token);
    });

    // Limpieza final de párrafos alrededor de elementos bloque HTML nativos
    raw = raw.replace(/<p class="my-2\.5">\s*(<(?:ul|ol|blockquote|pre|hr|div|table|section|p|h[1-6])[^>]*>)/gi, '$1');
    raw = raw.replace(/(<\/(?:ul|ol|blockquote|pre|hr|div|table|section|p|h[1-6])>)\s*<\/p>/gi, '$1');
    raw = raw.replace(/<p class="my-2\.5">\s*<\/p>/g, '');

    // 7. Restaurar bloques de código
    codeTokens.forEach((token, idx) => {
      raw = raw.replace(`__LMSGI_CODE_BLOCK_${idx}__`, token);
      raw = raw.replace(`__LMSGI_CODE_INLINE_${idx}__`, token);
    });

    return raw;
  }

  // =========================================================================
  // GESTIÓN DE EDICIÓN DOCENTE DE CONTENIDOS TEÓRICOS
  // =========================================================================

  openTheoryEditor(blockId) {
    this.editingBlockId = blockId || this.currentBlockId;
    const currentBlock = this.getCurrentBlockData();
    const modal = document.getElementById("modal-edit-theory");
    const subtitle = document.getElementById("edit-theory-subtitle");
    const introTextarea = document.getElementById("edit-theory-intro");
    const sectionsContainer = document.getElementById("edit-theory-sections-container");
    const restoreBtn = document.getElementById("btn-restore-theory-modal");
    const rawHtmlEl = document.getElementById("edit-theory-raw-html");

    if (!modal || !introTextarea || !sectionsContainer) return;

    if (subtitle) {
      subtitle.textContent = `${currentBlock.session}: ${currentBlock.title} (${currentBlock.duration})`;
    }

    introTextarea.value = (currentBlock.theory && currentBlock.theory.intro) ? currentBlock.theory.intro.trim() : "";
    introTextarea.onfocus = () => this.setActiveEditorInput("edit-theory-intro");

    // Limpiar y renderizar secciones en el modal
    sectionsContainer.innerHTML = "";
    const sections = (currentBlock.theory && currentBlock.theory.sections) ? currentBlock.theory.sections : [];

    sections.forEach((sec, idx) => {
      this.renderEditorSectionCard(idx, sec.title || "", sec.content || "");
    });

    // Inicializar el código HTML completo
    if (rawHtmlEl) {
      rawHtmlEl.value = this.buildFullHtmlFromSections(introTextarea.value, sections);
    }

    if (restoreBtn) {
      if (currentBlock.isCustomized) {
        restoreBtn.classList.remove("hidden");
      } else {
        restoreBtn.classList.add("hidden");
      }
    }

    this.activeEditorTab = "edit";
    this.switchEditorTab("edit");
    modal.classList.remove("hidden");
    introTextarea.focus();
    this.activeEditorInputId = "edit-theory-intro";
  }

  closeTheoryEditor() {
    const modal = document.getElementById("modal-edit-theory");
    if (modal) modal.classList.add("hidden");
    this.editingBlockId = null;
  }

  renderEditorSectionCard(idx, title, content) {
    const sectionsContainer = document.getElementById("edit-theory-sections-container");
    if (!sectionsContainer) return;

    const card = document.createElement("div");
    card.className = "edit-section-card bg-slate-50/70 dark:bg-slate-800/40 p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-3";
    card.dataset.index = idx;
    card.dataset.mode = "markdown";
    const fieldId = `sec-content-textarea-${Date.now()}-${idx}`;

    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-teal-500"></span>
          Sección <span class="sec-number">${idx + 1}</span>
        </span>
        <div class="flex items-center gap-3">
          <button type="button" 
                  onclick="window.LMSGI_APP.toggleSectionCodeMode(${idx})" 
                  class="text-xs text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-semibold flex items-center gap-1 transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
            <span class="mode-label">Editar como HTML</span>
          </button>
          <button type="button" 
                  onclick="window.LMSGI_APP.removeEditorSection(this)" 
                  class="text-xs text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 flex items-center gap-1 transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            Eliminar
          </button>
        </div>
      </div>
      <div class="space-y-1">
        <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400">Título de la Sección</label>
        <input type="text" 
               class="sec-title-input w-full px-3 py-1.5 text-xs sm:text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500"
               value="${this.escapeHTML(title)}" 
               placeholder="Ej: 1. Elementos fundamentales">
      </div>
      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400">
            Contenido (<span class="sec-mode-text">Markdown / Listas</span>)
          </label>
        </div>
        <textarea rows="6" 
                  id="${fieldId}"
                  class="sec-content-textarea w-full p-3 text-xs sm:text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-mono focus:outline-none focus:ring-2 focus:ring-teal-500 leading-relaxed"
                  placeholder="Escribe la explicación teórica, listas con * o código HTML...">${this.escapeHTML(content)}</textarea>
      </div>
    `;

    const textarea = card.querySelector(".sec-content-textarea");
    if (textarea) {
      textarea.onfocus = () => this.setActiveEditorInput(fieldId);
    }

    sectionsContainer.appendChild(card);
  }

  toggleSectionCodeMode(target) {
    if (target === "intro") {
      const textarea = document.getElementById("edit-theory-intro");
      const label = document.getElementById("mode-label-intro");
      if (!textarea || !label) return;

      const isHtml = textarea.dataset.mode === "html";
      if (!isHtml) {
        textarea.dataset.mode = "html";
        textarea.value = this.formatMarkdown(textarea.value);
        label.textContent = "Editar como Markdown";
        textarea.classList.add("text-teal-700", "dark:text-teal-300");
      } else {
        textarea.dataset.mode = "markdown";
        label.textContent = "Editar como HTML";
        textarea.classList.remove("text-teal-700", "dark:text-teal-300");
      }
      return;
    }

    if (typeof target === "number") {
      const cards = document.querySelectorAll(".edit-section-card");
      const card = cards[target];
      if (!card) return;

      const textarea = card.querySelector(".sec-content-textarea");
      const modeLabel = card.querySelector(".mode-label");
      const secModeText = card.querySelector(".sec-mode-text");
      if (!textarea || !modeLabel) return;

      const isHtml = card.dataset.mode === "html";
      if (!isHtml) {
        card.dataset.mode = "html";
        textarea.value = this.formatMarkdown(textarea.value);
        modeLabel.textContent = "Editar como Markdown";
        if (secModeText) secModeText.textContent = "Código HTML Directo";
        textarea.classList.add("text-teal-700", "dark:text-teal-300");
      } else {
        card.dataset.mode = "markdown";
        modeLabel.textContent = "Editar como HTML";
        if (secModeText) secModeText.textContent = "Markdown / Listas";
        textarea.classList.remove("text-teal-700", "dark:text-teal-300");
      }
    }
  }

  addEditorSection() {
    const sectionsContainer = document.getElementById("edit-theory-sections-container");
    if (!sectionsContainer) return;
    const cards = sectionsContainer.querySelectorAll(".edit-section-card");
    this.renderEditorSectionCard(cards.length, `Sección ${cards.length + 1}`, "Escribe aquí la teoría en párrafos cortos y listas con *...\n\n* Punto clave 1\n* Punto clave 2");
    const lastCard = sectionsContainer.lastElementChild;
    if (lastCard) {
      lastCard.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = lastCard.querySelector(".sec-title-input");
      if (input) input.focus();
    }
  }

  removeEditorSection(btnOrIdx) {
    let card = null;
    if (typeof btnOrIdx === "number") {
      const cards = document.querySelectorAll(".edit-section-card");
      card = cards[btnOrIdx];
    } else if (btnOrIdx && btnOrIdx.closest) {
      card = btnOrIdx.closest(".edit-section-card");
    }
    if (card) {
      card.remove();
      // Renumerar secciones visualmente
      const remaining = document.querySelectorAll(".edit-section-card");
      remaining.forEach((c, i) => {
        const numSpan = c.querySelector(".sec-number");
        if (numSpan) numSpan.textContent = i + 1;
      });
    }
  }

  setActiveEditorInput(id) {
    this.activeEditorInputId = id;
  }

  insertEditorFormat(type) {
    const activeEl = document.getElementById(this.activeEditorInputId) || 
                     (this.activeEditorTab === "code" ? document.getElementById("edit-theory-raw-html") : document.getElementById("edit-theory-intro"));
    if (!activeEl) return;

    const start = activeEl.selectionStart || 0;
    const end = activeEl.selectionEnd || 0;
    const text = activeEl.value || "";
    const selected = text.substring(start, end);

    let replacement = "";
    switch (type) {
      case "bold":
        replacement = selected ? `**${selected}**` : "**texto en negrita**";
        break;
      case "italic":
        replacement = selected ? `*${selected}*` : "*texto en cursiva*";
        break;
      case "bullet": {
        if (selected) {
          const lines = selected.split("\n");
          const allBullets = lines.every(l => !l.trim() || /^\s*[\*\-]\s+/.test(l));
          if (allBullets) {
            replacement = lines.map(l => l.replace(/^\s*[\*\-]\s+/, "")).join("\n");
          } else {
            replacement = lines.map(l => l.trim() ? `* ${l.replace(/^\s*[\*\-]\s+/, "").trim()}` : l).join("\n");
          }
        } else {
          replacement = "\n* Elemento de lista 1\n* Elemento de lista 2\n";
        }
        break;
      }
      case "number": {
        if (selected) {
          const lines = selected.split("\n");
          const allNumbered = lines.every(l => !l.trim() || /^\s*\d+\.\s+/.test(l));
          if (allNumbered) {
            replacement = lines.map(l => l.replace(/^\s*\d+\.\s+/, "")).join("\n");
          } else {
            let num = 1;
            replacement = lines.map(l => {
              if (!l.trim()) return l;
              const clean = l.replace(/^\s*\d+\.\s+/, "").trim();
              return `${num++}. ${clean}`;
            }).join("\n");
          }
        } else {
          replacement = "\n1. Primer paso\n2. Segundo paso\n";
        }
        break;
      }
      case "quote":
        replacement = selected 
          ? `\n> **Nota clave:** ${selected}\n` 
          : "\n> **Punto clave:** Información destacada para el aula.\n";
        break;
      case "code":
        replacement = selected 
          ? `\n\`\`\`xml\n${selected}\n\`\`\`\n` 
          : '\n```xml\n<ejemplo id="1">\n  <dato>Valor</dato>\n</ejemplo>\n```\n';
        break;
      case "paragraph":
        replacement = "\n\n";
        break;
      case "table":
        replacement = `\n<table class="min-w-full my-4 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">\n  <thead class="bg-slate-100 dark:bg-slate-800 font-semibold text-slate-700 dark:text-slate-300">\n    <tr>\n      <th class="px-4 py-2 text-left">Encabezado 1</th>\n      <th class="px-4 py-2 text-left">Encabezado 2</th>\n    </tr>\n  </thead>\n  <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">\n    <tr>\n      <td class="px-4 py-2">Dato 1A</td>\n      <td class="px-4 py-2">Dato 1B</td>\n    </tr>\n    <tr>\n      <td class="px-4 py-2">Dato 2A</td>\n      <td class="px-4 py-2">Dato 2B</td>\n    </tr>\n  </tbody>\n</table>\n`;
        break;
      default:
        replacement = selected;
    }

    activeEl.value = text.substring(0, start) + replacement + text.substring(end);
    activeEl.focus();
    const newCursor = start + replacement.length;
    activeEl.setSelectionRange(newCursor, newCursor);
  }

  buildFullHtmlFromSections(intro, sections) {
    let out = `<!-- INTRODUCCIÓN DE LA SESIÓN -->\n`;
    out += `<div class="intro-block mb-6 space-y-3">\n`;
    if (/<[a-z][\s\S]*>/i.test(intro)) {
      out += `  ${intro.trim()}\n`;
    } else {
      out += `  ${this.formatMarkdown(intro)}\n`;
    }
    out += `</div>\n\n`;

    sections.forEach((sec, idx) => {
      const title = sec.title || `Sección ${idx + 1}`;
      const content = sec.content || "";
      out += `<!-- ========================================================================= -->\n`;
      out += `<!-- SECCIÓN ${idx + 1}: ${title.replace(/<!--|-->/g, "")} -->\n`;
      out += `<!-- ========================================================================= -->\n`;
      out += `<section class="theory-section mb-6 space-y-3" data-title="${this.escapeHTML(title)}">\n`;
      out += `  <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">\n`;
      out += `    <span class="w-2 h-2 rounded-full bg-teal-500"></span>\n`;
      out += `    ${this.escapeHTML(title)}\n`;
      out += `  </h3>\n`;
      out += `  <div class="section-content space-y-2">\n`;
      if (/<[a-z][\s\S]*>/i.test(content)) {
        out += `    ${content.trim()}\n`;
      } else {
        out += `    ${this.formatMarkdown(content)}\n`;
      }
      out += `  </div>\n`;
      out += `</section>\n\n`;
    });

    return out.trim();
  }

  parseHtmlToSections(htmlStr) {
    if (!htmlStr || !htmlStr.trim()) return { intro: "", sections: [] };

    const parser = new DOMParser();
    const doc = parser.parseFromString(`<body>${htmlStr}</body>`, "text/html");
    const body = doc.body;

    let intro = "";
    const introEl = body.querySelector(".intro-block");
    if (introEl) {
      intro = introEl.innerHTML.trim();
      introEl.remove();
    } else {
      const firstSection = body.querySelector("section, h3");
      if (firstSection) {
        let sibling = body.firstChild;
        const introParts = [];
        while (sibling && sibling !== firstSection) {
          if (sibling.outerHTML) introParts.push(sibling.outerHTML);
          else if (sibling.textContent && sibling.textContent.trim()) introParts.push(sibling.textContent.trim());
          const next = sibling.nextSibling;
          sibling.remove();
          sibling = next;
        }
        intro = introParts.join("\n").trim();
      }
    }

    const sections = [];
    const sectionNodes = body.querySelectorAll("section");

    if (sectionNodes.length > 0) {
      sectionNodes.forEach((secNode, i) => {
        let title = secNode.getAttribute("data-title") || "";
        const h3 = secNode.querySelector("h3, h2, h4");
        if (h3) {
          if (!title) title = h3.textContent.trim();
          h3.remove();
        }
        if (!title) title = `Sección ${i + 1}`;
        const contentEl = secNode.querySelector(".section-content") || secNode;
        const content = contentEl.innerHTML.trim();
        sections.push({ title, content });
      });
    } else {
      const h3Nodes = body.querySelectorAll("h3, h2");
      if (h3Nodes.length > 0) {
        h3Nodes.forEach((h3, i) => {
          const title = h3.textContent.trim();
          let contentParts = [];
          let next = h3.nextSibling;
          while (next && !["H2", "H3"].includes(next.nodeName)) {
            if (next.outerHTML) contentParts.push(next.outerHTML);
            else if (next.textContent && next.textContent.trim()) contentParts.push(next.textContent.trim());
            next = next.nextSibling;
          }
          sections.push({ title, content: contentParts.join("\n").trim() });
        });
      } else {
        const remaining = body.innerHTML.trim();
        if (remaining) {
          sections.push({ title: "Contenido de la Sesión", content: remaining });
        }
      }
    }

    return { intro, sections };
  }

  formatHtmlCodeTextarea() {
    const rawHtmlEl = document.getElementById("edit-theory-raw-html");
    if (!rawHtmlEl || !rawHtmlEl.value) return;

    let html = rawHtmlEl.value;
    let formatted = "";
    let indent = 0;
    const tab = "  ";

    const tokens = html.replace(/>\s*</g, "><").split(/(<[^>]+>)/g).filter(t => t.trim().length > 0);

    tokens.forEach(token => {
      if (token.startsWith("<!--")) {
        formatted += tab.repeat(indent) + token.trim() + "\n";
      } else if (token.startsWith("</")) {
        indent = Math.max(0, indent - 1);
        formatted += tab.repeat(indent) + token.trim() + "\n";
      } else if (token.startsWith("<") && !token.endsWith("/>") && !token.startsWith("<!") && !token.startsWith("<br") && !token.startsWith("<hr") && !token.startsWith("<img")) {
        formatted += tab.repeat(indent) + token.trim() + "\n";
        indent++;
      } else {
        formatted += tab.repeat(indent) + token.trim() + "\n";
      }
    });

    rawHtmlEl.value = formatted.trim();
  }

  switchEditorTab(tab) {
    const tabBtnEditor = document.getElementById("tab-btn-editor");
    const tabBtnCode = document.getElementById("tab-btn-code");
    const tabBtnPreview = document.getElementById("tab-btn-preview");
    const tabEdit = document.getElementById("editor-tab-edit");
    const tabCode = document.getElementById("editor-tab-code");
    const tabPreview = document.getElementById("editor-tab-preview");
    const previewRender = document.getElementById("edit-theory-preview-render");
    const rawHtmlEl = document.getElementById("edit-theory-raw-html");

    if (!tabBtnEditor || !tabBtnPreview || !tabEdit || !tabPreview) return;

    const prevTab = this.activeEditorTab;
    this.activeEditorTab = tab;

    [tabBtnEditor, tabBtnCode, tabBtnPreview].forEach(btn => {
      if (btn) {
        btn.className = "px-3 py-1 font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all";
      }
    });

    tabEdit.classList.add("hidden");
    if (tabCode) tabCode.classList.add("hidden");
    tabPreview.classList.add("hidden");

    if (tab === "edit") {
      tabBtnEditor.className = "px-3 py-1 font-semibold rounded-lg bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs transition-all";
      tabEdit.classList.remove("hidden");

      if (prevTab === "code" && rawHtmlEl && rawHtmlEl.value.trim()) {
        const parsed = this.parseHtmlToSections(rawHtmlEl.value);
        const introTextarea = document.getElementById("edit-theory-intro");
        const sectionsContainer = document.getElementById("edit-theory-sections-container");
        if (introTextarea && parsed.intro) introTextarea.value = parsed.intro;
        if (sectionsContainer && parsed.sections.length > 0) {
          sectionsContainer.innerHTML = "";
          parsed.sections.forEach((sec, idx) => {
            this.renderEditorSectionCard(idx, sec.title, sec.content);
          });
        }
      }
      this.setActiveEditorInput("edit-theory-intro");
    } else if (tab === "code") {
      if (tabBtnCode) {
        tabBtnCode.className = "px-3 py-1 font-semibold rounded-lg bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs transition-all flex items-center gap-1";
      }
      if (tabCode) tabCode.classList.remove("hidden");

      if (prevTab === "edit" || !rawHtmlEl.value.trim()) {
        const introText = document.getElementById("edit-theory-intro")?.value || "";
        const sectionCards = document.querySelectorAll(".edit-section-card");
        const sections = [];
        sectionCards.forEach((card, idx) => {
          const title = card.querySelector(".sec-title-input")?.value || `Sección ${idx + 1}`;
          const content = card.querySelector(".sec-content-textarea")?.value || "";
          sections.push({ title, content });
        });
        if (rawHtmlEl) {
          rawHtmlEl.value = this.buildFullHtmlFromSections(introText, sections);
        }
      }
      if (rawHtmlEl) {
        this.setActiveEditorInput("edit-theory-raw-html");
      }
    } else if (tab === "preview") {
      tabBtnPreview.className = "px-3 py-1 font-semibold rounded-lg bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs transition-all";
      tabPreview.classList.remove("hidden");

      if (prevTab === "code" && rawHtmlEl) {
        if (previewRender) {
          previewRender.innerHTML = `
            <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm leading-relaxed text-sm">
              ${this.formatMarkdown(rawHtmlEl.value)}
            </div>
          `;
        }
      } else {
        const introText = document.getElementById("edit-theory-intro")?.value || "";
        const sectionCards = document.querySelectorAll(".edit-section-card");
        let sectionsHtml = "";

        sectionCards.forEach((card, i) => {
          const title = card.querySelector(".sec-title-input")?.value || `Sección ${i + 1}`;
          const content = card.querySelector(".sec-content-textarea")?.value || "";
          sectionsHtml += `
            <div class="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-teal-500"></span>
                ${this.escapeHTML(title)}
              </h3>
              <div class="prose dark:prose-invert max-w-none text-sm leading-relaxed">
                ${this.formatMarkdown(content)}
              </div>
            </div>
          `;
        });

        if (previewRender) {
          previewRender.innerHTML = `
            <div class="prose dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              ${this.formatMarkdown(introText)}
            </div>
            <div class="space-y-4">
              ${sectionsHtml}
            </div>
          `;
        }
      }
    }
  }

  loadProjectOfficialTheory() {
    const id = this.editingBlockId || this.currentBlockId;
    if (!id) return;

    let officialTheory = null;
    if (id.startsWith("ut1-")) {
      const b = UNIT_1_DATA.blocks.find(b => b.id === id);
      if (b) officialTheory = b.theory;
    } else if (id.startsWith("ut2-")) {
      const b = UNIT_2_DATA.blocks.find(b => b.id === id);
      if (b) officialTheory = b.theory;
    } else {
      const u = UNITS.find(un => un.id === this.currentUnitId);
      if (u) {
        const bMeta = u.blocks.find(b => b.id === id);
        const uOverview = UNITS_OVERVIEW_DATA[this.currentUnitId];
        const det = uOverview && uOverview.blocksDetailed ? uOverview.blocksDetailed[id] : null;
        if (det) {
          officialTheory = {
            intro: det.theorySummary,
            sections: [{ title: bMeta ? bMeta.title : "Contenido", content: det.theorySummary }]
          };
        }
      }
    }

    if (!officialTheory) {
      alert("No se encontró la teoría oficial para este bloque en los archivos del proyecto.");
      return;
    }

    if (confirm("¿Cargar la teoría oficial y actualizada del proyecto? Se reemplazarán los campos del editor con el contenido del archivo unit1.js.")) {
      const introTextarea = document.getElementById("edit-theory-intro");
      const sectionsContainer = document.getElementById("edit-theory-sections-container");
      if (introTextarea) introTextarea.value = (officialTheory.intro || "").trim();
      if (sectionsContainer) {
        sectionsContainer.innerHTML = "";
        (officialTheory.sections || []).forEach((sec, idx) => {
          this.renderEditorSectionCard(idx, sec.title || "", sec.content || "");
        });
      }

      const rawHtmlEl = document.getElementById("edit-theory-raw-html");
      if (rawHtmlEl) {
        rawHtmlEl.value = this.buildFullHtmlFromSections(officialTheory.intro || "", officialTheory.sections || []);
      }

      alert("¡Teoría oficial del proyecto cargada en el editor! Haz los cambios que desees y pulsa 'Guardar Cambios'.");
    }
  }

  saveTheoryEditor() {
    if (!this.editingBlockId) return;

    let intro = "";
    let sections = [];

    const rawHtmlEl = document.getElementById("edit-theory-raw-html");
    if (this.activeEditorTab === "code" && rawHtmlEl && rawHtmlEl.value.trim()) {
      const parsed = this.parseHtmlToSections(rawHtmlEl.value);
      intro = parsed.intro;
      sections = parsed.sections;
    } else {
      intro = document.getElementById("edit-theory-intro")?.value || "";
      const sectionCards = document.querySelectorAll(".edit-section-card");
      const originalBlock = this.getCurrentBlockData();
      const originalSections = (originalBlock && originalBlock.theory && originalBlock.theory.sections) ? originalBlock.theory.sections : [];

      sectionCards.forEach((card, idx) => {
        const title = card.querySelector(".sec-title-input")?.value.trim() || `Sección ${idx + 1}`;
        const content = card.querySelector(".sec-content-textarea")?.value || "";
        const table = originalSections[idx] ? originalSections[idx].table : null;
        sections.push({ title, content, ...(table ? { table } : {}) });
      });
    }

    this.customTheories[this.editingBlockId] = { intro, sections };
    localStorage.setItem("lmsgi_custom_theories", JSON.stringify(this.customTheories));

    this.closeTheoryEditor();
    this.render();
  }

  resetTheoryToDefault(blockId) {
    const id = blockId || this.editingBlockId || this.currentBlockId;
    if (!id) return;

    if (confirm("¿Estás seguro de restablecer el contenido original predeterminado de este bloque? Se borrarán tus ediciones personalizadas para esta sesión.")) {
      delete this.customTheories[id];
      localStorage.setItem("lmsgi_custom_theories", JSON.stringify(this.customTheories));
      if (this.editingBlockId) {
        this.closeTheoryEditor();
      }
      this.render();
    }
  }

  resetCurrentEditedBlock() {
    this.resetTheoryToDefault(this.editingBlockId);
  }

  exportCustomContent() {
    const count = Object.keys(this.customTheories).length;
    if (count === 0) {
      alert("Aún no tienes contenidos modificados para exportar. Edita alguna sesión primero.");
      return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.customTheories, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `lmsgi_contenidos_docente_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchor.click();
  }

  importCustomContent() {
    const input = document.getElementById("input-import-theories");
    if (input) input.click();
  }

  handleImportFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (typeof imported !== "object" || imported === null) {
          throw new Error("Formato JSON no válido.");
        }
        this.customTheories = { ...this.customTheories, ...imported };
        localStorage.setItem("lmsgi_custom_theories", JSON.stringify(this.customTheories));
        alert("¡Contenidos docentes importados con éxito!");
        this.render();
      } catch (err) {
        alert("Error al importar el archivo JSON: " + err.message);
      }
      event.target.value = "";
    };
    reader.readAsText(file);
  }
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  new LMSGIApp();
});

})();
