const carouselImages = [
    'img/image1.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
    'img/image4.jpg',
    'img/image5.jpg',
    'img/image6.jpg',
    'img/image7.jpg'
]

let currentIdx = 0;

function showCurrentImage() {
    const imgContainer1 = document.querySelector('.products-carousel .image1');
    const imgContainer2 = document.querySelector('.products-carousel .image2');
    const imgContainer3 = document.querySelector('.products-carousel .image3');
    const img2Idx = currentIdx + 1 > carouselImages.length - 1 ? 0 : currentIdx + 1;      
    const img3Idx = img2Idx + 1 > carouselImages.length - 1 ? 0 : img2Idx + 1;
    imgContainer1.src =  carouselImages[currentIdx]; 
    imgContainer2.src =  carouselImages[img2Idx]; 
    imgContainer3.src =  carouselImages[img3Idx];
}

function next() {
    currentIdx++;
    if (currentIdx > carouselImages.length - 1) currentIdx = 0;
    showCurrentImage();
}

function prev() {
    currentIdx--;
    if (currentIdx < 0) currentIdx = carouselImages.length - 1;
    showCurrentImage();
}

showCurrentImage();

setInterval(next, 10000);

document.querySelector('.products-carousel .button-next')
  .addEventListener('click', next);

document.querySelector('.products-carousel .button-prev')
  .addEventListener('click', prev);