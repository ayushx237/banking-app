function fruitjuice(mango,orange){
    const juice="fruit juice with " +mango+ " mango and " +orange+ " orange.";
return juice;
}

    
   console.log(fruitjuice(5,2));
   const num=Number('23');
   /* Write your code below. Good luck! 🙂 */

let tip;

let bill;
function calcTip(bill){
    if(50<=bill<=300){
     tip=0.15*bill;
    }
    else{
     tip=0.2*bill;
    }
  return tip;
}




const bills=[100,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(totals);

for(let i=0;i<8;i++){
console.log(`lifting weights repetition ${i}`);
}