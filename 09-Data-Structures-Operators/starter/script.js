'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const menu=['italian','russian' ,'vegetrain','chinese'];

console.log( ' ayush is '+menu[2]);
console.log( ' ayush needs '+menu[1]);


const arr=[3,4,5];

const arr1=[7,8,9];
console.log(...arr,...arr1);

const str='jonas';
console.log(str);
console.log(...str);

//to make a string "here is your pasta with three ingridient usig a promt functionality"mnmn



const add=function(...x){
 
let sum=0;
for(let i=0;i<x.length;i++){
  sum=sum+x[i];
  
}
console.log(sum);
}

add(2);
add(2,3,4);
add(2,3,4,5);

console.log(true || 'jonas');
console.log(false || 'jonas');
console.log(0 || 'jonas');
console.log(true || 'jonas');
console.log('ponas' || 'jonas' || 'lonas');
console.log('undefined '|| 'jonas');
console.log(true && 0 &&'ayush'&& null);
console.log(false && 'jonas');
console.log(0 || 'jonas');
console.log(true && 'jonas' && null);