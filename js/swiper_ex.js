$(function(){

  $(function(){
    const swiper = new Swiper('.swiper-container', { 
      slidesPerView: 3, 
      spaceBetween: 12, 
      loop: true,
      loopAdditionalSlides : 1,
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      autoplay: 2000,
      autoplayDisableOnInteraction: false,
      slideToClickedSlide: true,
      pagination: '.swiper-pagination',
      });
    });
  });
