$(document).ready(function(){
    $(".container__img-slider").slick({
        slidesToShow: 3,
        dots: true,
        nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;" fdprocessedid="s28wnt"><i class="slide-arrow fa-solid fa-angle-right"></i></button>',
        prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: inline-block;" fdprocessedid="gylwin"><i class="slide-arrow fa-solid fa-angle-left"></i></button>',
        responsive: [
            { 
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            { 
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

})
$(document).ready(function(){
    $(".container__img-slider-2").slick({
        slidesToShow: 3,
        dots: true,
        nextArrow:'<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;" fdprocessedid="s28wnt"><i class="slide-arrow fa-solid fa-angle-right"></i></button>',
        prevArrow:'<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: inline-block;" fdprocessedid="gylwin"><i class="slide-arrow fa-solid fa-angle-left"></i></button>',
        responsive: [
            { 
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            { 
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

})

$(document).ready(function(){
    $(".slider-show__img").slick({
        slidesToShow: 1,
        nextArrow: false,
        prevArrow: false,
        autoplay: true,
        autoplaySpeed: 1000,
        wetk
    });

})

