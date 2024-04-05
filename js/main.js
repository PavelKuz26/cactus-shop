const navMenu = document.getElementById('nav__menu');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('close__btn');

const navLink = document.querySelectorAll('.menu__link');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show__menu')
    })
}

const linkAction = () =>{
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show__menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ==============  Add blur header ==============

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader);

// ============== Scroll Up =====================

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);

// =============== Scroll sections active link

const sections = document.querySelectorAll('section')

// const scrollActive = () =>{
//     const scrollDown = window.scrollY

//     sections.forEach(current => {
//         const sectionsHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 58
//         const sectionId = current.getAttribute('id')
//         const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

//         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionsHeight){
//             sectionsClass.classList.add('active-link')
//         }else {
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }

// window.addEventListener('scroll', scrollActive);

let currentSection = 'home';

window.addEventListener('scroll', () =>{
    sections.forEach(sections => {
        if(window.scrollY >= (sections.offsetTop - sections.clientHeight / 4)){
            currentSection = sections.id;
        }
    })

    navLink.forEach(navLink => {
        if(navLink.href.includes(currentSection)){
            document.querySelector('.active-link').classList.remove('active-link')
            navLink.classList.add('active-link')
        }
    })
})