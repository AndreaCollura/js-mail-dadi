// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.




const listUser = [

    'riccardo.rossi@gmail.com',
    'alberto.verdi@gmail.com',
    'michele.ponti@gmail.com',
    'luca.conti@gmail.com',
    'laura.principe@gmail.com',
    'antonio.gaglio@gmail.com',
    'alfredo.monte@gmail.com',
    'carlo.cimino@gmail.com',
    'alessandra.guglielmo@gmail.com',
    'luigi.fiore@gmail.com',
    'sonia.massi@gmail.com',
    'andrea.dilauro@gmail.com',
    'martina.abete@gmail.com'
];





const btnVe = document.getElementById('btnverify');
btnVe.addEventListener('click', loginUser);




function loginUser(e) {
    e.preventDefault();
    let registered = '';
    const inputUser = document.getElementById('inputemail').value;
    for(let i = 0; i < listUser.length; i++ ){
        if(listUser[i].toLowerCase() === inputUser.toLowerCase() ){
           registered = listUser[i];
           
            
        } 
    } 
    
    if (registered !== '' ){
        console.log('benvenuto');
        
    } else {
        console.log('NON REGISTRATO');
    }
    

}





































