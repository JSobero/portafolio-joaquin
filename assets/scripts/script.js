/*MOUSE MOVIMIENTO*/
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"});
});

/*CERRAR Y ABRIR MENÚ*/
document.addEventListener("DOMContentLoaded", function() {
    const semicircle = document.getElementById("circle");
    const closeMenuButton = document.getElementById("menu-button");
    const selectMenuButtons = document.getElementById("select-menu");

    closeMenuButton.addEventListener("click", function() {
        semicircle.style.animation = "slideOut 0.5s forwards"; // Aplica la animación de salida
        setTimeout(function() {
            semicircle.style.display = "none"; // Oculta el semicírculo después de la animación
        }, 500); // Espera 500ms antes de ocultar el semicírculo
        selectMenuButtons.style.display = "flex";
    });

    selectMenuButtons.addEventListener("click", function(){
        semicircle.style.animation = "slideIn 0.5s forwards"; // Aplica la animación de entrada
        semicircle.style.display = "flex"; // Muestra el semicírculo
        selectMenuButtons.style.display = "none";
    });
});

/*AGRANDAR Y REDUCIR IMAGEN*/
document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main-image");
    mainImage.style.transition = 'transform 2s ease'; // Establecemos la transición en el estilo de la imagen

    // Función para cambiar la escala de la imagen
    function toggleScale() {
        if (mainImage.style.transform === 'scale(1.1)') {
            mainImage.style.transform = 'scale(1)'; // Cambia la escala de la imagen a 1 (zoom out)
        } else {
            mainImage.style.transform = 'scale(1.1)'; // Cambia la escala de la imagen a 1.1 (zoom in)
        }
    }

    // Iniciamos el bucle para alternar la escala de la imagen
    setInterval(toggleScale, 2000); // Alterna cada 2 segundos (2000 milisegundos)
});

/*PARPADEO*/
var parpadeo = document.getElementById('parpadeo');

function toggleParpadeo() {
  if (parpadeo.style.visibility === 'hidden') {
    parpadeo.style.visibility = 'visible';
  } else {
    parpadeo.style.visibility = 'hidden';
  }
}

setInterval(toggleParpadeo, 500);