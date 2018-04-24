let oldWidth = $('.line').css('width');

$(document).ready(function(){
			$('.newButton').hover(function() {
				$(".line").animate({
            width: '100px'
			})
			},
			function() {
				$(".line").animate({
			width: oldWidth
			});
			});
});