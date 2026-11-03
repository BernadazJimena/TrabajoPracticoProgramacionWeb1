/* =====================================================================
   ranking.js  -  TABLA DE CLASIFICACIÓN

   Muestra la tabla semanal de la liga elegida. Los puntajes se calculan con
   las cuentas guardadas, así que la XP ganada en una lección se ve acá.
   La liga va en la dirección (ranking.html?liga=oro) para que Atrás y
   Adelante recorran las ligas consultadas.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. LIGA SELECCIONADA
   --------------------------------------------------------------------- */

// Usa la liga de la dirección y, si no hay ninguna válida, la de la cuenta.
const ligaDesdeDireccion = (usuario) => {
  const pedida = new URLSearchParams(window.location.search).get('liga');
  return obtenerLiga(pedida) ?? obtenerLiga(usuario.liga);
};


/* ---------------------------------------------------------------------
   2. PANEL "TU POSICIÓN"
   --------------------------------------------------------------------- */

// Dice cuánta XP falta para entrar a la zona de ascenso.
const textoParaAscender = (participantes, usuario, liga) => {
  const puesto = obtenerPuesto(usuario);
  if (liga.ascienden === 0) {
    return 'Estás en la liga más alta.';
  }
  if (puesto <= liga.ascienden) {
    return 'Estás en zona de ascenso.';
  }
  const ultimoQueAsciende = participantes[liga.ascienden - 1];
  const faltan = ultimoQueAsciende.xpSemanal - xpSemanalVigente(usuario) + 1;
  return `Te faltan ${faltan} XP para la zona de ascenso.`;
};

const renderizarPosicion = (usuario) => {
  const liga = obtenerLiga(usuario.liga);
  const participantes = obtenerParticipantes(liga.id);
  const puesto = obtenerPuesto(usuario);

  vaciar(document.querySelector('.sidebar-widget')).append(
    crearElemento('h3', { texto: t('tuPosicion') }),
    crearFilaResumen(liga.icono, liga.nombre, `Puesto actual: #${puesto}`),
    crearFilaResumen('⚡', `${xpSemanalVigente(usuario)} XP esta semana`, textoParaAscender(participantes, usuario, liga))
  );
};


/* ---------------------------------------------------------------------
   3. SELECTOR DE LIGA
   --------------------------------------------------------------------- */

const crearSelectorLiga = (ligaActual, alCambiar) => {
  const grupo = crearElemento('div', { clase: 'grupo-form selector-liga' });
  const selector = crearElemento('select', { clase: 'select-form', atributos: { id: 'selector-liga' } });

  LIGAS.forEach((liga) => {
    const opcion = crearElemento('option', { texto: `${liga.icono} ${liga.nombre}`, atributos: { value: liga.id } });
    opcion.selected = liga.id === ligaActual.id;
    selector.appendChild(opcion);
  });

  selector.addEventListener('change', () => alCambiar(selector.value));
  grupo.append(crearElemento('label', { clase: 'etiqueta-form', texto: 'Elige una liga:', atributos: { for: 'selector-liga' } }), selector);
  return grupo;
};


/* ---------------------------------------------------------------------
   4. TABLA
   --------------------------------------------------------------------- */

const crearFila = (participante, indice, total, liga, usuarioActivo) => {
  const puesto = indice + 1;
  const esActivo = participante.id === usuarioActivo.id;
  const estado = estadoEnLiga(puesto, total, liga, participante.xpSemanal);
  const fila = crearElemento('tr', { clase: esActivo ? 'fila-activa' : '' });
  const celdaAvatar = crearElemento('td');

  celdaAvatar.appendChild(crearAvatar(participante));
  fila.append(
    crearElemento('td', { texto: `#${puesto}` }),
    celdaAvatar,
    // "(Tú)" identifica la fila sin depender solo del resaltado de color.
    crearElemento('td', { texto: `@${participante.usuario}${esActivo ? ' (Tú)' : ''}` }),
    crearElemento('td', { texto: `${participante.xpSemanal} XP` }),
    crearElemento('td', { clase: `estado-${estado.id}`, texto: estado.texto })
  );
  return fila;
};

const crearTabla = (participantes, liga, usuarioActivo) => {
  const contenedor = crearElemento('div', { clase: 'tarjeta tabla-contenedor' });
  const tabla = crearElemento('table', { clase: 'tabla-ranking' });
  const encabezado = crearElemento('tr');
  const cuerpo = crearElemento('tbody');
  const cabecera = crearElemento('thead');

  ['Puesto', 'Avatar', 'Usuario', 'XP semanal', 'Estado'].forEach((titulo) => {
    encabezado.appendChild(crearElemento('th', { texto: titulo, atributos: { scope: 'col' } }));
  });
  cabecera.appendChild(encabezado);
  participantes.forEach((participante, indice) => {
    cuerpo.appendChild(crearFila(participante, indice, participantes.length, liga, usuarioActivo));
  });

  tabla.append(crearElemento('caption', { texto: `${liga.nombre}: clasificación de esta semana` }), cabecera, cuerpo);
  contenedor.appendChild(tabla);
  return contenedor;
};

// Explica cómo funciona la liga elegida: ascensos, descensos y permanencia.
const textoReglasLiga = ({ ascienden, descienden }) => {
  const partes = [];
  if (ascienden > 0) {
    partes.push(`Los ${ascienden} primeros ascienden`);
  }
  if (descienden > 0) {
    partes.push(`los ${descienden} últimos descienden`);
  }
  partes.push('el resto permanece');
  return `${partes.join(', ')} al cerrar la semana.`;
};


/* ---------------------------------------------------------------------
   5. ARMADO DE LA VISTA
   --------------------------------------------------------------------- */

const renderizarClasificacion = (usuario) => {
  const liga = ligaDesdeDireccion(usuario);
  const participantes = obtenerParticipantes(liga.id);
  const seccion = vaciar(document.querySelector('.seccion-ranking'));

  seccion.append(
    crearElemento('h1', { clase: 'titulo-pagina', texto: t('rankingTitulo') }),
    crearSelectorLiga(liga, (ligaId) => cambiarLiga(ligaId, usuario)),
    crearElemento('h2', { texto: `${liga.icono} ${liga.nombre}` }),
    crearElemento('p', { clase: 'resumen-detalle', texto: textoReglasLiga(liga) })
  );

  if (participantes.length === 0) {
    seccion.appendChild(crearEstadoVacio(
      'Todavía no hay participantes en esta liga',
      'Cuando una cuenta llegue a esta liga, aparecerá aquí. Sigue sumando experiencia para llegar.',
      { texto: t('volverPanel'), href: '../mis_cursos/mis_cursos.html' }
    ));
    return;
  }
  seccion.appendChild(crearTabla(participantes, liga, usuario));
};

const cambiarLiga = (ligaId, usuario) => {
  window.history.pushState(null, '', `?liga=${ligaId}`);
  renderizarClasificacion(usuario);
};


/* ---------------------------------------------------------------------
   6. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

const usuarioActivo = exigirSesion();
if (usuarioActivo) {
  renderizarPosicion(usuarioActivo);
  renderizarClasificacion(usuarioActivo);
  window.addEventListener('popstate', () => renderizarClasificacion(usuarioActivo));

  // Si en otra pestaña se termina una lección, la tabla se reordena sola.
  window.addEventListener('storage', () => {
    const actualizado = obtenerUsuarioActivo();
    if (actualizado) {
      renderizarPosicion(actualizado);
      renderizarClasificacion(actualizado);
    }
  });
}
