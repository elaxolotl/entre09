window.onscroll = function() {stickyNavbar()};
var nav = document.querySelector(".navbar");
var sticky = nav.offsetTop;
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}
