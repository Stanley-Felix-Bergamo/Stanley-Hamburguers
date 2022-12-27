$('document').ready(function () {

    menuHamburguer();


});


function menuHamburguer() {
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })
}