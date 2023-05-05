$(function(){
  $(".youtube").colorbox({iframe:true, innerWidth:"85%", innerHeight:"70%"});

  $(".indicator li a").on('click',function(e){
    e.preventDefault();
    const num = $(this).parent().index();
    $(".indicator li").removeClass("on");
    $(".indicator li").eq(num).addClass("on");
    $("#slider a li img").stop().fadeOut();
    $("#slider a li img").eq(num).fadeIn();

  });

});