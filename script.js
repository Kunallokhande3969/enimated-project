
var b = document.querySelector("#nav2 h3")
var cross= document.querySelector("#full h5")

 b.addEventListener("click",function(){ 
   tl.play();
 })
 cross.addEventListener("click",function(){
  tl.reverse()
 })

var tl = gsap.timeline();
 tl.to("#full",{
    top : 0,
     duration : 1,
     ease : Power2,
 })
  tl.from("#full h4",{
      x : -200,
    stagger : .2,
  })
   tl.pause()