const sentence = 'I am learning web Dev '

// for(const letter of sentence){
    // console.log(letter);
// }

let reverse = ''

for(const letter of sentence){
    
    reverse = letter + reverse
}

console.log(reverse)