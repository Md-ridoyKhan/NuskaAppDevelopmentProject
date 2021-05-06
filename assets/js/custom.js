// -----------> javaScript

// -----------------------
// -----------------------
// ------------------------ 
// // -----------> Jquery
$(document).ready(function(){

    // -----------------------
    // topUp-btn area here
    // ------------------------ 
    $(window).scroll(function(){
        if($(this).scrollTop() > 80){
            $(".topUp-btn").fadeIn(800);
        } else{
            $(".topUp-btn").fadeOut(800);
        }
    });
    $(".topUp-btn").click(function(){
        $(" html,body").animate({scrollTop : 0}, 1000);
    });

    // -----------------------
    // preloader area here 
    // ------------------------ 
    $(window).on("load", function(){
        $(".preloder").fadeOut(1000);
    });

    // -----------------------
    // customers carousel area here
    // ------------------------ 
    $('.customers-carousel-items').owlCarousel({
        loop:true,
        nav:false,
        items:1,
        autoplay:true,
        autoplayTimeout: 5000,
        smartSpeed: 2000
    });

    // -----------------------
    // This will create a video gallery magnific popup
    // -----------------------
    $('.expand-video').magnificPopup({
        type: 'iframe'
    });

});

// -----------------------
// header area here
// ------------------------ 
const headerMenu = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggler");
const navigation = document.querySelector("ul.nav");
navToggle.onclick = ()=>{
    navigation.classList.toggle("active");
    navToggle.classList.toggle("active");
}
window.onscroll = ()=>{
    this.scrollY > 20 ?
    headerMenu.classList.add("active"):
    headerMenu.classList.remove("active");
}

