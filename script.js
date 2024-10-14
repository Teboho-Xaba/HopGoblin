let menu = document.querySelector('#menu-icon')
let navlist= document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text', {delay:200, origin:'left'})
sr.reveal('.hero-img', {delay:250, origin:'right'})
sr.reveal('.products', {delay:300, origin:'top'})