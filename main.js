
//ABRE E FECHA O MENU AO CLICAR NO ICONE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

//AO CLICAR NO íCONE DO MENU, ELE SERA ESCONDIDO
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

//MUDAR O HEADER DA PAGINA QUANDO DER SCROLL
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

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
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

//MENU ATIVO CONFORME SECAO DA PAGINA
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
   
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 

    for( const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.remove('active')
        }
    }
}


//WHEN SCROLL
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})

//MENU ATIVO CONFORME SECAO DA PAGINA
