var upSpeed=15;
var delay = 3000;

var tickerH=40;
  window.onload = function divScroller(){
    scroller = document.getElementById("ticker");
    //表示ボックスの高さ
    scroller.style.height = tickerH+"px";
    //行の高さ
    scroller.style.lineHeight = tickerH+"px";
    //スライドさせるul要素
    slide = document.getElementById("ulArea");
    //絶対位置
    slide.style.position = "absolute";
    //slideのtop(上辺)の位置
    slide.style.top = tickerH+"px";
    innScroll(tickerH, upSpeed, delay)
  }
  function innScroll(tickerH, upSpeed, delay){
    //スクロール時間
    msec = upSpeed;
    //数値文字列を整数に変換
    numTop = parseInt(slide.style.top)
    //top位置が-30にならない間は
    if (numTop > -tickerH){
      //top位置を-1px上へ
　　　　slide.style.top = (numTop-1)+"px";
    }else{
      slide.style.top = 0+"px";
      //次のメッセージと交換
      cngLi();
    }
    if (numTop == 0){
      //静止時間　現在のメッセージを待機
      msec = delay;
    }
    setTimeout("innScroll("+ tickerH +","+upSpeed + "," + delay +")", msec);
  }
  function cngLi(){
    base = document.getElementById("ulArea");
    //与えられたタグ名を持つ要素のリスト
    liList = base.getElementByTagName("li");
    最上部の"li"要素
    elm = liList[0];
    //elmを子ノードとして末尾に移動する。
    base.appendChild(elm);
  }