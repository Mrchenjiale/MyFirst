window.onload=function(){
scaleW=window.innerWidth/320;
scaleH=window.innerHeight/480;
var resizes = document.querySelectorAll('.resize');
          for (var j=0; j<resizes.length; j++) {
           resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
		   resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
		   resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
		   resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px'; 
	
          }
var scales = document.querySelectorAll('.txt');
for (var i=0; i<scales.length; i++) {
	ss=scales[i].style;
	ss.webkitTransform = ss.MsTransform = ss.msTransform = ss.MozTransform = ss.OTransform =ss.transform='translateX('+scales[i].offsetWidth*(scaleW-1)/2+'px) translateY('+scales[i].offsetHeight*(scaleH-1)/2+'px)scaleX('+scaleW+') scaleY('+scaleH+') ';
}
var x=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
document.getElementById('swiper-container').style.height=x+"px";

// var mySwiper = new Swiper('.swiper-container', {
		// autoplay: 5000,//可选选项，自动滑动
		// direction : 'vertical',
		// pagination : '.swiper-pagination',
		// paginationClickable :true,

		// 动画
		// onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    // swiperAnimateCache(swiper); //隐藏动画元素 
	    // swiperAnimate(swiper); //初始化完成开始动画
	    // }, 
	    // onSlideChangeEnd: function(swiper){ 
	    // swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  // } 
	// })










}