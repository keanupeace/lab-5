//declaring
let toggle = document.querySelector('.menu-toggle')
let menu = document.querySelector('.menu')



//show menu fucntion
function showMenu() {
     menu.classList.toggle('show')
}

toggle.addEventListener('click',showMenu)