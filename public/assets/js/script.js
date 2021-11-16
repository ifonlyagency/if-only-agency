// Animation for the hamburger nav bar

let hamBars = document.getElementById('ham-bars-wrapper');
let bar1 = document.getElementById('ham-bar-1');
let bar2 = document.getElementById('ham-bar-2');
let bar3 = document.getElementById('ham-bar-3');

let navList = document.getElementById('nav-list');

hamBars.addEventListener('click', animateNav);

function animateNav() {

    if(hamBars.classList.contains('closed')) {
        hamBars.classList.remove('closed');
        hamBars.classList.add('open')
        bar1.setAttribute('style', 'margin-left: 5px; transition: 0.5s ease-in-out;');
        bar2.setAttribute('style', 'margin-left: 10px; transition: 0.5s ease-in-out;');
        bar3.setAttribute('style', 'margin-left: 15px; transition: 0.5s ease-in-out;');
        navList.setAttribute('style', 'display: block; transition: 0.5s ease-in-out;')
    } else {
        hamBars.classList.remove('open');
        hamBars.classList.add('closed');
        bar1.setAttribute('style', 'margin-left: 0px; transition: 0.5s ease-in-out;');
        bar2.setAttribute('style', 'margin-left: 0px; transition: 0.5s ease-in-out;');
        bar3.setAttribute('style', 'margin-left: 0px; transition: 0.5s ease-in-out;');
        navList.setAttribute('style', 'display: none; transition: 0.5s ease-in-out;')

    }
}

// Show and hide up arrow depending on page position
// Clicking the up arrow takes a user to the top of the page

document.addEventListener('scroll', checkScroll)
let upArrow = document.getElementById('up-arrow');

function checkScroll() {
    if(window.scrollY > 100) {
        upArrow.setAttribute('style', 'display: block !important;')
    } else {
        upArrow.setAttribute('style', 'display: none !important;')
    }
}

upArrow.addEventListener('click', takeToTop)

function takeToTop () {
    scroll(0,0);
}

checkScroll();