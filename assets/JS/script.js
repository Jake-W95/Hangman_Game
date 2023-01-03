var newWordBtn = $('#newWord');
var wordSec = $('#wordSec')

// console.log(letter[0].innerText)
var lives = 6;
var livesLeft = $('#livesLeft');
var livesImg = $('#hMan')

var wordString = ''
// document.ready(setRemainingLives())
function startLives() {
    $(livesLeft).text(lives)
}
function setRemainingLives() {
    $(livesLeft).text(lives)
}
function gameOver() {
    alert('game over');
    $(wordSec).empty();
    $(livesLeft).text('Lives');
    $(livesImg).attr('src', 'assets/Images/HM6.jpg');
}



$(newWordBtn).click(function () {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord, 'randowrd')
    $(wordSec).empty();
    startLives();

    for (var C of randomWord) {
        $(wordSec).append(`
        <div class="letter">${C}</div>
        `)
    }

    $(document).keydown(function (event) {
        console.log(randomWord)
        if (event.keyCode < 65 || event.keyCode > 90) {
            alert('not a letter')
        }
        var key = event.originalEvent.key;
        var letters = $('.letter');
        for (var L of letters) {
            if (L.innerText === key.toUpperCase()) {
                $(L).addClass('correct');
            }

        }
        if (randomWord.indexOf(key) === -1) {
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
        if (lives === 3){
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
})




// console.log(wordList[0][0])




// if($(letters).hasClass('correct')){
//     alert('winner')
// }



