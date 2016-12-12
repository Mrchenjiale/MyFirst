var flag=true;
window.addEventListener('scroll',function(){
    if(flag){
        if(($(window).scrollTop()+$(window).height())>=$(document).height()){
                flag=false;
                $('.load').show();
                setTimeout(function(){
                    getdata();
                },2000)
        }
    }
},false);
function getdata(){
    $('.load').hide();
    $('#load-content').append($('#load-content').children().eq(-1).clone());
    flag=true;
}