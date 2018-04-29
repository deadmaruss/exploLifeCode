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

/*
$(document).ready(function(){
			$('.newButton').hover(function() {
				$(".line").animate({width: '80px'});
				$(".buttonText").animate({left: '70px'})
			},
			function() {
				$(".line").animate({width: oldWidth});
				$(".buttonText").animate({right: '70px'})
			});
});
*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}