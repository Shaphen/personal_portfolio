// const scrollElement = document.querySelectorAll("#first-project");

// $(scrollElement).each(function () {
//     if ($(window).scrollTop() + $(window).height() >= $(this).position().top
//       && $(window).scrollTop() < $(this).position().top + $(this).height()) {
//       $(this).addClass('fade-in-up');
//     } else if ($(this).hasClass('fade-in-up')) {
//       $(this).removeClass('fade-in-up');
//     }
// });

const scrollOffset = 100;
 
const scrollElement = document.querySelector(".js-scroll");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})