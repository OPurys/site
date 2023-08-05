let checkbox = document.querySelector('.checkbox');
let headerTop = document.querySelector('.header-top');
let header = document.querySelector('header');
let burger = document.querySelector('.burger');
let mainNav = document.querySelector('.main-nav');
let brContainer = document.querySelector('.br__container');


checkbox.onclick = function () {
    checkbox.classList.toggle('checkbox--dropdawn');
};

window.onscroll = function () {
    if (window.scrollY >= header.clientHeight) {
        headerTop.classList.add('fixed');
    } else { headerTop.classList.remove('fixed'); }
};

brContainer.onclick = function () {
    mainNav.classList.toggle('show');
    burger.classList.toggle('close');
};

document.onkeydown = function (evt) {
    if (evt.key === 'Escape') {
        mainNav.classList.remove('show');
        burger.classList.remove('close');
    }
};

document.onmouseup = function (evt) {
    if (!brContainer.contains(evt.target)) {
        mainNav.classList.remove('show');
        burger.classList.remove('close');
    }
};





