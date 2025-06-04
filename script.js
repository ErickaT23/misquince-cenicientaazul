// script.js

// 1. Función para abrir la invitación y reproducir música
window.abrirInvitacion = function() {
  const envelope   = document.getElementById('envelope');
  const invitacion = document.getElementById('invitacion');
  if (!envelope || !invitacion) return;

  envelope.classList.add('open');
  setTimeout(() => {
    envelope.style.display   = 'none';
    invitacion.style.display = 'block';

    const audio = document.getElementById('musica');
    if (audio) {
      audio.play().catch(() => {
        // Si el navegador lo bloquea por autoplay, el usuario
        // podrá darle play manualmente al <audio controls>.
      });
    }
  }, 1000);
};

// 2. Contador regresivo hasta la fecha del evento
window.iniciarContador = function() {
  const fechaEvento = new Date('August 02, 2025 00:00:00').getTime();
  setInterval(() => {
    const ahora     = Date.now();
    const diff      = fechaEvento - ahora;
    const dias      = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas     = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos   = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos  = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText    = dias;
    document.getElementById('horas').innerText   = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText= segundos;
  }, 1000);
};

// 3. Cargar datos del invitado actual según ?id= (SIN abrir invitación)
window.cargarDatosInvitado = function() {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  if (!id) return;

  const invitado = window.guests?.find(g => g.id === id);
  if (invitado) {
    document.getElementById('nombreInvitado').innerText  = invitado.name;
    document.getElementById('cantidadPases').innerText  = `Pases: ${invitado.passes}`;
  } else {
    console.warn(`Invitado con id=${id} no encontrado`);
  }
};

// 4. Observer para efecto fade-in al hacer scroll
window.initFadeInObserver = function() {
  const elems = document.querySelectorAll('.fade-in-element');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  elems.forEach(el => observer.observe(el));
};

// 5. Lightbox, mapas y confirmación de asistencia
window.changePhoto = function(element) {
  const modal = document.getElementById('photo-modal');
  const img   = document.getElementById('main-photo-modal');
  if (img) img.src = element.src;
  if (modal) modal.style.display = 'flex';
};

window.closeModal = function(event) {
  if (!event || event.target.id === 'photo-modal' || event.target.classList.contains('close')) {
    document.getElementById('photo-modal').style.display = 'none';
  }
};

window.confirmarAsistencia = function() {
  const nombreElem = document.getElementById('nombreInvitado');
  const pasesElem  = document.getElementById('cantidadPases');
  const nombre = nombreElem?.innerText || '';
  const pases  = pasesElem?.innerText.replace('Pases: ', '') || '';
  const msg    = `Hola, soy ${nombre} y confirmo mi asistencia con ${pases} pases para la fiesta de quince años de Tita.`;
  window.open(`https://api.whatsapp.com/send?phone=50247696714&text=${encodeURIComponent(msg)}`, '_blank');
};

window.elegirAplicacion = function() {
  window.open('https://maps.app.goo.gl/JqZZxY2Dtqj6D4xK7','_blank');
  setTimeout(() => window.open(
    'https://www.waze.com/en/live-map/directions/hotel-barcelo-guatemala-7-avenida-pista-derecha-15-45-zona-9,-guatemala?place=w.176619666.1766065588.2060019',
    '_blank'
  ), 1000);
};

window.elegirAplicacionOtraDirección = function() {
  window.open('https://maps.app.goo.gl/JqZZxY2Dtqj6D4xK7','_blank');
  setTimeout(() => window.open(
    'https://www.waze.com/en/live-map/directions/hotel-barcelo-guatemala-7-avenida-pista-derecha-15-45-zona-9,-guatemala?place=w.176619666.1766065588.2060019',
    '_blank'
  ), 1000);
};

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  window.iniciarContador();
  window.cargarDatosInvitado();  // Sólo carga nombre y pases, no abre el sobre
  window.initFadeInObserver();
  document.getElementById('seal')?.addEventListener('click', window.abrirInvitacion);
});

