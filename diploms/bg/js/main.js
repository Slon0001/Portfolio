

(function(){

	var app = {
		initialize : function() {
			this.setUpListeners();
			this.updateResult();
		},

		setUpListeners : function() {
			//radius
			$('#increase-radius').on('click', $.proxy(this.increaseRadius, this));
			$('#reduce-radius').on('click', $.proxy(this.reduceRadius, this));
			//color
			$('#bg-color').on('change', $.proxy(this.bgChangeColor, this));
			$('#border-color').on('change', $.proxy(this.brChangeColor, this));

		},

		create : $('.create'),
		maxRadius : 20,
		minRadius : 0,

		increaseRadius: function () {

			var currentRadius = this.create.css('border-radius'),
				step = $('#step').val(),
				newRadius = (parseInt(currentRadius) + parseInt(step));

				if(newRadius > this.maxRadius){
					newRadius = this.maxRadius,
					$('#increase-radius').addClass('disabled')
				}

				if(newRadius > this.minRadius){
					$('#reduce-radius').removeClass('disabled');
				}

				this.create.css({
					'border-radius' : newRadius
				});

				this.updateResult();

		},

		reduceRadius: function () {

			var currentRadius = this.create.css('border-radius'),
				step = $('#step').val(),
				newRadius = (parseInt(currentRadius) - parseInt(step));

				if(newRadius <this. minRadius){
					newRadius = this.maxRadius,
					$('#reduce-radius').addClass('disabled')
				}

				if(newRadius < this.maxRadius){
					$('#increase-radius').removeClass('disabled');
				}

				this.create.css({
					'border-radius' : newRadius
				});

				this.updateResult();
		},

		bgChangeColor : function () {
			var newRadius = '#' + $('#bg-color').val();
			this.create.css({
				'background-color' : newRadius
			});
			this.updateResult();
		},

		brChangeColor : function () {
			var newRadius = '#' + $('#border-color').val();
			this.create.css({
				'border-color' : newRadius
			});
			this.updateResult();
		},

		updateResult : function() {

			var borderRad = this.create.css('border-radius'),
				bgColor = this.create.css('background-color'),
				brColor = this.create.css('border-color');
				codeResult = $('#result');

			codeResult.text(
				'-moz-border-radius:' + borderRad + ';\n' + 
				'-webkit-border-radius:' + borderRad + ';\n' + 
				'border-radius:' + borderRad + ';\n' + 
				'border-color:' + brColor + ';\n' +
				'background-color:' + bgColor + ';'
			);
		}
	}
	app.initialize();










	// var increaseRad = $('#increase-radius'),
	// 	reduceRad = $('#reduce-radius'),
	// 	create = $('.create'),
	// 	maxRadius = 20,
	// 	minRadius = 0,
	// 	bgColorInp = $('#bg-color'),
	// 	brColorInp = $('#border-color'),
	// 	codeResult = $('#result');

	// 	increaseRad.on('click', function(){
			
	// 		var currentRadius = create.css('border-radius'),
	// 			step = $('#step').val(),
	// 			newRadius = (parseInt(currentRadius) + parseInt(step));

	// 			if(newRadius > maxRadius){
	// 				newRadius = maxRadius,
	// 				$(this).addClass('disabled')
	// 			}

	// 			if(newRadius > minRadius){
	// 				reduceRad.removeClass('disabled');
	// 			}

	// 			create.css({
	// 				'border-radius' : newRadius
	// 			});

	// 			updateResult();

	// 	});

	// 	reduceRad.on('click', function(){
	// 		var currentRadius = create.css('border-radius'),
	// 			step = $('#step').val(),
	// 			newRadius = (parseInt(currentRadius) - parseInt(step));

	// 			if(newRadius < minRadius){
	// 				newRadius = maxRadius,
	// 				$(this).addClass('disabled')
	// 			}

	// 			if(newRadius < maxRadius){
	// 				increaseRad.removeClass('disabled');
	// 			}

	// 			create.css({
	// 				'border-radius' : newRadius
	// 			});
	// 			updateResult();
	// 	});

	// 	bgColorInp.on('change', function(){
	// 		var newRadius = '#' + $(this).val();
	// 		create.css({
	// 			'background-color' : newRadius
	// 		});
	// 		updateResult();
	// 	});

	// 	brColorInp.on('change', function(){
	// 		var newRadius = '#' + $(this).val();
	// 		create.css({
	// 			'border-color': newRadius
	// 		});
	// 		updateResult();
	// 	});


	// 	var updateResult = function(){

	// 		var borderRad = create.css('border-radius'),
	// 			bgColor = create.css('background-color'),
	// 			brColor = create.css('border-color');

	// 		codeResult.text(
	// 			'-moz-border-radius:' + borderRad + ';\n' + 
	// 			'-webkit-border-radius:' + borderRad + ';\n' + 
	// 			'border-radius:' + borderRad + ';\n' + 
	// 			'border-color:' + brColor + ';\n' +
	// 			'background-color:' + bgColor + ';'
	// 			);
	// 	}

	// 	updateResult();

}());