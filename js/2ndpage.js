

const btnRoll = document.getElementById('diceroll');
btnRoll.addEventListener('click', rollDice );


let diceNumUser = getRndNumber (1,6);
let diceNumPc = getRndNumber (1,6);



function rollDice (){
    const diceNumUser = getRndNumber (1,6);
    const diceNumPc = getRndNumber (1,6);

   if(diceNumUser > diceNumPc) {
    console.log('hai vinto!')
        
        
    } else if (diceNumUser === diceNumPc){
        console.log('pareggio!')
        
       

    } else {
        console.log('hai perso!')
        
      
    }


}





