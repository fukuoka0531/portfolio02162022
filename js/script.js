
/******************
 * ハンバーガーメニュー
 ******************/

 var lastInnerWidth = window.innerWidth; //window.innerWidthで現在の画面幅を取得
 var nav = document.getElementById('nav');
 if (lastInnerWidth <= 480) { // 画面幅480px以下の場合
     nav.classList.add('hamburger'); // クラス「hamburger」を追加
 }


/*********************
 * ページトップヘ矢印表示
 *********************/
jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {  //1000pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
});

/******************
 * メイン写真のスライド
 ******************/

$('.top_slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 7000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: false,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.top_slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.top_slider').slick('slickPlay');
});


/******************
 * フェードインの処理
 ******************/

function fadeinEvent() {
    // getElementsByClassName で、fadein のクラスを持つ要素を取得し配列として保持
    var fadeinClass= Array.prototype.slice.call(document.getElementsByClassName("fadein"));

    // 配列の数だけ処理を行う
    fadeinClass.forEach(function( element ) {

        // getBoundingClientRect で要素の位置や幅や高さなどを取得
        var boundingClientRect = element.getBoundingClientRect();

        // スクロールの位置情報（html のスクロールがなければ、body のスクロール）を取得
        var scroll = document.documentElement.scrollTop || document.body.scrollTop;

        // ブラウザウィンドウの ビューポートの高さ
        var windowHeight = window.innerHeight;

        // スクロールの位置が、フェードインしたい要素の位置にいるかどうか判定する
        if (scroll > scroll + boundingClientRect.top - windowHeight + 200){

            // 要素を表示する場合は、要素の透明度を無くし、Y方向の移動距離を無くす。これで表示される
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// 画面がロードされたときに行う処理を記載
window.onload = function(){
    // 画面が中途半端なスクロール位置でリロードされても表示するべきものが表示されるようにするため、ロードですぐに呼び出す
    fadeinEvent();

    // スクロールしたら動くエベントとして用意しておく。スクロールするたびに動くようにする
    window.addEventListener('scroll', fadeinEvent, false);
}




document.querySelector('.menu-btn').addEventListener('click', function(){
    document.querySelector('.menu').classList.toggle('is-active');
 });
