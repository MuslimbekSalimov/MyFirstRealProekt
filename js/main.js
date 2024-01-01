const elKirish = document.querySelector('.kirish__show')
const elKirishButton = document.querySelector('.header_kirish')

elKirishButton.addEventListener('click', function(evt) {
    evt.preventDefault()

    elKirish.classList.toggle('show__kirish')
})



// sign in
const elSignButton = document.querySelector('.kirish__button')
const elSign = document.querySelector(".sign")
const elSignClose = document.querySelector('.sign__close')

function toggle() {
    const blur = document.getElementById('blur');
    blur.classList.toggle('active')
}


elSignButton.addEventListener('click', function(evt) {
    evt.preventDefault()

    elSign.classList.toggle('in__sign')
})


// Modal Ro'yxatdan O'tish
const elModal = document.querySelector('.modal__sign')
const elSignInButton = document.querySelector('.button1')
const elModalExit = document.querySelector('.button__exit')

elSignInButton.addEventListener('click', function(evt)  {
    evt.preventDefault()

    elModal.classList.toggle('sign__modal')
})

// Modal 2
function toggle() {
    const blur = document.getElementById('blur')
    blur.classList.toggle('active');
    const popop = document.getElementById("popup")
    popop.classList.toggle("active");
    
}
