// 상단 광고 X버튼 관련 이벤트
const topAd = document.querySelector(".topAd");
const topAdImg = document.querySelectorAll(".topAdImg");
const closeBtn = document.querySelector(
  ".top_advertisement img:nth-of-type(2)"
);

closeBtn.onclick = (event) => {
  event.preventDefault();
  topAd.classList.add("activate");

  topAdImg.forEach((img) => {
    img.classList.add("activate")
  })
};

// header의 로고 내부 span에 a태크의 연결된 주소이동 이벤트 막기
const logoCursor = document.querySelector(".logo span");

logoCursor.addEventListener('click', (event) => {
    event.preventDefault();
  });
  
// 무비차트1 상단버튼 클릭시 색깔 변경
const movieChartBtn1 = document.querySelector('.btn_wrap > h3:nth-of-type(1) > a');
const movieChartBtn2 = document.querySelector('.btn_wrap > h3:nth-of-type(2) > a');

movieChartBtn1.addEventListener('click', (event) => {
  event.preventDefault();
  if(!movieChartBtn1.classList.contains('activate')) {
    movieChartBtn1.classList.add('activate')
    movieChartBtn2.classList.remove('activate')
  }
})

movieChartBtn2.addEventListener('click', (event) => {
  event.preventDefault();
  if(!movieChartBtn2.classList.contains('activate')) {
    movieChartBtn2.classList.add('activate')
    movieChartBtn1.classList.remove('activate')
  }
})

// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  slidesPerGroup : 5,
  spaceBetween: 35,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const clickBtn = document.querySelector('.movieChart1 .movieChart1_contents .movieChart1_btn > a')
const btns = document.querySelectorAll('.swiper .swiper-slide > .movieChart2_btn')
const ranks = document.querySelectorAll('.rank');
const ages = document.querySelectorAll('.age');
const images = document.querySelectorAll('.swiper .swiper-slide > img');

clickBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // 지도가 펼쳐져있다면 접기
  if (myMapPart.classList.contains("on")) {
    myMapPart.classList.remove("on");
  }

  for (let i = 0; i < 20; i++) {
    btns[i].classList.toggle("on");
    ranks[i].classList.toggle("on");
    ages[i].classList.toggle("on");
    images[i].classList.toggle("on");
  }
})

// 무비차트 <-> 상영예정작(상영예정작 activate)
const movieNames = document.querySelectorAll('.movieName');
const eggs = document.querySelectorAll('.info_bottom > span > img');
const eggDetails = document.querySelectorAll('.percent');
const rates = document.querySelectorAll('.info_bottom > span:nth-of-type(2)');
const mySwiper = document.querySelector('.swiper');

const expectedRate2 = [
  "예매율 3.7%", "예매율 1.9%", "예매율 1.4%", "예매율 0.4%", "예매율 0.0%", "예매율 0.0%", "예매율 0.0%", "예매율 0.0%", "예매율 30.5%", "예매율 0.6%", "예매율 0.3%", "예매율 0.0%", "예매율 43.1%", "예매율 0.1%", "예매율 0.1%", "예매율 0.0%", "예매율 0.0%", "예매율 0.0%", "예매율 0.1%", "예매율 0.0%", 
]
const expectedEggDetail2 = [
  " 99% ", " 99% ", " 99% ", " 99% ", " ? ", " ? ", " ? ", " ? ", " 99% ", " 41% ", " 99% ", " ? ", " 99% ", " ? ", " 99% ", " 99% ", " ? ", "99% ", " ? ", " ? "
]
const expectedAge2 = [
  "url('./image/age_15.png')", "url('./image/age_All.png')", "url('./image/age_15.png')", "url('./image/age_12.png')", "url('./image/age_15.png')", "url('./image/age_12.png')", "url('./image/age_All.png')", "url('./image/age_15.png')", "url('./image/age_15.png')", "url('./image/age_12.png')", "url('./image/age_15.png')", "url('./image/age_All.png')","url('./image/age_All.png')", "url('./image/age_12.png')", "url('./image/age_15.png')", "url('./image/age_All.png')", "url('./image/age_15.png')", "url('./image/age_12.png')", "url('./image/age_All.png')", "url('./image/age_All.png')", 
]
const expectedName2 = [
  "사운드 오브 프리덤", "윌레스와 그로밋 더...", "바튼 아카데미", "오키쿠와 세계", "[미드나잇아티스트]...", "서바이벌 택틱스", "K스쿨", "벗어날 탈 脫", "파묘", "기적의 시작", "조폭인 내가 고등학...", "[사이다경제] 블로그...", "듄-파트2", "[미드나잇아티스트]...", "여기는 아미코", "막걸리가 알려줄거야", "갓랜드", "이프 온리", "아이엠 티라노", "생츄어리 2-쿼카가..."
]
const btn2List = [
  "https://m.media-amazon.com/images/M/MV5BNTAwNWQ1ZjQtZDFmMC00YjNlLWFlNjItMjJlYzZkMjJlNzkyXkEyXkFqcGdeQXVyNzc0MTgzMzU@._V1_SX300.jpg",
  "./image/poster/chart7.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTI0OGU2ZGItMWJkYi00MTU3LTkxOWUtMGRhZDFmY2JiMWU1XkEyXkFqcGdeQXVyOTgwNTk0MzY@._V1_SX300.jpg",
  "./image/poster/expected5.jpg",
  "./image/poster/expected6.jpg",
  "./image/poster/expected7.jpg",
  "./image/poster/expected8.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDNlMzFhODQtMjJlZi00NzcwLTkzOWEtOWU2MTRjY2Y1ZjY3XkEyXkFqcGdeQXVyMTcxMTUwMDE1._V1_SX300.jpg",
  "./image/poster/chart14.jpg",
  "./image/poster/chart20.jpg",
  "./image/poster/expected12.jpg",
  "./image/poster/chart1.jpg",
  "./image/poster/expected14.jpg",
  "https://m.media-amazon.com/images/M/MV5BM2UwYjRmNDItZjNhYi00NDc2LTg5MjctNTFmMjVmYjEwNjk4XkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_SX300.jpg",
  "./image/poster/expected16.jpg",
  "https://m.media-amazon.com/images/M/MV5BYTE1NzQ3MDMtNjYwMi00ZDA0LWJhMDktNDUwMmU4ZjEyNmM0XkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BZjg1ZDg4ZTQtMmFjNS00N2VkLWEzNDUtYzE3YTUxZjU5ZjE2XkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg",
  "./image/poster/expected19.jpg",
  "https://m.media-amazon.com/images/M/MV5BZGM3YjgzZGMtOWYwMy00N2Y1LWI1MDctNTAyMTI5ZWFhNjZhXkEyXkFqcGdeQXVyMTIyNDUxNDU5._V1_SX300.jpg"
]

movieChartBtn2.addEventListener('click', () => {
  if(movieChartBtn2.classList.contains('activate')) {
    swiper.slideTo(1, 800, false);
    setTimeout(function() {
      for (let j = 0; j < 20; j++) {
        // 영화 포스터
        images[j].src = btn2List[j];
        // 연령대
        ages[j].style.backgroundImage = expectedAge2[j];
        // 영화 이름
        movieNames[j].innerHTML = expectedName2[j];
        // egg
        eggs[j].src = "./image/egg1.png";
        // egg detail
        eggDetails[j].innerText = expectedEggDetail2[j];
        // 예매율
        rates[j].innerHTML = expectedRate2[j];
        // 버튼
        if (btns[j].classList.contains('on')) {
          btns[j].classList.remove('on');
          ranks[j].classList.remove('on');
          ages[j].classList.remove('on');
          images[j].classList.remove('on');
        }
      }
    }, 100);
  }
})

// 무비차트 <-> 상영예정작(무비차트 activate)
const expectedEgg1 = [
  "./image/egg1.png", "./image/egg1.png", "./image/egg2.png", "./image/egg2.png", "./image/egg1.png", "./image/egg2.png", "./image/egg1.png", "./image/egg1.png", "./image/egg1.png", "./image/egg2.png", "./image/egg1.png", "./image/egg2.png", "./image/egg2.png", "./image/egg1.png", "./image/egg2.png", "./image/egg1.png", "./image/egg2.png", "./image/egg2.png", "./image/egg2.png", "./image/egg1.png"
]
const expectedRate1 = [
  "예매율 43.7%", "예매율 26.7%", "예매율 5.9%", "예매율 5.5%", "예매율 3.4%", "예매율 3.0%", "예매율 1.8%", "예매율 1.3%", "예매율 0.9%", "예매율 0.8%", "예매율 0.7%", "예매율 0.6%", "예매율 0.6%", "예매율 0.6%", "예매율 0.5%", "예매율 0.4%", "예매율 0.4%", "예매율 0.4%", "예매율 0.4%", "예매율 0.3%", 
]
const expectedEggDetail1 = [
  " 99% ", " 99% ", " 95% ", " 92% ", " 99% ", " 92% ", " 99% ", " 99% ", " 93% ", " 96% ", " 99% ", " 77% ", " 96% ", " 40% ", " 95% ", " 99% ", " 96% ", "84% ", " 96% ", " 98% "
]
const expectedAge1 = [
  "url('./image/age_12.png')", "url('./image/age_15.png')", "url('./image/age_All.png')", "url('./image/age_15.png')", "url('./image/age_15.png')", "url('./image/age_12.png')", "url('./image/age_All.png')", "url('./image/age_15.png')", "url('./image/age_15.png')", "url('./image/age_12.png')", "url('./image/age_18.png')", "url('./image/age_15.png')", "url('./image/age_15.png')", "url('./image/age_12.png')", "url('./image/age_12.png')", "url('./image/age_12.png')", "url('./image/age_All.png')", "url('./image/age_All.png')", "url('./image/age_15.png')", "url('./image/age_15.png')"
]
const expectedName1 = [
  "듄-파트2", "파묘", "윙카", "귀멸의 칼날-인연의...", "사운드 오브 프리덤", "건국전쟁", "윌레스와 그로밋 더...", "바튼 아카데미", "오펜하이머", "도그데이즈", "가여운 것들", "데드맨", "시민덕희", "기적의 시작", "소풍", "오키쿠와 세계", "아기상어 극장판-사...", "스노우 퍼핀즈", "추락의 해부", "조폭인 내가 고등학..."
]
const btn1List = [
  "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDNlMzFhODQtMjJlZi00NzcwLTkzOWEtOWU2MTRjY2Y1ZjY3XkEyXkFqcGdeQXVyMTcxMTUwMDE1._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNWFkNzI5NDQtY2QyZS00NGE2LWJiNDEtMTI5ZTFmNDE0ZjcwXkEyXkFqcGdeQXVyNjk1NzU1Mjk@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTAwNWQ1ZjQtZDFmMC00YjNlLWFlNjItMjJlYzZkMjJlNzkyXkEyXkFqcGdeQXVyNzc0MTgzMzU@._V1_SX300.jpg",
  "./image/poster/chart6.jpg",
  "./image/poster/chart7.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDc2MzNkMjMtZDY5NC00NmQ0LWI1NjctZjRhNWIzZjc4MGRiXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
  "./image/poster/chart10.jpg",
  "https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
  "./image/poster/chart12.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDc0NDMzYTEtMjcwMC00MTIyLWE2MjctZDc3YTlhMTFjNjJkXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_SX300.jpg",
  "./image/poster/chart14.jpg",
  "./image/poster/chart15.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTI0OGU2ZGItMWJkYi00MTU3LTkxOWUtMGRhZDFmY2JiMWU1XkEyXkFqcGdeQXVyOTgwNTk0MzY@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjY3ZTU3ZWEtY2Q4MS00ZGUyLWE3ZmQtY2MyMDhjZGE1MGZmXkEyXkFqcGdeQXVyMTA1NjE5MTAz._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BYjA4MTA5N2ItOGVhYS00NzVmLWJlMzEtMjkyODBlMjFjNjVjXkEyXkFqcGdeQXVyMjQ2Nzc4MjM@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMDBiYmRkNjUtYzc4My00NGFiLWE2NWUtMGU1ZDA1NTQ3ZjQwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
  "./image/poster/chart20.jpg"
]

movieChartBtn1.addEventListener('click', () => {
  if(movieChartBtn1.classList.contains('activate')) {
    swiper.slideTo(1, 800, false);
    setTimeout(function() {
      for (let k = 0; k < 20; k++) {
        // 영화 포스터
        images[k].src = btn1List[k];
        // 연령대
        ages[k].style.backgroundImage = expectedAge1[k];
        // 영화 이름
        movieNames[k].innerHTML = expectedName1[k];
        // egg
        eggs[k].src = expectedEgg1[k];
        // egg detail
        eggDetails[k].innerText = expectedEggDetail1[k];
        // 예매율
        rates[k].innerHTML = expectedRate1[k];
        // 버튼
        if (btns[k].classList.contains('on')) {
          btns[k].classList.remove('on');
          ranks[k].classList.remove('on');
          ages[k].classList.remove('on');
          images[k].classList.remove('on');
        }
      }
    }, 100);
  }
})
// 카카오 맵 api
// CGV 위치(위도/경도)
const lat1 = 37.501526
const lng1 = 127.026326

const lat2 = 37.524545
const lng2 = 127.029434

const lat3 = 37.392997
const lng3 = 126.962363

const lat4 = 37.393338
const lng4 = 127.112306

const lat5 = 37.533714
const lng5 = 126.734544

const lat6 = 37.417728
const lng6 = 126.677328

const lat7 = 37.755680
const lng7 = 128.898690

const lat8 = 37.850538
const lng8 = 127.743739

const lat9 = 36.502566
const lng9 = 127.247559

const lat10 = 36.807710
const lng10 = 127.148387

const lat11 = 35.941317
const lng11 = 128.622771

const lat12 = 35.824593
const lng12 = 128.527074

const lat13 = 35.149332
const lng13 = 129.063932

const lat14 = 35.168732
const lng14 = 129.129799

const lat15 = 36.130153
const lng15 = 128.327741

const lat16 = 35.237559
const lng16 = 128.582367

const lat17 = 33.500140
const lng17 = 126.527344

const lat18 = 34.950836
const lng18 = 127.486345

// 서울특별시청 위도/경도
const lat = 37.566535;
const lng = 126.9779692;

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨
    };

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(lat, lng); 

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

////////////////////////////////////////////////
// 마커를 표시할 위치와 title 객체 배열입니다 //
////////////////////////////////////////////////
const myMapPart = document.querySelector('.movieChart1 .movieChart1_contents')
const viewBtns = document.querySelectorAll('.movieChart2_btn .btn_white')
const closeBtns = document.querySelectorAll('.btn_red');

// 지도에 표시된 마커 객체를 가지고 있을 배열
var markers = [];

closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if(myMapPart.classList.contains('on')) {
      myMapPart.classList.remove('on');
    }
    for (let m = 0; m < markers.length; m++) {
      markers[m].setMap(null);
    }
  })
})

viewBtns.forEach((viewBtn, index) => {
  viewBtn.addEventListener('click', (event) => {
    event.preventDefault()

    // 버튼 클릭시 지도(height 변화)
    myMapPart.classList.add('on')
    var positions = [[
      {
          title: '강남CGV', 
          latlng: new kakao.maps.LatLng(lat1, lng1)
      },
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ],[
      {
          title: '강남CGV', 
          latlng: new kakao.maps.LatLng(lat1, lng1)
      },
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ],[
      {
          title: '강남CGV', 
          latlng: new kakao.maps.LatLng(lat1, lng1)
      },
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ],[
      {
          title: '강남CGV', 
          latlng: new kakao.maps.LatLng(lat1, lng1)
      },
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ],[
      {
          title: '강남CGV', 
          latlng: new kakao.maps.LatLng(lat1, lng1)
      },
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ],[
      {
          title: '강남CGV', 
          latlng: new kakao.maps.LatLng(lat1, lng1)
      },
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ],[
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      }
    ], [
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
    ], [
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      }
    ], [
      {
          title: '강남CGV', 
          latlng: new kakao.maps.LatLng(lat1, lng1)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ], [
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      }
    ],[
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      }
    ],[
      {
          title: '강남CGV', 
          latlng: new kakao.maps.LatLng(lat1, lng1)
      },
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '센텀시티CGV',
          latlng: new kakao.maps.LatLng(lat14, lng14)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ],[
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      }
    ],[
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '연수역CGV', 
          latlng: new kakao.maps.LatLng(lat6, lng6)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      },
      {
          title: '순천CGV', 
          latlng: new kakao.maps.LatLng(lat18, lng18)
      }
    ],[
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      }
    ],[
      {
          title: '계양CGV', 
          latlng: new kakao.maps.LatLng(lat5, lng5)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '대구연경CGV', 
          latlng: new kakao.maps.LatLng(lat11, lng11)
      },
      {
          title: '대구월성CGV',
          latlng: new kakao.maps.LatLng(lat12, lng12)
      },
      {
          title: '마산CGV',
          latlng: new kakao.maps.LatLng(lat16, lng16)
      }
    ],[
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '판교CGV',
          latlng: new kakao.maps.LatLng(lat4, lng4)
      },
      {
          title: '강릉CGV', 
          latlng: new kakao.maps.LatLng(lat7, lng7)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '구미CGV', 
          latlng: new kakao.maps.LatLng(lat15, lng15)
      },
      {
          title: '제주CGV', 
          latlng: new kakao.maps.LatLng(lat17, lng17)
      }
    ],[
      {
          title: '압구정CGV', 
          latlng: new kakao.maps.LatLng(lat2, lng2)
      },
      {
          title: '춘천CGV',
          latlng: new kakao.maps.LatLng(lat8, lng8)
      },
      {
          title: '세종CGV', 
          latlng: new kakao.maps.LatLng(lat9, lng9)
      },
      {
          title: '천안CGV', 
          latlng: new kakao.maps.LatLng(lat10, lng10)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      }
    ],[
      {
          title: '평촌CGV', 
          latlng: new kakao.maps.LatLng(lat3, lng3)
      },
      {
          title: '서면CGV', 
          latlng: new kakao.maps.LatLng(lat13, lng13)
      }
    ]];
    
    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

    for (var i = 0; i < positions[index].length; i ++) {
        
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            // map: map, // 마커를 표시할 지도
            position: positions[index][i].latlng, // 마커를 표시할 위치
            title : positions[index][i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });

        marker.setMap(map);
        markers.push(marker);
    }
  })
})

// 상영예정작 - 상영관보기 or 상영관닫기 버튼 비활성화
movieChartBtn2.addEventListener('click', () => {
  // 지도가 펼쳐져있다면 접기
  if (myMapPart.classList.contains("on")) {
    myMapPart.classList.remove("on");
  }
    
  if (movieChartBtn2.classList.contains("activate")) {
    viewBtns.forEach((viewBtn) => {
      viewBtn.classList.add("block");
    });
    closeBtns.forEach((closeBtn) => {
      closeBtn.classList.add("block");
    });
  }
})

movieChartBtn1.addEventListener('click', () => {
  viewBtns.forEach(viewBtn => {
    if (viewBtn.classList.contains('block'))
    viewBtn.classList.remove('block');
  })
  closeBtns.forEach(closeBtn => {
    if (closeBtn.classList.contains('block'))
    closeBtn.classList.remove('block');
  })
})

clickBtn.addEventListener('click', () => {
  if(movieChartBtn2.classList.contains('activate')) {
    alert('상영예정인 영화는 아직 상영관이 배정되지 않았습니다')
  }
})