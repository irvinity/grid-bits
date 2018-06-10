$(function(){
    
    var navbarOn = false;
    
    // width and height
    var w = $(window).innerWidth();
    var h = $(window).height();
    
    // navigation bar object
    var navbar = $('.navigation-bar');
    var main_container = $('.container-l');
    var navbar_trigger = $('#trigger');
    
    // initially, hide navbar
    navbar.hide();
    
    // display navbar
    navbar_trigger.on('click', function(){
       
        navbarOn = true;
        
        // check appropiate viewport
        if( w < 450 ){
            navbar.css({ width: '30%', height: h });
            main_container.css({ width: '70%'});
        }
        else if(w > 450 && w < 750){
            navbar.css({ width: '20%', height: h });
            main_container.css({ width: '80%'});
        }
        else{
            navbar.css({ width: '10%', height: h });
            main_container.css({ width: '90%'});
        }
        
        navbar_trigger.css({ color: 'lime'}).html('ON');
        navbar.fadeIn(500);
        
    });
    // hide navbar
    $('.nav-header').on('click', function(){
       
        navbarOn = false;
        
        navbar.fadeOut(500);
        main_container.css({ width: '100%'});
        navbar_trigger.css({ color: 'crimson'}).html('OFF');
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
        
        if(navbarOn)
        {
            ///Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
            if( w < 450 ){
                navbar.css({ width: '30%', height: h });
                main_container.css({ width: '70%'});
            }
            else if(w > 450 && w < 750){
                navbar.css({ width: '20%', height: h });
                main_container.css({ width: '80%'});
            }
            else{
                navbar.css({ width: '10%', height: h });
                main_container.css({ width: '90%'});
            }       
        }
    });
});