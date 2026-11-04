/* =====================================================================
   generador_cursos.js  -  ARMADO DE LECCIONES Y EJERCICIOS

   Convierte la tabla de temas.js en unidades, lecciones y ejercicios,
   y las suma a cada curso. Es lógica, por eso no está junto a los datos.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. CÓMO SE LEE CADA COLUMNA
   --------------------------------------------------------------------- */

// Posición de cada idioma dentro de una frase. El chino usa dos columnas.
const COLUMNA_IDIOMA = Object.freeze({ ingles: 1, aleman: 2, chino: 3, frances: 5, italiano: 6, portugues: 7 });

// Texto de una frase en el idioma del curso. El chino muestra pinyin y caracteres.
const fraseEnIdioma = (frase, cursoId) => {
  const columna = COLUMNA_IDIOMA[cursoId];
  return cursoId === 'chino' ? `${frase[columna]} (${frase[columna + 1]})` : frase[columna];
};

const marcarIdioma = (texto, curso) => `<span lang="${curso.codigoIdioma}">${texto}</span>`;

// Devuelve tres opciones con la correcta en un lugar distinto según el ejercicio.
const armarOpciones = (correcta, otras, indice) => {
  const opciones = [
    { texto: correcta, correcta: true },
    { texto: otras[0], correcta: false },
    { texto: otras[1], correcta: false }
  ];
  const giro = indice % opciones.length;
  return [...opciones.slice(giro), ...opciones.slice(0, giro)];
};

// Toma dos elementos distintos del que se está preguntando.
const elegirOtras = (lista, indice) => {
  const distintas = [...new Set(lista)].filter((valor) => valor !== lista[indice]);
  const inicio = indice % distintas.length;
  return [distintas[inicio], distintas[(inicio + 1) % distintas.length]];
};


/* ---------------------------------------------------------------------
   2. EJERCICIOS
   Se alternan traducir, reconocer y completar para que la lección varíe.
   --------------------------------------------------------------------- */

const ejercicioTraducir = (frases, indice, curso) => {
  const textos = frases.map((frase) => marcarIdioma(fraseEnIdioma(frase, curso.id), curso));
  return {
    titulo: 'Traduce la frase',
    consigna: 'Selecciona la traducción correcta.',
    pregunta: `¿Cómo se dice «${frases[indice][0]}»?`,
    opciones: armarOpciones(textos[indice], elegirOtras(textos, indice), indice),
    acierto: `¡Correcto! ${textos[indice]} significa «${frases[indice][0]}».`,
    error: `Todavía no. «${frases[indice][0]}» se dice ${textos[indice]}. Puedes elegir otra opción.`
  };
};

const ejercicioReconocer = (frases, indice, curso) => {
  const texto = marcarIdioma(fraseEnIdioma(frases[indice], curso.id), curso);
  const significados = frases.map((frase) => frase[0]);
  return {
    titulo: '¿Qué significa?',
    consigna: 'Elige el significado en español.',
    pregunta: texto,
    opciones: armarOpciones(significados[indice], elegirOtras(significados, indice), indice),
    acierto: `¡Correcto! ${texto} significa «${significados[indice]}».`,
    error: `Todavía no. ${texto} significa «${significados[indice]}». Puedes elegir otra opción.`
  };
};

// Palabra más larga de la frase, sin contar la primera para no perder la mayúscula.
const palabraParaCompletar = (texto) => {
  const palabras = texto.replace(/[¿?¡!.,]/g, ' ').split(/\s+/).filter(Boolean);
  return palabras.slice(1).reduce((mayor, palabra) => (palabra.length > mayor.length ? palabra : mayor), '');
};

const ejercicioCompletar = (frases, indice, curso) => {
  const textos = frases.map((frase) => frase[COLUMNA_IDIOMA[curso.id]]);
  const palabras = textos.map(palabraParaCompletar);
  if (curso.id === 'chino' || palabras[indice] === '' || new Set(palabras.filter(Boolean)).size < 3) {
    return ejercicioLeer(frases, indice, curso);
  }
  const completa = marcarIdioma(textos[indice], curso);
  const validas = palabras.map((palabra) => (palabra === '' ? palabras[indice] : palabra));
  return {
    titulo: 'Completa la frase',
    consigna: `Elige la palabra que falta para decir «${frases[indice][0]}».`,
    pregunta: marcarIdioma(textos[indice].replace(palabras[indice], '___'), curso),
    opciones: armarOpciones(marcarIdioma(palabras[indice], curso), elegirOtras(validas, indice).map((palabra) => marcarIdioma(palabra, curso)), indice),
    acierto: `¡Correcto! ${completa} significa «${frases[indice][0]}».`,
    error: `Todavía no. La frase completa es ${completa}. Puedes elegir otra opción.`
  };
};

// Variante de completar: reconoce la frase sin ayuda de la traducción.
const ejercicioLeer = (frases, indice, curso) => {
  const columna = COLUMNA_IDIOMA[curso.id];
  const lecturas = frases.map((frase) => marcarIdioma(frase[columna], curso));
  const pregunta = curso.id === 'chino' ? marcarIdioma(frases[indice][columna + 1], curso) : `Situación: «${frases[indice][0]}»`;
  return {
    titulo: curso.id === 'chino' ? 'Lee los caracteres' : 'Elige la frase',
    consigna: curso.id === 'chino' ? 'Selecciona el pinyin que corresponde.' : 'Selecciona la frase adecuada.',
    pregunta,
    opciones: armarOpciones(lecturas[indice], elegirOtras(lecturas, indice), indice),
    acierto: `¡Correcto! ${marcarIdioma(fraseEnIdioma(frases[indice], curso.id), curso)} significa «${frases[indice][0]}».`,
    error: `Todavía no. La opción correcta es ${lecturas[indice]}. Puedes elegir otra opción.`
  };
};

const TIPOS_DE_EJERCICIO = [ejercicioTraducir, ejercicioReconocer, ejercicioCompletar];


/* ---------------------------------------------------------------------
   3. LECCIONES Y UNIDADES
   --------------------------------------------------------------------- */

const armarTeoria = (leccion, curso, claseEjemplo) => ({
  titulo: `Aprende: ${leccion.titulo.toLowerCase()}`,
  html: `<p>${leccion.uso}</p>${leccion.frases.map((frase) =>
    `<p class="${claseEjemplo}">${marcarIdioma(fraseEnIdioma(frase, curso.id), curso)} <span>→ ${frase[0]}</span></p>`).join('')}`
});

const armarLeccionTematica = (leccion, curso, claseEjemplo) => ({
  titulo: leccion.titulo,
  descripcion: leccion.descripcion,
  consejo: `${marcarIdioma(fraseEnIdioma(leccion.frases[0], curso.id), curso)} significa «${leccion.frases[0][0]}». ${leccion.uso}`,
  teoria: armarTeoria(leccion, curso, claseEjemplo),
  ejercicios: leccion.frases.map((_, indice) => TIPOS_DE_EJERCICIO[indice % TIPOS_DE_EJERCICIO.length](leccion.frases, indice, curso))
});

// Convierte en ejercicios los ejemplos que ya tiene la teoría de una lección.
const ejerciciosDeEjemplos = (leccion) => {
  const ejemplos = [...leccion.teoria.html.matchAll(/(<span lang="[a-z]+">.*?<\/span>) <span>→ (.*?)<\/span>/g)]
    .filter((ejemplo) => !leccion.ejercicios.some((ejercicio) => ejercicio.pregunta === ejemplo[1]));
  const significados = ejemplos.map((ejemplo) => ejemplo[2]);
  if (new Set(significados).size < 3) {
    return [];
  }
  return ejemplos.slice(0, 3).map(([, texto, significado], indice) => ({
    titulo: '¿Qué significa?',
    consigna: 'Elige el significado en español.',
    pregunta: texto,
    opciones: armarOpciones(significado, elegirOtras(significados, indice), indice),
    acierto: `¡Correcto! ${texto} significa «${significado}».`,
    error: `Todavía no. ${texto} significa «${significado}». Puedes elegir otra opción.`
  }));
};

const reforzarLeccion = (leccion) => ({ ...leccion, ejercicios: [...leccion.ejercicios, ...ejerciciosDeEjemplos(leccion)] });

const reforzarUnidad = (unidad) => ({ ...unidad, lecciones: unidad.lecciones.map(reforzarLeccion) });

// Busca la clase de ejemplos que ya usa el curso para mantener su diseño.
const claseDeEjemplos = (curso) => {
  const html = curso.unidades.flatMap((unidad) => unidad.lecciones).map((leccion) => leccion.teoria.html).join('');
  return html.match(/class="(ejemplo-[a-z]+)"/)?.[1] ?? 'ejemplo-idioma';
};

// Última lección de una unidad: mezcla frases de todas sus lecciones.
const repasoDeTema = (tema) => ({
  titulo: `Repaso: ${tema.titulo.toLowerCase()}`,
  descripcion: 'Practica todo lo aprendido en la unidad',
  uso: 'Repasa las frases principales de la unidad antes de seguir.',
  frases: tema.lecciones.flatMap(({ frases }) => [frases[1], frases[3], frases[5]])
});

const unidadesTematicas = (curso, nivelId) => {
  const claseEjemplo = claseDeEjemplos(curso);
  return TEMAS.filter((tema) => tema.nivel === nivelId).map((tema) => ({
    titulo: tema.titulo,
    descripcion: tema.descripcion,
    nivel: tema.nivel,
    lecciones: [...tema.lecciones, repasoDeTema(tema)].map((leccion) => armarLeccionTematica(leccion, curso, claseEjemplo))
  }));
};

// Cierre de los niveles que no tienen un repaso propio en su archivo de curso.
const unidadDeRepaso = (curso, nivel) => ({
  titulo: 'Repaso',
  descripcion: 'Combina lo aprendido en todo el nivel.',
  nivel: nivel.id,
  lecciones: [armarLeccionTematica({
    titulo: `Repaso del nivel ${nivel.nombre}`,
    descripcion: 'Comprueba lo que aprendiste en este nivel',
    uso: 'Este repaso mezcla frases de todas las unidades del nivel.',
    frases: TEMAS.filter((tema) => tema.nivel === nivel.id).flatMap((tema) => tema.lecciones.map(({ frases }) => frases[2]))
  }, curso, claseDeEjemplos(curso))]
});

// Ordena las unidades por nivel. El repaso de un nivel queda siempre como cierre.
const ordenarUnidades = (curso) => curso.niveles.flatMap((nivel) => {
  const propias = curso.unidades.filter((unidad) => unidad.nivel === nivel.id);
  const repaso = propias.filter((unidad) => unidad.titulo === 'Repaso');
  const resto = propias.filter((unidad) => unidad.titulo !== 'Repaso');
  const cierre = repaso.length > 0 ? repaso.map(reforzarUnidad) : [unidadDeRepaso(curso, nivel)];
  return [...resto.map(reforzarUnidad), ...unidadesTematicas(curso, nivel.id), ...cierre];
});

// Numera unidades y lecciones de corrido, en el orden en que se recorren.
const numerarCurso = (unidades) => {
  let numeroLeccion = 0;
  return unidades.map((unidad, indice) => ({
    ...unidad,
    id: indice + 1,
    lecciones: unidad.lecciones.map((leccion) => {
      numeroLeccion += 1;
      return { ...leccion, id: numeroLeccion };
    })
  }));
};

// Suma las unidades temáticas a un curso de js/datos/cursos.
const ampliarCurso = (curso) => ({ ...curso, unidades: numerarCurso(ordenarUnidades(curso)) });
