const modal = document.querySelector(".modal")
import Img1 from "../img/Group 6.png"
import Img2 from "../img/Group 7.png"
import Img3 from "../img/Group_8.png"
import Img4 from "../img/Group_9.png"
import Img5 from "../img/Group 10.png"
import Img6 from "../img/Group 6.png"
import img7 from "../img/Group_7.png"
import Img8 from "../img/Group 5.png"


// close modal
export const closeModalButton = () => {
    modal.classList.replace("display-show","display-none")
    
}

// open modal
export const openModalButton = () => {
    modal.classList.replace("display-none", "display-show")
}

// open openImageModal
export const openImageModal = (e, i) => {
    let menu = document.querySelector('.menu')

    // if(e.target.parentElement.classList.contains("order2")){
        const div = document.createElement("div")
        div.classList.add('back')
        
        if( i === 0 ){
            div.innerHTML = `
            <div class="front">
                <img src="${img7}" alt="">
            </div>
            `
        }else{
            div.innerHTML = `
            <div class="front">
                <img src="${data[i].image}" alt="">
            </div>`
        }
        
        menu.appendChild(div)

        div.addEventListener("click", e => {
            if(!e.target?.src?.length){
                div.style.display = 'none'
            }
        })
    // }
}

// data structure
export const data = [
    {
        title:"Akara and Pap",
        diet:"Carbohydrate",
        image:Img8
    },
    {
        title:"Jollof Rice",
        diet:"Protein",
        image:Img1
    },
    {
        title:"Gastonton",
        diet:"Carbohydrate",
        image:Img2
    },
    {
        title:"Port Domenic",
        diet:"Carbohydrate",
        image:Img3
    },
    {
        title:"Carleeville",
        diet:"Fats & Oils",
        image:Img4
    },
    {
        title:"South Cheslyton",
        diet:"Vegetable",
        image:Img5
    }
]