// -----------> javaScript
// -----------------------
// header area ends here
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

// -----------> Jquery
// -----------------------
// customers carousel area here
// ------------------------ 
// owl carousel 
$(document).ready(function(){
    $('.customers-carousel-items').owlCarousel({
        loop:true,
        nav:false,
        items:1,
        autoplay:true,
        autoplayTimeout: 5000,
        smartSpeed: 2000
    });
});
// -----------------------
// This will create a video gallery magnific popup
// -----------------------
$('.expand-video').magnificPopup({
    type: 'iframe'
});