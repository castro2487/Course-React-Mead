"use strict";

console.log("el app js esta corriendo");

var template = React.createElement(
  "h1",
  null,
  " App Indecision "
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
