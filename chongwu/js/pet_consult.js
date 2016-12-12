/////////轮播图部分切换的效果的。
var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical',
        loop: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
  })
/////////////// 咨询页的上面的导航字体颜色。
$(".title a").not($(".title a")[6]).click(function(){
    $(this).addClass("color_re").siblings().removeClass("color_re");
});
/////////////咨询页面的下拉缓存事件
var showLenth = $(".show_a").children().length;
var loadNode = $(".load_a")
var flag = true;
window.addEventListener("scroll",function scrollHandler(){              
    var scrollh = $(document).height();
    var bua = navigator.userAgent.toLowerCase();
    if(bua.indexOf('iphone') != -1 || bua.indexOf('ios') != -1){
        scrollh = scrollh-60;
    }else{
        scrollh = scrollh;
    }
    var scrollTop=Math.max(document.documentElement.scrollTop||document.body.scrollTop);
    if((scrollTop + $(window).height()) >= scrollh){
        if($(".show_a").children().length<=10){
            if(flag){
                flag = false;
                loadNode.show();
                setTimeout(function(){
                    $(".show_a").append($(".show_a").children().eq(Math.floor(Math.random()*showLenth)).clone());                
                    loadNode.hide();
                    flag = true;
                },1000);
            }
        }
    }else{
        loadNode.hide();
    }
},100);      