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

var moveNumber = document.getElementById("moveCounter").innerHTML = 0;
 

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
    position1.innerHTML = 0
    counter()
    Verification()
  }
  if (position2.style.visibility == "hidden"){
    position2.innerHTML = position1.innerHTML
    position2.style.visibility = "visible"
    position1.style.visibility = "hidden"
    counter()
    Verification()
  }

}

function pieceTwo(){


  if (position1.style.visibility == "hidden" ){
    position1.innerHTML = position2.innerHTML
    position1.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position3.style.visibility == "hidden"){
    position3.innerHTML = position2.innerHTML
    position3.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position2.innerHTML
    position6.style.visibility = "visible"
    position2.style.visibility = "hidden"
    counter()
    Verification()
  }

}

function pieceThree(){


  if (position2.style.visibility == "hidden" ){
    position2.innerHTML = position3.innerHTML
    position2.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
    Verification()

  }
  if (position4.style.visibility == "hidden"){
    position4.innerHTML = position3.innerHTML
    position4.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
    Verification()
}
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position3.innerHTML
    position7.style.visibility = "visible"
    position3.style.visibility = "hidden"
    counter()
    Verification()
  }

}
function pieceFourth(){

  if (position3.style.visibility == "hidden" ){
    position3.innerHTML = position4.innerHTML
    position3.style.visibility = "visible"
    position4.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position8.style.visibility == "hidden"){
    position8.innerHTML = position4.innerHTML
    position8.style.visibility = "visible"
    position4.style.visibility = "hidden"
    counter()
    Verification()
  }

}
function pieceFive(){

 

  if (position1.style.visibility == "hidden" ){
    position1.innerHTML = position5.innerHTML
    position1.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
    Verification()

  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position5.innerHTML
    position6.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position9.style.visibility == "hidden"){
    position9.innerHTML = position5.innerHTML
    position9.style.visibility = "visible"
    position5.style.visibility = "hidden"
    counter()
    Verification()
  }

}
function pieceSix(){
 

  if (position2.style.visibility == "hidden" ){
    position2.innerHTML = position6.innerHTML
    position2.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position6.innerHTML
    position7.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position5.style.visibility == "hidden"){
    position5.innerHTML = position6.innerHTML
    position5.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position6.innerHTML
    position10.style.visibility = "visible"
    position6.style.visibility = "hidden"
    counter()
    Verification()
  }

}
function pieceSeven(){
  if (position3.style.visibility == "hidden" ){
    position3.innerHTML = position7.innerHTML
    position3.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position6.style.visibility == "hidden"){
    position6.innerHTML = position7.innerHTML
    position6.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position8.style.visibility == "hidden"){
    position8.innerHTML = position7.innerHTML
    position8.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position7.innerHTML
    position11.style.visibility = "visible"
    position7.style.visibility = "hidden"
    counter()
    Verification()
  }
}
function pieceEight(){

  if (position4.style.visibility == "hidden" ){
    position4.innerHTML = position8.innerHTML
    position4.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position7.style.visibility == "hidden"){
    position7.innerHTML = position8.innerHTML
    position7.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position12.style.visibility == "hidden"){
    position12.innerHTML = position8.innerHTML
    position12.style.visibility = "visible"
    position8.style.visibility = "hidden"
    counter()
    Verification()
  }

}
function pieceNine(){

  if (position5.style.visibility == "hidden" ){
    position5.innerHTML = position9.innerHTML
    position5.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position9.innerHTML
    position10.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position13.style.visibility == "hidden"){
    position13.innerHTML = position9.innerHTML
    position13.style.visibility = "visible"
    position9.style.visibility = "hidden"
    counter()
    Verification()
  }

}
function pieceTen(){
  if (position6.style.visibility == "hidden" ){
    position6.innerHTML = position10.innerHTML
    position6.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
    Verification()
    
  }
  if (position9.style.visibility == "hidden"){
    position9.innerHTML = position10.innerHTML
    position9.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position10.innerHTML
    position11.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position10.innerHTML
    position14.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
    Verification()
  }
}
function pieceEleven(){
  if (position7.style.visibility == "hidden" ){
    position7.innerHTML = position11.innerHTML
    position7.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position12.style.visibility == "hidden"){
    position12.innerHTML = position11.innerHTML
    position12.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position10.style.visibility == "hidden"){
    position10.innerHTML = position11.innerHTML
    position10.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position11.innerHTML
    position15.style.visibility = "visible"
    position11.style.visibility = "hidden"
    counter()
    Verification()
  }
}

function pieceTwelve(){
  if (position8.style.visibility == "hidden" ){
    position8.innerHTML = position12.innerHTML
    position8.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position11.style.visibility == "hidden"){
    position11.innerHTML = position12.innerHTML
    position11.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position16.style.visibility == "hidden"){
    position16.innerHTML = position12.innerHTML
    position16.style.visibility = "visible"
    position12.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position10.innerHTML
    position14.style.visibility = "visible"
    position10.style.visibility = "hidden"
    counter()
    Verification()
  }
}
function pieceThirteen(){

  if (position9.style.visibility == "hidden" ){
    position9.innerHTML = position13.innerHTML
    position9.style.visibility = "visible"
    position13.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position13.innerHTML
    position14.style.visibility = "visible"
    position13.style.visibility = "hidden"
    counter()
    Verification()
  }

}
function pieceFourteen(){
  if (position10.style.visibility == "hidden" ){
    position10.innerHTML = position14.innerHTML
    position10.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position13.style.visibility == "hidden"){
    position13.innerHTML = position14.innerHTML
    position13.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position14.innerHTML
    position15.style.visibility = "visible"
    position14.style.visibility = "hidden"
    counter()
    Verification()
  }
}
function pieceFifteen(){
  if (position11.style.visibility == "hidden" ){
    position11.innerHTML = position15.innerHTML
    position11.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position14.style.visibility == "hidden"){
    position14.innerHTML = position15.innerHTML
    position14.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position16.style.visibility == "hidden"){
    position16.innerHTML = position15.innerHTML
    position16.style.visibility = "visible"
    position15.style.visibility = "hidden"
    counter()
    Verification()
  }
}
function pieceSixteen(){

  if (position12.style.visibility == "hidden" ){
    position12.innerHTML = position16.innerHTML
    position12.style.visibility = "visible"
    position16.style.visibility = "hidden"
    counter()
    Verification()
  }
  if (position15.style.visibility == "hidden"){
    position15.innerHTML = position16.innerHTML
    position15.style.visibility = "visible"
    position16.style.visibility = "hidden"
    counter()
    Verification()
  }

}

function play(){
  document.getElementById('image').style.display = 'none'
  if(moveNumber != 0 ||  document.getElementById("hms").innerHTML != "00:00:00" ){
    reiniciar()
  }
  cronometrar()
  document.getElementById("alert").innerHTML = ""

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

  
  Verification()
}

function ready(){


  if(position1.innerHTML == 1 && position2.innerHTML == 2 && position3.innerHTML == 3 && position4.innerHTML == 4
    && position5.innerHTML == 5 && position6.innerHTML == 6 && position7.innerHTML == 7 && position8.innerHTML == 8
    && position9.innerHTML == 9 && position10.innerHTML == 10 && position11.innerHTML ==  11 && position12.innerHTML == 12 
    && position13.innerHTML == 13 && position14.innerHTML == 14 && position15.innerHTML == 15 && position16.style.visibility == "hidden"  ){
    document.getElementById("alert").innerHTML = "Felicidades! Haz logrado resolver este Puzzle en solo " + moveNumber + " movimientos en un tiempo de " +  document.getElementById("hms").innerHTML + " seg"
      parar()
      document.getElementById('image').style.display = 'inline'
      saveBestRecord()
    
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
    parar()
    document.getElementById('image').style.display = 'inline'
    saveBestRecord()
     } else{
    document.getElementById("alert").innerHTML = "Mantente Intentando, este Puzzle puede ser completado"
   }

  }

function Verification(){

if(position1.innerHTML == 1){
    position1.style.backgroundColor = 'rgb(230, 230, 230)';
    position1.style.color= 'black'
  }else{
   position1.style.backgroundColor = '#00000050';
   position1.style.color= 'white'
  }

  if(position2.innerHTML == 2){
    position2.style.backgroundColor = 'rgb(230, 230, 230)';
    position2.style.color= 'black'
  }else{
   position2.style.backgroundColor = '#00000050';
   position2.style.color= 'white'
  }

  if(position3.innerHTML == 3){
    position3.style.backgroundColor = 'rgb(230, 230, 230)';
    position3.style.color= 'black'
  }else{
   position3.style.backgroundColor = '#00000050';
   position3.style.color= 'white'
  }

  if(position4.innerHTML == 4){
    position4.style.backgroundColor = 'rgb(230, 230, 230)';
    position4.style.color= 'black'
  }else{
   position4.style.backgroundColor = '#00000050';
   position4.style.color= 'white'
  }
  
     if(position5.innerHTML == 5){
      position5.style.backgroundColor = 'rgb(230, 230, 230)';
      position5.style.color= 'black'
    }else{
     position5.style.backgroundColor = '#00000050';
     position5.style.color= 'white'
    }

  if(position6.innerHTML == 6){
    position6.style.backgroundColor = 'rgb(230, 230, 230)';
    position6.style.color= 'black'
  }else{
   position6.style.backgroundColor = '#00000050';
   position6.style.color= 'white'
  }

  if(position7.innerHTML == 7){
    position7.style.backgroundColor = 'rgb(230, 230, 230)';
    position7.style.color= 'black'
  }else{
   position7.style.backgroundColor = '#00000050';
   position7.style.color= 'white'
  }
  
  if(position8.innerHTML == 8){
    position8.style.backgroundColor = 'rgb(230, 230, 230)';
    position8.style.color= 'black'
  }else{
   position8.style.backgroundColor = '#00000050';
   position8.style.color= 'white'
  }

if(position9.innerHTML == 9){
  position9.style.backgroundColor = 'rgb(230, 230, 230)';
  position9.style.color= 'black'
}else{
 position9.style.backgroundColor = '#00000050';
 position9.style.color= 'white'
}

if(position10.innerHTML == 10){
  position10.style.backgroundColor = 'rgb(230, 230, 230)';
  position10.style.color= 'black'
}else{
 position10.style.backgroundColor = '#00000050';
 position10.style.color= 'white'
}

if(position11.innerHTML == 11){
  position11.style.backgroundColor = 'rgb(230, 230, 230)';
  position11.style.color= 'black'
}else{
 position11.style.backgroundColor = '#00000050';
 position11.style.color= 'white'
}

if(position12.innerHTML == 12){
  position12.style.backgroundColor = 'rgb(230, 230, 230)';
  position12.style.color= 'black'
}else{
 position12.style.backgroundColor = '#00000050';
 position12.style.color= 'white'
}

if(position13.innerHTML == 13){
  position13.style.backgroundColor = 'rgb(230, 230, 230)';
  position13.style.color= 'black'
}else{
 position13.style.backgroundColor = '#00000050';
 position13.style.color= 'white'
}

if(position14.innerHTML == 14){
  position14.style.backgroundColor = 'rgb(230, 230, 230)';
  position14.style.color= 'black'
}else{
 position14.style.backgroundColor = '#00000050';
 position14.style.color= 'white'
}

if(position15.innerHTML == 15){
  position15.style.backgroundColor = 'rgb(230, 230, 230)';
  position15.style.color= 'black'
}else{
 position15.style.backgroundColor = '#00000050';
 position15.style.color= 'white'
}

if(position16.innerHTML == 16){
  position16.style.backgroundColor = "rgb(230, 230, 230)";
  position16.style.color= "black"
}else{
 position16.style.backgroundColor = "#00000050";
 position16.style.color= "white"

}

}
function saveBestRecord() {
  min = document.getElementById("hms").innerHTML.substring(3, 5)
  seg = document.getElementById("hms").innerHTML.substring(6)

if(!localStorage.lastRecord){
  localStorage.setItem("lastRecord", parseInt(min) + ":" + parseInt(seg)) ;
  localStorage.setItem("lastRecordM", document.getElementById("moveCounter").innerHTML) ;
  document.getElementById("bestTime").innerHTML = "Movimientos: " + localStorage.lastRecordM + " Tiempo: " + localStorage.lastRecord;
  if(localStorage.lastRecord < 10){
    document.getElementById("bestTime").innerHTML = "Movimientos: " + localStorage.lastRecordM + " Tiempo: 0" + localStorage.lastRecord;
  }
}
  
  if (parseInt(min) < localStorage.lastRecord.substring(0, 1)){
    localStorage.setItem("lastRecord", parseInt(min) + ":" + parseInt(seg)) ;
    localStorage.setItem("lastRecordM", document.getElementById("moveCounter").innerHTML) ;
    document.getElementById("bestTime").innerHTML = localStorage.getItem("lastRecord");
    document.getElementById("bestTime").innerHTML = "Movimientos: " + localStorage.lastRecordM + " Tiempo: " + localStorage.lastRecord;
    if(localStorage.lastRecord < 10){
      document.getElementById("bestTime").innerHTML = "Movimientos: " + localStorage.lastRecordM + " Tiempo: 0" + localStorage.lastRecord;
    }
  }
  if(parseInt(min) <= localStorage.lastRecord.substring(0, 1) & parseInt(seg) < localStorage.lastRecord.substring(2) ){
    localStorage.setItem("lastRecord", parseInt(min) + ":" + parseInt(seg)) ;
    localStorage.setItem("lastRecordM", document.getElementById("moveCounter").innerHTML) ;
    document.getElementById("bestTime").innerHTML = "Movimientos: " + localStorage.lastRecordM + " Tiempo: " + localStorage.lastRecord;
    if(localStorage.lastRecord < 10){
      document.getElementById("bestTime").innerHTML = "Movimientos: " + localStorage.lastRecordM + " Tiempo: 0" + localStorage.lastRecord;
    }
  }

 
}
    // Retrieve
if(localStorage.lastRecord){
  document.getElementById("bestTime").innerHTML = "Movimientos: " + localStorage.lastRecordM + " Tiempo: 0" + localStorage.lastRecord;

}
  

