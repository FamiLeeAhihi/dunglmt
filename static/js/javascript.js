function myFunction() {
    const element = document.getElementById("top");
    element.scrollIntoView({behavior: 'smooth'});
}

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        navText: ["<img src='static/image/icon/myprevimage.png'>","<img src='static/image/icon/mynextimage.png'>"],
        responsive:{
            0:{
                items:1
            }
        }
    })
});
