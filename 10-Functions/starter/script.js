'use strict';

const arr=[];
const flight=function(
    flightno,
    passengers=2,
    price
    )
    
{
    //this is a object
    const booking={
        flightno,
        passengers,
        price,
    };
console.log(booking);

}

flight('h123',10,199);
flight('h123',undefined,199);

const lufthansa={
airline:'international airline',
iatacode:'12z',
namee:'ayush',

book(flightnum,flighname){
    console.log(`${this.namee} booked a flight:${flighname}  with iatacode: ${this.iatacode} with flightno:${flightnum} from airline :name: ${this.airline}`);
}
}

lufthansa.book('0001','airindia');
const transform=lufthansa.book;


const efsunga={
    airline:'national airline',
    iatacode:'15z',
    namee:'kanika',
}
//transform.call('1000','chandigarh india');

const fall=lufthansa.book.bind(efsunga);

fall('1000','chandigarh india');


const addtax=function(rate,value){

    return function(){
        const addVAT=value+value*rate;
        console.log(`the rate of the value is ${addVAT}`);
    }
}

 const ans=addtax(0.1,200);
 ans();

 


 function g(a){
   
   return function(b)
       { console.log((a*20)+b);}
    
 };
 const f=g(100);
 f(2000);



 
