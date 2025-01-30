// https://www.mariowiki.com/images/9/9f/SMM2-SMB-SnakeBlock.png
export const enemies = ()=>{
    document.querySelectorAll('.box').forEach(box => {
        const randomDuration = Math.random() * 4 + 2;  // Random duration between 2 and 7 seconds
        const randomDelay = Math.random() * 5;         // Random delay before starting
      
        box.style.animationDuration = `${randomDuration}s`;
        box.style.animationDelay = `${randomDelay}s`;
      
        const randomDirectionX = Math.random() < 0.5 ? 'left' : 'right';
         const randomDirectionY = Math.random() < 0.5 ?  "top" : "bottom"

        box.style.animationName = randomDirectionX === 'left' ? 'moveBoxLeft' : 'moveBoxRight';
       
        box.style.animationName =  randomDirectionY === "top" ? "moveBoxTop" : "moveBoxButtom";
       
      });
             
     
      
      
      // Add the alternate keyframes for left and right movement
      const style = document.createElement('style');
      style.innerHTML = `
        

        @keyframes moveBoxButtom {
           0%{top: 0;}
           100%{top: 100%}
        }

       @keyframes moveBoxTop{
          100%{top: 100%}
           0%{top: 0;}
           
        }
      `
      ;
      
      document.head.appendChild(style);
       

}
