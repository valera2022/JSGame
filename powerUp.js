let ground  = document.getElementById("play-ground")


let powerSpeed = document.getElementById("powerUp")

console.log(powerSpeed)



export const PowerSpeed = (snake)=>{
  
        console.log(snake)
        // snake.faster(amount)

        const oberver = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                  if(entry.isIntersecting){
                       console.log("divs are touchig")
                  }
                
            })
    })
    oberver.observe(powerSpeed)
    oberver.observe(snake)
}


