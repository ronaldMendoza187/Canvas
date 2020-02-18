var texto = document.getElementById("texto_lineas");
var button = document.getElementById("boton");
boton.addEventListener("click", clickAlert);

var c = document.getElementById("cuadrado");
// "getElementById" nos sirve para traer un codigo a traves de un id de html a JS
var lienzo = c.getContext("2d");
var ancho = c.width;

function clickAlert()
{
  var lineas = parseInt(texto.value);
  //Esta variable coloca el limite de lineas
  var l = 0;
  //Esta variable nos permite contar desde cero
  var yi, xf;
  var espacio = ancho / lineas;

  while(l < lineas)
  //"while" es para ejecutar un bloque de codigo mientras la condicion se cumpla
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("blue", 0, yi, xf, 299);
    dibujarLinea("red", 299, yi, xf, 0);
    l = l + 1;
    //El bloque de codigo tiene que sumar la L para que "while" tenga su final - Tambien se puede colocar "l++"
  }

  dibujarLinea("blue", 1, 1, 1, 299);
  dibujarLinea("blue", 1, 299, 299, 299);
  dibujarLinea("red", 299, 299, 299, 1);
  dibujarLinea("red", 1, 1, 299, 1);
}

function dibujarLinea (color, x_incial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_incial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

math.ceil(3.78);
math.floor(3.78);
