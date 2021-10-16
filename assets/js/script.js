function myFunction() {
    document.getElementById('menu').classList.toggle('responsive');
}

const animScroll = document.getElementsByClassName('tetrisIcones');

window.addEventListener('scroll', function(){
    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

    if (scrollValue > 0.8){
        animScroll.style.animationPlayState = 'running';
    } else{
        animScroll.style.animationPlayState = 'paused';
    }
});


