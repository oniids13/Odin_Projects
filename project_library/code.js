const myLibrary = []

const addButton = document.getElementById('add-book');
const dialogForm = document.getElementById('dialog-form');
const closeButton = document.querySelector('.cancel-btn');
const confirmButton = document.querySelector('.confirm-btn');
const bookContainer = document.querySelector('.books');
const form = document.getElementById('form');
const footerYear = document.querySelector('.foot');

addBookToLibrary('Harry Potter and the Deathly Hollows', 'J.K. Rowling', 957, 'Finished');
addBookToLibrary('Atomic Habits', 'James Clear', 256, 'On-going');
addBookToLibrary('Rich Dad Poor Dad', 'Robert Kiyosaki', 250, 'Finished');
addBookToLibrary('Percy Jackson and the Lightning Thief', 'Rick Riordan', 377, 'On-going');
addBookToLibrary('Inferno', 'Dan Brown', 357, 'Finished');


function Book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages =  Number(pages);
    this.status = status;
    this.div = null;
}

function addBookToLibrary(title, author, pages, status) {
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayBook();
   
} 



function displayBook() {
    myLibrary.forEach(function(item, index) {
        if (item.div === null) {
            const bookDiv = document.createElement('div');
            const delbtn = document.createElement('button');
            const toggleBtn = document.createElement('button');
            delbtn.textContent = 'Delete';
            bookDiv.className = 'card';
            toggleBtn.textContent = "Change Status";
            
            let titleP = document.createElement('p');
            let authorP = document.createElement('p');
            let pagesP = document.createElement('p');
            let statusP = document.createElement('p');
            let bookP = document.createElement('p');

            bookP.textContent = `Book number: ${index + 1}`;
            titleP.textContent = `Title: ${item.title}`;
            authorP.textContent = `Author: ${item.author}`;
            pagesP.textContent = `No. of pages: ${item.pages}`;
            statusP.textContent = `Status: ${item.status}`;

            bookDiv.appendChild(bookP);
            bookDiv.appendChild(titleP);
            bookDiv.appendChild(authorP);
            bookDiv.appendChild(pagesP);
            bookDiv.appendChild(statusP);
            bookDiv.appendChild(toggleBtn);
            bookDiv.appendChild(delbtn);
            
            item.div = bookDiv;
            bookContainer.appendChild(item.div);
            
            delbtn.addEventListener("click", () => {
                myLibrary.splice(index, 1);
                bookContainer.removeChild(bookDiv);
            })

            toggleBtn.addEventListener('click', () => {
                if (statusP.textContent === "Status: Finished") {
                    statusP.textContent = "Status: On-going";
                    item.status = "On-going";
                    bookDiv.style.borderTop = "10px solid green";
                } else if (statusP.textContent === "Status: On-going") {
                    item.status = "Finished";
                    statusP.textContent = "Status: Finished";
                    bookDiv.style.borderTop = "10px solid red";
                }
            })

            if (item.status === "Finished") {
                bookDiv.style.borderTop = "10px solid red";
            } else if (item.status === "On-going") {
                bookDiv.style.borderTop = "10px solid green";
            }
           
    }
    })
}



addButton.addEventListener("click", () => {
    dialogForm.showModal();
})

closeButton.addEventListener('click', () => {
    dialogForm.close();
})

confirmButton.addEventListener("click", (e) => {
    if (document.getElementById('title').value && document.getElementById('author').value && document.getElementById('pages').value){
        e.preventDefault();
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let status = document.getElementById('status').value;
        addBookToLibrary(title, author, pages, status);
        dialogForm.close();
        form.reset();
}
    
})

footerYear.textContent = new Date().getFullYear();