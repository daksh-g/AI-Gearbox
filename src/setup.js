const { env } = process;

export const books = {
    key: env["X-RapidAPI-Key-Books"],
    host: env["X-RapidAPI-Host-Books"]
}

export const PORT = env.PORT || 3000;