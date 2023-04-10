const copyButton = document.getElementById('copy-password');
const copyMessage = document.getElementById('copy-message');
const loader = document.querySelector('.loader');
const content = document.getElementById('content');

copyButton.addEventListener('click', () => {
  const password = document.querySelector('p').textContent;
  navigator.clipboard.writeText(password);
  copyMessage.style.display = 'block';
  setTimeout(() => {
    copyMessage.style.display = 'none';
  }, 3000);
});

// Simula una carga de 6 segundos antes de mostrar el contenido
setTimeout(() => {
  loader.style.display = 'none';
  content.style.display = 'block';
}, 4000);

const message = document.getElementById('generating-message');
message.textContent = 'Generando contraseña...';