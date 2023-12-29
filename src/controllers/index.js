import * as config from "../setup.js";

const bookAPI = async ({ params: { bookname } }) => {

    if(bookname) {
        return await (await fetch(`https://getbooksinfo.p.rapidapi.com/?s=${bookname}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': config.books.key,
                'X-RapidAPI-Host': config.books.host
            }
        })).json();
    } else {
        return {"ERROR": "No bookname provided"};
    }
}

import { Elysia } from "elysia";

export default new Elysia().group("/api", (app) => {
        app.get("/books/:bookname", bookAPI);
        return app;
    })