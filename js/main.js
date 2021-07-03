$(function(){

    // Standar A Scroll Off

    $(".default-off").on("click", function(e){
        e.preventDefault();
    });

    // ./Standar A Scroll Off


    // Fixed Header

    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll load resize", function(){
        introH = $("#intro").innerHeight();
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        console.log(scrollOffset);
    });

    function checkScroll(scrollOffset){

        if (scrollOffset >= 1){
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
         };
    };

    // ./Fixed Header


    // Slide Out Menu

    let burger = $(".burger");
    let close = $(".fa-times-circle");

    burger.on("click", function(e){
        e.preventDefault();

       $('.slide__out-menu').addClass('active');
    });

    close.on("click", function(e){
        e.preventDefault();

       $('.slide__out-menu').removeClass('active');
    });

    // ./Slide Out Menu


    // Plan Button Toggle

    $(".plan__btns a").on("click", function(){
        $(".plan__btns a").removeClass("active");
        $(this).addClass("active");
    });

    // ./Plan Button Toggle


    // Testimonials Slider

    // Slider https://owlcarousel2.github.io/OwlCarousel2/

    $("#owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
    });

    // ./Testimonials Slider


    // Price Item Animation

    $(".plan__item").hover(function(){
        $(".plan__item").removeClass("active");
        $(this).addClass("active");
    });

    // ./Price Item Animation


    // Smooth Scroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 120
        }, 700);
        $('.slide__out-menu').removeClass('active');
    });


    // Wow Animations
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();

});
