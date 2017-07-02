$(function(){

    "use strict";
    
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-1
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});