console.log("el app js esta corriendo");

//var template = <p> Esto es JSX desde app.js</p>;
var template = React.createElement(
    "h1",
    {id : "someid"},
    "Algo nuevo"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);