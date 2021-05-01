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
