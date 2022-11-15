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
			$('#mierda').stop().fadeIn(100); 
			$('#mierda').css({
				'position':'fixed',
				'top':'0',
				'left':'0',
				'width':'100%',
				'z-index':'999'
			})
			
		  }
		  else {
			$('#mierda').stop().fadeOut(50); 
			$('#mierda').css({
				'position':'static'
			})
		  }

	
		
	 });
 });