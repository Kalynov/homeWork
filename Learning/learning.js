var user = {};
user.name = "Vasiliy";
user.surname = "Petrov";
user.name = "Sergey";
delete user.name;

var schedule = {}
//||||||||||||||||||||||||||||||||||||||||

// Функция проверки наличия свойств у объета
// возвращает true если объект пустой
function isEmpty(obj) {
   for (var key in obj){
       //console.log('в объекте есть свойства')
        return(false);
   }
   //console.log('объект пуст')
   return(true);
}
  
isEmpty(schedule);
  
schedule["8:30"] = "подъём";
  
isEmpty(schedule);
//||||||||||||||||||||||||||||||||||||||||
//Сумма Свойств\\

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };

function sumZP(obj){
    var sum=0
    for (var key in obj){
        sum+=obj[key];
    }
    return (sum)
}
//console.log(sumZP(salaries));


function maxZP(obj){
    var sum=0;
    var maxWorker = "";
    for (var key in obj){
        if (sum<obj[key]){
            sum = obj[key];
            maxWorker=key;
        }
    }
    return (maxWorker||"Нет сотрудников")
}
console.log(maxZP(salaries));
console.log(maxZP(schedule));