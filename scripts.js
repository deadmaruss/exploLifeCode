let oldWidth = $('.line').css('width')

$(document).ready(function () {
  $('.newButton').hover(function () {
    $('.line').animate({
      width: '100px'
    })
  },
  function () {
    $('.line').animate({
      width: oldWidth
    })
  })
})

function dropdownButton () {
  document.getElementById('dropdownMenu').classList.toggle('show')
  document.getElementById('slideOneFiller').classList.toggle('hide')
  buttonAnimate()
  
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
	var slideText = document.getElementById('slideOneFiller')
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
		slideText.classList.remove('hide')
		buttonAnimate()
      }
    }
  }
}

function buttonAnimate () {
  if ($('.dropbtn').css('right') == '0px' ) {
    $('.dropbtn').animate({
      right: '100px'
    })
  } else {
    $('.dropbtn').animate({
      right: '0px'
    })
  }
}
