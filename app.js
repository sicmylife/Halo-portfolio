const nav = document.querySelector(".nav-bar");
const burger = document.querySelector(".burger");
const close1 = document.querySelector(".close");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close-menu");
const contact = document.querySelector("#contact");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const about = document.querySelector("#about");

console.log(close2);

burger.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.add("active");
  close3.classList.add("active");
});

close3.addEventListener("click", function (e) {
  e.preventDefault();
 
    // closing overlay about
    nav.classList.remove("active");
    close3.classList.remove("active");

});

close1.addEventListener("click", function (e) {
  e.preventDefault();

  overlay.style.display = "none";
    close2.classList.remove("active");

    nav.classList.remove("active");
    close3.classList.remove("active");

  // closing overlay contact

});

close2.addEventListener("click", function (e) {
  e.preventDefault();
 
    // closing overlay about
    overlay2.style.display = "none";
    close2.classList.remove("active");

    nav.classList.remove("active");
    close3.classList.remove("active");

    // close about layer and nav layer

});



about.addEventListener("click", function (e) {
  overlay2.style.display = "block";
  close2.classList.add("active");



});

contact.addEventListener("click", function (e) {
    overlay.style.display = "block";
  close1.classList.add("active");

  });

  const tl = gsap.timeline({
    default:{
    }
    
  })   

  tl.from('.intro',{y:-1300,duration:1,delay:1,tagger: 1 })
  tl.to('.intro',{x:-1000,duration:1,delay:1,tagger: 1 })
  tl.to('.intro',{x:0,duration:1, stagger: .6,})
  tl.to('.intro',{x:'-2000',stagger: .1, })
  // tl.to('.intro',{x:'-3000', })
  // tl.from('.zombi',{y:'2000%', })
  tl.from('.under',{y:'-300%', x:'-300px', duration:3,})

 
const hoverEffecto =  new hoverEffect({
    parent: document.querySelector(".zombi"),
    intensity: 0.2,
    imagesRatio: 450 / 600,
    image1: "./images/main.png",
    image2: "./images/main.png",
    displacementImage: "./images/distortion.jpeg",
    hover: true
});


 

 