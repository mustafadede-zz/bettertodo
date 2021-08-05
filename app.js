let taskname = ""
let taskdesc = ""
const buttonlistener = document.body.querySelector(".button")
const modal = document.body.querySelector(".modal")
const modalcontent = document.body.querySelector(".modal-content")
const cardelement = `<div class='box'><div class='card-items'><p class='card-title'>${taskname}</p><hr><p class='card-desc'>${taskdesc}</p></div></div>`
function showDO() {
    modal.style.display = "block";
}

window.addEventListener("click",function (event) {
    if(event.target !== modalcontent) {
        modal.style.display = "none";
    }
})
