



    // gsap.registerPlugin(scrollTrigger);

  const tl = gsap.timeline({

    // scrollTrigger:{
    //   trigger:".box",
    //   markers:true,
    //   start:"top 10%",
    //   end:"top 30%",

    // }
    
  })

  tl.from(".char",{ y:130,stagger:1,ease:"black.out(1.5)"})
  tl.to(".intro",{ y:-2000,duration:2,ease:"black.out(1.5)"})
  tl.fromTo(".grid",{opacity:0, y:200},{opacity:1, y:0,x:0 ,duration:2})







  