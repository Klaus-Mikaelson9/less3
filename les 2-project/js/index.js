document.querySelectorAll('.dropdown-btn').forEach(function (el) {
    el.addEventListener('click', function () {
        this.parentNode.classList.toggle('active');
    });
});
document.querySelectorAll('.nav__item-link').forEach(function (el) {
    el.addEventListener('click', function () {
        this.parentNode.classList.toggle('nav__active');
    });
});