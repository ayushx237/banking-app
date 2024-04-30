// Remember, we're gonna use strict mode in all scripts now!


function findamplitude(){
    const temp=[1,2,3,4,5,6,-1,80,9,10];
    let max=0;
    let min=0;
    for(let i=0;i<temp.length;i++){
    if(temp[i]>max)
    max=temp[i];

    if(temp[i]<min)
    min=temp[i];
    }
        console.log(`max ${max} min ${min}`);
        return max-min;

    }

console.log(findamplitude());







