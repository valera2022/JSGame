import { Snake } from "./snake.js"
import { size } from "./sources/sizes.js"
import { moveSnake } from "./moveSnake.js"
import { PowerSpeed } from "./powerUp.js"
let baseSpeed = 10

let body = document.querySelector("body")
console.log(size)
let first = size.find((s) => s.heightOne);
console.log(first);
let ground  = document.getElementById("play-ground")
let form = document.getElementById("form")

document.addEventListener("DOMContentLoaded",()=>{
 



        const createSnake = async (e) => {
            e.preventDefault()
             let color = e.target.snake.value
            let serpent =  new Snake(color, baseSpeed, first.heightOne , first.widthOne)
            console.log(typeof serpent.color)
            console.log(serpent)
            let div = document.createElement("div")
            div.id = "snake"
            div.style.backgroundColor = serpent.color
            div.style.height = serpent.height
            div.style.width = serpent.width
            
            ground.append(div)
            moveSnake(div,serpent)
            PowerSpeed(div)
            
            
        }

        
        form.addEventListener("submit", createSnake )

})