/* =====================================================================
   italiano.js  -  CURSO: ITALIANO

   Contenido propio de este idioma: niveles, unidades, lecciones y ejercicios.
   Las unidades compartidas las agrega js/datos/generador_cursos.js.
   ===================================================================== */


const CURSO_ITALIANO = {
  id: "italiano",
  nombre: "Italiano",
  nombreCompleto: "Italiano desde Español",
  codigoIdioma: "it",
  descripcion: "Un idioma cercano al español, ideal para descubrir el arte, la música y la cocina de Italia.",
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
          descripcion: "Aprende <span lang=\"it\">Buongiorno</span>, <span lang=\"it\">Ciao</span> y <span lang=\"it\">Mi chiamo</span>",
          consejo: "<span lang=\"it\">Ciao</span> es informal y sirve para saludar y para despedirse. <span lang=\"it\">Buongiorno</span> se usa por la mañana y <span lang=\"it\">Buonasera</span> desde la tarde.",
          teoria: {
            titulo: "Aprende a saludar y presentarte",
            html: "<p>Para presentarte, puedes decir <span lang=\"it\">Mi chiamo Ana</span>, que significa «me llamo Ana».</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Ciao</span> <span>→ hola / chau</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Buongiorno</span> <span>→ buenos días</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Mi chiamo...</span> <span>→ me llamo...</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Buongiorno</span>?",
              opciones: [
                {
                  texto: "Gracias",
                  correcta: false
                },
                {
                  texto: "Buenos días",
                  correcta: true
                },
                {
                  texto: "Adiós",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Buongiorno</span> significa «buenos días».",
              error: "Todavía no. <span lang=\"it\">Buongiorno</span> significa «buenos días». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «me llamo Ana»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Mi chiamo Ana</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Ti chiami Ana</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Si chiama Ana</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Para hablar de ti se usa <span lang=\"it\">Mi chiamo</span>.",
              error: "Todavía no. Para hablar de ti se usa <span lang=\"it\">Mi chiamo</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué saludo usarías por la tarde?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Grazie</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Arrivederci</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Buonasera</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! Desde la tarde se saluda con <span lang=\"it\">Buonasera</span>.",
              error: "Todavía no. Desde la tarde se saluda con <span lang=\"it\">Buonasera</span>. Puedes elegir otra opción."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      titulo: "Gramática básica",
      descripcion: "Construye frases en presente y pasado.",
      nivel: "a1",
      lecciones: [
        {
          id: 2,
          titulo: "Verbo essere",
          descripcion: "Aprende <span lang=\"it\">io sono</span>, <span lang=\"it\">tu sei</span> y <span lang=\"it\">lei è</span>",
          consejo: "El verbo <span lang=\"it\">essere</span> significa «ser». Cambia con cada persona: <span lang=\"it\">io sono</span>, <span lang=\"it\">tu sei</span>, <span lang=\"it\">lei è</span>, <span lang=\"it\">noi siamo</span>.",
          teoria: {
            titulo: "Aprende el verbo essere",
            html: "<p>Para decir quién eres, puedes usar <span lang=\"it\">Io sono studente</span>.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Io sono</span> <span>→ yo soy</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Tu sei</span> <span>→ tú eres</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Lei è</span> <span>→ ella es</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Noi siamo</span> <span>→ nosotros somos</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «yo soy estudiante»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Io è studente</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Io sei studente</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Io sono studente</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"it\">io</span> se usa <span lang=\"it\">sono</span>.",
              error: "Todavía no. Con <span lang=\"it\">io</span> se usa <span lang=\"it\">sono</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «ella es profesora»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Lei è professoressa</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Lei sei professoressa</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Lei siamo professoressa</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"it\">lei</span> se usa <span lang=\"it\">è</span>.",
              error: "Todavía no. Con <span lang=\"it\">lei</span> se usa <span lang=\"it\">è</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «nosotros somos amigos»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Noi sono amici</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Noi siamo amici</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Noi è amici</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"it\">noi</span> se usa <span lang=\"it\">siamo</span>.",
              error: "Todavía no. Con <span lang=\"it\">noi</span> se usa <span lang=\"it\">siamo</span>. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 3,
          titulo: "El presente",
          descripcion: "Aprende <span lang=\"it\">io parlo</span> y <span lang=\"it\">noi parliamo</span>",
          consejo: "Los verbos terminados en -are, como <span lang=\"it\">parlare</span>, terminan en -o con <span lang=\"it\">io</span> y en -iamo con <span lang=\"it\">noi</span>.",
          teoria: {
            titulo: "Aprende el presente",
            html: "<p>El verbo <span lang=\"it\">parlare</span> significa «hablar». Así se conjuga en presente:</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Io parlo</span> <span>→ yo hablo</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Tu parli</span> <span>→ tú hablas</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Noi parliamo</span> <span>→ nosotros hablamos</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «yo hablo italiano»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Io parlo italiano</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Io parli italiano</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Io parliamo italiano</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"it\">io</span> el verbo termina en -o.",
              error: "Todavía no. Con <span lang=\"it\">io</span> el verbo termina en -o. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «nosotros hablamos»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Noi parlo</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Noi parli</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Noi parliamo</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"it\">noi</span> el verbo termina en -iamo.",
              error: "Todavía no. Con <span lang=\"it\">noi</span> el verbo termina en -iamo. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «tú trabajas»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Tu lavoro</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Tu lavori</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Tu lavoriamo</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"it\">tu</span> el verbo termina en -i.",
              error: "Todavía no. Con <span lang=\"it\">tu</span> el verbo termina en -i. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 4,
          titulo: "El pasado",
          descripcion: "Cuenta lo que hiciste con <span lang=\"it\">ho parlato</span>",
          consejo: "El <span lang=\"it\">passato prossimo</span> se forma con <span lang=\"it\">avere</span> y el participio: <span lang=\"it\">ho mangiato</span> significa «comí».",
          teoria: {
            titulo: "Aprende el pasado",
            html: "<p>Para contar algo que ya pasó, se usa <span lang=\"it\">avere</span> más el participio.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Ho mangiato</span> <span>→ comí</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Hai lavorato</span> <span>→ trabajaste</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Abbiamo parlato</span> <span>→ hablamos</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «comí»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Ho mangiato</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Mangio</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Mangerò</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Ho mangiato</span> está en pasado; <span lang=\"it\">mangio</span> está en presente.",
              error: "Todavía no. <span lang=\"it\">Ho mangiato</span> está en pasado; <span lang=\"it\">mangio</span> está en presente. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Hai lavorato</span>?",
              opciones: [
                {
                  texto: "Trabajas",
                  correcta: false
                },
                {
                  texto: "Trabajarás",
                  correcta: false
                },
                {
                  texto: "Trabajaste",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Hai lavorato</span> significa «trabajaste».",
              error: "Todavía no. <span lang=\"it\">Hai lavorato</span> significa «trabajaste». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «hablamos» en pasado?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Parliamo</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Abbiamo parlato</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Parleremo</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! El pasado se forma con <span lang=\"it\">abbiamo</span> y <span lang=\"it\">parlato</span>.",
              error: "Todavía no. El pasado se forma con <span lang=\"it\">abbiamo</span> y <span lang=\"it\">parlato</span>. Puedes elegir otra opción."
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
          consejo: "Para decir la hora se usa <span lang=\"it\">Sono le</span>: <span lang=\"it\">Sono le tre</span> significa «son las tres». A la una se dice <span lang=\"it\">È l'una</span>.",
          teoria: {
            titulo: "Aprende los números y la hora",
            html: "<p>Para preguntar la hora se dice <span lang=\"it\">Che ore sono?</span>.</p><ul class=\"lista-vocabulario lista-numeros\"><li><strong lang=\"it\">uno</strong> <span>uno</span></li><li><strong lang=\"it\">due</strong> <span>dos</span></li><li><strong lang=\"it\">tre</strong> <span>tres</span></li><li><strong lang=\"it\">quattro</strong> <span>cuatro</span></li><li><strong lang=\"it\">cinque</strong> <span>cinco</span></li><li><strong lang=\"it\">sei</strong> <span>seis</span></li><li><strong lang=\"it\">sette</strong> <span>siete</span></li><li><strong lang=\"it\">otto</strong> <span>ocho</span></li><li><strong lang=\"it\">nove</strong> <span>nueve</span></li><li><strong lang=\"it\">dieci</strong> <span>diez</span></li></ul><p class=\"ejemplo-italiano\"><span lang=\"it\">Che ore sono?</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Sono le tre</span> <span>→ son las tres</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué número es <span lang=\"it\">cinque</span>?",
              opciones: [
                {
                  texto: "Cuatro",
                  correcta: false
                },
                {
                  texto: "Seis",
                  correcta: false
                },
                {
                  texto: "Cinco",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">cinque</span> significa «cinco».",
              error: "Todavía no. <span lang=\"it\">cinque</span> significa «cinco». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «diez»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">dieci</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">due</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">sei</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! «Diez» se dice <span lang=\"it\">dieci</span>; <span lang=\"it\">due</span> es «dos» y <span lang=\"it\">sei</span> es «seis».",
              error: "Todavía no. «Diez» se dice <span lang=\"it\">dieci</span>; <span lang=\"it\">due</span> es «dos» y <span lang=\"it\">sei</span> es «seis». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se pregunta la hora?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Come ti chiami?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Che ore sono?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Come stai?</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Che ore sono?</span> significa «¿qué hora es?».",
              error: "Todavía no. <span lang=\"it\">Che ore sono?</span> significa «¿qué hora es?». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 6,
          titulo: "Mi familia",
          descripcion: "Presenta a los miembros de tu familia",
          consejo: "«Mi» cambia según la palabra: <span lang=\"it\">mio padre</span> (mi padre) y <span lang=\"it\">mia madre</span> (mi madre).",
          teoria: {
            titulo: "Aprende la familia",
            html: "<p>Para presentar a alguien, puedes decir <span lang=\"it\">Questa è mia sorella</span>, «esta es mi hermana».</p><ul class=\"lista-vocabulario\"><li><strong lang=\"it\">il padre</strong> <span>el padre</span></li><li><strong lang=\"it\">la madre</strong> <span>la madre</span></li><li><strong lang=\"it\">il fratello</strong> <span>el hermano</span></li><li><strong lang=\"it\">la sorella</strong> <span>la hermana</span></li></ul>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">la sorella</span>?",
              opciones: [
                {
                  texto: "La madre",
                  correcta: false
                },
                {
                  texto: "La hermana",
                  correcta: true
                },
                {
                  texto: "La abuela",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">la sorella</span> significa «la hermana».",
              error: "Todavía no. <span lang=\"it\">la sorella</span> significa «la hermana». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «mi hermano»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">mia sorella</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">mio padre</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">mio fratello</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! «Hermano» es <span lang=\"it\">fratello</span>: <span lang=\"it\">mio fratello</span>.",
              error: "Todavía no. «Hermano» es <span lang=\"it\">fratello</span>: <span lang=\"it\">mio fratello</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Questa è mia madre</span>?",
              opciones: [
                {
                  texto: "Esta es mi madre",
                  correcta: true
                },
                {
                  texto: "Esta es mi hermana",
                  correcta: false
                },
                {
                  texto: "Esta es mi amiga",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">mia madre</span> significa «mi madre».",
              error: "Todavía no. <span lang=\"it\">mia madre</span> significa «mi madre». Puedes elegir otra opción."
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
          consejo: "<span lang=\"it\">Come stai?</span> significa «¿cómo estás?». Una respuesta habitual es <span lang=\"it\">Sto bene, grazie</span>.",
          teoria: {
            titulo: "Lee el diálogo",
            html: "<p>Repasa lo aprendido con esta conversación entre dos personas.</p><dl class=\"dialogo-italiano\"><dt>Giulia</dt><dd lang=\"it\">Ciao! Come stai?</dd><dt>Luca</dt><dd lang=\"it\">Sto bene, grazie. E tu?</dd><dt>Giulia</dt><dd lang=\"it\">Molto bene. Come ti chiami?</dd><dt>Luca</dt><dd lang=\"it\">Mi chiamo Luca. A presto!</dd></dl>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Come stai?</span>?",
              opciones: [
                {
                  texto: "¿Cómo estás?",
                  correcta: true
                },
                {
                  texto: "¿Cómo te llamas?",
                  correcta: false
                },
                {
                  texto: "¿Qué hora es?",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Come stai?</span> significa «¿cómo estás?».",
              error: "Todavía no. <span lang=\"it\">Come stai?</span> significa «¿cómo estás?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo respondes «bien, gracias»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Mi chiamo Luca</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Sto bene, grazie</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">A presto</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! La respuesta es <span lang=\"it\">Sto bene, grazie</span>.",
              error: "Todavía no. La respuesta es <span lang=\"it\">Sto bene, grazie</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">A presto</span>?",
              opciones: [
                {
                  texto: "Buenos días",
                  correcta: false
                },
                {
                  texto: "Por favor",
                  correcta: false
                },
                {
                  texto: "Hasta pronto",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">A presto</span> significa «hasta pronto».",
              error: "Todavía no. <span lang=\"it\">A presto</span> significa «hasta pronto». Puedes elegir otra opción."
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
          consejo: "<span lang=\"it\">Vorrei</span> es la forma cortés de pedir algo.",
          teoria: {
            titulo: "Aprende a pedir con cortesía",
            html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Vorrei un caffè</span> <span>→ quisiera un café</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Il conto, per favore</span> <span>→ la cuenta, por favor</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Quanto costa?</span> <span>→ ¿Cuánto cuesta?</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «quisiera un café»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Vorrei un caffè</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Quanto costa?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Il conto, per favore</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Vorrei un caffè</span> significa «quisiera un café».",
              error: "Todavía no. <span lang=\"it\">Vorrei un caffè</span> significa «quisiera un café». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Il conto, per favore</span>?",
              opciones: [
                {
                  texto: "la cuenta, por favor",
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
              acierto: "¡Correcto! <span lang=\"it\">Il conto, per favore</span> significa «la cuenta, por favor».",
              error: "Todavía no. <span lang=\"it\">Il conto, per favore</span> significa «la cuenta, por favor». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Quanto costa?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Il conto, per favore</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Vorrei un caffè</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Quanto costa?</span> significa «¿Cuánto cuesta?».",
              error: "Todavía no. <span lang=\"it\">Quanto costa?</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 9,
          titulo: "Cómo llegar",
          descripcion: "Pregunta y entiende direcciones",
          consejo: "<span lang=\"it\">a sinistra</span> significa «a la izquierda» y <span lang=\"it\">a destra</span> significa «a la derecha».",
          teoria: {
            titulo: "Aprende a orientarte",
            html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Dov'è la stazione?</span> <span>→ ¿Dónde está la estación?</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Giri a sinistra</span> <span>→ doble a la izquierda</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Vada sempre dritto</span> <span>→ siga derecho</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Dónde está la estación?»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Giri a sinistra</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Dov'è la stazione?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Vada sempre dritto</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Dov'è la stazione?</span> significa «¿Dónde está la estación?».",
              error: "Todavía no. <span lang=\"it\">Dov'è la stazione?</span> significa «¿Dónde está la estación?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Giri a sinistra</span>?",
              opciones: [
                {
                  texto: "siga derecho",
                  correcta: false
                },
                {
                  texto: "doble a la izquierda",
                  correcta: true
                },
                {
                  texto: "¿Dónde está la estación?",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Giri a sinistra</span> significa «doble a la izquierda».",
              error: "Todavía no. <span lang=\"it\">Giri a sinistra</span> significa «doble a la izquierda». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «siga derecho»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Dov'è la stazione?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Vada sempre dritto</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Giri a sinistra</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Vada sempre dritto</span> significa «siga derecho».",
              error: "Todavía no. <span lang=\"it\">Vada sempre dritto</span> significa «siga derecho». Puedes elegir otra opción."
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
          consejo: "El futuro se forma cambiando la terminación del verbo: <span lang=\"it\">viaggerò</span>, <span lang=\"it\">mangeremo</span>.",
          teoria: {
            titulo: "Aprende a hablar del futuro",
            html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Viaggerò</span> <span>→ viajaré</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Lei studierà</span> <span>→ ella estudiará</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Mangeremo</span> <span>→ comeremos</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «viajaré»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Mangeremo</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Lei studierà</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Viaggerò</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Viaggerò</span> significa «viajaré».",
              error: "Todavía no. <span lang=\"it\">Viaggerò</span> significa «viajaré». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Lei studierà</span>?",
              opciones: [
                {
                  texto: "viajaré",
                  correcta: false
                },
                {
                  texto: "comeremos",
                  correcta: false
                },
                {
                  texto: "ella estudiará",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Lei studierà</span> significa «ella estudiará».",
              error: "Todavía no. <span lang=\"it\">Lei studierà</span> significa «ella estudiará». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «comeremos»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Lei studierà</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Viaggerò</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Mangeremo</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Mangeremo</span> significa «comeremos».",
              error: "Todavía no. <span lang=\"it\">Mangeremo</span> significa «comeremos». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 11,
          titulo: "Comparaciones",
          descripcion: "Compara personas y cosas",
          consejo: "Para comparar se usa <span lang=\"it\">più</span> + adjetivo + <span lang=\"it\">di</span>.",
          teoria: {
            titulo: "Aprende a comparar",
            html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">più grande di</span> <span>→ más grande que</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">più caro di</span> <span>→ más caro que</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">il migliore</span> <span>→ el mejor</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «más grande que»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">più grande di</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">il migliore</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">più caro di</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">più grande di</span> significa «más grande que».",
              error: "Todavía no. <span lang=\"it\">più grande di</span> significa «más grande que». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">più caro di</span>?",
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
              acierto: "¡Correcto! <span lang=\"it\">più caro di</span> significa «más caro que».",
              error: "Todavía no. <span lang=\"it\">più caro di</span> significa «más caro que». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «el mejor»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">il migliore</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">più caro di</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">più grande di</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">il migliore</span> significa «el mejor».",
              error: "Todavía no. <span lang=\"it\">il migliore</span> significa «el mejor». Puedes elegir otra opción."
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
          consejo: "Después de <span lang=\"it\">penso che</span> suele usarse el subjuntivo: <span lang=\"it\">penso che sia</span>.",
          teoria: {
            titulo: "Aprende a opinar",
            html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Penso che sia bene</span> <span>→ creo que está bien</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Secondo me</span> <span>→ en mi opinión</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Sono d'accordo</span> <span>→ estoy de acuerdo</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «creo que está bien»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Secondo me</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Penso che sia bene</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Sono d'accordo</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Penso che sia bene</span> significa «creo que está bien».",
              error: "Todavía no. <span lang=\"it\">Penso che sia bene</span> significa «creo que está bien». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Secondo me</span>?",
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
              acierto: "¡Correcto! <span lang=\"it\">Secondo me</span> significa «en mi opinión».",
              error: "Todavía no. <span lang=\"it\">Secondo me</span> significa «en mi opinión». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «estoy de acuerdo»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Penso che sia bene</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Sono d'accordo</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Secondo me</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Sono d'accordo</span> significa «estoy de acuerdo».",
              error: "Todavía no. <span lang=\"it\">Sono d'accordo</span> significa «estoy de acuerdo». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 13,
          titulo: "Consejos y deseos",
          descripcion: "Aconseja y habla de lo que te gustaría",
          consejo: "<span lang=\"it\">Dovresti</span> da un consejo. Después de <span lang=\"it\">se</span> + subjuntivo se usa el condicional.",
          teoria: {
            titulo: "Aprende a aconsejar",
            html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Dovresti studiare</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Se avessi tempo, viaggerei</span> <span>→ si tuviera tiempo, viajaría</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Mi piacerebbe imparare</span> <span>→ me gustaría aprender</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «deberías estudiar»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Mi piacerebbe imparare</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Se avessi tempo, viaggerei</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Dovresti studiare</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Dovresti studiare</span> significa «deberías estudiar».",
              error: "Todavía no. <span lang=\"it\">Dovresti studiare</span> significa «deberías estudiar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Se avessi tempo, viaggerei</span>?",
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
              acierto: "¡Correcto! <span lang=\"it\">Se avessi tempo, viaggerei</span> significa «si tuviera tiempo, viajaría».",
              error: "Todavía no. <span lang=\"it\">Se avessi tempo, viaggerei</span> significa «si tuviera tiempo, viajaría». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «me gustaría aprender»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Se avessi tempo, viaggerei</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Dovresti studiare</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Mi piacerebbe imparare</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Mi piacerebbe imparare</span> significa «me gustaría aprender».",
              error: "Todavía no. <span lang=\"it\">Mi piacerebbe imparare</span> significa «me gustaría aprender». Puedes elegir otra opción."
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
          consejo: "Los verbos de movimiento, como <span lang=\"it\">andare</span>, forman el pasado con <span lang=\"it\">essere</span>: <span lang=\"it\">sono andato</span>.",
          teoria: {
            titulo: "Aprende a contar experiencias",
            html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Sono andato a Roma</span> <span>→ fui a Roma</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Ho visitato Parigi</span> <span>→ visité París</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Non ho mai mangiato questo</span> <span>→ nunca comí esto</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «fui a Roma»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Sono andato a Roma</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Non ho mai mangiato questo</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Ho visitato Parigi</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Sono andato a Roma</span> significa «fui a Roma».",
              error: "Todavía no. <span lang=\"it\">Sono andato a Roma</span> significa «fui a Roma». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Ho visitato Parigi</span>?",
              opciones: [
                {
                  texto: "visité París",
                  correcta: true
                },
                {
                  texto: "fui a Roma",
                  correcta: false
                },
                {
                  texto: "nunca comí esto",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Ho visitato Parigi</span> significa «visité París».",
              error: "Todavía no. <span lang=\"it\">Ho visitato Parigi</span> significa «visité París». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «nunca comí esto»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Non ho mai mangiato questo</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Ho visitato Parigi</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Sono andato a Roma</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Non ho mai mangiato questo</span> significa «nunca comí esto».",
              error: "Todavía no. <span lang=\"it\">Non ho mai mangiato questo</span> significa «nunca comí esto». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 15,
          titulo: "Trabajo y estudios",
          descripcion: "Habla de tu trabajo y tu búsqueda laboral",
          consejo: "<span lang=\"it\">Da</span> indica desde cuándo sucede algo, y el verbo va en presente.",
          teoria: {
            titulo: "Aprende a hablar de trabajo",
            html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-italiano\"><span lang=\"it\">Lavoro qui da due anni</span> <span>→ trabajo aquí desde hace dos años</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Sono responsabile delle vendite</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-italiano\"><span lang=\"it\">Cerco lavoro</span> <span>→ estoy buscando trabajo</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «trabajo aquí desde hace dos años»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Sono responsabile delle vendite</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Lavoro qui da due anni</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Cerco lavoro</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Lavoro qui da due anni</span> significa «trabajo aquí desde hace dos años».",
              error: "Todavía no. <span lang=\"it\">Lavoro qui da due anni</span> significa «trabajo aquí desde hace dos años». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"it\">Sono responsabile delle vendite</span>?",
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
              acierto: "¡Correcto! <span lang=\"it\">Sono responsabile delle vendite</span> significa «soy responsable de ventas».",
              error: "Todavía no. <span lang=\"it\">Sono responsabile delle vendite</span> significa «soy responsable de ventas». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
              opciones: [
                {
                  texto: "<span lang=\"it\">Lavoro qui da due anni</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"it\">Cerco lavoro</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"it\">Sono responsabile delle vendite</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"it\">Cerco lavoro</span> significa «estoy buscando trabajo».",
              error: "Todavía no. <span lang=\"it\">Cerco lavoro</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
            }
          ]
        }
      ]
    }
  ]
};
