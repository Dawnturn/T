const scriptURL = "https://script.google.com/macros/s/AKfycbybo1ek9NrJWDthGjxh5UfjI9iH-uepPmDvogPkmHYqJC5r6CKc4mMnbsoz-o0pbUZJ/exec";
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector('#msg')
const body = document.querySelector('body')
const light = document.querySelector('.bx-sun')
const dark = document.querySelector('.bx-moon')
const theme = localStorage.getItem('theme')
const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const service = document.querySelectorAll('.s1 p')
const moreInfo = document.querySelector('.more-info')


form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Your Message has been sent successfully')
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = 'Thank you for your message'
            form.reset();
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000)
        })
        .catch(error => console.error('Error!', error.message))
})

const reload = () => {
  if (theme === "lightMode") {
    body.classList.add("light");
  }
};

reload();

light.addEventListener('click', () => {
    body.classList.add('light')
    dark.style.animation = 'rotation .4s ease-in forwards'
    light.style.animation = "";
    localStorage.setItem('theme', 'lightMode')
})

dark.addEventListener('click', () => {
    body.classList.remove('light')
    light.style.animation = 'rotation .5s ease forwards'
    dark.style.animation = ''
    localStorage.setItem('theme', 'darkMode')
})

burger.addEventListener('click', () => {
    nav.classList.toggle('active')
    burger.classList.toggle('whiten')
    body.classList.toggle('no-scroll')
})

service.forEach(services => {
    services.addEventListener('click', () => {
        moreInfo.classList.add('show-more-info')
    })
})

moreInfo.addEventListener('click', () => {
    moreInfo.classList.remove('show-more-info')
})