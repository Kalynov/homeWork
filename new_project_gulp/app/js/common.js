
var myData

d3.json("data/data.json",function(error,data){
    myData = data;
});
console.log(myData);

let user = new User("Вася");
user.sayHi(); // Вася
console.log("!Hi World!");