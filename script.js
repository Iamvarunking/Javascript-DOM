// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// // console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// // console.log(books.textContent);

// books = document.querySelectorAll('#book-list li .name');

// console.log(books);


// Array.from(books).forEach(function(book) {
// book.textContent += '(book title)' ;
// });

// const bookList = document.querySelector('#book-list');

// bookList.innerHTML = '<h2>Helllo</h2>'

// bookList.innerHTML += '<p>This is how to do it</p>'

// const banner = document.querySelector('#page-banner');

// console.log("#page-banner node type is:", banner.nodeType);
// console.log("#page-banner node type is:", banner.nodeName);
// console.log("#page-banner node type is:", banner.hasChildNodes());


// const bookList = document.querySelector('#book-list');

// console.log('the parent node is: ', bookList.parentNode.parentNode);
// console.log('the parent element is: ', bookList.parentElement.parentElement);

// console.log(bookList.children);
// console.log(bookList.childNodes);

// const bookList = document.querySelector('#book-list');
// console.log("book-list next sibling is: ", bookList.nextSibling);
// console.log("book-list next element sibling is: ", bookList.nextElementSibling);


// console.log("book-list previous sibling is: ", bookList.previousSibling);
// console.log("book-list previous element sibling is: ", bookList.previousElementSibling);


// bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Playing with previous element sibling';

// const deleteBTN = document.querySelectorAll('#book-list li .delete');

// Array.from(deleteBTN).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         var li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });


document.addEventListener('DOMContentLoaded', function(){


    const list = document.querySelector('#book-list ul');

    list.addEventListener('click', function(e){
        if(e.target.className == 'delete') {
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });
    
    const addForm = document.forms['add-book'];
    
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        
    
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBTN = document.createElement('span');
    
        deleteBTN.textContent = 'delete';
        bookName.textContent = value;
    
        bookName.classList.add('name');
        deleteBTN.classList.add("delete");
    
        li.appendChild(bookName);
        li.appendChild(deleteBTN);
        list.appendChild(li);
    });
    
    const hideBox = document.querySelector('#hide');
    
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display = "none";
        } else {
            list.style.display = "block";
        }
    });
    
    const searchBox = document.forms['search-books'].querySelector('input');
    
    searchBox.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function(book){
            const title = book.firstElementChild.textContent;
            if(title.toLocaleLowerCase().indexOf(term) != -1) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
    
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    
    tabs.addEventListener('click', function(e){
        if(e.target.tagName == "LI"){
            const targetPanel =  document.querySelector(e.target.dataset.target);
            panels.forEach(function(panel){
                if(panel == targetPanel){
                    panel.classList.add("active");
                } else {
                    panel.classList.remove("active");
                }
            });
        }
    });





})

