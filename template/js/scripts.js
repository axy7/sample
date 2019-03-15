$(function() {
	// menu
	$('.js-action-menu').click(function(){
		$(this).toggleClass('_active');
		$('.header-menu').slideToggle();
	});
	
	// popup
	$('.js-open-callback').click(function(){
		$('.popup._callback').fadeIn();
		$('.popup._callback .input-text:eq(0)').focus();
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
	if ($('.popup .notetext, .popup .errortext').length > 0) {
		$('.popup .notetext, .popup .errortext').parents('.popup').show();
	    history.pushState('', '', window.location.pathname);
	}

	// slick slider
	var prevArrow = '<button type="button" class="slick-prev"><svg><use xlink:href="template/img/sprite.svg#arrow-prev"></use></svg></button>';
	var nextArrow = '<button type="button" class="slick-next"><svg><use xlink:href="template/img/sprite.svg#arrow-next"></use></svg></button>';
	if ($('.slider-item').length > 1) {
		$('.slider__wrapper').slick({
			arrows: false,
			dots: true,
			respondTo: 'window',
			fade: true,
			speed: 800,
			prevArrow: prevArrow,
			nextArrow: nextArrow,
			//responsive: [
			    //{breakpoint: 721,settings: {slidesToShow: 1}}
			//],
			//autoplay: true
		});
	}

	// other
	$(".input-text, .input-textarea").textPlaceholder();
	$(".inputmask").inputmask("+7 (999) 999 99 99", { "clearIncomplete": true });
	$('[data-fancybox]').fancybox({buttons: ["close"], protect: true});
});
