$(function(){

  num = $('#box ul li').size(); // ul li 사이즈
  console.log(num);
  const win = $(window).width(); // 윈도우의 가로길이
  console.log(win);

  if (win<=719) {

    x=1;
    $('#box ul li:lt('+x+')').show();

      $(".btn").click(function(){
      x= (x+1 <= num) ? x+1 : num;
      $('#box ul li:lt('+x+')').show();
      });

  } else if (win>719 && win<=1200) {
    x=2;
    $('#box ul li:lt('+x+')').show();

      $('.btn').click(function(){
      x= (x+2 <= num) ? x+2 : num;
      $('#box ul li:lt('+x+')').show();
      });
  } else {
    x=4;
    $('#box ul li:lt('+x+')').show();

      $('.btn').click(function(){
      x= (x+4 <=num) ? x+4 : num;
      $('#box ul li:lt('+x+')').show();
      });
    
  }
  // Animate the scroll to top
  $('#go_top').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 500);
  })
});