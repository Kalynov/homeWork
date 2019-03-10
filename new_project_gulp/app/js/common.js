var json = require('./data.json');


var data = JSON.parse(json)

console.log(data)
let user = new User("Вася");
user.sayHi(); // Вася
console.log("!Hi World!");