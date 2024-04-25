// Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicain: string[] = ["Harry Potter","Hermione Granger","Ron weasley","Albus Dumbledore"];

function newArray(arr: string[]){
       return [...arr];
}



function make_great(magicainArray: string[]){
    
    for(let i=0; i<magicainArray.length; i++){
        magicainArray[i] = "The Great " + magicainArray[i];
    }
}


function show_magicians(magicians: string[]){
        magicians.forEach(element =>{
            console.log(element);
            
        })
}

// calling fucntions
const copyArray = newArray(magicain);

make_great(copyArray);

console.log("\n\nThis is my orignal array:");
show_magicians(magicain);

console.log("\n\nThis is my copy array:");
show_magicians(copyArray);