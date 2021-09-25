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

  $('#first-quote').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeIn'))) {
      $(this).addClass('fadeIn');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeIn')) {
      $(this).removeClass('fadeIn');
    }
  });

  $('#second-quote').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeIn'))) {
      $(this).addClass('fadeIn');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeIn')) {
      $(this).removeClass('fadeIn');
    }
  });

  $('#first').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#second').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#third').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#fourth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#fifth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#sixth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#seventh').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#eigth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#ninth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#tenth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#eleventh').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#twelveth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#thirteenth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

  $('#fourteenth').each(function () {
    if ($(window).scrollTop() + $(window).height() >= $(this).position().top
      && $(window).scrollTop() < $(this).position().top + $(this).height() && !($(this).hasClass('fadeInUp'))) {
      $(this).addClass('fadeInUp');
    } else if (($(window).scrollTop() + $(window).height() <= $(this).position().top - 200
      || $(window).scrollTop() > $(this).position().top + $(this).height()) && $(this).hasClass('fadeInUp')) {
      $(this).removeClass('fadeInUp');
    }
  });

});