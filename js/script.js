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
  nextArrow: '<button class="btn-arrow btn-right-app fas fa-arrow-right"><span class="screen-reader-only">Next photo</span></button>',
  responsive: [{
      breakpoint: 992,
      settings: {
        centerPadding: '180px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '120px'
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 320,
      settings: {
        centerPadding: '0px'
      }
    }
  ]
})


$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  const videos = document.querySelectorAll('.slider video');

  videos.forEach((e) => {
    e.pause();
    setTimeout(() => e.nextElementSibling.classList.remove(`hide`), 1500);
    e.controls = false;
  })
});

const videoSlider = document.getElementById('video-slider');

videoSlider.addEventListener('click', function (e) {
  if (e.target.classList.contains('video-button')) {
    const video = e.target.previousElementSibling;
    e.target.classList.add('hide');
    video.play();
    video.controls = true;
  }
  if (e.target.tagName == `VIDEO`) {
    e.target.controls = false;
    e.target.pause();
    e.target.nextElementSibling.classList.remove(`hide`);
    e.target.addEventListener(`ended`, function () {
      e.target.load();
      e.target.nextElementSibling.classList.remove(`hide`);
      e.target.controls = false;
    })
  }
});