// var stickyHeader = false;
// var landingIntro = false;
// var landingIntroPhone = false;
// var landingVideo = false;
// var landingVideoContainer = false;
// var landingCameraContainer = false;
// var landingCamera = false;
// var landingSecurityContainer = false;
// var landingSecurity = false;
// var tabS8Plus = false;
// var tabS8 = false;
// var langSwitch = false;
// var landingGift = false;
// var langingChargerVideo = false;
// var landingAccessoriesVideo = false;
// var landingAccessoriesVideoContainer = false;
//
// function headerScrollControl(e){
//
//     var distance = $(document).scrollTop();
//
//     introScrollPhone(distance);
//
//     // console.log(distance);
//
//     var newDistance = (distance >= 65)? '0px' : (65 - distance) + 'px'
//
//     // console.log(newDistance);
//
//     stickyHeader.css('top', newDistance)
//
// }
//
//
// function introScrollPhone(scroll){
//
//     var distance = landingIntro.offset().top
//
//     var diff = scroll - distance;
//
//     var interval = 100;
//
//     // console.log(diff)
//
//     if(diff > 0){
//
//         var percent = diff / landingIntro.height();
//
//         // console.log(percent)
//
//         if(percent < 0)
//             percent = 0;
//         else if(percent > 1){
//             introScrollVideo(scroll)
//             return false;
//         }
//
//         var top = ( (interval * percent) > 66 ) ? 66 : interval * percent;
//
//         landingIntroPhone.css('top', top + 'px');
//
//
//     }
//
//
// }
//
//
// function introScrollVideo(scroll){
//
//     var ogScroll = scroll;
//
//     scroll = scroll + $(window).height();
//
//     var distance = landingVideoContainer.offset().top + (landingVideoContainer.height())
//
//     var diff = scroll - distance;
//
//
//     if(diff > 0 && landingVideo.get(0).currentTime == 0){
//
//         var percent = diff / landingVideoContainer.height();
//
//         // console.log(percent)
//         landingVideo.get(0).play();
//
//         if(percent < 0)
//             percent = 0;
//         else if(percent > 1){
//             accessoriesVideo(scroll);
//         }
//
//     } else if (diff < 0){
//         if(landingVideo.get(0).currentTime != 0){
//             landingVideo.get(0).currentTime = 0;
//         }
//     }
//
//
// }
//
// function accessoriesVideo(scroll){
//
//     var ogScroll = scroll;
//
//     scroll = scroll + $(window).height();
//
//     var distance = landingAccessoriesVideoContainer.offset().top + (landingAccessoriesVideoContainer.height() / .75)
//
//     var diff = scroll - distance;
//
//
//     if(diff > 0 && landingAccessoriesVideo.get(0).currentTime == 0){
//
//         landingAccessoriesVideo.get(0).play();
//
//     } else if(diff < 0) {
//         if(landingAccessoriesVideo.get(0).currentTime != 0){
//             landingAccessoriesVideo.get(0).currentTime = 0;
//         }
//     }
//
//
// }
//
//
// function changeLang(e){
//     e.preventDefault();
//
//     var expires;
//     var $this = $(e.currentTarget);
//     var url = window.location.pathname + window.location.search;
//     var new_url = url.replace($this.data('current'), $this.data('lang'));
//     var date = new Date();
//
//     date.setTime(date.getTime() + (20 * 24 * 60 * 60 * 1000));
//     expires = "expires=" + date.toUTCString();
//
//     document.cookie = "simpalsid.lang=" + $this.data('lang') + "; " + expires + ";path=/";
//     window.location.href = new_url;
// }
//
//
// function initSlider(){
//     $('.js-model').on('click', function(e){
//         e.preventDefault();
//         var $this = $(this);
//
//         $('.js-model.active').removeClass('active');
//
//         $this.addClass('active');
//
//         var $ref = $($this.data('ref'));
//         $ref.parent().find('img').removeClass('active');
//         $ref.addClass('active');
//
//     });
// }
//
// $(document).ready(function(){
//
//     stickyHeader = $('#sticky-header');
//     landingIntro = $('#slide-intro');
//     landingIntroPhone = $('#phone-area');
//     landingVideo = $('#phone-video');
//     landingVideoContainer = $('#slide-design');
//     landingCameraContainer = $('#slide-camera');
//     landingCamera = $('#phone-camera');
//     landingSecurityContainer = $('#slide-security');
//     landingSecurity = $('#phone-security');
//     landingFocusContainer = $('#slide-focus');
//     landingFocus = $('#phone-focus');
//
//     tabS8Plus = $('#models-slider-s8-plus');
//     tabS8 = $('#models-slider-s8');
//     langSwitch = $('#change-lang');
//
//     landingAccessoriesVideo = $('#accessories-video ');
//     landingAccessoriesVideoContainer = $('#accessories');
//
//
//     landingGift = $('#slide-gift');
//     langingChargerVideo = $('#charger-video');
//
//     initSlider();
//     langSwitch.on('click',changeLang);
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
//     headerScrollControl();
//
//     $(document).on('scroll', headerScrollControl);
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
// });
//
// $(function(){
//
// 	var $window = $(window);		//Window object
//
// 	var scrollTime = 0.5;			//Scroll time
// 	var scrollDistance = 100;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
//
// 	$window.on("mousewheel DOMMouseScroll", function(event){
//
// 		event.preventDefault();
//
// 		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
// 		var scrollTop = $window.scrollTop();
// 		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//
// 		TweenMax.to($window, scrollTime, {
// 			scrollTo : { y: finalScroll, autoKill:true },
// 				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
// 				autoKill: true,
// 				overwrite: 5
// 			});
//
// 	});
//
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
//                 },2000 );
//             }
//         });
//
// });
//
// $(document).ready(function(){
//     var slideImage1 = $('.slider-level-image-1'),
//         slideImage2 = $('.slider-level-image-2'),
//         slideImage3 = $('.slider-level-image-3'),
//         mainImageslide = $('.levelu-slide-image'),
//         closeButton = $('.close-slide-image')
//         overlay = $('.overlay');
//         slideImage1.on('click', function(){
//         overlay.show();
//         mainImageslide.addClass('levelu-slide-image-2');
//         });
//          slideImage2.on('click', function(){
//         overlay.show();
//         mainImageslide.addClass('levelu-slide-image-3');
//         });
//          slideImage3.on('click', function(){
//         overlay.show();
//         mainImageslide.addClass('levelu-slide-image-4');
//         });
//         closeButton.click(function() {
//         mainImageslide.removeClass('levelu-slide-image-2');
//         mainImageslide.removeClass('levelu-slide-image-3');
//         mainImageslide.removeClass('levelu-slide-image-4');
//         overlay.hide();
//         });
//     });



