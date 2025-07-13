let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let sliderDom = document.querySelector('.slider');
let listItemDom = document.querySelector('.slider .list');
let thumbnailDom = document.querySelector('.slider .thumbnail');

// Track if an animation is in progress
let isAnimating = false;

let timeRunning = 3000;
let runTimeOut;

// Disable clicks while animating
nextDom.onclick = () => handleSlide('next');
prevDom.onclick = () => handleSlide('prev');

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        handleSlide('next');
    } else if (event.key === 'ArrowLeft') {
        handleSlide('prev');
    }
});

function handleSlide(type) {
    if (isAnimating) {
        alert('Please wait for the slide to finish.');
        return;
    }
    isAnimating = true;
    showSlider(type);
}

function showSlider(type){
    let itemSlider = document.querySelectorAll('.slider .list .item');
    let itemThumbnail = document.querySelectorAll('.slider .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        sliderDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        sliderDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
        sliderDom.classList.remove('next');
        sliderDom.classList.remove('prev');
        isAnimating = false; // Re-enable clicks
    }, timeRunning);
}
