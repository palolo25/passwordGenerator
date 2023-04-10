const lengthRange = document.getElementById('length');
const lengthValue = document.getElementById('length-value');

lengthRange.addEventListener('input', () => {
  lengthValue.textContent = lengthRange.value;
});