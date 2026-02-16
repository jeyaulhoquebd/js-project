/**
 * # 16.5_1 Array Traversal using for and while Loop#
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object look korar jonno
 * 
 */

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for(const friend of friends){
    console.log(friend); // Run Please
   
    }

for(let i = 0; i < 4; i++){
    console.log(i); // Run Please
    
    console.log(friends[i]); // Run Please

}

for(let i = 0; i < friends.length; i++){
    console.log(i);
    console.log(friends[i]); // Run Please

}

const numbers = [5, 23, 456, 421, 25, 65, 625, 45, 64, 7]

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]); // Run Please
}

let i = 0;

while(i < friends.length){
    console.log(friends[i]);
    i++; // Run Please 
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n]) // Run Please
    n++; 
}