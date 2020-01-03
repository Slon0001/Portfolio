(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})
  
        
		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', '50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		/* ---------------------------------------------- /*
		 * Google Map
		/* ---------------------------------------------- */

		$(function() {
		    // Snazzy Map Style - https://snazzymaps.com/style/8097/wy
		    var mapStyle = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

		    // Create the map
		    var map = new google.maps.Map($('.map-canvas')[0], {
		        zoom: 17,
		        styles: mapStyle,
		        scrollwheel:false,
		        center: new google.maps.LatLng(52.034653, 23.107566)
		    });

		    // Add a custom marker
		    var markerIcon = {
		        path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
		        fillColor: '#e25a00',
		        fillOpacity: 0.95,
		        scale: 3,
		        strokeColor: '#fff',
		        strokeWeight: 3,
		        anchor: new google.maps.Point(12, 24)
		    };
		    var marker = new google.maps.Marker({
		        map: map,
		        icon: markerIcon,
		        position: new google.maps.LatLng(52.034653, 23.107566)
		    });

		    // Set up handle bars
		    var template = Handlebars.compile($('#marker-content-template').html());

		    // Set up a close delay for CSS animations
		    var info = null;
		    var closeDelayed = false;
		    var closeDelayHandler = function() {
		        $(info.getWrapper()).removeClass('active');
		        setTimeout(function() {
		            closeDelayed = true;
		            info.close();
		        }, 300);
		    };
		    // Add a Snazzy Info Window to the marker
		    info = new SnazzyInfoWindow({
		        marker: marker,
		        wrapperClass: 'custom-window',
		        offset: {
		            top: '-72px'
		        },
		        edgeOffset: {
		            top: 50,
		            right: 60,
		            bottom: 50
		        },
		        border: false,
		        closeButtonMarkup: '<button type="button" class="custom-close">&#215;</button>',
		        content: template({
		            title: 'Piekna 7',
		            subtitle: 'Biała Podlaska, Lubelskie (Polska)',
		            bgImg: 'https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?dpr=1&auto=format&fit=crop&w=800&h=350&q=80&cs=tinysrgb&crop=',
		            body: '<p class="Didona_map">Контакты в Польше:</p>' +
		                  '<p class="Garamond_map"><i class="fa" aria-hidden="true"><img src="assets/images/phone-copy.png" class="phone"></i> +48 792 063 263</p>' +
		                  '<p class="Garamond_map schedule">пн - пт: 9.00 - 18.00</p>' +
		                  '<p class="Garamond_map"><i class="fa fa-envelope-o" aria-hidden="true"></i> akonto2@gmail.com</p>' +
		                  '<p class="Didona_map">Контакты в Украине:</p>' +
		                  '<p class="Garamond_map"><i class="fa" aria-hidden="true"><img src="assets/images/phone-copy.png" class="phone"></i> +38 095 776 98 86 ; +38 067 909 18 76' +
		                  '<p class="Garamond_map schedule">пн - пт: 9.00 - 18.00.</p>' +
		                  '<p class="Garamond_map"><i class="fa fa-envelope-o" aria-hidden="true"></i> luvar7811@gmail.com</p>' +
		                  '<p class="Garamond_map map_address">Piekna 7, Biała Podlaska,</p>'+
		                  '<p class="Garamond_map">Lubelskie (Polska)</p>'
		        }),
		        callbacks: {
		            open: function() {
		                $(this.getWrapper()).addClass('open');
		            },
		            afterOpen: function() {
		                var wrapper = $(this.getWrapper());
		                wrapper.addClass('active');
		                wrapper.find('.custom-close').on('click', closeDelayHandler);
		            },
		            beforeClose: function() {
		                if (!closeDelayed) {
		                    closeDelayHandler();
		                    return false;
		                }
		                return true;
		            },
		            afterClose: function() {
		                var wrapper = $(this.getWrapper());
		                wrapper.find('.custom-close').off();
		                wrapper.removeClass('open');
		                closeDelayed = false;
		            }
		        }
		    });
		    // Open the Snazzy Info Window
		    info.open();
		});
});

})(jQuery);