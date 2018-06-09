$(function(){
    
    // width and height
    var w = $(window).innerWidth();
    var h = $(window).height();
    
    // navigation bar object
    var navbar = $('.navigation-bar');
    navbar.hide();
    
    /*
    // setup
    if( w < 450 ){
        navbar.css({ width: '30%', height: h });
    }
    else if(w > 450 && w < 750){
        navbar.css({ width: '20%', height: h });
    }
    else{
        navbar.css({ width: 0, height: 0, visibility: 'collapse'});
    }
    */
    
    // display navbar
    $('.main-content').on('click', function(){
       
        // setup
        if( w < 450 ){
            navbar.css({ width: '30%', height: h });
            $(this).css({ width: '70%'});
        }
        else if(w > 450 && w < 750){
            navbar.css({ width: '20%', height: h });
            $(this).css({ width: '80%'});
        }
        else{
            navbar.css({ width: '10%', height: h, visibility: 'visible'});
            $(this).css({ width: '90%'});
        }
        $('#trigger-txt').css({ color: 'lime'}).html('ON');
        navbar.fadeIn(500);
        
    });
    // hide navbar
    $('.nav-header').on('click', function(){
       
        navbar.fadeOut(500);
        $('.main-content').css({ width: '100%'});
        $('#trigger-txt').css({ color: 'crimson'}).html('OFF');
    });
    
    // nav items
    $('.nav-item').mouseenter(handlerin).mouseleave(handlerout);
    function handlerin(){
        
        $(this).css({opacity: '0.5', textDecoration: 'line-through'})
    }
    function handlerout(){
        $('.nav-item').css({opacity: '1.0', textDecoration: 'none'})
    }
    
    // window resized; set new
    $(window).resize(function(){
       
        w = $(window).innerWidth();
        h = $(window).innerHeight();
        
        ///Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
        if( w < 450 ){
            navbar.css({ width: '30%', height: h });
            $('.main-content').css({ width: '70%'});
        }
        else if(w > 450 && w < 750){
            navbar.css({ width: '20%', height: h });
            $('.main-content').css({ width: '80%'});
        }
        else{
            navbar.css({ width: '10%', height: h });
            $('.main-content').css({ width: '90%'});
        }
    });
});