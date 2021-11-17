var  upSpeed=15; //メッセージのスライド速度
var  delay =3000;　//次のメッセージに切り替わるまでの静止時間
var  tickerH=40;　//表示ボックスの高さ

 window.onload =function divScroll(){
  scroll = document.getElementById("ticker"); //div表示ボックス

  scroll.style.height= tickerH+"px";　//表示ボックスの高さ

  scroll.style.lineHeight= tickerH+"px"; //行の高さ

    slide = document.getElementById("ulArea"); //スライドされる ul要素

    slide.style.position = "absolute"; //絶対配置

    slide.style.top = tickerH+"px" ; //slideのtop(上辺)の位置

  innScroll(tickerH, upSpeed, delay)
      }
  function innScroll(tickerH, upSpeed, delay){
   msec = upSpeed;

   numTop = parseInt(slide.style.top)

　　if (numTop > -tickerH){
　　　slide.style.top = (numTop-1)+"px";

  　　　}
　　else{ slide.style.top = 0+"px";
               cngLi();
  　　　　　}
   if(numTop==0){msec = delay;

     }
    setTimeout("innScroll("+ tickerH +","+ upSpeed +"," + delay +")", msec);
    }
function cngLi(){

   base= document.getElementById("ulArea");
    liList = base.getElementsByTagName("li");

     elm = liList[0];

    base.appendChild(elm);

      }