//  === Menu Toggle
document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.top-nav ul');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-angle-down');
        menuToggle.querySelector('i').classList.toggle('fa-angle-up');
    });
});