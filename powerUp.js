import { observePosition } from "./observer.js"

// import audio from "./sources/power-up-type-1-230548.mp3"
let audio = new Audio("./sources/power-up-type-1-230548.mp3");


let ground  = document.getElementById("play-ground")


let powerSpeed = document.getElementById("powerUp")

console.log(powerSpeed)



export const PowerSpeed = (snakeDiv,snakeInstance)=>{
    // console.log(snake)
  
    const box2Rect = snakeDiv.getBoundingClientRect();
 
    const box1Rect = powerSpeed.getBoundingClientRect();
  
        // console.log(snake)
        // snake.faster(amount)

        const isTouching =
        !(box1Rect.right < box2Rect.left ||  // box1 is left of box2
          box1Rect.left > box2Rect.right ||  // box1 is right of box2
          box1Rect.bottom < box2Rect.top || // box1 is above box2
          box1Rect.top > box2Rect.bottom); // box1 is below box2

    if (isTouching && powerSpeed.style.top !== "100px" && powerSpeed.style.top !== "600px") {
        console.log('The divs are touching!');
         snakeInstance.faster(20)
         audio.play();
        powerSpeed.style.position = "absolute"
         powerSpeed.style.top = "100px"
    

    } 
    else if(  powerSpeed.style.top === "100px" && isTouching){
        audio.play();
        snakeInstance.increasedWidth(120)
        snakeInstance.increaseHeight(120)
        snakeInstance.updateSize()
        audio.play();
        powerSpeed.style.top = "600px"
       
        // snakeInstance.increaseHeight(120)
        console.log("bigger power call")
        
   }

   else if(  powerSpeed.style.top === "600px" && isTouching){
    console.log("won")
    audio.play();
     alert("You won")
     return
      
  
   
   
    // snakeInstance.increaseHeight(120)
   
    
}
    else {
        // console.log('The divs are not touching.');
    }
    // observePosition(snake)
}



