// 🚀 Day 14 Challenge: Start Coding! 🚀

// Question 40: Album: Create objects for music albums.

// Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Making three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 10);
let album3 = make_album("Artist3", "Album3", 15);

// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);














// Question 41: Magicians: Display magician names from an array.

// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.


function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ["Mohsin", "Asim", "Jawad", "Farhan"];

// Calling the function and passing the array
show_magicians(magician_names);











// Question 42: Great Magicians: Add "the Great" to magician names.

// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great : ${magician}`);
}

// Function to print the magician's names
function show_magician(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians_names: string[] = ["Mohsin", "Asim", "Jawad", "Faizan"];

// Call make_great() to modify the array
magicians_names = make_great(magicians_names);

// Call show_magicians() to see the modified list
show_magicians(magicians_names);



