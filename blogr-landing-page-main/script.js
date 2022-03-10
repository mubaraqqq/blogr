// Configuring and targeting the dropdown links in the navbar
const product = document.getElementById('product');
const nav_1 = document.getElementById('nav-ul-sub-1');
const company = document.getElementById('company');
const nav_2 = document.getElementById('nav-ul-sub-2');
const connect = document.getElementById('connect');
const nav_3 = document.getElementById('nav-ul-sub-3');
const nav = document.querySelectorAll('.nav-ul-sub');
const body = document.querySelector('body');

// Activating the dropdown links on clicking the navs
product.addEventListener('click', () => {
    nav_1.classList.toggle('show');
    document.querySelector('#product svg').classList.toggle('disp');
});

company.addEventListener('click', () => {
    nav_2.classList.toggle('show');
    document.querySelector('#company svg').classList.toggle('disp');
});

connect.addEventListener('click', () => {
    nav_3.classList.toggle('show');
    document.querySelector('#connect svg').classList.toggle('disp');
});

document.addEventListener('click', (e) => {
    if (e.target !== product && !product.contains(e.target)) {
        nav_1.classList.remove('show');
        document.querySelector('#product svg').classList.remove('disp');
    }
})

document.addEventListener('click', (e) => {
    if (e.target !== company && !company.contains(e.target)) {
        nav_2.classList.remove('show');
        document.querySelector('#company svg').classList.remove('disp');
    }
})

document.addEventListener('click', (e) => {
     if (e.target !== connect && !connect.contains(e.target)) {
        nav_3.classList.remove('show');
        document.querySelector('#connect svg').classList.remove('disp');
    }
})


// targeting the hamburger menu
const btn = document.getElementById('btn');
const navUl = document.getElementById('nav-ul');
const navUl2 = document.getElementById('nav-ul-2')

// Toggling the nav bar on clicking the hamburger menu
btn.addEventListener('click', () => {
    navUl.classList.toggle('shows');
    navUl2.classList.toggle('shows');
})