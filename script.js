//html setup
var itemsHTMLColection = document.getElementsByClassName('parallax-item')
var itemsArray= Array.from(itemsHTMLColection);

//inisulise input object to store mouce position as fraction
var input={
  mouseX: {
    start: 0,
    endoffset: 0,
    current: 0,
  },
  mouseY:{
    start: 0,
    endoffset: 0,
    end: window.innerHeight,
    current: 0,
  }
};

input.mouseX.end =  window.innerWidth - input.mouseX.endoffset;
input.mouseX.range = input.mouseX.end - input.mouseX.start;

input.mouseY.range = input.mouseY.end - input.mouseY.start;
input.mouseY.end =  window.innerHeight - input.mouseY.endoffset;

//inisulise varable to output effects
var output = {
  x: {
    start: -150,
    end: 150,
    current: 0,
  },
  y: {
    start: -150,
    end: 150,
    current: 0,
  },
  zIndex: {
    range:10000
  },
  scale:{
    start: 1,
    end: 1
  },
  blur:{
    startingDeapth: 0.1,
    range: 10
  }
};
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;
output.scale.range = output.scale.end - output.scale.start

var mouse = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5
}


var updateInputs = function() {
  //calculate fraction
  input.mouseX.current =  mouse.x;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  
  //repeat for y cowards
  input.mouseY.current = mouse.y;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
  
 
}

var updateOutputs = function() {
   output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
   output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);
}
var updateEachItem = function(){
   itemsArray.forEach(function(item, counter){
    var depth = parseFloat(item.dataset.depth, 10);
    var itemOutput = {
      x: output.x.current - (output.x.current * depth),
      y: output.y.current - (output.y.current * depth),
      zIndex: output.zIndex.range - (output.zIndex.range * depth),
      scale: output.scale.start + (output.scale.range * depth),
      blur: (depth - output.blur.startingDeapth) * output.blur.range
    };
    console.log(counter, 'depth', depth);
    item.style.filter = 'blur('+itemOutput.blur+'px)'
    item.style.zIndex = itemOutput.zIndex
    item.style.transform ='scale('+itemOutput.scale+') translate(' + (itemOutput.x) + 'px, ' + (itemOutput.y) + 'px)'; 
  });
}

//creating fraction of the screen
var handleMouseMove = function(event){
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  
  updateInputs();
  updateOutputs();
  updateEachItem();
 
}

//redo maths once resised
var handleresize = function(event){
  input.mouseX.end =  window.innerWidth - input.mouseX.endoffset;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  
  input.mouseY.end =  window.innerHeight - input.mouseY.endoffset;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;

}
//vissual setup
function populate(gridX,gridY,endX,endY,image,deapth){
  var elument = document.getElementById("cell-"+gridY+","+ gridX);
  elument.dataset.depth = deapth;
  elument.innerHTML = '<img src="'+ image +'">';
  if (endX - gridX > 1 || endY - gridY > 1){
    elument.style = 'grid-area: ' + gridY + ' / ' + gridX + ' / ' + endY + ' / ' + endX + ';';
    
    var removeY = endY - 1;
    while (removeY >= gridY){
      var removeX = endX  - 1;
      while (removeX >= gridX && (removeX != gridX || removeY != gridY)){
        console.log("cell-" + removeY + ","+ removeX);
        var remove = document.getElementById("cell-" + removeY + ","+ removeX);
        remove.parentNode.removeChild(remove);
        removeX = removeX - 1;
      }
      removeY = removeY - 1;
    }
  }
}


populate(1,1,3,2,"https://www.onlygfx.com/wp-content/uploads/2016/10/watercolor-cloud-1-1024x664.png",0.8)
populate(6,5,8,6,"https://www.onlygfx.com/wp-content/uploads/2016/10/watercolor-cloud-1-1024x664.png",0.8)
populate(14,5,16,7,"https://www.onlygfx.com/wp-content/uploads/2017/06/watercolor-tree-5.png",0.4)

var Xon = 1;
while (Xon < 17){
  populate(Xon,7,0,0,"https://lh3.googleusercontent.com/aO8HFLBG1vc9hMFzqH4S6xmKKTqkUE3ewboN3tDtlUwmK0Rh3qDbMS0XzWRCOgjCDLnDrK0H77efxhw7AXucDA=s400",0);
  Xon = Xon + 1;
}


// event Listeners to reajust a resized screan and to track mouse movements
window.addEventListener('mousemove',handleMouseMove);
window.addEventListener('resize',handleresize);
updateInputs();
updateOutputs();
updateEachItem();




