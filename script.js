const preguntas = [
  {
    texto: "¿qué energía, espacio, conciencia y elección puedes ser para recibir más dinero de lo que jamás imaginaste, con total facilidad?",
    categoria: "recibir"
  },
  {
    texto: "¿qué tomaría para que el dinero te busque a ti como tú buscas el café en las mañanas?",
    categoria: "recibir"
  },
  {
    texto: "si no tuvieras ningún punto de vista sobre el dinero, ¿cuánto podrías recibir hoy?",
    categoria: "recibir"
  },
  {
    texto: "y si el dinero fuera tu amante, ¿cómo lo estarías tratando?",
    categoria: "bloqueos"
  },
  {
    texto: "¿qué está creando escasez en tu vida que podrías soltar ahora mismo?",
    categoria: "bloqueos"
  },
  {
    texto: "¿qué es el dinero para ti... y de quién aprendiste eso?",
    categoria: "bloqueos"
  },
  {
    texto: "¿qué juicios estás usando para limitar el dinero que puedes elegir?",
    categoria: "bloqueos"
  },
  {
    texto: "¿qué te impide reconocer que ya eres una energía de riqueza?",
    categoria: "riqueza"
  },
  {
    texto: "¿cuánto más dinero podrías tener si te atrevieras a disfrutar sin culpa?",
    categoria: "gozo"
  },
  {
    texto: "¿qué posibilidades infinitas con el dinero están disponibles hoy que aún no has reconocido?",
    categoria: "riqueza"
  },
  {
    texto: "¿qué debes dejar de controlar para que el dinero fluya con más gozo?",
    categoria: "bloqueos"
  },
  {
    texto: "¿estás dispuesta a recibir dinero de formas inesperadas y sin esfuerzo?",
    categoria: "recibir"
  },
  {
    texto: "¿qué estás evitando o defendiendo que te impide ser millonaria?",
    categoria: "bloqueos"
  },
  {
    texto: "¿qué más es posible con el dinero que nunca nadie te enseñó?",
    categoria: "riqueza"
  },
  {
    texto: "¿qué pasaría si dejaras de rechazar ser rica?",
    categoria: "bloqueos"
  },
  {
    texto: "y si el dinero no fuera un problema… ¿qué elegirías hoy?",
    categoria: "riqueza"
  },
  {
    texto: "¿qué estás copiando de tu familia sobre el dinero que ya no te sirve?",
    categoria: "bloqueos"
  },
  {
    texto: "¿qué tomaría para que el dinero se muestre hoy con facilidad, alegría y gloria?",
    categoria: "recibir"
  },
  {
    texto: "¿qué nivel de gratitud y gozo puedes ser hoy para duplicar tus ingresos?",
    categoria: "gozo"
  },
  {
    texto: "¿cuánto dinero estás dispuesto(a) a tener sin perder tu esencia?",
    categoria: "gozo"
  },
  {
    texto: "¿qué conciencia del dinero estás listo(a) para recibir hoy?",
    categoria: "recibir"
  },
  {
    texto: "¿qué energía puedes ser para atraer clientes que te paguen con gozo?",
    categoria: "clientes"
  },
  {
    texto: "¿qué más puedes vender, crear o elegir que sea una contribución financiera para ti y para el mundo?",
    categoria: "clientes"
  },
  {
    texto: "¿qué estás haciendo más difícil de lo que realmente es con el dinero?",
    categoria: "bloqueos"
  },
  {
    texto: "¿qué parte de tu magia estás ignorando que crearía más dinero de inmediato?",
    categoria: "riqueza"
  },
  {
    texto: "¿qué te impide ser el imán que realmente eres para el dinero?",
    categoria: "bloqueos"
  },
  {
    texto: "¿qué tomaría para elegir más dinero sin tener que justificarlo?",
    categoria: "recibir"
  },
  {
    texto: "y si el dinero no fuera serio ni pesado, ¿cómo sería?",
    categoria: "gozo"
  },
  {
    texto: "¿qué riqueza energética está disponible para ti ahora mismo?",
    categoria: "riqueza"
  },
  {
    texto: "¿qué puedes ser o hacer hoy que cree más dinero ahora y para toda la eternidad?",
    categoria: "riqueza"
  }
];

// Retos diarios
const retosDiarios = [
  "Escribe una lista de 10 cosas por las que te sientes agradecida hoy, especialmente relacionadas con el dinero y la abundancia.",
  "Identifica un pensamiento limitante sobre el dinero que hayas tenido hoy y reemplázalo con una creencia expansiva.",
  "Haz algo que te haga sentir rica hoy, sin importar cuán pequeño sea (usar tu perfume favorito, tomar tu bebida preferida, etc.).",
  "Expresa gratitud por el dinero que ya tienes, sin importar la cantidad. Agradécelo por estar en tu vida.",
  "Identifica una oportunidad de dinero que hayas rechazado o ignorado recientemente. ¿Qué te impidió aprovecharla?",
  "Piensa en alguien a quien admires por su relación con el dinero. ¿Qué cualidades puedes adoptar de esa persona?",
  "Hoy, cuando gastes dinero, hazlo con conciencia y gratitud. Agradece cada compra por el valor que te aporta.",
  "Escribe una carta a tu yo futuro rico, describiendo cómo te sientes sabiendo que ya has logrado la abundancia financiera.",
  "Identifica un área de tu vida donde estés actuando desde la escasez. ¿Cómo podrías actuar desde la abundancia?",
  "Haz una lista de todas las formas en que el dinero ya te está sirviendo, incluso si no es la cantidad que deseas."
];

// Logros disponibles
const logros = [
  { id: 'first_reflection', title: 'Primera Reflexión', description: 'Escribiste tu primera reflexión', icon: 'fas fa-star', points: 10 },
  { id: 'week_streak', title: 'Una Semana', description: '7 días consecutivos escribiendo', icon: 'fas fa-fire', points: 50 },
  { id: 'month_streak', title: 'Un Mes', description: '30 días consecutivos escribiendo', icon: 'fas fa-calendar', points: 200 },
  { id: 'first_favorite', title: 'Primer Favorito', description: 'Marcaste tu primer mensaje como favorito', icon: 'fas fa-heart', points: 25 },
  { id: 'gratitude_master', title: 'Maestra de la Gratitud', description: '10 reflexiones sobre gratitud', icon: 'fas fa-pray', points: 100 },
  { id: 'abundance_seeker', title: 'Buscadora de Abundancia', description: '20 reflexiones sobre recibir', icon: 'fas fa-gem', points: 150 },
  { id: 'challenge_completer', title: 'Retadora', description: 'Completaste tu primer reto diario', icon: 'fas fa-target', points: 30 },
  { id: 'reflection_explorer', title: 'Exploradora', description: 'Escribiste reflexiones en todos los temas', icon: 'fas fa-compass', points: 75 }
];

// Obtener elementos del DOM
const nombreInput = document.getElementById("nombreInput");
const nombreForm = document.getElementById("nombreForm");
const contenido = document.getElementById("contenidoPregunta");
const preguntaEl = document.getElementById("pregunta");
const reflexionInput = document.getElementById("reflexion");
const barraProgreso = document.getElementById("barraProgreso");
const calendarioEl = document.getElementById("calendario");
const saludoEl = document.getElementById("saludo");
const temaSelect = document.getElementById("temaSelect");
const wordCounter = document.getElementById("wordCounter");
const autoSaveIndicator = document.getElementById("autoSaveIndicator");
const progresoPorcentaje = document.getElementById("progresoPorcentaje");
const backgroundGallery = document.getElementById("backgroundGallery");
const shareOptions = document.getElementById("shareOptions");
const themeToggle = document.getElementById("themeToggle");
const statsPanel = document.getElementById("statsPanel");
const diaryPanel = document.getElementById("diaryPanel");
const favoriteBtn = document.getElementById("favoriteBtn");
const dailyChallengeEl = document.getElementById("dailyChallenge");

// Variables globales
let currentDay = getDiaDelAño();
let autoSaveTimeout;
let userPoints = parseInt(localStorage.getItem("monkPoints") || "0");
let userAchievements = JSON.parse(localStorage.getItem("userAchievements") || "[]");
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
let completedChallenges = JSON.parse(localStorage.getItem("completedChallenges") || "[]");

// Inicialización
window.onload = () => {
  aplicarModoDiaNoche();
  aplicarFondoAutomatico();
  const nombre = localStorage.getItem("nombreUsuario");
  if (nombre) {
    nombreForm.classList.add("hidden");
    contenido.classList.remove("hidden");
    mostrarPregunta(nombre);
    mostrarReflexion();
    actualizarProgreso();
    generarCalendario();
    cargarRetoDiario();
    actualizarEstadisticas();
  }
  
  // Cargar preferencias guardadas
  cargarPreferencias();
};

// Guardar nombre
function guardarNombre() {
  const nombre = nombreInput.value.trim();
  if (nombre) {
    localStorage.setItem("nombreUsuario", nombre);
    nombreForm.classList.add("hidden");
    contenido.classList.remove("hidden");
    mostrarPregunta(nombre);
    actualizarProgreso();
    generarCalendario();
    cargarRetoDiario();
    actualizarEstadisticas();
  }
}

// Cambiar nombre
function cambiarNombre() {
  localStorage.removeItem("nombreUsuario");
  localStorage.removeItem("reflexion_" + currentDay);
  nombreForm.classList.remove("hidden");
  contenido.classList.add("hidden");
}

// Mostrar pregunta
function mostrarPregunta(nombre) {
  const tema = temaSelect.value;
  let preguntaBase;

  if (tema === "todas") {
    preguntaBase = preguntas[currentDay % preguntas.length];
  } else {
    const filtradas = preguntas.filter(p => p.categoria === tema);
    preguntaBase = filtradas[currentDay % filtradas.length];
  }

  const texto = `${nombre}, ${preguntaBase.texto.charAt(0).toUpperCase() + preguntaBase.texto.slice(1)}`;
  preguntaEl.textContent = texto;

  // Verificar si es favorito
  const preguntaKey = `${currentDay}_${preguntaBase.categoria}`;
  if (favorites.includes(preguntaKey)) {
    favoriteBtn.classList.add("favorited");
    favoriteBtn.innerHTML = '<i class="fas fa-heart"></i><span>Favorito</span>';
  } else {
    favoriteBtn.classList.remove("favorited");
    favoriteBtn.innerHTML = '<i class="far fa-heart"></i><span>Favorito</span>';
  }

  mostrarYoFuturo(nombre);
}

// Obtener día del año (1-365)
function getDiaDelAño() {
  const hoy = new Date();
  const inicio = new Date(hoy.getFullYear(), 0, 0);
  const diff = hoy - inicio;
  return Math.floor(diff / 86400000);
}

// Guardar reflexión con guardado automático
function guardarReflexion() {
  const texto = reflexionInput.value;
  const clave = "reflexion_" + currentDay;
  localStorage.setItem(clave, texto);
  
  // Actualizar contador de palabras
  const palabras = texto.trim() ? texto.trim().split(/\s+/).length : 0;
  wordCounter.textContent = `${palabras} palabras`;
  
  // Mostrar indicador de guardado automático
  autoSaveIndicator.classList.add("show");
  clearTimeout(autoSaveTimeout);
  autoSaveTimeout = setTimeout(() => {
    autoSaveIndicator.classList.remove("show");
  }, 2000);
  
  // Actualizar progreso
  actualizarProgreso();
  
  // Actualizar calendario
  actualizarCalendario();
  
  // Verificar logros
  verificarLogros();
  
  // Actualizar estadísticas
  actualizarEstadisticas();
}

// Mostrar reflexión guardada
function mostrarReflexion() {
  const clave = "reflexion_" + currentDay;
  const reflexion = localStorage.getItem(clave);
  if (reflexion) {
    reflexionInput.value = reflexion;
    const palabras = reflexion.trim() ? reflexion.trim().split(/\s+/).length : 0;
    wordCounter.textContent = `${palabras} palabras`;
  } else {
    reflexionInput.value = "";
    wordCounter.textContent = "0 palabras";
  }
}

// Compartir pregunta
function toggleShareOptions() {
  shareOptions.classList.toggle("hidden");
}

function closeShareOptions() {
  shareOptions.classList.add("hidden");
}

function compartirEnRedSocial(red) {
  const nombre = localStorage.getItem("nombreUsuario");
  const pregunta = preguntaEl.textContent;
  const reflexion = reflexionInput.value;
  
  let texto = `${pregunta}`;
  if (reflexion.trim()) {
    texto += `\n\nMi reflexión: ${reflexion}`;
  }
  
  let url = "";
  
  switch(red) {
    case 'whatsapp':
      url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
      break;
    case 'facebook':
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(texto)}`;
      break;
    case 'twitter':
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}`;
      break;
    case 'instagram':
      // Instagram no permite compartir texto directo, mostrar mensaje
      alert("Para Instagram, copia el texto y compártelo en tu historia o post.");
      return;
  }
  
  if (url) {
    window.open(url, '_blank');
  }
  
  closeShareOptions();
}

function copiarTexto() {
  const nombre = localStorage.getItem("nombreUsuario");
  const pregunta = preguntaEl.textContent;
  const reflexion = reflexionInput.value;
  
  let texto = `${pregunta}`;
  if (reflexion.trim()) {
    texto += `\n\nMi reflexión: ${reflexion}`;
  }
  
  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado al portapapeles");
  }).catch(() => {
    // Fallback para navegadores antiguos
    const textArea = document.createElement("textarea");
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Texto copiado al portapapeles");
  });
  
  closeShareOptions();
}

function generarImagen(tipo) {
  // Simulación de generación de imagen
  alert(`Generando imagen ${tipo}...\n\nEsta funcionalidad requiere una librería de generación de imágenes como html2canvas o una API externa.`);
  closeShareOptions();
}

// Actualizar progreso
function actualizarProgreso() {
  const reflexion = reflexionInput.value.trim();
  const progreso = reflexion ? 100 : 0;
  
  barraProgreso.style.width = progreso + "%";
  progresoPorcentaje.textContent = progreso + "%";
}

// Generar calendario
function generarCalendario() {
  calendarioEl.innerHTML = "";
  
  for (let i = 1; i <= 31; i++) {
    const dia = document.createElement("div");
    dia.textContent = i;
    dia.onclick = () => navegarADia(i);
    
    // Marcar día actual
    if (i === new Date().getDate()) {
      dia.classList.add("hoy");
    }
    
    // Marcar días con reflexión
    const clave = "reflexion_" + i;
    const reflexion = localStorage.getItem(clave);
    if (reflexion && reflexion.trim()) {
      dia.classList.add("completado");
    }
    
    calendarioEl.appendChild(dia);
  }
}

// Actualizar calendario
function actualizarCalendario() {
  const dias = calendarioEl.children;
  for (let i = 0; i < dias.length; i++) {
    const dia = dias[i];
    const diaNum = i + 1;
    const clave = "reflexion_" + diaNum;
    const reflexion = localStorage.getItem(clave);
    
    dia.classList.remove("completado");
    if (reflexion && reflexion.trim()) {
      dia.classList.add("completado");
    }
  }
}

// Navegar a un día específico
function navegarADia(dia) {
  currentDay = dia;
  const nombre = localStorage.getItem("nombreUsuario");
  mostrarPregunta(nombre);
  mostrarReflexion();
  actualizarProgreso();
  
  // Actualizar indicador visual en calendario
  const dias = calendarioEl.children;
  for (let i = 0; i < dias.length; i++) {
    dias[i].classList.remove("activo");
  }
  dias[dia - 1].classList.add("activo");
}

// Filtrar por tema
function filtrarPorTema() {
  const nombre = localStorage.getItem("nombreUsuario");
  mostrarPregunta(nombre);
}

// Aplicar modo día/noche automático
function aplicarModoDiaNoche() {
  const hora = new Date().getHours();
  const esDia = hora >= 6 && hora < 18;
  
  if (esDia) {
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.body.classList.remove("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Aplicar fondo automático según hora
function aplicarFondoAutomatico() {
  const hora = new Date().getHours();
  let fondo = "default";
  
  if (hora >= 5 && hora < 8) {
    fondo = "sunrise";
  } else if (hora >= 8 && hora < 17) {
    fondo = "day";
  } else if (hora >= 17 && hora < 20) {
    fondo = "sunset";
  } else {
    fondo = "night";
  }
  
  setBackground(fondo);
}

// Toggle tema claro/oscuro
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  
  if (isLight) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

// Toggle galería de fondos
function toggleBackgroundGallery() {
  backgroundGallery.classList.toggle("hidden");
}

function closeBackgroundGallery() {
  backgroundGallery.classList.add("hidden");
}

// Establecer fondo
function setBackground(tipo) {
  // Remover clases de fondo anteriores
  document.body.classList.remove(
    "bg-sunrise", "bg-day", "bg-sunset", "bg-night",
    "bg-gradient1", "bg-gradient2", "bg-gradient3", "bg-gradient4"
  );
  
  // Aplicar nuevo fondo
  if (tipo !== "default") {
    document.body.classList.add(`bg-${tipo}`);
  }
  
  localStorage.setItem("background", tipo);
  closeBackgroundGallery();
}

// Aplicar fondo visual
function aplicarFondoVisual() {
  // Esta función se mantiene por compatibilidad
}

// Mostrar mensaje del yo futuro
function mostrarYoFuturo(nombre) {
  const yoFuturoEl = document.getElementById("yoFuturo");
  const mensajes = [
    `Tu yo futuro te dice: "${nombre}, tú ya eres riqueza. Solo necesitas recordarlo."`,
    `Tu yo futuro te dice: "${nombre}, el dinero es energía. Tú eres energía. Conecta los puntos."`,
    `Tu yo futuro te dice: "${nombre}, la abundancia ya está aquí. ¿Puedes verla?"`,
    `Tu yo futuro te dice: "${nombre}, eres un imán natural para el dinero. Confía en tu magnetismo."`,
    `Tu yo futuro te dice: "${nombre}, el universo conspira a tu favor. ¿Estás lista para recibir?"`
  ];
  
  const mensaje = mensajes[currentDay % mensajes.length];
  yoFuturoEl.textContent = mensaje;
}

// Cargar preferencias guardadas
function cargarPreferencias() {
  // Cargar tema
  const tema = localStorage.getItem("theme");
  if (tema === "light") {
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Cargar fondo personalizado
  const fondo = localStorage.getItem("background");
  if (fondo && fondo !== "default") {
    setBackground(fondo);
  }
}

// NUEVAS FUNCIONALIDADES

// Interacciones con el mensaje
function toggleFavorite() {
  const tema = temaSelect.value;
  const preguntaBase = tema === "todas" ? 
    preguntas[currentDay % preguntas.length] : 
    preguntas.filter(p => p.categoria === tema)[currentDay % preguntas.filter(p => p.categoria === tema).length];
  
  const preguntaKey = `${currentDay}_${preguntaBase.categoria}`;
  
  if (favorites.includes(preguntaKey)) {
    favorites = favorites.filter(f => f !== preguntaKey);
    favoriteBtn.classList.remove("favorited");
    favoriteBtn.innerHTML = '<i class="far fa-heart"></i><span>Favorito</span>';
  } else {
    favorites.push(preguntaKey);
    favoriteBtn.classList.add("favorited");
    favoriteBtn.innerHTML = '<i class="fas fa-heart"></i><span>Favorito</span>';
  }
  
  localStorage.setItem("favorites", JSON.stringify(favorites));
  actualizarEstadisticas();
  verificarLogros();
}

function getRandomMessage() {
  const nombre = localStorage.getItem("nombreUsuario");
  const tema = temaSelect.value;
  let preguntaBase;
  
  if (tema === "todas") {
    preguntaBase = preguntas[Math.floor(Math.random() * preguntas.length)];
  } else {
    const filtradas = preguntas.filter(p => p.categoria === tema);
    preguntaBase = filtradas[Math.floor(Math.random() * filtradas.length)];
  }
  
  const texto = `${nombre}, ${preguntaBase.texto.charAt(0).toUpperCase() + preguntaBase.texto.slice(1)}`;
  preguntaEl.textContent = texto;
  
  // Agregar puntos por usar mensaje aleatorio
  userPoints += 5;
  localStorage.setItem("monkPoints", userPoints.toString());
  actualizarEstadisticas();
}

function expandQuote() {
  const mensajes = [
    "Este mensaje está basado en principios de abundancia y conciencia financiera.",
    "La pregunta invita a explorar tu relación con el dinero desde una perspectiva energética.",
    "Recuerda: el dinero es energía en movimiento. Tu conciencia determina su flujo.",
    "Esta reflexión te conecta con tu poder innato para crear riqueza.",
    "El mensaje te guía hacia una relación más consciente y fluida con el dinero."
  ];
  
  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  alert(`Contexto del mensaje:\n\n${mensaje}`);
}

// Estadísticas
function toggleStats() {
  statsPanel.classList.toggle("hidden");
  if (!statsPanel.classList.contains("hidden")) {
    actualizarEstadisticas();
  }
}

function closeStats() {
  statsPanel.classList.add("hidden");
}

function actualizarEstadisticas() {
  // Calcular días consecutivos
  const streak = calcularRacha();
  document.getElementById("streakCount").textContent = streak;
  
  // Calcular reflexiones totales
  const totalReflections = calcularReflexionesTotales();
  document.getElementById("totalReflections").textContent = totalReflections;
  
  // Contar favoritos
  document.getElementById("favoritesCount").textContent = favorites.length;
  
  // Mostrar puntos
  document.getElementById("pointsCount").textContent = userPoints;
  
  // Actualizar logros
  mostrarLogros();
}

function calcularRacha() {
  let racha = 0;
  const hoy = new Date();
  
  for (let i = 0; i < 365; i++) {
    const fecha = new Date(hoy);
    fecha.setDate(fecha.getDate() - i);
    const dia = Math.floor((fecha - new Date(fecha.getFullYear(), 0, 0)) / 86400000);
    const clave = "reflexion_" + dia;
    const reflexion = localStorage.getItem(clave);
    
    if (reflexion && reflexion.trim()) {
      racha++;
    } else {
      break;
    }
  }
  
  return racha;
}

function calcularReflexionesTotales() {
  let total = 0;
  for (let i = 1; i <= 365; i++) {
    const clave = "reflexion_" + i;
    const reflexion = localStorage.getItem(clave);
    if (reflexion && reflexion.trim()) {
      total++;
    }
  }
  return total;
}

function mostrarLogros() {
  const achievementsList = document.getElementById("achievementsList");
  achievementsList.innerHTML = "";
  
  const logrosRecientes = userAchievements.slice(-3).reverse();
  
  logrosRecientes.forEach(achievementId => {
    const logro = logros.find(l => l.id === achievementId);
    if (logro) {
      const achievementEl = document.createElement("div");
      achievementEl.className = "achievement-item";
      achievementEl.innerHTML = `
        <div class="achievement-icon">
          <i class="${logro.icon}"></i>
        </div>
        <div class="achievement-info">
          <h5>${logro.title}</h5>
          <p>${logro.description}</p>
        </div>
      `;
      achievementsList.appendChild(achievementEl);
    }
  });
  
  if (logrosRecientes.length === 0) {
    achievementsList.innerHTML = '<p style="text-align: center; opacity: 0.7;">Aún no has desbloqueado logros. ¡Sigue escribiendo!</p>';
  }
}

function verificarLogros() {
  const totalReflections = calcularReflexionesTotales();
  const streak = calcularRacha();
  const totalFavorites = favorites.length;
  
  // Primer logro: primera reflexión
  if (totalReflections === 1 && !userAchievements.includes('first_reflection')) {
    desbloquearLogro('first_reflection');
  }
  
  // Racha de una semana
  if (streak >= 7 && !userAchievements.includes('week_streak')) {
    desbloquearLogro('week_streak');
  }
  
  // Racha de un mes
  if (streak >= 30 && !userAchievements.includes('month_streak')) {
    desbloquearLogro('month_streak');
  }
  
  // Primer favorito
  if (totalFavorites === 1 && !userAchievements.includes('first_favorite')) {
    desbloquearLogro('first_favorite');
  }
  
  // Reto completado
  if (completedChallenges.length === 1 && !userAchievements.includes('challenge_completer')) {
    desbloquearLogro('challenge_completer');
  }
}

function desbloquearLogro(achievementId) {
  const logro = logros.find(l => l.id === achievementId);
  if (logro && !userAchievements.includes(achievementId)) {
    userAchievements.push(achievementId);
    userPoints += logro.points;
    
    localStorage.setItem("userAchievements", JSON.stringify(userAchievements));
    localStorage.setItem("monkPoints", userPoints.toString());
    
    // Mostrar notificación
    mostrarNotificacion(`¡Logro desbloqueado! ${logro.title}`, `+${logro.points} puntos`);
    
    actualizarEstadisticas();
  }
}

function mostrarNotificacion(titulo, mensaje) {
  const notificacion = document.createElement("div");
  notificacion.className = "notification";
  notificacion.innerHTML = `
    <h4>${titulo}</h4>
    <p>${mensaje}</p>
  `;
  notificacion.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: var(--dark-bg);
    padding: 15px 25px;
    border-radius: 10px;
    z-index: 10000;
    animation: slideDown 0.5s ease;
  `;
  
  document.body.appendChild(notificacion);
  
  setTimeout(() => {
    notificacion.remove();
  }, 3000);
}

// Diario de reflexiones
function openDiary() {
  diaryPanel.classList.remove("hidden");
  cargarDiario();
}

function closeDiary() {
  diaryPanel.classList.add("hidden");
}

function cargarDiario() {
  const diaryEntries = document.getElementById("diaryEntries");
  diaryEntries.innerHTML = "";
  
  const entradas = [];
  const temaSelect = document.getElementById("diaryThemeFilter");

  for (let i = 1; i <= 365; i++) {
    const clave = "reflexion_" + i;
    const reflexion = localStorage.getItem(clave);

    if (reflexion && reflexion.trim()) {
      const tema = temaSelect?.value === "todas" ? 
        preguntas[i % preguntas.length].categoria : 
        temaSelect?.value || "sin tema";

      const pregunta = preguntas[i % preguntas.length]?.texto || "Pregunta desconocida";

      entradas.push({
        dia: i,
        reflexion: reflexion,
        tema: tema,
        pregunta: pregunta
      });
    }
  }

  if (entradas.length === 0) {
    diaryEntries.innerHTML = '<p style="text-align: center; opacity: 0.7;">Aún no tienes reflexiones guardadas.</p>';
  } else {
    entradas.reverse().forEach(entrada => {
      const entradaEl = document.createElement("div");
      entradaEl.className = "diary-entry";
      entradaEl.innerHTML = `
        <div class="entry-header">
          <span class="entry-date">Día ${entrada.dia}</span>
          <span class="entry-theme">${getTemaNombre(entrada.tema)}</span>
        </div>
        <div class="entry-question">${entrada.pregunta}</div>
        <div class="entry-reflection">${entrada.reflexion}</div>
      `;
      diaryEntries.appendChild(entradaEl);
    });
  }
}

  


function getTemaNombre(tema) {
  const temas = {
    'recibir': 'Recibir y merecer',
    'clientes': 'Clientes y acción',
    'bloqueos': 'Bloqueos y creencias',
    'gozo': 'Gozo y gratitud',
    'riqueza': 'Riqueza energética'
  };
  return temas[tema] || tema;
}

function filterDiary() {
  const searchTerm = document.getElementById("diarySearch").value.toLowerCase();
  const themeFilter = document.getElementById("diaryThemeFilter").value;
  const entries = document.querySelectorAll(".diary-entry");
  
  entries.forEach(entry => {
    const question = entry.querySelector(".entry-question").textContent.toLowerCase();
    const reflection = entry.querySelector(".entry-reflection").textContent.toLowerCase();
    const theme = entry.querySelector(".entry-theme").textContent;
    
    const matchesSearch = question.includes(searchTerm) || reflection.includes(searchTerm);
    const matchesTheme = !themeFilter || theme.includes(themeFilter);
    
    entry.style.display = matchesSearch && matchesTheme ? "block" : "none";
  });
}

// Exportar reflexiones
function exportReflections(format) {
  const nombre = localStorage.getItem("nombreUsuario");
  let contenido = `Diario de Reflexiones de ${nombre}\n`;
  contenido += `Generado el ${new Date().toLocaleDateString()}\n\n`;
  
  for (let i = 1; i <= 31; i++) {
    const clave = "reflexion_" + i;
    const reflexion = localStorage.getItem(clave);
    
    if (reflexion && reflexion.trim()) {
      const tema = preguntas[i % preguntas.length].categoria;
      const pregunta = preguntas[i % preguntas.length].texto;
      
      contenido += `=== Día ${i} ===\n`;
      contenido += `Tema: ${getTemaNombre(tema)}\n`;
      contenido += `Pregunta: ${pregunta}\n`;
      contenido += `Reflexión: ${reflexion}\n\n`;
    }
  }
  
  if (format === 'json') {
    const data = {
      usuario: nombre,
      fecha: new Date().toISOString(),
      reflexiones: []
    };
    
    for (let i = 1; i <= 31; i++) {
      const clave = "reflexion_" + i;
      const reflexion = localStorage.getItem(clave);
      
      if (reflexion && reflexion.trim()) {
        data.reflexiones.push({
          dia: i,
          tema: preguntas[i % preguntas.length].categoria,
          pregunta: preguntas[i % preguntas.length].texto,
          reflexion: reflexion
        });
      }
    }
    
    contenido = JSON.stringify(data, null, 2);
  }
  
  if (format === 'pdf') {
    alert("Para generar PDF, se requiere una librería como jsPDF. Por ahora, se copiará el contenido al portapapeles.");
    format = 'txt';
  }
  
  // Descargar archivo
  const blob = new Blob([contenido], { type: format === 'json' ? 'application/json' : 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `reflexiones_${nombre}_${new Date().toISOString().split('T')[0]}.${format}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Retos diarios
function cargarRetoDiario() {
  const reto = retosDiarios[currentDay % retosDiarios.length];
  dailyChallengeEl.textContent = reto;
  
  // Verificar si ya está completado
  const challengeBtn = document.querySelector(".btn-challenge");
  if (completedChallenges.includes(currentDay)) {
    challengeBtn.classList.add("completed");
    challengeBtn.innerHTML = '<i class="fas fa-check"></i> Reto completado';
  } else {
    challengeBtn.classList.remove("completed");
    challengeBtn.innerHTML = '<i class="fas fa-check"></i> Completar reto';
  }
}

function completeChallenge() {
  if (!completedChallenges.includes(currentDay)) {
    completedChallenges.push(currentDay);
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
    
    // Agregar puntos
    userPoints += 20;
    localStorage.setItem("monkPoints", userPoints.toString());
    
    // Actualizar botón
    const challengeBtn = document.querySelector(".btn-challenge");
    challengeBtn.classList.add("completed");
    challengeBtn.innerHTML = '<i class="fas fa-check"></i> Reto completado';
    
    // Verificar logros
    verificarLogros();
    actualizarEstadisticas();
    
    mostrarNotificacion("¡Reto completado!", "+20 puntos");
  }
}

// Event listeners adicionales
document.addEventListener('click', function(e) {
  // Cerrar galería de fondos al hacer clic fuera
  if (!backgroundGallery.contains(e.target) && 
      !document.getElementById("backgroundToggle").contains(e.target) &&
      !backgroundGallery.classList.contains("hidden")) {
    closeBackgroundGallery();
  }
  
  // Cerrar opciones de compartir al hacer clic fuera
  if (!shareOptions.contains(e.target) && 
      !document.querySelector('.btn-share').contains(e.target) &&
      !shareOptions.classList.contains("hidden")) {
    closeShareOptions();
  }
  
  // Cerrar panel de estadísticas al hacer clic fuera
  if (!statsPanel.contains(e.target) && 
      !document.getElementById("statsToggle").contains(e.target) &&
      !statsPanel.classList.contains("hidden")) {
    closeStats();
  }
  
  // Cerrar diario al hacer clic fuera
  if (!diaryPanel.contains(e.target) && 
      !document.querySelector('.btn-secondary').contains(e.target) &&
      !diaryPanel.classList.contains("hidden")) {
    closeDiary();
  }
});

// Enter para guardar nombre
nombreInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    guardarNombre();
  }
});

// Agregar estilos CSS para notificaciones
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    to { transform: translateX(-50%) translateY(0); opacity: 1; }
  }
`;
document.head.appendChild(style);

