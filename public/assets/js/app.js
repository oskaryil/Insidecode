$(document).ready(function() {

	var navHeight = $(".nav").height();
	var $window = $(window);
	var windowH = $window.height();


	console.log(navHeight);
	console.log(windowH);

	$("body").css("padding-top", navHeight);

	$('.nav-list').css('margin-top', navHeight/2);

	$('.jumbotron').css('height', windowH);

	$('.jumbotron-header').css('margin-top', windowH/2-100);


});