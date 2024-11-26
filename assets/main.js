//スクロールフェードイン
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.6
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}

//各Swiperイベントの初期化
document.addEventListener('DOMContentLoaded', (event) => {

  //トップMVスライダー
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });

  //紅芋タルトスライダー
  const swiper02 = new Swiper(".swiper02", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 2000, // 2秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });

  //サーターアンダギースライダー
  const swiper02_2 = new Swiper(".swiper03", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 2000, // 2秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });

  //波照間産黒糖スライダー
  const swiper02_3 = new Swiper(".swiper04", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 2000, // 2秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });


  //商品LPスライダー
  var swiperlp = new Swiper('.slide_wrap', {
    slidesPerView: 1.5,
    spaceBetween: 40, // 画像間のスペース
    loop: true,
    autoplay: {
      delay: 0,             // delayを0にすることで連続的にスライドする
      disableOnInteraction: false,
    },
    speed: 20000,            // この値を調整して、スライドのスピードを変更する
    freeMode: true,
    freeModeMomentum: false, // フリック後のアニメーションを無効にする
    freeModeSticky: true,   // 無限ループ時にスライドがなめらかに連続して動くようにする
    breakpoints: {
      // スライドの表示枚数：700px以上の場合
      770: {
        spaceBetween: 80, // 画像間のスペース
        slidesPerView: 2.5,
      },
      // スライドの表示枚数：700px以上の場合
      1000: {
        spaceBetween: 80, // 画像間のスペース
        slidesPerView: 3.5,
      },
      // スライドの表示枚数：1280px以上の場合
      1280: {
        spaceBetween: 80, // 画像間のスペース
        slidesPerView: 4.5,
      },
      // スライドの表示枚数：1900px以上の場合
      1900: {
        spaceBetween: 80, // 画像間のスペース
        slidesPerView: 6.5,
      }
    },
  });

});


// メガメニュー
$(document).ready(function () {
  var hideTimer;

  // メニュー項目にホバーしたとき
  $('li.has-child').hover(
    function() {
      clearTimeout(hideTimer);
      $('.child-menu').stop().fadeIn(500);
    },
    function() {
      hideTimer = setTimeout(function() {
        $('.child-menu').stop().fadeOut(500);
      }, 100); // 100ミリ秒後に非表示処理を実行
    }
  );

  // child-menuにホバーしたとき
  $('.child-menu').hover(
    function() {
      clearTimeout(hideTimer); // 非表示のタイマーをクリア
    },
    function() {
      $('.child-menu').stop().fadeOut(500);
    }
  );
});

$(document).ready(function () {
  // headerの高さを取得
  var headerHeight = $('header_inner').outerHeight();

  // .child-menuのtopの値としてheaderの高さを設定
  $('.child-menu').css('top', headerHeight + 'px');
});

// スマホメニュー
$(document).ready(function() {
  $('.hamburger-menu').on('click', function() {
    var isActive = $('body').toggleClass('menu-active').hasClass('menu-active');
    
    // メニューがアクティブならオーバーレイを表示、そうでなければ非表示
    if (isActive) {
      $('.overlay').fadeIn(300);
    } else {
      $('.overlay').fadeOut(300);
    }
  });

  // オーバーレイをクリックしたときにメニューを閉じる
  $('.overlay').on('click', function() {
    $('body').removeClass('menu-active');
    $(this).fadeOut(300);
  });
});

// スマホのみ追従
$(window).scroll(function() {
  // ビューポート幅が769px以下の場合のみ実行
  if ($(window).width() <= 769) {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance >= 100) {
      $('.sp_menu').css('background', '#fff');
    } else {
      $('.sp_menu').css('background', 'url(https://cdn.shopify.com/s/files/1/0628/4594/3865/files/header-bg.png) no-repeat 50% 100% / cover');
    }
  }
});

/////////////////////////////////////////////////////
// 初回訪問時オープニングアニメション
/////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
  // セッションストレージをチェックして、アニメーションが既に実行されたかどうかを確認
  if (!sessionStorage.getItem("animationPlayed")) {
    // セッションストレージにフラグをセット
    sessionStorage.setItem("animationPlayed", "true");

    // アニメーションを繋げるタイムラインを作成
    let Openingtl = gsap.timeline();

    //カーテン表示
    Openingtl.to( ".loader-wrap", 
      { 
        display: "block",
      },
    )
    //0.5秒後にロゴが下からスライド表示
    .to( ".anime-img-wrap > img", 
      { 
        y: 0, 
        duration: 0.8, 
      },
      '+=0.5'
    )
    //1秒後にカーテン開ける
    .to( ".anime-loader-bg", 
      { 
        y: '-100%' ,
        duration: 0.6, 
      },
      '+=1'
    );
  }
});
