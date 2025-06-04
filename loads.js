// loads.js

window.guests = [
  { id: "1", name: "Macarena & Rogelio", passes: 2 },
  // … resto de invitados
];

document.addEventListener("DOMContentLoaded", () => {
  const params  = new URLSearchParams(window.location.search);
  const guestId = params.get("id");
  const guest   = window.guests.find(g => g.id === guestId);

  if (guest) {
    const invitText = guest.passes > 1
      ? `¡${guest.name}, están invitados!`
      : `¡${guest.name}, estás invitado!`;

    document.getElementById("nombreInvitado").textContent = invitText;
    document.getElementById("cantidadPases").textContent =
      `${guest.passes} ${guest.passes === 1 ? "pase" : "pases"}`;

    // Ya no abrimos el sobre automáticamente:
    // if (typeof window.abrirInvitacion === "function") window.abrirInvitacion();
  } else {
    const invitacion = document.getElementById("invitacion");
    if (invitacion) invitacion.style.display = "none";
  }
});

