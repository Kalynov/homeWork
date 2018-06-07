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

//||||||||||||||||||||||||||||||||||||||||||||\
// max ZP 

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
//console.log(maxZP(salaries));
//console.log(maxZP(schedule));

//|||||||||||||||||||||||||||||||||||||||||\
// ZP*2

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj){

    for(var key in obj){
        if (isNumeric(obj[key])){
            obj[key]=2*obj[key];
        }
    }
}

multiplyNumeric(menu);

//console.log(menu);
//||||||||||||||||||||||

//Последний элемент.
array = new Array(10);
array[9]="last Element";
function lastElement(arr){
 //console.log(arr[arr.length-1]);
}
lastElement(array);


//|||||||||||||||||||||||||||||||||||||||||||||\\
// решето Эратосфена

var allNumber = []
for (var i =0; i<100; i++){
    allNumber[i]= i;
}
var p;
//console.log(allNumber);
function sieveEratosfen (arr) {
    var p = 2;

do {
  // шаг 3
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  // шаг 4
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < 100); // шаг 5

// шаг 6 (готово)
// посчитать сумму
var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
    //console.log(arr[i]);
  }
}
}
sieveEratosfen(allNumber);
