'use strict';
const Ayush=function(firstname,birthdate){
  this.firstname=firstname;
  this.birthdate=birthdate;
}

console.log( new Ayush('peeyush',1212));
console.log( new Ayush('ayush',2003));


//coding challenge-1 //using prototype method
const Car=function(make,speed){
this.make=make;  //this is the syntax;
this.speed=speed;
}
//adding accelerate as a method in car function using prototype method
Car.prototype.accelerate=function(){
    this.speed=this.speed+10;
    console.log(`${this.make } is moving with a speed of ${this.speed} km\h`);
}
//adding brake as a method in car function using prototype method
Car.prototype.brake=function(){
    this.speed=this.speed-5;
    console.log(`${this.make } is moving with a speed of ${this.speed} km\h`);
}

const BMW=new Car('BMW',150);
const merc=new Car('MERC',120);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.accelerate();

BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();


//making classes and its mehods in JS using construnctor method 

class personcl{
  constructor(firstname,birthdate){
    this.firstname=firstname;
    this.birthdate=birthdate;
  }
//this method comes under prototype of the personcl class and shown in its prototype option
  calcage(){
    console.log(2040-this.birthdate);
  }
}

const ayush=new personcl('paras',2003);
console.log(ayush);
ayush.calcage();

console.log(ayush.__proto__===personcl.prototype);

//using getter and setter
const bankist={
  //tese are objectsunder banikst
  owner:'jaisica',
  movements:[10,20,30,40,50],
//these are methods under bankist
get lastval(){
  return this.movements.pop();
},

set newval(mov){
return this.movements.push(mov);
}
}

console.log(bankist.lastval);
const piyush=console.log(bankist.newval=100);
console.log(bankist.movements);

//using object.create

const peopleac={
  calage(){
    console.log(2040-this.birthyear);
  }
}

const ayushie=Object.create(peopleac);
ayushie.birthyear=2003;
ayushie.calage();


/*
//coding challenge-1 ------//using prototype method
const Car=function(make,speed){
  this.make=make;  //this is the syntax;
  this.speed=speed;
  }
  //adding accelerate as a method in car function using prototype method
  Car.prototype.accelerate=function(){
      this.speed=this.speed+10;
      console.log(`${this.make } is moving with a speed of ${this.speed} km\h`);
  }
  //adding brake as a method in car function using prototype method
  Car.prototype.brake=function(){
      this.speed=this.speed-5;
      console.log(`${this.make } is moving with a speed of ${this.speed} km\h`);
  }
  
  const BMW=new Car('BMW',150);
  const merc=new Car('MERC',120);*/

//coding challenge #2------------
//using ES6 classes
class car {
  constructor(make,speed){
    this.make=make;
    this.speed=speed;
  }
  accelerate(){
    this.speed=this.speed+10;
      console.log(`${this.make } is moving with a speed of ${this.speed} km\h`);
  }
  brake(){
    this.speed=this.speed-5;
      console.log(`${this.make } is moving with a speed of ${this.speed} km\h`);
  }
  get speedus(){
    this.speed=(this.speed)/1.6;
    console.log(`${this.make} is now moving with ${this.speed} mi/h which is converted into foreign speed unit `);
  }
set speedus(val){
this.speed=val/1.6;
;
}}
const bmw=new car('bmw',150);
const mer=new car('mer',120);



bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.speedus;
console.log(bmw.speedus=50);


//inheritng the property of parent class into child class

const person=function(firstname,birthyear){
  this.birthyear=birthyear;
  this.firstname=firstname;
}

//creating clacage method in person classs using prototype method!
person.prototype.calcage=function(){
  console.log(2040-this.birthyear);
}


const student=function(firstname,birthyear,course){
  //inherting from person class
person.call(this,firstname,birthyear);
  this.course=course;
}
//to accessing the calcage method whih is the prototype function of person class use this!
student.prototype=person.prototype;
const name1=new student('ayush',2003,'cse');
console.log(name1);
name1.calcage();
console.log(student.prototype===person.prototype);
console.log(student.__proto__===person.__proto__);
console.dir(student.prototype.constructor);
console.log(name1 instanceof student);
console.log(name1 instanceof person);
//coding challenge 3--------

class truck{
constructor(make,currspeed,currbatt){
  this.make=make;
  this.currspeed=currspeed;
  this.currbatt=currbatt;
}
//they !> both were methods
chargebattery(chargeto){
  this.currbatt=chargeto;
}
accelerate(){
this.currspeed=this.currspeed+20;
this.currbatt=this.currbatt-0.1;
console.log(`${this.make} going at ${this.currspeed} km/h , with a charge of ${this.currbatt} `);
}
}
const car1=new truck('tesla',200,50);
car1.chargebattery(100);
car1.accelerate();

/*
car.prototype.chargebatttery=function(chargeto){
  this.currbatt=chargeto;
}*/
