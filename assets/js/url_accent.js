$(document).ready(function(){
    var url = window.location.pathname;

    switch (url) {
        case '/index.html':
            $('nav a').each(function(){
                if (($(this).text()).toLowerCase() == ('home').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break;
        case '/about.html':
            $('nav a').each(function(){
                if (($(this).text()).toLowerCase() == ('about').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break;    
        case '/commercial-media.html':
            $('nav a').each(function(){   
                if (($(this).text()).toLowerCase() == ('commercial media').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break;  
        case '/other-media.html':
            $('nav a').each(function(){
                if (($(this).text()).toLowerCase() == ('other media').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break; 
        default:
            $('nav a').each(function(){
                if (($(this).text()).toLowerCase() == ('home').toLowerCase()) {
                    $(this).addClass('active');
                }
            });
            break;
    }
});
