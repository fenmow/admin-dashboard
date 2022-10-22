const body = document.querySelector("body")
const switchToggle = document.querySelector('.switch')
const toggleBar = document.querySelector('.toggle-bar')
const nav = document.querySelector('nav')
const getMode = localStorage.getItem('mode')

if (getMode && getMode === "dark") {
  body.classList.toggle('dark')
}

switchToggle.addEventListener('click', ()=> {
  body.classList.toggle('dark')
  if (body.classList.contains("dark")) {
    localStorage.setItem('mode', "dark")
  } else {
    localStorage.setItem('mode', "light")
  }
})

toggleBar.addEventListener('click', ()=> {
  nav.classList.toggle('close')
})