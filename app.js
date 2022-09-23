const nav = document.querySelector('.nav-bar');
const burger = document.querySelector('.burger');
const close1 = document.querySelector('.close');

console.log(nav)

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
    

