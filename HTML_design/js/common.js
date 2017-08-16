$('.select_list_current').on('click', function(){
    $(this).parent('.select_list_wrapper').toggleClass('open');
    $(this).parent().find('.select_list').slideDown("slow");
});
$(document).click(function (event) {
        if ($(event.target).closest('.select_list_wrapper').length == 0 && $(event.target).attr('id') != 'select_list_current') {
            $('.select_list_wrapper.open').toggleClass('open');
			$(this).parent().find('.select_list').hide("slow");
        }
    });


$('.select_list_radio').on('click', function(){
    var current = $(this).find('label span').text();
    $(this).parents('.select_list_wrapper').find('.select_list_current .select_list_current_item').text(current);
    $(this).parents('.select_list_wrapper').removeClass('open');
    $(this).parents('.select_list_wrapper').find('.select_list').css('display', 'block');
});

$(document).ready(function(){
    $("#search_select").keyup(function(){
        _this = this;
		$.each($("#select_city .select_list_radio label span"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                $(this).parents('#select_city .select_list_radio label').hide("slow").addClass('hidden');
             else
             $(this).parents('#select_city .select_list_radio label').show("slow").removeClass('hidden');                
        });
    });
});
$(document).ready(function(){
    $("#search_select_type").keyup(function(){
        _this = this;
		$.each($("#select_type .sort_checkbox label span"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                $(this).parents('#select_type .sort_checkbox label').hide("slow").addClass('hidden');
             else
             $(this).parents('#select_type .sort_checkbox label').show("slow").removeClass('hidden');                
        });
    });
});

(function($){
    $(document).ready(function() {
		$(".scroll").mCustomScrollbar({
			scrollButtons:{enable:true},
			theme:"light-thick",
			scrollbarPosition:"inside"
		});
     });
})(jQuery);

$('.owl-news').owlCarousel({
	loop:true,
	nav:true,
	dots:false,
	responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2,
				autoplay:true,
				autoplayTimeout:80000,
			}
		}
});
$('.owl-brands').owlCarousel({
	loop:true,
	nav:true,
	dots:false,
	responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5,
				margin:40,
				autoplay:true,
				autoplayTimeout:80000,
			}
		}
});
$('.owl-seen').owlCarousel({
	loop:true,
	nav:true,
	dots:false,
	responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3,
				margin:0,
				autoplay:true,
				autoplayTimeout:80000,
			}
		}
});
$('.owl-related').owlCarousel({
	loop:true,
	nav:true,
	dots:false,
	responsiveClass:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:6,
				margin:0,
				autoplay:true,
				autoplayTimeout:80000,
			}
		}
});
$('.owl-logos').owlCarousel({
	loop:true,
	nav:true,
	dots:false,
	responsiveClass:true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:4
			},
			1000:{
				items:8,
				margin:40,
				autoplay:true,
				autoplayTimeout:80000,
			}
		}
});
$('.thumb').owlCarousel({
	loop:true,
	nav:true,
	dots:false,
	responsiveClass:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3,
				margin:10,
				autoplay:true,
				autoplayTimeout:80000,
			}
		}
});
$(".various").fancybox({
fitToView    : false,
width        : '100%',
height        : '100%',
autoSize    : true,
closeClick    : false,
closeBtn : true,
openEffect    : 'none',
closeEffect    : 'none'
});

	listButton = $('div.list');
	gridButton = $('div.grid');
	wrapper = $('div#grid');

	gridButton.on('click',function(){
			
	listButton.removeClass('on');
	gridButton.addClass('on');
	wrapper.removeClass('list').addClass('grid');
		  
	});
		
	listButton.on('click',function(){
			
	gridButton.removeClass('on');
	listButton.addClass('on');
	wrapper.removeClass('grid').addClass('list');
		  
	});

    $('#list_tags li').each(function(){
      posDiv($(this));
      randomSize($(this));
    });
    $('.wrap_search_tag').hover(function(){
      $('#list_tags li').each(function(){
        animateDiv($(this));
      });
    }, 
    function(){
      $('#list_tags li').stop();
    });
    $('#list_tags li').hover(function(){
      $('#list_tags li').each(function(){
        $('#list_tags li').stop();
      });
      $(this).addClass('active-tag');
    }, 
    function(){
      $('#list_tags li').each(function(){
        animateDiv($(this));
      });
      $(this).removeClass('active-tag');
    });
    function makeNewPosition(){
      var h = $('#list_tags').height() - 5;
      var w = $('#list_tags').width() - 5; 
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      return [nh,nw];    
    }
    function animateDiv(c){
      var newq = makeNewPosition();
      var pos = makeNewPosition();
      $(c).animate({ top: newq[0], left: newq[1] }, 20000, 'linear', function(){
        animateDiv(c);        
      });
    };
    function posDiv(c){
      var pos = makeNewPosition();
      $(c).css({ top: pos[0], left: pos[1] });
    };
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function randomSize(c){
      var size = getRandomInRange(10, 24);
      $(c).css({ 'font-size': size });
    }

$('.tabs-nav li, .tabs_nav li').click(function(e) {
  var a = $(this),
      parent = a.parents('.tabs, .tabs_info, .tabs_prices'),
      nav = parent.children('.tabs-nav, .tabs_nav').children('li'),
      box = parent.children('.tabs-box, .tabs_box').children('div');
 
  if (!a.hasClass('active')) {
    a.addClass('active')
      .siblings().removeClass('active');
 
    box.eq(a.index()).addClass('active')
      .siblings().removeClass('active');
  }
 
  e.preventDefault();
});

$(".thumb").on("click", "a", function () {
		   $(this).addClass("current").siblings().removeClass("current")
		   $(".photo img").attr("src", $(this).prop("href"))
		   return false;
		})
		
$('.cbutton, .owl-next, .owl-prev, .search_form .submit, .social li a, .tovar_hidden_box_button').click(function(){
    var $ele = $(this);
    $ele.addClass("cbutton--effect-sanja cbutton--click");
    setTimeout(function(){
        $ele.removeClass("cbutton--effect-sanja cbutton--click");
    }, 400);
});
		