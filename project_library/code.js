const myLibrary = []

const addButton = document.getElementById('add-book');
const dialogForm = document.getElementById('dialog-form');
const closeButton = document.querySelector('.cancel-btn');
const confirmButton = document.querySelector('.confirm-btn');
const bookContainer = document.querySelector('.books');
const form = document.getElementById('form');

addBookToLibrary('Harry Potter and the Deathly Hollows', 'J.K. Rowling', 957, 'Finished');
addBookToLibrary('Atomic Habits', 'James Clear', 256, 'Finished');

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
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            delbtn.textContent = 'Delete';
            bookDiv.className = 'card';
            
            let titleP = document.createElement('p');
            let authorP = document.createElement('p');
            let pagesP = document.createElement('p');
            let statusP = document.createElement('p');

            titleP.textContent = item.title;
            authorP.textContent = item.author;
            pagesP.textContent = item.pages;
            statusP.textContent = item.status;


            bookDiv.appendChild(titleP);
            bookDiv.appendChild(authorP);
            bookDiv.appendChild(pagesP);
            bookDiv.appendChild(statusP);
            bookDiv.appendChild(delbtn);
            statusP.appendChild(checkbox);
            item.div = bookDiv;
            bookContainer.appendChild(item.div);
            
            delbtn.addEventListener("click", () => {
                myLibrary.splice(index, 1);
                bookContainer.removeChild(bookDiv);
            })

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
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').value;
    addBookToLibrary(title, author, pages, status);
    dialogForm.close();
    form.reset();
    
})

