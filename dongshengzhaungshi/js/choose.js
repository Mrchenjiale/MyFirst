$(document).ready(function(){
$("input").eq(1).click(function(){
    $(".box img").attr("src","images/f1.jpg");

});
$("input").eq(0).click(function(){
    $(".box img").attr("src","images/f0.jpg").slideUp(3000,function(){ $(this).slideDown(3000);
});
   

});


});