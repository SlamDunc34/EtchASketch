var app = function(){
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");

  context.beginPath();
  context.moveTo(90,90);

  currentPosition = [90,90];

  window.addEventListener('keydown', draw);

  var colorPicker = document.getElementById("input-color");
  colorPicker.addEventListener("change", changeColor);
}

var changeColor = function(){
  var context = getCanvasContext();

  context.closePath();
  context.beginPath();

  var positionX = currentPosition[0]
  var positionY = currentPosition[1]

  context.moveTo(positionX, positionY);
  context.strokeStyle = this.value;
}

var getCanvasContext = function(){
  var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");
  return context;
}


var draw = function(e){
  var context = getCanvasContext();

  var positionX = currentPosition[0]
  var positionY = currentPosition[1]

  if (e.key === "ArrowRight"){
    if (positionX+5 <= 510){
      context.lineTo( (positionX+5) , positionY )
      context.stroke();
      currentPosition[0] = positionX+5
      console.log("RIGHT")  
    }
  } 
  else if (e.key === "ArrowLeft") {
    if (positionX-5 >= 90){
      context.lineTo( (positionX-5) , positionY )
      context.stroke();
      currentPosition[0] = positionX-5
      console.log("LEFT")
    }
  } 
  else if (e.key === "ArrowUp") {
    if (positionY-5 >= 90){
      context.lineTo( positionX , (positionY-5) )
      context.stroke();
      currentPosition[1] = positionY-5
      console.log("UP")
    }
  } 
  else if (e.key === "ArrowDown") {
    if (positionY+5 <= 395){
      context.lineTo( positionX , (positionY+5) )
      context.stroke();
      currentPosition[1] = positionY+5
      console.log("DOWN")
    }
  } else {
    return;
  }
}

window.addEventListener("load", app)






