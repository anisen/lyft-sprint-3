
/*validar NUMERO */
var numero=document.getElementById("primer-boton");

numero.addEventListener("click", function(){
  var num=document.getElementById("inp-form").value;
  
  if(num.length!=9){
    alert("Ingrese numero de 9 digitos");
  }else{
    alert("A sido registrado correctamente");
  }
});
/*validacion de coordenadas*/

var start=document.getElementById("botonauto");

start.addEventListener('click', function(){
  var x = document.getElementById("x-auto").value;
  var y = document.getElementById("y-auto").value;
  x=parseInt(x);
  y=parseInt(y);

  if (isNaN(x)==true||isNaN(y)==true){
    alert("Ingresar números");
  }
  else if(x>10){
    alert ("Para X (número entre el 1 al 10)");
  }else if(y>6){
    alert ("Para Y (número entre 1 al 6)");
  }else{
    
    return true;
  }
});

/* tablero*/
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "#FAA";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
    break;
    case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
    y = y + movimiento;
    break;
    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
    x = x - movimiento;
    break;
    case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;
  }
}