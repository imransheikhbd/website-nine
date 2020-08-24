$(document).ready(function(){
    $('.food-slider').slick({
        autoplay:true,
        slidesToShow:3,
        slideToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slideToShow:2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slideToShow:1,
                }
            },
        ]

    })

    $('.nav-trigger').click(function(){
        $('.site-content-wrapper').toggleClass('scaled');
    })

})