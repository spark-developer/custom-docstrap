(function($) {

	$('a').on('click',function(ev){
		var href = $(this).attr('href');
		//if external, open in a new window
		if (href.indexOf('http') == 0){
			ev.preventDefault();
			window.open(href,'_blank');
		}

	});

})(jQuery);