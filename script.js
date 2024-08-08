var curs=document.querySelector("#cursor")
var blurCursor=document.querySelector("#cursor2")

document.addEventListener("mousemove",function(dets){
       curs.style.left=dets.x+30+"px"
       curs.style.top=dets.y+"px"
       blurCursor.style.left=dets.x+  -250 + "px"
       blurCursor.style.top=dets.y - 250 +"px"
})
 var allh4=document.querySelectorAll("#nav h4")
 allh4.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
  curs.style.scale=3
  curs.style.backgroundColor="transparent",
  curs.style.border="1px solid #fff"
})
elem.addEventListener("mouseleave",function(){
  curs.style.scale=1
  curs.style.backgroundColor="#95C11E"
  curs.style.border="0px solid #95C11E"

})
 })

 
document.addEventListener("mousemove",function(dets){
      
})


gsap.to("#nav",{
  backgroundColor:"black"
  ,height:"110px",
  duration:0.5,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub :1

  }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
       
        end:"top -75%",
        scrub:2,
    }

})
gsap.to("#colon-1",{
  top: "18%",
  left:"18%",
  duration:10,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    // markers:true,
    start:"top 20%",
    end:"top 15%",
    scrub:2
  }
})
gsap.to("#colon-2",{
  right: "20%",
  top:"65%",
  duration:10,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    // markers:true,
    start:"top 20%",
    end:"top 15%",
    scrub:2
  }
})
gsap.from("#about-us img,#about-us-in",{
  y: 70,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us-in",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"top 60%",
    scrub:1
  }
})
gsap.from(".box",{
  scale:0.2,
 
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".box",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:1
  }
})
gsap.to("#page4 h4",{
  y: -60,
  duration:0.1,
  scrollTrigger:{
    trigger:"#page4 h4",
    scroller:"body",
    // markers:true,
    start:"top 90%",
    end:"top 75%",
    scrub:1
  }
})
