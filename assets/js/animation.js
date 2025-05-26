document.addEventListener('DOMContentLoaded', function () {
  const sliderItems = document.querySelector('.text-slider-items');
  if (sliderItems) {
    const strings = sliderItems.innerText.split(',');
    new Typed('.text-slider', {
      strings: strings,
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
  }

  // Tab Switching Logic
  const tabLinks = document.querySelectorAll('.tab-links');
  const tabContents = document.querySelectorAll('.tab-contents');

  tabLinks.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabLinks.forEach(t => t.classList.remove('active-link'));
      tabContents.forEach(c => c.classList.remove('active-tab'));

      tab.classList.add('active-link');
      tabContents[index].classList.add('active-tab');
    });
  });
});
