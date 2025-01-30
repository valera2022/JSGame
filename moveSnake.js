import { PowerSpeed } from "./powerUp.js"
let playGround  = document.getElementById("play-ground")
let position = 0

let positionY = 0
export let moveSnake = (div,serpent)=>{ 
    div.style.left = `${position}px`
    console.log(serpent.speed)
       let boundClient 

       const moveRight = ()=> { 
            if(position + serpent.speed  <= 450){
                position += serpent.speed
                div.style.left = `${position}px`
              
            }
              
     
          } 

          
            

        

        const moveLeft = ()=>{
       
              if(position - serpent.speed  >= 0){
                  position -= serpent.speed
                  div.style.left = `${position}px`
                 

              }
        }

        div.style.top = `${positionY}px`;

        const moveBottom = ()=>{
          if(positionY + serpent.speed <= 650 ){
                 positionY += serpent.speed
                 div.style.top = `${positionY}px`  
          
          }
         
            

        }

        const moveTop = ()=>{
           if (positionY - serpent.speed >= 0){
                  positionY -= serpent.speed
                  div.style.top = `${positionY}px`
                  
           }
        }


        document.addEventListener("keydown",(event)=>{
            event.preventDefault()
            // console.log(event)
            if(event.key === "ArrowRight"){
            moveRight()
            }
            else  if(event.key === "ArrowLeft"){
                moveLeft()
            }

            else if (event.key === "ArrowDown"){
                    moveBottom()
            }
            else if (event.key === "ArrowUp"){
                moveTop()
            }
          })
    

       
      
    }




       
   
    
    

               
   


       
            
    
       
 
  
