// var doc = $('document')
var word = '';
var def = [];
var type = '';


var newWordBtn = $('.newWord');
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
    /////////////////////////////////////////////////////////////////////////////////////GetWord
    const getWord = {
        "async": true,
        "crossDomain": true,
        "url": "https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMax=9",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "4da867e0dcmshf5413d6cc321d0fp1ff473jsn6f3d5faf2ce2",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
        }
    };
    $.ajax(getWord).done(function (wordResponse) {
        word = wordResponse.word
        for (var C of word) {
            $(wordSec).append(`
            <div class="letter">${C}</div>
            `)
        }

        //////////////////////////////////////////////////////////////////////////////////Get Definition
        const getDef = {
            "async": true,
            "crossDomain": true,
            "url": "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definitions",
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "4da867e0dcmshf5413d6cc321d0fp1ff473jsn6f3d5faf2ce2",
                "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
            }
        };

        $.ajax(getDef).done(function (defResponse) {
            def.length = 0;
        
            for (var defItem of defResponse.definitions) {
                def.push(defItem.definition)
            }

            if (def.length === 0){
                def = ['No Definition apparently... How embarassing']
            }

            console.log(word)
            
            console.log(defItem.definition, defItem.definitions);
        });

$('#endGame').remove();
    });
    $(livesImg).attr('src', 'assets/Images/HM6.jpg');

}
///////////////////////////////////////////////////////////////////////NEW WORD BUTTON
$(document).on('click', '.newWord',(function () {
    $(wordSec).empty();
    // setRemainingLives();
    newWord();
    startLives();
    setRemainingLives();
}))
//////////////////////////////////////////////////////////////////////KEYPRESS LISTENER
$(document).keydown(function (event) {
    /////////////////////////////////////////////////////////////NON-LETTER KEYS
    if (event.keyCode < 65 || event.keyCode > 90) {
        // alert('not a letter')
        return
    }

    var key = event.originalEvent.key;
    var letters = $('.letter');
    /////////////////////////////////////////////////////////////////Check Input Correct
    for (var L of letters) {
        if (L.innerText === key.toUpperCase()) {
            $(L).addClass('correct');
            // console.log($('.letter'))
        }

    }
    /////////////////////////////////////////////////////////////////////////Win State
    if ($('.correct').length === $('.letter').length) {
        alert('winner')
        $(document.body).prepend(

            `<section id="endGame">
                <h1 class="EGItems" id="word">${word}</h1>
                <h5 class="EGItems" id="definition">${def}</h5>
                <button class="newWord">New Word</button>
            </section>`
        )

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



