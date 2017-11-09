jQuery(function (jQuery) {

    var preloader = jQuery('.preloader');
    jQuery(window).load(function () {
        preloader.remove();
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////

// grab the initial top offset of the navigation 
var stickyNavTop = $('body').offset().top;
// our function that decides weather the navigation bar should have "fixed" css position or not.
var stickyNav = function () {
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > 10) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }

};

stickyNav();
// and run it again every time you scroll
$(window).scroll(function () {
    stickyNav();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

jQuery("nav ul li a").append("<span class='bottom-line'></span>");
//////////////////////////////////////////////////////////////////////////////

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();
