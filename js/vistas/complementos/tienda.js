/* =====================================================================
   tienda.js  -  RACHAS Y TIENDA

   Muestra la racha, la meta diaria y los elementos para canjear con gemas.
   El filtro cambia lo que se ve; cada canje informa si se pudo hacer y
   actualiza el saldo.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. ESTADO Y ELEMENTOS DE LA PÁGINA
   --------------------------------------------------------------------- */

let categoriaElegida = 'todas';

const panelRacha = document.querySelector('.sidebar-widget');
const seccionTienda = document.querySelector('.seccion-tienda');
const zonaMensajeTienda = crearZonaMensaje();


/* ---------------------------------------------------------------------
   2. RACHA Y META DIARIA
   --------------------------------------------------------------------- */

// Tira con los últimos 7 días, marcando aquellos en los que hubo práctica.
const crearSemanaDeRacha = (usuario) => {
  const semana = crearElemento('div', { clase: 'semana-racha' });
  for (let i = 6; i >= 0; i--) {
    const dia = sumarDias(fechaHoy(), -i);
    const activo = usuario.diasActivos.includes(dia);
    const etiqueta = mostrarFecha(dia, { weekday: 'short' });
    semana.appendChild(crearElemento('div', {
      clase: `dia-racha${activo ? ' dia-activo' : ''}`,
      texto: `${etiqueta} ${activo ? '🔥' : '·'}`,
      atributos: { title: activo ? 'Día con práctica' : 'Día sin práctica' }
    }));
  }
  return semana;
};

const crearSelectorMeta = (usuario) => {
  const grupo = crearElemento('div', { clase: 'grupo-form mt-md' });
  const selector = crearElemento('select', { clase: 'select-form', atributos: { id: 'selector-meta' } });

  METAS_DIARIAS.forEach((meta) => {
    const opcion = crearElemento('option', { texto: `${meta} XP por día`, atributos: { value: meta } });
    opcion.selected = meta === usuario.metaDiaria;
    selector.appendChild(opcion);
  });
  selector.addEventListener('change', () => cambiarMeta(Number(selector.value)));

  grupo.append(crearElemento('label', { clase: 'etiqueta-form', texto: 'Cambiar meta diaria:', atributos: { for: 'selector-meta' } }), selector);
  return grupo;
};

const renderizarRacha = () => {
  const usuario = obtenerUsuarioActivo();
  const avance = Math.round((usuario.xpHoy / usuario.metaDiaria) * 100);

  vaciar(panelRacha).append(
    crearElemento('h3', { texto: 'Tu racha' }),
    crearFilaResumen('🔥', conPlural(usuario.racha, 'día seguido', 'días seguidos'), 'Completa una lección por día para mantenerla.'),
    crearSemanaDeRacha(usuario),
    crearFilaResumen('🎯', t('metaDiaria'), `${usuario.xpHoy} / ${usuario.metaDiaria} XP hoy`),
    crearBarraProgreso(avance, 'Avance de la meta diaria'),
    crearSelectorMeta(usuario)
  );
};

const cambiarMeta = (meta) => {
  const usuario = obtenerUsuarioActivo();
  usuario.metaDiaria = meta;
  if (guardarUsuario(usuario)) {
    renderizarRacha();
    mostrarMensaje(zonaMensajeTienda, `Tu meta diaria ahora es de ${meta} XP.`, 'exito');
  } else {
    mostrarMensaje(zonaMensajeTienda, 'No pudimos guardar la meta diaria.', 'error');
  }
};


/* ---------------------------------------------------------------------
   3. REGLAS DE CANJE
   --------------------------------------------------------------------- */

const yaTieneInsignia = (usuario, articulo) => articulo.tipo === 'insignia' && usuario.insignias.includes(articulo.id);

// Devuelve por qué no se puede canjear, o null si se puede.
const motivoDeRechazo = (usuario, articulo) => {
  if (yaTieneInsignia(usuario, articulo)) {
    return `Ya tienes la ${articulo.nombre}.`;
  }
  if (usuario.gemas < articulo.precio) {
    return `Te faltan ${conPlural(articulo.precio - usuario.gemas, 'gema', 'gemas')} para canjear ${articulo.nombre}.`;
  }
  return null;
};

// Descuenta el precio y entrega el artículo según su tipo.
const entregarArticulo = (usuario, articulo) => {
  usuario.gemas -= articulo.precio;
  if (articulo.tipo === 'insignia') {
    usuario.insignias = [...usuario.insignias, articulo.id];
  } else {
    usuario.inventario[articulo.id] += 1;
  }
};

const canjear = (articuloId) => {
  const usuario = obtenerUsuarioActivo();
  const articulo = ARTICULOS_TIENDA.find((a) => a.id === articuloId);
  const rechazo = motivoDeRechazo(usuario, articulo);

  if (rechazo) {
    mostrarMensaje(zonaMensajeTienda, rechazo, 'error');
    return;
  }

  entregarArticulo(usuario, articulo);
  if (!guardarUsuario(usuario)) {
    mostrarMensaje(zonaMensajeTienda, 'No pudimos completar el canje. No se descontaron gemas.', 'error');
    return;
  }

  renderizarArticulos();
  mostrarMensaje(zonaMensajeTienda, `Canjeaste ${articulo.nombre}. Tu saldo es de ${conPlural(usuario.gemas, 'gema', 'gemas')}.`, 'exito');
};


/* ---------------------------------------------------------------------
   4. CATÁLOGO
   --------------------------------------------------------------------- */

// Lo que se ve debajo del nombre: las gemas del usuario y, para consumibles,
// cuántos ya tiene guardados (o si ya tiene la insignia).
const textoExistencias = (usuario, articulo) => {
  const gemas = `Tienes: ${usuario.gemas} 💎`;
  if (articulo.tipo === 'insignia') {
    return `${gemas} · ${yaTieneInsignia(usuario, articulo) ? 'Ya la tienes' : 'Disponible'}`;
  }
  return `${gemas} · En tu inventario: ${usuario.inventario[articulo.id]}`;
};

// Texto y estilo del botón: canjeada, bloqueada por saldo o disponible.
const datosBoton = (usuario, articulo) => {
  if (yaTieneInsignia(usuario, articulo)) {
    return { clase: 'btn-contorno', texto: 'Canjeada' };
  }
  if (usuario.gemas < articulo.precio) {
    return { clase: 'btn-bloqueado', texto: `🔒 Canjear por ${articulo.precio} 💎` };
  }
  return { clase: 'btn-primario', texto: `Canjear por ${articulo.precio} 💎` };
};

const crearArticulo = (usuario, articulo) => {
  const tarjeta = crearElemento('article', { clase: 'tarjeta articulo-tienda' });
  const { clase, texto } = datosBoton(usuario, articulo);
  const rechazo = motivoDeRechazo(usuario, articulo);
  const boton = crearElemento('button', { clase: `btn ${clase}`, texto, atributos: { type: 'button' } });

  // Sin saldo suficiente (o con la insignia ya canjeada) el botón queda bloqueado.
  boton.disabled = rechazo !== null;
  if (rechazo) {
    boton.title = rechazo;
  }
  boton.addEventListener('click', () => canjear(articulo.id));

  tarjeta.append(
    crearElemento('span', { clase: 'articulo-icono', texto: articulo.icono, atributos: { 'aria-hidden': 'true' } }),
    crearElemento('h3', { texto: articulo.nombre }),
    crearElemento('p', { texto: articulo.descripcion }),
    crearElemento('p', { clase: 'resumen-detalle', texto: textoExistencias(usuario, articulo) })
  );
  if (clase === 'btn-bloqueado') {
    const faltan = conPlural(articulo.precio - usuario.gemas, 'gema', 'gemas');
    tarjeta.appendChild(crearElemento('p', { clase: 'aviso-saldo', texto: `Te faltan ${faltan}` }));
  }
  tarjeta.appendChild(boton);
  return tarjeta;
};

// Redibuja el saldo y las tarjetas de la categoría elegida.
const renderizarArticulos = () => {
  const usuario = obtenerUsuarioActivo();
  const grilla = vaciar(seccionTienda.querySelector('.grilla-tienda'));
  const visibles = ARTICULOS_TIENDA.filter((a) => categoriaElegida === 'todas' || a.categoria === categoriaElegida);

  seccionTienda.querySelector('.saldo-tienda').textContent = `Te quedan ${conPlural(usuario.gemas, 'gema', 'gemas')} 💎`;
  grilla.append(...visibles.map((articulo) => crearArticulo(usuario, articulo)));
};

const crearFiltro = () => {
  const grupo = crearElemento('div', { clase: 'grupo-form' });
  const selector = crearElemento('select', { clase: 'select-form', atributos: { id: 'filtro-tienda' } });

  CATEGORIAS_TIENDA.forEach(({ id, nombre }) => selector.appendChild(crearElemento('option', { texto: nombre, atributos: { value: id } })));
  selector.addEventListener('change', () => {
    categoriaElegida = selector.value;
    ocultarMensaje(zonaMensajeTienda);
    renderizarArticulos();
  });

  grupo.append(crearElemento('label', { clase: 'etiqueta-form', texto: 'Filtrar por:', atributos: { for: 'filtro-tienda' } }), selector);
  return grupo;
};

// Estructura fija de la sección: lo que cambia se actualiza en renderizarArticulos.
const renderizarTienda = () => {
  seccionTienda.append(
    crearElemento('h1', { clase: 'titulo-pagina', texto: t('tiendaTitulo') }),
    crearElemento('p', { clase: 'saldo-tienda' }),
    crearFiltro(),
    zonaMensajeTienda,
    crearElemento('div', { clase: 'grilla-tienda' })
  );
  renderizarArticulos();
};


/* ---------------------------------------------------------------------
   5. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

if (exigirSesion()) {
  renderizarRacha();
  renderizarTienda();
}
