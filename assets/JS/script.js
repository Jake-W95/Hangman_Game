var newWordBtn = $('#newWord');
var wordSec = $('#wordSec')

// console.log(letter[0].innerText)


$(newWordBtn).click(function () {

  for(var C of wordList[0]){
    $(wordSec).append(`
    <div class="letter">${C}</div>
    `)
var letter = $('.letter');

    
    $(document).keydown(function (event) {
        var key = event.originalEvent.key;
        
        for (var L of letter) {
            if (L.innerText === key.toUpperCase()) {
                $(L).addClass('correct');
            }
        }
    })
  }

  console.log(letter)

})
// console.log(wordList[0][0])




// if($(letters).hasClass('correct')){
//     alert('winner')
// }



