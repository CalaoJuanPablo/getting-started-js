// Programming Primer Exercise

const favoriteBooks = [];

// Define addFavoriteBook(...)
function addFavoriteBook(bookName) {
    if(!bookName.toLowerCase().includes("great")) {
        favoriteBooks.push(bookName);
    }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// Define printFavoriteBook(...)

function printFavoriteBook() {
    if (favoriteBooks.length > 0) {
        console.log(`Favorite Books: ${favoriteBooks.length}\n`)
        favoriteBooks.forEach(bookName => console.log(`- ${bookName}`))
    } else {
        console.log("There are no Favorite Books")
    }
}

printFavoriteBook()