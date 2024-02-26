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
    const elements = document.querySelector("#hamburger-elements");
    elements.classList.toggle("hidden")
}
