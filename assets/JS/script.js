var newWordBtn = $('#newWord');
var wordSec = $('#wordSec')

// console.log(letter[0].innerText)
var lives = 5
var livesLeft = $('#livesLeft')


// document.ready(setRemainingLives())





function setRemainingLives() {
    
    $(livesLeft).text(lives)
}
$(newWordBtn).click(function () {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    $(wordSec).empty();
    setRemainingLives()

    for (var C of randomWord) {
        $(wordSec).append(`
        <div class="letter">${C}</div>
        `)
        var letters = $('.letter');
        // console.log(letters)


        $(document).keydown(function (event) {
            var key = event.originalEvent.key;
            for (var L of letters) {
                if (L.innerText === key.toUpperCase()) {
                    $(L).addClass('correct');
                }
            }
            if (randomWord.indexOf(key) === -1) {
                alert('inc')
                lives--;
                setRemainingLives()
            }
        })

    }
    if ($(letters).hasClass('correct')) {
        alert('win')
    }





})
// console.log(wordList[0][0])




// if($(letters).hasClass('correct')){
//     alert('winner')
// }



