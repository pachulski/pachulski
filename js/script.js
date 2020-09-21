const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const aboutButton = document.querySelector('.aboutButton');
const contactButton = document.querySelector('.contactButton');

function aboutHandleClick() {
    about.classList.toggle('expanded');
    aboutButton.classList.toggle('button--expanded');
    about.classList.contains('expanded') ? aboutButton.innerText = '⟨' : aboutButton.innerText = '⟩';
}

function contactHandleClick() {
    contact.classList.toggle('expanded');
    contactButton.classList.toggle('button--expanded');
    contact.classList.contains('expanded') ? contactButton.innerText = '⟩' : contactButton.innerText = '⟨';
}

aboutButton.addEventListener('click', aboutHandleClick);
contactButton.addEventListener('click', contactHandleClick);
