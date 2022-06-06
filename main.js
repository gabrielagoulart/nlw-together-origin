
//ABRE E FECHA O MENU AO CLICAR NO ICONE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

//AO CLICAR NO INCONE DO MENU, ELE SERA ESCONDIDO
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

//MUDAR O HEADER DA PAGINA QUANDO DER SCROLL

function changeHeaderWhenScroll() {
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
       header.classList.remove('scroll')
    }
}

//TESTIMONIALS SLIDER
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})


//MOSTRAR ELEMENTOS AO DAR SCOLL NA PAGINA
const scrollReveal = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonials,
     #contact .text, #contact .links,
     footer .brand, footer .social
`, { interval:100})


//BOTAO VOLTAR PARA O TOPO

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

//WHEN SCROLL
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
})