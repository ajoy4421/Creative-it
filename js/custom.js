$(function(){
    // ====== custom js =====

    $(".question").click(function(){
        $(".question_ans").slideToggle();
    })

    // ====== custom js end ======

    // ====== slick slider operation ======
    $('.slider_wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow:".prev_arrow",
        nextArrow:".next_arrow",
        dots: true,
        autoplaySpeed: 1000,
    });
    $('.man_image_part_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        asNavFor: ".man_details_part_wrapper",
    });
    $('.man_details_part_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: ".man_image_part_wrapper",
        prevArrow:".prev_arrow2",
        nextArrow:".next_arrow2",
    });
    // ====== slick slider operation ======

    // ====== lightbox Plugin operation ======
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        "maxWidth": "80%",
        
    })
    // ====== lightbox Plugin operation ======
    // ====== Venobox Plugin ======
    new VenoBox({
        selector: '.my-video-links',
        maxWidth: "60%",
        spinner: "wave",
    });
    new VenoBox({
        selector: '.our_location',
        maxWidth: "80%",
        spinner: "wave",
    });
    // ====== Venobox Plugin ======
    
    // ====== counter-up plugin ======
    $('.counter').counterUp({
        delay: 30,
        time: 3000
    });
    //  ====== counter-up plugin ======
    // ====== mixitup operation ======
    let filterMain = document.querySelector(".gall_wrapper");
    let mixer = mixitup(filterMain,{

    })
    // ====== mixitup operation ======

    // ===== back to top operation =====
    $(".back_to_top_btn").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    })
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop()
        console.log("scrolling");

        if(scrolling > 150){
            $(".back_to_top_btn").fadeIn(500);
        }else{
            $(".back_to_top_btn").fadeOut(500);
        }
    })
    // ===== back to top operation =====

    // ===== preloader =====
    $(window).on("load", function(){
        $("#preloader").delay(1000).fadeOut(1000);
    })
    // ===== preloader =====

    // ===== animation scrolling nav =====
    $(".nav_link").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){
            window.location.hash = hash;
        });
        }
    });
    // ===== animation scrolling nav =====

    // ===== fixed nav add class =====
    $(window).scroll(function(){
        $("#nav_fixed.nav_fixed").animate(500);

        let add_Fixed_Nav = $(this).scrollTop();
        if(add_Fixed_Nav > 800){
        $('#navbar').addClass('nav_fixed');
        }
        else {
        $('#navbar').removeClass('nav_fixed');
        }
    });
    // ===== fixed nav add class =====
    
})
