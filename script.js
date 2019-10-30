
function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

/* ---------------------
                         SLIDER
                                 ----------------------------------------------- */




// INIT
var slides = document.getElementsByClassName("slider");
var sDisplay = document.getElementsByClassName("sd");
var index = 0;
update();

function slider(i) {
  index = i;

  // C'est pour récupérer la position en X de l'élément qu'ont veux afficher
  var posInit = slides[i].style.transform;
  posInit = posInit.split('(');
  posInit = posInit[1];
  posInit = posInit.split('%');
  posInit = posInit[0];
  posInit = Number(posInit)


  for (let j = 0; j < slides.length; j++) {
    var pos = slides[j].style.transform;
    pos = pos.split('(');
    pos = pos[1];
    pos = pos.split('%');
    pos = pos[0];
    pos = Number(pos)
    slides[j].style.transform = "translateX(" + (pos - posInit) + "%)";
  }

  update();
}

function update(){
  for (let j = 0; j < sDisplay.length; j++) {
    if(j == index){
      sDisplay[j].classList.add("spselect");
    }
    else{
      sDisplay[j].classList.remove("spselect");
    }
  }
}

function next(){
  if(index < 2){
    index++
  }
  else{
    index = 0;
  }

  slider(index);
}

function prev(){
  if(index > 0){
    index--;
  }
  else{
    index = 2;
  }

  slider(index);
}




