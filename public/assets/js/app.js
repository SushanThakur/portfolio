const menu = document.getElementById('menu')
const close = document.getElementById('close')
const nav = document.getElementById('home-mob-nav-ul')
const exit = document.getElementById('mobile-nav-exit')


menu.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'flex';
    nav.style.display = 'flex';
    exit.style.display = 'flex';
})

close.addEventListener('click', () => {
    menu.style.display = 'flex';
    close.style.display = 'none';
    nav.style.display = 'none';
    exit.style.display = 'none';
})

exit.addEventListener('click', () => {
    menu.style.display = 'flex';
    close.style.display = 'none';
    nav.style.display = 'none';
    exit.style.display = 'none';
})