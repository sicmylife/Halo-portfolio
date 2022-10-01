const nav = document.querySelector(".nav-bar");
const burger = document.querySelector(".burger");
const close1 = document.querySelector(".close");
const contact = document.querySelector("#contact");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const about = document.querySelector("#about");


burger.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.add("active");
  close1.classList.add("active");
});

close1.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.remove("active");
  close1.classList.remove("active");
  // closing overlay contact
  overlay.style.display = "none";
  close1.classList.remove("active");
    // closing overlay about
    overlay2.style.display = "none";
    close1.classList.remove("active");

});

about.addEventListener("click", function (e) {
  overlay2.style.display = "block";
  close1.classList.add("active");



});

contact.addEventListener("click", function (e) {
    overlay.style.display = "block";
  close1.classList.add("active");

  });



 

 