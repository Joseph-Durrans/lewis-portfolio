$(document).ready(function(){
    changeHeight();
});

$(window).resize(function(){
    changeHeight();
});

function changeHeight() {
    var videoHeight = $('.home-video video').height();
    var headerHeight = $('header').height();
    $('.home-video').css("height", (videoHeight - headerHeight));
}
