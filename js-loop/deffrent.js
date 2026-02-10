// for(let i = 0 ; i < 20; i++){
//     if (i % 2 !== 0){ // এখানে এটা করা যেই i % 2 === 1 একই 
//         console.log(i);
//     }
    
// }


for(let i = 1 ; i < 20; i+=2){  //এই ভাবেও বিজোড় বের করা যায়
    
    // console.log(i);
    
}

// give me the list numbers between 1 to 30 divisible by 5

// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0){
//         console.log(i)
//     }
// }


// ৩ অথবা ৫ দিয়ে যাবে 
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        // console.log(i);
    }
}

// ৩ এবং ৫ দিয়ে যাবে  15 এবং ৩০ আসবে শুধু 
for(let i = 1; i <=30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        // console.log(i);
    }
}

// give me the sum of numbers from 1 to 20 that are divisible by 3

// মানে এখানে হবে এমন সংখ্যা যেখানে ১ থেকে ২০ পর্যন্ত যোগ হবে ৩ থাকবে এখানে মুল 

let total = 0;
for(let i = 1; i <=20; i++ ){
    if (i % 3 === 0){
        // console.log(i)
        total = total + i;
        // console.log('total', total)
    }
}


for (let i = 1; i <=15; i++){
    if(i % 5 === 1){
        continue;
        
    }
    console.log(i)
}