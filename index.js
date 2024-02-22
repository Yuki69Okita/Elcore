//Active nab-bar item
const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;
    
    if (windowPathname === navLinkPathname) {
        navLinkEl.classList.add('active_link');
    }
});


//Sticky nav
const nav = document.querySelector('nav');
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
})


//Closing outside the menu
$(document).click(function(e) {
	if (!$(e.target).is('.navbarNav')) {
    	$('.collapse').collapse('hide');	    
    }
});