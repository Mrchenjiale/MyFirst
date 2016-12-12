
//分享
$(".pet-information .right").tap(function(){
    $(".pet-information .share").show();
})
$(".share-content button").tap(function(){
    $(".pet-information .share").hide();
})
//加载更多
$(".pet-information .search-more").tap(function(){
    $(this).hide();
    $(".pet-information #line").hide();
    $(".pet-information .onload").show();
    var interval = setTimeout(function(){
        $(".pet-information .onload").hide();
    },1000);
    var inter = setTimeout(function(){            
        $(".pet-information #comment2").children().clone().appendTo($("#comment"));
        $(".pet-information .search-more").show();
        $(".pet-information #line").show();
    },1000); 
})
//点赞效果
var i = 0;
$(".pet-information").on("click",".good",function(){
    var color = $(this).find("i").css("color");
    var number = $(this).find("span").html();
    if(color == "rgb(102, 102, 102)"){
        $(this).find("i").css("color","#fe2d63");
        $(this).find("span").html(number*1+1);
        event.stopPropagation(); 
    }else if(color == "rgb(254, 45, 99)") {
        $(this).find("i").css("color","#666");
        $(this).find("span").html(number*1-1);
    }
})
//分享效果
window._bd_share_config={
    "common":{"bdSnsKey":{},
        "bdText":"",
        "bdMini":"2",
        "bdMiniList":["weixin","tsina","sqq","qzone","renren"],
        "bdPic":"",
        "bdStyle":"0",
        "bdSize":"32"
    },
    "share":{},
    // "image":{
    //     "viewList":["weixin","tsina","sqq","qzone","tqq"],
    //     "viewText":"分享到：",
    //     "viewSize":"32"
    // },
    "selectShare":{
        "bdContainerClass":null,
        "bdSelectMiniList":["weixin","tsina","sqq","qzone","tqq"]
    }};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];