//弹出层
var iNow = 0;
$('.small-img li').on('click',function () {
    $('.dialog-box').show();
    $('.content').animate({
        top:'50%'
    });
    $('.dialog-body img').attr('src',$(this).find('img').attr('src'));
    iNow = $(this).index();//inow 为当前点击li 的序号？？
});
//隐藏 弹出层
$('.dialog-box').on('click',function (e) {
    if( e.target == $('.dialog-box')[0] || e.target == $('.dialog-close')[0]){
        $(this).hide();
        $('.content').css('top','-249px');
    }
});
//划出隐藏弹出层
// $('.content').on('.mouseover',function () {
//         $(this).hide();
//         $('.content').css('top','-249px');
// });

//点击下一张
$('.dialog-next').on('click',function () {
    iNow++;
    if(iNow == $('.small-img li').length){
        iNow = 0 ;
    }
    var $NextImgSrc = $('.small-img img').eq(iNow).attr('src');
    $('.dialog-body img').before('<img src="'+$NextImgSrc+'"/>');
    $('.dialog-body img').eq(1).fadeOut(2000,function() {
        $(this).remove();
    });
});