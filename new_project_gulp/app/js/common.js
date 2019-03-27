
var myData
console.log("myDate requare")


let cardContainer = document.createElement("div")
cardContainer.className = "cardContainer";
document.body.appendChild(cardContainer)

var date = new DateWrapper({
    parent:document.body
});
var title = new Title({
    content:"New Phrases for today",
    parent: document.body,
})

var card = new Card({
    parent:cardContainer
})

function cb(){
    console.log(myData)
}


var myd3 = d3.json("data/phrases.json",function(error,data){
    myData = data;
    cb()
});



