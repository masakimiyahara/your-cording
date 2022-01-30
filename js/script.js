/*--ハンバーガーメニュー----------------------------------------------------
-----------------------------------------------------------*/
$(function() {
	$('.burger-btn, .nav-item a').click(function(){
		$('.burger-btn').toggleClass('close');
		$('.header-nav').toggleClass('slide-in');
		$('body').toggleClass('noscroll');
	});
});

/*アコーディオン----------------------------------------------------
----------------------------------------------------------*/
$(function (){
	$('.close').css("display", "none")
	$('.faq-q').on('click', function() {
		$(this).next().slideToggle();
	})
});

/*--swiper----------------------------------------------------
-----------------------------------------------------------*/
var mySwiper = new Swiper('.swiper-container',{
	// Optional parameters
	// スライダーをループ（カルーセル）させる
	loop: true,
	// 現在のスライドを真ん中に表示
	centeredSlides: true,
	// 一度に表示するスライド数
	slidesPerView: 1.5,
	// スライド間の余白
	spaceBetween: 20,

	// レスポンシブ対応
	breakpoints: {
		// 300px以上の場合
		300: {
		  // 一度に表示するスライド数
			slidesPerView: 1.5,
		  // スライド間の余白
			spaceBetween: 16
		},
		// 768px以上の場合
		768: {
		  // 一度に表示するスライド数
			slidesPerView: 2.5,
		  // スライド間の余白
			spaceBetween: 36
		},
		// 1024px以上の場合
		1024: {
		  // 一度に表示するスライド数
			slidesPerView: 3,
		  // スライド間の余白
			spaceBetween: 36
		},
		// 1280px以上の場合
		1280: {
		  // 一度に表示するスライド数
			slidesPerView: 3.5,
		  // スライド間の余白
			spaceBetween: 56
		}
	},

	autoplay: {
		speed: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	  // クリックできる
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

/*--submit----------------------------------------------------
-----------------------------------------------------------*/
$(document).ready(function () {
	const $submitBtn = $('#js-submit')
	$('#form input,#form textarea').on('change', function () {
		if (
			$('#form input[type="text"]').val() !== "" &&
			$('#form input[type="email"]').val() !== "" &&
			$('#form textarea').val() !== "" &&
			$('#form #privacyCheck').prop('checked') === true
		) {
			$submitBtn.prop('disabled', false);
		} else {
			$submitBtn.prop('disabled', true);
		}
	});
	$('#form').submit(function (event) {
		var formData = $('#form').serialize();
		$.ajax({
		url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSev9caRgjgn873mVk-sp5TnJk3IDvZ2FBxZXxaqASL7HQZIEQ/formResponse",
		data: formData,
		type: "POST",
        dataType: "xml",
        statusCode: {
        	0: function () {
            	$(".end-message").slideDown();
        		$(".form-btn").fadeOut();
              //window.location.href = "thanks.html";
            },
            200: function () {
            	$(".false-message").slideDown();
            }
        }
        });
        event.preventDefault();
	});
});



