/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler

const sections = ['About', 'Download', 'Contact', 'Sign Up']

$(document).ready(function() {
    
    const parent = document.getElementById("bottom-nav")
    
    for (let i = 0; i < sections.length; i++) {
        let h3_tag = document.createElement("h3");
        let a_tag = document.createElement("a");
        a = parent.appendChild(a_tag)
        appendChild = a.appendChild(h3_tag)
        appendChild.innerHTML = sections[i]
    };
    
    $(function(){
        var nav = $('.nav'),
            animateTime = 500,
            navLink = $('.header .top .navLink');
        navLink.click(function(){
            if(nav.height() === 0){
                autoHeightAnimate(nav, animateTime);
            } else {
                nav.stop().animate({ height: '0' }, animateTime);
            }
        });
    })

        /* Function to animate height: auto */
    function autoHeightAnimate(element, time){
        var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
        element.height(curHeight); // Reset to Default Height
        element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
    }
    
});