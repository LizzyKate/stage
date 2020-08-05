import { openImageModal, data} from "./app"
import { TimelineLite, Power2} from 'gsap'


const images = []

document.querySelector("#close-list").addEventListener("click", ()=> {
    const tl = new TimelineLite({paused: true})

    tl
    .to('.modal', 1, {
        opacity:0,
        ease:Power2.easeIn
    })
    .to('.third', 0.8 , {
        transform:'scale(1)',
        ease: Power2.easeIn,
        opacity:1,
        height:0,
        display:'flex'
    }, "-=0.6")
    .fromTo('.meal_container', 1, {
        transform:'scaleY(1)',
        transformOrigin:'80% 0',
        height:'auto',
        bottom:'0'
    }, {
        bottom:'76px',
        transform:'scaleY(0.4)',
        transformOrigin:'80% 0',
        height:'200px'
    },  "-=0.6")
    .to('.modal', 0, {
        display:'none'
    })

    tl.play()
})

document.querySelector(".check").addEventListener("click",()=> {
    const tl = new TimelineLite({paused: true})
    tl.to('.third', 0.8 , {
        transform:'scale(1.11)',
        ease: Power2.easeIn,
        opacity:0,
        height:'200px'
    })
    .to('.modal', 1, {
        display:'flex',
        opacity:1,
        ease:Power2.easeIn
    }, "-=0.6")
    .fromTo('.meal_container', 1, {
        transform:'scaleY(.4)',
        transformOrigin:'80% 0',
        height:'500px'
    }, {
        bottom:'0',
        transform:'scaleY(1)',
        transformOrigin:'80% 0',
        height:'auto'
    },  "-=0.6").
    to('third', 0 , {
        display:'none'
    })

    tl.play()
})

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
    mountImages();

    images.forEach((e, i) => e.addEventListener("click", a => openImageModal(a, i)))


