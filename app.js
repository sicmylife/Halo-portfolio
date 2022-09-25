const nav = document.querySelector('.nav-bar');
const burger = document.querySelector('.burger');
const close1 = document.querySelector('.close');
const contact = document.querySelector('#contact');
const overlay = document.querySelector('.overlay');


burger.addEventListener('click', function(e) {
e.preventDefault();
    nav.classList.add('active')
    close1.classList.add('active')
})

close1.addEventListener('click', function(e) {
    e.preventDefault();
        nav.classList.remove('active')
        close1.classList.remove('active')
    })

    contact.addEventListener('click', function(e) {
overlay.classList.add('contact')
overlay.innerHTML = "<h2>Hola</h2>"
        console.log(container)

    })
    

