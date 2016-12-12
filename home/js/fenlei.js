var $a = $('#left a');
var $ul = $('#right ul');
$a.on('touchend',function(e){
    e.preventDefault();
    var $this = $(this);
    var index = $this.index();
    $a.removeClass('active');
    $this.addClass('active');
    $ul.css('display','none');
    $ul.eq(index).css('display','flex');
})
