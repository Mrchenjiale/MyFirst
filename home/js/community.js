(function(){
var mySwiper = new Swiper('.swiper-container', {
    grabCursor: true,
    autoHeight: true,
    // 初始化
    onInit:function(){
        $("#shareandup div").eq(0).addClass("cur");
    },
    //切换完成之后触发
    onSlideChangeEnd: function(){  
        $("#shareandup div").eq(mySwiper.activeIndex).addClass("cur").siblings().removeClass("cur");
    }
});
$("#shareandup").on("tap","div",function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    var num = $(this).index();
    mySwiper.slideTo(num, 500, false);
});
var str = $("#node").html();
$(".c-r").on("tap",".nodechoose",function(){
    var html = $(this).html();
    if(html == str){
        $(this).html("&#xe604;");
    }else{
        $(this).html("&#xe603;");
    }
});
$(".c-r").on("tap",".nodeshare",function(){
    $(".xshare").show();
});
if ('addEventListener' in document) {  
    document.addEventListener('DOMContentLoaded', function() {  
        FastClick.attach(document.body);  
    }, false);  
}  
$(".canle").on("click","#dj",function(){
    $(".xshare").hide();
});
// 滚动到页面底部时，自动加载更多
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
    if (flag){
        if((scrollTop + $(window).height()) >= scrollh){
            flag = false;
            $(".jiaz").show();
            var interval = setTimeout(function(){
                $(".jiaz").hide();
            },1000);
            var inter = setTimeout(function(){
                $.each([0,1,2],function(index,item){
                    $("#clone").children().eq(index).clone().appendTo($("#clone"));
                    mySwiper.update();
                });
                flag = true;
            },1000);
        }          
    }
},100);
window._bd_share_config={
    "common":{
        "bdSnsKey":{},
        "bdText":"",
        "bdMini":"2",
        "bdMiniList":["qzone","tsina","weixin","renren","tqq","tqf","tieba","sqq","isohu"],
        "bdPic":"",
        "bdStyle":"0",
        "bdSize":"16"
    },
    "share":{"bdSize":16}
};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
})();