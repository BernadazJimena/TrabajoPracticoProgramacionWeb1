# LingoWeb - Trabajo Práctico N.º 2

Trabajo práctico de Programación Web I (UNLaM).

LingoWeb es una página para aprender idiomas. Tiene cursos de inglés, alemán, chino,
francés, italiano y portugués. Cada curso se divide en niveles, unidades y lecciones, y en
cada lección hay una parte de teoría y después ejercicios de opción múltiple. Al terminar
una lección se gana experiencia (XP) y gemas, que sirven para subir en el ranking y comprar
cosas en la tienda.

## Cómo abrirlo

No hace falta instalar nada. Hay que abrir `index.html` en el navegador.

Para probarlo se puede crear una cuenta nueva o entrar con una de prueba:

- usuario `juanperez`, contraseña `Demo1234`
- usuario `mariag`, contraseña `Demo1234`

## Qué se puede hacer

- Registrarse, iniciar sesión y recuperar la contraseña.
- Ver los cursos en "Mis cursos" y entrar al mapa de lecciones de cada idioma.
- Hacer lecciones: si te equivocás perdés oportunidades, y si te quedás sin ninguna tenés
  que repetirla.
- Dejar una valoración con estrellas y un comentario en cada curso.
- Ver el ranking de la semana y el histórico de temporadas.
- Usar las gemas en la tienda.
- Editar el perfil y cambiar el idioma de la página (español, inglés o portugués).
- Leer las preguntas frecuentes y mandar un mensaje desde contacto.

## Cómo está hecho

Usamos HTML, CSS y JavaScript, sin librerías ni servidor. Como no tenemos base de datos,
los usuarios y su progreso se guardan en el `localStorage` del navegador. Si se borran los
datos del navegador, se pierde lo guardado y vuelven a aparecer las cuentas de prueba.

## Carpetas

- Cada página tiene su carpeta con su HTML (`login/`, `perfil/`, `tienda/`, etc.).
  Los mapas de los cursos están en `mapa_lecciones/`, uno por idioma.
- `css/`: los estilos. `base` tiene lo general, `componentes` los botones, tarjetas y
  formularios, `layout` la estructura de la página y `pages` lo propio de cada pantalla.
- `js/datos/`: la información fija, como los cursos con sus lecciones, la tienda, los
  logros y las preguntas frecuentes.
- `js/nucleo/`: el código que usan todas las páginas: guardar y leer del `localStorage`,
  calcular el progreso, traducir los textos y armar el menú.
- `js/vistas/`: un archivo por página con lo que hace esa pantalla en particular.
- `imagenes/`: las banderas de los idiomas y las imágenes de la portada.

## Integrantes

- Jimena Bernadaz
- Cristian Borquez
- Facundo Aguilar
