
$(document).ready(function () {

  var screenWidth = $(window).width();


  var calculatedPadLeft = null;
  if (screenWidth > 1400) {
    var calculatedPadLeft = (screenWidth - 1320) / 2;
  } else if (screenWidth >= 1200 & screenWidth <= 1400) {
    var calculatedPadLeft = (screenWidth - 1140) / 2;
  } else {
    var percentLeft = ($("body").width() * 95) / 100;
    var calculatedPadLeft = ($("body").width() - percentLeft) / 2;
  }
  $(".outOfCNPadLeft").css('padding-left', calculatedPadLeft);


});


var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      animateSlide(this.slides[this.activeIndex]);
    },
    slideChangeTransitionStart: function () {
      this.slides.forEach(slide => {
        slide.querySelectorAll('.slide-title, .slide-subtitle, .main-btn').forEach(
          el => {
            el.classList.remove('animate-in');
          });
      });
      animateSlide(this.slides[this.activeIndex]);
    }
  }
});

function animateSlide(slide) {
  const title = slide.querySelector('.slide-title');
  const subtitle = slide.querySelector('.slide-subtitle');
  const btn = slide.querySelector('.main-btn');

  if (title) title.classList.add('animate-in');
  if (subtitle) subtitle.classList.add('animate-in');
  if (btn) btn.classList.add('animate-in');
}

var toggles = document.querySelectorAll(".c-hamburger");

for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
};

function toggleHandler(toggle) {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.classList.contains("is-active") === true) {
      this.classList.remove("is-active");
      $('.open').removeClass('oppenned');
    } else {
      this.classList.add("is-active");
      $(".open").addClass('oppenned');
    }
  });
}
$(".sub-menu li a").click(function (event) {
  $(".open").removeClass('oppenned');
  $(".c-hamburger").removeClass('is-active');
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    const toggles = document.querySelectorAll(".footer-toggle");

    toggles.forEach(toggle => {
      toggle.addEventListener("click", function () {
        const wrapper = toggle.nextElementSibling;
        const icon = toggle.querySelector(".toggle-icon");

        wrapper.classList.toggle("show");
        icon.classList.toggle("rotate");
      });
    });
  }
});

function updateBackgroundHeight() {
  const img = document.getElementById("certifiImage");
  const bg = document.getElementById("bgBox");

  if (!img) {
   
    return;
  }

  if (!bg) {
   
    return;
  }

  const largeScreen = window.matchMedia('(min-width: 651px)');
  if (!largeScreen.matches) {
    bg.style.height = '';
    return;
  }

  const setHeight = () => {
    if (img && bg) {
      bg.style.height = img.offsetHeight + "px";
      
    }
  };

  if (img.complete) {
    setHeight();
  } else {
    img.addEventListener("load", setHeight);
  }
}

window.addEventListener("load", updateBackgroundHeight);
window.addEventListener("resize", updateBackgroundHeight);

var productSwiper = new Swiper(".productSwiperMain", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  touchStartPreventDefault: false,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-main-product-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: " .swiper-product-main-button-next",
  },
});

var productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  touchStartPreventDefault: false,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-product-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-product-button-next",
  },
});

var productSwiper = new Swiper(".productSwiperInner", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  speed: 1000,
  touchStartPreventDefault: false,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-inner",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-inner",
  },
});

var gallerySwiper = new Swiper(".gallerySwiper", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 0,
  loopFillGroupWithBlank: true,
  loopAdditionalSlides: 2,
  speed: 1000,
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-gallery-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-gallery-button-next",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
const buttons = document.querySelectorAll(".tab-button");
const panes = document.querySelectorAll(".tab-pane");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    panes.forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.getAttribute("data-target");
    document.querySelector(target).classList.add("active");
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const openLinks = document.querySelectorAll('.available-diecut');
  const closeBtn = document.getElementById('closeModal');


  openLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('show');
      }, 10);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const content = modal.querySelector('.modal-content');
      content.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 100);
    });
  }
  window.addEventListener('click', e => {
    if (e.target === modal) {
      const content = modal.querySelector('.modal-content');
      content.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    }
  });
});


//  const floatItems = document.querySelectorAll('.floating-anim');
//   const states = Array.from(floatItems).map(() => ({
//     posX: 0,
//     posY: 0,
//     speedX: (Math.random() * 1.5 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
//     speedY: (Math.random() * 0.5) * (Math.random() > 0.5 ? 1 : -1),
//   }));

//   const maxX = 200;
//   const maxY = 50;
//   let animating = false;
//   let animFrameId = null;

//   function animate() {
//     // لو الحركة متوقفة، ما نكمّل
//     if (!animating) return;

//     floatItems.forEach((el, i) => {
//       const s = states[i];
//       s.posX += s.speedX;
//       s.posY += s.speedY;

//       if (s.posX > maxX || s.posX < -maxX) s.speedX *= -1;
//       if (s.posY > maxY || s.posY < -maxY) s.speedY *= -1;

//       el.style.transform = `translate(${s.posX}px, ${s.posY}px)`;
//     });

//     // استدعاء الفريم التالي فقط لو الحركة شغّالة
//     if (animating) {
//       animFrameId = requestAnimationFrame(animate);
//     }
//   }

//   function startAnimation() {
//     if (!animating) {
//       animating = true;
//       animate();
//     }
//   }

//   function stopAnimation() {
//     animating = false;
//     if (animFrameId) {
//       cancelAnimationFrame(animFrameId);
//       animFrameId = null;
//     }
//     // ترجع الصور لمكانها
//     floatItems.forEach(el => {
//       el.style.transform = 'translate(0,0)';
//     });
//   }

//   // تشغيل/إيقاف عند السكرول
//   window.addEventListener('scroll', () => {
//     const trigger = document.querySelector('.container-lg');
//     const rect = trigger.getBoundingClientRect();
//     const atTop = window.scrollY === 0;

//     // تشغيل فقط لو العنصر ظاهر ومش في التوب
//     if (!atTop && rect.top < window.innerHeight && rect.bottom > 0) {
//       startAnimation();
//     } else {
//       stopAnimation();
//     }
//   });