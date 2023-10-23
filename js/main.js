$(document).ready(function() {

	
	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function() {
        // Toggle de la clase change en el botón de hamburguesa
        $(this).toggleClass('change');

        // Mostrar u ocultar el menú principal
        $('.main-navigation').toggle('slow');

        // Siempre permitir el desplazamiento en el cuerpo después de hacer clic en el botón
        $('body').removeClass('stop-scroll');
    });

    // Cuando se hace clic en un enlace del menú
    $('.main-navigation__ul li a').on('click', function() {
        // Cerrar el menú al hacer clic en un enlace
        $('.main-navigation').hide('slow');

        // Asegurar que el botón de hamburguesa tenga la clase 'change'
        $('#myBtn').addClass('change');
    });


	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	
});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}

});