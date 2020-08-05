const modal = document.querySelector(".modal")
import Img1 from "../img/Group 6.png"
import Img2 from "../img/Group 7.png"
import Img3 from "../img/Group_8.png"
import Img4 from "../img/Group_9.png"
import Img5 from "../img/Group 10.png"
import img7 from "../img/Group_7.png"
import Img8 from "../img/Group 5.png"
import { TimelineLite, Power2} from 'gsap'

export function openImageModal  (f, i)  {

    console.log(f)

    const tl = new TimelineLite({paused: true})

    
    let menu = document.querySelector('.modal')

    

        const div = document.createElement("div")
        div.classList.add('back')
        
        if( i === 0 ){
            div.innerHTML = `
            <div class="front">
                <img src="${img7}"  >
            </div>
            `
        }else{
            div.innerHTML = `
            <div class="front">
                <img src="${data[i].image}" >
            </div>`
        }

        menu.appendChild(div)

        tl.to('.back', 0.2 ,{
            opacity:1
        }, '-=0.3').
        fromTo( '.back img', 0.5, {
            opacity:0,
            transform:'scale(0.5)'
        }, {
            ease:Power2.easeIn,
            opacity:1,
            transform:'scale(1)'
        })

        tl.play()

        div.addEventListener("click", e => {
            const tl2 = new TimelineLite({paused: true})
            
            if(!e.target?.src ){

                tl2.fromTo( '.front', 0.5 , {
                    opacity:1,
                    transform:'scale(1)'
                    
                }, {
                    ease:Power2.easeOut,
                    opacity:0,
                    transform:'scale(0.3)'
                }).to('.back', 0.2 ,{
                    opacity:0
                }, '-=0.4').to('.back', 0 , {
                    display:'none'
                })
        
                tl2.play()
                  
            }
        })
}

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