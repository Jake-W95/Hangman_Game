var letters = $('.letter')
var userIn = $('#userInput')
console.log(letters[0].innerText )







$(document).keydown(function(event){
    var key = event.originalEvent.key
    // console.log()
    
for(var L of letters){
    // console.log(L)
    if(L.innerText === key.toUpperCase()){
        // console.log(L)
        $(L).addClass('correct') 
        userIn.val('')
    }
}
})



