$(document).ready(function(){




  $('.devo-navbar .navbar-ul .devo-nav-bar ul li a').click(function(e){
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 1000);
  })



  $('.menu-icon i ').click(function(){
    $('.navbar-ul').addClass( "left-0");
    $('.over-lay').show();
    $('body').addClass('over-la');
  });


  $('.close-icon i, .over-lay, .a-hide').click(function(){
    $('.navbar-ul').removeClass('left-0');
    $('.over-lay').hide();
    $('body').removeClass('over-la');
  });



// strat min-slider-intro
$('.client-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rtl: true,
    dots:true,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 2000,
    

  });



// client-slider



// end intro-slider-contect
AOS.init();




});