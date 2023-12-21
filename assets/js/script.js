'use strict';

const $navbar = document.querySelector('[data-navbar]')
const $navToggler = document.querySelector('[data-nav-toggle]')
const $openSpan = document.querySelector('.nav-toggle-btn .open')
const $closeSpan = document.querySelector('.nav-toggle-btn .close')

$navToggler.addEventListener('click', () => {
    $navbar.classList.toggle('active');
    const isActive = $navbar.classList.contains('active');
    $openSpan.style.display = isActive ? 'none' : 'block';
    $closeSpan.style.display = isActive ? 'block' : 'none';
});

const $header = document.querySelector('[data-header]')

window.addEventListener('scroll', e => {
    $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active')

})

const $toggleBtns = document.querySelectorAll('[data-toggle-btn]')

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener('click', () => {
        $toggleBtn.classList.toggle('active')
    })
})