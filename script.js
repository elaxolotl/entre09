//sticky navbar function
window.onscroll = function() { stickyNavbar() };
nav=document.querySelector(".navbar");
function stickyNavbar(){
    if (window.pageYOffset > 0) {
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }    
};
//hamburger menu
function showNav(){
    const hamburgerNav = document.querySelector(".hamburger-nav");
    const elements = document.querySelector("#hamburger-elements");
    elements.classList.toggle("hidden")
    hamburgerNav.style.backgroundColor='var(--light-blue--)'
}
