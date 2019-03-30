
var myData
console.log("myDate requare")


let cardContainer = document.createElement("div")
cardContainer.className = "cardContainer";
document.body.appendChild(cardContainer)

var date = new DateWrapper({
    parent:document.body
});

var titleWrap = document.createElement("div")
titleWrap.className ="titleWrapp";
document.body.appendChild(titleWrap);

var title = new Title({
    content:"New Phrases for today",
    parent:titleWrap,
})
let myVar1= "letVar";

function cb(){
    console.log(myData)
    myData.forEach(element => {
        var card = new Card({
            theme:element.theme,
            sourceText:element.sourceText,
            translate:element.translation,
            parent:cardContainer
        })
    });
    
}


var myd3 = d3.json("data/phrases.json",function(error,data){
    myData = data;
    cb()
});



