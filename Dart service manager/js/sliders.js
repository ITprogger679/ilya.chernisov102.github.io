//SLIDERS
if($('.slider__body').length>0){
	$('.slider__body').slick({
		autoplay: true,
		infinite: true,
		dots: false,
		arrows: true,
		accessibility:false,
		slidesToShow:1,
		autoplaySpeed: 1300,
		vertical:true,
		pauseOnHover:true,
		draggable:true,
		swipe:true,
		//asNavFor:'',
		//appendDots:
		//appendArrows:$('.mainslider-arrows .container'),
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}




