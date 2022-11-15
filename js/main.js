// $(function(){

// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > 200 ) {
// 			$('.logoHeader').hide();
// 			$('.infoAdd').hide();
// 			$('#nav').toggleClass('fixed-top')
// 			console.log('Salida de $(this).scrollTop()-->',$(this).scrollTop())
// 		}
// 	});

	


// });

$(function(){
	$(window).bind('scroll', function() {
	var navHeight = $( window ).height() - 40;
		  if ($(window).scrollTop() > navHeight) {
			$('.logoHeader').hide();
			$('.infoAdd').hide();
			$('nav').addClass('fixed-top');
			$('.navbar-brand').removeClass('d-none');
			$('.navbar-brand').addClass('d-block');
			$('.redesComunidad').addClass('fixed-redes');
			
		  }
		  else {
			$('.logoHeader').show();
			$('.infoAdd').show();
			$('nav').removeClass('fixed-top');
			$('.navbar-brand').removeClass('d-block');
			$('.navbar-brand').addClass('d-none');
			$('.redesComunidad').removeClass('fixed-redes');
			// $('.radio').removeClass('d-none');
		  }
	 });
 });