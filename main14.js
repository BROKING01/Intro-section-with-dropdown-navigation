const submit = document.querySelector(".submit")
const submit2 = document.querySelector(".submit2")
const up = document.querySelector(".up")
const up2 = document.querySelector(".up2")
const down = document.querySelector(".down")
const down2 = document.querySelector(".down2")
const featopen = document.querySelector(".featopen")
const compopen = document.querySelector(".compopen")
const iconmenu = document.querySelector(".iconmenu")
const menu = document.querySelector(".menu")
const close = document.querySelector(".close")
const oneshow = document.querySelector(".oneshow")
const twoshow = document.querySelector(".twoshow")
const submit4 = document.querySelector(".submit4")
const submit3 = document.querySelector(".submit3")
const up5 = document.querySelector(".up5")
const up6 = document.querySelector(".up6")
const down5 = document.querySelector(".down5")
const down6 = document.querySelector(".down6")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    featopen.classList.toggle("hidden")
    down.classList.toggle("hidden")
    up.classList.toggle("hidden")
})
submit2.addEventListener("click", (e) => {
    e.preventDefault()
    compopen.classList.toggle("hidden")
    down2.classList.toggle("hidden")
    up2.classList.toggle("hidden")
})
iconmenu.addEventListener("click", () => {
    menu.style.display = "block"
})
close.addEventListener("click", () => {
    menu.style.display = "none"
})
submit4.addEventListener("click", () => {
    oneshow.classList.toggle("none")
    up5.classList.toggle("hidden")
    down5.classList.toggle("hidden")
})
submit3.addEventListener("click", () => {
    twoshow.classList.toggle("none2")
    up6.classList.toggle("hidden")
    down6.classList.toggle("hidden")
})