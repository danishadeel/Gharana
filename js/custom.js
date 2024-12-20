// @koala-prepend "plugins/bootstrap.js"
// @koala-exclude "plugins/jquery-validation.js"
// @koala-prepend "plugins/jquery.validate.min.js"
// @koala-prepend "plugins/datepicker.js"
// @koala-prepend "plugins/lity.js"
// @koala-prepend "plugins/slick.min.js"
// @koala-prepend "plugins/map.js"

// Document.Ready Start
$(document).ready(function () {

  if ($(window).width() > 991) {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var tp = $(".default_sticky").attr('data-top');
      if (scroll >= tp) {
        $(".default_sticky").addClass("affix");
      } else {
        $(".default_sticky").removeClass("affix");
      }
    });
  }

  // Copy desktop nav to mobile nav
  $('ul.navigation').clone().appendTo('#mobile_nav');

  // custom tabs
  $('.box').on('click', function () {
    $('.box').removeClass('active');
    $(this).addClass('active');

    const target = $(this).attr('href');
    $('.tab-pane').removeClass('show active');
    $(target).addClass('show active');
  });

  // Adjust stakeholder content according to device
  function adjustList() {
    if ($(window).width() < 767) {
      $('.stakeholder .box .list').each(function () {
        const targetId = $(this).closest('.box').attr('href');
        $(this).prependTo(targetId);
      });
    } else {
      $('.stakeholder .tab-pane .list').each(function () {
        const targetId = $(this).closest('.tab-pane').attr('aria-labelledby');
        $(this).appendTo('#'+targetId);
      });
    }
  }
  // Run on window resize and on load
  adjustList();
  $(window).resize(adjustList);


  // Mobile menu function
  if ($('#mobile_nav ul ul').length > 0) {
    $('#mobile_nav ul ul ').before('<em class="fa fa-plus-squared visible-xs visible-sm menu_expander"></em>')
  }
  if ($('#myNavbar ul ul').length > 0) {
    $('#myNavbar ul ul ').before('<em class="fa fa-plus-squared menu_expander"></em>')
  }

  $('.menu_expander').click(function() {

    $(this).next().slideToggle();
    $(this).toggleClass('toggled');
    $(this).parent().siblings().find('ul').slideUp()
    $(this).parent().siblings().find('em').removeClass('toggled')
  });


  $('.humburger_menu').click(function() {
    $('.navigation').toggleClass('expand');
  });


  //Add sticky button for Book Now
  if ($(window).width() < 769) {
      $(window).on('scroll', function() {
          var y_scroll_pos = window.pageYOffset;
          //var scroll_pos_test = element_position;
          if (y_scroll_pos > 720) {
              $('#scroll-to, .humburger_menu').addClass('sticky');
              $('.referral .btn').addClass('hide');
              $('.responsive_header .header_top .top .btns>a.fixd').addClass('hide');
          } else {
              $('#scroll-to, .humburger_menu').removeClass('sticky');
              $('.referral .btn').removeClass('hide');
              $('.responsive_header .header_top .top .btns>a.fixd').removeClass('hide');
          }
      });
      $(document).on('click', '.humburger_menu.sticky', function(e) {
          e.preventDefault();
          $('body, html').animate({
              scrollTop: 0
          });
      });
  };
  // Open/Close booking form
  $('.sticky_button').on('click', function() {
    $('.nav_form').toggleClass('open');
    $(this).hide();
    $('.datetimepicker').addClass('top-left');
  });
  $('.close_me').on('click', function() {
    $('.nav_form').toggleClass('open');
    $('.sticky_button').show();
    $('.datetimepicker').removeClass('top-left');
  });
  // Menu toggle
  $('.menu').on('click', function() {
      $('.header').toggleClass('show');
      $('.navigation').toggleClass('show');
      $(this).toggleClass('close_btn');
  });
  // Accordion: add active class to title bar.
  $('.panel-collapse').on('show.bs.collapse', function() {
      $(this).siblings('.panel-heading').addClass('active');
  });
  $('.panel-collapse').on('hide.bs.collapse', function() {
      $(this).siblings('.panel-heading').removeClass('active');
  });
  // Collapse open section
  $('#accordion').on('show.bs.collapse', function() {
      $('#accordion .in').collapse('hide');
  });
  // Go to specific ID
  $(document).on('click', '.goto', function(e) {
      var id = $(this).attr('href');
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }
      e.preventDefault();
      var pos = $id.offset().top;
      $('body, html').animate({
          scrollTop: pos
      });
  });


  // Common Slider for Single Slide
  $(".slider").slick({
    autoplay: true,
    dots: true,
    arrows: false,
    fade: true,
    speed: 1000,
    customPaging : function(slider, index) {
      var thumb = $(slider.$slides[index]).data();
      return '<a class="dot">' + (index + 1) + '</a>';
    },
    responsive: [{
        breakpoint: 767,
        settings: {
            // dots: false,
            // arrows: true,
            // infinite: false
        }
    }]
  });
  $(".slider_invisalign").slick({
    dots: true,
  });
  $(".bf_af_slider").slick({
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
    }]
  });
  $(".slider_treat").slick({
    dots: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
    }]
  });


  // Accordion
  $(".accordion_container .item h3").append("<span class=\"plusminus\"><em class='fa-chevron-down'></em></span> ");
  $(".accordion_container .item h3").click(function() {
      $(".accordion_container .item").removeClass('active');
      $(this).parent().addClass('active');
      if ($('.accordion_body').is(':visible')) {
          $(".accordion_body").slideUp(300);
          $(".plusminus").html('<em class="fa-chevron-down"></em>');
      }
      if ($(this).next(".accordion_body").is(':visible')) {
          $(this).next(".accordion_body").slideUp(300);
          $(".accordion_container .item").removeClass('active');
          $(this).children(".plusminus").html('<em class="fa-chevron-down"></em>');
      } else {
          $(this).next(".accordion_body").slideDown(300);
          $(this).children(".plusminus").html('<em class="fa-chevron-up"></em>');
      }
  });
  // len = $('.accordion_container .item').length;
  // cols = 2; //number of desired columns
  // rows = Math.ceil(len / cols);
  // for (i = 0; i < len; i += rows) {
  //     $('.accordion_container .item').slice(i,i+rows).wrapAll("<div class='col-md-6'>");
  // }
  // var $items = $(".accordion_container .box>.item");
  // $items.eq($items.length / 2).before('<div style="break-after: column;"></div>');


  $('.update_form_data').on('click', function() {
      if ($(this).attr('thanks')) {
          var _thanks = $(this).attr('thanks');
          $('.thanks').val('');
          $('.thanks').val(_thanks);
      }
      if ($(this).attr('key')) {
          var _key = $(this).attr('key');
          $('.key').val('');
          $('.key').val(_key);
      }
      if ($(this).attr('accountid')) {
          var _accountid = $(this).attr('accountid');
          $('.accountid').val('');
          $('.accountid').val(_accountid);
      }
      if ($(this).attr('email')) {
          var _email_recipient = $(this).attr('email');
          $('.email').val('');
          $('.email').val(_email_recipient);
      }
  });


  _icons = $('#header_icons').html();
  $('#footer_icons').empty();
  $('#footer_icons').html(_icons);

  $(".nav-link,.smooth_link").click(function() {
    _target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(_target).offset().top
    }, 2000);
});

$('.btn_popup_expand').on('click', function(){
$(this).hide();
});

$('.popup_title').on('click', function(){
  _title = $(this).attr('title');
  _target = $(this).attr('target');
  $(_target).empty();
  $(_target).html(_title);
});

});


$(document).ready(function() {
$('.update_form_data').on('click', function(){
  if($(this).attr('thanks')) {
    var _thanks = $(this).attr('thanks');
    $('.thanks').val('');
    $('.thanks').val(_thanks);
  }
  if($(this).attr('key')) {
    var _key = $(this).attr('key');
    $('.key').val('');
    $('.key').val(_key);
  }
  if($(this).attr('accountid')) {
    var _accountid = $(this).attr('accountid');
    $('.accountid').val('');
    $('.accountid').val(_accountid);
  }
  if($(this).attr('email')) {
    var _email_recipient = $(this).attr('email');
    $('.email').val('');
    $('.email').val(_email_recipient);
  }
});
});
$(document).on('change','.update_form_data_select', function(){
  var loc = $(this).val();
  var _rel = $(this).attr('rel');
  if($(_rel).find('.'+loc).attr('thanks')) {
    var _thanks = $(_rel).find('.'+loc).attr('thanks');
    $('.thanks').val('');
    $('.thanks').val(_thanks);
  }
  if($(_rel).find('.'+loc).attr('key')) {
    var _key = $(_rel).find('.'+loc).attr('key');
    $('.key').val('');
    $('.key').val(_key);
  }
  if($(_rel).find('.'+loc).attr('accountid')) {
    var _accountid = $(_rel).find('.'+loc).attr('accountid');
    $('.accountid').val('');
    $('.accountid').val(_accountid);
  }
  if($(_rel).find('.'+loc).attr('email')) {
    var _email = $(_rel).find('.'+loc).attr('email');
    $('.email').val('');
    $('.email').val(_email);
  }
});

$(document).ready(function() {
$('.change_practice_logo').on('click', function(){

  _target = $(this).attr('target');
  _source = $(this).attr('rel');
  $(_target).attr('src', _source);

});
});



$(document).ready(function() {
  $('.update_form_data').on('click', function(){
    if($(this).attr('thanks')) {
      var _thanks = $(this).attr('thanks');
      $('.thanks').val('');
      $('.thanks').val(_thanks);
    }
    if($(this).attr('key')) {
      var _key = $(this).attr('key');
      $('.key').val('');
      $('.key').val(_key);
    }
    if($(this).attr('accountid')) {
      var _accountid = $(this).attr('accountid');
      $('.accountid').val('');
      $('.accountid').val(_accountid);
    }
    if($(this).attr('email')) {
      var _email_recipient = $(this).attr('email');
      $('.email').val('');
      $('.email').val(_email_recipient);
    }
  });
});
$(document).on('change','.update_form_data_select', function(){
  var loc = $(this).val();
  var _rel = $(this).attr('rel');
  if($(_rel).find('.'+loc).attr('thanks')) {
    var _thanks = $(_rel).find('.'+loc).attr('thanks');
    $('.thanks').val('');
    $('.thanks').val(_thanks);
  }
  if($(_rel).find('.'+loc).attr('key')) {
    var _key = $(_rel).find('.'+loc).attr('key');
    $('.key').val('');
    $('.key').val(_key);
  }
  if($(_rel).find('.'+loc).attr('accountid')) {
    var _accountid = $(_rel).find('.'+loc).attr('accountid');
    $('.accountid').val('');
    $('.accountid').val(_accountid);
  }
  if($(_rel).find('.'+loc).attr('email')) {
    var _email = $(_rel).find('.'+loc).attr('email');
    $('.email').val('');
    $('.email').val(_email);
  }
});

$('.hero_form input').focus(function () {
  $(this).parents('.form-group').addClass('focus');
})

$('.hero_form input').blur(function () {
  if(!$(this).val()){
    $(this).parents('.form-group').removeClass('focus');
  }
})
