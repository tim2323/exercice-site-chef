window.onscroll = function(){

    // BACKGROUND NAV
    if (document.documentElement.scrollTop > 100){
        document.getElementById('nav-1').classList.add('bg-dark');
        document.getElementById('nav-2').classList.add('d-none');
        document.getElementById('nav-3').classList.add('bg-dark');
    } else {
        document.getElementById('nav-1').classList.remove('bg-dark');
        document.getElementById('nav-2').classList.remove('d-none');
        document.getElementById('nav-3').classList.remove('bg-dark');
    };
 
    // LINK ACTIVE
    scrollEventActive(0, 600, 'l-home');
    scrollEventActive(600, 1200, 'l-about');
    scrollEventActive(1200, 2100, 'l-menu');
    scrollEventActive(2100, 2700, 'l-team');
    scrollEventActive(2700, 3600, 'l-reserve');
    scrollEventActive(3600, 4300, 'l-blog');
    scrollEventActive(4300, 4800, 'l-testimonials');
    scrollEventActive(4800, 7000, 'l-contact');
 
 };
 
 var scrollEventActive = function(pos1, pos2, id){
    if (document.documentElement.scrollTop >= pos1 && document.documentElement.scrollTop < pos2) {
        document.getElementById(id).classList.add('bg-danger');
    } else {
        document.getElementById(id).classList.remove('bg-danger');
    };
 };