//16.5_2 Reversing an array with/without reverse method

const numbers = [1,2,3,4,5,6,7];

// console.log(numbers);

// const reversed = numbers.reverse(); // .reverse() মানে হলো পিছন থেকে শুরু হবে 

// console.log(reversed)


const rev_numbers = [];

for(let i = 0; i< numbers.length; i++){
    const num = numbers[i];
    rev_numbers.unshift(num);
}

// console.log(rev_numbers);


// reverse side 

const rev_rev_numbers = [];

for (let i = numbers.length -1 ; i >=0; i--){
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);

}

console.log(rev_rev_numbers);


const friend = ['Elon', 'Bill', 'Mark', 'Waren'];

const rev_frinds = []

for (const num of friend){
    console.log(num);
    rev_frinds.unshift(num)
}

console.log(rev_frinds)