var navLogo=document.querySelector(".navleft");
var navMiddle=document.querySelectorAll(".navCenter a")
var navRight=document.querySelectorAll(".navbtn")
gsap.from(navLogo,{
    y:"100%",
    scale:0,
    duration:.5,
    
})
gsap.from(navMiddle,{
    y:"100%",
    duration:0.5,
    delay:0.5,
    stagger:0.2,

})

gsap.from(navRight,{
    y:"100%",
    scale:0,
    duration:0.5,
    delay:1.5,
    stagger:0.2,

})




Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".headings h1", {
    images: ["https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1681437746657-412fe919561a?auto=format&fit=crop&q=80&w=2788&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"] ,
    
  });

gsap.to(".element",{
    scrollTrigger:{
        trigger:".featuresSection", // start trigger
        pin:true,
        start:"top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub:1,
     
        
    },
    y:"-300%",
    ease:Power1,
})

var sections= document.querySelectorAll(".element")
Shery.imageEffect(".img", {
    style: 5,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
     sections.forEach(function(section,index){
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            // markers:true,
            onUpdate:function(prog){
                setScroll(prog.progress+index)
            }
        })
     })
    },
  });