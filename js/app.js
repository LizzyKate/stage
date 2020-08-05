const modal = document.querySelector(".modal")
import Img1 from "../img/Group 6.png"
import Img2 from "../img/Group 7.png"
import Img3 from "../img/Group_8.png"
import Img4 from "../img/Group_9.png"
import Img5 from "../img/Group 10.png"
import img7 from "../img/Group_7.png"
import Img8 from "../img/Group 5.png"


// close modal
export const closeModalButton = () => {
        modal.classList.remove("fade-in")
        modal.children[0].classList.remove('scale-up-ver-center')
        
        modal.classList.add('fade-out')
        modal.children[0].classList.add('scale-down-ver-center')
    // modal.classList.toggle('scale-in-ver-top')
    // modal.classList.toggle('scale-out-ver-top')
    // // modal.classList.replace("display-show")
    setTimeout(() => {
        modal.classList.add("display-none")
    }, 500)
}

// open modal
export const openModalButton = () => {
    modal.classList.remove('fade-out')
    modal.children[0].classList.remove('scale-down-ver-center')
    modal.classList.remove("display-none")
    modal.classList.add("fade-in")
    modal.children[0].classList.add('scale-up-ver-center')
}

// open openImageModal
export const openImageModal = (e, i) => {
    let menu = document.querySelector('.menu')

    

        const div = document.createElement("div")
        div.classList.add('back')
        
        // if( i === 0 ){
            div.innerHTML = `
            <div class="front fade-in">
                <img src="${img7}"  class="scale-in-modal">
            </div>
            `
        // }else{
        //     div.innerHTML = `
        //     <div class="front fade-in">
        //         <img src="${data[i].image}"  class='scale-in-modal'>
        //     </div>`
        // }

        menu.appendChild(div)

        div.addEventListener("click", e => {
            
            if(!e.target?.src ){
                e.target.children[0].classList.toggle('scale-in-modal')
                e.target.children[0].classList.toggle('scale-out-modal')
                // div.classList.toggle('fade-in')
                
                // div.classList.toggle('fade-out')
                e.target.classList.toggle('fade-in')  
                  
                e.target.classList.toggle('fade-out') 
                e.target.classList.toggle('front')
                setTimeout(()=> {
                    div.classList.toggle('back')
                    div.style.display = 'none'
                }, 1000)
                  
            }
        })
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