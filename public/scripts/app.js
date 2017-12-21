'use strict';

console.log("el app js esta corriendo");

var app = {
  titulo: 'App Indecision',
  subtitulo: 'Esta es una info X'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    app.titulo,
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' ',
    app.subtitulo,
    ' '
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    ),
    React.createElement(
      'li',
      null,
      'Item 3'
    )
  )
);

var usuario = {
  nombre: 'Omar',
  edad: 30,
  ubicacion: 'Buenos Aires'
};

function encontrarUbicacion(ubicacion) {
  if (ubicacion) {
    return ubicacion;
  } else {
    return 'desconocido';
  }
}

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    usuario.nombre,
    ' '
  ),
  React.createElement(
    'p',
    null,
    'Edad: ',
    usuario.edad
  ),
  React.createElement(
    'p',
    null,
    'Ubicacion: ',
    encontrarUbicacion(usuario.ubicacion)
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
