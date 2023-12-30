const { env } = process;

export const api = {
    key: env["X-RapidAPI-Key"],
    hosts: {
        book: env["X-RapidAPI-Host-Books"],
        tldr: env["X-RapidAPI-Host-Tldr"],
        summarizer: env["X-RapidAPI-Host-Summarizer"]
    },
}

export const PORT = env.PORT || 3000;