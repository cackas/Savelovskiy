var scrolltimer = 0;
var first = true;
$(document).ready(function(){
	//
	$('.sidebar_mini_menu').on('mouseenter', function (event) {
		   $("body").css("overflow","hidden");
		}).on('mouseleave',  function(){
		   $("body").css("overflow","auto");
	});
	//SlowScroll
	/*$('.scroll_down_1').click(function() {
        slowScroll('.scroll_2');
    });
    $('.scroll_down_2').click(function() {
        slowScroll('.scroll_3');
    });
	$('.scroll_up_2').click(function() {
        slowScroll('.scroll_1');
    });
    $('.scroll_up_3').click(function() {
        slowScroll('.scroll_2');
    });

	function slowScroll(id) {
	    var offset = 0;
	    $('html, body').animate ({
	        scrollTop: $(id).offset ().top - offset
	    }, 800);
	    return false;
	}*/
	//End SlowScroll
	//Кнопка адаптивного меню
	(function() {

	  "use strict";

	  var toggles = document.querySelectorAll(".cmn-toggle-switch");

	  for (var i = toggles.length - 1; i >= 0; i--) {
	    var toggle = toggles[i];
	    toggleHandler(toggle);
	  };

	  function toggleHandler(toggle) {
	    toggle.addEventListener( "click", function(e) {
	      e.preventDefault();
	      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
	    });
	  }

	})();
	//---

	//Отправка данных на почту
	$(".choice_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! В ближайшее время с Вами свяжется наш специалист");
			setTimeout(function() {
				$.magnificPopup.close();
				// Done Functions
				th.trigger("reset");
			}, 500);
		});
		return false;
	});
	//End форма

	//Ползунки
	$("#s_inp").ionRangeSlider({
	    min: 0,
	    max: 400,
	    from: 26,
	    to: 345,
	    type: 'double'
	});
	$("#fl_inp").ionRangeSlider({
	    min: 0,
	    max: 50,
	    from: 1,
	    to: 37,
	    type: 'double'
	});
	//End ползунки

	//Main Page slider
	var slideNow = 1;
	var slideHeight = 100;

	var tempScrollTop, currentScrollTop = 0;

	$(".scroll_down_1").on('click', function() {
		slideDown();
      		setTimeout(function(){
      			marker = true;
      		}, 1000)
	});
	$(".scroll_down_2").on('click', function() {
		slideDown();
      		setTimeout(function(){
      			marker = true;
      		}, 1000)
	});
	$(".scroll_up_2").on('click', function() {
		slideUp();
      		setTimeout(function(){
      			marker = true;
      		}, 1000)
	});
	$(".scroll_up_3").on('click', function() {
		slideUp();
      		setTimeout(function(){
      			marker = true;
      		}, 1000)
	});

	//Scroll main page
	var marker = true;

  $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
    if (delta >= 0) {
        if ( marker ) {
      		slideUp();
      		setTimeout(function(){
      			marker = true;
      		}, 1000)
      	}
    } else {
        if ( marker ) {
      		slideDown();
      		setTimeout(function(){
      			marker = true;
      		}, 1000)
      	}
    }
  });
    /*function Scrolling (delta) {
      if ( new Date().getTime() - scrolltimer < 5 && first == true ) {
        if (delta >= 0) {
          slideUp();
        } else {
          slideDown();
        }
      } 
      sleep(50);
      first = true;
    }

    function sleep(ms) {
      ms += new Date().getTime();
      while (new Date() < ms){}
    }
    
    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
      scrolltimer = new Date().getTime();
      if (first == true) {
        Scrolling(parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail));
        first = false;  
      } else {
        sleep(50);
        Scrolling(parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail));
      }
    });*/
	//End Scroll main page
	//Swipe
   // $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
        
     //   Scrolling(parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail));
   
   // });
    
   /* var swipe = document.getElementById("swipe");
    swipe.addEventListener('mousewheel', handler);
   
    function handler(e) {
      var delta = e.deltaY || e.detail || e.wheelDelta;
        Scrolling(delta);
    }

    //End Scroll main page
    
    var swipe = document.getElementById("swipe");
    swipe.onmousedown = function(e) {
      var mousecoords = e.clientY;
      var shift = 0;
      document.onmousemove = function(ev) {
        shift = mousecoords - ev.clientY;
      };  
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
        if (shift > 50) {
          slideDown();
        }
        if (shift < -50) {
          slideUp();
        }
      };    
      return false;     
    };


    var swipe = document.getElementById("swipe");
    var touchPoint = 0;

    swipe.addEventListener('touchstart', function(e) {
      e.preventDefault();
      touchPoint = e.touches[0].pageY;  
    }, false);
    
    swipe.addEventListener('touchend', function(ev) {
        if (touchPoint - ev.changedTouches[0].pageY > 50) {
          slideDown();
        }
        if (touchPoint - ev.changedTouches[0].pageY < -50) {
          slideUp();
        }
    }, false);*/
	//End Swipe
	function slideDown() {
		if (slideNow<3) {
			$('.main_page_wrap').css({
				'transform': 'translate(0, -' + slideHeight*slideNow+'vh)',
				'-webkit-transform': 'translate(0, -' + slideHeight*slideNow+'vh)',
				'-ms-transform': 'translate(0, -' + slideHeight*slideNow+'vh)',
			});
			slideNow++;
			marker = false;
		} else {
			$('.main_page_wrap').css({
				'transform': 'translate(0, 0)',
			});
			slideNow=1;
			marker = false;
		}
	};
	function slideUp() {
		if (slideNow>1) {
			$('.main_page_wrap').css({
				'transform': 'translate(0, -' + slideHeight*(slideNow-2)+'vh)',
				'-webkit-transform': 'translate(0, -' + slideHeight*(slideNow-2)+'vh)',
				'-ms-transform': 'translate(0, -' + slideHeight*(slideNow-2)+'vh)',
			});
			slideNow--;
			marker = false;
		} else {
			$('.main_page_wrap').css({
				'transform': 'translate(0, -' + slideHeight*2+'vh)',
			});
			slideNow=3;
			marker = false;
		}
	};
	//Slick slider for AboutPage
	$('.slider').slick({
	  arrows: false,
	  slidesToShow: 1,
	});
	$('#prev').on('click', function(){
		$('.slider').slick("slickPrev");
	});
	$('#next').on('click', function(){
		$('.slider').slick("slickNext");
	});

	$('.slider_bd').slick({
	  arrows: false,
	  slidesToShow: 1,
	  infinite: true,
	  speed: 1000,
	  asNavFor: '.slider_bd_nav',
	});
	$('#prev_bd').on('click', function(){
		$('.slider_bd').slick("slickPrev");
	});
	$('#next_bd').on('click', function(){
		$('.slider_bd').slick("slickNext");
	});

	$('.slider_bd_nav').slick({
	  arrows: false,
	  slidesToShow: 5,
	  infinite: true,
	  asNavFor: '.slider_bd',
	  autoplay: false,
	  autoplaySpeed: 4000,
	  focusOnSelect: true,
	  speed: 1000,
	  centerMode: true,	  
	  centerPadding: '-2%',
	  responsive: [
	    {
	      breakpoint: 1025,
	      settings: {
	        slidesToShow: 3,
	      }
	    }
	  ]
	});

	//Main Sales
	$(".sales_btn").on('click', function() {
		if ($(".sales_wrap").hasClass("animated")) {
			$(".sales_wrap").removeClass("animated");
			$(".page-wrap").removeClass("animated");
			$(".sales_bg").removeClass("animated");
		} else {
			$(".sales_wrap").addClass("animated");
			$(".page-wrap").addClass("animated");
			$(".sales_bg").addClass("animated");
		}
	});
	$(".sales_bg").on('click', function() {
		if ($(".sales_wrap").hasClass("animated")) {
			$(".sales_wrap").removeClass("animated");
			$(".page-wrap").removeClass("animated");
			$(".sales_bg").removeClass("animated");
		}
	});
	//EnsMain Sales
	//Mini menu
	$(".cmn-toggle-switch").on('click', function() {
		if ($(".sidebar_mini_menu").hasClass("animated")) {
			$(".sidebar_mini_menu").removeClass("animated");
			$(".page-wrap").removeClass("animated");
		} else {
			$(".sidebar_mini_menu").addClass("animated");
			$(".page-wrap").addClass("animated");
		}
	});		
	//End mini menu
	//Down
		$('.scroll_down_1').mouseout(function(){
			$('.wrap_down').hide();
				return false;
			});
		$('.scroll_down_1').mouseenter(function(){
			$('.wrap_down').show();
				return false;
			});
		$('.scroll_down_1').mousemove(function(e){
			$('.wrap_down').css('left', 'calc('+e.pageX+'px - 4.0vw)').css('top', 'calc('+e.pageY+'px - 5vw)');
		});

		$('.scroll_down_2').mouseout(function(){
			$('.wrap_down').hide();
				return false;
			});
		$('.scroll_down_2').mouseenter(function(){
			$('.wrap_down').show();
				return false;
			});
		$('.scroll_down_2').mousemove(function(e){
			$('.wrap_down').css('left', 'calc('+e.pageX+'px - 4.0vw)').css('top', 'calc('+e.pageY+'px - 5vw)');
		});
	//End Down
	//Up
		$('.scroll_up_2').mouseout(function(){
			$('.wrap_up').hide();
				return false;
			});
		$('.scroll_up_2').mouseenter(function(){
			$('.wrap_up').show();
				return false;
			});
		$('.scroll_up_2').mousemove(function(e){
			$('.wrap_up').css('left', 'calc('+e.pageX+'px - 4.0vw)').css('top', 'calc('+e.pageY+'px - 5.6vw)');
		});
		
		$('.scroll_up_3').mouseout(function(){
			$('.wrap_up').hide();
				return false;
			});
		$('.scroll_up_3').mouseenter(function(){
			$('.wrap_up').show();
				return false;
			});
		$('.scroll_up_3').mousemove(function(e){
			$('.wrap_up').css('left', 'calc('+e.pageX+'px - 4.0vw)').css('top', 'calc('+e.pageY+'px - 5.6vw)');
		});
	//End Up
	//close
		$('.sales_bg').mouseout(function(){
			$('.wrap_close').hide();
				return false;
			});
		$('.sales_bg').mouseenter(function(){
			$('.wrap_close').show();
				return false;
			});
		$('.sales_bg').mousemove(function(e){
			$('.wrap_close').css('left', 'calc('+e.pageX+'px - 9.5vw)').css('top', 'calc('+e.pageY+'px - 3.5vw)');
		});

		$('.info_right_bg').mouseout(function(){
			$('.wrap_close').hide();
				return false;
			});
		$('.info_right_bg').mouseenter(function(){
			$('.wrap_close').show();
				return false;
			});
		$('.info_right_bg').mousemove(function(e){
			$('.wrap_close').css('left', 'calc('+e.pageX+'px - 9.5vw)').css('top', 'calc('+e.pageY+'px - 3.5vw)');
		});
	//End close

	//Right info
		$('.info_right_click').mouseout(function(){
			$('.wrap_right_info').hide();
				return false;
			});
		$('.info_right_click').mouseenter(function(){
			$('.wrap_right_info').show();
				return false;
			});
		$('.info_right_click').mousemove(function(e){
			$('.wrap_right_info').css('left', 'calc('+e.pageX+'px - 12.5vw)').css('top', 'calc('+e.pageY+'px - 3.7vw)');
		});
	//End Right info

	//Main Popup
	$(".online").on('click', function() {
		$(".popup").addClass("animated");
		$(".popup_bg").addClass("animated");
		$(".page-wrap").addClass("animated");
		//$(".sidebar").addClass("animated");
		$("#arr").removeClass("animatedOut");
		$("#coob").removeClass("animatedOut");
		$("#arr").addClass("animated");
		$("#coob").addClass("animated");
		$("#cursor_title").addClass("animated");
		$('.popup_bg').mouseout(function(){
			$('.wrap').hide();
				return false;
			});
		$('.popup_bg').mouseenter(function(){
			$('.wrap').show();
				return false;
			});
		$('.popup_bg').mousemove(function(e){
			$('.wrap').css('left', 'calc('+e.pageX+'px - 5.0vw)').css('top', 'calc('+e.pageY+'px - 3.7vw)');
		});
	});
	$(".close").on('click', function() {
		$(".popup").removeClass("animated");
		$(".popup_bg").removeClass("animated");
		$(".page-wrap").removeClass("animated");
		//$(".sidebar").removeClass("animated");
		$("#arr").removeClass("animated");
		$("#coob").removeClass("animated");
		$("#cursor_title").removeClass("animated");
		$("#arr").addClass("animatedOut");
		$("#coob").addClass("animatedOut");
	});
	$(document).mouseup(function (e) {
		var container = $(".popup");
		if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass("animated")) {
			$(".popup").removeClass("animated");
			$(".popup_bg").removeClass("animated");
			$(".arrow").removeClass("animated");
			$(".page-wrap").removeClass("animated");
			//$(".sidebar").removeClass("animated");
			$("#arr").removeClass("animated");
			$("#coob").removeClass("animated");
			$("#cursor_title").removeClass("animated");
			$("#arr").addClass("animatedOut");
			$("#coob").addClass("animatedOut");
		}
	});
	//End Popup

	//Main 2nd page
	$(".info_right_click").on('click', function() {
		if ($(".info_right").hasClass("animated")) {
			$(".info_right_bg").removeClass("animated");
			$(".info_right").removeClass("animated");
		} else {
			$(".info_right_bg").addClass("animated");
			$(".info_right").addClass("animated");
		}
	});
	$(".info_right_bg").on('click', function() {
		if ($(".info_right").hasClass("animated")) {
			$(".info_right").removeClass("animated");
			$(".info_right_bg").removeClass("animated");
		}
	});
	//End Main 2nd page

	//Gmaps
	/*var map = new GMaps({
		el: '.map_wrap',
		zoom: 15,
		lat: 55.800274,
		lng: 37.593481,
		zoomControl: true,
		zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_TOP},
		mapTypeControl: false,
		streetViewControl: false,
		fullscreenControl: false
	});


	map.drawOverlay({
		lat: 55.802827,
		lng: 37.590342,
		content: '<div class="map_info"><img class="sav_ic" src="img/map/a.png"></div>'
	});
	map.drawOverlay({
		lat: 55.806819,
		lng: 37.594560,
		content: '<div class="map_info"><img class="appl_ic" src="img/map/building.png"><p class="map_title bl">Музей техники<br>Apple</p></div>'
	});
	map.drawOverlay({
		lat: 55.806771,
		lng: 37.583863,
		content: '<div class="map_info"><img class="appl_ic" src="img/map/building.png"><p class="map_title bl">Хлебозавод</p></div>'
	});
	map.drawOverlay({
		lat: 55.803134, 
		lng: 37.585245,
		content: '<div class="map_info"><img class="appl_ic" src="img/map/building.png"><p class="map_title bl">Люмьер-Холл</p></div>'
	});
	map.drawOverlay({
		lat: 55.800835, 
		lng: 37.585365,
		content: '<div class="map_info"><img class="appl_ic" src="img/map/building.png"><p class="map_title bl">Флакон</p></div>'
	});
	map.drawOverlay({
		lat: 55.808262,
		lng: 37.578616,
		content: '<div class="map_info"><img class="m_ic" src="img/map/m.png"><p class="map_title r">Дмитровская</p></div>'
	});
	map.drawOverlay({
		lat: 55.800274, 
		lng: 37.593481,
		content: '<div class="map_info"><img class="bb_ic" src="img/map/bb.png"><p class="map_title b">Metro<br>Cash & Carry</p></div>'
	});
	map.drawOverlay({
		lat: 55.804230,
		lng: 37.578410,
		content: '<div class="map_info"><img class="r_ic" src="img/map/r.png"><p class="map_title g">IL Патио</p></div>'
	});
	map.drawOverlay({
		lat: 55.798417,
		lng: 37.578944,
		content: '<div class="map_info"><img class="r_ic" src="img/map/hospital.png"><p class="map_title r">Поликлиника</p></div>'
	});
	map.drawOverlay({
		lat: 55.808349,
		lng: 37.588550,
		content: '<div class="map_info"><img class="r_ic" src="img/map/masks.png"><p class="map_title wr">Театр<br>без границ</p></div>'
	});
	map.drawOverlay({
		lat: 55.794464,
		lng: 37.592051,
		content: '<div class="map_info"><img class="bb_ic" src="img/map/bb.png"><p class="map_title b">ТК Савеловский</p></div>'
	});
	map.drawOverlay({
		lat: 55.796167,
		lng: 37.599571,
		content: '<div class="map_info"><img class="bb_ic" src="img/map/work.png"><p class="map_title b">БЦ Двинцев</p></div>'
	});
	map.drawOverlay({
		lat: 55.798316,
		lng: 37.604744,
		content: '<div class="map_info"><img class="bb_ic" src="img/map/work.png"><p class="map_title b">Индепендент<br>синома мэгезин</p>'
	});
	map.drawOverlay({
		lat: 55.792080,
		lng: 37.603363,
		content: '<div class="map_info"><img class="bb_ic" src="img/map/work.png"><p class="map_title b">БЦ Новосущёвский</p>'
	});
	map.drawOverlay({
		lat: 55.792664,
		lng: 37.578063,
		content: '<div class="map_info"><img class="bb_ic" src="img/map/kino.png"><p class="map_title s">Формула кино</p>'
	});
	map.drawOverlay({
		lat: 55.804927,
		lng: 37.590342,
		content: '<div class="map_info"><img class="sav1_ic" src="img/map/sav.png"></div>'
	});
	$('.route_wrap_1').on('click', function(){
		if ($('.route_way_1').children().length == 0) {
			map.drawRoute({
				origin: [55.808127, 37.581598],
				destination: [55.804658, 37.590339],
				strokeColor: 'blue',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});
			map.travelRoute({
				origin: [55.808127, 37.581598],
				destination: [55.804658, 37.590339],
				travelMode: 'walking',
				step: function(e) {
					$('.route_way_1').append(e.instructions+' ');
				}
			});
		} else {
			$('.route_way.route_way_1').empty();
			map.cleanRoute({
				origin: [55.808127, 37.581598],
				destination: [55.804658, 37.590339],
				strokeColor: 'blue',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});
		}
	});
	$('.route_wrap_2').on('click', function(){
		if ($('.route_way_2').children().length == 0) {
			map.drawRoute({
				origin: [55.794379, 37.588853],
				destination: [55.804658, 37.590339],
				strokeColor: 'red',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});
			map.travelRoute({
				origin: [55.794379, 37.588853],
				destination: [55.804658, 37.590339],
				travelMode: 'walking',
				step: function(e) {
					$('.route_way_2').append(e.instructions+' ');
				}
			});
		} else {
			$('.route_way.route_way_2').empty();
			map.cleanRoute({
				origin: [55.794379, 37.588853],
				destination: [55.804658, 37.590339],
				strokeColor: 'red',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});
		}
	});
	$('.route_wrap_3').on('click', function(){
		if ($('.route_way_3').children().length == 0) {
			map.drawRoute({
				origin: [55.794379, 37.588853],
				destination: [55.804658, 37.590339],
				strokeColor: 'green',
				travelMode: 'driving',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});	
			map.travelRoute({
				origin: [55.794379, 37.588853],
				destination: [55.804658, 37.590339],
				step: function(e) {
					$('.route_way_3').append(e.instructions+' ');
				}
			});
		} else {
			$('.route_way.route_way_3').empty();
			map.cleanRoute({
				origin: [55.794379, 37.588853],
				destination: [55.804658, 37.590339],
				strokeColor: 'green',
				travelMode: 'driving',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});	
		}
	});
	$('.route_wrap_4').on('click', function(){
		if ($('.route_way_4').children().length == 0) {
			map.drawRoute({
				origin: [55.773962, 37.610540],
				destination: [55.804658, 37.590339],
				strokeColor: 'yellow',
				travelMode: 'driving',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});		
			map.travelRoute({
				origin: [55.773962, 37.610540],
				destination: [55.804658, 37.590339],
				step: function(e) {
					$('.route_way_4').append(e.instructions+' ');
				}
			});
		} else {
			$('.route_way.route_way_4').empty();
			map.cleanRoute({
				origin: [55.773962, 37.610540],
				destination: [55.804658, 37.590339],
				strokeColor: 'yellow',
				travelMode: 'driving',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});	
		};
	});
	$('.route_wrap_5').on('click', function(){
		if ($('.route_way_5').children().length == 0) {
			map.drawRoute({
				origin: [55.752174, 37.617575],
				destination: [55.804658, 37.590339],
				strokeColor: 'brown',
				travelMode: 'driving',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});
			map.travelRoute({
				origin: [55.752174, 37.617575],
				destination: [55.804658, 37.590339],
				step: function(e) {
					$('.route_way_5').append(e.instructions+' ');
				}
			});
		} else {
			$('.route_way.route_way_5').empty();
			map.cleanRoute({
				origin: [55.752174, 37.617575],
				destination: [55.804658, 37.590339],
				strokeColor: 'brown',
				travelMode: 'driving',
				strokeOpacity: 0.5,
				strokeWeight: 6
			});
		}
	});*/
	//End Gmaps	
});
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 15,
	zoomControl: true,
	zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_TOP},
	mapTypeControl: false,
	streetViewControl: false,
	fullscreenControl: false,
	center: {lat: 55.804162, lng: 37.588735}
  });

  var savBounds = {
	north: 55.805294, 
	south: 55.802319,
	east: 37.592735,
	west: 37.589495
  };

  savOverlay = new google.maps.GroundOverlay(
	  'img/map/a.png',
	  savBounds);
  savOverlay.setMap(map);

  var dmBounds = {
	north: 55.808772, 
	south: 55.807003,
	east: 37.5836,
	west: 37.58
  };
  dmOverlay = new google.maps.GroundOverlay(
	  'img/map/m.png',
	  dmBounds);
  dmOverlay.setMap(map);

  var bpBounds = {
	north: 55.807512, 
	south: 55.805747,
	east: 37.587340,
	west: 37.583843
  };
  bpOverlay = new google.maps.GroundOverlay(
	  'img/map/bp.png',
	  bpBounds);
  bpOverlay.setMap(map);

  var ipBounds = {
	north: 55.805988, 
	south: 55.804446,
	east: 37.582119,
	west: 37.579962
  };
  ipOverlay = new google.maps.GroundOverlay(
	  'img/map/ip.png',
	  ipBounds);
  ipOverlay.setMap(map);

  var flBounds = {
	north: 55.805712, 
	south: 55.804147,
	east: 37.585040,
	west: 37.582843
  };
  flOverlay = new google.maps.GroundOverlay(
	  'img/map/fl.png',
	  flBounds);
  flOverlay.setMap(map);

  var lhBounds = {
	north: 55.804712, 
	south: 55.803047,
	east: 37.588540,
	west: 37.584843
  };
  lhOverlay = new google.maps.GroundOverlay(
	  'img/map/lh.png',
	  lhBounds);
  lhOverlay.setMap(map);

  var mtBounds = {
	north: 55.806668, 
	south: 55.804485,
	east: 37.597219,
	west: 37.592910
  };
  mtOverlay = new google.maps.GroundOverlay(
	  'img/map/mt.png',
	  mtBounds);
  mtOverlay.setMap(map);

  var thBounds = {
	north: 55.807431, 
	south: 55.805362,
	east: 37.593324,
	west: 37.589950
  };
  thOverlay = new google.maps.GroundOverlay(
	  'img/map/th.png',
	  thBounds);
  thOverlay.setMap(map);

  var soBounds = {
	north: 55.808031, 
	south: 55.804362,
	east: 37.591924,
	west: 37.585650
  };
  soOverlay = new google.maps.GroundOverlay(
	  'img/map/so.png',
	  soBounds);
  soOverlay.setMap(map);

  var peBounds = {
	north: 55.804238, 
	south: 55.802162,
	east: 37.596524,
	west: 37.592671
  };
  peOverlay = new google.maps.GroundOverlay(
	  'img/map/pe.png',
	  peBounds);
  peOverlay.setMap(map);

  var mcBounds = {
	north: 55.802, 
	south: 55.799762,
	east: 37.593024,
	west: 37.588971
  };
  mcOverlay = new google.maps.GroundOverlay(
	  'img/map/mc.png',
	  mcBounds);
  mcOverlay.setMap(map);

  var dvBounds = {
	north: 55.797240, 
	south: 55.795702,
	east: 37.601224,
	west: 37.598088
  };
  dvOverlay = new google.maps.GroundOverlay(
	  'img/map/dv.png',
	  dvBounds);
  dvOverlay.setMap(map);

  var inBounds = {
	north: 55.798757, 
	south: 55.796702,
	east: 37.606224,
	west: 37.601925
  };
  inOverlay = new google.maps.GroundOverlay(
	  'img/map/in.png',
	  inBounds);
  inOverlay.setMap(map);

  var tkBounds = {
	north: 55.794972, 
	south: 55.793445,
	east: 37.594635,
	west: 37.590674
  };
  tkOverlay = new google.maps.GroundOverlay(
	  'img/map/tk.png',
	  tkBounds);
  tkOverlay.setMap(map);

  var nsBounds = {
	north: 55.792429, 
	south: 55.790945,
	east: 37.606335,
	west: 37.601585
  };
  nsOverlay = new google.maps.GroundOverlay(
	  'img/map/ns.png',
	  nsBounds);
  nsOverlay.setMap(map);

  var fkBounds = {
	north: 55.793295, 
	south: 55.791445,
	east: 37.581335,
	west: 37.577372
  };
  fkOverlay = new google.maps.GroundOverlay(
	  'img/map/fk.png',
	  fkBounds);
  fkOverlay.setMap(map);

  var pcBounds = {
	north: 55.799606, 
	south: 55.797845,
	east: 37.580935,
	west: 37.577029
  };
  pcOverlay = new google.maps.GroundOverlay(
	  'img/map/pc.png',
	  pcBounds);
  pcOverlay.setMap(map);
}

	$(".accordeon dd").hide().prev().click(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});