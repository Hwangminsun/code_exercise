$(function(){
  $('.slider').slick({
    autoplay: true,
    infinity: true,
    slidesToShow:4,
    slidesToScroll:1,
    dots:true,

    responsive: [
                {
              breakpoint:800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll:1
                  }
                }
    ]
  });

  $(".slick-buttons a").on("click",function(e){
    const n=$(this).index();
    $(".slick-buttons a").removeClass();
    $(this).addClass("on");
    if (n==0) {
      $(".slider").slick("slickUnfilter");
    }else if(n==1){
      $(".slider").slick("slickUnfilter");
      $(".slider").slick("slickFilter",$(".slider li").filter(".aaa"));
    }else if(n==2){
      $(".slider").slick("slickUnfilter");
      $(".slider").slick("slickFilter", $(".slider li").filter(".bbb"));
    }else if(n==3){
      $(".slider").slick("slickUnfilter");
      $(".slider").slick("slickFilter", $(".slider li").filter(".ccc"));
    }else{
      $(".slider").slick("slickUnfilter");
      $(".slider").slick("slickFilter", $(".slider li").filter(".ddd"));
    }
    //slickUnfilter, 적용된 .filter를 해제
    e.preventDefault();
  });

});