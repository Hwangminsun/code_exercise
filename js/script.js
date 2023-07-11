// 변수 지정

let slideWrapper = document.querySelector('.slide-wrapper'),
slideContainer = slideWrapper.querySelector('.slide-container'),
slides = slideContainer.querySelectorAll('li'),
slideCount = slides.length,
currentIndex = 0,
pager = slideWrapper.querySelector('.pager'),
pagerHTML = '',
timer,
navPrev = slideWrapper.querySelector('#prev'),
navNext = slideWrapper.querySelector('#next');

// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기

if(slideCount > 0) {
    slides.forEach (function (item, index){
        item.style.left = `${index*100}%`;
        pagerHTML +=`<a href="">${index}</a>`;
        /* 풀어서 쓰면 pagerHTML = pagerHTML + <a href="">${index}</a> */
    });

    console.log(pagerHTML);
}

pager.innerHTML = pagerHTML;

let pagerBtn = pager.querySelectorAll('a');

// 슬라이드 이동 함수

function goToSlide(idx) {
 
    //이동
    slideContainer.style.left = `${idx*-100}%`;
    currentIndex = idx;

   // 페이저 업데이트
    for(pb of pagerBtn) {
        pb.classList.remove('active');
    }
    pagerBtn[currentIndex].classList.add('active');

    // 슬라이드 활성화

    for(sl of slides){
        sl.classList.remove('active');
    }
    slides[currentIndex].classList.add('active');   

    // 좌우 버튼 업데이트
if (currentIndex == slideCount - 1){
    navNext.classList.add('disabled');
} else {
    navNext.classList.remove('disabled');
}

if (currentIndex == 0) {
    navPrev.classList.add('disabled');
} else {
    navPrev.classList.remove('disabled');
}
}

goToSlide(0);

// 좌우 버튼 클릭으로 슬라이드 이동시키기
navNext.addEventListener('click',(e) => {
    e.preventDefault();

    if(currentIndex != slideCount - 1) {
        goToSlide(currentIndex + 1);
    }
});
navPrev.addEventListener('click', (e) =>{
    e.preventDefault();

    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    }
});

// 페이저로 슬라이드 이동하기
pagerBtn.forEach((item,index)=>{
    item.addEventListener('click', function(e){
        e.preventDefault();
        goToSlide(index);
    });
});

// 자동 슬라이드
function startAutoSlide(){
    timer = setInterval(()=>{
        let nextIndex = (currentIndex + 1) % slideCount;
        goToSlide(nextIndex);
    }, 4000);
}
startAutoSlide();

slideWrapper.addEventListener('mouseover', ()=>{
    clearInterval(timer);
});
slideWrapper.addEventListener('mouseout', ()=>{
    startAutoSlide();
})