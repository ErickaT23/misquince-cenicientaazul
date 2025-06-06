// loads.js

window.guests = [
  { id: "1", name: "Abuelita Dorita y Josy", passes: 2, gender: "mixto" },
  { id: "2", name: "Tios Estela y Godo", passes: 2, gender: "mixto" },
  { id: "3", name: "Henry", passes: 1, gender: "masculino" },
  { id: "4", name: "Yenifer y Berner", passes: 5, gender: "mixto" },
  { id: "5", name: "Cintia", passes: 1, gender: "femenino" },
  { id: "6", name: "Erwin", passes: 1, gender: "masculino" },
  { id: "7", name: "Gaby y Edy", passes: 4, gender: "mixto" },
  { id: "8", name: "Padrinos Diana y Hugo", passes: 4, gender: "mixto" },
  { id: "9", name: "Sandra y Rafa", passes: 3, gender: "mixto" },
  { id: "10", name: "Tía Gloria y tío Arioli", passes: 2, gender: "mixto" },
  { id: "11", name: "Sharon Alva", passes: 1, gender: "femenino" },
  { id: "12", name: "Ahirys Alva", passes: 1, gender: "femenino" },
  { id: "13", name: "Edward Alva", passes: 1, gender: "masculino" },
  { id: "14", name: "Emanuel y Jeany", passes: 5, gender: "mixto" },
  { id: "15", name: "Emma Gonzalez", passes: 1, gender: "femenino" },
  { id: "16", name: "Felipe González", passes: 2, gender: "masculino" },
  { id: "17", name: "Anita y Airo", passes: 2, gender: "mixto" },
  { id: "18", name: "Alejandra y Diego", passes: 3, gender: "mixto" },
  { id: "19", name: "Dulce y Ada", passes: 5, gender: "femenino" },
  { id: "20", name: "Susana y Jorge Luis", passes: 5, gender: "mixto" },
  { id: "21", name: "Alma y Jorge", passes: 3, gender: "mixto" },
  { id: "22", name: "Gloria y Marlon", passes: 2, gender: "mixto" },
  { id: "23", name: "Madelyn y Lenyn", passes: 2, gender: "mixto" },
  { id: "24", name: "Carmen y Luis", passes: 5, gender: "mixto" },
  { id: "25", name: "José Carrillo", passes: 2, gender: "masculino" },
  { id: "26", name: "Astrid y Hector", passes: 2, gender: "mixto" },
  { id: "27", name: "Emilio y Heivy", passes: 2, gender: "mixto" },
  { id: "28", name: "Danilo y Sarina", passes: 5, gender: "mixto" },
  { id: "29", name: "Lety Barrios", passes: 1, gender: "femenino" },
  { id: "30", name: "Silvia Mariana y Luisito", passes: 2, gender: "mixto" },
  { id: "31", name: "Nelly Pinto", passes: 1, gender: "femenino" },
  { id: "32", name: "Mirna y Oswaldo", passes: 2, gender: "mixto" },
  { id: "33", name: "Abidan Escobar", passes: 2, gender: "masculino" },
  { id: "34", name: "Noemi Lucero", passes: 1, gender: "femenino" },
  { id: "35", name: "Bety Velasquez", passes: 1, gender: "femenino" },
  { id: "36", name: "María José y Pablo", passes: 2, gender: "mixto" },
  { id: "37", name: "Diego Poou", passes: 1, gender: "masculino" },
  { id: "38", name: "Robin Monzon", passes: 1, gender: "masculino" },
  { id: "39", name: "Joshy y Mane", passes: 2, gender: "mixto" },
  { id: "40", name: "Yoselyn y Manuel", passes: 2, gender: "mixto" },
  { id: "41", name: "Rogelio y esposa", passes: 2, gender: "mixto" },
  { id: "42", name: "Dayana y Soraida", passes: 2, gender: "femenino" },
  { id: "43", name: "Rebeca y Claudia", passes: 3, gender: "femenino" },
  { id: "44", name: "Yanisa y Mabel", passes: 2, gender: "femenino" },
  { id: "45", name: "Majo", passes: 1, gender: "femenino" },
  { id: "46", name: "Daniela Azurdia", passes: 1, gender: "femenino" },
  { id: "47", name: "Paula", passes: 1, gender: "femenino" },
  { id: "48", name: "Made", passes: 1, gender: "femenino" },
  { id: "49", name: "Adi", passes: 1, gender: "femenino" },
  { id: "50", name: "Cinthia Carrillo", passes: 1, gender: "femenino" },
  { id: "51", name: "Heidy", passes: 1, gender: "femenino" },
  { id: "52", name: "Anthony y Daniela", passes: 2, gender: "mixto" },
  { id: "53", name: "José y Guissela", passes: 4, gender: "mixto" },
  { id: "54", name: "Isabella y Hansi", passes: 3, gender: "mixto" },
  { id: "55", name: "Ian", passes: 1, gender: "masculino" },
  { id: "56", name: "Fabian", passes: 1, gender: "masculino" },
  { id: "57", name: "Dayana Portillo", passes: 1, gender: "femenino" },
  { id: "58", name: "Valery Cabrera", passes: 1, gender: "femenino" },
  { id: "59", name: "Bryan Flores", passes: 1, gender: "masculino" },
  { id: "60", name: "Ximena", passes: 1, gender: "femenino" },
  { id: "61", name: "Andrea y Vivian", passes: 3, gender: "femenino" },
  { id: "62", name: "Elizabeth", passes: 1, gender: "femenino" },
  { id: "63", name: "Andrea Ovalle", passes: 1, gender: "femenino" },
  { id: "64", name: "Luis y Nico", passes: 2, gender: "mixto" },
  { id: "65", name: "Eleazar", passes: 1, gender: "masculino" },
  { id: "66", name: "Steve Cardona", passes: 1, gender: "masculino" },
  { id: "67", name: "Andre Fuentes", passes: 1, gender: "masculino" },
  { id: "68", name: "Luka", passes: 1, gender: "masculino" },
  { id: "69", name: "Katy", passes: 1, gender: "femenino" },
  { id: "70", name: "Adriana García", passes: 1, gender: "femenino" },
  { id: "71", name: "Adriana Zabala", passes: 1, gender: "femenino" },
  { id: "72", name: "Edy y Cristi", passes: 2, gender: "mixto" },
  { id: "73", name: "Breny Gómez", passes: 1, gender: "femenino" },
  { id: "74", name: "Byron Gómez", passes: 1, gender: "masculino" },
  { id: "75", name: "Edwin Gómez", passes: 1, gender: "masculino" },
  { id: "76", name: "Glenda y Carlos", passes: 2, gender: "mixto" },
  { id: "77", name: "Jacqueline y Diego", passes: 2, gender: "mixto" },
  { id: "78", name: "Amalita y Felipe", passes: 2, gender: "mixto" },
  { id: "79", name: "Cristian Garzona", passes: 1, gender: "masculino" },
  { id: "80", name: "Tio Otto", passes: 3, gender: "masculino" },
  { id: "81", name: "Nery Tio", passes: 2, gender: "masculino" },
  { id: "82", name: "Samara, Gonzálo y tia Jeaneth", passes: 3, gender: "mixto" },
  { id: "83", name: "Tía Dina, Shey y Pichi", passes: 4, gender: "mixto" },
  { id: "84", name: "Tio Arturo", passes: 1, gender: "masculino" },
  { id: "85", name: "Belen", passes: 1, gender: "femenino" },
  { id: "86", name: "Rebeca", passes: 1, gender: "femenino" },
  { id: "87", name: "Rashel", passes: 1, gender: "femenino" },
  { id: "88", name: "Mynor", passes: 1, gender: "masculino" },
  { id: "89", name: "Henry y esposa", passes: 2, gender: "mixto" },
  { id: "90", name: "José y Familia", passes: 4, gender: "mixto" },
  { id: "91", name: "Viany Escobar", passes: 2, gender: "femenino" },
  { id: "92", name: "Danilo Barrios", passes: 1, gender: "masculino" },
  { id: "93", name: "Irma y Luis", passes: 2, gender: "mixto" },
  { id: "94", name: "Yuli, Adrianita y Héctor", passes: 3, gender: "mixto" },
  { id: "95", name: "Andrea", passes: 1, gender: "femenino" },
  { id: "96", name: "Lorena y Adrian", passes: 2, gender: "mixto" },
  { id: "97", name: "Evelyn y Marco Tulio", passes: 2, gender: "mixto" },
  { id: "98", name: "Carolina y Alex", passes: 2, gender: "mixto" },
  { id: "99", name: "Marisol y Oswaldo", passes: 2, gender: "mixto" },
  { id: "100", name: "Tio Leonel y Domy", passes: 2, gender: "mixto" },
  { id: "101", name: "Fernando Sarazua", passes: 1, gender: "masculino" }
];


document.addEventListener("DOMContentLoaded", () => {
  const params  = new URLSearchParams(window.location.search);
  const guestId = params.get("id");
  const guest   = window.guests.find(g => g.id === guestId);

  if (guest) {
    let invitText = "";

    if (guest.passes === 1) {
      invitText = guest.gender === "femenino"
        ? `¡${guest.name}, está invitada!`
        : `¡${guest.name}, está invitado!`;
    } else {
      if (guest.gender === "femenino") {
        invitText = `¡${guest.name}, están invitadas!`;
      } else if (guest.gender === "masculino" || guest.gender === "mixto") {
        invitText = `¡${guest.name}, están invitados!`;
      }
    }

    document.getElementById("nombreInvitado").textContent = invitText;
    document.getElementById("cantidadPases").textContent =
      `${guest.passes} ${guest.passes === 1 ? "pase" : "pases"}`;
  } else {
    const invitacion = document.getElementById("invitacion");
    if (invitacion) invitacion.style.display = "none";
  }
});


