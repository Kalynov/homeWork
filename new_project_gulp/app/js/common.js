
var myData
console.log("myDate requare")

/* var myd3 = d3.json("data/data.json",function(error,data){
    myData = data;
    console.log(data)
});
var timeOut = setTimeout(function(){
    console.log(myData);
}) */
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




