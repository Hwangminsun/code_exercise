$(function(){  	
    $("article").on("mouseover",function(){
      const vid = $(this).find("video").get(0);
/*해당 동영상을 참조.video 태그 하나밖에 없으므로 순서 값은 0*/
/* get은 제이쿼리 태그(노드)를 자바스크립트 태그로 전환해주는 역할을 함
  video가 여러 개 있을 경우 get(0)을 했기 때문에 첫번재 태그만 선택함 */    
    
      vid.currentTime=0; //currentTime : 재생위치(초단위)
      // 동영상의 재생위치를 처음(0)으로 설정
      vid.play();
      $(this).stop().animate({"width":"35%"},1000,function(){
        $(this).find("h3").stop().animate({"right":"10px"},400);
        $(this).find("p").stop().animate({"right":"10px"},800);
      });
      $(this).find("video").stop().animate({"opacity":"0.9"},1200);

    });

    $("article").on("mouseout",function(){

        const vid = $(this).find("video").get(0);
        vid.pause();
        $(this).stop().animate({"width":"12%"},700)
        $(this).find("video").stop().animate({"opacity":"0"},2000);
        $(this).find("h3").stop().animate({"right":"-310px"},200);
        $(this).find("p").stop().animate({"right":"-310px"},500);
      });
  
  });
