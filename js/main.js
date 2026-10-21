document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  // Cierra el menú móvil después de seleccionar una sección.
  const menu = document.getElementById("menuPrincipal");
  if (menu && window.bootstrap) {
    menu.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
          const collapse = window.bootstrap.Collapse.getInstance(menu);
          if (collapse) collapse.hide();
        }
      });
    });
  }
});
