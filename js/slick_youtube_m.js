$(function(){
    $(".youtube").colorbox({iframe:true, innerWidth:"85%", innerHeight:"65%"});
    $("#inner").slick({

    centerMode:true,
    slide:"li",
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow:2,
    speed:2000,
    pauseOnHover:true,
    dots:false,
    arrows:false,
    responsive:[
        {
          breakpoint:641,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

});