(function() {
	$('.our-physicians-carousels').carousel({
	    pause:'false'
	});

	$('#op-name-carousel').on('slide', function(){
	    $('#op-img-carousel').carousel('next');
	});
})();