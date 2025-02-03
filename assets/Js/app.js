let toggle= document.querySelector(".toggle")
let sidebar= document.querySelector(".sidebar")

let logoImg=document.querySelector(".logoImg")
let logoText=document.querySelector(".logoText")

let icon1=document.getElementById("icon-1")
let icon2=document.getElementById("icon-2")

toggle.addEventListener("click",function () {
    sidebar.classList.toggle("active")
    toggle.classList.toggle("active")

    icon1.classList.toggle("displayNone")
    icon2.classList.toggle("displayNone")

    logoText.classList.toggle("displayNone")
    logoImg.classList.toggle("displayNone")
})