// feather init
feather.replace();

// slick init
  $('.banner__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    // autoplay: true,
    speed: 500,
    dots: true,
    fade: true,
    
  });

// dynamic year
const fullYear = document.querySelector('.fullyear');

fullYear.innerHTML = new Date().getFullYear();

