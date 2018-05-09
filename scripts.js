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
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
