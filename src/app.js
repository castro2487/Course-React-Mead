console.log("el app js esta corriendo");

var app = {
  titulo: 'App Indecision',
  subtitulo: 'Esta es una info X'
}

var template =( 
<div>
   <h1> {app.titulo} </h1>
   <p> {app.subtitulo} </p>
   <ol>
     <li>Item 1</li>
     <li>Item 2</li>
     <li>Item 3</li>
   </ol>
</div>
);

var usuario = {
  nombre: 'Omar',
  edad: 30,
  ubicacion: 'Buenos Aires'
};


function encontrarUbicacion(ubicacion){
  if (ubicacion) {
    return ubicacion;
  } else {
    return 'desconocido';
  }
}

var template2 = (
  <div>
    <h1> {usuario.nombre} </h1>
    <p>Edad: {usuario.edad}</p>
    <p>Ubicacion: {encontrarUbicacion(usuario.ubicacion)}</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);