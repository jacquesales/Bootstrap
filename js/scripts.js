$(document).ready(function(){

	//Progress bar
	let containerA = document.getElementById("circleA");

	let circleA = new ProgressBar.Circle(containerA, {
		color: '#64DAF9',
		strokeWidth: 8,
		duration: 1400,
		from:{ color: '#AAA'},
		to:{ color: '#65DAF9'},
		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 85);
			circle.setText(value);
		}
	});	

	let containerB = document.getElementById("circleB");

	let circleB = new ProgressBar.Circle(containerB, {
		color: '#64DAF9',
		strokeWidth: 8,
		duration: 1700,
		from:{ color: '#AAA'},
		to:{ color: '#65DAF9'},
		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 197);
			circle.setText(value);
		}
	});

	let containerC = document.getElementById("circleC");

	let circleC = new ProgressBar.Circle(containerC, {
		color: '#64DAF9',
		strokeWidth: 8,
		duration: 2000,
		from:{ color: '#AAA'},
		to:{ color: '#65DAF9'},
		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 28);
			circle.setText(value);
		}
	});

	let containerD = document.getElementById("circleD");

	let circleD = new ProgressBar.Circle(containerD, {
		color: '#64DAF9',
		strokeWidth: 8,
		duration: 2300,
		from:{ color: '#AAA'},
		to:{ color: '#65DAF9'},
		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 4159);
			circle.setText(value);
		}
	});

	// loader quando usuário chega no elemento 
	let dataAreaOffset = $('#data-area').offset();
	let stop = 0;

	$(window).scroll(function(e){

		let scroll = $(window).scrollTop();
		if (scroll > (dataAreaOffset.top - 600) && stop == 0) {

			circleA.animate(1.0);
			circleB.animate(1.0);
			circleC.animate(1.0);
			circleD.animate(1.0);

			stop = 1;
		}
	});	

	//Parallax
	setTimeout(function(){
		$('#data-area').parallax({imageSrc: 'img/cityparallax.jpg'});
		$('#apply-area').parallax({imageSrc: 'img/cityparallax.jpg'});

	}, 250);


	// Filtro do portfólio

	$('.filter-btn').on('click', function(){

		let type = $(this).attr('id');
		let boxes = $('.project-box');

		$('.main-btn').removeClass('active');
		$(this).addClass('active');

		if (type == 'dev-btn'){
			eachBoxes('dev', boxes);
		}else if(type == 'dsg-btn'){
			eachBoxes('dsg', boxes);
		}else if(type == 'seo-btn'){
			eachBoxes('seo', boxes);
		}else if(type == 'sec-btn'){
			eachBoxes('sec', boxes);
		}else{
			eachBoxes('all', boxes);
		}	
	});

	function eachBoxes(type, boxes){
		if (type == 'all'){
			$(boxes).fadeIn();
		}else{
			$(boxes).each(function(){
				if (!$(this).hasClass(type)){
					$(this).fadeOut('slow');
				}else{
					$(this).fadeIn();
				}
			});
		}
	}

	//Scroll para seções
	let navBar = $('.nav-item');

	let bannerSection = $('#mainSlider');
	let aboutSection = $('#about-area');
	let servicesSection = $('#services-area');
	let teamSection = $('#team-area');
	let portfolioSection = $('#portfolio-area');
	let contactSection = $('#contact-area');

	let scrollto = '';
	$(navBtn).click(function(){
		let btnId = $(this).attr('id');
		console.log(btnId);

		if (btnId == 'about-menu') {
			scrollto = aboutSection;
		}else if(btnId == 'services-menu'){
			scrollto = servicesSection;
		}else if(btnId == 'team-menu'){
			scrollto = teamSection;
		}else if (btnId == 'portfolio-menu'){
			scrollto = portfolioSection;
		}else if (btnId == 'contact-menu'){
			scrollto == contactSection;
		}else{
			scrollto = bannerSection;
		}

		$([document.documentElement, document.body]).animate({
			scrollTop: $(scrollTo).offset().top - 70
		}, 1500);

	});
	
});