$(document).ready(function(){
    $('.mobile .burger').click(function(){
        $(this).hide();
        $('.mobile .close').show();
        $('.hover-nav').css('display', 'flex');
    });

    $('.mobile .close').click(function(){
        $(this).hide();
        $('.mobile .burger').show();
        $('.hover-nav').hide();
    });
});