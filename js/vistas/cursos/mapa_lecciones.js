/* =====================================================================
   mapa_lecciones.js  -  MAPA DEL CURSO Y OPINIONES
   Archivo: js/vistas/cursos/mapa_lecciones.js
   Es el MISMO archivo para todos los mapas: cada idioma tiene su HTML y su
   CSS, y el curso se detecta desde la dirección.

   Dibuja las unidades y lecciones con su estado (completada, en curso o
   bloqueada) y la sección para valorar el curso y dejar comentarios.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. CURSO SELECCIONADO
   --------------------------------------------------------------------- */

// Lee el curso del nombre del archivo: mapa_lecciones_aleman.html -> aleman.
const detectarCurso = () => {
  const coincidencia = window.location.pathname.match(/mapa_lecciones_(\w+)\.html/);
  return coincidencia ? obtenerCurso(coincidencia[1]) : undefined;
};

// Zona donde se informa el resultado de reiniciar una lección.
const zonaMensajeMapa = crearZonaMensaje();

// Apariencia de cada estado. El texto evita depender solo del color o el ícono.
const ESTADOS_LECCION = Object.freeze({
  completada: { clase: 'estado-completado', icono: '✅', texto: 'Completada' },
  en_curso: { clase: 'estado-actual', icono: '📍', texto: 'En curso' },
  bloqueada: { clase: 'estado-bloqueado', icono: '🔒', texto: 'Bloqueada' }
});


/* ---------------------------------------------------------------------
   2. PANEL LATERAL DEL CURSO
   --------------------------------------------------------------------- */

const renderizarPanelCurso = (usuario, curso, nivel) => {
  const porcentaje = porcentajeNivel(usuario, curso, nivel.id);
  const titulo = crearElemento('h2', { clase: 'titulo-curso' });
  titulo.append(crearBandera(curso, 'bandera-mini'), curso.nombre);
  vaciar(document.querySelector('.sidebar-widget')).append(
    titulo,
    crearElemento('p', { texto: `${t('nivel')}: ${nombreNivel(nivel)}` }),
    crearElemento('p', { texto: `${t('progreso')}: ${porcentaje}%` }),
    crearBarraProgreso(porcentaje, `Progreso de ${nivel.nombre} en ${curso.nombre}`),
    crearElemento('p', { clase: 'mt-md', texto: `Curso completo: ${porcentajeCurso(usuario, curso)}%` })
  );
};


/* ---------------------------------------------------------------------
   3. ACCIONES DE CADA LECCIÓN
   --------------------------------------------------------------------- */

// Antes de salir guarda la lección en la dirección. Así, al volver con Atrás,
// el mapa regresa a la misma posición.
const recordarPosicion = (leccion) => {
  window.history.replaceState(null, '', `#leccion-${leccion.id}`);
};

const crearEnlaceLeccion = (clase, texto, href, leccion) => {
  const enlace = crearElemento('a', { clase: `btn ${clase} btn-curso`, texto, atributos: { href } });
  enlace.addEventListener('click', () => recordarPosicion(leccion));
  return enlace;
};

// Una lección bloqueada no abre: explica qué falta para desbloquearla.
const crearBotonBloqueado = (curso, leccion, tarjeta) => {
  const boton = crearElemento('button', {
    clase: 'btn btn-deshabilitado btn-curso',
    texto: 'Bloqueada',
    atributos: { type: 'button', 'aria-disabled': 'true' }
  });
  const lecciones = leccionesDelCurso(curso);
  const anterior = lecciones[lecciones.indexOf(leccion) - 1];

  boton.addEventListener('click', () => {
    let zona = tarjeta.querySelector('.mensaje-bloqueo');
    if (!zona) {
      zona = crearZonaMensaje();
      tarjeta.classList.add('con-mensaje');
      tarjeta.appendChild(zona);
    }
    mostrarMensaje(zona, `Completa la lección ${anterior.id}, «${anterior.titulo}», para desbloquear esta.`, 'info');
    zona.classList.add('mensaje-bloqueo');
  });
  return boton;
};

// Retroceder pide confirmación porque descuenta puntos. Al terminar redibuja la
// vista: las barras se achican, la lección vuelve a estar pendiente y las
// siguientes se bloquean.
const manejarRetroceso = async (usuario, curso, leccion) => {
  const confirmado = await confirmarAccion(
    `Vas a reiniciar la lección ${leccion.id} y las siguientes. Se descontarán la experiencia y las gemas que ganaste con ellas, y podrías bajar en el ranking.`,
    'Reiniciar',
    'Cancelar'
  );
  if (!confirmado) {
    return;
  }

  const { xpQuitada, gemasQuitadas } = retrocederLeccion(usuario, curso, leccion.id);
  if (!guardarUsuario(usuario)) {
    mostrarMensaje(zonaMensajeMapa, 'No pudimos guardar el cambio. Tu avance sigue igual.', 'error');
    return;
  }

  renderizarVista(usuario, curso, nivelDeLeccion(curso, leccion.id));
  renderizarNavbar();
  mostrarMensaje(zonaMensajeMapa, `Reiniciaste desde la lección ${leccion.id}. Se restaron ${xpQuitada} XP y ${conPlural(gemasQuitadas, 'gema', 'gemas')}.`, 'exito');
  zonaMensajeMapa.scrollIntoView({ block: 'center' });
};

const crearBotonRetroceso = (usuario, curso, leccion) => {
  const boton = crearElemento('button', { clase: 'btn btn-contorno btn-curso', texto: 'Reiniciar', atributos: { type: 'button' } });
  boton.addEventListener('click', () => manejarRetroceso(usuario, curso, leccion));
  return boton;
};

const crearAccionesLeccion = (usuario, curso, leccion, tarjeta) => {
  const acciones = crearElemento('div', { clase: 'acciones-leccion' });
  const estado = estadoLeccion(usuario, curso, leccion.id);
  const registro = registroLeccion(usuario, curso.id, leccion.id);

  if (estado === 'bloqueada') {
    acciones.appendChild(crearBotonBloqueado(curso, leccion, tarjeta));
  } else if (estado === 'completada') {
    acciones.append(
      crearEnlaceLeccion('btn-secundario', 'Ver resultado', urlLeccion(curso.id, leccion.id, '&vista=resultado'), leccion),
      crearEnlaceLeccion('btn-contorno', registro.intento ? 'Seguir repaso' : 'Repetir', urlLeccion(curso.id, leccion.id, '&repetir=1'), leccion),
      crearBotonRetroceso(usuario, curso, leccion)
    );
  } else {
    acciones.appendChild(crearEnlaceLeccion('btn-primario', registro?.intento ? t('continuar') : t('comenzar'), urlLeccion(curso.id, leccion.id), leccion));
    if (registro?.intento) {
      acciones.appendChild(crearBotonRetroceso(usuario, curso, leccion));
    }
  }
  return acciones;
};


/* ---------------------------------------------------------------------
   4. UNIDADES Y LECCIONES
   --------------------------------------------------------------------- */

const crearTarjetaLeccion = (usuario, curso, leccion) => {
  const estado = estadoLeccion(usuario, curso, leccion.id);
  const { clase, icono, texto } = ESTADOS_LECCION[estado];
  const porcentaje = porcentajeLeccion(usuario, curso, leccion);

  const tarjeta = crearElemento('article', { clase: `tarjeta tarjeta-mapa ${clase}`, atributos: { id: `leccion-${leccion.id}` } });
  const izquierda = crearElemento('div', { clase: 'mapa-izq' });
  const info = crearElemento('div', { clase: 'info-leccion' });

  if (estado === 'en_curso') {
    info.appendChild(crearElemento('span', { clase: 'badge-actual', texto: 'Lección actual' }));
  }
  info.append(
    crearElemento('h3', { texto: `Lección ${leccion.id}: ${leccion.titulo}` }),
    crearConHtml('p', '', `${texto} · ${leccion.descripcion}`),
    crearBarraProgreso(porcentaje, `Progreso de la lección ${leccion.id} de ${curso.nombre}`)
  );
  izquierda.append(crearElemento('span', { clase: 'icono-estado', texto: icono, atributos: { 'aria-hidden': 'true' } }), info);
  tarjeta.append(izquierda, crearAccionesLeccion(usuario, curso, leccion, tarjeta));
  return tarjeta;
};

// El estado de la unidad sale de sus lecciones: completada si terminó todas,
// en curso si alguna está disponible y bloqueada en cualquier otro caso.
const estadoUnidad = (usuario, curso, unidad) => {
  const estados = unidad.lecciones.map((leccion) => estadoLeccion(usuario, curso, leccion.id));
  if (estados.every((estado) => estado === 'completada')) {
    return 'completada';
  }
  return estados.includes('en_curso') ? 'en_curso' : 'bloqueada';
};

const crearUnidad = (usuario, curso, unidad) => {
  const seccion = crearElemento('section', { clase: 'unidad', atributos: { id: `unidad-${unidad.id}`, 'aria-labelledby': `titulo-unidad-${unidad.id}` } });
  const completas = unidad.lecciones.filter((l) => leccionCompletada(usuario, curso.id, l.id)).length;
  const { icono, texto } = ESTADOS_LECCION[estadoUnidad(usuario, curso, unidad)];

  seccion.append(
    crearElemento('h2', { texto: `Unidad ${unidad.id}: ${unidad.titulo}`, atributos: { id: `titulo-unidad-${unidad.id}` } }),
    crearElemento('p', { texto: unidad.descripcion }),
    crearElemento('p', { clase: 'estado-unidad', texto: `${icono} ${texto} · ${completas} de ${unidad.lecciones.length} lecciones completadas` }),
    ...unidad.lecciones.map((leccion) => crearTarjetaLeccion(usuario, curso, leccion))
  );
  return seccion;
};

// Pestañas de niveles. Son enlaces: el nivel queda en la dirección, así que
// recargar, Atrás y Adelante mantienen el nivel consultado.
const crearSelectorNiveles = (usuario, curso, nivelVisible) => {
  const selector = crearElemento('nav', { clase: 'selector-nivel', atributos: { 'aria-label': 'Niveles del curso' } });
  curso.niveles.forEach((nivel) => {
    const estado = nivelCompletado(usuario, curso, nivel.id) ? ' ✓' : nivelDisponible(usuario, curso, nivel.id) ? '' : ' 🔒';
    const enlace = crearElemento('a', {
      clase: `pestana-nivel${nivel.id === nivelVisible.id ? ' activa' : ''}`,
      texto: `${nivel.nombre}${estado}`,
      atributos: { href: `?nivel=${nivel.id}`, title: nivel.titulo }
    });
    if (nivel.id === nivelVisible.id) {
      enlace.setAttribute('aria-current', 'true');
    }
    selector.appendChild(enlace);
  });
  return selector;
};

// Empezar por un nivel más alto: lo abre y actualiza la vista.
const empezarNivel = (usuario, curso, nivel) => {
  elegirNivel(usuario, curso, nivel.id);
  if (!guardarUsuario(usuario)) {
    mostrarMensaje(zonaMensajeMapa, 'No pudimos abrir el nivel. Tu avance sigue igual.', 'error');
    return;
  }
  renderizarVista(usuario, curso, nivel);
  mostrarMensaje(zonaMensajeMapa, `Ya puedes empezar el nivel ${nivel.nombre}. Puedes volver a los anteriores cuando quieras.`, 'exito');
};

// Aviso del nivel: ofrece abrirlo si está cerrado o seguir si ya se terminó.
const crearAvisoNivel = (usuario, curso, nivel) => {
  const indice = curso.niveles.indexOf(nivel);
  if (!nivelDisponible(usuario, curso, nivel.id)) {
    const aviso = crearElemento('section', { clase: 'tarjeta aviso-nivel' });
    const boton = crearElemento('button', { clase: 'btn btn-primario', texto: 'Empezar por este nivel', atributos: { type: 'button' } });
    boton.addEventListener('click', () => empezarNivel(usuario, curso, nivel));
    aviso.append(
      crearElemento('h2', { texto: `Nivel ${nombreNivel(nivel)}` }),
      crearElemento('p', { texto: `Este nivel se abre al completar ${curso.niveles[indice - 1].nombre}. Si ya tienes conocimientos, puedes empezar directamente por él.` }),
      boton
    );
    return aviso;
  }
  const siguiente = curso.niveles[indice + 1];
  if (nivelCompletado(usuario, curso, nivel.id) && siguiente) {
    return crearEstadoVacio(`¡Completaste ${nivel.nombre}!`, `Ya puedes seguir con el nivel ${nombreNivel(siguiente)}.`, { texto: `Seguir con ${siguiente.nombre}`, href: `?nivel=${siguiente.id}` });
  }
  return null;
};

// Dibuja el nivel consultado y deja un contenedor para las opiniones.
const renderizarMapa = (usuario, curso, nivel) => {
  const seccion = vaciar(document.querySelector('.seccion-mapa'));
  seccion.append(
    crearElemento('a', { clase: 'volver-cursos', texto: t('volverCursos'), atributos: { href: '../mis_cursos/mis_cursos.html' } }),
    crearElemento('h1', { texto: `${t('mapaTitulo')}: ${curso.nombre}`, atributos: { id: 'titulo-mapa' } }),
    crearSelectorNiveles(usuario, curso, nivel),
    zonaMensajeMapa
  );
  const aviso = crearAvisoNivel(usuario, curso, nivel);
  if (aviso) {
    seccion.appendChild(aviso);
  }
  seccion.append(...curso.unidades.filter((u) => u.nivel === nivel.id).map((unidad) => crearUnidad(usuario, curso, unidad)));
};

// Si la dirección trae #leccion-3, lleva la vista hasta esa lección. Hace falta
// porque la tarjeta recién existe después de que JavaScript la crea.
const restaurarPosicion = () => {
  if (window.location.hash) {
    document.querySelector(window.location.hash)?.scrollIntoView();
  }
};


/* ---------------------------------------------------------------------
   5. OPINIONES: PROMEDIO Y COMENTARIOS PUBLICADOS
   --------------------------------------------------------------------- */

const textoPromedio = (cursoId) => {
  const valoraciones = obtenerValoraciones(cursoId);
  if (valoraciones.length === 0) {
    return 'Este curso todavía no tiene valoraciones. ¡Sé la primera persona en opinar!';
  }
  const suma = valoraciones.reduce((total, v) => total + v.estrellas, 0);
  const promedio = (suma / valoraciones.length).toFixed(1);
  return `★ ${promedio} de 5 (${valoraciones.length} ${valoraciones.length === 1 ? 'valoración' : 'valoraciones'})`;
};

const crearComentario = ({ usuarioId, texto, fecha }, usuarios) => {
  // Busca a quien opinó por id: si cambió su nombre, acá se ve el nombre nuevo.
  const autor = usuarios.find((u) => u.id === usuarioId) ?? { nombre: 'Cuenta eliminada', usuario: 'anónimo', avatar: null };
  const elemento = crearElemento('article', { clase: 'comentario' });
  const contenido = crearElemento('div');
  const encabezado = crearElemento('div', { clase: 'comentario-encabezado' });

  encabezado.append(
    crearElemento('span', { clase: 'comentario-autor', texto: `@${autor.usuario}` }),
    crearElemento('span', { clase: 'comentario-fecha', texto: mostrarFecha(fecha) })
  );
  contenido.append(encabezado, crearElemento('p', { clase: 'comentario-texto', texto }));
  elemento.append(crearAvatar(autor), contenido);
  return elemento;
};

const renderizarListaComentarios = (contenedor, cursoId) => {
  const comentarios = obtenerComentarios(cursoId);
  const usuarios = obtenerUsuarios();
  vaciar(contenedor);

  if (comentarios.length === 0) {
    contenedor.appendChild(crearElemento('p', { texto: 'Todavía no hay comentarios para este curso.' }));
    return;
  }
  contenedor.append(...comentarios.map((comentario) => crearComentario(comentario, usuarios)));
};


/* ---------------------------------------------------------------------
   6. OPINIONES: FORMULARIO
   --------------------------------------------------------------------- */

// Pinta las estrellas hasta la elegida. El input es un radio real: se puede
// usar con el teclado y su texto se lee con un lector de pantalla.
const pintarEstrellas = (grupo, cantidad) => {
  grupo.querySelectorAll('label').forEach((etiqueta, indice) => {
    etiqueta.classList.toggle('activa', indice < cantidad);
  });
};

const crearSelectorEstrellas = (valorInicial) => {
  const grupo = crearElemento('fieldset', { clase: 'selector-estrellas' });
  grupo.appendChild(crearElemento('legend', { texto: 'Tu calificación:' }));

  [1, 2, 3, 4, 5].forEach((numero) => {
    const id = `estrella-${numero}`;
    const opcion = crearElemento('input', { atributos: { type: 'radio', name: 'estrellas', id, value: numero } });
    opcion.checked = numero === valorInicial;
    opcion.addEventListener('change', () => pintarEstrellas(grupo, numero));
    grupo.append(opcion, crearElemento('label', { texto: '★', atributos: { for: id, 'aria-label': `${numero} de 5 estrellas` } }));
  });

  pintarEstrellas(grupo, valorInicial);
  return grupo;
};

// Quita las etiquetas HTML del comentario. textContent ya evita que se ejecuten;
// esto es para que tampoco queden a la vista en la lista.
const quitarEtiquetas = (texto) => texto.replace(/<[^>]*>/g, '').trim();

// Guarda lo que se haya completado: la calificación, el comentario o ambos. Un
// comentario hecho solo de espacios se considera vacío y no se publica.
const publicarOpinion = (evento, usuario, curso, refrescar) => {
  evento.preventDefault();
  const formulario = evento.target;
  const zona = formulario.querySelector('.mensaje');
  const elegida = formulario.querySelector('input[name="estrellas"]:checked');
  const campoComentario = formulario.querySelector('textarea');
  const texto = quitarEtiquetas(campoComentario.value);

  if (!elegida && texto === '') {
    mostrarMensaje(zona, 'Elige una calificación o escribe un comentario para publicar tu opinión.', 'error');
    return;
  }

  const guardoValoracion = !elegida || guardarValoracion(curso.id, usuario.id, Number(elegida.value));
  const guardado = guardoValoracion && (texto === '' || guardarComentario(curso.id, usuario.id, texto));
  if (!guardado) {
    mostrarMensaje(zona, 'No pudimos guardar tu opinión. El almacenamiento del navegador está lleno.', 'error');
    return;
  }

  campoComentario.value = '';
  refrescar();
  const confirmacion = texto === '' ? 'Guardamos tu calificación.' : elegida ? 'Publicamos tu calificación y tu comentario.' : 'Publicamos tu comentario.';
  mostrarMensaje(zona, confirmacion, 'exito');
};

const crearFormularioOpinion = (usuario, curso, refrescar) => {
  const propia = obtenerValoraciones(curso.id).find((v) => v.usuarioId === usuario.id);
  const formulario = crearElemento('form', { clase: 'tarjeta mb-md', atributos: { novalidate: '' } });
  const grupo = crearElemento('div', { clase: 'grupo-form' });

  grupo.append(
    crearElemento('label', { clase: 'etiqueta-form', texto: 'Tu comentario (opcional):', atributos: { for: 'comentario-curso' } }),
    crearElemento('textarea', { clase: 'input-form campo-comentario', atributos: { id: 'comentario-curso', maxlength: 500, placeholder: '¿Qué te pareció este curso?' } })
  );
  formulario.append(
    crearSelectorEstrellas(propia?.estrellas ?? 0),
    grupo,
    crearElemento('button', { clase: 'btn btn-primario', texto: 'Publicar opinión', atributos: { type: 'submit' } }),
    crearZonaMensaje()
  );
  formulario.addEventListener('submit', (evento) => publicarOpinion(evento, usuario, curso, refrescar));
  return formulario;
};

const renderizarOpiniones = (usuario, curso) => {
  const seccion = crearElemento('section', { clase: 'seccion-opiniones', atributos: { 'aria-labelledby': 'titulo-opiniones' } });
  const promedio = crearElemento('p', { clase: 'promedio-curso' });
  const lista = crearElemento('div', { clase: 'tarjeta' });

  // Actualiza lo publicado sin redibujar el formulario ni perder el mensaje.
  const refrescar = () => {
    promedio.textContent = textoPromedio(curso.id);
    renderizarListaComentarios(lista, curso.id);
  };

  seccion.append(
    crearElemento('h2', { texto: t('opiniones'), atributos: { id: 'titulo-opiniones' } }),
    promedio,
    crearFormularioOpinion(usuario, curso, refrescar),
    lista
  );
  document.querySelector('.seccion-mapa').appendChild(seccion);
  refrescar();
};


/* ---------------------------------------------------------------------
   7. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

// Nivel a mostrar: el de la dirección o, si no hay ninguno, el actual de la cuenta.
const nivelDesdeDireccion = (usuario, curso) => {
  const pedido = new URLSearchParams(window.location.search).get('nivel');
  return obtenerNivel(curso, pedido) ?? nivelActual(usuario, curso);
};

// Dibuja la vista completa. La usan el inicio y las acciones que cambian el avance.
const renderizarVista = (usuario, curso, nivel) => {
  window.history.replaceState(null, '', `?nivel=${nivel.id}${window.location.hash}`);
  renderizarPanelCurso(usuario, curso, nivel);
  renderizarMapa(usuario, curso, nivel);
  renderizarOpiniones(usuario, curso);
};

// Entrar a un nivel abierto lo vuelve el nivel de trabajo, y el panel principal
// muestra ese avance. Consultar uno cerrado no lo abre.
const recordarNivel = (usuario, curso, nivel) => {
  if (nivelDisponible(usuario, curso, nivel.id) && usuario.nivelElegido?.[curso.id] !== nivel.id) {
    elegirNivel(usuario, curso, nivel.id);
    guardarUsuario(usuario);
  }
};

const usuarioActivo = exigirSesion();
const cursoActual = detectarCurso();

if (usuarioActivo && cursoActual) {
  const nivelVisible = nivelDesdeDireccion(usuarioActivo, cursoActual);
  recordarNivel(usuarioActivo, cursoActual, nivelVisible);
  renderizarVista(usuarioActivo, cursoActual, nivelVisible);
  restaurarPosicion();
}
