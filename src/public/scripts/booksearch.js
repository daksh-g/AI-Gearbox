const titleElem = document.querySelector(".search input");
const button = document.querySelector(".search img");
const resultsElement = document.querySelector("#results");

button.addEventListener("click", async () => {
    const response = await (await fetch(`/api/books?bookname=${titleElem.value}`)).json();
    
    response.results.forEach((result) => {
        const bookData = {
            authors: result.authors[0], // A string with the author of the book
            genres: result.categories[0], // A string with all the genres in the book
            pagesCount: result.page_count,
            title: result.title,
            summary: result.summary
        };

        console.log(bookData);

        // TODO: Add css for this book
        const book = document.createElement("div");
        book.classList.add("book");
        
        // Make elements for each of the book data fields and add them to the book element

        resultsElement.appendChild(book);

    });

});