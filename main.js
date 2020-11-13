const input = document.querySelector('input');
const pressed = [];
const button = document.querySelector('.submit');
const secretText = document.querySelector('.secret__code');
let secretCode = '';
const popup = document.querySelector('.popup');
const changeCode = document.querySelector('.change__code');

button.addEventListener('click', () => {
    if (input.value === '') {
        return;
    }
    secretCode = input.value.toLowerCase();
    secretText.innerHTML = `Type the code now to see magic!`;
    input.value = '';
    popup.style.display = "none";
    changeCode.style.display = "block";
});

changeCode.addEventListener('click', () => {
    secretText.innerHTML = "";
    popup.style.display = "block"; 
    changeCode.style.display = "none";
});

window.addEventListener('keyup', (e) => {
    if (secretCode != '') {
      pressed.push(e.key.toLowerCase());
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
      if (pressed.join('').includes(secretCode)) {
          confetti.start();
      } else {
          confetti.stop();
      }   
    }
});