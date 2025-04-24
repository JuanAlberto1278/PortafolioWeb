 // Menu móvil
 function toggleMenu() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("show");
  }

  // Scroll activo en nav mejorado
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    const buffer = 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - buffer;
      const sectionHeight = section.offsetHeight;
      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  

  // Formulario de contacto
  const form = document.getElementById("contactForm");
  const mensajeEnviado = document.getElementById("mensaje-enviado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute("action");

    fetch(action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        mensajeEnviado.style.display = "block";
        form.reset();
        setTimeout(() => {
          mensajeEnviado.style.display = "none";
        }, 4000);
      } else {
        alert("Hubo un problema al enviar el mensaje. Intenta de nuevo.");
      }
    });
  });