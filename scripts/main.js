$('document').ready(function () {
    menuHamburguer();
    animaCarrosel();

});


function menuHamburguer() {
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })
}

function animaCarrosel() {
    $('#carrosel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
}