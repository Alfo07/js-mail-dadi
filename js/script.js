//MAIL
//Creare un imput in cui l'utente inserisce la sua mail
//Creare un array con dentro 10 mail
//Creare un for e un if per il controllo della mail inserita dall'utente

const mail = [
    'mail1@gmail.com',
    'mail2@gmail.com',
    'mail3@gmail.com',
    'mail4@gmail.com', 
    'mail5@gmail.com',  
    'mail6@gmail.com', 
    'mail7@gmail.com', 
    'mail8@gmail.com', 
    'mail9@gmail.com', 
    'mail10@gmail.com', 
];

let botton = document.getElementById('Enter');

let check1 = document.getElementById('mail-check1');

let check2 = document.getElementById('mail-check2');

let wrong = document.getElementById('retry');

let corretta = false;

botton.addEventListener("click", function(){
    let userMail = document.getElementById('email').value;
    for (let i = 0; i <= mail.length; i++){
        if (mail[i] === userMail){
            corretta = true;
        }
    }
    if (corretta){
        check1.classList.add('disactive');
        check2.classList.remove('disactive');
        wrong.classList.add('disactive');
    } else {
        check1.classList.add('disactive');
        wrong.classList.remove('disactive');
    }

});

//DADI
//Creare due array in cui sono contenuti 6 numeri, uno per il giocatore e uno per il computer
//Prendere due numeri casuali dall'array e creare un if che li mette a confronto

let lancio = document.getElementById('Tiro');

let userShot = document.getElementById('numero-giocatore');

let computerShot = document.getElementById('numero-computer');

let campione = document.getElementById('vincitore');

lancio.addEventListener('click', function(){
    let userNumber = (Math.round(Math.random() * 5) + 1);

    let computerNumber = (Math.round(Math.random() * 5) + 1);

    userShot.innerHTML = `<p>Numero giocatore: ${userNumber} </p>`;

    computerShot.innerHTML = `<p>Numero computer: ${computerNumber} </p>`;

    if(userNumber === computerNumber){

        campione.innerHTML= '<p>Pareggio!</p>';

    } else if (userNumber > computerNumber){

        campione.innerHTML= '<p>Hai vinto!</p>';

    } else {

        campione.innerHTML= '<p>Hai perso!</p>';

    };
});


