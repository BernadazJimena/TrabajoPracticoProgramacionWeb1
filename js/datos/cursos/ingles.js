/* =====================================================================
   ingles.js  -  CURSO: INGLES

   Contenido propio de este idioma: niveles, unidades, lecciones y ejercicios.
   Las unidades compartidas las agrega js/datos/generador_cursos.js.
   ===================================================================== */


const CURSO_INGLES = {
  id: "ingles",
  nombre: "Inglés",
  nombreCompleto: "Inglés desde Español",
  codigoIdioma: "en",
  descripcion: "El idioma más hablado a nivel mundial, ideal para viajar y negocios.",
  niveles: [
    {
      id: "a1",
      nombre: "A1",
      titulo: "Principiante"
    },
    {
      id: "a2",
      nombre: "A2",
      titulo: "Elemental"
    },
    {
      id: "b1",
      nombre: "B1",
      titulo: "Intermedio"
    }
  ],
  unidades: [
    {
      id: 1,
      titulo: "Saludos y presentaciones",
      descripcion: "Saluda y presenta quién eres.",
      nivel: "a1",
      lecciones: [
        {
          id: 1,
          titulo: "Saludos y presentaciones",
          descripcion: "Aprende <span lang=\"en\">Hello</span>, <span lang=\"en\">Good morning</span> y <span lang=\"en\">My name is</span>",
          consejo: "<span lang=\"en\">Hi</span> es informal y <span lang=\"en\">Hello</span> sirve para cualquier situación. <span lang=\"en\">Good morning</span> se usa por la mañana, <span lang=\"en\">Good afternoon</span> por la tarde y <span lang=\"en\">Good evening</span> por la noche. <span lang=\"en\">Good night</span> solo se usa para despedirse.",
          teoria: {
            titulo: "Aprende a saludar y presentarte",
            html: "<p>Para saludar, puedes decir <strong lang=\"en\">Hello</strong>. Para presentarte, puedes decir <strong lang=\"en\">My name is Ana</strong>.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">Hello / Hi</span> <span>→ hola</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Good morning</span> <span>→ buenos días</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">My name is Ana</span> <span>→ me llamo Ana</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Nice to meet you</span> <span>→ encantado de conocerte</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">Hello</span>?",
              opciones: [
                {
                  texto: "Adiós",
                  correcta: false
                },
                {
                  texto: "Hola",
                  correcta: true
                },
                {
                  texto: "Gracias",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Hello</span> significa «hola».",
              error: "Todavía no. <span lang=\"en\">Hello</span> significa «hola». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «buenos días»?",
              opciones: [
                {
                  texto: "Good night",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "Good morning",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "Good evening",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Good morning</span> significa «buenos días».",
              error: "Todavía no. <span lang=\"en\">Good night</span> se usa para despedirse de noche y <span lang=\"en\">Good evening</span> para saludar de noche. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «me llamo Ana»?",
              opciones: [
                {
                  texto: "My name is Ana",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "My name are Ana",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "Me name is Ana",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">My name is Ana</span> significa «me llamo Ana».",
              error: "Todavía no. Se dice <span lang=\"en\">My name is</span>: con <span lang=\"en\">my name</span> se usa <span lang=\"en\">is</span>. Puedes elegir otra opción."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      titulo: "Tiempos verbales",
      descripcion: "Usa los verbos básicos en presente y pasado.",
      nivel: "a1",
      lecciones: [
        {
          id: 2,
          titulo: "Verbo to be",
          descripcion: "Aprende <span lang=\"en\">I am</span>, <span lang=\"en\">you are</span> y <span lang=\"en\">she is</span>",
          consejo: "<span lang=\"en\">I am Juan Perez</span> significa «yo soy Juan Perez». <span lang=\"en\">am</span> se usa cuando se habla de uno mismo (<span lang=\"en\">I</span>), <span lang=\"en\">are</span> con <span lang=\"en\">you, we, they</span> e <span lang=\"en\">is</span> con <span lang=\"en\">she, he, it</span>.",
          teoria: {
            titulo: "Aprende a presentarte",
            html: "<p>Para presentarte, puedes decir <strong lang=\"en\">I am Juan</strong>.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am</span> <span>→ yo soy</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">She is / He is</span> <span>→ ella es / él es</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">We are / They are</span> <span>→ nosotros somos / ellos son</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «yo soy Juan»?",
              opciones: [
                {
                  texto: "I is",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "I am",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "I are",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I am Juan</span> significa «yo soy Juan».",
              error: "Todavía no. <span lang=\"en\">I am</span> significa «yo soy». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «ella es profesora»?",
              opciones: [
                {
                  texto: "She am a teacher",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "She are a teacher",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "She is a teacher",
                  idioma: "en",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"en\">she</span> se usa <span lang=\"en\">is</span>: <span lang=\"en\">She is a teacher</span>.",
              error: "Todavía no. Con <span lang=\"en\">she, he, it</span> se usa <span lang=\"en\">is</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «nosotros somos amigos»?",
              opciones: [
                {
                  texto: "We are friends",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "We is friends",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "We am friends",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">We are friends</span> significa «nosotros somos amigos».",
              error: "Todavía no. Con <span lang=\"en\">we</span> se usa <span lang=\"en\">are</span>. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 3,
          titulo: "Presente simple y continuo",
          descripcion: "Aprende <span lang=\"en\">I work</span> y <span lang=\"en\">I am working</span>",
          consejo: "En presente simple, con <span lang=\"en\">he, she, it</span> el verbo lleva -s: <span lang=\"en\">She works</span>. Para lo que pasa ahora mismo se usa el presente continuo: <span lang=\"en\">am, is, are</span> + verbo con -ing, por ejemplo <span lang=\"en\">I am working</span>.",
          teoria: {
            titulo: "Aprende los presentes",
            html: "<p>Para hablar de hábitos usa el presente simple: <strong lang=\"en\">I work</strong>. Para lo que pasa ahora usa el presente continuo: <strong lang=\"en\">I am working</strong>.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I work</span> <span>→ yo trabajo</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">She works</span> <span>→ ella trabaja</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am working</span> <span>→ estoy trabajando (ahora)</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «yo juego al fútbol»?",
              opciones: [
                {
                  texto: "I plays football",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "I play football",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "I playing football",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I play football</span> significa «yo juego al fútbol».",
              error: "Todavía no. Con <span lang=\"en\">I</span> el verbo no lleva -s: <span lang=\"en\">I play</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Completa la frase",
              consigna: "Elige la palabra que falta.",
              pregunta: "<span lang=\"en\">She ___ English.</span> (Ella habla inglés.)",
              opciones: [
                {
                  texto: "speak",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "speaking",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "speaks",
                  idioma: "en",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"en\">she</span> el verbo lleva -s: <span lang=\"en\">She speaks English</span>.",
              error: "Todavía no. Con <span lang=\"en\">he, she, it</span> el verbo lleva -s. Puedes elegir otra opción."
            },
            {
              titulo: "¿Qué pasa ahora?",
              consigna: "Elige la forma correcta para una acción que está ocurriendo en este momento.",
              pregunta: "<span lang=\"en\">Look! He ___ a book now.</span> (¡Mira! Él está leyendo un libro ahora.)",
              opciones: [
                {
                  texto: "reads",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "is reading",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "are reading",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Para algo que pasa ahora se usa el presente continuo: <span lang=\"en\">He is reading a book</span>.",
              error: "Todavía no. Para lo que pasa ahora usa <span lang=\"en\">am, is, are</span> + verbo con -ing. Con <span lang=\"en\">he</span> se usa <span lang=\"en\">is</span>. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 4,
          titulo: "Pasado simple y continuo",
          descripcion: "Cuenta lo que hiciste y lo que estabas haciendo",
          consejo: "En pasado simple, los verbos regulares terminan en -ed: <span lang=\"en\">work → worked</span>. Algunos son irregulares: <span lang=\"en\">go → went</span>. El pasado continuo se forma con <span lang=\"en\">was / were</span> + verbo con -ing: <span lang=\"en\">I was reading</span>.",
          teoria: {
            titulo: "Aprende los pasados",
            html: "<p>Para una acción terminada usa el pasado simple: <strong lang=\"en\">I worked</strong>. Para una acción que estaba en curso usa el pasado continuo: <strong lang=\"en\">I was working</strong>.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I worked</span> <span>→ yo trabajé</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">She went</span> <span>→ ella fue</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I was reading</span> <span>→ yo estaba leyendo</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">They were playing</span> <span>→ ellos estaban jugando</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «yo trabajé ayer»?",
              opciones: [
                {
                  texto: "I work yesterday",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "I worked yesterday",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "I working yesterday",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I worked yesterday</span> significa «yo trabajé ayer».",
              error: "Todavía no. Para el pasado de un verbo regular se agrega -ed: <span lang=\"en\">worked</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Completa la frase",
              consigna: "Elige la palabra que falta.",
              pregunta: "<span lang=\"en\">She ___ to the park yesterday.</span> (Ella fue al parque ayer.)",
              opciones: [
                {
                  texto: "go",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "goes",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "went",
                  idioma: "en",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">went</span> es el pasado de <span lang=\"en\">go</span>.",
              error: "Todavía no. <span lang=\"en\">go</span> es irregular: su pasado es <span lang=\"en\">went</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «yo estaba leyendo»?",
              opciones: [
                {
                  texto: "I was reading",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "I were reading",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "I am read",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I was reading</span> significa «yo estaba leyendo».",
              error: "Todavía no. Con <span lang=\"en\">I</span> se usa <span lang=\"en\">was</span> + verbo con -ing. Puedes elegir otra opción."
            }
          ]
        }
      ]
    },
    {
      id: 3,
      titulo: "Vida cotidiana",
      descripcion: "Habla de los números, la hora y tu familia.",
      nivel: "a1",
      lecciones: [
        {
          id: 5,
          titulo: "Números y la hora",
          descripcion: "Cuenta y di qué hora es",
          consejo: "Para preguntar la hora se dice <span lang=\"en\">What time is it?</span>. Para responder se usa <span lang=\"en\">It's</span> + la hora; si es una hora en punto se agrega <span lang=\"en\">o'clock</span>: <span lang=\"en\">It's three o'clock</span>.",
          teoria: {
            titulo: "Aprende los números y la hora",
            html: "<p>Los primeros números son <strong lang=\"en\">one, two, three</strong>. Para decir la hora puedes usar <strong lang=\"en\">It's … o'clock</strong>.</p><ul class=\"lista-vocabulario lista-numeros\"> <li><strong lang=\"en\">one</strong> <span>uno</span></li> <li><strong lang=\"en\">two</strong> <span>dos</span></li> <li><strong lang=\"en\">three</strong> <span>tres</span></li> <li><strong lang=\"en\">four</strong> <span>cuatro</span></li> <li><strong lang=\"en\">five</strong> <span>cinco</span></li> <li><strong lang=\"en\">six</strong> <span>seis</span></li> <li><strong lang=\"en\">seven</strong> <span>siete</span></li> <li><strong lang=\"en\">eight</strong> <span>ocho</span></li> <li><strong lang=\"en\">nine</strong> <span>nueve</span></li> <li><strong lang=\"en\">ten</strong> <span>diez</span></li> </ul><p class=\"ejemplo-ingles\"><span lang=\"en\">twenty</span> <span>→ veinte</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">What time is it?</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">It's three o'clock</span> <span>→ son las tres en punto</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Qué número es <span lang=\"en\">five</span>?",
              opciones: [
                {
                  texto: "Cuatro",
                  correcta: false
                },
                {
                  texto: "Cinco",
                  correcta: true
                },
                {
                  texto: "Seis",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">five</span> significa «cinco».",
              error: "Todavía no. <span lang=\"en\">five</span> significa «cinco». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «diez»?",
              opciones: [
                {
                  texto: "ten",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "two",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "twelve",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! «Diez» se dice <span lang=\"en\">ten</span>.",
              error: "Todavía no. <span lang=\"en\">two</span> es «dos» y <span lang=\"en\">twelve</span> es «doce». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se pregunta la hora?",
              opciones: [
                {
                  texto: "How old are you?",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "What time is it?",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "What is your name?",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">What time is it?</span> significa «¿qué hora es?».",
              error: "Todavía no. <span lang=\"en\">How old are you?</span> pregunta la edad y <span lang=\"en\">What is your name?</span> pregunta el nombre. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 6,
          titulo: "Mi familia",
          descripcion: "Presenta a los miembros de tu familia",
          consejo: "Para decir «mi» se usa <span lang=\"en\">my</span>: <span lang=\"en\">my mother</span>, <span lang=\"en\">my brother</span>. Para presentar a alguien se dice <span lang=\"en\">This is my…</span>, que significa «este / esta es mi…».",
          teoria: {
            titulo: "Aprende los miembros de la familia",
            html: "<p>Para presentar a tu familia, puedes decir <strong lang=\"en\">This is my mother</strong>.</p><ul class=\"lista-vocabulario\"> <li><strong lang=\"en\">mother</strong> <span>madre</span></li> <li><strong lang=\"en\">father</strong> <span>padre</span></li> <li><strong lang=\"en\">brother</strong> <span>hermano</span></li> <li><strong lang=\"en\">sister</strong> <span>hermana</span></li> <li><strong lang=\"en\">grandmother</strong> <span>abuela</span></li> <li><strong lang=\"en\">grandfather</strong> <span>abuelo</span></li> </ul><p class=\"ejemplo-ingles\"><span lang=\"en\">This is my mother</span> <span>→ esta es mi madre</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I have two brothers</span> <span>→ tengo dos hermanos</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">mother</span>?",
              opciones: [
                {
                  texto: "Padre",
                  correcta: false
                },
                {
                  texto: "Madre",
                  correcta: true
                },
                {
                  texto: "Hermana",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">mother</span> significa «madre».",
              error: "Todavía no. <span lang=\"en\">mother</span> significa «madre». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la traducción correcta.",
              pregunta: "¿Cómo se dice «hermano»?",
              opciones: [
                {
                  texto: "sister",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "brother",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "father",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! «Hermano» se dice <span lang=\"en\">brother</span>.",
              error: "Todavía no. <span lang=\"en\">sister</span> es «hermana» y <span lang=\"en\">father</span> es «padre». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «esta es mi hermana»?",
              opciones: [
                {
                  texto: "This is my sister",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "This are my sister",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "These is my sister",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">This is my sister</span> significa «esta es mi hermana».",
              error: "Todavía no. Para una persona se usa <span lang=\"en\">This is</span>. Puedes elegir otra opción."
            }
          ]
        }
      ]
    },
    {
      id: 4,
      titulo: "Repaso",
      descripcion: "Combina lo aprendido en una conversación.",
      nivel: "a1",
      lecciones: [
        {
          id: 7,
          titulo: "Diálogo de repaso",
          descripcion: "Combina lo aprendido en una conversación",
          consejo: "En este repaso combinas lo que aprendiste: saludos, el verbo <span lang=\"en\">to be</span>, el presente y el pasado. Lee el diálogo con atención antes de responder.",
          teoria: {
            titulo: "Lee el diálogo",
            html: "<p>Tom y Ana se conocen. Lee lo que dicen y fíjate en la traducción.</p><dl class=\"dialogo-ingles\"> <dt>Tom</dt> <dd><span lang=\"en\">Hello! My name is Tom.</span> <span>→ ¡Hola! Me llamo Tom.</span></dd> <dt>Ana</dt> <dd><span lang=\"en\">Hi, Tom! I am Ana. Nice to meet you.</span> <span>→ ¡Hola, Tom! Soy Ana. Encantada de conocerte.</span></dd> <dt>Tom</dt> <dd><span lang=\"en\">Where do you live?</span> <span>→ ¿Dónde vives?</span></dd> <dt>Ana</dt> <dd><span lang=\"en\">I live in Madrid. I work in a school.</span> <span>→ Vivo en Madrid. Trabajo en una escuela.</span></dd> </dl>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Elige la respuesta adecuada.",
              pregunta: "Tom dice <span lang=\"en\">Hello! My name is Tom.</span> ¿Qué responde Ana?",
              opciones: [
                {
                  texto: "Hi, Tom! I am Ana.",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "Goodbye, Tom.",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "Good night, Tom.",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Ana saluda y se presenta: <span lang=\"en\">Hi, Tom! I am Ana.</span>",
              error: "Todavía no. Cuando alguien se presenta, saludas y dices tu nombre. Puedes elegir otra opción."
            },
            {
              titulo: "Completa la frase",
              consigna: "Elige la palabra que falta.",
              pregunta: "<span lang=\"en\">Nice to ___ you.</span> (Encantada de conocerte.)",
              opciones: [
                {
                  texto: "name",
                  idioma: "en",
                  correcta: false
                },
                {
                  texto: "meet",
                  idioma: "en",
                  correcta: true
                },
                {
                  texto: "work",
                  idioma: "en",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Nice to meet you</span> significa «encantada de conocerte».",
              error: "Todavía no. <span lang=\"en\">meet</span> significa «conocer». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona el significado correcto.",
              pregunta: "¿Qué significa <span lang=\"en\">Where do you live?</span>",
              opciones: [
                {
                  texto: "¿Dónde trabajas?",
                  correcta: false
                },
                {
                  texto: "¿Cómo te llamas?",
                  correcta: false
                },
                {
                  texto: "¿Dónde vives?",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Where do you live?</span> significa «¿dónde vives?».",
              error: "Todavía no. <span lang=\"en\">live</span> significa «vivir». Puedes elegir otra opción."
            }
          ]
        }
      ]
    },
    {
      id: 5,
      titulo: "Vida diaria",
      descripcion: "Desenvuélvete en un restaurante y en la calle.",
      nivel: "a2",
      lecciones: [
        {
          id: 8,
          titulo: "En el restaurante",
          descripcion: "Pide comida y pregunta precios",
          consejo: "<span lang=\"en\">I would like</span> es una forma amable de pedir. Suele abreviarse <span lang=\"en\">I'd like</span>.",
          teoria: {
            titulo: "Aprende a pedir con cortesía",
            html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I would like a coffee</span> <span>→ quisiera un café</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Can I have the bill, please?</span> <span>→ ¿Me trae la cuenta, por favor?</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">How much is it?</span> <span>→ ¿Cuánto cuesta?</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «quisiera un café»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">I would like a coffee</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">How much is it?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">Can I have the bill, please?</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I would like a coffee</span> significa «quisiera un café».",
              error: "Todavía no. <span lang=\"en\">I would like a coffee</span> significa «quisiera un café». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">Can I have the bill, please?</span>?",
              opciones: [
                {
                  texto: "¿Me trae la cuenta, por favor?",
                  correcta: true
                },
                {
                  texto: "quisiera un café",
                  correcta: false
                },
                {
                  texto: "¿Cuánto cuesta?",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Can I have the bill, please?</span> significa «¿Me trae la cuenta, por favor?».",
              error: "Todavía no. <span lang=\"en\">Can I have the bill, please?</span> significa «¿Me trae la cuenta, por favor?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">How much is it?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">Can I have the bill, please?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I would like a coffee</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">How much is it?</span> significa «¿Cuánto cuesta?».",
              error: "Todavía no. <span lang=\"en\">How much is it?</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 9,
          titulo: "Cómo llegar",
          descripcion: "Pregunta y entiende direcciones",
          consejo: "<span lang=\"en\">Turn</span> significa «doblar» y <span lang=\"en\">straight ahead</span> significa «derecho».",
          teoria: {
            titulo: "Aprende a orientarte",
            html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">Where is the station?</span> <span>→ ¿Dónde está la estación?</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Turn left</span> <span>→ dobla a la izquierda</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">Go straight ahead</span> <span>→ sigue derecho</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Dónde está la estación?»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">Turn left</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">Where is the station?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">Go straight ahead</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Where is the station?</span> significa «¿Dónde está la estación?».",
              error: "Todavía no. <span lang=\"en\">Where is the station?</span> significa «¿Dónde está la estación?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">Turn left</span>?",
              opciones: [
                {
                  texto: "sigue derecho",
                  correcta: false
                },
                {
                  texto: "dobla a la izquierda",
                  correcta: true
                },
                {
                  texto: "¿Dónde está la estación?",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Turn left</span> significa «dobla a la izquierda».",
              error: "Todavía no. <span lang=\"en\">Turn left</span> significa «dobla a la izquierda». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «sigue derecho»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">Where is the station?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">Go straight ahead</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">Turn left</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Go straight ahead</span> significa «sigue derecho».",
              error: "Todavía no. <span lang=\"en\">Go straight ahead</span> significa «sigue derecho». Puedes elegir otra opción."
            }
          ]
        }
      ]
    },
    {
      id: 6,
      titulo: "Planes y comparaciones",
      descripcion: "Cuenta tus planes y compara personas y cosas.",
      nivel: "a2",
      lecciones: [
        {
          id: 10,
          titulo: "Planes futuros",
          descripcion: "Cuenta lo que vas a hacer",
          consejo: "<span lang=\"en\">Going to</span> se usa para planes ya decididos, y va después del verbo <span lang=\"en\">to be</span>.",
          teoria: {
            titulo: "Aprende a hablar del futuro",
            html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am going to travel</span> <span>→ voy a viajar</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">She is going to study</span> <span>→ ella va a estudiar</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">We are going to eat</span> <span>→ vamos a comer</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «voy a viajar»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">We are going to eat</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">She is going to study</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I am going to travel</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I am going to travel</span> significa «voy a viajar».",
              error: "Todavía no. <span lang=\"en\">I am going to travel</span> significa «voy a viajar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">She is going to study</span>?",
              opciones: [
                {
                  texto: "voy a viajar",
                  correcta: false
                },
                {
                  texto: "vamos a comer",
                  correcta: false
                },
                {
                  texto: "ella va a estudiar",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">She is going to study</span> significa «ella va a estudiar».",
              error: "Todavía no. <span lang=\"en\">She is going to study</span> significa «ella va a estudiar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «vamos a comer»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">She is going to study</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I am going to travel</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">We are going to eat</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">We are going to eat</span> significa «vamos a comer».",
              error: "Todavía no. <span lang=\"en\">We are going to eat</span> significa «vamos a comer». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 11,
          titulo: "Comparaciones",
          descripcion: "Compara personas y cosas",
          consejo: "Las palabras cortas suman -er (<span lang=\"en\">bigger</span>). Las largas usan <span lang=\"en\">more</span> (<span lang=\"en\">more expensive</span>).",
          teoria: {
            titulo: "Aprende a comparar",
            html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">bigger than</span> <span>→ más grande que</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">more expensive than</span> <span>→ más caro que</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">the best</span> <span>→ el mejor</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «más grande que»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">bigger than</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">the best</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">more expensive than</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">bigger than</span> significa «más grande que».",
              error: "Todavía no. <span lang=\"en\">bigger than</span> significa «más grande que». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">more expensive than</span>?",
              opciones: [
                {
                  texto: "más caro que",
                  correcta: true
                },
                {
                  texto: "más grande que",
                  correcta: false
                },
                {
                  texto: "el mejor",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">more expensive than</span> significa «más caro que».",
              error: "Todavía no. <span lang=\"en\">more expensive than</span> significa «más caro que». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «el mejor»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">the best</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">more expensive than</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">bigger than</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">the best</span> significa «el mejor».",
              error: "Todavía no. <span lang=\"en\">the best</span> significa «el mejor». Puedes elegir otra opción."
            }
          ]
        }
      ]
    },
    {
      id: 7,
      titulo: "Opiniones y consejos",
      descripcion: "Expresa lo que piensas y da consejos.",
      nivel: "b1",
      lecciones: [
        {
          id: 12,
          titulo: "Dar tu opinión",
          descripcion: "Expresa lo que piensas",
          consejo: "<span lang=\"en\">I think that</span> presenta una opinión personal. En el habla diaria, <span lang=\"en\">that</span> muchas veces se omite.",
          teoria: {
            titulo: "Aprende a opinar",
            html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I think that it is good</span> <span>→ creo que está bien</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">In my opinion</span> <span>→ en mi opinión</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I agree</span> <span>→ estoy de acuerdo</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «creo que está bien»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">In my opinion</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I think that it is good</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">I agree</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I think that it is good</span> significa «creo que está bien».",
              error: "Todavía no. <span lang=\"en\">I think that it is good</span> significa «creo que está bien». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">In my opinion</span>?",
              opciones: [
                {
                  texto: "estoy de acuerdo",
                  correcta: false
                },
                {
                  texto: "en mi opinión",
                  correcta: true
                },
                {
                  texto: "creo que está bien",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">In my opinion</span> significa «en mi opinión».",
              error: "Todavía no. <span lang=\"en\">In my opinion</span> significa «en mi opinión». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «estoy de acuerdo»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">I think that it is good</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I agree</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">In my opinion</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I agree</span> significa «estoy de acuerdo».",
              error: "Todavía no. <span lang=\"en\">I agree</span> significa «estoy de acuerdo». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 13,
          titulo: "Consejos y deseos",
          descripcion: "Aconseja y habla de lo que te gustaría",
          consejo: "<span lang=\"en\">Should</span> da consejos. Después de <span lang=\"en\">if</span> + pasado se usa <span lang=\"en\">would</span> para imaginar situaciones.",
          teoria: {
            titulo: "Aprende a aconsejar",
            html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">You should study</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">If I had time, I would travel</span> <span>→ si tuviera tiempo, viajaría</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I would like to learn</span> <span>→ me gustaría aprender</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «deberías estudiar»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">I would like to learn</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">If I had time, I would travel</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">You should study</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">You should study</span> significa «deberías estudiar».",
              error: "Todavía no. <span lang=\"en\">You should study</span> significa «deberías estudiar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">If I had time, I would travel</span>?",
              opciones: [
                {
                  texto: "deberías estudiar",
                  correcta: false
                },
                {
                  texto: "me gustaría aprender",
                  correcta: false
                },
                {
                  texto: "si tuviera tiempo, viajaría",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">If I had time, I would travel</span> significa «si tuviera tiempo, viajaría».",
              error: "Todavía no. <span lang=\"en\">If I had time, I would travel</span> significa «si tuviera tiempo, viajaría». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «me gustaría aprender»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">If I had time, I would travel</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">You should study</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I would like to learn</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I would like to learn</span> significa «me gustaría aprender».",
              error: "Todavía no. <span lang=\"en\">I would like to learn</span> significa «me gustaría aprender». Puedes elegir otra opción."
            }
          ]
        }
      ]
    },
    {
      id: 8,
      titulo: "Experiencias y trabajo",
      descripcion: "Habla de tu vida, tus estudios y tu trabajo.",
      nivel: "b1",
      lecciones: [
        {
          id: 14,
          titulo: "Experiencias",
          descripcion: "Cuenta lo que hiciste en tu vida",
          consejo: "<span lang=\"en\">Have you ever...?</span> pregunta si alguien hizo algo alguna vez, sin decir cuándo.",
          teoria: {
            titulo: "Aprende a contar experiencias",
            html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">Have you ever been to London?</span> <span>→ ¿Alguna vez fuiste a Londres?</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I have visited Rome</span> <span>→ visité Roma</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I have never eaten that</span> <span>→ nunca comí eso</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Alguna vez fuiste a Londres?»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">Have you ever been to London?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">I have never eaten that</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I have visited Rome</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">Have you ever been to London?</span> significa «¿Alguna vez fuiste a Londres?».",
              error: "Todavía no. <span lang=\"en\">Have you ever been to London?</span> significa «¿Alguna vez fuiste a Londres?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">I have visited Rome</span>?",
              opciones: [
                {
                  texto: "visité Roma",
                  correcta: true
                },
                {
                  texto: "¿Alguna vez fuiste a Londres?",
                  correcta: false
                },
                {
                  texto: "nunca comí eso",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I have visited Rome</span> significa «visité Roma».",
              error: "Todavía no. <span lang=\"en\">I have visited Rome</span> significa «visité Roma». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «nunca comí eso»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">I have never eaten that</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">I have visited Rome</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">Have you ever been to London?</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I have never eaten that</span> significa «nunca comí eso».",
              error: "Todavía no. <span lang=\"en\">I have never eaten that</span> significa «nunca comí eso». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 15,
          titulo: "Trabajo y estudios",
          descripcion: "Habla de tu trabajo y tu búsqueda laboral",
          consejo: "<span lang=\"en\">For</span> indica cuánto dura algo: <span lang=\"en\">for two years</span> significa «desde hace dos años».",
          teoria: {
            titulo: "Aprende a hablar de trabajo",
            html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-ingles\"><span lang=\"en\">I have worked here for two years</span> <span>→ trabajo aquí desde hace dos años</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am responsible for sales</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-ingles\"><span lang=\"en\">I am looking for a job</span> <span>→ estoy buscando trabajo</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «trabajo aquí desde hace dos años»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">I am responsible for sales</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I have worked here for two years</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">I am looking for a job</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I have worked here for two years</span> significa «trabajo aquí desde hace dos años».",
              error: "Todavía no. <span lang=\"en\">I have worked here for two years</span> significa «trabajo aquí desde hace dos años». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"en\">I am responsible for sales</span>?",
              opciones: [
                {
                  texto: "estoy buscando trabajo",
                  correcta: false
                },
                {
                  texto: "soy responsable de ventas",
                  correcta: true
                },
                {
                  texto: "trabajo aquí desde hace dos años",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I am responsible for sales</span> significa «soy responsable de ventas».",
              error: "Todavía no. <span lang=\"en\">I am responsible for sales</span> significa «soy responsable de ventas». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
              opciones: [
                {
                  texto: "<span lang=\"en\">I have worked here for two years</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"en\">I am looking for a job</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"en\">I am responsible for sales</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"en\">I am looking for a job</span> significa «estoy buscando trabajo».",
              error: "Todavía no. <span lang=\"en\">I am looking for a job</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
            }
          ]
        }
      ]
    }
  ]
};
