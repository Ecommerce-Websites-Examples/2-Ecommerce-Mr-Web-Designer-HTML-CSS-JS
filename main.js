$(document).ready(function () {
  $('#menu').click(function () {
    // console.log('clicked')
    $(this).toggleClass('fa-times')

    $('.navbar').toggleClass('nav-toggle')
  })

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times', 'fa-bars')

    $('.navbar').removeClass('nav-toggle')

    if ($(window).scrollTop() > 60) {
      $('header .header-2').addClass('header-active')
    } else {
      $('header .header-2').removeClass('header-active')
    }
  })
})
