$(document).ready(function(){

    //btn fadein tile_blue 자리 조정하기
    setTimeout(function() {
        $('.btn').css({"display":"block"});
        
        $('.tile_blue li:nth-child(1)').css({"top":"0"});
        $('.tile_blue li:nth-child(2)').css({"top":"0", "left":"33.34%"});
        $('.tile_blue li:nth-child(3)').css({"left":"16.67%"});
        $('.tile_blue li:nth-child(4)').css({"top":"0", "left":"66.68%"});
        $('.tile_blue li:nth-child(5)').css({"left":"83.35%"});
        $('.tile_blue li:nth-child(6)').css({"left":"50.1%"});

        $('.tile_blue li:nth-child(8)').css({"top":"75%", "left":"33.34%"});
        $('.tile_blue li:nth-child(9)').css({"left":"16.67%"});
        $('.tile_blue li:nth-child(10)').css({"top":"0", "left":"83.35%"});
        $('.tile_blue li:nth-child(12)').css({"top":"75%", "left":"50.1%"});
    }, 700);

    // modal fadein 디자인 이력서 보여주기
    $('#btn_intro').click(function(){
        $('.profile_modal').css({"display":"block"});
    });
    // fadein 마무리 페이지 보여주기
    $('#profile_modal_btn').click(function(){
        $('.finish_tile').css({"display":"block"});
        setTimeout(function() {

            $('.profile_modal').css({"display":"none"});
            $('.finish_tile').css({"display":"none"});
        }, 1500);
    });
    
    // 다시 메인 페이지 보여주기
    

});