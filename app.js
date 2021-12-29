// creamos un counter aumentar su valor
let counter = 0;
// seleccionamos el div para insertar el counter
let number = document.querySelector('#number');

setInterval(() => {
  if (counter === 65) {
    clearInterval();
  } else {
    counter++;
    number.innerHTML = counter + '%';
  }
}, 30);
