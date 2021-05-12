// jQuery(document).ready(function($) {
//     $('#sliderMask').hide();
//
//     $('#slickBanner').css('display', 'block');
//
//     $('.js-product-slider, .js-product-slider-nav').css('display', 'block');
//
//     (function(){
//         var searchIcon = $('#search-starter');
//         var searchContainer = $('#search-container');
//         var searchForm = $('#search-form');
//         var searchInput = searchForm.find('#search-input');
//
//         var open = false;
//
//         searchIcon.on('click',function(e){
//             if(open){
//                 console.log(searchInput.val())
//                 if(searchInput.val().trim())
//                     searchForm.submit();
//                 else{
//                     searchContainer.removeClass('fopen');
//                     open = false;
//                 }
//             } else {
//                 open = true;
//                 searchContainer.addClass('fopen');
//             }
//         });
//     })();
//
// });
//
// //Newsletter
// $('#newsletter-form').on('submit', function(e){
//
//     e.preventDefault();
//
//     var newsletterSuccess = $('#newsletter-success');
//     var newsletterError = $('#newsletter-error');
//
//     newsletterSuccess.addClass('hidden');
//     newsletterError.addClass('hidden');
//
//     var $this = $(this);
//
//     var email = $this.find('input[name="subscriber"]').first();
//
//     if(email.val().match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i))
//         $.post($this.attr('action'),$this.serialize(),function(resp){
//             if(resp.success)
//                 newsletterSuccess.removeClass('hidden');
//         });
//     else
//         newsletterError.removeClass('hidden');
//
// });
//
// // Mobile menu trigger
// $('#mobileMenuTrigger').on('click', function() {
//     $(this).toggleClass("open");
//     $('.header, .wrapper, .footer').toggleClass('mobile-menu-open');
//     $('.mobile-navigation').toggleClass('menu-closed');
// });
//
// // Change language
// $(document).on('click', "#change-lang", function(e) {
//     e.preventDefault();
//
//     var expires;
//     var $this = $(e.currentTarget);
//     var url = window.location.pathname + window.location.search;
//     var new_url = url.replace($this.data('currentLang'), $this.data('href'));
//     var date = new Date();
//
//     date.setTime(date.getTime() + (20 * 24 * 60 * 60 * 1000));
//     expires = "expires=" + date.toUTCString();
//
//     document.cookie = "simpalsid.lang=" + $this.data('href') + "; " + expires + ";path=/";
//     window.location.href = new_url;
// });
//
// // Scroll to top
// $.scrollUp({
//     scrollName: 'scrollUp', // Element ID
//     scrollDistance: 300, // Distance from top/bottom before showing element (px)
//     scrollFrom: 'top', // 'top' or 'bottom'
//     scrollSpeed: 300, // Speed back to top (ms)
//     easingType: 'linear', // Scroll to top easing (see http://easings.net/)
//     animation: 'fade', // Fade, slide, none
//     scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
//     scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
//     scrollTitle: false, // Set a custom <a> title if required.
//     scrollImg: false, // Set true to use image
//     activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
//     zIndex: 2147483647 // Z-Index for the overlay
// });
//
// //  Add to cart fly effect with jQuery UI.
//   $(document).on("click", ".js-add-to-cart", function(e) {
//
//     e.preventDefault();
//     var $this = $(e.currentTarget),
//         cart = $('.js-shopping-cart'),
//         imgToDrag = $this.closest('.js-content').find("img").eq(0),
//         url = $this.data('href'),
//         productSize = $('#product-size'),
//         serialize = '';
//
//     if (productSize.length > 0 ){
//       serialize = productSize.find(':input').serialize()
//     }
//
//     $.ajax({
//       url: url,
//       type: 'POST',
//       data: serialize,
//       success: function(result) {
//         if (result.success == true)
//         {
//           $('#total-cart-count').removeClass('hidden').text(parseInt($('#total-cart-count').text()) + 1)
//           if (imgToDrag) {
//             var imgClone = imgToDrag.clone()
//               .offset({
//                 top: imgToDrag.offset().top,
//                 left: imgToDrag.offset().left
//             })
//               .css({
//                 'opacity': '0.5',
//                 'position': 'absolute',
//                 'height': '150px',
//                 'width': '150px',
//                 'z-index': '100'
//             })
//               .appendTo($('body'))
//               .animate({
//                 'top': cart.offset().top + 10,
//                 'left': cart.offset().left + 10,
//                 'width': 75,
//                 'height': 75
//             }, 1000, 'easeInOutExpo');
//
//             setTimeout(function () {
//               cart.effect("pulsate", {
//                 times: 2
//               }, 200);
//             }, 1500);
//
//             imgClone.animate({
//               'width': 0,
//               'height': 0
//             }, function () {
// //              $this.detach();
//             });
//           }
//         }
//       }
//     });
//
//   });
//
//
// // Increment/decrement product cart
// $(document).on("click", ".js-product-up, .js-product-down, .js-product-delete", function(e) {
//     e.preventDefault();
//
//     var $this = $(e.currentTarget);
//     var $input = $this.siblings('input');
//     var $cartCount = $('#total-cart-count');         var url = $this.attr('href');         if($('#location-id').length > 0){url += '&location_id=' + $('#location-id').val()}
//     var action = true;
//
//     if ($this.hasClass('js-product-down') && $input.val() < 2) {
//         action = false;
//         $this.addClass('disabled')
//     } else {
//         action = true;
//         $this.siblings('a').removeClass('disabled')
//     }
//
//     if (action) {
//         $.ajax({
//             url: $this.attr('href'),
// //            url: url,
//             type: 'POST',
//             success: function(result) {
//
//                 if (result.success == true) {
//                     var count = 0, shipping = 0,  _ref;
//
//                     if (result.counter_client > 0) {
//
//                         $('#total-price').text(result.total_price).attr('data-init-total', result.total_price);
//                         $('#final-price').text(result.total_client).attr('data-total', result.total_client);
//                         $('#delivery-price').attr('data-shipp-ch', result.shipping.chisinau).attr('data-shipp-md', result.shipping.moldova);
//
//                         if ( _ref = parseInt(result.location_id) === 3000 || _ref === 2998 || _ref === 2971) {
//                             $('#delivery-price').text(result.shipping.chisinau);
//                             shipping = result.shipping.chisinau;
//                         } else{
//                             $('#delivery-price').text(result.shipping.moldova);
//                             shipping = result.shipping.moldova;
//                         }
//
//                         if(shipping > 1){
//                             $('#shipping-fee').removeClass('hidden').siblings('#shipping-free').addClass('hidden')
//                         } else if (shipping >= 0){ //if shipping is -1, delivery don't exist
//                             $('#delivery-price').text(0)
//                             $('#shipping-fee').addClass('hidden').siblings('#shipping-free').removeClass('hidden')
//                         } else {
//                             $('#delivery-price').text('---')
//                             $('#shipping-free').addClass('hidden')
//                         }
//
//                         if ($this.hasClass('js-product-up')) {
//
//                             $input.val(result.count);
//                             $cartCount.text(parseInt($cartCount.text()) + 1);
//                         } else {
//
//                             if ($this.hasClass('js-product-down')) {
//                                 $input.val(result.count);
//                                 $cartCount.text(parseInt($cartCount.text()) - 1);
//                                 if (result.count == 0) {
//                                     $this.closest('tr').remove();
//                                 }
//                             } else {
//
//                                 if ($this.hasClass('js-product-delete')) {
//                                     count = parseInt($this.closest('tr').find('input[name="quantity"]').val())
//                                     $this.closest('tr').remove();
//                                     $cartCount.text(parseInt($cartCount.text()) - count);
//                                 }
//                             }
//                         }
//                     } else {
//
//                         $cartCount.text(0);
//                         $('#cart-container').empty();
//                     }
//
//                     if ( parseInt($('#total-cart-count').text()) == 0 ) {
//                         $('#total-cart-count').addClass('hidden');
//                     }
//                 }
//             }
//         });
//     }
//
// });
//
// //  Change delivery type
// $(document).on("change", "#delivery-type", function(e) {
//     var $this = $(this);
//
//     $('.js-user-info[data-shipment-method=' + $this.val() + ']')
//         .removeClass('hidden')
//         .siblings('.js-user-info')
//         .addClass('hidden');
// })
//
// // Filters select
// $('.js-index-filters select').each(function(e) {
//     var $this = $(this);
//     var url = $this.closest('.js-index-filters').data('expandUrl') +
//         $this.data('id') + '?is_json=1';
//
//     if ($this.find('option').length == 1) {
//
//         $.ajax({
//             url: url,
//             type: 'GET',
//             success: function(result) {
//
//                 $this.append(result);
//             }
//         })
//     }
// });
//

//
//
// $(document).ready(function(){
//
//   var tabWrapper = $('#tab-block'),
//       tabMnu = tabWrapper.find('.tab-mnu  li'),
//       tabContent = tabWrapper.find('.tab-cont > .tab-pane');
//
//   tabContent.not(':first-child').hide();
//
//   tabMnu.each(function(i){
//     $(this).attr('data-tab','tab'+i);
//   });
//   tabContent.each(function(i){
//     $(this).attr('data-tab','tab'+i);
//   });
//
//   tabMnu.click(function(){
//     var tabData = $(this).data('tab');
//     tabWrapper.find(tabContent).hide();
//     tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show();
//   });
//
//   $('.tab-mnu > li').click(function(){
//     var before = $('.tab-mnu li.active');
//     before.removeClass('active');
//     $(this).addClass('active');
//    });
//
// });
//
// var page = $('html, body');
//
// $('#scroll-nav').children().each(function(index){
//     var $this = $(this);
//     if(!$this.hasClass('no-nav'))
//         $this.on('click', function(e){
//             var $target = $($(this).attr('href'));
//             e.preventDefault();
//             e.stopPropagation();
//             page.animate({scrollTop: $target.offset().top - 50},800)
//         });
// })
//
// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 800);
// });
//
// jQuery(document).ready(function($){
//     var aboveHeight = $('#header').outerHeight();
//     $(window).scroll(function(){
//         if ($(window).scrollTop() > aboveHeight){
//         $('#scroll-nav').addClass('fixed').css('top','0').next().css('margin-top','52px');
//         } else {
//         $('#scroll-nav').removeClass('fixed').next().css('margin-top','0');
//         }
//     });
// });
//
//
//
// var backgrounds = ["0", "-426px", "-852px", "-1278px", "-1704px", "-2130px", "-2556px", "-2982px", "-3408px" ]; // style values
// idx = 0;
// interval = 500; // 1 second
// window.setInterval(function(){
// 		var cur_back = backgrounds[idx];
//     if (cur_back){
//     		idx += 1
//     }else{
//     		idx = 1
//         cur_back = backgrounds[0]
//     };
//     document.getElementById("levels").style.backgroundPositionY=cur_back;  // set style value for "background" attribute
// }, 1000);
//
// var positions = ["0", "-70px", "-140px"]; // style values
// idex = 0;
// interval = 800; // 1 second
// window.setInterval(function(){
// 		var cur_poz = positions[idex];
//     if (cur_poz){
//     		idex += 1
//     }else{
//     		idex = 1
//         cur_poz = positions[0]
//     };
//     document.getElementById("steak").style.backgroundPositionY=cur_poz;  // set style value for "background" attribute
// }, 1000);
//
// $(document).ready(function() {
// 	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
// 		disableOn: 700,
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,
// 		fixedContentPos: false
// 	});
// });
//
// $(document).ready(function() {
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
//
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             bottom_of_window -= 100; // additional gap
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
//                 $(this).animate({'opacity':'1'},500);
//
//             }
//         });
//     });
// });
//
//
// $('#subscribe-form').on('submit',function(e){
//     e.preventDefault();
//     var mailSuccess = $('#send-mail-success');
//
//     mailSuccess.addClass('hidden');
//
//     var $this = $(this);
//
//     var ok = true;
//
//     $this.find('input, textarea').each(function(){
//         var _this = $(this);
//         _this.val(_this.val().trim());
//
//         if(_this.val().length == 0)
//             ok = false;
//
//     });
//
//     var data = $this.serialize();
//
//
//     if(ok)
//         $.post($this.attr('action'), data, function(resp){
//             // console.log(resp);
//             if(resp.success){
//                 mailSuccess.removeClass('hidden');
//                 setTimeout(function(){
//                     mailSuccess.addClass('hidden');
//                     $this[0].reset();
//                 },4000 );
//             }
//         });
//
// });
//
// $(document).ready(function(){
//
//     landingFocusContainer = $('#slide-focus');
//     landingFocus = $('#phone-focus');
//
//
//
//
//
//
//     $('.js-smooth-scroll').on('click',function(e){
//         e.preventDefault();
//         e.stopPropagation();
//
//         var $this = $(this);
//
//         $('html, body').animate({scrollTop: $($this.attr('href')).offset().top - 50},800)
//     });
//
//
//
// 	var wind = $('.popup'),
// 		black = $('.overlay'),
// 		cls = $('.close'),
// 		open = $('.preorder-button, .js-btn-recomended');
// 	open.on('click', function(e){
// 		e.preventDefault();
// 		console.log(121);
// 		wind.toggleClass('popup_active');
// 		black.show();
// 	});
// 	cls.click(function(e) {
// 		e.preventDefault();
// 		black.hide();
// 		wind.toggleClass('popup_active');
// 	});
//
//
// 	$("#datatime").change(function(){
// 	    $('#timetoeat').css("color", "#fff");
//         if( $(".1700").is("option:selected") ){
//             $("#timetoeat").html("17:00 ( bd. Gagarin 16)");
//         } else {
//             $("#timetoeat").html("13:00 ( bd. Gagarin 16)");
//         }
//     });
//
// });

$('#info-icon').on('click', function (e) {
    e.preventDefault();
    $('#desc-level').toggleClass('description-open');
});

$('#second_grill').on('click', function (e) {
    e.preventDefault();
    $('.roundgrill').css('display', 'none');
    $('.roundgrill.second').css('display', 'block');
    $('.img-gril').addClass('no-after');
});

$("#circle-dynamic > img:gt(0)").hide();

setInterval(function () {
    $('#circle-dynamic > img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#circle-dynamic');
}, 3000);

$("#gril25 > img:gt(0)").hide();

setInterval(function () {
    $('#gril25 > img:first')
        .fadeOut(1)
        .next()
        .fadeIn(1)
        .end()
        .appendTo('#gril25');
}, 50);


setInterval(function () {
    var n = $("#slider").css("margin-left");
    if (n == '-14px') {
        $("#slider").css('margin-left', '+=424px');
        $(".recipes .rare").css('display', 'none');
        $(".meat-rare").css('display', 'none');
        $(".recipes .medium").css('display', 'block');
        $(".meat-medium").css('display', 'block');
    } else {
        if (n == '410px') {
            $("#slider").css('margin-left', '+=424px');
            $(".recipes .medium").css('display', 'none');
            $(".meat-medium").css('display', 'none');
            $(".recipes .well-done").css('display', 'block');
            $(".meat-welldone").css('display', 'block');
        }
        else {
            if (n == '834px') {
                $("#slider").css('margin-left', '-=848px');
                $(".recipes .well-done").css('display', 'none');
                $(".meat-welldone").css('display', 'none');
                $(".recipes .rare").css('display', 'block');
                $(".meat-rare").css('display', 'block');
            }

        }
    }
}, 3000);

$(document).ready(function () {
    $('#fullpage12').fullpage({
        css3: true,
        scrollingSpeed: 600
    });

    $(document).on("mouseup", '.js-popup-video', function (event) {

        event.preventDefault();

        var target = $(event.currentTarget);

        target.magnificPopup({
            type: 'iframe',
            iframe:{
                patterns:{
                    youtube:{
                        index: 'youtube.com/',
                        id: '/',
                        src: '//www.youtube.com/embed/%id%'
                    },
                    youtu:{
                        index: 'youtu.be/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%'
                    },
                    vimeo:{
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%'
                    },
                    play:{
                        index: 'play.md/',
                        id: '/',
                        src: '//play.md/embed/%id%?title=false'
                    }
                }
            }
        });

    });
});
