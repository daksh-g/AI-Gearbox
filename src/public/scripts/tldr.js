let button = document.querySelector(".search img");
let urlInput = document.querySelector(".search input");

button.addEventListener("click", async () => {
    const response = await (await fetch(`/api/summarize?article=${urlInput.value}`)).json();
    // This can have { error: "Error here"} which u can access with response.error OR
    // it can have { summary: "Summary Here"} which can give you a summary
    // use innerText on summary element to put this output in it.
    console.log(response);
});