const menu = document.getElementById('menu')
const close = document.getElementById('close')
const nav = document.getElementById('home-mob-nav-ul')


menu.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'flex';
    nav.style.display = 'flex';
})

close.addEventListener('click', () => {
    menu.style.display = 'flex';
    close.style.display = 'none';
    nav.style.display = 'none';
})