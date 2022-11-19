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
	console.log('Salida de la ventana-->',$(window).scrollTop())
	console.log('Salida de la ventanaxzxxxx-->',$(window).width())
	console.log('Slida',$('#logo'))
	$(window).bind('scroll', function() {

		if( $(window).width() >= 1440 ){
			// 492.5
			if ( $(window).scrollTop() > 492.5 ) {
				$('header').css({
					'position':'fixed',
					'top':'-349px',
					'left':'0',
					'width':'100%',
					'z-index':'999'
				})
				$('#logo').show();
			}else {
				$('header').css({
					'position':'static'
				})
				$('#logo').hide();
			}
		}

		if( $(window).width() === 1440 ){
			// 492.5
			if ( $(window).scrollTop() > 444.88) {
				$('header').css({
					'position':'fixed',
					'top':'-330px',
					'left':'0',
					'width':'100%',
					'z-index':'999'
				})
				$('#logo').show();
			}else {
				$('header').css({
					'position':'static'
				})
				$('#logo').hide();
			}
		}



	
		
	 });
 });