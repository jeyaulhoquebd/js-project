/**
 * TERNARY --> three parts
 * 
 * 3 types of ternary 
 *  
 * condition ? do something when true : do something when false
 */


const age = 16;

//Normal if-else
// if (age >=18){
//     console.log('You con vote')
// }

// else{
//     console.log('Ghumai thako')
// }

//Simple ternary
// age >= 18 ? console.log('Vote dio') : console.log('Ghumai thako')

let price = 500;
const isLeader = false;

if (isLeader === true){
    price = 0;
}

else{
    price = price + 100;
}

// console.log(price)

price = isLeader === true ? 0 : price + 100;


//OPTIONAL: semi-advanced ternary

if(isLeader === true){
    if (price > 1000){
        price = price /2;
    }
    else{
        price = 0;
    }

}

else{
    price = price +1000;
}

//Feel free to ignore this one

// price = isLeader === true ? price > 1000 ? price /2 : 0 :price + 1000;
price = isLeader === true ? price > 1000 ? price /2 : 0 :price + 1000; //এটা অপশনাল