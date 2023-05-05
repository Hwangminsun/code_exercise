$(function(){

  num = $('#box ul li').size();
  const win = $(window).width();

  if (win<=640) {

    x=2;
    $('#box ul li:lt('+x+')').show();

      $(".btn").click(function(){
      x= (x+2 <= num) ? x+2 : num;
      $('#box ul li:lt('+x+')').show();
      });

  } else if (win>640 && win<=719) {
    x=3;
    $('#box ul li:lt('+x+')').show();

      $('.btn').click(function(){
      x= (x+3 <= num) ? x+3 : num;
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

});