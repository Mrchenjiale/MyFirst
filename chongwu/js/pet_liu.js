window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
var mySwiper = new Swiper('.swiper-container',{
    direction:'horizontal',
    loop:true,
    pagination : '.swiper-pagination',
    paginationClickable:true
});
var shareNode = $(".pet-liu .share");
$(".pet-liu .share-btn").click(function(){
    shareNode.show();
    $("#bdshare_weixin_qrcode_dialog").show();
});
$(".pet-liu .cancel").click(function(){
    shareNode.hide();
    $("#bdshare_weixin_qrcode_dialog").hide();
});
$(".head span").click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
});
$(".pet-liu .zan-btn").click(function(){
    $(this).toggleClass("zan-cur");
});
$(".pet-liu .more").click(function(){
    $(this).hide();
    var that = $(this);
    $(".load").show();
    setTimeout(function(){
        $(".load").hide();
        that.siblings().clone().insertBefore(that);
    },1000);
});
$(".pet-liu .focus").click(function(){
    $(this).addClass("onfocus").html("已关注");
});

