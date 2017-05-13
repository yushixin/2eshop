requirejs.config({
    baseUrl:'jquery/',
    paths: {
        jquery:'jquery-1.12.4'
    }
});
define(['jquery'],function ($) {
    return {
        open:function (option) {
            var defaultVal = {
                width:400,
                height:300,
                opacity:0.5,
                title:''
            }
            var html =   '<div class="dialog-box">'
                        +'  <div class="content">'
                        +'      <div class="dialog-title">'
                        +'          <span class="title">hhh</span>'
                        +'          <span class="dialog-close">X</span> '
                        +'      </div>'
                        +'      <div class="dialog-body">'

                        +'      </div>'
                        +'  </div>'
                        +'</div>'
            $('body').append(html);
            $('.content').css({
                width:option.width,
                height:option.height
            })
            $('.dialog-box').css('backgroud','rgba(0,0,0,'+option.opacity);
            $('.title').html(option,title);

        },
        close:function () {

        }
    }
})