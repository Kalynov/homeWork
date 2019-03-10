function User (name) {

    this.name = name;

  this.sayHi = function() {
    alert(this.name);
  }

}