/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
	breakpoints({
		xlarge:   [ '1281px',  '1680px' ],
		large:    [ '981px',   '1280px' ],
		medium:   [ '737px',   '980px'  ],
		small:    [ '481px',   '736px'  ],
		xsmall:   [ null,      '480px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-mobile');
	else {

		breakpoints.on('>medium', function() {
			$body.removeClass('is-mobile');
		});

		breakpoints.on('<=medium', function() {
			$body.addClass('is-mobile');
		});

	}

	// Scrolly.
	$('.scrolly')
		.scrolly({
			speed: 1500,
			offset: $header.outerHeight()
		});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// Header.
	if ($banner.length > 0
	&&	$header.hasClass('alt')) {

		$window.on('resize', function() { $window.trigger('scroll'); });

		$banner.scrollex({
			bottom:		$header.outerHeight() + 1,
			terminate:	function() { $header.removeClass('alt'); },
			enter:		function() { $header.addClass('alt'); },
			leave:		function() { $header.removeClass('alt'); }
		});

	}

	// modals
	const dodgeModal = document.getElementById("dodge-modal-box")
	const dodgeModalContent = document.getElementById("dodge-modal-content")
	const dodgeImage = document.getElementById("dodge")
	const dodgeCloseButton = document.getElementById("dodge-modal-close")

	dodgeImage.onclick = function() {
		dodgeModal.style.display = "block"
	}

	dodgeCloseButton.onclick = function () {
		dodgeModal.style.display = "none"
	}

	dodgeModal.onclick = function () {
		dodgeModal.style.display = "none"
	}

	dodgeModalContent.addEventListener('click', dontClose);
	function dontClose(e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}

	const badcordModal = document.getElementById("badcord-modal-box")
	const badcordModalContent = document.getElementById("badcord-modal-content")
	const badcordImage = document.getElementById("badcord")
	const badcordCloseButton = document.getElementById("badcord-modal-close")

	badcordImage.onclick = function() {
		badcordModal.style.display = "block"
	}

	badcordCloseButton.onclick = function () {
		badcordModal.style.display = "none"
	}

	badcordModal.onclick = function () {
		badcordModal.style.display = "none"
	}

	badcordModalContent.addEventListener('click', dontClose);
	function dontClose(e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}

	const aniwikiModal = document.getElementById("aniwiki-modal-box")
	const aniwikiModalContent = document.getElementById("aniwiki-modal-content")
	const aniwikiImage = document.getElementById("aniwiki")
	const aniwikiCloseButton = document.getElementById("aniwiki-modal-close")

	aniwikiImage.onclick = function() {
		aniwikiModal.style.display = "block"
	}

	aniwikiCloseButton.onclick = function () {
		aniwikiModal.style.display = "none"
	}

	aniwikiModal.onclick = function () {
		aniwikiModal.style.display = "none"
	}

	aniwikiModalContent.addEventListener('click', dontClose);
	function dontClose(e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}


	const contactModal = document.getElementById("contact-modal-box")
	const contactModalContent = document.getElementById("contact-modal-content")
	const contact1 = document.getElementById("contact")
	const contact2 = document.getElementById("contact-intro")
	const contact3 = document.getElementById("contact-skills")
	const contactCloseButton = document.getElementById("contact-modal-close")

	contact1.onclick = function() {
		contactModal.style.display = "block"
	}

	contact2.onclick = function() {
		contactModal.style.display = "block"
	}
	contact3.onclick = function() {
		contactModal.style.display = "block"
	}

	contactCloseButton.onclick = function () {
		contactModal.style.display = "none"
	}

	contactModal.onclick = function () {
		contactModal.style.display = "none"
	}

	contactModalContent.addEventListener('click', dontClose);
	function dontClose(e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
		return false;
	}

})(jQuery);