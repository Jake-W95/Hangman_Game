var newWordBtn = $('#newWord');
var wordSec = $('#wordSec')

// console.log(letter[0].innerText)


$(newWordBtn).click(function () {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    $(wordSec).empty();

    for (var C of randomWord) {
        $(wordSec).append(`
    <div class="letter">${C}</div>
    `)
        var letters = $('.letter');
        
        
        $(document).keydown(function (event) {
            var key = event.originalEvent.key;
            
            for (var L of letters) {
                if (L.innerText === key.toUpperCase()) {
                    $(L).addClass('correct');
                } 
            }
        })

        }
        if($(letters).hasClass('correct')){
            alert('win')}

        
    
    
    
})
// console.log(wordList[0][0])




// if($(letters).hasClass('correct')){
//     alert('winner')
// }



