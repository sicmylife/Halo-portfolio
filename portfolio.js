
const text = new SplitType("#intro");


    // gsap.registerPlugin(scrollTrigger);

  const tl = gsap.timeline({

    // scrollTrigger:{
    //   trigger:".box",
    //   markers:true,
    //   start:"top 10%",
    //   end:"top 30%",

    // }
    
  })

  tl.from(".char",{ y:20,stagger:0.05,rotate:25 ,ease:"black.out(1.5)"})
  tl.to(".intro",{ y:-2000,ease:"black.out(1.5)",duration:1})
  tl.fromTo(".grid",{opacity:0, y:200},{opacity:1, y:0,x:0 ,duration:2})

const scene= document.querySelector("#scene");

const parallax = new Parallax(scene);





  