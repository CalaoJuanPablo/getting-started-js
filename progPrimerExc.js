// Programming Primer Exercise

const favoriteBooks = [];

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

console.log(favoriteBooks);