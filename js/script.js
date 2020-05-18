$('.slider').slick({
  prevArrow: '<button class="btn-arrow btn-left fas fa-arrow-left"><span class="screen-reader-only">Next video</span></button>',
  nextArrow: '<button class="btn-arrow btn-right fas fa-arrow-right"><span class="screen-reader-only">Next video</span></button>',
  centerPadding: '0',
});

$('.appearance-slider').slick({
  centerMode: true,
  slidesToShow: 1,
  centerPadding: '300px',
  prevArrow: '<button class="btn-arrow btn-left-app fas fa-arrow-left"><span class="screen-reader-only">Previous photo</span></button>',
  nextArrow: '<button class="btn-arrow btn-right-app fas fa-arrow-right"><span class="screen-reader-only">Next photo</span></button>'
})

$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  const videos = document.querySelectorAll('.slider video');

  videos.forEach((e) => {
    e.pause();
  })
});

videoSlider.addEventListener('click', function (e) {
  if (e.target.classList.contains('video-button')) {
    const video = e.target.previousElementSibling;
    e.target.classList.add('hide');
    video.play();
    video.controls = true;
  }
  if (e.target.classList.contains(`video-item`)) {
    e.target.controls = false;
    e.target.pause();
    e.target.nextElementSibling.classList.remove(`hide`);
    e.target.addEventListener(`ended`, function () {
      e.target.load();
      e.target.nextElementSibling.classList.remove(`hide`);
    })
  }
});