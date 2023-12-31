const { env } = process;

export const api = {
    key: env["X-RapidAPI-Key"],
    hosts: {
        book: env["X-RapidAPI-Host-Books"],
        summarizer: env["X-RapidAPI-Host-Summarizer"],
        spellcheck: env["X-RapidAPI-Host-SpellCheck"]
    },
}

export const PORT = env.PORT || 3000;