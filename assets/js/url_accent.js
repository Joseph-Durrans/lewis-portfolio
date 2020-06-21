$(document).ready(function(){
    var url = window.location.pathname;

    switch (url) {
        case '/index.html':
            $('.navigation a').each(function(){
                if (($(this).text()).toLowerCase() == ('home').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break;
        case '/about.html':
            $('.navigation a').each(function(){
                if (($(this).text()).toLowerCase() == ('about').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break;    
        case '/company-intros.html':
            $('.navigation a').each(function(){
                if (($(this).text()).toLowerCase() == ('company intros').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break;  
        case '/other-media.html':
            $('.navigation a').each(function(){
                if (($(this).text()).toLowerCase() == ('other media').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break; 
        default:
            $('.navigation a').each(function(){
                if (($(this).text()).toLowerCase() == ('home').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break;
    }
});
