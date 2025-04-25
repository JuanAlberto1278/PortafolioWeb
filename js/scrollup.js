document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById("scrollToTop");
  
    // Mostrar el botón cuando se haya hecho scroll hacia abajo
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {  // Si se ha hecho scroll 300px hacia abajo
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    });
  
    // Al hacer clic en el botón, hacer scroll hacia arriba
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });  // Desplazamiento suave hasta arriba
    });
  });
  