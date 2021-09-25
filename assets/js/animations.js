$(window).scroll(function () {

  $('#badcord').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInRight'))) {
      $(this).addClass('fadeInRight');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInRight')) {
      $(this).removeClass('fadeInRight');
    }
  });

  $('#dodge').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInRight'))) {
      $(this).addClass('fadeInRight');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInRight')) {
      $(this).removeClass('fadeInRight');
    }
  });
  
});