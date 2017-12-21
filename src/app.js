console.log("el app js esta corriendo");

var template = <p> Esto es JSX desde app.js</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);