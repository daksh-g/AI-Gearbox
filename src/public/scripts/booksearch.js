const titleElem = document.querySelector(".search input");
const button = document.querySelector(".search img");

button.addEventListener("click", async () => {
    const response = await (await fetch(`/api/books?bookname=${titleElem.value}`)).json();
    console.log(response);
});