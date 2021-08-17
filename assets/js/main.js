
const modal =document.querySelector('.header');
const heroBanner=document.querySelector('.hero-banner');
window.addEventListener('scroll', function(){
    if(this.scrollY>50)
    {
        modal.classList.add('sticky');
        modal.classList.remove('header');
        heroBanner.classList.add('pt-104');
    }
    else
    {
        modal.classList.remove('sticky');
        modal.classList.add('header');
        heroBanner.classList.remove('pt-104');

    }
       
});
AOS.init({
    offset: 150,
    delay: 0,
    duration: 1000,
});
const cards=document.querySelectorAll('.cards');
document.body.addEventListener('click',function(e){
    if(e.target.matches('.transfer-card__right')){
        for(let i=0 ;i<cards.length -1;i++){
            if(cards[i].classList.contains('active')){
                cards[i].classList.remove('active');
                cards[i+1].classList.add('active');
                return;
            }
        }
    }
    else if(e.target.matches('.transfer-card__left')){
        for(let i=1 ;i<cards.length;i++){
            if(cards[i].classList.contains('active')){
                cards[i].classList.remove('active');
                cards[i-1].classList.add('active');
                return;
            }
        }
    }

})
document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector(".menu-btn");
    const menuClose = document.querySelector(".menu-close");
    const menu = document.querySelector(".menu");
    const navOverlay=document.querySelector('.navigation-overlay');
    if (!menuOpen || !menuClose || !menu) return;
    menuOpen.addEventListener("click", function () {
        menu.classList.add("is-active");
        navOverlay.classList.add('is-active');
    });
    menuClose.addEventListener("click", function () {
        menu.classList.remove("is-active");
        navOverlay.classList.remove('is-active');

    });
    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !e.target.matches(".menu-btn")) {
            menu.classList.remove("is-active");
            navOverlay.classList.remove('is-active');
      }
    });
    const menuItems=document.querySelectorAll('.menu-item');
    for(let menuItem of menuItems){
        menuItem.addEventListener('click',function(){
            menu.classList.remove("is-active");
            navOverlay.classList.remove('is-active');

        });
    }

});
