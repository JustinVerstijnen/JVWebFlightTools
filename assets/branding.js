document.querySelectorAll('[data-copyright-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
