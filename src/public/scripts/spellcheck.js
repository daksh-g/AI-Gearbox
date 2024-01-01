const text = document.querySelector(".input textarea");
const button = document.querySelector(".input img"); // Change this class to the "spellcheck" button' 

button.addEventListener("click", async () => {
    const response = await (await fetch(`/api/spellcheck?text=${text.value}`)).json();
    const mistakes = response["identified_mistakes"];
    let inputText = text.value,
        outputText = inputText;
    console.log(inputText);
    console.log(response);
    for(let mistake of mistakes.reverse()) {
        let start = mistake["offset"],
            end = inputText.indexOf(" ", start);
        if(end == -1)
            end = inputText.length;
        // inputText = inputText.substring(0, start) + "<span style='color: red;'>" + inputText.substring(start, end) + "</span>" + inputText.substring(end);
        outputText = outputText.substring(0, start) + "<span style='color: green;'>" + mistake["replacements"][0] + "</span>" + outputText.substring(end);
    }
    text.value = inputText;
    document.querySelector(".output div").innerHTML = outputText;
});