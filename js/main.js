const elKirish = document.querySelector('.kirish__show')
const elKirishButton = document.querySelector('.header_kirish')

elKirishButton.addEventListener('click', function(evt) {
    evt.preventDefault()

    elKirish.classList.toggle('show__kirish')
})

// Modal sign in
const elBtnShow = document.getElementById('sign__btn')
const elModal = document.getElementById('modal__show')
const elBtnClose = document.getElementById('close__btn')
const elOverlay = document.getElementById('overlay')


elBtnShow.addEventListener('click', () => {
    elModal.classList.remove('hidden')
    elOverlay.classList.remove('hidden')
    // elKirish.classList.add("hidden")
})

elBtnClose.addEventListener('click', () => {
    elModal.classList.add('hidden')
    elOverlay.classList.add('hidden')
})


elOverlay.addEventListener('click', () => {
    elModal.classList.add('hidden')
    elOverlay.classList.add('hidden')
})

// Modal Phone Number
const elButtonSign = document.getElementById("Kirish__btn")
const elModalPhoneNumber = document.querySelector('.modal2')
const elButtonExit = document.getElementById('numberModal__btn')

elButtonSign.addEventListener('click', () => {
    elModalPhoneNumber.classList.remove('modalkala')
    elModal.classList.add('hidden')
    elOverlay.classList.add('hidden')
})

elButtonExit.addEventListener('click', ()=> {
    elModalPhoneNumber.classList.add("modalkala")
})

// Parolni tiklash 
const elParolButton = document.getElementById('sign__link')
const elParolModal = document.getElementById('parol__modal')
const elParolExit = document.getElementById('parol__btn')

elParolButton.addEventListener('click', () => {
    elParolModal.classList.remove('hidden')
    elModalPhoneNumber.classList.add('modalkala')
})

elParolExit.addEventListener('click', ()=> {
    elParolModal.classList.add('modalkala')

} )

// Regstration 
const elRegstrationBtn = document.getElementById('regstration__btn')
const elRegstrationModal = document.getElementById('Regstration__modal')
const elRegstartionExit = document.getElementById('regstration__button')

elRegstrationBtn.addEventListener('click', ()=> {
    elRegstrationModal.classList.remove('hidden')
    elOverlay.classList.add('hidden')
    elModal.classList.add('hidden')
})

elRegstartionExit.addEventListener('click', ()=> {
    elRegstrationModal.classList.add('hidden')

})

// Modal Finish
const elFinishBtn = document.getElementById('finish__button')
const elFinishModal = document.getElementById('finish__modal')
const elFinishExit  = document.getElementById('finish__btn')

elFinishBtn.addEventListener('click', ()=> {
    elFinishModal.classList.remove('hidden')
    elRegstrationModal.classList.add('hidden')
})

elFinishExit.addEventListener('click', ()=> {
    elFinishModal.classList.add('hidden')
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        elModal.classList.add('hidden')
        elOverlay.classList.add('hidden')
        elModalPhoneNumber.classList.add('hidden')
        elParolModal.classList.add('hidden')
        elRegstrationModal.classList.add('hidden')
        elFinishModal.classList.add('hidden')
    }
})


// Maxsulotlar Rendr
const elList = document.querySelector('.about__list')
const elTemplate = document.getElementById('template').content;
const elTovarsSearch = document.querySelector('.input')

const renderTovars = (array) => {

    array.forEach((just) => {

        var TemplateKnowledge = elTemplate.cloneNode(true)

        TemplateKnowledge.querySelector('.about__img').src = just.poster
        TemplateKnowledge.querySelector('.about__catch').textContent = just.title
        TemplateKnowledge.querySelector('.about__text').textContent = just.narx
        TemplateKnowledge.querySelector('.about__text1').textContent = just.genres

        elList.appendChild(TemplateKnowledge)
    });
}

renderTovars(just)  

// Search

function SearchInput(){
    elList.innerHTML = null 

    const inputValue = elTovarsSearch.value.trim()

    const search = new RegExp(inputValue, 'gi');

    const input = just.filter((just) => just.narx.match(search))

    renderTovars(input,elList)
}

elTovarsSearch.addEventListener("input",SearchInput)






// // Maxsulotlar Render 2 
const elAboutList = document.querySelector('.about__list')
const elAboutTemplate = document.getElementById('template').content;
// const elTovarsSearch = document.querySelector('.input')
const elCarusel = document.querySelector('.carusel')
const elHeading = document.querySelector('.hero__heading2')
const elHEadingBtn = document.querySelector('.hero__more')

const aboutRenders = (array) => {

    array.forEach((just) => {

        var TemplateKnowledge = elAboutTemplate.cloneNode(true)

        TemplateKnowledge.querySelector('.about__img').src = just.poster
        TemplateKnowledge.querySelector('.about__catch').textContent = just.title
        TemplateKnowledge.querySelector('.about__text').textContent = just.narx
        TemplateKnowledge.querySelector('.about__text1').textContent = just.genres

        elList.appendChild(TemplateKnowledge)
    });
}

renderTovars(just)  

// Search

function SearchInput(){
    elList.innerHTML = null 

    const inputValue = elTovarsSearch.value.trim()

    const search = new RegExp(inputValue, 'gi');

    const input = just.filter((just) => just.narx.match(search))

    aboutRenders(input,elAboutList)
}

elTovarsSearch.addEventListener("input",SearchInput()  )
elTovarsSearch.addEventListener("input", (evt) => {
    elCarusel.classList.add('hidden')
    elKategoriyalarList.classList.add('hidden')
    elHeading.classList.add('hidden')
    elHEadingBtn.classList.add('hidden')
}) 



// Kategoriyalar Rendr
const elKategoriyalarList = document.querySelector('.hero__list')
const elTemplateHero = document.getElementById('templatee').content

const kategoriyalarRender = (array) => {
    array.forEach((kategoriyalar) => {
        const templateKateg = elTemplateHero.cloneNode(true)                    

        templateKateg.querySelector('.hero__img').src = kategoriyalar.poster;
        templateKateg.querySelector('.hero__heading').textContent = kategoriyalar.title;

        elKategoriyalarList.appendChild(templateKateg)
    })
}

kategoriyalarRender(kategoriyalar)


// Brendlar render
const elSubList = document.querySelector('.sub__list')
const elSubTemplate = document.getElementById('sub__template').content

const subRenders = (array) => {

    array.forEach((brends) => {
        const subTemplate = elSubTemplate.cloneNode(true)

        subTemplate.querySelector('.sub__img').src = brends.poster;

        elSubList.appendChild(subTemplate)
    })
}

subRenders(brends)

// do'konlar render
const elShopsList = document.querySelector('.shop__list')
const elShopsTemplate = document.getElementById('shop__template').content

const shopsRender = (array) => {

    array.forEach((shops) => {
        const shopTemplate = elShopsTemplate.cloneNode(true)

        
        shopTemplate.querySelector('.shop__dokon').src = shops.poster;

        elShopsList.appendChild(shopTemplate)
    })
}

shopsRender(shops)


// Hamburger 
const elBtn = document.getElementById('button')
const elButtonMenu = document.querySelector('.btn__menu')
const elButtonExitHam = document.querySelector('.btn__exit')
const elNav = document.querySelector('.list')

elBtn.addEventListener('click', ()=> {
    elButtonMenu.classList.toggle('menu__btn')
    elButtonExitHam.classList.toggle('exit__btn')
    elNav.classList.toggle('nav__list')
})