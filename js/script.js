jQuery(document).ready(function ($) {

    $('#tabs').tab();

    $('#preview__btn-down').click(function(){
      var el = $(this).attr('href');
      $('body').animate({
          scrollTop: $(el).offset().top}, 500);
      return false;
    });

    $('select').styler();

    $('#slider').slick({
      infinite: true,
      slidesToShow: 5,
      dots: true,
      prevArrow:false,
      nextArrow: false,
      slidesToScroll: 1
    });

}); /*ready end*/
