let randomNumber = Math.floor(Math.random()*100);
let guessCount = 0;
let resetButton;

function cGuess(){
    let userguess = document.getElementById('guessField').value;
    guessCount++
    document.getElementById('lastGuess').innerHTML = userguess
    document.getElementById('guessCount').innerHTML = guessCount;
    if( userguess == randomNumber){
        document.getElementById('lastResult').innerHTML = 'Winner Winner, reload the page tu try again';
        document.getElementById('hot').innerHTML ='just right';
    }
    else{
        document.getElementById('lastResult').innerHTML ='try again';
        if (userguess > randomNumber){
            document.getElementById('hot').innerHTML ='too high';
        }
        else if (userguess < randomNumber)
        {
            document.getElementById('hot').innerHTML ='too low';
        }
    }
    }
    