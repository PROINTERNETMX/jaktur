jQuery(function() {
    initCarouselUnidadNegocio();
    initCarouselPromociones();
    initCarouselVideos();
    initCarouselUltimasNoticias();
    initCarouselLogo();
    initCarouselRecomendaciones();
    initCarouselRelacionados();
});

/*Inicia lightgallery promociones*/ 
for (var i = 1; i < 5; i++){
  lightGallery(
     document.getElementById('item-promo-'+i)     
  );       
};

/*Inicia lightgallery videos*/ 
for (var i = 1; i < 5; i++){
  lightGallery(
     document.getElementById('video-gallery-'+i)     
  );       
};

function initCarouselRecomendaciones(){
    "use strict";  
  $('.carousel-recomendaciones').slick({  
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,    
    infinite: true,
    adaptiveHeight: false,
    touchMove:true,
    centerPadding: '0px',

  });
}

function initCarouselUnidadNegocio(){
  "use strict";    
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav', 
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 6000, 
    infinite: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav', 
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 6000, 
          infinite: true, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          fade: true,
          asNavFor: '.slider-nav', 
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 6000, 
          infinite: true, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          fade: true,
          asNavFor: '.slider-nav', 
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: 6000,
          infinite: true,   
        }
      }
    ]
  });
  $('.slider-nav').slick({
    vertical:true,
    slidesPerRow:2,
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    rows:1, 
    focusOnSelect: true, 
    infinite: true,
  });
}

function initCarouselPromociones(){
  "use strict";  
  $('.carousel-promociones').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    variableWidth: true,
    infinite: true,
    adaptiveHeight: false,
    touchMove:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          variableWidth: true,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          infinite: true,
          autoplay: true,         
          speed: 6000,
          touchMove:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          arrows: false,
          speed: 5000,
          mobileFirst:true,
          centerPadding: '0px',
        }
      }
    ]
  });
}

function initCarouselVideos(){
  "use strict";    
  $('.carousel-videos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      arrows: false,
      speed: 6000,	
      adaptiveHeight: false,
      touchMove:true,
      responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          }

        ]
  });
}
function initCarouselUltimasNoticias(){
  "use strict";    
  $('.carousel-ultimas-noticias').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      arrows: true,
      speed: 6000,	
      touchMove:true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,              
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: true,
              speed: 6000,
              touchMove:true,	
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          }

        ]
  });
}
function initCarouselLogo(){
  "use strict";    
  $('.carousel-franquicias').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      autoplay: true,
      arrows: false,
      speed: 4000,
      touchMove:true,	
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 4000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 4000,
              touchMove:true,	
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 4000,
              touchMove:true,	
            }
          }

        ]
  });
}

function initCarouselRelacionados(){
  "use strict";    
  $('.carousel-Relacionados').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      autoplay: true,
      arrows: true,
      speed: 6000,
      touchMove:true,	
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,              
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,
              touchMove:true,	
            }
          }

        ]
  });
}

