/* =====================================================================
   recuperacion.js  -  RECUPERAR CONTRASEÑA

   Simula el envío de un enlace: no se manda ningún correo. Solo se revisa
   si el correo pertenece a una cuenta y se informa el resultado.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. ELEMENTOS DE LA PÁGINA
   --------------------------------------------------------------------- */

const formularioRecuperacion = document.querySelector('.formulario-recuperacion');
const campoCorreo = document.querySelector('#email');
const botonEnviar = document.querySelector('.btn-recuperacion');
const zonaResultado = document.querySelector('#mensaje-recuperacion');
const TIEMPO_ENVIO_SIMULADO = 1200;


/* ---------------------------------------------------------------------
   2. VALIDACIÓN
   --------------------------------------------------------------------- */

const validarCorreo = () => {
  if (!EMAIL_REGEX.test(campoCorreo.value.trim())) {
    return [{ campo: campoCorreo, mensaje: 'Ingresa un correo válido, por ejemplo tu@correo.com.' }];
  }
  return [];
};


/* ---------------------------------------------------------------------
   3. ENVÍO SIMULADO
   --------------------------------------------------------------------- */

// Pausa programada-
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Imita la demora de un servidor y responde si el correo tiene una cuenta.
const solicitarRecuperacion = async (correo) => {
  await esperar(TIEMPO_ENVIO_SIMULADO);
  return obtenerUsuarios().some((u) => (u.email ?? '').toLowerCase() === correo.toLowerCase());
};

const manejarEnvio = async (evento) => {
  evento.preventDefault();
  ocultarMensaje(zonaResultado);

  if (!aplicarErrores(formularioRecuperacion, validarCorreo())) {
    return;
  }

  const textoBoton = botonEnviar.textContent;
  botonEnviar.disabled = true;
  botonEnviar.textContent = 'Enviando...';

  try {
    const correo = campoCorreo.value.trim();
    const existe = await solicitarRecuperacion(correo);
    if (existe) {
      mostrarMensaje(zonaResultado, `Listo. Simulamos el envío de un enlace de recuperación a ${correo}.`, 'exito');
      formularioRecuperacion.reset();
    } else {
      mostrarMensaje(zonaResultado, 'No encontramos una cuenta con ese correo. Revísalo o crea una cuenta nueva.', 'error');
    }
  } finally {
    // Pase lo que pase, el botón vuelve a quedar disponible.
    botonEnviar.disabled = false;
    botonEnviar.textContent = textoBoton;
  }
};


/* ---------------------------------------------------------------------
   4. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

formularioRecuperacion.noValidate = true;
formularioRecuperacion.addEventListener('submit', manejarEnvio);
