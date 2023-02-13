function myFunction() {
    const element = document.getElementById("top");
    element.scrollIntoView({behavior: 'smooth'});
}

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav: true,
        responsive:{
            0:{
                items:1
            }
        }
    })
});
