import { increaseSpeedAndSize } from "./mixin.js";


export class Snake {

   constructor(color, speed,height, width){
        this.color = color;
        this.speed = speed;
        this.height = height;
        this.width = width
    }
  
}

Object.assign(Snake.prototype, increaseSpeedAndSize);