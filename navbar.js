

// setTimeout(function(){
//   document.getElementById("name").setAttribute("style", "transition: color 1s;");
// }, 300);
window.addEventListener("resize", resize);

window.addEventListener('scroll', function(e) {
  let navBar = document.getElementsByTagName("nav")[0];
  // navBar.style.position= $(window).scrollTop() < 300 ? 'sticky' : 'static';
  let ypos = $(window).scrollTop();
  if(ypos > 300){
    navBar.style.position="relative";
    navBar.style.top = "300px";
  } else {
    navBar.style.position="sticky";
    navBar.style.top = "0px";
  }

});

document.addEventListener("DOMContentLoaded",function(){
  setTimeout(function(){
    document.getElementById("name").setAttribute("style", "transition: color 1s;");
  }, 300);

  resize();

  var dd = $(".dropdown > a");
  var i;

  for (i = 0; i < dd.length; i++) {
    dd[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        $(this).parent().css("max-height", null);
      } else {
        $(this).parent().css("max-height", function(){
          var val = $(this).parent().scrollHeight + panel.scrollHeight;
          return 100000 + "px";
        });
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});

function resize(){
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(width <= 600){
    $("#name").html("Theta Tau");
  } else if(width <= 1200){
    $("#name").html("Theta Tau - CU");
  } else {
    $("#name").html("Theta Tau - CU Boulder");
    $(".navBtns").className = "navigation";
  }
}

function onMenuClick(x){
  x.classList.toggle("change");
  var el = document.getElementById("navBtns");
  if(el.className === "navigation"){
    el.className += " responsive";
  } else {
    el.className = "navigation";
  }
  var coll = $(".dropdown");

  console.log(coll);
  var i;
  for (i = 0; i < coll.length; i++) {
    console.log(i + ": " + coll[i].nodeName + " - " + coll[i].getAttribute("class"));
    var content = coll[i];
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight =  content.scrollHeight + "px";
    }
  }
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
