const slidersCont = document.getElementById("slides-cont");
const thumbnailsCont = document.getElementById("thumbnails-cont");
const slideTitle = document.getElementById("title")
const slideText = document.getElementById("text")
const slideImg = document.getElementById("slide-img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let c = 0;

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

images.forEach(createThumbs)

function createThumbs(element, index) {
    let thumb = document.createElement("img");
    thumb.counter = index;
    thumb.src = element["image"];
    thumb.classList.add("thumb");
    if (element != images[0]) {
        thumb.classList.add("inactive")
    } else {
        thumb.classList.add("active")
    }
    thumb.addEventListener("click", clickSlide)
    thumbnailsCont.appendChild(thumb); 
};

thumbnails = document.getElementsByClassName("thumb");

nextBtn.addEventListener("click", nextSlide);
function nextSlide() {
    thumbInactive(c);
    if (c < images.length - 1) {
        c++;
    } else {
        c = 0;
    }
    slideImg.src = images[c].image;
    changeText(c);
    thumbActive(c);
}

prevBtn.addEventListener("click", prevSlide);
function prevSlide() {
    thumbInactive(c);
    if (c > 0) {
        c--;
    } else {
        c = images.length-1;
    }
    changeText(c);
    thumbActive(c);
}

function clickSlide() {
    thumbInactive(c);
    c = this.counter;
    slideImg.src = images[c].image;
    changeText(c);
    thumbActive(c);
}


function thumbInactive(i) {
    thumbnails[i].classList.remove("active")
    thumbnails[i].classList.add("inactive");
}

function thumbActive(i) {
    thumbnails[i].classList.remove("inactive")
    thumbnails[i].classList.add("active");
}

function changeText(i) {
    slideImg.src = images[i].image;
    slideTitle.innerText = images[i].title;
    slideText.innerText = images[i].text;
}