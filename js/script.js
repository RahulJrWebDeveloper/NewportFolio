// Toggle icon
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
// scrol sections Active link

let section = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    //  sticky navbar
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scroll > 100)

    // remove toggle icon navbar when click navbar link
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// 