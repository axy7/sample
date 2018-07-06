$(function() {
// popup
$('.js-order-tour').click(function(){
$('.popup._order').fadeIn();
});	
$('.popup').click(function() {
event = event || window.event;
if ($(event.target).closest(".popup__wrapper").length==0) {
$('.popup').fadeOut();
}
}); 
$('.popup__close').click(function(){
$('.popup').fadeOut();
});
$(window).keydown(function(e){
if(e.keyCode === 27) {
$('.popup').fadeOut();
}
});

// slider
if ($('.slider__item').length > 1) {
$('.slider__wrapper').slick({
arrows: false,
dots: true,
respondTo: 'window',
fade: true,
speed: 800,
//autoplay: true,
});
}

// other
$(".input__text, .input__textarea").textPlaceholder();
$(".inputmask").inputmask("+7 (999) 999 99 99", { "clearIncomplete": true });
$(".fb").attr('rel','group').fancybox({padding : 0, helpers:{overlay: {locked: false}}});
});
