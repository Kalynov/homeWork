var user = {};
user.name = "Vasiliy";
user.surname = "Petrov";
user.name = "Sergey";
delete user.name;
console.log(user.surname.length);