let content = "Hi, I'm Raymond student of Binus Majoring Computer Science";
let ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide().appendTo('#text').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});

function work(here, num){
    let a = $(".work-content-button");
    let b = $(".work-result");
    a.children().removeClass("active");
    b.children().removeClass("active");
    $(here).addClass("active");
    b.children().eq(num).addClass("active");
}

$("#socmed-button").click(function(){
    $(this).css({"display":"none"});
    $(".contact-media-icon").css({"display":"flex"})
})