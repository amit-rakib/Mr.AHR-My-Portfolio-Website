
  // Rellax
  var rellax = new Rellax('.rellax');
  
  
  // About Text on scroll
  var scrollText = document.getElementById("text")
  window.addEventListener("scroll", function(){
    scrollText.style.right = window.pageYOffset + 'px';
  })
  
  var scrollTextRight = document.getElementById("right-text")
  window.addEventListener("scroll", function(){
    scrollTextRight.style.left = window.pageYOffset + 'px';
  })
  
  var scrollTextAbout = document.getElementById("about-text")
  window.addEventListener("scroll", function(){
    scrollTextAbout.style.right = window.pageYOffset/2 + 'px';
  })
  
  var scrollTextAboutTitle = document.querySelector(".about-title")
  window.addEventListener("scroll", function(){
    scrollTextAboutTitle.style.left = window.pageYOffset/15 + 'px';
  })
