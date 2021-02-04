const obtenerClima = () => {
  const pais = document.querySelector('#txtPais').value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=41e20f5733644f0e8c44551f50b56b40&units=metric&lang=es`
  )
    .then(res => res.json())
    .then(({ name, main: { temp }, weather: [{ description }] }) => {
      document.querySelector('#headerClima').innerHTML = `Clima en ${name}`;
      document.querySelector('#temp').innerHTML = `${temp} (°||º) C`;
      document.querySelector('#clima').innerHTML = description;
    });
};
