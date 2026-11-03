/* =====================================================================
   leccion.js  -  LECCIÓN INTERACTIVA Y RESULTADOS
   
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. ESTADO DE LA VISTA
   Lo guardado en localStorage dura para siempre; esto solo dura lo que dura
   la página, porque describe lo que está pasando ahora en la pantalla.
   --------------------------------------------------------------------- */

let usuarioActivo = null;
let cursoActual = null;
let leccionActual = null;
let pasoVisible = 0;
let opcionElegida = null;      // Índice de la opción seleccionada, o null


/* ---------------------------------------------------------------------
   2. ELEMENTOS DE LA PÁGINA
   --------------------------------------------------------------------- */

const contenedorPrincipal = document.querySelector('#contenido-leccion');
const contenedorPaso = document.querySelector('#paso-leccion');
const tituloLeccion = document.querySelector('#titulo-leccion');
const textoConsejo = document.querySelector('#consejo-leccion');
const barraAvance = document.querySelector('#progreso-leccion');
const etiquetaAvance = document.querySelector('#etiqueta-progreso');
const textoOportunidades = document.querySelector('#oportunidades');
const botonSalir = document.querySelector('#salir-leccion');


/* ---------------------------------------------------------------------
   3. DIRECCIÓN DEL NAVEGADOR
   --------------------------------------------------------------------- */

const leerParametros = () => {
  const parametros = new URLSearchParams(window.location.search);
  return {
    cursoId: parametros.get('curso'),
    leccionId: Number(parametros.get('leccion')),
    paso: parametros.has('paso') ? Number(parametros.get('paso')) : null,
    vista: parametros.get('vista'),
    repetir: parametros.get('repetir') === '1'
  };
};

const direccionPaso = (paso) => urlLeccion(cursoActual.id, leccionActual.id, `&paso=${paso}`);

const direccionResultado = () => urlLeccion(cursoActual.id, leccionActual.id, '&vista=resultado');

// Agrega al historial, para que Atrás y Adelante recorran los pasos.
const anunciarPaso = (paso) => window.history.pushState(null, '', direccionPaso(paso));

// Reemplaza la dirección actual sin sumar una entrada al historial.
const corregirDireccion = (direccion) => window.history.replaceState(null, '', direccion);


/* ---------------------------------------------------------------------
   4. PREPARACIÓN DE LA PÁGINA SEGÚN EL CURSO
   --------------------------------------------------------------------- */

// Cada idioma conserva su hoja de estilos del TP1, y se carga la que corresponde.
const aplicarEstiloDelCurso = () => {
  contenedorPrincipal.classList.add(`leccion-${cursoActual.id}`);
  document.head.appendChild(crearElemento('link', { atributos: { rel: 'stylesheet', href: `../css/pages/leccion_${cursoActual.id}.css` } }));
};

const mostrarDatosDeLeccion = () => {
  const texto = `${cursoActual.nombre} · Lección ${leccionActual.id}: ${leccionActual.titulo}`;
  document.title = `${texto} - LingoWeb`;
  tituloLeccion.textContent = texto;
  textoConsejo.innerHTML = leccionActual.consejo;
  botonSalir.setAttribute('href', urlMapa(cursoActual.id, leccionActual.id));
};


/* ---------------------------------------------------------------------
   5. ACCESO A LOS DATOS DEL INTENTO
   --------------------------------------------------------------------- */

const totalDePasos = () => leccionActual.ejercicios.length + 1;

const registroActual = () => asegurarRegistro(usuarioActivo, cursoActual.id, leccionActual.id);

const intentoActual = () => registroActual().intento;

// Crea un intento. Si la cuenta tiene una "Oportunidad extra", se gasta acá.
const crearIntento = () => {
  const extra = usuarioActivo.inventario.vida_extra > 0 ? 1 : 0;
  usuarioActivo.inventario.vida_extra -= extra;
  registroActual().intento = {
    paso: 0,                   // Paso más lejano habilitado
    errores: 0,
    xpPerdida: 0,
    oportunidades: REGLAS.OPORTUNIDADES_POR_LECCION + extra,
    puestoInicial: obtenerPuesto(usuarioActivo)
  };
  guardarUsuario(usuarioActivo);
};


/* ---------------------------------------------------------------------
   6. ENCABEZADO: AVANCE Y OPORTUNIDADES
   --------------------------------------------------------------------- */

// La barra sigue al paso que se está viendo: sube al responder bien y baja si se
// vuelve a un paso anterior con el botón Atrás del navegador.
const actualizarAvance = () => {
  const intento = intentoActual();
  const pasoResuelto = intento && pasoVisible > 0 && pasoVisible < intento.paso;
  barraAvance.max = totalDePasos();
  barraAvance.value = intento ? pasoVisible + (pasoResuelto ? 1 : 0) : totalDePasos();
  etiquetaAvance.textContent = intento ? `Paso ${pasoVisible + 1} de ${totalDePasos()}` : 'Lección finalizada';
  textoOportunidades.textContent = intento ? `❤️ Oportunidades restantes: ${intento.oportunidades}` : '';
};


/* ---------------------------------------------------------------------
   7. PASO 0: TEORÍA
   --------------------------------------------------------------------- */

const renderizarTeoria = () => {
  const { teoria } = leccionActual;
  const tarjeta = crearElemento('article', { clase: 'tarjeta tarjeta-leccion' });
  const boton = crearElemento('button', { clase: 'btn btn-primario', texto: 'Ir a los ejercicios', atributos: { type: 'button' } });

  boton.addEventListener('click', () => {
    intentoActual().paso = Math.max(intentoActual().paso, 1);
    guardarUsuario(usuarioActivo);
    irAPaso(1);
  });

  tarjeta.append(crearElemento('h2', { texto: teoria.titulo }), crearConHtml('div', '', teoria.html), boton);
  vaciar(contenedorPaso).appendChild(tarjeta);
};


/* ---------------------------------------------------------------------
   8. EJERCICIOS: OPCIONES
   Son botones y no radios porque la consigna pide poder quitar una opción ya
   seleccionada, y un radio no se puede destildar. aria-pressed le dice a los
   lectores de pantalla si el botón está elegido.
   --------------------------------------------------------------------- */

// Elige una opción o, si ya estaba elegida, la quita.
const alternarOpcion = (indice) => {
  opcionElegida = opcionElegida === indice ? null : indice;
  contenedorPaso.querySelectorAll('.opcion-ejercicio').forEach((boton, posicion) => {
    boton.setAttribute('aria-pressed', String(posicion === opcionElegida));
    boton.classList.remove('opcion-incorrecta');
    boton.querySelector('.marca-opcion')?.remove();
  });
};

const crearOpcion = (opcion, indice) => {
  const boton = crearElemento('button', {
    clase: 'opcion-ejercicio',
    atributos: { type: 'button', 'aria-pressed': 'false', ...(opcion.idioma ? { lang: opcion.idioma } : {}) }
  });
  boton.innerHTML = opcion.texto;
  boton.addEventListener('click', () => alternarOpcion(indice));
  return boton;
};

// Marca el resultado sobre la opción con texto, no solo con color.
const marcarOpcion = (boton, correcta) => {
  boton.classList.add(correcta ? 'opcion-correcta' : 'opcion-incorrecta');
  boton.querySelector('.marca-opcion')?.remove();
  boton.appendChild(crearElemento('span', { clase: 'marca-opcion', texto: correcta ? '✓ Correcta' : '✗ Incorrecta' }));
};

const bloquearOpciones = () => {
  contenedorPaso.querySelectorAll('.opcion-ejercicio').forEach((boton) => {
    boton.disabled = true;
  });
};


/* ---------------------------------------------------------------------
   9. EJERCICIOS: MENSAJES
   Cuatro estados: pendiente, correcta, incorrecta y lección finalizada. Cada
   uno tiene su texto, para no depender solo del color.
   --------------------------------------------------------------------- */

const mostrarFeedback = (html, clase) => {
  const zona = contenedorPaso.querySelector('.zona-feedback');
  zona.className = `zona-feedback mensaje-feedback ${clase}`;
  zona.innerHTML = html;
};

const mostrarPendiente = () => mostrarFeedback('Pendiente: selecciona una opción para comprobarla.', 'mensaje');

const mostrarCorrecta = (ejercicio) => mostrarFeedback(ejercicio.acierto, 'feedback-correcto');

const mostrarIncorrecta = (ejercicio, oportunidades, xpRestada) => {
  const penalizacion = xpRestada > 0 ? ` Se restaron ${xpRestada} XP.` : '';
  mostrarFeedback(`${ejercicio.error} Te quedan ${oportunidades} ${oportunidades === 1 ? 'oportunidad' : 'oportunidades'}.${penalizacion}`, 'feedback-incorrecto');
};


/* ---------------------------------------------------------------------
   10. EJERCICIOS: COMPROBAR RESPUESTA
   --------------------------------------------------------------------- */

const manejarAcierto = (ejercicio, botonComprobar, botonSeguir) => {
  const intento = intentoActual();
  intento.paso = Math.max(intento.paso, pasoVisible + 1);
  guardarUsuario(usuarioActivo);

  marcarOpcion(contenedorPaso.querySelectorAll('.opcion-ejercicio')[opcionElegida], true);
  bloquearOpciones();
  mostrarCorrecta(ejercicio);
  botonComprobar.hidden = true;
  botonSeguir.hidden = false;
  botonSeguir.focus();
  actualizarAvance();
};

const manejarError = (ejercicio) => {
  const intento = intentoActual();
  const xpRestada = restarExperiencia(usuarioActivo, REGLAS.XP_PENALIZACION_ERROR);
  intento.oportunidades -= 1;
  intento.errores += 1;
  intento.xpPerdida += xpRestada;
  guardarUsuario(usuarioActivo);
  renderizarNavbar();

  if (intento.oportunidades === 0) {
    finalizarSinExito();
    return;
  }

  marcarOpcion(contenedorPaso.querySelectorAll('.opcion-ejercicio')[opcionElegida], false);
  opcionElegida = null;
  contenedorPaso.querySelectorAll('.opcion-ejercicio').forEach((boton) => boton.setAttribute('aria-pressed', 'false'));
  mostrarIncorrecta(ejercicio, intento.oportunidades, xpRestada);
  actualizarAvance();
};

const comprobarRespuesta = (ejercicio, botonComprobar, botonSeguir) => {
  if (opcionElegida === null) {
    mostrarPendiente();
    return;
  }
  if (ejercicio.opciones[opcionElegida].correcta) {
    manejarAcierto(ejercicio, botonComprobar, botonSeguir);
  } else {
    manejarError(ejercicio);
  }
};


/* ---------------------------------------------------------------------
   11. EJERCICIOS: DIBUJO DEL PASO
   --------------------------------------------------------------------- */

// Vuelve a mostrar la respuesta correcta de un ejercicio ya resuelto. Pasa al
// volver atrás o al recargar, y evita que se pueda responder dos veces.
const mostrarEjercicioResuelto = (ejercicio, botonComprobar, botonSeguir) => {
  const correcta = ejercicio.opciones.findIndex((opcion) => opcion.correcta);
  marcarOpcion(contenedorPaso.querySelectorAll('.opcion-ejercicio')[correcta], true);
  bloquearOpciones();
  mostrarCorrecta(ejercicio);
  botonComprobar.hidden = true;
  botonSeguir.hidden = false;
};

const renderizarEjercicio = (ejercicio) => {
  const esUltimo = pasoVisible === totalDePasos() - 1;
  const tarjeta = crearElemento('article', { clase: 'tarjeta tarjeta-leccion' });
  const formulario = crearElemento('div', { clase: 'formulario-ejercicio' });
  const zona = crearElemento('p', { clase: 'zona-feedback', atributos: { role: 'status' } });
  const acciones = crearElemento('div', { clase: 'acciones-paso' });
  const comprobar = crearElemento('button', { clase: 'btn btn-primario', texto: 'Comprobar respuesta', atributos: { type: 'button' } });
  const seguir = crearElemento('button', { clase: 'btn btn-secundario', texto: esUltimo ? 'Ver resultado' : 'Siguiente paso', atributos: { type: 'button', hidden: '' } });

  comprobar.addEventListener('click', () => comprobarRespuesta(ejercicio, comprobar, seguir));
  seguir.addEventListener('click', () => (esUltimo ? finalizarConExito() : irAPaso(pasoVisible + 1)));

  acciones.append(comprobar, seguir);
  formulario.append(
    crearConHtml('p', 'pregunta-texto', ejercicio.pregunta),
    ...ejercicio.opciones.map(crearOpcion)
  );
  tarjeta.append(
    crearElemento('h2', { texto: ejercicio.titulo }),
    crearElemento('p', { texto: ejercicio.consigna }),
    formulario, zona, acciones
  );
  vaciar(contenedorPaso).appendChild(tarjeta);

  if (pasoVisible < intentoActual().paso) {
    mostrarEjercicioResuelto(ejercicio, comprobar, seguir);
  }
};


/* ---------------------------------------------------------------------
   12. NAVEGACIÓN ENTRE PASOS
   --------------------------------------------------------------------- */

const renderizarPaso = (paso) => {
  pasoVisible = paso;
  opcionElegida = null;
  actualizarAvance();
  if (paso === 0) {
    renderizarTeoria();
  } else {
    renderizarEjercicio(leccionActual.ejercicios[paso - 1]);
  }
};

const irAPaso = (paso) => {
  anunciarPaso(paso);
  renderizarPaso(paso);
  window.scrollTo(0, 0);
};


/* ---------------------------------------------------------------------
   13. RESULTADOS
   --------------------------------------------------------------------- */

// Calcula el premio. Repetir una lección da poca experiencia para que no se
// pueda subir en el ranking haciendo siempre la misma.
const calcularPremio = (primeraVez, errores) => {
  const base = primeraVez ? REGLAS.XP_LECCION : REGLAS.XP_REPASO;
  const bonus = primeraVez && errores === 0 ? REGLAS.XP_BONUS_SIN_ERRORES : 0;
  const multiplicador = usuarioActivo.inventario.doble_xp > 0 ? 2 : 0;
  return {
    xp: (base + bonus) * Math.max(multiplicador, 1),
    gemas: primeraVez ? REGLAS.GEMAS_LECCION : 0,
    usoDoble: multiplicador > 0
  };
};

const crearDatoResultado = (valor, etiqueta) => {
  const dato = crearElemento('div', { clase: 'resultado-dato' });
  dato.append(crearElemento('strong', { texto: valor }), crearElemento('span', { texto: etiqueta }));
  return dato;
};

const crearAccionesResultado = (conReintento) => {
  const acciones = crearElemento('nav', { clase: 'navegacion-leccion', atributos: { 'aria-label': 'Qué hacer ahora' } });
  const lecciones = leccionesDelCurso(cursoActual);
  const siguiente = lecciones[lecciones.indexOf(leccionActual) + 1];

  acciones.append(
    crearElemento('a', { clase: 'btn btn-secundario', texto: t('volverMapa'), atributos: { href: urlMapa(cursoActual.id, leccionActual.id) } }),
    crearElemento('a', { clase: 'btn btn-contorno', texto: t('volverPanel'), atributos: { href: '../mis_cursos/mis_cursos.html' } })
  );
  if (conReintento) {
    acciones.appendChild(crearElemento('a', { clase: 'btn btn-primario', texto: 'Reintentar', atributos: { href: urlLeccion(cursoActual.id, leccionActual.id, '&repetir=1') } }));
  } else if (siguiente) {
    // Si la siguiente lección es de otro nivel, el botón lo anuncia.
    const nivelSiguiente = nivelDeLeccion(cursoActual, siguiente.id);
    const cambiaDeNivel = nivelSiguiente.id !== nivelDeLeccion(cursoActual, leccionActual.id).id;
    acciones.appendChild(crearElemento('a', {
      clase: 'btn btn-primario',
      texto: cambiaDeNivel ? `Seguir con ${nivelSiguiente.nombre}` : 'Siguiente lección',
      atributos: { href: cambiaDeNivel ? `${urlMapa(cursoActual.id).split('#')[0]}?nivel=${nivelSiguiente.id}` : urlLeccion(cursoActual.id, siguiente.id) }
    }));
  }
  return acciones;
};

// Cuenta cómo cambió la posición en la liga durante la lección.
const textoCambioDePuesto = ({ puestoAntes, puestoDespues }) => {
  const liga = obtenerLiga(usuarioActivo.liga).nombre;
  if (puestoDespues < puestoAntes) {
    return `⬆ Subiste del puesto #${puestoAntes} al #${puestoDespues} en ${liga}.`;
  }
  if (puestoDespues > puestoAntes) {
    return `⬇ Bajaste del puesto #${puestoAntes} al #${puestoDespues} en ${liga}.`;
  }
  return `➡ Te mantienes en el puesto #${puestoDespues} de ${liga}.`;
};

const renderizarResultado = (resultado) => {
  const tarjeta = crearElemento('article', { clase: 'tarjeta tarjeta-leccion' });
  const datos = crearElemento('div', { clase: 'resultado-datos' });
  const precision = Math.round((resultado.aciertos / (resultado.aciertos + resultado.errores)) * 100);

  datos.append(
    crearDatoResultado(`${precision}%`, 'de precisión'),
    crearDatoResultado(`+${resultado.xp}`, 'XP obtenidos'),
    crearDatoResultado(`-${resultado.xpPerdida}`, 'XP por errores'),
    crearDatoResultado(`+${resultado.gemas}`, 'gemas')
  );
  tarjeta.append(
    crearElemento('h2', { texto: '🎉 Lección finalizada' }),
    crearElemento('p', { texto: `Respondiste ${resultado.aciertos} ejercicios con ${resultado.errores} ${resultado.errores === 1 ? 'error' : 'errores'}. Realizada el ${mostrarFecha(resultado.fecha)}.` }),
    datos
  );
  if (resultado.puestoAntes) {
    tarjeta.appendChild(crearElemento('p', { clase: 'resumen-titulo', texto: textoCambioDePuesto(resultado) }));
  }
  const nivel = nivelDeLeccion(cursoActual, leccionActual.id);
  const ultimaDelNivel = leccionesDelNivel(cursoActual, nivel.id).pop() === leccionActual;
  if (ultimaDelNivel && nivelCompletado(usuarioActivo, cursoActual, nivel.id)) {
    tarjeta.appendChild(crearElemento('p', { clase: 'resumen-titulo', texto: `🎖️ ¡Completaste el nivel ${nombreNivel(nivel)}!` }));
  }
  vaciar(contenedorPaso).append(tarjeta, crearAccionesResultado(false));
  actualizarAvance();
};

const finalizarConExito = () => {
  const registro = registroActual();
  const primeraVez = !registro.completada;
  const { errores, xpPerdida, puestoInicial } = registro.intento;
  const { xp, gemas, usoDoble } = calcularPremio(primeraVez, errores);

  if (usoDoble) {
    usuarioActivo.inventario.doble_xp -= 1;
  }
  sumarExperiencia(usuarioActivo, xp);
  usuarioActivo.gemas += gemas;
  registrarActividadDiaria(usuarioActivo);

  registro.completada = true;
  registro.intento = null;
  // Lo acumulado es lo que se devuelve si después se reinicia la lección.
  registro.xpAcumulada += xp;
  registro.gemasAcumuladas += gemas;
  registro.resultado = {
    aciertos: leccionActual.ejercicios.length,
    errores, xp, xpPerdida, gemas,
    puestoAntes: puestoInicial,
    puestoDespues: obtenerPuesto(usuarioActivo),
    fecha: fechaHoy(),
    repeticiones: (registro.resultado?.repeticiones ?? -1) + 1
  };
  guardarUsuario(usuarioActivo);

  // La barra superior muestra la racha y la XP: se redibuja con los valores nuevos.
  renderizarNavbar();
  corregirDireccion(direccionResultado());
  renderizarResultado(registro.resultado);
  window.scrollTo(0, 0);
};

// Sin oportunidades, el intento se descarta y no se entrega experiencia.
const finalizarSinExito = () => {
  const tarjeta = crearElemento('article', { clase: 'tarjeta tarjeta-leccion' });
  tarjeta.append(
    crearElemento('h2', { texto: 'Lección no superada' }),
    crearElemento('p', { texto: `Te quedaste sin oportunidades. Este intento restó ${intentoActual().xpPerdida} XP, pero puedes volver a intentarlo cuando quieras.` })
  );
  registroActual().intento = null;
  guardarUsuario(usuarioActivo);
  corregirDireccion(urlLeccion(cursoActual.id, leccionActual.id));
  vaciar(contenedorPaso).append(tarjeta, crearAccionesResultado(true));
  actualizarAvance();
};


/* ---------------------------------------------------------------------
   14. SALIDA SEGURA
   --------------------------------------------------------------------- */

// Si hay un intento sin terminar, avisa qué va a pasar con el avance. Como cada
// paso ya se guardó, salir nunca hace perder lo respondido correctamente.
const manejarSalida = async (evento) => {
  const intento = intentoActual();
  if (!intento) {
    return;
  }
  evento.preventDefault();
  const salir = await confirmarAccion(
    `Tu avance quedará guardado en el paso ${Math.min(intento.paso + 1, totalDePasos())} de ${totalDePasos()}. Podrás continuar desde el mapa del curso.`,
    'Salir al mapa',
    'Seguir aquí'
  );
  if (salir) {
    window.location.href = botonSalir.href;
  }
};


/* ---------------------------------------------------------------------
   15. CARGA: DECIDE QUÉ MOSTRAR SEGÚN LA DIRECCIÓN
   --------------------------------------------------------------------- */

// Mensaje para direcciones inválidas o lecciones bloqueadas, con salida clara.
const mostrarSinAcceso = (titulo, texto, href) => {
  document.querySelector('.cabecera-leccion').hidden = true;
  document.querySelector('.sidebar').hidden = true;
  tituloLeccion.textContent = '';
  vaciar(contenedorPaso).appendChild(crearEstadoVacio(titulo, texto, { texto: t('volverMapa'), href }));
};

// También corre al usar Atrás y Adelante, por eso vuelve a leer la dirección.
const cargarDesdeDireccion = () => {
  const { paso, vista, repetir } = leerParametros();
  const registro = registroActual();

  if (vista === 'resultado' && registro.resultado) {
    renderizarResultado(registro.resultado);
    return;
  }

  // Una lección ya terminada no se reabre sola: repetirla es una elección.
  if (!registro.intento) {
    if (registro.completada && !repetir) {
      corregirDireccion(direccionResultado());
      renderizarResultado(registro.resultado);
      return;
    }
    crearIntento();
  }

  const { paso: pasoHabilitado } = registro.intento;

  // Todos los ejercicios respondidos, pero se cerró antes de ver el resultado.
  if (pasoHabilitado >= totalDePasos()) {
    finalizarConExito();
    return;
  }

  // No se puede saltar a un ejercicio escribiendo otro número en la dirección.
  const destino = paso === null ? pasoHabilitado : Math.min(Math.max(paso, 0), pasoHabilitado);
  corregirDireccion(direccionPaso(destino));
  renderizarPaso(destino);
};

const iniciarVista = () => {
  usuarioActivo = exigirSesion();
  if (!usuarioActivo) {
    return;
  }

  const { cursoId, leccionId } = leerParametros();
  cursoActual = obtenerCurso(cursoId);
  leccionActual = cursoActual ? obtenerLeccion(cursoActual, leccionId) : null;

  if (!leccionActual) {
    mostrarSinAcceso('No encontramos esa lección', 'La dirección no corresponde a una lección disponible.', '../mis_cursos/mis_cursos.html');
    return;
  }

  if (estadoLeccion(usuarioActivo, cursoActual, leccionActual.id) === 'bloqueada') {
    mostrarSinAcceso('Esta lección todavía está bloqueada', 'Completa las lecciones anteriores o, desde el mapa, elige empezar por este nivel.', urlMapa(cursoActual.id, leccionActual.id));
    return;
  }

  aplicarEstiloDelCurso();
  mostrarDatosDeLeccion();
  botonSalir.addEventListener('click', manejarSalida);
  window.addEventListener('popstate', cargarDesdeDireccion);
  cargarDesdeDireccion();
};


/* ---------------------------------------------------------------------
   16. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

iniciarVista();
