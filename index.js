// buttons
const menu__btn = document.getElementById('menu__btn')
const close__btn = document.getElementById('close__btn')


// divs
const mobile__menu = document.getElementById('mobile__menu')


    menu__btn.addEventListener('click', () => {
        mobile__menu.classList.remove('hidden')
        menu__btn.classList.add('hidden')
        close__btn.classList.remove('hidden')
    })


    close__btn.addEventListener('click', () => {
        mobile__menu.classList.add('hidden')
        menu__btn.classList.remove('hidden')
        close__btn.classList.add('hidden')})
  

