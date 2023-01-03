///////////////////API Call
var word = ''
var newWordBtn = $('#newWord');
var wordSec = $('#wordSec')

var lives = 6;
var livesLeft = $('#livesLeft');
var livesImg = $('#hMan')

var wordString = ''

function setRemainingLives() {
    $(livesLeft).text(lives)
}
function startLives() {
    lives = 6
}
function gameOver() {
    alert('game over');
    $(wordSec).empty();
    $(livesLeft).text('Lives');
    $(livesImg).attr('src', 'assets/Images/HM6.jpg');
}
function newWord() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMax=9",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "4da867e0dcmshf5413d6cc321d0fp1ff473jsn6f3d5faf2ce2",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
        }
    };
    $.ajax(settings).done(function (response) {
        word = response.word
        for (var C of word) {
            $(wordSec).append(`
            <div class="letter">${C}</div>
            `)
        }
    console.log(word, 'randowrd');

    });
    $(livesImg).attr('src', 'assets/Images/HM6.jpg');

    console.log(lives)
}
///////////////////////////////////////////////////////////////////////NEW WORD BUTTON
$(newWordBtn).click(function () {
    $(wordSec).empty();
    // setRemainingLives();
    newWord();
    startLives();
    setRemainingLives();
})
//////////////////////////////////////////////////////////////////////KEYPRESS LISTENER
    $(document).keydown(function (event) {
        /////////////////////////////////////////////////////////////NON-LETTER KEYS
        if (event.keyCode < 65 || event.keyCode > 90) {
            // alert('not a letter')
            return
        }

        var key = event.originalEvent.key;
        var letters = $('.letter');
        for (var L of letters) {
            if (L.innerText === key.toUpperCase()) {
                $(L).addClass('correct');
                console.log($('.letter'))
            }

        }

        if($('.correct').length === $('.letter').length){
            alert('winner')
        }

        if (word.indexOf(key) === -1) {
            // alert('inc')
            lives = lives - 1;
            setRemainingLives();
        }

        if (lives === 5) {
            $(livesImg).attr('src', 'assets/Images/HM5.jpg')
        }
        if (lives === 4) {
            $(livesImg).attr('src', 'assets/Images/HM4.jpg')
        }
        if (lives === 3) {
            $(livesImg).attr('src', 'assets/Images/HM3.jpg')
        }
        if (lives === 2) {
            $(livesImg).attr('src', 'assets/Images/HM2.jpg')
        }
        if (lives === 1) {
            $(livesImg).attr('src', 'assets/Images/HM1.jpg')
        }
        if (lives === 0) {
            // $(livesImg).attr('src', 'assets/Images/HM0.jpg');
            gameOver();
        }
    })





// console.log(wordList[0][0])




// if($(letters).hasClass('correct')){
//     alert('winner')
// }



