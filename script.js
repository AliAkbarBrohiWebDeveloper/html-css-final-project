let slideIndex = 1;
let images = ['bg1.png', 'bg2.png', 'bg3.png', 'bg4.png', 'bg5.jpeg']; 

showSlide(slideIndex);


function showSlide(n) {
    
    if (n > images.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = images.length; }
    

    document.querySelector('.banner').style.backgroundImage = `url('${images[slideIndex - 1]}')`;
    

    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');
}

setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000);  


document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active'); 
});


