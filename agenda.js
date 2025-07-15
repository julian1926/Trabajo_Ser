// Frases motivacionales aleatorias
const frases = [
  "¡Sigue así, cada paso cuenta!",
  "¡Excelente trabajo! ¡Tú puedes con todo!",
  "¡Una tarea menos, un logro más!",
  "¡No te detengas, vas genial!",
  "¡Hoy es un gran día para avanzar!",
  "¡Tu esfuerzo vale la pena!",
  "¡Sigue sumando éxitos!",
  "¡Eres capaz de lograr lo que te propongas!"
];

function getTareas() {
  return JSON.parse(localStorage.getItem('tareasAgenda') || '[]');
}

function setTareas(tareas) {
  localStorage.setItem('tareasAgenda', JSON.stringify(tareas));
}

// Colores y emojis posibles
const colores = ['color-yellow', 'color-pink', 'color-purple', 'color-green'];
const emojis = ['🫖','🍳','🦷','💧','⏰','🧘','🥗','🚶'];
const puntosPorTarea = 5;

function openAddTaskModal() {
  document.getElementById('addTaskModal').classList.remove('hidden');
  document.getElementById('modalTaskInput').value = '';
  document.getElementById('modalEmojiInput').value = emojis[Math.floor(Math.random()*emojis.length)];
  document.getElementById('modalTaskInput').focus();
}
function closeAddTaskModal() {
  document.getElementById('addTaskModal').classList.add('hidden');
}
function confirmAddTask() {
  const texto = document.getElementById('modalTaskInput').value.trim();
  const emoji = document.getElementById('modalEmojiInput').value;
  if (!texto) return;
  const color = colores[Math.floor(Math.random()*colores.length)];
  const tareas = getTareas();
  tareas.push({ texto, completada: false, emoji, color, puntos: puntosPorTarea });
  setTareas(tareas);
  closeAddTaskModal();
  renderTareas();
}

function renderTareas() {
  const lista = document.getElementById('taskList');
  lista.innerHTML = '';
  const tareas = getTareas();
  tareas.forEach((tarea, idx) => {
    const li = document.createElement('li');
    li.className = `task-item ${tarea.color}${tarea.completada ? ' completada' : ''}`;
    if (tarea.editing) {
      li.innerHTML = `
        <span class="task-emoji">
          <select class="edit-emoji" onchange="updateEditEmoji(${idx}, this.value)">
            ${emojis.map(e => `<option value='${e}'${e===tarea.emoji?' selected':''}>${e}</option>`).join('')}
          </select>
        </span>
        <input class="edit-text" value="${tarea.texto}" maxlength="80" oninput="updateEditText(${idx}, this.value)" />
        <span class="task-points"><i class='fas fa-bolt'></i> ${tarea.puntos}</span>
        <div class="task-actions">
          <button class="task-action-btn edit" onclick="saveEditTarea(${idx})"><i class="fas fa-check"></i></button>
          <button class="task-action-btn" onclick="deleteTarea(${idx})"><i class="fas fa-trash"></i></button>
        </div>
      `;
    } else {
      li.innerHTML = `
        <span class="task-emoji">${tarea.emoji}</span>
        <span class="task-text">${tarea.texto}</span>
        <span class="task-points"><i class='fas fa-bolt'></i> ${tarea.puntos}</span>
        <span class="task-check" onclick="completarTarea(${idx})">${tarea.completada ? '<i class=\'fas fa-check\'></i>' : ''}</span>
        <div class="task-actions">
          <button class="task-action-btn edit" onclick="editTarea(${idx})"><i class="fas fa-pen"></i></button>
          <button class="task-action-btn" onclick="deleteTarea(${idx})"><i class="fas fa-trash"></i></button>
        </div>
      `;
    }
    lista.appendChild(li);
  });
}
function editTarea(idx) {
  const tareas = getTareas();
  tareas[idx].editing = true;
  setTareas(tareas);
  renderTareas();
}
function saveEditTarea(idx) {
  const tareas = getTareas();
  tareas[idx].editing = false;
  setTareas(tareas);
  renderTareas();
}
function updateEditText(idx, value) {
  const tareas = getTareas();
  tareas[idx].texto = value;
  setTareas(tareas);
}
function updateEditEmoji(idx, value) {
  const tareas = getTareas();
  tareas[idx].emoji = value;
  setTareas(tareas);
}
function deleteTarea(idx) {
  const tareas = getTareas();
  tareas.splice(idx, 1);
  setTareas(tareas);
  renderTareas();
}

// --- Mascota Monje, puntos y frases sabias ---
const frasesSabias = [
  "La constancia es el camino al éxito.",
  "Cada tarea completada es un paso hacia tu paz interior.",
  "El progreso es más valioso que la perfección.",
  "Hoy es un buen día para avanzar.",
  "La disciplina es el puente entre metas y logros.",
  "Tu esfuerzo de hoy es la sonrisa de tu futuro."
];

function getMonkPoints() {
  return parseInt(localStorage.getItem('monkPoints') || '0');
}
function setMonkPoints(p) {
  localStorage.setItem('monkPoints', p);
  document.getElementById('monkPoints').textContent = p;
}
function showMonkMessage(msg) {
  document.getElementById('monkMessage').textContent = msg;
}
function randomSabia() {
  return frasesSabias[Math.floor(Math.random() * frasesSabias.length)];
}
function updateMonkMood() {
  // Cambia la imagen del monje según puntos (simple: sonríe más con más puntos)
  const points = getMonkPoints();
  let src = 'monk-default.svg';
  if (points >= 30) src = 'monk-happy.svg';
  else if (points >= 10) src = 'monk-smile.svg';
  document.getElementById('monkImage').src = src;
}
// --- TIENDA DE ACCESORIOS ---
const accesoriosDisponibles = [
  {
    id: 'aura',
    nombre: 'Aura dorada',
    precio: 100,
    icono: `<svg width='32' height='32'><ellipse cx='16' cy='20' rx='14' ry='8' fill='gold' opacity='0.5'/></svg>`
  },
  {
    id: 'sombrero',
    nombre: 'Sombrero de bambú',
    precio: 120,
    icono: `<svg width='32' height='32'><polygon points='16,4 28,20 4,20' fill='#bfa14a' stroke='#8d6e1c' stroke-width='2'/></svg>`
  },
  {
    id: 'collar',
    nombre: 'Collar de cuentas',
    precio: 80,
    icono: `<svg width='32' height='32'><circle cx='16' cy='26' r='8' fill='none' stroke='#a0522d' stroke-width='4'/></svg>`
  },
  {
    id: 'incienso',
    nombre: 'Incienso',
    precio: 90,
    icono: `<svg width='32' height='32'><rect x='14' y='22' width='4' height='8' fill='#b5651d'/><rect x='15' y='18' width='2' height='4' fill='#e17055'/><path d='M16 18 Q18 14 16 10' stroke='#aaa' stroke-width='1.5' fill='none'/></svg>`
  }
];
function getInventario() {
  return JSON.parse(localStorage.getItem('monkAccesorios') || '{}');
}
function setInventario(inv) {
  localStorage.setItem('monkAccesorios', JSON.stringify(inv));
}
function getEquipado() {
  return localStorage.getItem('monkEquipado') || '';
}
function setEquipado(id) {
  localStorage.setItem('monkEquipado', id);
}
function openShop() {
  renderShop();
  document.getElementById('shopModal').classList.remove('hidden');
}
function closeShop() {
  document.getElementById('shopModal').classList.add('hidden');
}
function renderShop() {
  const inv = getInventario();
  const equipado = getEquipado();
  const puntos = getMonkPoints();
  const shop = document.getElementById('shopItems');
  shop.innerHTML = '';
  accesoriosDisponibles.forEach(acc => {
    const comprado = !!inv[acc.id];
    const item = document.createElement('div');
    item.className = 'shop-item';
    item.innerHTML = `
      <div class='shop-item-info'>
        <span class='shop-item-icon'>${acc.icono}</span>
        <span class='shop-item-name'>${acc.nombre}</span>
      </div>
      <span class='shop-item-price'><i class='fas fa-bolt'></i> ${acc.precio}</span>
      <button class='shop-item-btn' id='btn-${acc.id}'></button>
    `;
    shop.appendChild(item);
    const btn = item.querySelector(`#btn-${acc.id}`);
    if (!comprado) {
      btn.textContent = 'Comprar';
      btn.disabled = puntos < acc.precio;
      btn.onclick = () => comprarAccesorio(acc.id, acc.precio);
    } else if (equipado === acc.id) {
      btn.textContent = 'Desequipar';
      btn.classList.add('unequip');
      btn.onclick = () => desequiparAccesorio(acc.id);
    } else {
      btn.textContent = 'Equipar';
      btn.classList.add('equip');
      btn.onclick = () => equiparAccesorio(acc.id);
    }
  });
}
function comprarAccesorio(id, precio) {
  let puntos = getMonkPoints();
  if (puntos < precio) return;
  puntos -= precio;
  setMonkPoints(puntos);
  const inv = getInventario();
  inv[id] = true;
  setInventario(inv);
  equiparAccesorio(id);
  renderShop();
}
function equiparAccesorio(id) {
  setEquipado(id);
  mostrarAccesorio(id);
  renderShop();
}
function desequiparAccesorio(id) {
  setEquipado('');
  mostrarAccesorio('');
  renderShop();
}
function mostrarAccesorio(id) {
  // Limpiar accesorios
  document.getElementById('aura').style.display = 'none';
  document.getElementById('monkAccessories').innerHTML = '';
  if (id === 'aura') {
    document.getElementById('aura').style.display = '';
  }
  if (id === 'sombrero') {
    document.getElementById('monkAccessories').innerHTML = `<svg width='120' height='140' style='position:absolute;left:0;top:0;pointer-events:none;'><polygon points='60,18 100,48 20,48' fill='#bfa14a' stroke='#8d6e1c' stroke-width='4'/></svg>`;
  }
  if (id === 'collar') {
    document.getElementById('monkAccessories').innerHTML = `<svg width='120' height='140' style='position:absolute;left:0;top:0;pointer-events:none;'><circle cx='60' cy='98' r='18' fill='none' stroke='#a0522d' stroke-width='5'/></svg>`;
  }
  if (id === 'incienso') {
    document.getElementById('monkAccessories').innerHTML = `<svg width='120' height='140' style='position:absolute;left:0;top:0;pointer-events:none;'><rect x='56' y='120' width='8' height='18' fill='#b5651d'/><rect x='58' y='110' width='4' height='10' fill='#e17055'/><path d='M60 110 Q70 100 60 90' stroke='#aaa' stroke-width='2' fill='none'/></svg>`;
  }
}
function completarTarea(idx) {
  const tareas = getTareas();
  if (!tareas[idx].completada) {
    tareas[idx].completada = true;
    setTareas(tareas);
    renderTareas();
    // Sumar puntos
    let puntos = getMonkPoints() + tareas[idx].puntos;
    setMonkPoints(puntos);
    // Frase sabia
    showMonkMessage(randomSabia());
    // Cambiar expresión
    updateMonkMood();
    // Frase motivacional visual
    mostrarFrase();
  }
}

function mostrarFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  const div = document.getElementById('motivationalPhrase');
  div.textContent = frase;
  div.style.display = 'block';
  setTimeout(() => {
    div.style.display = 'none';
  }, 2500);
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');
  localStorage.setItem('agenda-theme', body.classList.contains('light-mode') ? 'light' : 'dark');
}

function setBackground(bg) {
  const body = document.body;
  // Quitar clases previas de fondo
  body.className = body.className.replace(/bg-\w+|light-mode/g, '').trim();
  // Mantener modo claro si estaba
  if (localStorage.getItem('agenda-theme') === 'light') body.classList.add('light-mode');
  if (bg) body.classList.add('bg-' + bg);
  localStorage.setItem('agenda-bg', bg);
  // Marcar seleccionado en la galería
  document.querySelectorAll('.bg-option').forEach(opt => {
    opt.classList.remove('selected');
    if (opt.getAttribute('data-bg') === bg) opt.classList.add('selected');
  });
}

function toggleBackgroundGallery() {
  const gallery = document.getElementById('backgroundGallery');
  gallery.classList.toggle('hidden');
}

function closeBackgroundGallery() {
  document.getElementById('backgroundGallery').classList.add('hidden');
}

// Al cargar, mostrar accesorio equipado
window.addEventListener('DOMContentLoaded', () => {
  renderTareas();
  document.getElementById('newTaskInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') confirmAddTask(); // Changed to confirmAddTask
  });
  // Tema
  if (localStorage.getItem('agenda-theme') === 'light') document.body.classList.add('light-mode');
  // Fondo
  const bg = localStorage.getItem('agenda-bg');
  if (bg) setBackground(bg);
  // Marcar seleccionado en la galería si ya hay fondo
  setTimeout(() => {
    if (bg) {
      document.querySelectorAll('.bg-option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt.getAttribute('data-bg') === bg) opt.classList.add('selected');
      });
    }
  }, 100);
  // Monje
  setMonkPoints(getMonkPoints());
  updateMonkMood();
  document.querySelectorAll('.bg-option').forEach(opt => {
    opt.onclick = function() {
      setBackground(this.getAttribute('data-bg'));
      closeBackgroundGallery();
    };
  });
  mostrarAccesorio(getEquipado());
});

// Accesorios del monje (ejemplo: aura)
function activarAccesorio(nombre) {
  if (nombre === 'aura') {
    document.getElementById('aura').style.display = '';
  }
  // Aquí puedes agregar más accesorios
}
function desactivarAccesorio(nombre) {
  if (nombre === 'aura') {
    document.getElementById('aura').style.display = 'none';
  }
  // Aquí puedes agregar más accesorios
}
// Ejemplo: activar el aura al cargar si quieres probar
// window.addEventListener('DOMContentLoaded', () => { activarAccesorio('aura'); }); 