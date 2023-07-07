$(function () {
  const nav = document.querySelectorAll(".top_menu li a");

  console.log(nav);


  // intro scroll_down
  $(".view_more").click(function(){
    $("html, body").animate({scrollTop:$("#ban").offset().top},1000);
  });

  // 스크롤 안되도록
/*  $("#intro").on("mousewheel",function(){
    return false;
  }); */

  // button easing
  $('.button_group button').on('mouseover', function(){
    $(this).children('span').stop(true).animate({width:'100%'}, 'easeOutQuad');
    $(this).css('color','#333');
  });

  $('.button_group button').on('mouseout', function(){
    $('.button_group button .bg').stop(true).animate({width: '0%'}, 'easeOutQuad');
    $(this).css('color','#666');
  });

// 모바일 웹 새창 열기
  let win;
    function winOpen(){

  win = window.open('http://icelatte.dothome.co.kr','pf','toolbar=no,location=no,status=no,menubar=no,resizable=no,scrollbars=yes,width=450,height=715,left=710,top=1500');
}

  // background width ani
  // $('#wrap_1').on('mouseover', function(){
  //   $('.background').stop(true).animate({width: '100%'}, 'easeOut');
  // });

  // $('#wrap_1').on('mouseout', function(){
  //   $('.background').stop(true).animate({width: '0%'}, 'easeOut');
  // });

  // top 아이콘 부드럽게 따라오기
  // const top = parseInt($("#go_top").css("top"));
  // $(window).on("scroll", function () {

  //     const dis = $(window).scrollTop();

  //     $("#go_top").stop().animate({
  //         top: dis + top + "px"
  //     }, 1100);
  // });

  // Animate the scroll to top
  $("#go_top").click(function (event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

// 다크모드
// function darkmode() {
//   const bodySelector = document.body;
//   bodySelector.classList.toggle("dark-mode");
// }

//마우스 포인터
// $(window).on("load", function () {
//   setInterval(function () {
//     $(".cursor").css({
//       opacity: 1,
//     });

//     $(".cursor-pointer").css({
//       opacity: 1,
//     });
//   }, 5000);
// });

// $(window).mousemove(function (e) {
//   var agent = navigator.userAgent.toLowerCase();
//   var cursorX = e.pageX - 20;
//   var cursorY = e.pageY - 20;

//   if (
//     (navigator.appName == "Netscape" &&
//       navigator.userAgent.search("Trident") != -1) ||
//     agent.indexOf("msie") != -1
//   ) {
//     $(".cursor").css({
//       top: cursorY,
//       left: cursorX,
//     });
//     $(".cursor-pointer").css({
//       top: e.pageY,
//       left: e.pageX,
//     });

//     $("button, a").hover(
//       function () {
//         $(".cursor").css("backgroundColor", "rgba(255,252,243,0.5)");
//       },
//       function () {
//         $(".cursor").css("backgroundColor", "transparent");
//       }
//     );
//   } else {
//     $(".cursor, .cursor-pointer").css({
//       transform: "translate(" + e.pageX + "px," + e.pageY + "px)",
//     });

//     $("button, a").hover(
//       function () {
//         $(".cursor-pointer").css("backgroundColor", "rgba(255,252,243,0.9)");
//         $(".cursor, .cursor-pointer").addClass("hover");
//       },
//       function () {
//         $(".cursor-pointer").css("mixBlendMode", "none");
//         $(".cursor, .cursor-pointer").removeClass("hover");
//       }
//     );
//   }

