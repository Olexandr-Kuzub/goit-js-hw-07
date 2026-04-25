const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output')

textInput.addEventListener('input', (event) => {
  const trimInput = event.currentTarget.value.trim();

  if (trimInput === '') {
    textOutput.textContent = 'Anonymous';
  } else {
    textOutput.textContent = trimInput;
  }
});