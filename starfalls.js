// starfall.js

(() => {
    // Cantidad total de estrellas que queremos “activas” a la vez
    const NUM_ESTRELLAS = 50;
  
    // Rango de tamaño de cada estrella (en px)
    const MIN_SIZE = 2;
    const MAX_SIZE = 6;
  
    // Duración mínima/máxima del recorrido vertical (en segundos)
    const MIN_DURATION = 6;
    const MAX_DURATION = 12;
  
    // Referencia al contenedor
    const container = document.getElementById("star-container");
    if (!container) return;
  
    // Función auxiliar: genera un número aleatorio entre [min, max]
    function aleatorio(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    // Crea una sola estrella con parámetros aleatorios
    function crearEstrella() {
      const star = document.createElement("div");
      star.classList.add("star");
  
      // Elegir tamaño aleatorio
      const size = aleatorio(MIN_SIZE, MAX_SIZE);
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
  
      // Posición horizontal inicial (entre 0% y 100% del ancho)
      const posX = aleatorio(0, window.innerWidth);
      star.style.left = `${posX}px`;
  
      // Asignar una velocidad/​duración aleatoria para la animación
      const duracion = aleatorio(MIN_DURATION, MAX_DURATION);
      star.style.animationDuration = `${duracion}s`;
  
      // Asignar un retraso aleatorio para que no caigan todas simultáneamente
      const delay = aleatorio(0, MAX_DURATION);
      star.style.animationDelay = `${delay}s`;
  
      // Cuando termine su animación, eliminamos el nodo y creamos uno nuevo
      star.addEventListener("animationend", () => {
        star.remove();
        crearEstrella(); // Para mantener siempre la misma cantidad en pantalla
      });
  
      container.appendChild(star);
    }
  
    // Inicializamos un bucle para crear varias estrellas
    for (let i = 0; i < NUM_ESTRELLAS; i++) {
      crearEstrella();
    }
  
    // Opcional: si quieres que en redimensionar la ventana se ajusten,
    // podrías recrear las estrellas limpiando el contenedor y volviendo a llamar a crearEstrella(),
    // pero a efectos sencillos no es necesario.
  })();
  