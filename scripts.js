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
  document.getElementById('slideOne').classList.toggle('hide')
  buttonAnimate()
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var slideText = document.getElementById('slideOne')
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
  if ($('.dropbtn').css('right') == '0px') {
    $('.dropbtn').animate({
      right: '100px'
    })
  } else {
    $('.dropbtn').animate({
      right: '0px'
    })
  }
}

function gotoSlideOne() {
  $('#slideTwo').fadeOut(1)
  $('#slideThree').fadeOut(1)
  $('#slideOne').fadeIn('slow')
  $("#buttonOne").css("background-color", "white")
  $("#buttonTwo").css("background-color", "black")
  $("#buttonThree").css("background-color", "black")
  $("html").css({"background":"url(img/background.png) no-repeat center center fixed", "background-size":"cover"})

}

function gotoSlideTwo() {
  $('#slideOne').fadeOut(1)
  $('#slideThree').fadeOut(1)
  $('#slideTwo').fadeIn('slow')
  $("#buttonOne").css("background-color", "black")
  $("#buttonTwo").css("background-color", "white")
  $("#buttonThree").css("background-color", "black")
  $("html").css({"background":"url(img/background1.jpg) no-repeat center center fixed", "background-size":"cover"})
}

function gotoSlideThree() {
  $('#slideTwo').fadeOut(1)
  $('#slideOne').fadeOut(1)
  $('#slideThree').fadeIn('slow')
  $("#buttonOne").css("background-color", "black")
  $("#buttonTwo").css("background-color", "black")
  $("#buttonThree").css("background-color", "white")
  $("html").css({"background":"url(img/baner-home-1.jpg) no-repeat center center fixed", "background-size":"cover"})
}
