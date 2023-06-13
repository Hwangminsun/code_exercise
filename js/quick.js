$(function(){
// 퀵메뉴
  const top=parseInt($("#quick").css("top"))
  $(window).on("scroll", function(){

    const dis=$(window).scrollTop();
    $("#quick").stop().animate({top:dis+top+"px"},1000);
  });

  $("#quick ul li a").click(function(e) {
    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();
  });

// 퀵메뉴 끝


});

