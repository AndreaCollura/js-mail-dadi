
        
        
        
        
        
        
        




const diceNumUser = getRndNumber (1,6);
const diceNumPc = getRndNumber (1,6);
const player = document.getElementById('player');
const pc = document.getElementById('pc');
const whoWin = document.getElementById('results');
const btnRoll = document.getElementById('diceroll');



btnRoll.addEventListener('click', rollDice );




const yourResult = `
     
    <h2>you</h2>
    <h1> ${diceNumUser}</h1>
     
     
`;

const pcResult = `

    <h2>pc</h2>
    <h1> ${diceNumPc}</h1>


`;        




function rollDice (){
    
    
    whoWin.classList.remove('opacity-0');
    player.innerHTML = yourResult;
    pc.innerHTML = pcResult;
    
    
   if(diceNumUser > diceNumPc) {

    verdict.innerHTML = `
        <h1 class="text-uppercase">you win!!</h1>

    
    `;
   
   
        
        
    } else if (diceNumUser === diceNumPc){
    
    
   

    verdict.innerHTML = `
        <h1 class="text-uppercase">tie!!</h1>
    `;
        
    

    } else {
        
    verdict.innerHTML = `
        <h1 class="text-uppercase">you lose!!</h1>
    `;

 
      
    }

    

}




console.log(verdict,pcResult,yourResult);




