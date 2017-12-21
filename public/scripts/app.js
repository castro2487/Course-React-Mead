"use strict";

console.log("el app js esta corriendo");

var template = React.createElement(
  "p",
  null,
  " Esto es JSX desde app.js"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
