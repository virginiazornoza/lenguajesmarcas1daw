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

export const COURSE_INFO = {
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

export const UNITS = [
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
