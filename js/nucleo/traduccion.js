/* =====================================================================
   traduccion.js  -  IDIOMA DE LA INTERFAZ

   ===================================================================== */


/* ---------------------------------------------------------------------
   1. IDIOMAS DISPONIBLES
   --------------------------------------------------------------------- */

// "regional" se usa para mostrar las fechas en el formato de cada idioma.
const IDIOMAS_INTERFAZ = Object.freeze({
  es: { posicion: 0, regional: 'es-AR' },
  en: { posicion: 1, regional: 'en-US' },
  pt: { posicion: 2, regional: 'pt-BR' }
});

const idiomaActual = () => obtenerUsuarioActivo()?.idioma ?? 'es';


/* ---------------------------------------------------------------------
   2. FRASES DE LA INTERFAZ: [español, inglés, portugués]
   --------------------------------------------------------------------- */

const FRASES = Object.freeze([
  // Navegación y generales
  ['Perfil', 'Profile', 'Perfil'], ['Cursos', 'Courses', 'Cursos'], ['Mapa de lecciones', 'Lesson map', 'Mapa de lições'],
  ['Clasificación', 'Leaderboard', 'Classificação'], ['Histórico', 'History', 'Histórico'], ['Rachas/Tienda', 'Streaks/Shop', 'Sequências/Loja'],
  ['Contacto', 'Contact', 'Contato'], ['Iniciar sesión', 'Log in', 'Entrar'], ['Registrarse', 'Sign up', 'Cadastrar-se'],
  ['Navegación principal', 'Main navigation', 'Navegação principal'], ['← Volver a mis cursos', '← Back to my courses', '← Voltar aos meus cursos'],
  ['Volver al mapa', 'Back to map', 'Voltar ao mapa'], ['Ir a mis cursos', 'Go to my courses', 'Ir aos meus cursos'],
  ['← Volver a la portada', '← Back to home', '← Voltar ao início'], ['← Volver al inicio de sesión', '← Back to log in', '← Voltar ao login'],
  ['{} días', '{} days', '{} dias'], ['{} día', '{} day', '{} dia'], ['{} gemas', '{} gems', '{} gemas'], ['{} gema', '{} gem', '{} gema'],

  // Idiomas y niveles
  ['Inglés', 'English', 'Inglês'], ['Alemán', 'German', 'Alemão'], ['Chino Mandarín', 'Mandarin Chinese', 'Chinês Mandarim'],
  ['Francés', 'French', 'Francês'], ['Italiano', 'Italian', 'Italiano'], ['Portugués', 'Portuguese', 'Português'],
  ['{} desde Español', '{} from Spanish', '{} a partir do espanhol'],
  ['Principiante', 'Beginner', 'Iniciante'], ['Elemental', 'Elementary', 'Elementar'], ['Intermedio', 'Intermediate', 'Intermediário'],
  ['Inicial', 'Starter', 'Inicial'], ['Básico', 'Basic', 'Básico'], ['Principiante ({})', 'Beginner ({})', 'Iniciante ({})'],
  ['Elemental ({})', 'Elementary ({})', 'Elementar ({})'], ['Intermedio ({})', 'Intermediate ({})', 'Intermediário ({})'],
  ['Inicial ({})', 'Starter ({})', 'Inicial ({})'], ['Básico ({})', 'Basic ({})', 'Básico ({})'],
  ['El idioma más hablado a nivel mundial, ideal para viajar y negocios.', 'The most widely spoken language in the world, ideal for travel and business.', 'O idioma mais falado do mundo, ideal para viagens e negócios.'],
  ['La lengua clave para oportunidades en ciencia, tecnología e industria europea.', 'The key language for opportunities in European science, technology and industry.', 'A língua-chave para oportunidades na ciência, tecnologia e indústria europeias.'],
  ['Abre las puertas al mercado más grande y a una cultura milenaria fascinante.', 'It opens the door to the largest market and a fascinating ancient culture.', 'Abre as portas para o maior mercado e uma fascinante cultura milenar.'],
  ['La lengua de la diplomacia, el arte y la gastronomía, hablada en cinco continentes.', 'The language of diplomacy, art and gastronomy, spoken on five continents.', 'A língua da diplomacia, da arte e da gastronomia, falada em cinco continentes.'],
  ['Un idioma cercano al español, ideal para descubrir el arte, la música y la cocina de Italia.', 'A language close to Spanish, ideal for discovering the art, music and food of Italy.', 'Um idioma próximo do espanhol, ideal para descobrir a arte, a música e a culinária da Itália.'],
  ['El idioma de Brasil y de Portugal, clave para viajar y trabajar en toda la región.', 'The language of Brazil and Portugal, key for travelling and working across the region.', 'O idioma do Brasil e de Portugal, essencial para viajar e trabalhar em toda a região.'],

  // Portada
  ['¡Aprende idiomas gratis, de forma divertida y efectiva!', 'Learn languages for free, in a fun and effective way!', 'Aprenda idiomas de graça, de forma divertida e eficaz!'],
  ['Con LingoWeb avanzas con lecciones cortas, ganas puntos y mantienes tu racha.', 'With LingoWeb you move forward with short lessons, earn points and keep your streak.', 'Com o LingoWeb você avança com lições curtas, ganha pontos e mantém sua sequência.'],
  ['Empieza ahora', 'Get started', 'Comece agora'], ['Ya tengo una cuenta', 'I already have an account', 'Já tenho uma conta'], ['Nuestros idiomas', 'Our languages', 'Nossos idiomas'],
  ['Gratis, rápido y en todos lados', 'Free, fast and everywhere', 'Grátis, rápido e em todo lugar'],
  ['Aprende de forma efectiva en cualquier lugar. Tu aprendizaje te acompaña sin restricciones en todo momento.', 'Learn effectively anywhere. Your learning goes with you at all times, without restrictions.', 'Aprenda de forma eficaz em qualquer lugar. Seu aprendizado acompanha você sem restrições o tempo todo.'],
  ['Convierte el aprendizaje en hábito', 'Turn learning into a habit', 'Transforme o aprendizado em hábito'],
  ['Con un ejercicio al día, lograrás en meses lo que antes tomaba años. La constancia es la clave del éxito.', 'With one exercise a day, you will achieve in months what used to take years. Consistency is the key to success.', 'Com um exercício por dia, você conseguirá em meses o que antes levava anos. A constância é a chave do sucesso.'],
  ['Aprendizaje personalizado', 'Personalized learning', 'Aprendizado personalizado'],
  ['Aprende a tu ritmo y elige qué idioma quieres avanzar en cada momento.', 'Learn at your own pace and choose which language to work on at any time.', 'Aprenda no seu ritmo e escolha qual idioma quer avançar a cada momento.'],
  ['Aprende donde y cuando quieras', 'Learn wherever and whenever you want', 'Aprenda onde e quando quiser'], ['Descárgala en', 'Download on', 'Baixe na'], ['Disponible en', 'Available on', 'Disponível no'],
  ['La aplicación móvil todavía no está disponible. Puedes usar LingoWeb desde este sitio.', 'The mobile app is not available yet. You can use LingoWeb from this site.', 'O aplicativo ainda não está disponível. Você pode usar o LingoWeb neste site.'],
  ['Continuar como {}', 'Continue as {}', 'Continuar como {}'],

  // Acceso
  ['Aprende idiomas gratis y de forma divertida', 'Learn languages for free and have fun', 'Aprenda idiomas de graça e de forma divertida'],
  ['Crea tu perfil y comienza a aprender hoy mismo', 'Create your profile and start learning today', 'Crie seu perfil e comece a aprender hoje mesmo'],
  ['Usuario o correo electrónico:', 'Username or email:', 'Usuário ou e-mail:'], ['Contraseña:', 'Password:', 'Senha:'], ['Correo electrónico:', 'Email:', 'E-mail:'],
  ['Nombre completo:', 'Full name:', 'Nome completo:'], ['Nombre de usuario:', 'Username:', 'Nome de usuário:'], ['Confirmar contraseña:', 'Confirm password:', 'Confirmar senha:'],
  ['Crear cuenta', 'Create account', 'Criar conta'], ['¿Olvidaste tu contraseña?', 'Forgot your password?', 'Esqueceu sua senha?'], ['¿No tienes cuenta?', "Don't have an account?", 'Não tem uma conta?'],
  ['¿Ya tienes una cuenta?', 'Already have an account?', 'Já tem uma conta?'], ['Inicia sesión', 'Log in', 'Entre'],
  ['tu_usuario o tu@correo.com', 'your_username or you@email.com', 'seu_usuario ou voce@email.com'], ['tu@correo.com', 'you@email.com', 'voce@email.com'],
  ['Ej. Juan Pérez', 'E.g. Juan Pérez', 'Ex. Juan Pérez'], ['Ej. juanperez', 'E.g. juanperez', 'Ex. juanperez'],
  ['Ingresa tu usuario o correo electrónico.', 'Enter your username or email.', 'Digite seu usuário ou e-mail.'], ['Ingresa tu contraseña.', 'Enter your password.', 'Digite sua senha.'],
  ['No reconocemos esa cuenta. Revisa tu usuario y tu contraseña.', "We don't recognize that account. Check your username and password.", 'Não reconhecemos essa conta. Verifique seu usuário e senha.'],
  ['Ingresa un correo válido, por ejemplo tu@correo.com.', 'Enter a valid email, for example you@email.com.', 'Digite um e-mail válido, por exemplo voce@email.com.'],
  ['Ingresa tu nombre completo (al menos 3 letras).', 'Enter your full name (at least 3 letters).', 'Digite seu nome completo (pelo menos 3 letras).'],
  ['Usa de 3 a 20 letras, números, puntos o guiones bajos, sin espacios.', 'Use 3 to 20 letters, numbers, dots or underscores, with no spaces.', 'Use de 3 a 20 letras, números, pontos ou sublinhados, sem espaços.'],
  ['Ese nombre de usuario ya está ocupado. Prueba con otro.', 'That username is already taken. Try another one.', 'Esse nome de usuário já está em uso. Tente outro.'], ['Ese nombre de usuario ya está ocupado.', 'That username is already taken.', 'Esse nome de usuário já está em uso.'],
  ['Ya existe una cuenta con ese correo.', 'An account with that email already exists.', 'Já existe uma conta com esse e-mail.'], ['Ya existe otra cuenta con ese correo.', 'Another account with that email already exists.', 'Já existe outra conta com esse e-mail.'],
  ['Usa al menos 8 caracteres, con una mayúscula, una minúscula y un número, sin símbolos.', 'Use at least 8 characters, with one uppercase letter, one lowercase letter and one number, no symbols.', 'Use pelo menos 8 caracteres, com uma maiúscula, uma minúscula e um número, sem símbolos.'],
  ['Las contraseñas no coinciden.', 'Passwords do not match.', 'As senhas não coincidem.'],
  ['No pudimos guardar la cuenta. El almacenamiento del navegador está lleno.', "We couldn't save the account. The browser storage is full.", 'Não foi possível salvar a conta. O armazenamento do navegador está cheio.'],
  ['¡Registro exitoso! Ya puedes iniciar sesión.', 'Registration successful! You can now log in.', 'Cadastro concluído! Agora você pode entrar.'],
  ['Inicia sesión para continuar.', 'Log in to continue.', 'Entre para continuar.'],
  ['Cerraste sesión. Tus avances quedaron guardados.', 'You logged out. Your progress has been saved.', 'Você saiu. Seu progresso foi salvo.'],
  ['Recuperar contraseña', 'Recover password', 'Recuperar senha'], ['🔒 Seguridad', '🔒 Security', '🔒 Segurança'], ['Seguridad', 'Security', 'Segurança'],
  ['LingoWeb es una demostración: revisamos si el correo tiene una cuenta y simulamos el envío del enlace.', 'LingoWeb is a demo: we check whether the email has an account and simulate sending the link.', 'O LingoWeb é uma demonstração: verificamos se o e-mail tem uma conta e simulamos o envio do link.'],
  ['Ingresa tu correo electrónico registrado y simularemos el envío de un enlace para restablecerla.', 'Enter your registered email and we will simulate sending a reset link.', 'Digite seu e-mail cadastrado e simularemos o envio de um link para redefini-la.'],
  ['Enviar enlace de recuperación', 'Send recovery link', 'Enviar link de recuperação'], ['Enviando...', 'Sending...', 'Enviando...'],
  ['Listo. Simulamos el envío de un enlace de recuperación a {}.', 'Done. We simulated sending a recovery link to {}.', 'Pronto. Simulamos o envio de um link de recuperação para {}.'],
  ['No encontramos una cuenta con ese correo. Revísalo o crea una cuenta nueva.', "We couldn't find an account with that email. Check it or create a new account.", 'Não encontramos uma conta com esse e-mail. Verifique ou crie uma conta nova.'],

  // Panel
  ['Mis cursos', 'My courses', 'Meus cursos'], ['Mis cursos de idiomas', 'My language courses', 'Meus cursos de idiomas'], ['Estadísticas', 'Statistics', 'Estatísticas'], ['Racha', 'Streak', 'Sequência'], ['Experiencia', 'Experience', 'Experiência'], ['Meta diaria', 'Daily goal', 'Meta diária'],
  ['{} días seguidos', '{} days in a row', '{} dias seguidos'], ['{} día seguido', '{} day in a row', '{} dia seguido'], ['{} XP acumulados', '{} XP earned', '{} XP acumulados'], ['{} XP esta semana', '{} XP this week', '{} XP nesta semana'], ['{} XP hoy', '{} XP today', '{} XP hoje'],
  ['Continuar', 'Continue', 'Continuar'], ['Comenzar', 'Start', 'Começar'], ['Repasar', 'Review', 'Revisar'],
  ['Nivel: {} • Progreso: {}%', 'Level: {} • Progress: {}%', 'Nível: {} • Progresso: {}%'], ['Nivel: {}', 'Level: {}', 'Nível: {}'], ['Progreso: {}%', 'Progress: {}%', 'Progresso: {}%'], ['Curso completo: {}%', 'Whole course: {}%', 'Curso completo: {}%'],
  ['¡Hola, {}!', 'Hello, {}!', 'Olá, {}!'], ['Todavía no registras actividad. Elige un idioma y completa tu primera lección para empezar tu racha.', 'You have no activity yet. Choose a language and complete your first lesson to start your streak.', 'Você ainda não tem atividade. Escolha um idioma e conclua sua primeira lição para começar sua sequência.'],
  ['Empezar con {}', 'Start with {}', 'Começar com {}'], ['Avance de la meta diaria', 'Daily goal progress', 'Progresso da meta diária'], ['Progreso de {} en {}', '{} progress in {}', 'Progresso de {} em {}'], ['{}: {}', '{}: {}', '{}: {}'],

  // Mapa
  ['Mapa de lecciones: {}', 'Lesson map: {}', 'Mapa de lições: {}'], ['Mapa de {}', '{} map', 'Mapa de {}'], ['Niveles del curso', 'Course levels', 'Níveis do curso'], ['Completada', 'Completed', 'Concluída'], ['En curso', 'In progress', 'Em andamento'], ['Bloqueada', 'Locked', 'Bloqueada'],
  ['{} · {}', '{} · {}', '{} · {}'], ['Lección actual', 'Current lesson', 'Lição atual'], ['Ver resultado', 'View result', 'Ver resultado'], ['Repetir', 'Repeat', 'Repetir'], ['Seguir repaso', 'Continue review', 'Continuar revisão'], ['Reiniciar', 'Restart', 'Reiniciar'], ['Cancelar', 'Cancel', 'Cancelar'],
  ['{} de {} lecciones completadas', '{} of {} lessons completed', '{} de {} lições concluídas'],
  ['Unidad {}: {}', 'Unit {}: {}', 'Unidade {}: {}'], ['Lección {}: {}', 'Lesson {}: {}', 'Lição {}: {}'], ['{} · Lección {}: {}', '{} · Lesson {}: {}', '{} · Lição {}: {}'],
  ['Progreso de la lección {} de {}', 'Progress of lesson {} of {}', 'Progresso da lição {} de {}'], ['{} (Tú)', '{} (You)', '{} (Você)'],
  ['Completa la lección {}, «{}», para desbloquear esta.', 'Complete lesson {}, «{}», to unlock this one.', 'Conclua a lição {}, «{}», para desbloquear esta.'],
  ['Vas a reiniciar la lección {} y las siguientes. Se descontarán la experiencia y las gemas que ganaste con ellas, y podrías bajar en el ranking.', 'You are going to restart lesson {} and the following ones. The experience and gems you earned from them will be deducted, and you could drop on the leaderboard.', 'Você vai reiniciar a lição {} e as seguintes. A experiência e as gemas ganhas com elas serão descontadas, e você pode cair na classificação.'],
  ['Reiniciaste desde la lección {}. Se restaron {} XP y {}.', 'You restarted from lesson {}. {} XP and {} were deducted.', 'Você reiniciou a partir da lição {}. Foram descontados {} XP e {}.'],
  ['No pudimos guardar el cambio. Tu avance sigue igual.', "We couldn't save the change. Your progress is unchanged.", 'Não foi possível salvar a alteração. Seu progresso não mudou.'],
  ['No pudimos abrir el nivel. Tu avance sigue igual.', "We couldn't open the level. Your progress is unchanged.", 'Não foi possível abrir o nível. Seu progresso não mudou.'],
  ['Ya puedes empezar el nivel {}. Puedes volver a los anteriores cuando quieras.', 'You can now start level {}. You can go back to the previous ones whenever you want.', 'Agora você pode começar o nível {}. Pode voltar aos anteriores quando quiser.'],
  ['Empezar por este nivel', 'Start at this level', 'Começar por este nível'], ['Nivel {}', 'Level {}', 'Nível {}'],
  ['Este nivel se abre al completar {}. Si ya tienes conocimientos, puedes empezar directamente por él.', 'This level opens when you complete {}. If you already have some knowledge, you can start directly here.', 'Este nível abre ao concluir {}. Se você já tem conhecimento, pode começar diretamente por ele.'],
  ['¡Completaste {}!', 'You completed {}!', 'Você concluiu {}!'], ['Ya puedes seguir con el nivel {}.', 'You can now move on to level {}.', 'Agora você pode seguir para o nível {}.'], ['Seguir con {}', 'Continue with {}', 'Seguir com {}'],
  ['Opiniones del curso', 'Course reviews', 'Opiniões do curso'], ['Tu calificación:', 'Your rating:', 'Sua avaliação:'], ['Tu comentario (opcional):', 'Your comment (optional):', 'Seu comentário (opcional):'], ['¿Qué te pareció este curso?', 'What did you think of this course?', 'O que você achou deste curso?'], ['Publicar opinión', 'Post review', 'Publicar opinião'],
  ['Este curso todavía no tiene valoraciones. ¡Sé la primera persona en opinar!', 'This course has no ratings yet. Be the first to review it!', 'Este curso ainda não tem avaliações. Seja a primeira pessoa a opinar!'],
  ['{} de 5 ({} valoraciones)', '{} out of 5 ({} ratings)', '{} de 5 ({} avaliações)'], ['{} de 5 ({} valoración)', '{} out of 5 ({} rating)', '{} de 5 ({} avaliação)'], ['{} de 5 estrellas', '{} out of 5 stars', '{} de 5 estrelas'],
  ['Elige una calificación o escribe un comentario para publicar tu opinión.', 'Choose a rating or write a comment to post your review.', 'Escolha uma avaliação ou escreva um comentário para publicar sua opinião.'],
  ['Guardamos tu calificación.', 'We saved your rating.', 'Salvamos sua avaliação.'], ['Publicamos tu comentario.', 'We posted your comment.', 'Publicamos seu comentário.'], ['Publicamos tu calificación y tu comentario.', 'We posted your rating and comment.', 'Publicamos sua avaliação e seu comentário.'],
  ['No pudimos guardar tu opinión. El almacenamiento del navegador está lleno.', "We couldn't save your review. The browser storage is full.", 'Não foi possível salvar sua opinião. O armazenamento do navegador está cheio.'],
  ['Todavía no hay comentarios para este curso.', 'There are no comments for this course yet.', 'Ainda não há comentários para este curso.'],

  // Lección
  ['💡 Consejo', '💡 Tip', '💡 Dica'], ['Consejo', 'Tip', 'Dica'], ['Lección', 'Lesson', 'Lição'], ['Salir de la lección y volver al mapa', 'Leave the lesson and go back to the map', 'Sair da lição e voltar ao mapa'],
  ['Paso {} de {}', 'Step {} of {}', 'Passo {} de {}'], ['Lección finalizada', 'Lesson finished', 'Lição concluída'], ['🎉 Lección finalizada', '🎉 Lesson finished', '🎉 Lição concluída'], ['Oportunidades restantes: {}', 'Chances left: {}', 'Chances restantes: {}'],
  ['Ir a los ejercicios', 'Go to the exercises', 'Ir aos exercícios'], ['Comprobar respuesta', 'Check answer', 'Verificar resposta'], ['Siguiente paso', 'Next step', 'Próximo passo'], ['Siguiente lección', 'Next lesson', 'Próxima lição'], ['Reintentar', 'Try again', 'Tentar novamente'],
  ['✓ Correcta', '✓ Correct', '✓ Correta'], ['✗ Incorrecta', '✗ Incorrect', '✗ Incorreta'], ['Correcta', 'Correct', 'Correta'], ['Incorrecta', 'Incorrect', 'Incorreta'],
  ['Pendiente: selecciona una opción para comprobarla.', 'Pending: select an option to check it.', 'Pendente: selecione uma opção para verificá-la.'], ['Qué hacer ahora', 'What to do next', 'O que fazer agora'],
  ['de precisión', 'accuracy', 'de precisão'], ['XP obtenidos', 'XP earned', 'XP obtidos'], ['XP por errores', 'XP for mistakes', 'XP por erros'], ['gemas', 'gems', 'gemas'],
  ['Respondiste {} ejercicios con {} errores. Realizada el {}.', 'You answered {} exercises with {} mistakes. Completed on {}.', 'Você respondeu {} exercícios com {} erros. Realizada em {}.'],
  ['Respondiste {} ejercicios con {} error. Realizada el {}.', 'You answered {} exercises with {} mistake. Completed on {}.', 'Você respondeu {} exercícios com {} erro. Realizada em {}.'],
  ['Subiste del puesto #{} al #{} en {}.', 'You moved up from #{} to #{} in {}.', 'Você subiu da posição #{} para #{} em {}.'], ['Bajaste del puesto #{} al #{} en {}.', 'You dropped from #{} to #{} in {}.', 'Você caiu da posição #{} para #{} em {}.'], ['Te mantienes en el puesto #{} de {}.', 'You stay at #{} in {}.', 'Você se mantém na posição #{} em {}.'],
  ['¡Completaste el nivel {}!', 'You completed level {}!', 'Você concluiu o nível {}!'], ['Lección no superada', 'Lesson not passed', 'Lição não concluída'],
  ['Te quedaste sin oportunidades. Este intento restó {} XP, pero puedes volver a intentarlo cuando quieras.', 'You ran out of chances. This attempt deducted {} XP, but you can try again whenever you want.', 'Suas chances acabaram. Esta tentativa descontou {} XP, mas você pode tentar novamente quando quiser.'],
  ['Tu avance quedará guardado en el paso {} de {}. Podrás continuar desde el mapa del curso.', 'Your progress will be saved at step {} of {}. You can continue from the course map.', 'Seu progresso ficará salvo no passo {} de {}. Você poderá continuar pelo mapa do curso.'],
  ['Salir al mapa', 'Go to map', 'Sair para o mapa'], ['Seguir aquí', 'Stay here', 'Ficar aqui'], ['No encontramos esa lección', "We couldn't find that lesson", 'Não encontramos essa lição'], ['La dirección no corresponde a una lección disponible.', 'The address does not match an available lesson.', 'O endereço não corresponde a uma lição disponível.'],
  ['Esta lección todavía está bloqueada', 'This lesson is still locked', 'Esta lição ainda está bloqueada'], ['Completa las lecciones anteriores o, desde el mapa, elige empezar por este nivel.', 'Complete the previous lessons or choose to start at this level from the map.', 'Conclua as lições anteriores ou, pelo mapa, escolha começar por este nível.'],

  // Perfil
  ['Ajustes de cuenta', 'Account settings', 'Configurações da conta'], ['Información personal', 'Personal information', 'Informações pessoais'], ['Idioma de la interfaz:', 'Interface language:', 'Idioma da interface:'], ['Cambiar contraseña', 'Change password', 'Alterar senha'],
  ['Contraseña actual:', 'Current password:', 'Senha atual:'], ['Nueva contraseña:', 'New password:', 'Nova senha:'], ['Confirmar nueva contraseña:', 'Confirm new password:', 'Confirmar nova senha:'], ['Guardar cambios', 'Save changes', 'Salvar alterações'], ['Cerrar sesión', 'Log out', 'Sair'],
  ['Logros', 'Achievements', 'Conquistas'], ['Obtenido · {}', 'Earned · {}', 'Conquistado · {}'], ['Pendiente · {}', 'Pending · {}', 'Pendente · {}'], ['Canjeada en la tienda', 'Redeemed in the shop', 'Resgatada na loja'], ['Subir foto', 'Upload photo', 'Enviar foto'], ['Cambiar foto', 'Change photo', 'Alterar foto'], ['Quitar foto', 'Remove photo', 'Remover foto'],
  ['Miembro desde {}', 'Member since {}', 'Membro desde {}'], ['Racha de {}', '{} streak', 'Sequência de {}'],
  ['La foto debe ser PNG, JPG o WEBP.', 'The photo must be PNG, JPG or WEBP.', 'A foto deve ser PNG, JPG ou WEBP.'], ['La foto pesa {} KB y el máximo es 400 KB.', 'The photo is {} KB and the maximum is 400 KB.', 'A foto tem {} KB e o máximo é 400 KB.'], ['No pudimos guardar la foto: el almacenamiento del navegador está lleno.', "We couldn't save the photo: the browser storage is full.", 'Não foi possível salvar a foto: o armazenamento do navegador está cheio.'],
  ['Actualizamos tu foto de perfil.', 'We updated your profile photo.', 'Atualizamos sua foto de perfil.'], ['Quitamos tu foto de perfil.', 'We removed your profile photo.', 'Removemos sua foto de perfil.'], ['No pudimos leer ese archivo. Prueba con otra imagen.', "We couldn't read that file. Try another image.", 'Não foi possível ler esse arquivo. Tente outra imagem.'],
  ['La contraseña actual no es correcta.', 'The current password is incorrect.', 'A senha atual está incorreta.'], ['No guardamos los cambios. Revisa los campos marcados.', "We didn't save the changes. Check the marked fields.", 'Não salvamos as alterações. Verifique os campos marcados.'], ['No pudimos guardar los cambios. El almacenamiento del navegador está lleno.', "We couldn't save the changes. The browser storage is full.", 'Não foi possível salvar as alterações. O armazenamento do navegador está cheio.'], ['Guardamos los cambios de tu perfil.', 'We saved your profile changes.', 'Salvamos as alterações do seu perfil.'],
  ['Actualizamos el idioma de la interfaz.', 'We updated the interface language.', 'Atualizamos o idioma da interface.'], ['No pudimos guardar el idioma elegido.', "We couldn't save the selected language.", 'Não foi possível salvar o idioma escolhido.'],

  // Logros
  ['Primer paso', 'First step', 'Primeiro passo'], ['Completa tu primera lección.', 'Complete your first lesson.', 'Conclua sua primeira lição.'], ['Constancia', 'Consistency', 'Constância'], ['Completa 5 lecciones.', 'Complete 5 lessons.', 'Conclua 5 lições.'], ['En racha', 'On a streak', 'Em sequência'], ['Alcanza una racha de 3 días.', 'Reach a 3-day streak.', 'Alcance uma sequência de 3 dias.'], ['Mil puntos', 'A thousand points', 'Mil pontos'], ['Acumula 1000 XP.', 'Earn 1000 XP.', 'Acumule 1000 XP.'], ['Nivel superado', 'Level passed', 'Nível concluído'], ['Completa todas las lecciones de un nivel.', 'Complete all the lessons in a level.', 'Conclua todas as lições de um nível.'], ['Curso terminado', 'Course finished', 'Curso concluído'], ['Completa todos los niveles de un curso.', 'Complete all the levels in a course.', 'Conclua todos os níveis de um curso.'], ['Tu voz cuenta', 'Your voice counts', 'Sua voz conta'], ['Valora un curso o deja un comentario.', 'Rate a course or leave a comment.', 'Avalie um curso ou deixe um comentário.'],

  // Clasificación
  ['Tabla de clasificación', 'Leaderboard', 'Tabela de classificação'], ['Tu posición', 'Your position', 'Sua posição'], ['Puesto actual: #{}', 'Current position: #{}', 'Posição atual: #{}'], ['Elige una liga:', 'Choose a league:', 'Escolha uma liga:'], ['Puesto', 'Position', 'Posição'], ['Avatar', 'Avatar', 'Avatar'], ['Usuario', 'User', 'Usuário'], ['XP semanal', 'Weekly XP', 'XP semanal'], ['Estado', 'Status', 'Status'], ['Asciende', 'Moves up', 'Sobe'], ['Desciende', 'Moves down', 'Desce'], ['Permanece', 'Stays', 'Permanece'], ['(Tú)', '(You)', '(Você)'],
  ['Liga Bronce', 'Bronze League', 'Liga Bronze'], ['Liga Plata', 'Silver League', 'Liga Prata'], ['Liga Oro', 'Gold League', 'Liga Ouro'], ['Liga Diamante', 'Diamond League', 'Liga Diamante'],
  ['{}: clasificación de esta semana', '{}: this week\'s leaderboard', '{}: classificação desta semana'], ['Estás en la liga más alta.', 'You are in the highest league.', 'Você está na liga mais alta.'], ['Estás en zona de ascenso.', 'You are in the promotion zone.', 'Você está na zona de promoção.'], ['Te faltan {} XP para la zona de ascenso.', 'You need {} XP to reach the promotion zone.', 'Faltam {} XP para a zona de promoção.'],
  ['Los {} primeros ascienden, los {} últimos descienden, el resto permanece al cerrar la semana.', 'The top {} move up, the bottom {} move down and the rest stay when the week ends.', 'Os {} primeiros sobem, os {} últimos descem e os demais permanecem ao fechar a semana.'], ['Los {} primeros ascienden, el resto permanece al cerrar la semana.', 'The top {} move up and the rest stay when the week ends.', 'Os {} primeiros sobem e os demais permanecem ao fechar a semana.'], ['los {} últimos descienden, el resto permanece al cerrar la semana.', 'The bottom {} move down and the rest stay when the week ends.', 'Os {} últimos descem e os demais permanecem ao fechar a semana.'],
  ['Todavía no hay participantes en esta liga', 'There are no participants in this league yet', 'Ainda não há participantes nesta liga'], ['Cuando una cuenta llegue a esta liga, aparecerá aquí. Sigue sumando experiencia para llegar.', 'When an account reaches this league, it will appear here. Keep earning experience to get there.', 'Quando uma conta chegar a esta liga, aparecerá aqui. Continue ganhando experiência para chegar.'],
  ['Mi histórico', 'My history', 'Meu histórico'], ['Histórico de clasificación', 'Leaderboard history', 'Histórico de classificação'], ['Resumen general', 'General summary', 'Resumo geral'], ['Temporada actual #{}', 'Current season #{}', 'Temporada atual #{}'], ['Promedio', 'Average', 'Média'], ['{} XP / temporada', '{} XP / season', '{} XP / temporada'], ['Puntaje máximo', 'Highest score', 'Pontuação máxima'], ['Puntaje mínimo', 'Lowest score', 'Pontuação mínima'], ['Progreso acumulado', 'Overall progress', 'Progresso acumulado'], ['{} • Temp. {}', '{} • Season {}', '{} • Temp. {}'],
  ['Meta hacia Nivel Leyenda: {} XP (Total: {} XP)', 'Goal to Legend Level: {} XP (Total: {} XP)', 'Meta para o Nível Lenda: {} XP (Total: {} XP)'], ['Historial por temporada', 'History by season', 'Histórico por temporada'], ['Temporada {} - {} (en curso)', 'Season {} - {} (in progress)', 'Temporada {} - {} (em andamento)'], ['Temporada {} - {}', 'Season {} - {}', 'Temporada {} - {}'], ['Puesto actual: #{}', 'Current position: #{}', 'Posição atual: #{}'], ['Puesto alcanzado: #{}', 'Position reached: #{}', 'Posição alcançada: #{}'], ['Todavía no tienes temporadas', 'You have no seasons yet', 'Você ainda não tem temporadas'], ['Completa una lección para sumar experiencia y empezar tu historial.', 'Complete a lesson to earn experience and start your history.', 'Conclua uma lição para ganhar experiência e começar seu histórico.'],

  // Rachas/Tienda
  ['Tu racha', 'Your streak', 'Sua sequência'], ['Completa una lección por día para mantenerla.', 'Complete one lesson a day to keep it.', 'Conclua uma lição por dia para mantê-la.'], ['Cambiar meta diaria:', 'Change daily goal:', 'Alterar meta diária:'], ['{} XP por día', '{} XP per day', '{} XP por dia'], ['Tu saldo: {}', 'Your balance: {}', 'Seu saldo: {}'], ['Filtrar por:', 'Filter by:', 'Filtrar por:'], ['Todos los elementos', 'All items', 'Todos os itens'], ['Potenciadores', 'Boosters', 'Potencializadores'], ['Insignias', 'Badges', 'Insígnias'],
  ['Protector de racha', 'Streak protector', 'Protetor de sequência'], ['Conserva tu racha si te pierdes un día de práctica.', 'Keeps your streak if you miss a day of practice.', 'Mantém sua sequência se você perder um dia de prática.'], ['Oportunidad extra', 'Extra chance', 'Chance extra'], ['Suma una oportunidad al comenzar tu próxima lección.', 'Adds a chance when you start your next lesson.', 'Adiciona uma chance ao começar sua próxima lição.'], ['Experiencia doble', 'Double experience', 'Experiência em dobro'], ['Duplica la experiencia de la próxima lección que termines.', 'Doubles the experience of the next lesson you finish.', 'Dobra a experiência da próxima lição que você concluir.'],
  ['Insignia Viajero', 'Traveller badge', 'Insígnia Viajante'], ['Muestra en tu perfil que aprendes para recorrer el mundo.', 'Show on your profile that you learn to travel the world.', 'Mostre no seu perfil que você aprende para percorrer o mundo.'], ['Insignia Estudioso', 'Scholar badge', 'Insígnia Estudioso'], ['Un reconocimiento para quienes no faltan a su práctica.', 'A recognition for those who never miss their practice.', 'Um reconhecimento para quem não falta à prática.'], ['Insignia Leyenda', 'Legend badge', 'Insígnia Lenda'], ['La insignia más exclusiva de LingoWeb.', 'The most exclusive LingoWeb badge.', 'A insígnia mais exclusiva do LingoWeb.'],
  ['Tienes: {}', 'You have: {}', 'Você tem: {}'], ['Ya la tienes', 'You already have it', 'Você já a tem'], ['Disponible', 'Available', 'Disponível'], ['Canjeada', 'Redeemed', 'Resgatada'], ['Canjear por {}', 'Redeem for {}', 'Resgatar por {}'], ['Ya tienes la {}.', 'You already have the {}.', 'Você já tem a {}.'],
  ['Te faltan {} para canjear {}.', 'You need {} more to redeem {}.', 'Faltam {} para resgatar {}.'], ['Canjeaste {}. Tu saldo es de {}.', 'You redeemed {}. Your balance is {}.', 'Você resgatou {}. Seu saldo é de {}.'], ['No pudimos completar el canje. No se descontaron gemas.', "We couldn't complete the redemption. No gems were deducted.", 'Não foi possível concluir o resgate. Nenhuma gema foi descontada.'], ['Tu meta diaria ahora es de {} XP.', 'Your daily goal is now {} XP.', 'Sua meta diária agora é de {} XP.'], ['No pudimos guardar la meta diaria.', "We couldn't save the daily goal.", 'Não foi possível salvar a meta diária.'], ['Día con práctica', 'Day with practice', 'Dia com prática'], ['Día sin práctica', 'Day without practice', 'Dia sem prática'],

  // Contacto
  ['Contacto y soporte', 'Contact and support', 'Contato e suporte'], ['Soporte técnico y contacto', 'Technical support and contact', 'Suporte técnico e contato'], ['❓ Preguntas frecuentes', '❓ Frequently asked questions', '❓ Perguntas frequentes'], ['Preguntas frecuentes', 'Frequently asked questions', 'Perguntas frequentes'], ['Ir a preguntas frecuentes', 'Go to FAQ', 'Ir às perguntas frequentes'], ['💬 Centro de ayuda', '💬 Help center', '💬 Central de ajuda'], ['Centro de ayuda', 'Help center', 'Central de ajuda'], ['⏱️ Tiempo de respuesta', '⏱️ Response time', '⏱️ Tempo de resposta'], ['Tiempo de respuesta', 'Response time', 'Tempo de resposta'],
  ['Antes de contactarnos, te recomendamos revisar si tu consulta ya está resuelta.', 'Before contacting us, we recommend checking whether your question has already been answered.', 'Antes de entrar em contato, recomendamos verificar se sua dúvida já foi resolvida.'], ['Si encuentras un error en una lección o un problema con tu XP, tu racha o tu cuenta, envíanos un mensaje y te responderemos a la brevedad.', 'If you find a mistake in a lesson or a problem with your XP, streak or account, send us a message and we will reply shortly.', 'Se você encontrar um erro em uma lição ou um problema com seu XP, sequência ou conta, envie uma mensagem e responderemos em breve.'], ['Nuestro equipo suele responder las consultas dentro de las primeras 24 a 48 horas hábiles.', 'Our team usually replies within 24 to 48 business hours.', 'Nossa equipe costuma responder em 24 a 48 horas úteis.'],
  ['Enviar un reporte', 'Send a report', 'Enviar um relatório'], ['Completa el siguiente formulario especificando el problema que tuviste.', 'Fill in the following form describing the problem you had.', 'Preencha o formulário a seguir descrevendo o problema que você teve.'], ['Tipo de consulta o problema:', 'Type of question or problem:', 'Tipo de dúvida ou problema:'], ['Selecciona una categoría...', 'Select a category...', 'Selecione uma categoria...'], ['Error en la plataforma', 'Platform error', 'Erro na plataforma'], ['Error en el contenido de una lección', 'Error in lesson content', 'Erro no conteúdo de uma lição'], ['Problema con la cuenta, XP o racha', 'Problem with account, XP or streak', 'Problema com conta, XP ou sequência'], ['Sugerencia de mejora', 'Suggestion for improvement', 'Sugestão de melhoria'], ['Otro motivo', 'Other reason', 'Outro motivo'],
  ['Asunto:', 'Subject:', 'Assunto:'], ['Ej. La lección 1 de Inglés no abre', 'E.g. Lesson 1 of English does not open', 'Ex. A lição 1 de Inglês não abre'], ['Descripción del problema:', 'Problem description:', 'Descrição do problema:'], ['Describe con el mayor detalle posible lo que sucedió...', 'Describe what happened in as much detail as possible...', 'Descreva com o máximo de detalhes o que aconteceu...'], ['Adjuntar evidencia:', 'Attach evidence:', 'Anexar evidência:'], ['(opcional)', '(optional)', '(opcional)'], ['Puedes adjuntar una captura PNG, JPG o WEBP, o un video corto MP4 o WEBM.', 'You can attach a PNG, JPG or WEBP screenshot, or a short MP4 or WEBM video.', 'Você pode anexar uma captura PNG, JPG ou WEBP, ou um vídeo curto MP4 ou WEBM.'], ['Enviar reporte', 'Send report', 'Enviar relatório'],
  ['Selecciona una categoría.', 'Select a category.', 'Selecione uma categoria.'], ['Escribe un asunto de al menos 5 caracteres.', 'Write a subject of at least 5 characters.', 'Escreva um assunto com pelo menos 5 caracteres.'], ['Describe el problema con al menos 10 caracteres.', 'Describe the problem in at least 10 characters.', 'Descreva o problema com pelo menos 10 caracteres.'], ['El archivo debe ser PNG, JPG, WEBP, MP4 o WEBM.', 'The file must be PNG, JPG, WEBP, MP4 or WEBM.', 'O arquivo deve ser PNG, JPG, WEBP, MP4 ou WEBM.'], ['El archivo no puede superar los 5 MB.', 'The file cannot exceed 5 MB.', 'O arquivo não pode ultrapassar 5 MB.'], ['No pudimos guardar tu reporte. El almacenamiento del navegador está lleno.', "We couldn't save your report. The browser storage is full.", 'Não foi possível salvar seu relatório. O armazenamento do navegador está cheio.'], ['¡Recibimos tu reporte! Te responderemos a la brevedad.', 'We received your report! We will reply shortly.', 'Recebemos seu relatório! Responderemos em breve.'], ['Tus reportes enviados', 'Your submitted reports', 'Seus relatórios enviados'],

  // Ayuda
  ['Ayuda y preguntas frecuentes', 'Help and FAQ', 'Ajuda e perguntas frequentes'], ['¿Cómo podemos ayudarte?', 'How can we help you?', 'Como podemos ajudar?'], ['Encuentra respuestas rápidas a las preguntas más comunes sobre LingoWeb.', 'Find quick answers to the most common questions about LingoWeb.', 'Encontre respostas rápidas para as perguntas mais comuns sobre o LingoWeb.'], ['Volver a Contacto', 'Back to Contact', 'Voltar ao Contato'],
  ['¿Puedo empezar por un nivel más avanzado?', 'Can I start at a more advanced level?', 'Posso começar por um nível mais avançado?'], ['Sí. Cada idioma tiene niveles progresivos: al terminar uno se abre el siguiente. Si ya tienes conocimientos, entra al mapa del curso, elige el nivel y selecciona "Empezar por este nivel".', 'Yes. Each language has progressive levels: when you finish one, the next opens. If you already have some knowledge, go to the course map, choose the level and select "Start at this level".', 'Sim. Cada idioma tem níveis progressivos: ao terminar um, o próximo abre. Se você já tem conhecimento, entre no mapa do curso, escolha o nível e selecione "Começar por este nível".'],
  ['¿Qué es LingoWeb?', 'What is LingoWeb?', 'O que é o LingoWeb?'], ['LingoWeb es una plataforma gratuita, divertida y efectiva para aprender idiomas. Actualmente ofrecemos cursos de Inglés, Alemán, Chino Mandarín, Francés, Italiano y Portugués, con un enfoque dinámico y basado en lecciones prácticas.', 'LingoWeb is a free, fun and effective platform for learning languages. We currently offer courses in English, German, Mandarin Chinese, French, Italian and Portuguese, with a dynamic approach based on practical lessons.', 'O LingoWeb é uma plataforma gratuita, divertida e eficaz para aprender idiomas. Atualmente oferecemos cursos de Inglês, Alemão, Chinês Mandarim, Francês, Italiano e Português, com uma abordagem dinâmica baseada em lições práticas.'],
  ['¿LingoWeb es realmente gratis?', 'Is LingoWeb really free?', 'O LingoWeb é realmente grátis?'], ['¡Sí! Aprender idiomas en LingoWeb es completamente gratis, rápido y lo puedes hacer desde cualquier lugar. Creemos que la educación debe ser accesible para todos.', 'Yes! Learning languages on LingoWeb is completely free, fast and you can do it from anywhere. We believe education should be accessible to everyone.', 'Sim! Aprender idiomas no LingoWeb é totalmente grátis, rápido e pode ser feito de qualquer lugar. Acreditamos que a educação deve ser acessível a todos.'],
  ['¿Qué son los Puntos de Experiencia (XP)?', 'What are Experience Points (XP)?', 'O que são os Pontos de Experiência (XP)?'], ['Ganas XP (⚡) al completar lecciones y se restan 2 XP por cada respuesta incorrecta. Cuanta más experiencia sumes en la semana, más subirás en la Clasificación de tu liga.', 'You earn XP (⚡) by completing lessons and lose 2 XP for each incorrect answer. The more experience you earn during the week, the higher you climb on your league leaderboard.', 'Você ganha XP (⚡) ao concluir lições e perde 2 XP por cada resposta incorreta. Quanto mais experiência somar na semana, mais subirá na Classificação da sua liga.'],
  ['¿Qué es la Racha (🔥)?', 'What is the Streak (🔥)?', 'O que é a Sequência (🔥)?'], ['Tu racha muestra cuántos días seguidos has completado al menos una lección. Si pasas un día sin practicar, ¡tu racha volverá a cero! Convierte el aprendizaje en un hábito para mantenerla intacta.', 'Your streak shows how many days in a row you have completed at least one lesson. If you go a day without practicing, your streak goes back to zero! Turn learning into a habit to keep it intact.', 'Sua sequência mostra quantos dias seguidos você concluiu pelo menos uma lição. Se passar um dia sem praticar, sua sequência volta a zero! Transforme o aprendizado em hábito para mantê-la intacta.'],
  ['¿Para qué sirven la Clasificación y el Histórico?', 'What are the Leaderboard and History for?', 'Para que servem a Classificação e o Histórico?'], ['La Clasificación te permite competir con otras cuentas de tu liga según la XP ganada en la semana. El Histórico muestra tus temporadas anteriores y tus mejores resultados.', 'The Leaderboard lets you compete with other accounts in your league based on the XP earned during the week. History shows your past seasons and best results.', 'A Classificação permite competir com outras contas da sua liga pela XP ganha na semana. O Histórico mostra suas temporadas anteriores e seus melhores resultados.'],
  ['¿Puedo aprender varios idiomas al mismo tiempo?', 'Can I learn several languages at the same time?', 'Posso aprender vários idiomas ao mesmo tempo?'], ['¡Claro que sí! En la sección "Cursos" puedes elegir qué idioma avanzar y aprender los idiomas que quieras a tu propio ritmo y en paralelo.', 'Of course! In the "Courses" section you can choose which language to work on and learn the languages you want at your own pace, in parallel.', 'Claro que sim! Na seção "Cursos" você pode escolher qual idioma avançar e aprender os idiomas que quiser no seu ritmo e em paralelo.'],
  ['Olvidé mi contraseña, ¿qué hago?', 'I forgot my password, what should I do?', 'Esqueci minha senha, o que faço?'], ['Puedes ir a la página de inicio de sesión y hacer clic en "¿Olvidaste tu contraseña?". Allí simularemos el envío de un enlace para recuperarla, ya que LingoWeb es una demostración.', 'Go to the login page and click "Forgot your password?". There we will simulate sending a recovery link, since LingoWeb is a demo.', 'Vá à página de login e clique em "Esqueceu sua senha?". Lá simularemos o envio de um link para recuperá-la, pois o LingoWeb é uma demonstração.'],
  ['¿Cómo cambio el idioma de la interfaz?', 'How do I change the interface language?', 'Como altero o idioma da interface?'], ['Ingresa a tu Perfil y, en "Ajustes de cuenta", elige el idioma de la interfaz. La opción se aplica en toda la web y se conserva al volver a ingresar. El contenido de los cursos se mantiene en español.', 'Go to your Profile and, in "Account settings", choose the interface language. The option applies across the whole site and is kept when you log in again. Course content stays in Spanish.', 'Entre no seu Perfil e, em "Configurações da conta", escolha o idioma da interface. A opção vale para todo o site e é mantida ao entrar novamente. O conteúdo dos cursos permanece em espanhol.'],
  ['¿Qué son las gemas y la tienda?', 'What are gems and the shop?', 'O que são as gemas e a loja?'], ['Ganas gemas (💎) al completar lecciones por primera vez y puedes canjearlas en Rachas/Tienda por protectores de racha, oportunidades extra, experiencia doble e insignias para tu perfil.', 'You earn gems (💎) by completing lessons for the first time and can redeem them in Streaks/Shop for streak protectors, extra chances, double experience and badges for your profile.', 'Você ganha gemas (💎) ao concluir lições pela primeira vez e pode resgatá-las em Sequências/Loja por protetores de sequência, chances extras, experiência em dobro e insígnias para seu perfil.'],

  // Títulos de pestaña
  ['{} - LingoWeb', '{} - LingoWeb', '{} - LingoWeb'], ['Registro', 'Sign up', 'Cadastro'], ['LingoWeb - Aprende idiomas gratis', 'LingoWeb - Learn languages for free', 'LingoWeb - Aprenda idiomas de graça']
]);


/* ---------------------------------------------------------------------
   3. BÚSQUEDA DE TRADUCCIONES
   --------------------------------------------------------------------- */

// Separa las frases fijas de las que tienen partes variables. Las variables se
// convierten en expresiones regulares y se prueban primero las más largas, para
// que una frase general no gane sobre otra más específica.
const prepararDiccionario = (posicion) => {
  const exactas = new Map();
  const variables = [];

  FRASES.forEach((frase) => {
    const [original] = frase;
    if (original.includes('{}')) {
      const patron = original.replace(/[.*+?^$()|[\]\\]/g, '\\$&').replace(/\{\}/g, '(.+?)');
      variables.push({ regex: new RegExp(`^${patron}$`, 's'), destino: frase[posicion], largo: original.length });
    } else {
      exactas.set(original, frase[posicion]);
    }
  });
  variables.sort((a, b) => b.largo - a.largo);
  return { exactas, variables };
};

// Traduce una frase sin íconos. Las partes variables también se traducen: así
// «Racha de 5 días» usa las frases «Racha de {}» y «{} días».
const traducirFrase = (frase, diccionario) => {
  if (diccionario.exactas.has(frase)) {
    return diccionario.exactas.get(frase);
  }
  for (const { regex, destino } of diccionario.variables) {
    const coincidencia = frase.match(regex);
    if (coincidencia) {
      const partes = coincidencia.slice(1).map((parte) => traducirFrase(parte, diccionario));
      return destino.replace(/\{\}/g, () => partes.shift());
    }
  }
  return frase;
};

// Conserva íconos y espacios de los extremos y traduce lo que queda en el medio.
// Los espacios se unifican porque un párrafo del HTML puede ocupar varias líneas.
const traducirTexto = (texto, diccionario) => {
  const limpio = texto.replace(/\s+/g, ' ');
  const [, inicio, cuerpo, fin] = limpio.match(/^([^\p{L}\p{N}¡¿(#]*)(.*?)(\s*)$/su);
  const exacto = diccionario.exactas.get(limpio.trim());
  const traducido = exacto ?? `${inicio}${traducirFrase(cuerpo, diccionario)}${fin}`;
  return traducido === limpio ? texto : traducido;
};


/* ---------------------------------------------------------------------
   4. APLICACIÓN SOBRE LA PÁGINA
   --------------------------------------------------------------------- */

const ATRIBUTOS_TRADUCIBLES = Object.freeze(['placeholder', 'aria-label', 'title']);

// Recorre un elemento y traduce sus textos y atributos. Se saltea lo marcado con
// lang (frases del idioma que se enseña) y lo que no se muestra como texto.
const traducirElemento = (raiz, diccionario) => {
  const recorrido = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
  const textos = [];
  while (recorrido.nextNode()) {
    textos.push(recorrido.currentNode);
  }
  textos.forEach((nodo) => {
    const padre = nodo.parentElement;
    if (!nodo.textContent.trim() || !padre || padre.closest('script, style, [lang]:not(html)')) {
      return;
    }
    const traducido = traducirTexto(nodo.textContent, diccionario);
    if (traducido !== nodo.textContent) {
      nodo.textContent = traducido;
    }
  });

  [raiz, ...raiz.querySelectorAll('*')].forEach((elemento) => {
    ATRIBUTOS_TRADUCIBLES.forEach((atributo) => {
      if (elemento.hasAttribute(atributo)) {
        elemento.setAttribute(atributo, traducirTexto(elemento.getAttribute(atributo), diccionario));
      }
    });
  });
};

// Se llama al arrancar cada página. El observador traduce también lo que las
// vistas dibujan después: mensajes, tablas, ventanas de confirmación.
const aplicarIdioma = () => {
  const idioma = idiomaActual();
  document.documentElement.lang = idioma;
  if (idioma === 'es') {
    return;
  }

  const diccionario = prepararDiccionario(IDIOMAS_INTERFAZ[idioma].posicion);
  const traducirTitulo = () => {
    const titulo = traducirTexto(document.title, diccionario);
    if (titulo !== document.title) {
      document.title = titulo;
    }
  };

  // La lección cambia el título de la pestaña después de cargar.
  traducirTitulo();
  new MutationObserver(traducirTitulo).observe(document.querySelector('title'), { childList: true });

  const observador = new MutationObserver((cambios) => {
    cambios.forEach(({ type, target, addedNodes }) => {
      if (type === 'characterData') {
        traducirElemento(target.parentElement ?? document.body, diccionario);
      }
      addedNodes.forEach((nodo) => {
        if (nodo.nodeType === Node.ELEMENT_NODE) {
          traducirElemento(nodo, diccionario);
        } else if (nodo.parentElement) {
          traducirElemento(nodo.parentElement, diccionario);
        }
      });
    });
  });

  traducirElemento(document.body, diccionario);
  observador.observe(document.body, { childList: true, subtree: true, characterData: true });
};
