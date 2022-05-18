const slides = [
    'assets/slide1.jpg',
    'assets/slide2.jpg',
    'assets/slide3.jpg',
];
const eachSlide = document.getElementsByClassName('slides');
let step = 0;
let autoSlide = false;
let slideIntervalId;

window.onload = () => {
    createSlider();
    // turn next or previous slide
    document.getElementById('arrow-left').addEventListener('click', turnLeft);
    document.getElementById('arrow-right').addEventListener('click', turnRight);
};

const createSlider = () => {
    // slides parent
    const sliderParent = document.createElement('div');
    sliderParent.classList.add('slider-parent');

    // creating slides
    for (let i = 0; i < slides.length; i++) {
        const slide = document.createElement('img');
        slide.src = slides[i];
        slide.classList.add('slides');
        sliderParent.append(slide);
    }
    // append to body
    document.getElementById('slider').append(sliderParent);

    if (autoSlide) {
        autoRotate();
        if (autoSlide) {
            slideIntervalId = setInterval(turnRight, 2000);
        }
    }
}

const turnLeft = () => {
    step++;
    let move = 100 * step;
    for (let i = 0; i < eachSlide.length; i++) {
        eachSlide[i].style.transform = `translateX(${move}%)`;
    }
    if (move > 0) {
        move = 0;
        step = -slides.length;
        for (let i = 0; i < eachSlide.length; i++) {
            eachSlide[i].style.transform = `translateX(${move}%)`;
        }
    }
}

const turnRight = () => {
    step--;
    let move = 100 * step;
    for (let i = 0; i < eachSlide.length; i++) {
        eachSlide[i].style.transform = `translateX(${move}%)`;
    }
    if (move === -100 * slides.length) {
        move = 0;
        step = 0;
        for (let i = 0; i < eachSlide.length; i++) {
            eachSlide[i].style.transform = `translateX(${move}%)`;
        }
    }
};

const autoRotate = () => {
    document.getElementById('slider').addEventListener('mouseover',  () => {
        autoSlide = false;
        clearInterval(slideIntervalId);
    });

    document.getElementById('slider').addEventListener('mouseleave',  () => {
        autoSlide = true;
        slideIntervalId = setInterval(turnRight, 2000);
    });
}