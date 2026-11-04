/* =====================================================================
   portugues.js  -  CURSO: PORTUGUES

   Contenido propio de este idioma: niveles, unidades, lecciones y ejercicios.
   Las unidades compartidas las agrega js/datos/generador_cursos.js.
   ===================================================================== */


const CURSO_PORTUGUES = {
  id: "portugues",
  nombre: "Portugués",
  nombreCompleto: "Portugués desde Español",
  codigoIdioma: "pt",
  descripcion: "El idioma de Brasil y de Portugal, clave para viajar y trabajar en toda la región.",
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
          descripcion: "Aprende <span lang=\"pt\">Oi</span>, <span lang=\"pt\">Bom dia</span> y <span lang=\"pt\">Eu me chamo</span>",
          consejo: "<span lang=\"pt\">Oi</span> es informal. <span lang=\"pt\">Bom dia</span> se usa por la mañana, <span lang=\"pt\">Boa tarde</span> por la tarde y <span lang=\"pt\">Boa noite</span> por la noche.",
          teoria: {
            titulo: "Aprende a saludar y presentarte",
            html: "<p>Para presentarte, puedes decir <span lang=\"pt\">Eu me chamo Ana</span>, que significa «me llamo Ana».</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Oi</span> <span>→ hola</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Bom dia</span> <span>→ buenos días</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu me chamo...</span> <span>→ me llamo...</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Bom dia</span>?",
              opciones: [
                {
                  texto: "Buenas noches",
                  correcta: false
                },
                {
                  texto: "Gracias",
                  correcta: false
                },
                {
                  texto: "Buenos días",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Bom dia</span> significa «buenos días».",
              error: "Todavía no. <span lang=\"pt\">Bom dia</span> significa «buenos días». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «me llamo Ana»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu me chamo Ana</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Você se chama Ana</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Ela se chama Ana</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Para hablar de ti se usa <span lang=\"pt\">Eu me chamo</span>.",
              error: "Todavía no. Para hablar de ti se usa <span lang=\"pt\">Eu me chamo</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué saludo usarías por la noche?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Obrigado</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Boa noite</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Tchau</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Por la noche se saluda con <span lang=\"pt\">Boa noite</span>.",
              error: "Todavía no. Por la noche se saluda con <span lang=\"pt\">Boa noite</span>. Puedes elegir otra opción."
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
          titulo: "Verbo ser",
          descripcion: "Aprende <span lang=\"pt\">eu sou</span>, <span lang=\"pt\">você é</span> y <span lang=\"pt\">ela é</span>",
          consejo: "En Brasil es muy común usar <span lang=\"pt\">você</span> en lugar de «tú». Por eso se dice <span lang=\"pt\">você é</span>, «tú eres».",
          teoria: {
            titulo: "Aprende el verbo ser",
            html: "<p>Para decir quién eres, puedes usar <span lang=\"pt\">Eu sou estudante</span>.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu sou</span> <span>→ yo soy</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você é</span> <span>→ tú eres</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Ela é</span> <span>→ ella es</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Nós somos</span> <span>→ nosotros somos</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «yo soy estudiante»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu sou estudante</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Eu é estudante</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu somos estudante</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"pt\">eu</span> se usa <span lang=\"pt\">sou</span>.",
              error: "Todavía no. Con <span lang=\"pt\">eu</span> se usa <span lang=\"pt\">sou</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «ella es profesora»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Ela sou professora</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Ela somos professora</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Ela é professora</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"pt\">ela</span> se usa <span lang=\"pt\">é</span>.",
              error: "Todavía no. Con <span lang=\"pt\">ela</span> se usa <span lang=\"pt\">é</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «nosotros somos amigos»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Nós é amigos</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Nós somos amigos</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Nós sou amigos</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"pt\">nós</span> se usa <span lang=\"pt\">somos</span>.",
              error: "Todavía no. Con <span lang=\"pt\">nós</span> se usa <span lang=\"pt\">somos</span>. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 3,
          titulo: "El presente",
          descripcion: "Aprende <span lang=\"pt\">eu falo</span> y <span lang=\"pt\">nós falamos</span>",
          consejo: "Los verbos terminados en -ar, como <span lang=\"pt\">falar</span>, terminan en -o con <span lang=\"pt\">eu</span> y en -amos con <span lang=\"pt\">nós</span>.",
          teoria: {
            titulo: "Aprende el presente",
            html: "<p>El verbo <span lang=\"pt\">falar</span> significa «hablar». Así se conjuga en presente:</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu falo</span> <span>→ yo hablo</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você fala</span> <span>→ tú hablas</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Nós falamos</span> <span>→ nosotros hablamos</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «yo hablo portugués»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu falamos português</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu falo português</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Eu fala português</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"pt\">eu</span> el verbo termina en -o.",
              error: "Todavía no. Con <span lang=\"pt\">eu</span> el verbo termina en -o. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «nosotros hablamos»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Nós falo</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Nós fala</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Nós falamos</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"pt\">nós</span> el verbo termina en -amos.",
              error: "Todavía no. Con <span lang=\"pt\">nós</span> el verbo termina en -amos. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «tú trabajas»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Você trabalha</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Você trabalho</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Você trabalhamos</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"pt\">você</span> el verbo termina en -a.",
              error: "Todavía no. Con <span lang=\"pt\">você</span> el verbo termina en -a. Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 4,
          titulo: "El pasado",
          descripcion: "Cuenta lo que hiciste con <span lang=\"pt\">eu falei</span>",
          consejo: "En el pasado, los verbos en -ar terminan en -ei con <span lang=\"pt\">eu</span>: <span lang=\"pt\">eu falei</span>. Con <span lang=\"pt\">você</span> terminan en -ou: <span lang=\"pt\">você falou</span>.",
          teoria: {
            titulo: "Aprende el pasado",
            html: "<p>Para contar algo que ya pasó, cambia la terminación del verbo.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu falei</span> <span>→ hablé</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você trabalhou</span> <span>→ trabajaste</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu comi</span> <span>→ comí</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «comí»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu como</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu comi</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Eu vou comer</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Eu comi</span> está en pasado; <span lang=\"pt\">eu como</span> está en presente.",
              error: "Todavía no. <span lang=\"pt\">Eu comi</span> está en pasado; <span lang=\"pt\">eu como</span> está en presente. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Você trabalhou</span>?",
              opciones: [
                {
                  texto: "Trabajaste",
                  correcta: true
                },
                {
                  texto: "Trabajas",
                  correcta: false
                },
                {
                  texto: "Trabajarás",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Você trabalhou</span> significa «trabajaste».",
              error: "Todavía no. <span lang=\"pt\">Você trabalhou</span> significa «trabajaste». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «hablé»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu falo</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu vou falar</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu falei</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! Con <span lang=\"pt\">eu</span>, el pasado de <span lang=\"pt\">falar</span> es <span lang=\"pt\">falei</span>.",
              error: "Todavía no. Con <span lang=\"pt\">eu</span>, el pasado de <span lang=\"pt\">falar</span> es <span lang=\"pt\">falei</span>. Puedes elegir otra opción."
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
          consejo: "Para decir la hora se usa <span lang=\"pt\">São</span>: <span lang=\"pt\">São três horas</span> significa «son las tres». A la una se dice <span lang=\"pt\">É uma hora</span>.",
          teoria: {
            titulo: "Aprende los números y la hora",
            html: "<p>Para preguntar la hora se dice <span lang=\"pt\">Que horas são?</span>.</p><ul class=\"lista-vocabulario lista-numeros\"><li><strong lang=\"pt\">um</strong> <span>uno</span></li><li><strong lang=\"pt\">dois</strong> <span>dos</span></li><li><strong lang=\"pt\">três</strong> <span>tres</span></li><li><strong lang=\"pt\">quatro</strong> <span>cuatro</span></li><li><strong lang=\"pt\">cinco</strong> <span>cinco</span></li><li><strong lang=\"pt\">seis</strong> <span>seis</span></li><li><strong lang=\"pt\">sete</strong> <span>siete</span></li><li><strong lang=\"pt\">oito</strong> <span>ocho</span></li><li><strong lang=\"pt\">nove</strong> <span>nueve</span></li><li><strong lang=\"pt\">dez</strong> <span>diez</span></li></ul><p class=\"ejemplo-portugues\"><span lang=\"pt\">Que horas são?</span> <span>→ ¿Qué hora es?</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">São três horas</span> <span>→ son las tres</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué número es <span lang=\"pt\">oito</span>?",
              opciones: [
                {
                  texto: "Ocho",
                  correcta: true
                },
                {
                  texto: "Siete",
                  correcta: false
                },
                {
                  texto: "Nueve",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">oito</span> significa «ocho».",
              error: "Todavía no. <span lang=\"pt\">oito</span> significa «ocho». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «diez»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">dois</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">seis</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">dez</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! «Diez» se dice <span lang=\"pt\">dez</span>; <span lang=\"pt\">dois</span> es «dos» y <span lang=\"pt\">seis</span> es «seis».",
              error: "Todavía no. «Diez» se dice <span lang=\"pt\">dez</span>; <span lang=\"pt\">dois</span> es «dos» y <span lang=\"pt\">seis</span> es «seis». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se pregunta la hora?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Como você se chama?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Que horas são?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Tudo bem?</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Que horas são?</span> significa «¿qué hora es?».",
              error: "Todavía no. <span lang=\"pt\">Que horas são?</span> significa «¿qué hora es?». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 6,
          titulo: "Mi familia",
          descripcion: "Presenta a los miembros de tu familia",
          consejo: "«Mi» cambia según la palabra: <span lang=\"pt\">meu pai</span> (mi padre) y <span lang=\"pt\">minha mãe</span> (mi madre).",
          teoria: {
            titulo: "Aprende la familia",
            html: "<p>Para presentar a alguien, puedes decir <span lang=\"pt\">Esta é minha irmã</span>, «esta es mi hermana».</p><ul class=\"lista-vocabulario\"><li><strong lang=\"pt\">o pai</strong> <span>el padre</span></li><li><strong lang=\"pt\">a mãe</strong> <span>la madre</span></li><li><strong lang=\"pt\">o irmão</strong> <span>el hermano</span></li><li><strong lang=\"pt\">a irmã</strong> <span>la hermana</span></li></ul>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">a mãe</span>?",
              opciones: [
                {
                  texto: "La hermana",
                  correcta: false
                },
                {
                  texto: "La madre",
                  correcta: true
                },
                {
                  texto: "La hija",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">a mãe</span> significa «la madre».",
              error: "Todavía no. <span lang=\"pt\">a mãe</span> significa «la madre». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «mi hermano»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">meu irmão</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">minha irmã</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">meu pai</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! «Hermano» es <span lang=\"pt\">irmão</span>: <span lang=\"pt\">meu irmão</span>.",
              error: "Todavía no. «Hermano» es <span lang=\"pt\">irmão</span>: <span lang=\"pt\">meu irmão</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Esta é minha irmã</span>?",
              opciones: [
                {
                  texto: "Esta es mi madre",
                  correcta: false
                },
                {
                  texto: "Esta es mi amiga",
                  correcta: false
                },
                {
                  texto: "Esta es mi hermana",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">minha irmã</span> significa «mi hermana».",
              error: "Todavía no. <span lang=\"pt\">minha irmã</span> significa «mi hermana». Puedes elegir otra opción."
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
          consejo: "<span lang=\"pt\">Tudo bem?</span> significa «¿todo bien?». Se responde con <span lang=\"pt\">Tudo bem, obrigado</span>, o <span lang=\"pt\">obrigada</span> si quien habla es mujer.",
          teoria: {
            titulo: "Lee el diálogo",
            html: "<p>Repasa lo aprendido con esta conversación entre dos personas.</p><dl class=\"dialogo-portugues\"><dt>Bia</dt><dd lang=\"pt\">Oi! Tudo bem?</dd><dt>Leo</dt><dd lang=\"pt\">Tudo bem, obrigado. E você?</dd><dt>Bia</dt><dd lang=\"pt\">Muito bem. Como você se chama?</dd><dt>Leo</dt><dd lang=\"pt\">Eu me chamo Leo. Até logo!</dd></dl>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Tudo bem?</span>?",
              opciones: [
                {
                  texto: "¿Cómo te llamas?",
                  correcta: false
                },
                {
                  texto: "¿Todo bien?",
                  correcta: true
                },
                {
                  texto: "¿Qué hora es?",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Tudo bem?</span> significa «¿todo bien?».",
              error: "Todavía no. <span lang=\"pt\">Tudo bem?</span> significa «¿todo bien?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo preguntas «¿cómo te llamas?»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Como você se chama?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Que horas são?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Tudo bem?</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! La pregunta es <span lang=\"pt\">Como você se chama?</span>.",
              error: "Todavía no. La pregunta es <span lang=\"pt\">Como você se chama?</span>. Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Até logo</span>?",
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
                  texto: "Hasta luego",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Até logo</span> significa «hasta luego».",
              error: "Todavía no. <span lang=\"pt\">Até logo</span> significa «hasta luego». Puedes elegir otra opción."
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
          consejo: "<span lang=\"pt\">Eu gostaria de</span> es la forma cortés de pedir algo.",
          teoria: {
            titulo: "Aprende a pedir con cortesía",
            html: "<p>Estas frases te sirven para pedir algo en un restaurante o una tienda.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu gostaria de um café</span> <span>→ quisiera un café</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">A conta, por favor</span> <span>→ la cuenta, por favor</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Quanto custa?</span> <span>→ ¿Cuánto cuesta?</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «quisiera un café»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu gostaria de um café</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Quanto custa?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">A conta, por favor</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Eu gostaria de um café</span> significa «quisiera un café».",
              error: "Todavía no. <span lang=\"pt\">Eu gostaria de um café</span> significa «quisiera un café». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">A conta, por favor</span>?",
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
              acierto: "¡Correcto! <span lang=\"pt\">A conta, por favor</span> significa «la cuenta, por favor».",
              error: "Todavía no. <span lang=\"pt\">A conta, por favor</span> significa «la cuenta, por favor». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Cuánto cuesta?»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Quanto custa?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">A conta, por favor</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu gostaria de um café</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Quanto custa?</span> significa «¿Cuánto cuesta?».",
              error: "Todavía no. <span lang=\"pt\">Quanto custa?</span> significa «¿Cuánto cuesta?». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 9,
          titulo: "Cómo llegar",
          descripcion: "Pregunta y entiende direcciones",
          consejo: "<span lang=\"pt\">à esquerda</span> significa «a la izquierda» y <span lang=\"pt\">à direita</span> significa «a la derecha».",
          teoria: {
            titulo: "Aprende a orientarte",
            html: "<p>Con estas frases puedes preguntar dónde queda un lugar y seguir indicaciones.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Onde fica a estação?</span> <span>→ ¿Dónde queda la estación?</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Vire à esquerda</span> <span>→ doble a la izquierda</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Siga em frente</span> <span>→ siga derecho</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Dónde queda la estación?»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Vire à esquerda</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Onde fica a estação?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Siga em frente</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Onde fica a estação?</span> significa «¿Dónde queda la estación?».",
              error: "Todavía no. <span lang=\"pt\">Onde fica a estação?</span> significa «¿Dónde queda la estación?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Vire à esquerda</span>?",
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
                  texto: "¿Dónde queda la estación?",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Vire à esquerda</span> significa «doble a la izquierda».",
              error: "Todavía no. <span lang=\"pt\">Vire à esquerda</span> significa «doble a la izquierda». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «siga derecho»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Onde fica a estação?</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Siga em frente</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Vire à esquerda</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Siga em frente</span> significa «siga derecho».",
              error: "Todavía no. <span lang=\"pt\">Siga em frente</span> significa «siga derecho». Puedes elegir otra opción."
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
          consejo: "El futuro cercano se forma con <span lang=\"pt\">ir</span> más el verbo en infinitivo.",
          teoria: {
            titulo: "Aprende a hablar del futuro",
            html: "<p>Estas frases te permiten contar tus planes.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu vou viajar</span> <span>→ voy a viajar</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Ela vai estudar</span> <span>→ ella va a estudiar</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Nós vamos comer</span> <span>→ vamos a comer</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «voy a viajar»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Nós vamos comer</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Ela vai estudar</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu vou viajar</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Eu vou viajar</span> significa «voy a viajar».",
              error: "Todavía no. <span lang=\"pt\">Eu vou viajar</span> significa «voy a viajar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Ela vai estudar</span>?",
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
              acierto: "¡Correcto! <span lang=\"pt\">Ela vai estudar</span> significa «ella va a estudiar».",
              error: "Todavía no. <span lang=\"pt\">Ela vai estudar</span> significa «ella va a estudiar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «vamos a comer»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Ela vai estudar</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu vou viajar</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Nós vamos comer</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Nós vamos comer</span> significa «vamos a comer».",
              error: "Todavía no. <span lang=\"pt\">Nós vamos comer</span> significa «vamos a comer». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 11,
          titulo: "Comparaciones",
          descripcion: "Compara personas y cosas",
          consejo: "Para comparar se usa <span lang=\"pt\">mais</span> + adjetivo + <span lang=\"pt\">que</span>. Algunas formas son irregulares, como <span lang=\"pt\">maior</span>.",
          teoria: {
            titulo: "Aprende a comparar",
            html: "<p>Estas estructuras sirven para decir qué es más grande, más caro o mejor.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">maior que</span> <span>→ más grande que</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">mais caro que</span> <span>→ más caro que</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">o melhor</span> <span>→ el mejor</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «más grande que»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">maior que</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">o melhor</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">mais caro que</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">maior que</span> significa «más grande que».",
              error: "Todavía no. <span lang=\"pt\">maior que</span> significa «más grande que». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">mais caro que</span>?",
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
              acierto: "¡Correcto! <span lang=\"pt\">mais caro que</span> significa «más caro que».",
              error: "Todavía no. <span lang=\"pt\">mais caro que</span> significa «más caro que». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «el mejor»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">o melhor</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">mais caro que</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">maior que</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">o melhor</span> significa «el mejor».",
              error: "Todavía no. <span lang=\"pt\">o melhor</span> significa «el mejor». Puedes elegir otra opción."
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
          consejo: "<span lang=\"pt\">Eu acho que</span> es la forma más común de dar una opinión en Brasil.",
          teoria: {
            titulo: "Aprende a opinar",
            html: "<p>Con estas frases puedes dar tu opinión y decir si estás de acuerdo.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu acho que está bom</span> <span>→ creo que está bien</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Na minha opinião</span> <span>→ en mi opinión</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu concordo</span> <span>→ estoy de acuerdo</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «creo que está bien»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Na minha opinião</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu acho que está bom</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Eu concordo</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Eu acho que está bom</span> significa «creo que está bien».",
              error: "Todavía no. <span lang=\"pt\">Eu acho que está bom</span> significa «creo que está bien». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Na minha opinião</span>?",
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
              acierto: "¡Correcto! <span lang=\"pt\">Na minha opinião</span> significa «en mi opinión».",
              error: "Todavía no. <span lang=\"pt\">Na minha opinião</span> significa «en mi opinión». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «estoy de acuerdo»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu acho que está bom</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu concordo</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Na minha opinião</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Eu concordo</span> significa «estoy de acuerdo».",
              error: "Todavía no. <span lang=\"pt\">Eu concordo</span> significa «estoy de acuerdo». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 13,
          titulo: "Consejos y deseos",
          descripcion: "Aconseja y habla de lo que te gustaría",
          consejo: "<span lang=\"pt\">Você deveria</span> da un consejo. Después de <span lang=\"pt\">se</span> + subjuntivo se usa el condicional.",
          teoria: {
            titulo: "Aprende a aconsejar",
            html: "<p>Estas frases sirven para dar consejos y hablar de situaciones posibles.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você deveria estudar</span> <span>→ deberías estudiar</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span> <span>→ si tuviera tiempo, viajaría</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu gostaria de aprender</span> <span>→ me gustaría aprender</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «deberías estudiar»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu gostaria de aprender</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Você deveria estudar</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Você deveria estudar</span> significa «deberías estudiar».",
              error: "Todavía no. <span lang=\"pt\">Você deveria estudar</span> significa «deberías estudiar». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span>?",
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
              acierto: "¡Correcto! <span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span> significa «si tuviera tiempo, viajaría».",
              error: "Todavía no. <span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span> significa «si tuviera tiempo, viajaría». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «me gustaría aprender»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Se eu tivesse tempo, eu viajaria</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Você deveria estudar</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu gostaria de aprender</span>",
                  correcta: true
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Eu gostaria de aprender</span> significa «me gustaría aprender».",
              error: "Todavía no. <span lang=\"pt\">Eu gostaria de aprender</span> significa «me gustaría aprender». Puedes elegir otra opción."
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
          consejo: "<span lang=\"pt\">Já</span> significa «ya» y se usa para preguntar por experiencias: <span lang=\"pt\">Você já foi...?</span>.",
          teoria: {
            titulo: "Aprende a contar experiencias",
            html: "<p>Estas frases te permiten hablar de lo que hiciste, o nunca hiciste, en tu vida.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Você já foi ao Rio?</span> <span>→ ¿Ya fuiste a Río?</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu visitei Roma</span> <span>→ visité Roma</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Eu nunca comi isso</span> <span>→ nunca comí eso</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «¿Ya fuiste a Río?»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Você já foi ao Rio?</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Eu nunca comi isso</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Eu visitei Roma</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Você já foi ao Rio?</span> significa «¿Ya fuiste a Río?».",
              error: "Todavía no. <span lang=\"pt\">Você já foi ao Rio?</span> significa «¿Ya fuiste a Río?». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Eu visitei Roma</span>?",
              opciones: [
                {
                  texto: "visité Roma",
                  correcta: true
                },
                {
                  texto: "¿Ya fuiste a Río?",
                  correcta: false
                },
                {
                  texto: "nunca comí eso",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Eu visitei Roma</span> significa «visité Roma».",
              error: "Todavía no. <span lang=\"pt\">Eu visitei Roma</span> significa «visité Roma». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «nunca comí eso»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Eu nunca comi isso</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Eu visitei Roma</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Você já foi ao Rio?</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Eu nunca comi isso</span> significa «nunca comí eso».",
              error: "Todavía no. <span lang=\"pt\">Eu nunca comi isso</span> significa «nunca comí eso». Puedes elegir otra opción."
            }
          ]
        },
        {
          id: 15,
          titulo: "Trabajo y estudios",
          descripcion: "Habla de tu trabajo y tu búsqueda laboral",
          consejo: "<span lang=\"pt\">Há</span> indica cuánto tiempo pasó: <span lang=\"pt\">há dois anos</span> significa «desde hace dos años» o «hace dos años».",
          teoria: {
            titulo: "Aprende a hablar de trabajo",
            html: "<p>Estas frases son útiles para una entrevista o para presentarte en el trabajo.</p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Trabalho aqui há dois anos</span> <span>→ trabajo aquí desde hace dos años</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Sou responsável pelas vendas</span> <span>→ soy responsable de ventas</span></p><p class=\"ejemplo-portugues\"><span lang=\"pt\">Estou procurando emprego</span> <span>→ estoy buscando trabajo</span></p>"
          },
          ejercicios: [
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «trabajo aquí desde hace dos años»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Sou responsável pelas vendas</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Trabalho aqui há dois anos</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Estou procurando emprego</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Trabalho aqui há dois anos</span> significa «trabajo aquí desde hace dos años».",
              error: "Todavía no. <span lang=\"pt\">Trabalho aqui há dois anos</span> significa «trabajo aquí desde hace dos años». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Qué significa <span lang=\"pt\">Sou responsável pelas vendas</span>?",
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
              acierto: "¡Correcto! <span lang=\"pt\">Sou responsável pelas vendas</span> significa «soy responsable de ventas».",
              error: "Todavía no. <span lang=\"pt\">Sou responsável pelas vendas</span> significa «soy responsable de ventas». Puedes elegir otra opción."
            },
            {
              titulo: "Ejercicio práctico",
              consigna: "Selecciona la opción correcta.",
              pregunta: "¿Cómo se dice «estoy buscando trabajo»?",
              opciones: [
                {
                  texto: "<span lang=\"pt\">Trabalho aqui há dois anos</span>",
                  correcta: false
                },
                {
                  texto: "<span lang=\"pt\">Estou procurando emprego</span>",
                  correcta: true
                },
                {
                  texto: "<span lang=\"pt\">Sou responsável pelas vendas</span>",
                  correcta: false
                }
              ],
              acierto: "¡Correcto! <span lang=\"pt\">Estou procurando emprego</span> significa «estoy buscando trabajo».",
              error: "Todavía no. <span lang=\"pt\">Estou procurando emprego</span> significa «estoy buscando trabajo». Puedes elegir otra opción."
            }
          ]
        }
      ]
    }
  ]
};
