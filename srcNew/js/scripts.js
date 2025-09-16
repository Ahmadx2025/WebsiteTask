
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
document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".sub-sheet").forEach(sub => {
    sub.style.display = "none";
  });

  // وظيفة مشتركة لفتح/إغلاق القائمة والسهم
  function toggleSub(container) {
    const sub = container.querySelector(".sub-sheet");
    const icon = container.querySelector(".toggle-icon");

    if (sub) {
      sub.style.display = (sub.style.display === "none" || sub.style.display === "")
        ? "block"
        : "none";
    }

    if (icon) {
      icon.style.transition = "transform 0.3s";
      icon.style.transform = (icon.style.transform === "rotate(180deg)")
        ? "rotate(0deg)"
        : "rotate(180deg)";
    }
  }

  // الضغط على السهم
  document.querySelectorAll(".toggle-icon").forEach(icon => {
    icon.addEventListener("click", function (e) {
      e.preventDefault();
      const container = this.closest(".footer-links");
      toggleSub(container);
    });
  });

  // الضغط على اسم الـ Datasheet
  document.querySelectorAll(".datasheet-toggle").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const container = this.closest(".footer-links");
      toggleSub(container);
    });
  });

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
      spaceBetween: 10
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
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  navbar.style.transition = 'transform 1s ease';

  let lastY = window.scrollY;

  window.addEventListener('scroll', function () {
    if (window.innerWidth >= 1000) {
      navbar.style.transform = '';
      lastY = window.scrollY;
      return;
    }
    if (window.scrollY > lastY) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }

    lastY = window.scrollY;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const path = document.getElementById("flyPath");
  const planeGrp = document.getElementById("planeGrp");

  if (!path || !planeGrp) {

    return;
  }

  let pathLength;
  try {
    pathLength = path.getTotalLength();
  } catch (e) {
    return;
  }
  const SPEED = 4;
  const START_AT = 0.4;
  const STOP_AT = 0.85;
  const STOP_PX = null;

  const clamp01 = v => Math.min(Math.max(v, 0), 1);

  const startLen = clamp01(START_AT) * pathLength;
  let stopLen = (STOP_PX != null)
    ? Math.min(Math.max(STOP_PX, startLen + 1), pathLength)
    : Math.max(clamp01(STOP_AT) * pathLength, startLen + 1);


  function updatePlane() {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    let t = window.scrollY / maxScroll;
    t = clamp01(t) * SPEED;
    if (t > 1) t = 1;

    const span = stopLen - startLen;
    let distance = startLen + span * t;
    if (distance >= stopLen) distance = stopLen;


    if (t > 0 || distance === stopLen) planeGrp.classList.add("visible");
    const point = path.getPointAtLength(distance);
    const ahead = path.getPointAtLength(Math.min(distance + 2, pathLength));
    const angle = Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180 / Math.PI;

    planeGrp.setAttribute("transform", `translate(${point.x},${point.y}) rotate(${angle})`);
  }
  window.addEventListener("scroll", () => requestAnimationFrame(updatePlane));
  window.addEventListener("resize", () => requestAnimationFrame(updatePlane));
  updatePlane();
});







// === بيانات ===
var jordan = [31.141040, 35.810382];

var outerHotspotsData = {
  "Germany": [51.815924, 10.534272],
  "Spain": [40.463667, -3.749220],
  "Italy": [41.373025, 14.876288],
  "Greece": [37.389626, 22.674308],
  "Netherlands": [52.713091, 4.809033],
  "Poland": [52.069167, 19.480000],
  "Finland": [64.063205, 26.163601],
  "UK": [54.176112, -1.926066],
  "Ireland": [53.608070, -7.703752],
  "Denmark": [55.317970, 9.058510],
  "Belgium" : [50.640280, 4.666714],
  "Switzerland": [46.818188, 8.227512],
  "Sweden": [62.701858, 15.346351],
  "France": [46.603354, 1.888334],
  "Croatia": [45.100000, 15.200000],
  "Czech Republic": [49.817492, 15.472962],
  "Hungary": [47.162494, 19.503304],
  "Norway": [60.472024, 8.468946],
  "Republic of Serbia": [44.016521, 21.005859],
  "New Zealand": [-40.900557, 174.885971],
  "Argentina": [-38.416097, -63.616672],
  "Russia": [61.948324, 84.7105177],
  "Turkey": [38.963745, 35.243322],
  "Haiti": [18.971187, -72.285215],
  "Kenya": [-0.023559, 37.906193],
  "Rwanda": [-1.940278, 29.873888],
  "United Republic of Tanzania": [-6.369028, 34.888822],
  "Benin": [9.307690, 2.315834],  
  "Burkina Faso": [12.238333, -1.561593],
  "Mali": [17.570692, -3.996166],
  "Mauritania": [21.007890, -10.940835],
  "Niger": [17.607789, 8.081666],
  "Togo": [8.619543, 0.824782],
  "Ivory Coast": [7.539989, -5.547080],
  "Cameroon": [7.369722, 12.354722],
  "Central African Republic": [6.611110, 20.939444],
  "Ghana ": [7.946527, -1.023194],
  "Gambia": [13.527904, -15.371503],
  "Senegal": [14.497401, -14.452362],
  "Gabon": [-0.803689, 11.609444],
  "Somalia": [5.152149, 46.199616],
  "Pakistan ": [30.375321, 69.345116],
  "Saudi Arabia": [23.885942, 45.079162],
  "Palastine": [31.509739, 34.746673],
  "Egypt": [26.820553, 30.802498],
  "Iraq": [33.223191, 43.679291],
  "Lebanon": [33.854721, 35.862285],
  "Tunisia": [33.886917, 9.537499],
  "Morocco": [31.791702, -7.092620],
  "United Arab Emirates": [23.424076, 53.847818],
  "Yemen": [15.552727, 48.516388]
};

var colors = {
  "USA": "#ff4444",
  "EU": "#3366ff",
  "India": "#33cc33",
  "China": "#ff9900",
  "Jordan": "#006400",
  "Spain": "#800080"
};

var innerHotspotsData = {
  "Spain": [
   { pos: [41.919833, 3.148461], name: "FACTIS, S.A.", web:"www.milan.es"},
   { pos: [41.471825, 2.021879], name: "JOVI S. A.", web:"www.jovi.es"},
   { pos: [39.019466, -1.872572], name: "MARKO PAPER S.P..S.L.", web:"www.makropaper.com"},
   { pos: [41.358149, 2.127946], name: "CARIOCA IBERIA S.A.U.", web:"www.carioca.com"},
   { pos: [36.717454, -4.444829], name: "Comercial del Sur de Papelería, S.L.", web:"www.cspapeleria.com"}
  ],
  "Italy": [
   { pos: [45.205395, 7.641132], name: "Borgione Centro Didattico Srl", web:"www.borgione.it"},
   { pos: [45.147347, 7.753648], name: "CARIOCA S.P.A.", web:"www.carioca.com"},
   { pos: [41.272737, 16.391826], name: "Giodicart Group Ltd", web:"www.gruppogiodicart.it"},
   { pos: [45.486064, 11.936271], name: "Morocolor Italia S.p.A.", web:"www.morocolor.it"},
  ],
  "Greece": [
   { pos: [37.880680, 23.879088], name: "ANTONIOU S.A. - TYPOTRUST", web:"www.typotrust.gr"},
   { pos: [37.950977, 23.644871], name: "EMPOROHARTIKI", web:"www.ferousis.gr"},
  ],
  "Netherlands": [
   { pos: [52.319344, 5.621432], name: "Havo bv", web:"www.havo.com"},
   { pos: [51.558679, 5.092364], name: "High5 Products BV", web:"www.high5products.com"},
   { pos: [52.209571, 6.822561], name: "SES Creative", web:"www.ses-creative.com"}
  ],
  "Poland": [
   { pos: [52.407598, 16.788488], name: "TOMA Sp. z o.o.", web:"www.toma.com.pl"}
  ],
  "Finland": [
   { pos: [60.424507, 25.192420], name: "HANART Oy", web:"www.hanart.fi"}
  ],
  "Germany": [
   { pos: [48.962627, 10.180972], name: "Arnulf Betzold GmbH ", web:"www.betzold.de"},
   { pos: [47.757248, 11.620045], name: "Lupus GmbH", web:"www.lupus.de"},
   { pos: [48.030234, 11.584365], name: "Bleispitz GmbH", web:"www.bleispitz.de"},
   { pos: [48.322049, 10.013763], name: "Escha Reiner Schaudt e.K.", web:"www.escha.com"},
   { pos: [51.889097, 11.046294], name: "neoGRÜN GbR Dr. A. Hilo & E. Nickel", web:"www.neogruen.com"},
   { pos: [49.516597, 11.035917], name: "STAEDTLER", web:"www.staedtler.com"},
   { pos: [49.138034, 9.228010], name: "Baier & Schneider GmbH & Co. KG", web:"www.brunnen.com"},
  ],
   "UK": [
   { pos: [53.047364, -2.991812], name: "Nexus The Educators Connection Limted", web:"www.nexus-euro.co.uk"},
   { pos: [52.583571, -1.124954], name: "Cromwell TOOLS Ltd", web:"www.cromwell.co.uk"},
   { pos: [50.963995, -0.064847], name: "Safeguide", web:" "},
   { pos: [50.850845, -1.729716], name: "Economey", web:" "},
   { pos: [51.408937, -0.774761], name: "Daler Rowney Ltd", web:"www.daler-rowney.com"}
  ],
  "Ireland": [
   { pos: [53.397956, -6.315257], name: "Evans Educational Ltd", web:"www.evanseducational.ie"}
  ],
  "Denmark": [
   { pos: [55.823345, 12.373317], name: "Hamelin GmbH ", web:"www.hamelinbrands.com"},
   { pos: [56.155582, 8.969090], name: "Hammershusvej 8A", web:"www.avform.dk"},
   { pos: [55.753942, 12.446222], name: "Novo Nordisk A/S ", web:"www.novonordisk.com"}
  ],
  "Belgium" :  [
   { pos: [50.729607, 4.221978], name: "COLIMPO NV", web:"www.colruytgroup.com"},
   { pos: [51.178046, 4.460115], name: "VANBAVEL", web:"www.vanbavel.be"},
  ],
  "Switzerland": [ 
  { pos: [47.363865, 8.513772], name: "Eckert", web:"www.eckert.ch"}
  ],
  "Sweden": [
  { pos: [56.538135, 14.122986], name: "Play Box AB", web:"www.playbox.se"}
  ],
  "France": [
  { pos: [45.824263, 3.376097], name: "JPC Creations", web:" "},
  { pos: [50.550337, 3.054225], name: "Seplic- Société importation Edouard", web:"www.siplec.leclerc.com"},
  ],
  "Croatia": [
  { pos: [45.795274, 16.037365], name: "Fokus doo", web:"www.fokus.hr"},
  { pos: [45.745561, 15.875822], name: "Eurocom d.o.o", web:"www.eurocom.hr"},
  ],
  "Czech Republic": [ 
  { pos: [49.439412, 17.455540], name: "MFP paper sro", web:"www.mfp.cz"}
  ],
  "Hungary":  [
   { pos: [47.595245, 19.108952], name: "APIS LOGISTICS Kft", web:"www.apis.hu"},
   { pos: [47.636886, 19.158257], name: "MAXXON Europe Kft", web:" "},
   { pos: [47.521638, 21.651275], name: "NFranco-Trade Kft", web:"www.francotrade.hu"}
  ],
  "Norway": [
   { pos: [59.141101, 10.190254], name: "Chrom  A.S", web:"www.chrom.no"},
  ],
  "Russia": [
   { pos: [55.760389, 37.628819], name: "LIMITED LIABILITY COMPANY «OPTIMA»", web:"www.firma-gamma.ru"},

  ],
  "Republic of Serbia": [
   { pos: [45.254312, 19.791271], name: "UNIVERZAL D.O.O.", web:"www.uni.rs"},
    { pos: [44.832296, 20.316450], name: "Amphora", web:"www.amphora.rs"},
  ],
  "New Zealand": [
   { pos: [-43.548705, 172.561566], name: "OFFICEPLAN LIMITED T/A QIZZLE", web:"www.qizzle.co.nz"},  
  ],
  "Argentina": [
   { pos: [-34.601346, -58.426346], name: "Florida", web:"www.floridaproducts.com.ar"},  
  ],
  "Turkey": [
   { pos: [41.065138, 28.621893], name: "Tetas Inc", web:"www.tetas.com.tr"},  
   { pos: [41.027314, 29.126718], name: "Türk Henkel Chemical Industry and Trade Inc.", web:"www.henkel.com.tr"},
  ],
  "Haiti": [
   { pos: [18.567703, -72.268152], name: "Anka .A.s", web:"www.anka.ht"},  
  ],
  "Kenya": [
   { pos: [-1.271444, 36.812206], name: "SAI Office Point Ltd ", web:"www.saioffice.co.ke"},
   { pos: [-1.277165, 36.816313], name: "SCHOOL EQUIPMENT CENTRE LIMITED", web:""}, 
   { pos: [-1.282705, 36.826562], name: "Centropen Stationers Limited", web:"www.centropen.co.ke"}, 
   { pos: [-1.211224, 36.930846], name: "Accored", web:""}, 
   { pos: [-1.280284, 36.825186], name: "Sundri stationers", web:""}, 
  ],
  "Benin": [
   { pos: [6.611587, 2.487047], name: "LE PLURIEL - WISSAM", web:""},  
  { pos: [6.480174, 1.922134], name: "SPM", web:""},
  { pos: [6.361674, 2.435601], name: "CBP-Benin", web:"www.baaklinigroup.com"},
  ],
  "Rwanda": [
   { pos: [-1.941367, 30.058388], name: "ERI-RWANDA", web:"www.eri-rwanda.com"},  
  ],
  "United Republic of Tanzania": [
   { pos: [-6.843442, 39.262888], name: "Clarex Stationers And Printing Services Limited", web:"www.clarex.co.tz"},
   { pos: [-6.823865, 39.275949], name: "Kings Stationery", web:"www.kingsstationers.com"},  
  ],
  "Burkina Faso": [
   { pos: [12.346643, -1.528000], name: "Spa -Bocolor", web:""},  
  { pos: [12.356960, -1.519518], name: "www.baaklinigroup.com", web:"www.snpf.bf"},
  { pos: [12.370529, -1.512573], name: "SNPF", web:"www.snpf.bf"},
  ],
  "Mali": [
   { pos: [12.637644, -8.002106], name: "CMP", web:"www.baaklinigroup.com"},  
  ],
  "Mauritania": [
  
  ],
  "Niger": [
   { pos: [13.511620, 2.111771], name: "CNP-Niger", web:"www.baaklinigroup.com"},  
  ],
  "Togo": [
   { pos: [6.132641, 1.223332], name: "Sotimex", web:"www.baaklinigroup.com"},
   { pos: [6.125403, 1.222260], name: "SPCG-Wissam azar", web:""},
   { pos: [6.223630, 1.547907], name: "Techno Class", web:""},
  ],
  "Ivory Coast": [
    { pos: [5.268708, -3.883658], name: "Techno Mart", web:""},
    { pos: [5.364501, -4.320503], name: "Satoci", web:"www.satoci.com"},
  ],
  "Cameroon": [
   { pos: [4.079294, 9.772352], name: "Sodipraco Sarl", web:"www.sodipraco.com"},  
    { pos: [4.047047, 9.696595], name: "Ste Shamsa Distribution Sarl", web:"www.grouparkays.com"},
    { pos: [4.027334, 9.744796], name: "BRUCE TRADE", web:"www.brucetrade.com"},
    { pos: [4.094504, 9.658342], name: "Dee-lite SARL", web:"www.deeliteglobal.com"},
  ],
  "Ghana ": [
   { pos: [5.548543, -0.192702], name: " Kingdom Books and Stationery Limited ", web:"www.kingdomgh.com"},  
  ],
  "Gambia": [
   { pos: [14.696289, -17.444203], name: "Gambia Stationery & Books Ltd", web:"www.lpdsenegal.com"},  
  ],
  "Senegal": [
   { pos: [14.665531, -17.434134], name: "Sipexs Surl", web:""},  
    { pos: [14.674038, -17.437216], name: "Papex Papeterie Express ", web:"www.papex.sn"},
  ],
  "Gabon": [
   { pos: [0.385720, 9.446564], name: "GMT", web:""},  
  ],
  "Somalia": [
   { pos: [2.033103, 45.319556], name: "Banaadir school supplies co", web:""},  
  ],
  "Pakistan ": [
   { pos: [33.684422, 73.047882], name: "Khan Brothers", web:"www.khanbrothers.com.pk"}
   
  ],
  "Saudi Arabia": [
   { pos: [21.533304, 39.199433], name: "Abdul Wahab Mirza Library Co.Ltd", web:"www.mirza.com.sa"},  
  ],
  "Palastine": [
   { pos: [31.952162, 35.233154], name: "Al-Joud for Trading", web:"www.alqudsstc.ps"},  
  ],
  "Egypt": [
    { pos: [30.083516, 31.342606], name: "Sasco International Co", web:"www.sascogroup.com"},
    { pos: [30.221534, 31.757666], name: "OMAR GROUP", web:""}
  ],
  "Iraq": [
   { pos: [33.341752, 44.389792], name: "Halley", web:" "},  
  ],
  "Lebanon": [
   { pos: [33.888630, 35.495480], name: "GEORGE R.FATTOUH EST", web:"www.gfattouh.com"},
    { pos: [33.906634, 35.576263], name: "MOUAWAD BOOKS & STATIONERY SARL", web:"www.mouawadmbs.com"},
    { pos: [33.878615, 35.497663], name: "FAIRCO", web:"www.faircointl.com"},
    { pos: [33.788626, 35.479265], name: "Crisily", web:"www.raficbitar.com"},
  ],
  "Tunisia": [
   { pos: [36.828837, 10.205054], name: "SHD", web:"www.snpt.com.tn"},
    { pos: [36.821022, 10.185917], name: "GMT", web:""},
    { pos: [36.846866, 10.207040], name: "Alpha Trading International sarl", web:"www.alphatrading.com.tn"},
  ],
  "Morocco": [
   { pos: [33.569837, -7.613340], name: "Medi Paf", web:"www.medipaf.com"},
   { pos: [33.589657, -7.610882], name: "Top2000", web:"www.top2000maroc.ma"},
    { pos: [33.589072, -7.613314], name: "Office and School Supplies ", web:""},
    { pos: [33.514667, -7.658884], name: "Buropa", web:"www.buropa.ma"},
    { pos: [33.575315, -7.613446], name: "SomaPaf", web:"www.somapaf.com"},
  ],
  "United Arab Emirates": [
   { pos: [25.267172, 55.295904], name: "Malak Stationery  LLC", web:"www.malakgroupuae.com"},
   { pos: [25.273276, 55.318527], name: "Al Malik Establishment", web:"www.almalikgroups.com"},
    { pos: [24.998515, 55.091942], name: "Al Uloom Stationery General Trading L.L.C.", web:""},
    { pos: [25.099658, 55.176613], name: "Aimex General Trading FZ LLC", web:"www.aimex-uae.com"},
   
  ],
  "Yemen": [
   { pos: [13.574657, 44.012177], name: "Abu Sami Stationery", web:"www.abusami.com"},
   { pos: [15.369445, 44.191006], name: "Al-Ameen for Trading", web:"www.alameen-group.com"},
    { pos: [15.369445, 44.191006], name: "Al-Mahrah for Trading", web:""},
  ],
};

var geoMatch = {
  "Germany": "Germany",
  "Jordan": "Jordan",
  "Spain": "Spain",
  "Italy": "Italy",
  "Greece": "Greece",
  "Netherlands": "Netherlands",
  "Poland": "Poland",
  "Finland": "Finland",
  "UK": "UK",
  "Ireland": "Ireland",
  "Denmark": "Denmark",
  "Belgium" : "Belgium",
  "Switzerland": "Switzerland",
  "Sweden": "Sweden",
  "France": "France",
  "Croatia": "Croatia",
  "Czech Republic": "Czech Republic",
  "Hungary": "Hungary",
  "Norway": "Norway",
  "Republic of Serbia": "Republic of Serbia",
  "New Zealand": "New Zealand",
  "Argentina": "Argentina",
  "Russia": "Russia",
  "Turkey": "Turkey",
  "Haiti": "Haiti",
  "Kenya": "Kenya",
  "Rwanda": "Rwanda",
  "United Republic of Tanzania": "United Republic of Tanzania",
  "Benin": "Benin",
  "Burkina Faso": "Burkina Faso",
  "Mali": "Mali",
  "Mauritania": "Mauritania",
  "Niger": "Niger",
  "Togo": "Togo",
  "Ivory Coast": "Ivory Coast",
  "Cameroon": "Cameroon",
  "Central African Republic": "Central African Republic",
  "Ghana ": "Ghana",
  "Gambia": "Gambia",
  "Senegal": "Senegal",
  "Gabon": "Gabon",
  "Somalia": "Somalia",
  "Pakistan ": "Pakistan",
  "Saudi Arabia": "Saudi Arabia",
  "Palastine": "Palastine",
  "Egypt": "Egypt",
  "Iraq": "Iraq",
  "Lebanon": "Lebanon",
  "Tunisia": "Tunisia",
  "Morocco": "Morocco",
  "United Arab Emirates": "United Arab Emirates",
  "Yemen": "Yemen"
};

var map = L.map("map", { center: jordan, zoom: 4 });
window.addEventListener("resize", function() {
  map.invalidateSize();
  map.setView(jordan, 3);
});

map.createPane('labelsPane');
map.getPane('labelsPane').style.zIndex = 650;

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  subdomains: 'abcd', maxZoom: 20
}).addTo(map);

// === Pulse Icon ===
function makePulseIcon(color) {
  return L.divIcon({
    html: `<svg width="30" height="30" viewBox="0 0 30 30">
      <circle cx="15" cy="15" r="6" fill="#ff9900" opacity="1" />
      <circle cx="15" cy="15" r="6" fill="#ff9900" opacity="1">
        <animate attributeName="r" from="6" to="14" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>`,
    className: "", iconSize: [30, 30], iconAnchor: [15, 15]
  });
}

var baseLayer = L.layerGroup().addTo(map);
var innerLayer = L.layerGroup();
var countryLayer, countryLabel;



// === دالة موحدة لعرض تفاصيل الدولة ===
function showCountryDetails(country) {
  map.removeLayer(baseLayer);
  innerLayer.clearLayers();
  if (countryLabel) map.removeLayer(countryLabel);

  fetch("srcNew/js/countries.geo.json")
    .then(res => res.json())
    .then(data => {
      if (countryLayer) map.removeLayer(countryLayer);
      countryLayer = L.geoJSON(data, {
        style: f => (f.properties.name === geoMatch[country])
          ? { color: "#fff", weight: 3, dashArray: "4,4", fillColor: "#ffeb99", fillOpacity: 1 }
          : { opacity: 0, fillOpacity: 0 },
        onEachFeature: function (feature, layer) {
          if (feature.properties.name === geoMatch[country]) {
            layer.on("click", function () {
              showCountryDetails(country);
            });
          }
        }
      }).addTo(map);

      let feature = data.features.find(f => f.properties.name === geoMatch[country]);
      if (feature) {
        let bounds = L.geoJSON(feature).getBounds();
        map.flyToBounds(bounds, { duration: 0.8 });
      }
    });

  if (innerHotspotsData[country]) {
    innerHotspotsData[country].forEach(hs => {
      L.marker(hs.pos, { icon: makePulseIcon(colors[country]) })
        .addTo(innerLayer)
        .bindPopup(`<b><div class="popup-name">${hs.name}</div>  
        <a class="popup-info" href="https://${hs.web}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#edb25f" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>${hs.web}</a>`, { minWidth: 180, maxWidth: 300 });
    });
  }

  innerLayer.addTo(map);
  document.getElementById("backBtn").style.display = "block";
}

// === رسم حدود الدول مع الكبس ===
fetch("srcNew/js/countries.geo.json")
  .then(res => res.json())
  .then(world => {
    for (let c in geoMatch) {
      let feature = world.features.find(f => f.properties.name === geoMatch[c]);
      if (feature) {
        L.geoJSON(feature, {
          style: { color: '#2d2d2e', fillColor: '#2d2d2e', fillOpacity: 0.1, weight: 1 },
          onEachFeature: function (feature, layer) {
            layer.on("click", function () {
              showCountryDetails(c);
            });
          }
        }).addTo(map);
      }
    }
  });

// === الهوتسبوتات ===
for (let c in outerHotspotsData) {
  let marker = L.marker(outerHotspotsData[c], { icon: makePulseIcon(colors[c]) }).addTo(baseLayer);

  L.polyline([jordan, outerHotspotsData[c]], {
    color: '#565656ff', opacity: 0.8, weight: 2, className: "animated-line", lineCap: "butt"
  }).addTo(baseLayer);

  marker.on("click", function () {
    showCountryDetails(c);
  });
}

document.getElementById("backBtn").onclick = function () {
  map.removeLayer(innerLayer);
  if (countryLayer) map.removeLayer(countryLayer);
  if (countryLabel) map.removeLayer(countryLabel);
  baseLayer.addTo(map);
  map.flyTo([20, 0], 3, { duration: 0.8 });
  this.style.display = "none";
};

function addCountryLabel(lat, lng, name) {
  L.marker([lat, lng], {
    icon: L.divIcon({ className: "country-label", html: name }),
    pane: 'labelsPane'
  }).addTo(map);
}

// === Labels ===
L.marker([31.997813, 35.922661], {
  icon: L.divIcon({
    className: "",
    html: `<div style="font-size:24px; font-family:'Rubik',sans-serif; font-weight:500; color:#2c8cd1; text-shadow:1px 1px 4px rgba(255,255,255,0.9);position:relative;z-index:9999;">Jordan</div>`
  }),
  pane: 'labelsPane'
}).addTo(map);

addCountryLabel(50.8, 9.5, "Germany");
addCountryLabel(39.608582, -3.910589, "Spain");
addCountryLabel(45.512902, 8.728579, "Italy");
addCountryLabel(40.930189, 22.534475, "Greece");
addCountryLabel(52.100543, 4.249363, "NLD");
addCountryLabel(52.722073, 19.069488, "Poland");
addCountryLabel(62.476955, 26.232099, "Finland");
addCountryLabel(55.190477, -2.822491, "UK");
addCountryLabel(52.794560, -8.292532, "IRL");
addCountryLabel(56.512304, 8.223549, "Denmark");
addCountryLabel(50.537923, 3.783643, "Belgium");
addCountryLabel(47.331380, 7.726549, "Swis");
addCountryLabel(63.632286, 13.671000, "Sweden");
addCountryLabel(45.986630, 2.149512, "France");
addCountryLabel(45.439663, 16.486192, "Croatia");
addCountryLabel(49.771413, 16.640381, "Cezch");
addCountryLabel(47.554187, 19.071874, "Hungary");
addCountryLabel(61.824837, 6.139844, "Norway");
addCountryLabel(43.261431, 21.769010, "Serbia");
addCountryLabel(-41.500083, 172.834407, "NZ");
addCountryLabel(-34.996496, -64.967281, "Argentina");
addCountryLabel(64.746803, 92.182966, "Russia");
addCountryLabel(40.478958, 35.289130, "Turkey");
addCountryLabel(18.903558, -72.588893, "Haiti");
addCountryLabel(-0.392893, 37.923995, "Kenya");
addCountryLabel(-2.348017, 29.504383, "Rwanda");
addCountryLabel(-7.466976, 35.649871, "Tanzania");
addCountryLabel(9.849209, 2.368029, "Benin");
addCountryLabel(11.702798, -4.158804, "Burkina Faso");
addCountryLabel(16.808662, -1.652114, "Mali");
addCountryLabel(20.254581, -10.303660, "Mauritania");
addCountryLabel(16.309955, 9.827672, "Niger");
addCountryLabel(7.269395, 1.134276, "Togo");
addCountryLabel(6.842227, -7.047061, "Ivory Coast");
addCountryLabel(4.776295, 12.163130, "Cameroon");
addCountryLabel(7.560660, 20.751631, "CAR");
addCountryLabel(6.988096, -1.209499, "Ghana");
addCountryLabel(13.247380, -16.671952, "Gambia");
addCountryLabel(14.843119, -16.637500, "Senegal");
addCountryLabel(-1.380726, 9.559053, "Gabon");
addCountryLabel(3.137646, 45.111588, "Somalia");
addCountryLabel(29.059913, 66.795643, "Pakistan");
addCountryLabel(24.996763, 43.964174, "Saudi Arabia");
addCountryLabel(32.145586, 34.451320, "Palastine");
addCountryLabel(28.893419, 29.094658, "Egypt");
addCountryLabel(34.769292, 43.113212, "Iraq");
addCountryLabel(34.356774, 36.105721, "Lebanon");
addCountryLabel(35.738038, 9.572011, "Tunisia");
addCountryLabel(32.535142, -5.660682, "Morocco");
addCountryLabel(24.215527, 54.802784, "UAE");
addCountryLabel(14.503047, 45.862249, "Yemen");

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


