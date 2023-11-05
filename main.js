
// JavaScript function to add a new book
function addBook() {
    // Get user input for book details (e.g., title, author, etc.)
    let title = prompt('Enter book title:');
    let author = prompt('Enter book author:');
    
    // Check if the book already exists in the book list
    if (isBookDuplicate(title)) {
        alert('This book already exists in the list.');
    } else {
        // Add the new book to the book list
        let bookList = document.querySelector('.book-list');
        let newBookItem = document.createElement('div');
        newBookItem.textContent = `Title: ${title}, Author: ${author}`;
        bookList.appendChild(newBookItem);
    }
}

// JavaScript function to check for duplicate books
function isBookDuplicate(title) {
    let bookItems = document.querySelectorAll('.book-list div');
    for (let item of bookItems) {
        if (item.textContent.includes(title)) {
            return true;
        }
    }
    return false;
}





