const titleElem = document.querySelector(".search input");
const button = document.querySelector(".search img");
const resultsElement = document.querySelector("#results");

button.addEventListener("click", async () => {
    const response = await (await fetch(`/api/books?bookname=${titleElem.value}`)).json();
    
    response.results.forEach((result) => {
        const bookData = {
            authors: result.authors[0], // A string with the author of the book
            genres: result.categories[0], // A string with all the genres in the book
            pageCount: result.page_count,
            title: result.title,
            summary: result.summary,
            image: result.published_works[0].cover_art_url
        };

        console.log(bookData);

        // TODO: Add css for this book
        const book = document.createElement("div");
        book.classList.add("book");
        book.style = "margin: 5%; padding: 10%; background-color: #01017D; border-radius: 10%; font-family: 'Lexend'; color: white; display: flex;";
        
        book.innerHTML = `
            <div style="width: 40%; margin-right: 5%; overflow: auto;">
                <h3>${bookData.title}</h3>
                <h5>Genres: ${bookData.genres}</h5>
                <h5>Author: ${bookData.authors} • ${bookData.pageCount} pages</h5>
                <br>
                <p>${bookData.summary}</p>
            </div>
            <img src="${bookData.image}" width="40%">
        `;

        // Make elements for each of the book data fields and add them to the book element
        const title = document.createElement("h4");
        title.innerText = bookData.title;

        const author = document.createAttribute("h5");
        author.innerText = bookData.authors;


        resultsElement.appendChild(book);

    });

});