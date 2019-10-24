

// setTimeout(function(){
//   document.getElementById("name").setAttribute("style", "transition: color 1s;");
// }, 300);
window.addEventListener("resize", resize);

document.addEventListener("DOMContentLoaded",function(){
  setTimeout(function(){
    document.getElementById("name").setAttribute("style", "transition: color 1s;");
  }, 300);

  resize();
});

function resize(){
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    document.getElementById("name").innerHTML = "Theta Tau";
  } else {
    document.getElementById("name").innerHTML = "Theta Tau - CU Boulder";
    document.getElementById("navBtns").className = "navigation";
  }
}

function onMenuClick(){
  var el = document.getElementById("navBtns");
  if(el.className === "navigation"){
    el.className += "-responsive";
  } else {
    el.className = "navigation";
  }
}
