$(function () {
  var coleccion = {
    '11410' : {
      ref: '11410',
      image_img: 'img/coleccion/11410.jpg',
      texto: 'Brasier reductor triangular con arco. Gran soporte y cubrimiento del busto. Copas en tela prehormada con buena capacidad. Espalda en U para mantener las cargaderas en su lugar. Cargaderas fijas graduables.'
    },
    '11411' : {
      ref: '11411',
      image_img: 'img/coleccion/11411.jpg',
      texto: 'Brasier reductor triangular con arco. Gran soporte y cubrimiento del busto. Copas en tela prehormada con buena capacidad. Espalda en U para mantener las cargaderas en su lugar. Cargaderas fijas graduables.'
    },
    '11412' : {
      ref: '11412',
      image_img: 'img/coleccion/11412.jpg',
      texto: 'Brasier reductor triangular con arco. Gran soporte y cubrimiento del busto. Copas en tela prehormada con buena capacidad. Espalda en U para mantener las cargaderas en su lugar. Cargaderas fijas graduables.'
    }
    /* Agregar items restantes en Colección */
  };

  smoothScroll.init();

  /* Video background */
  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  onYouTubeIframeAPIReady = function () {
      player = new YT.Player('player', {
          height: '315',
          width: '560',
          videoId: 'A31DWvlw_bY',
          playerVars: {
              'autoplay': 0,
              'rel': 0,
              'showinfo': 0
          }
      });
  }
  $('#player').hide();

  $(document).on('click', '.start-video', function () {
      $(this).hide();
      $("#player").show();
      $("#thumbnail-container").hide();
      player.playVideo();
  });

  /* Menu responsive */
  var $menuButton = $('#menu-button');
  var $menu = $('#menu');
  $menuButton.on('touchstart', function() {
    $menu.toggleClass('active');
    $menuButton.toggleClass('icon-close');
  });

  /*Lightbox*/
  $('#carousel-coleccion a').each(function() {
    var itemRef = $(this).data('ref');
    $(this).magnificPopup({
      key: 'coleccion-popup',
      items: coleccion[itemRef],
      type: 'inline',
      inline: {
        markup: '<div class="leonisa-popup">'+
                  '<div><img class="image-coleccion mfp-image" src=""></div>'+
                  '<div>'+
                    '<h3>Ref: <span class="referencia mfp-ref"></span></h3><hr>'+
                    '<p class="ref-texto mfp-texto"></p>'+
                  '</div>'+
                '</div>'
      }
    })
  });

  $('.carousel-comparte').magnificPopup({
    delegate: 'a',
    type: 'iframe'
  });

  /*----------------------------------*/

  $('#carousel-coleccion').slick({
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('#carousel-comparte').slick({
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var feedInstragram = new Instafeed({
      get: 'user',
      userId: 4164760292,
      accessToken: '4164760292.0486387.b47f2fe999f642bb970b0cd756464ce4',
      template: '<div><a href="{{link}}" target="_blank"><img src="{{image}}" height="150" /></a></div>',
      after: function() {
          $('.carousel-instagram').slick({
            dots: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
              {
                breakpoint: 940,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 730,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 570,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
            ]
          });
      }
  });
  feedInstragram.run();

  /* Media query */
  var consulta = window.matchMedia('(max-width: 768px)');
    consulta.addListener(mediaQuery);

  function mediaQuery() {
    if (consulta.matches) {
      $('.color-navidad img').attr('src','img/ponle-color-small.jpg');
    } else {
      $('.color-navidad img').attr('src','img/ponle-color.jpg');
    }
  }
  mediaQuery();
});
