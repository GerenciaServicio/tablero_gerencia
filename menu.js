// menu.js

// Esta función carga el archivo menu.html en el div#menu-container
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
  })
  .catch(error => console.error('Error cargando el menú:', error));
