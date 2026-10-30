// Atualiza automaticamente o ano do rodapé.
document.addEventListener('DOMContentLoaded', () => {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Fecha o menu mobile após clicar em uma seção.
  const menu = document.getElementById('menu');
  const linksMenu = document.querySelectorAll('.navbar-nav .nav-link');

  if (menu && window.bootstrap) {
    linksMenu.forEach((link) => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
          window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
      });
    });
  }

  // Valida o formulário e abre o aplicativo de e-mail com a mensagem preenchida.
  const form = document.getElementById('formContato');
  const feedback = document.getElementById('feedbackForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      const assunto = encodeURIComponent(`Contato pelo portfólio — ${nome}`);
      const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`);
      if (feedback) feedback.textContent = 'Abrindo seu aplicativo de e-mail para enviar a mensagem…';

      window.location.href = `mailto:thaynasousasimoes@gmail.com?subject=${assunto}&body=${corpo}`;
    });
  }
});
