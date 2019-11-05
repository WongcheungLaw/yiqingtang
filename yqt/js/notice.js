$(function() {
    $('.shop span').click(function(event){
        $('.mysecMenu').slideToggle(10);
        $('.shop span').toggleClass('glyphicon glyphicon-menu-down');
        $('.shop span').toggleClass('glyphicon glyphicon-menu-up');
        return false;
    });

    $(window).resize(function(){
        if ($(window).width()>768) {
            $('.shop').hover(function(){
                    $('.mysecMenu').css('display','block');
                },
                function(){
                    $('.mysecMenu').css('display','none');
                });
            window.location.reload();
        }
    })

    $('.menuBtn').click(function(){
        $('.myMenu').slideToggle(1000);
    })




    // 回到顶部
    clickPoint($('#goTop'), 0);

    function clickPoint(point, skinTop) {
        point.click(function(ev) {
            ev.preventDefault(); // 解决闪烁问题
            $('html,body').animate({ scrollTop: skinTop }, 500);
        })
    }
})

