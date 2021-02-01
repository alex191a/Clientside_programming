let randomNumber = Math.floor(Math.random()*100)+1;;
let guessCount = 0;
let resetButton;

function cGuess(){
    let userguess = document.getElementById('guessField').value;
    guessCount++
    document.getElementById('lastGuess').innerHTML = "Last number was: " + userguess
    document.getElementById('guessCount').innerHTML = "Guess counter : " + guessCount;
    if( userguess == randomNumber){
        document.getElementById('lastResult').innerHTML = 'Winner Winner, reload the page tu try again';
        document.getElementById('hot').innerHTML ='just right';
    }
    else{
        document.getElementById('lastResult').innerHTML ='try again';
        if (userguess > randomNumber){
            document.getElementById('hot').innerHTML ='Number is too high';
        }
        else if (userguess < randomNumber)
        {
            document.getElementById('hot').innerHTML ='Number is too low';
        }
    }
}
document.getElementById('guessSubmit').addEventListener("click", cGuess());