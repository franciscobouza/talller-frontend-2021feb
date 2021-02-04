function mostrarDuplicado(num) {
  console.log(num * 2);
}

function btnClick() {
  const texto = document.querySelector('#txtNum').value;
  console.log(texto);
}

function mostrarElementos() {
  const vector = [10, 20, 27, 9, 3, 1891, 5, 3];
  vector.forEach(function (elem) {
    console.log(elem);
  });
}
