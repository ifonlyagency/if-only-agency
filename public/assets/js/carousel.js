let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let displayedPicture = document.getElementById('displayed-picture');

rightArrow.addEventListener('click', advanceCarousel);
leftArrow.addEventListener('click', retractCarousel);

let carouselImgs = [
'https://picsum.photos/1200/400?grayscale&random=1', 
'https://picsum.photos/1200/400?grayscale&random=2',
'https://picsum.photos/1200/400?grayscale&random=3',
'https://picsum.photos/1200/400?grayscale&random=4',
'https://picsum.photos/1200/400?grayscale&random=5'
]

// Advance the carousel controls by one circle

function advanceCarousel(event) {
    let circles = document.querySelectorAll('.circle-control');

    for(let i=0; i < circles.length - 1; i++) {
        if(circles[i].classList.contains('active-circle')) {
            advancePicture(circles[i+1].id)
            circles[i].classList.remove('active-circle');
            circles[i+1].classList.add('active-circle');
            return;
        }
    }
}

// Change the picture based on the current picture ID needed (i.e. 1st, 2nd, 3rd, 4th, or 5th)

function advancePicture(picture) {
    switch (picture) {
        case 'first':
            displayedPicture.setAttribute('src', carouselImgs[0]);
            break;

        case 'second':
            displayedPicture.setAttribute('src', carouselImgs[1]);
            break;

        case 'third':
            displayedPicture.setAttribute('src', carouselImgs[2]);           
            break;

        case 'fourth':
            displayedPicture.setAttribute('src', carouselImgs[3]);
            break;

        case 'fifth':
            displayedPicture.setAttribute('src', carouselImgs[4]);         
            break;

        default:
            displayedPicture.setAttribute('src', carouselImgs[0])
            break;
    }
}

// Retract the carousel controls by one circle

function retractCarousel() {
    let circles = document.querySelectorAll('.circle-control');

    for(let i=1; i < circles.length; i++) {
        if(circles[i].classList.contains('active-circle')) {
            advancePicture(circles[i-1].id)
            circles[i].classList.remove('active-circle');
            circles[i-1].classList.add('active-circle');
            return;
        }
    }
}
