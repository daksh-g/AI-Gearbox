const text = document.querySelector(".input input");
const button = document.querySelector(".search img"); // Change this class to the "spellcheck" button' 

button.addEventListener("click", async () => {
    const response = await (await fetch(`/api/spellcheck?text=${text.value}`)).json();
    console.log(response);
});