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

		// if( $(window).width() >= 1440 ){
			// 492.5
			// if ( $(window).scrollTop() > 100 ) {
			// 	$('.header__goup').css({
			// 		'position':'fixed',
			// 		'top':'0',
			// 		'left':'0',
			// 		'width':'100%',
			// 		'z-index':'999'
			// 	})
			// 	$('#logo').show();
			// }else {
			// 	$('.header__goup').css({
			// 		'position':'static'
			// 	})
			// 	$('#logo').hide();
			// }

			if ( $(window).scrollTop() > 100 ) {
				$('#contentHome').css({
					'padding-top':'387px'
				})
				$('#contentPost').css({
					'padding-top':'387px'
				})
				$('#brandAdds').css({
					'top':'-349px'
				})
				$('#logo').show();
			}else {
				$('#contentPost').css({
					'padding-top':'460px'
				})
				$('#contentHome').css({
					'padding-top':'460px'
				})
				$('#brandAdds').css({
					'top':'0'
				})
				$('#logo').hide();
			}
	
		
	 });

	 $("#top").hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#top').first().fadeIn("slow");

            } else {
                $('#top').fadeOut("slow");
            }
        });

        $('#top').click(function () {
            $('body,html').animate({scrollTop: 0}, 800);
            // return false;
        });
 });