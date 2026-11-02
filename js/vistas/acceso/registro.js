/* =====================================================================
   registro.js  -  CREAR CUENTA
   Archivo: js/vistas/acceso/registro.js

   Valida los datos, controla que el usuario y el correo no estén ocupados
   y agrega la cuenta nueva a la "tabla" de usuarios de localStorage.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. ELEMENTOS DE LA PÁGINA
   --------------------------------------------------------------------- */

const formularioRegistro = document.querySelector('#formulario-registro');
const campoNombre = document.querySelector('#fullname');
const campoEmail = document.querySelector('#email');
const campoPassword = document.querySelector('#password');
const campoConfirmacion = document.querySelector('#confirm_password');
const zonaMensajeRegistro = crearZonaMensaje();
let campoUsuario;


/* ---------------------------------------------------------------------
   2. PREPARACIÓN DEL FORMULARIO
   --------------------------------------------------------------------- */

// La consigna pide validar que "el identificador elegido no esté ocupado",
// así que sumamos el campo de nombre de usuario debajo del nombre completo.
const agregarCampoUsuario = () => {
  const grupo = crearElemento('div', { clase: 'grupo-form' });
  campoUsuario = crearElemento('input', {
    clase: 'input-form',
    atributos: { type: 'text', id: 'username', placeholder: 'Ej. juanperez', autocomplete: 'username' }
  });
  grupo.append(
    crearElemento('label', { clase: 'etiqueta-form', texto: 'Nombre de usuario:', atributos: { for: 'username' } }),
    campoUsuario
  );
  campoNombre.closest('.grupo-form').after(grupo);
};

const prepararFormulario = () => {
  agregarCampoUsuario();
  formularioRegistro.noValidate = true;
  formularioRegistro.after(zonaMensajeRegistro);
};


/* ---------------------------------------------------------------------
   3. VALIDACIÓN
   --------------------------------------------------------------------- */

const validarNombre = () => {
  if (campoNombre.value.trim().length < 3) {
    return { campo: campoNombre, mensaje: 'Ingresa tu nombre completo (al menos 3 letras).' };
  }
  return null;
};

const validarUsuario = () => {
  const valor = campoUsuario.value.trim();
  if (!USUARIO_REGEX.test(valor)) {
    return { campo: campoUsuario, mensaje: 'Usa de 3 a 20 letras, números, puntos o guiones bajos, sin espacios.' };
  }
  if (estaOcupado('usuario', valor)) {
    return { campo: campoUsuario, mensaje: 'Ese nombre de usuario ya está ocupado. Prueba con otro.' };
  }
  return null;
};

const validarEmail = () => {
  const valor = campoEmail.value.trim();
  if (!EMAIL_REGEX.test(valor)) {
    return { campo: campoEmail, mensaje: 'Ingresa un correo válido, por ejemplo tu@correo.com.' };
  }
  if (estaOcupado('email', valor)) {
    return { campo: campoEmail, mensaje: 'Ya existe una cuenta con ese correo.' };
  }
  return null;
};

const validarPassword = () => {
  if (!PASSWORD_REGEX.test(campoPassword.value)) {
    return { campo: campoPassword, mensaje: MENSAJE_PASSWORD };
  }
  return null;
};

const validarConfirmacion = () => {
  if (campoConfirmacion.value !== campoPassword.value) {
    return { campo: campoConfirmacion, mensaje: 'Las contraseñas no coinciden.' };
  }
  return null;
};

// Ejecuta todas las validaciones y se queda solo con las que encontraron un error.
const validarFormulario = () =>
  [validarNombre(), validarUsuario(), validarEmail(), validarPassword(), validarConfirmacion()].filter(Boolean);


/* ---------------------------------------------------------------------
   4. ENVÍO DEL FORMULARIO
   --------------------------------------------------------------------- */

const crearCuenta = () => {
  const cuenta = new Usuario({
    nombre: campoNombre.value.trim(),
    usuario: campoUsuario.value.trim(),
    email: campoEmail.value.trim(),
    password: campoPassword.value
  });
  return agregarUsuario(cuenta);
};

const manejarEnvio = (evento) => {
  evento.preventDefault();
  ocultarMensaje(zonaMensajeRegistro);

  if (!aplicarErrores(formularioRegistro, validarFormulario())) {
    return;
  }

  if (!crearCuenta()) {
    mostrarMensaje(zonaMensajeRegistro, 'No pudimos guardar la cuenta. El almacenamiento del navegador está lleno.', 'error');
    return;
  }

  // El aviso sobrevive al cambio de página y se ve en el inicio de sesión.
  dejarAviso('¡Registro exitoso! Ya puedes iniciar sesión.');
  window.location.href = '../login/login.html';
};


/* ---------------------------------------------------------------------
   5. INICIO DE LA VISTA
   --------------------------------------------------------------------- */

prepararFormulario();
formularioRegistro.addEventListener('submit', manejarEnvio);
