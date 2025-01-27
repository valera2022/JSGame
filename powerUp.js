import { observePosition } from "./observer.js"


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

    if (isTouching) {
        console.log('The divs are touching!');
         snakeInstance.faster(20)
         powerSpeed.remove()
    } else {
        // console.log('The divs are not touching.');
    }
    // observePosition(snake)
}



