// DOM javascript

/*---*/
var navBar = document.getElementById('nav-bar');
var navToggle = navBar.lastElementChild;
var toggleState = 0;

navToggle.addEventListener('click', function(){
       
    var navItems = [];
    var navPanel;
    
    // get required elements
    temp = navBar.children;
    for(var i = 0; i < navBar.childElementCount; i++){
        
        if(temp.item(i).classList.contains('nav-item'))
            navItems.push(temp.item(i));
        
        if(temp.item(i).classList.contains('nav-panel'))
            navPanel = temp.item(i);
    }
    
    // toggle nav panel and nav items with small style
    if(!toggleState){
        
        navToggle.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        navToggle.firstChild.classList.remove('fa-bars');
        navToggle.firstChild.classList.add('fa-times');
        
        navItems.forEach(function(e){
            e.classList.add('nav-item__toggle');
        });
        
        navPanel.classList.add('nav-panel__toggle');
        toggleState = 1;
    }else{
        
        navToggle.style.backgroundColor = '';
        navToggle.firstChild.classList.remove('fa-times');
        navToggle.firstChild.classList.add('fa-bars');
        
        navItems.forEach(function(e){
            e.classList.remove('nav-item__toggle');
        });
        
        navPanel.classList.remove('nav-panel__toggle');
        toggleState = 0;
    }
            
});// could use jQuery...?

/*---*/

// jQuery version

/*---
$(function(){
    
    var toggleState = 0;
    $('.nav-toggle').on('click', function(){
      
        _$ = $(this);
        
        if(!toggleState){
            
            // change toggle bg
            _$.css({backgroundColor: 'rgba(0, 0, 0, .5)'});
            // switch toggle icon
            _$.children().removeClass('fa-bars').addClass('fa-times');
            // toggle nav links
            _$.siblings('.nav-item').addClass('nav-item__toggle'); //.css({display: 'block'});
            // toggle panel
            _$.next().addClass('nav-panel__toggle');
            
            toggleState = 1;
        }
        else{
            
            // change toggle bg
            _$.css({backgroundColor: '#2aff6c'});
            // switch toggle icon
            _$.children().removeClass('fa-times').addClass('fa-bars');
            // toggle nav links
            _$.siblings('.nav-item').removeClass('nav-item__toggle'); //.css({display: 'none'});
            // toggle panel
            _$.next().removeClass('nav-panel__toggle');
            
            toggleState = 0;
        }
       
    });
});
----*/
