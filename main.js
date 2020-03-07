<<<<<<< HEAD
//Get piece position

var position1 = document.getElementById('1')
var position2 = document.getElementById('2')
var position3 = document.getElementById('3')
var position4 = document.getElementById('4')
var position5 = document.getElementById('5')
var position6 = document.getElementById('6')
var position7 = document.getElementById('7')
var position8 = document.getElementById('8')
var position9 = document.getElementById('9')
var position10 = document.getElementById('10')
var position11 = document.getElementById('11')
var position12 = document.getElementById('12')
var position13 = document.getElementById('13')
var position14 = document.getElementById('14')
var position15 = document.getElementById('15')
var position16 = document.getElementById('16')

moveNumber = document.getElementById('moveCounter').innerHTML = 0;

function counter(){
  moveNumber ++
  document.getElementById('moveCounter').innerHTML = moveNumber;
}

window.onload = init;
function init(){
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
}



//Move programing 

function pieceOne(){
 
  

  if (position5.style.visibility == "hidden" ){
    position5.innerHTML = position1.innerHTML
    position5.style.visibility = "visible"
    position1.style.visibility = "hidden"
    counter()
  }
  if (position2.style.visibility == "hidden"){
    position2.innerHTML = position1.innerHTML
    position2.style.visibility = "visible"
    position1.style.visibility = "hidden"
    counter()
  }

}

function pieceTwo(){

  if (position1.style.visibility == "hidden" ){
    position1.innerHTML = position2.innerHTML
    position1.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
  }
  if (position3.style.visibility == "hidden"){
    position3.innerHTML = position2.innerHTML
    position3.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position2.innerHTML
    position6.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
  }

}

function pieceThree(){

  if (position2.style.visibility == "hidden" ){
    position2.innerHTML = position3.innerHTML
    position2.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
  }
  if (position4.style.visibility == "hidden"){
    position4.innerHTML = position3.innerHTML
    position4.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
  }
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position3.innerHTML
    position7.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
  }

}
function pieceFourth(){

  if (position3.style.visibility == "hidden" ){
    position3.innerHTML = position4.innerHTML
    position3.style.visibility = "visible"
    position4.style.visibility = "hidden"
    counter()
  }
  if (position8.style.visibility == "hidden"){
    position8.innerHTML = position4.innerHTML
    position8.style.visibility = "visible"
    position4.style.visibility = "hidden"
    counter()
  }

}
function pieceFive(){

  if (position1.style.visibility == "hidden" ){
    position1.innerHTML = position5.innerHTML
    position1.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position5.innerHTML
    position6.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
  }
  if (position9.style.visibility == "hidden"){
    position9.innerHTML = position5.innerHTML
    position9.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
  }

}
function pieceSix(){

  if (position2.style.visibility == "hidden" ){
    position2.innerHTML = position6.innerHTML
    position2.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
  }
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position6.innerHTML
    position7.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
  }
  if (position5.style.visibility == "hidden"){
    position5.innerHTML = position6.innerHTML
    position5.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position6.innerHTML
    position10.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
  }

}
function pieceSeven(){
  if (position3.style.visibility == "hidden" ){
    position3.innerHTML = position7.innerHTML
    position3.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position7.innerHTML
    position6.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
  }
  if (position8.style.visibility == "hidden"){
    position8.innerHTML = position7.innerHTML
    position8.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position7.innerHTML
    position11.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
  }
}
function pieceEight(){

  if (position4.style.visibility == "hidden" ){
    position4.innerHTML = position8.innerHTML
    position4.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
  }
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position8.innerHTML
    position7.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
  }
  if (position12.style.visibility == "hidden"){
    position12.innerHTML = position8.innerHTML
    position12.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
  }

}
function pieceNine(){

  if (position5.style.visibility == "hidden" ){
    position5.innerHTML = position9.innerHTML
    position5.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position9.innerHTML
    position10.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
  }
  if (position13.style.visibility == "hidden"){
    position13.innerHTML = position9.innerHTML
    position13.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
  }

}
function pieceTen(){
  if (position6.style.visibility == "hidden" ){
    position6.innerHTML = position10.innerHTML
    position6.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
  if (position9.style.visibility == "hidden"){
    position9.innerHTML = position10.innerHTML
    position9.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position10.innerHTML
    position11.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position10.innerHTML
    position14.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
}
function pieceEleven(){
  if (position7.style.visibility == "hidden" ){
    position7.innerHTML = position11.innerHTML
    position7.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
  }
  if (position12.style.visibility == "hidden"){
    position12.innerHTML = position11.innerHTML
    position12.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position11.innerHTML
    position10.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position11.innerHTML
    position15.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
  }
}

function pieceTwelve(){
  if (position8.style.visibility == "hidden" ){
    position8.innerHTML = position12.innerHTML
    position8.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position12.innerHTML
    position11.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
  }
  if (position16.style.visibility == "hidden"){
    position16.innerHTML = position12.innerHTML
    position16.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position10.innerHTML
    position14.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
}
function pieceThirteen(){

  if (position9.style.visibility == "hidden" ){
    position9.innerHTML = position13.innerHTML
    position9.style.visibility = "visible"
    position13.style.visibility = "hidden"
    counter()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position13.innerHTML
    position14.style.visibility = "visible"
    position13.style.visibility = "hidden"
    counter()
  }

}
function pieceFourteen(){
  if (position10.style.visibility == "hidden" ){
    position10.innerHTML = position14.innerHTML
    position10.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
  }
  if (position13.style.visibility == "hidden"){
    position13.innerHTML = position14.innerHTML
    position13.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position14.innerHTML
    position15.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
  }
}
function pieceFifteen(){
  if (position11.style.visibility == "hidden" ){
    position11.innerHTML = position15.innerHTML
    position11.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position15.innerHTML
    position14.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
  }
  if (position16.style.visibility == "hidden"){
    position16.innerHTML = position15.innerHTML
    position16.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
  }
}
function pieceSixteen(){

  if (position12.style.visibility == "hidden" ){
    position12.innerHTML = position16.innerHTML
    position12.style.visibility = "visible"
    position16.style.visibility = "hidden"
    counter()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position16.innerHTML
    position15.style.visibility = "visible"
    position16.style.visibility = "hidden"
    counter()
  }

}

function play(){
  if(moveNumber != 0 ||  document.getElementById("hms").innerHTML != "00:00:00" ){
    reiniciar()
  }
  cronometrar()

  moveNumber = document.getElementById('moveCounter').innerHTML = 0;

  var cantidadNumeros = 15;
var aNumeroAleatorios = []
while(aNumeroAleatorios.length < cantidadNumeros ){
  var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  var existe = false;
  for(var i=0;i<aNumeroAleatorios.length;i++){
	if(aNumeroAleatorios [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    aNumeroAleatorios[aNumeroAleatorios.length] = numeroAleatorio;
  }

}
  
  position1.innerHTML = aNumeroAleatorios[0]
  position2.innerHTML =  aNumeroAleatorios[1]
  position3.innerHTML = aNumeroAleatorios[2]
  position4.innerHTML = aNumeroAleatorios[3]
  position5.innerHTML = aNumeroAleatorios[4]
  position6.innerHTML = aNumeroAleatorios[5]
  position7.innerHTML = aNumeroAleatorios[6]
  position8.innerHTML = aNumeroAleatorios[7]
  position9.innerHTML = aNumeroAleatorios[8]
  position10.innerHTML = aNumeroAleatorios[9]
  position11.innerHTML = aNumeroAleatorios[10]
  position12.innerHTML = aNumeroAleatorios[11]
  position13.innerHTML = aNumeroAleatorios[12]
  position14.innerHTML = aNumeroAleatorios[13]
  position15.innerHTML = aNumeroAleatorios[14]
  position16.innerHTML = "n"
  position16.style.visibility = "hidden"
  position15.style.visibility = "visible"
  position14.style.visibility = "visible"
  position13.style.visibility = "visible"
  position12.style.visibility = "visible"
  position11.style.visibility = "visible"
  position10.style.visibility = "visible"
  position9.style.visibility = "visible"
  position8.style.visibility = "visible"
  position7.style.visibility = "visible"
  position6.style.visibility = "visible"
  position5.style.visibility = "visible"
  position4.style.visibility = "visible"
  position3.style.visibility = "visible"
  position2.style.visibility = "visible"
  position1.style.visibility = "visible"

  

}

function ready(){
  if(position1.innerHTML == 1 && position2.innerHTML == 2 && position3.innerHTML == 3 && position4.innerHTML == 4
    && position5.innerHTML == 5 && position6.innerHTML == 6 && position7.innerHTML == 7 && position8.innerHTML == 8
    && position9.innerHTML == 9 && position10.innerHTML == 10 && position11.innerHTML ==  11 && position12.innerHTML == 12 
    && position13.innerHTML == 13 && position14.innerHTML == 14 && position15.innerHTML == 15 && position16.style.visibility == "hidden"  ){
    alert("You Win, in just " + moveNumber + " move, That's Awesome " )
    document.getElementById("alert").innerHTML = "Felicidades!, logrado resolver este Puzzle en solo " + moveNumber + " en un tiempo de "

    
  }else{
    document.getElementById("alert").innerHTML = "El Puzzle necesita ser completado"
  }
}

function noPossible(){
  if(position1.innerHTML == 1 && position2.innerHTML == 2 && position3.innerHTML == 3 && position4.innerHTML == 4
    && position5.innerHTML == 5 && position6.innerHTML == 6 && position7.innerHTML == 7 && position8.innerHTML == 8
    && position9.innerHTML == 9 && position10.innerHTML == 10 && position11.innerHTML ==  11 && position12.innerHTML == 12 
    && position13.innerHTML == 13 && position14.innerHTML == 15 && position15.innerHTML == 14 && position16.style.visibility == "hidden"  ){
    document.getElementById("alert").innerHTML = "Felicidades! Acabas de demostrar que este puzzle al igual que otros no puede ser resuelto"
    
  }else{
    document.getElementById("alert").innerHTML = "Mantente Intentando, este Puzzle puede ser completado"
  }
}



=======
//Get piece position

var position1 = document.getElementById('1')
var position2 = document.getElementById('2')
var position3 = document.getElementById('3')
var position4 = document.getElementById('4')
var position5 = document.getElementById('5')
var position6 = document.getElementById('6')
var position7 = document.getElementById('7')
var position8 = document.getElementById('8')
var position9 = document.getElementById('9')
var position10 = document.getElementById('10')
var position11 = document.getElementById('11')
var position12 = document.getElementById('12')
var position13 = document.getElementById('13')
var position14 = document.getElementById('14')
var position15 = document.getElementById('15')
var position16 = document.getElementById('16')

moveNumber = document.getElementById('moveCounter').innerHTML = 0;

function counter(){
  moveNumber ++
  document.getElementById('moveCounter').innerHTML = moveNumber;
}

window.onload = init;
function init(){
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
    clearInterval(id);

}
function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
}



//Move programing 

function pieceOne(){
 
  

  if (position5.style.visibility == "hidden" ){
    position5.innerHTML = position1.innerHTML
    position5.style.visibility = "visible"
    position1.style.visibility = "hidden"
    counter()
  }
  if (position2.style.visibility == "hidden"){
    position2.innerHTML = position1.innerHTML
    position2.style.visibility = "visible"
    position1.style.visibility = "hidden"
    counter()
  }

}

function pieceTwo(){

  if (position1.style.visibility == "hidden" ){
    position1.innerHTML = position2.innerHTML
    position1.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
  }
  if (position3.style.visibility == "hidden"){
    position3.innerHTML = position2.innerHTML
    position3.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position2.innerHTML
    position6.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
  }

}

function pieceThree(){

  if (position2.style.visibility == "hidden" ){
    position2.innerHTML = position3.innerHTML
    position2.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
  }
  if (position4.style.visibility == "hidden"){
    position4.innerHTML = position3.innerHTML
    position4.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
  }
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position3.innerHTML
    position7.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
  }

}
function pieceFourth(){

  if (position3.style.visibility == "hidden" ){
    position3.innerHTML = position4.innerHTML
    position3.style.visibility = "visible"
    position4.style.visibility = "hidden"
    counter()
  }
  if (position8.style.visibility == "hidden"){
    position8.innerHTML = position4.innerHTML
    position8.style.visibility = "visible"
    position4.style.visibility = "hidden"
    counter()
  }

}
function pieceFive(){

  if (position1.style.visibility == "hidden" ){
    position1.innerHTML = position5.innerHTML
    position1.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position5.innerHTML
    position6.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
  }
  if (position9.style.visibility == "hidden"){
    position9.innerHTML = position5.innerHTML
    position9.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
  }

}
function pieceSix(){

  if (position2.style.visibility == "hidden" ){
    position2.innerHTML = position6.innerHTML
    position2.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
  }
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position6.innerHTML
    position7.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
  }
  if (position5.style.visibility == "hidden"){
    position5.innerHTML = position6.innerHTML
    position5.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position6.innerHTML
    position10.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
  }

}
function pieceSeven(){
  if (position3.style.visibility == "hidden" ){
    position3.innerHTML = position7.innerHTML
    position3.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position7.innerHTML
    position6.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
  }
  if (position8.style.visibility == "hidden"){
    position8.innerHTML = position7.innerHTML
    position8.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position7.innerHTML
    position11.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
  }
}
function pieceEight(){

  if (position4.style.visibility == "hidden" ){
    position4.innerHTML = position8.innerHTML
    position4.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
  }
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position8.innerHTML
    position7.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
  }
  if (position12.style.visibility == "hidden"){
    position12.innerHTML = position8.innerHTML
    position12.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
  }

}
function pieceNine(){

  if (position5.style.visibility == "hidden" ){
    position5.innerHTML = position9.innerHTML
    position5.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position9.innerHTML
    position10.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
  }
  if (position13.style.visibility == "hidden"){
    position13.innerHTML = position9.innerHTML
    position13.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
  }

}
function pieceTen(){
  if (position6.style.visibility == "hidden" ){
    position6.innerHTML = position10.innerHTML
    position6.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
  if (position9.style.visibility == "hidden"){
    position9.innerHTML = position10.innerHTML
    position9.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position10.innerHTML
    position11.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position10.innerHTML
    position14.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
}
function pieceEleven(){
  if (position7.style.visibility == "hidden" ){
    position7.innerHTML = position11.innerHTML
    position7.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
  }
  if (position12.style.visibility == "hidden"){
    position12.innerHTML = position11.innerHTML
    position12.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position11.innerHTML
    position10.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position11.innerHTML
    position15.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
  }
}

function pieceTwelve(){
  if (position8.style.visibility == "hidden" ){
    position8.innerHTML = position12.innerHTML
    position8.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position12.innerHTML
    position11.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
  }
  if (position16.style.visibility == "hidden"){
    position16.innerHTML = position12.innerHTML
    position16.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position10.innerHTML
    position14.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
  }
}
function pieceThirteen(){

  if (position9.style.visibility == "hidden" ){
    position9.innerHTML = position13.innerHTML
    position9.style.visibility = "visible"
    position13.style.visibility = "hidden"
    counter()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position13.innerHTML
    position14.style.visibility = "visible"
    position13.style.visibility = "hidden"
    counter()
  }

}
function pieceFourteen(){
  if (position10.style.visibility == "hidden" ){
    position10.innerHTML = position14.innerHTML
    position10.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
  }
  if (position13.style.visibility == "hidden"){
    position13.innerHTML = position14.innerHTML
    position13.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position14.innerHTML
    position15.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
  }
}
function pieceFifteen(){
  if (position11.style.visibility == "hidden" ){
    position11.innerHTML = position15.innerHTML
    position11.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position15.innerHTML
    position14.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
  }
  if (position16.style.visibility == "hidden"){
    position16.innerHTML = position15.innerHTML
    position16.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
  }
}
function pieceSixteen(){

  if (position12.style.visibility == "hidden" ){
    position12.innerHTML = position16.innerHTML
    position12.style.visibility = "visible"
    position16.style.visibility = "hidden"
    counter()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position16.innerHTML
    position15.style.visibility = "visible"
    position16.style.visibility = "hidden"
    counter()
  }

}

function play(){
  if(moveNumber != 0 ||  document.getElementById("hms").innerHTML != "00:00:00" ){
    reiniciar()
  }
  cronometrar()

  moveNumber = document.getElementById('moveCounter').innerHTML = 0;

  var cantidadNumeros = 15;
var aNumeroAleatorios = []
while(aNumeroAleatorios.length < cantidadNumeros ){
  var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  var existe = false;
  for(var i=0;i<aNumeroAleatorios.length;i++){
	if(aNumeroAleatorios [i] == numeroAleatorio){
        existe = true;
        break;
    }
  }
  if(!existe){
    aNumeroAleatorios[aNumeroAleatorios.length] = numeroAleatorio;
  }

}
  
  position1.innerHTML = aNumeroAleatorios[0]
  position2.innerHTML =  aNumeroAleatorios[1]
  position3.innerHTML = aNumeroAleatorios[2]
  position4.innerHTML = aNumeroAleatorios[3]
  position5.innerHTML = aNumeroAleatorios[4]
  position6.innerHTML = aNumeroAleatorios[5]
  position7.innerHTML = aNumeroAleatorios[6]
  position8.innerHTML = aNumeroAleatorios[7]
  position9.innerHTML = aNumeroAleatorios[8]
  position10.innerHTML = aNumeroAleatorios[9]
  position11.innerHTML = aNumeroAleatorios[10]
  position12.innerHTML = aNumeroAleatorios[11]
  position13.innerHTML = aNumeroAleatorios[12]
  position14.innerHTML = aNumeroAleatorios[13]
  position15.innerHTML = aNumeroAleatorios[14]
  position16.innerHTML = "n"
  position16.style.visibility = "hidden"
  position15.style.visibility = "visible"
  position14.style.visibility = "visible"
  position13.style.visibility = "visible"
  position12.style.visibility = "visible"
  position11.style.visibility = "visible"
  position10.style.visibility = "visible"
  position9.style.visibility = "visible"
  position8.style.visibility = "visible"
  position7.style.visibility = "visible"
  position6.style.visibility = "visible"
  position5.style.visibility = "visible"
  position4.style.visibility = "visible"
  position3.style.visibility = "visible"
  position2.style.visibility = "visible"
  position1.style.visibility = "visible"

  

}

function ready(){
  if(position1.innerHTML == 1 && position2.innerHTML == 2 && position3.innerHTML == 3 && position4.innerHTML == 4
    && position5.innerHTML == 5 && position6.innerHTML == 6 && position7.innerHTML == 7 && position8.innerHTML == 8
    && position9.innerHTML == 9 && position10.innerHTML == 10 && position11.innerHTML ==  11 && position12.innerHTML == 12 
    && position13.innerHTML == 13 && position14.innerHTML == 14 && position15.innerHTML == 15 && position16.style.visibility == "hidden"  ){
    alert("You Win, in just " + moveNumber + " move, That's Awesome " )
    document.getElementById("alert").innerHTML = "Felicidades!, logrado resolver este Puzzle en solo " + moveNumber + " en un tiempo de "

    
  }else{
    document.getElementById("alert").innerHTML = "El Puzzle necesita ser completado"
  }
}

function noPossible(){
  if(position1.innerHTML == 1 && position2.innerHTML == 2 && position3.innerHTML == 3 && position4.innerHTML == 4
    && position5.innerHTML == 5 && position6.innerHTML == 6 && position7.innerHTML == 7 && position8.innerHTML == 8
    && position9.innerHTML == 9 && position10.innerHTML == 10 && position11.innerHTML ==  11 && position12.innerHTML == 12 
    && position13.innerHTML == 13 && position14.innerHTML == 15 && position15.innerHTML == 14 && position16.style.visibility == "hidden"  ){
    document.getElementById("alert").innerHTML = "Felicidades! Acabas de demostrar que este puzzle al igual que otros no puede ser resuelto"
    
  }else{
    document.getElementById("alert").innerHTML = "Mantente Intentando, este Puzzle puede ser completado"
  }
}



>>>>>>> 353b7f432b080b9688cb7bcfb94d12b939c45f9b
