$(function(){
// 퀵메뉴
  const top=parseInt($("#quick").css("top"))
  $(window).on("scroll", function(){

    const dis=$(window).scrollTop();
    $("#quick").stop().animate({top:dis+top+"px"},1000);
  });

  $("quick ul a").click(function(e) {
    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();
  });

// 퀵메뉴 끝

$(function() {
  $(".wp1").waypoint(function() {
    $(".wp1").addClass('animated fadeIn');
  }, {
    offset: '75%'
  });

  $(".wp2").waypoint(function() {
    $(".wp2").addClass('animated fadeIn');
  }, {
    offset: '75%'
  });

  $(".wp3").waypoint(function() {
    $(".wp3").addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $(".wp4").waypoint(function() {
    $(".wp4").addClass('animated fadeInOut');
  }, {
    offset: '75%'
  });

  $(".wp5").waypoint(function() {
    $(".wp5").addClass('animated fadeInOut');
  }, {
    offset: '75%'
  });

  $(".wp6").waypoint(function() {
    $(".wp6").addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });

  $(".wp7").waypoint(function() {
    $(".wp7").addClass('animated fadeIn');
  }, {
    offset: '50%'
  });


  $(".wp8").waypoint(function() {
    $(".wp8").addClass('animated fadeIn');
   },{ offset: '50%'
  });

  $(".aa").waypoint(function() {
    $(".aa").addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });
  
 });

});

