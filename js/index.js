// import functions from app.js
import {closeModalButton, openModalButton, openImageModal, data} from "./app"

// create an empty array of images
const images = []

// event listener to close modal
document.querySelector("#close-list").addEventListener("click", closeModalButton)

// event listener to open modal
document.querySelector(".check").addEventListener("click", openModalButton)

// Loop through the data then create an element that will contain each data object
const mountImages = () => {
    let menu = document.querySelector('.menu')
    
    data.forEach(e => {
        const div = document.createElement('div')
        div.classList.add('order2')
        div.innerHTML = `
        <div>
            <img src="${e.image}" alt="loading">
        </div>
        <div class="choose">
            <h3>${e.title}</h3>
            <p>${e.diet}</p>
        </div>
        `
        menu.appendChild(div)
        images.push(div)
    })
    console.log(images)
}

// call mountImages() to loop through the data object and mount on the DOM
    mountImages();

    // event listener to open openImageModal
    images.forEach(e => e.addEventListener("click", openImageModal))


