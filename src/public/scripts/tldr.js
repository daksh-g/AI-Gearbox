let button = document.querySelector(".search img"),
    urlInput = document.querySelector(".search input"),
    output = document.querySelector("div.summary");
button.addEventListener("click", async () => {
    const response = await (await fetch(`/api/summarize?article=${urlInput.value}`)).json();
    console.log(response);

    if(!("summary" in response)) {
        output.style.color = "red";
        output.textContent = response["error"] || "Error";
        return;
    }

    output.style.color = "black";
    output.textContent = response["summary"];
});