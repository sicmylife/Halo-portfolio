


    // gsap.registerPlugin(scrollTrigger);

  const tl = gsap.timeline({

    // scrollTrigger:{
    //   trigger:".box",
    //   markers:true,
    //   start:"top 10%",
    //   end:"top 30%",

    // }
    
  })

  tl.fromTo(".grid",{opacity:0, y:200,x:100 },{opacity:1, y:0,x:0 ,duration:4})

const scene= document.querySelector("#scene");

const parallax = new Parallax(scene);




  