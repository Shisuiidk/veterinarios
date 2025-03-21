// Función para animar un botón de registro
function animarBotonRegistro() {
    const boton = document.querySelector('#botonRegistro');

    if (!boton) {
        console.error('No se encontró un botón con el ID "botonRegistro".');
        return;
    }

    boton.addEventListener('mouseover', () => {
        boton.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        boton.style.transform = 'scale(1.1)';
        boton.style.backgroundColor = '#4CAF50'; // Cambia a un color más llamativo
    });

    boton.addEventListener('mouseout', () => {
        boton.style.transform = 'scale(1)';
        boton.style.backgroundColor = ''; // Vuelve al color original
    });

    boton.addEventListener('click', () => {
        boton.style.transition = 'transform 0.1s ease';
        boton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            boton.style.transform = 'scale(1)';
        }, 100);
    });
}

// Llama a la función después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', animarBotonRegistro);