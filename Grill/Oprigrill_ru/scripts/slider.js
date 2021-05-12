// $(document).ready(function() {
//
//     /*----------  Indexpage and product similiar sliders  ----------*/
//     $(".slickSliders").slick({
//         dots: false,
//         infinite: false,
//         accessibility: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: false
//             }
//         }, {
//             breakpoint: 700,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         }, {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }],
//         prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
//         nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>'
//     });
//
//     $("#slickBanner").slick({
//         autoplay: true,
//         dots: false,
//         infinite: true,
//         speed: 1000,
//         accessibility: false,
//         adaptiveHeight: true,
//         prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
//         nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>'
//     });
//
//   /*----------  Product slider ----------*/
//    $('.js-product-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//
//   $('.js-product-slider-nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.js-product-slider',
//     dots: false,
//     vertical: true,
//     centerMode: false,
//     focusOnSelect: true,
//     prevArrow: '<button class="slick-prev"><i class="fa fa-angle-up"></i></button>',
//     nextArrow: '<button class="slick-next"><i class="fa fa-angle-down"></i></button>',
//     responsive: [{
//         breakpoint: 992,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             vertical: false
//         }
//     }, {
//         breakpoint: 768,
//         settings: {
//             slidesToShow: 5,
//             slidesToScroll: 1,
//             vertical: false
//
//         }
//     }, {
//         breakpoint: 650,
//         settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             vertical: false
//         }
//     }, {
//         breakpoint: 450,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             vertical: false
//         }
//     }, {
//         breakpoint: 350,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             vertical: false
//         }
//     }]
//   });
// });

$(document).ready(function() {
       $(".slickDish").slick({
            dots: false,
            infinite: true,
            autoplay: true,
            accessibility: false,
            speed: 1000,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
       });

       $('.slickDish').on('afterChange', function(event, slick, currentSlide, nextSlide, prevSlide) {
           if( $('.one').parent().hasClass('slick-current') ){
                $( "#slickGrill .img-container_1").fadeIn(10);
                $( "#slickGrill .img-container_2").fadeOut();
                $( "#slickGrill .img-container_3").fadeOut();
                $( "#slickGrill .img-container_4").fadeOut();
                $( ".dish-1").css('display','block');
                $( ".dish-2").css('display','none');
                $( ".dish-3").css('display','none');
                $( ".dish-4").css('display','none');
           }  else if ( $('.two').parent().hasClass('slick-current') ){
                $( "#slickGrill .img-container_1").fadeOut();
                $( "#slickGrill .img-container_2").fadeIn(10);
                $( "#slickGrill .img-container_3").fadeOut();
                $( "#slickGrill .img-container_4").fadeOut();
                $( ".dish-1").css('display','none');
                $( ".dish-2").css('display','block');
                $( ".dish-3").css('display','none');
                $( ".dish-4").css('display','none');
           } else if ( $('.three').parent().hasClass('slick-current') ){
                $( "#slickGrill .img-container_1").fadeOut();
                $( "#slickGrill .img-container_2").fadeOut();
                $( "#slickGrill .img-container_3").fadeIn(10);
                $( "#slickGrill .img-container_4").fadeOut();
                $( ".dish-1").css('display','none');
                $( ".dish-2").css('display','none');
                $( ".dish-3").css('display','block');
                $( ".dish-4").css('display','none');
           } else {
                $( "#slickGrill .img-container_1").fadeOut();
                $( "#slickGrill .img-container_2").fadeOut();
                $( "#slickGrill .img-container_3").fadeOut();
                $( "#slickGrill .img-container_4").fadeIn(10);
                $( ".dish-1").css('display','none');
                $( ".dish-2").css('display','none');
                $( ".dish-3").css('display','none');
                $( ".dish-4").css('display','block');
           }

        });
});

