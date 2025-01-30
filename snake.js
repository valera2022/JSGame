import { increaseSpeedAndSize } from "./mixin.js";


export class Snake {

   constructor( color, speed,height, width, element){
        this.color = color;
        this.speed = speed;
        this.height = height;
        this.width = width
        this.element = element
    }

    updateSize() {
        console.log(this.width)
        this.element.style.width = `${this.width}px`;
        console.log(this.element)
        this.element.style.height = `${this.height}px`;
    };
  
}

Object.assign(Snake.prototype, increaseSpeedAndSize);