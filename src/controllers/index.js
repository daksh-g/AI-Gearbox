import { api } from "../setup.js";
import urlCheck from "../lib/urlcheck.js";

const bookAPI = async ({ params: { bookname } }) => {

    if(bookname) {
        return await (await fetch(`https://getbooksinfo.p.rapidapi.com/?s=${bookname}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': api.key,
                'X-RapidAPI-Host': api.hosts.book
            }
        })).json();
    } else {
        return {"ERROR": "No bookname provided"};
    }
}

const tldrArticle = async ({ query: { url } }) => {
    console.log(`"` + url + `"`);
    if(urlCheck(url)) {
        return await (await fetch(`https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key':   api.key,
                'X-RapidAPI-Host': api.hosts.tldr
            },
            body: {
                url: url,
                min_length: 100,
                max_length: 300,
                is_detailed: false
            }
        })).json();
    } else {
        return {"ERROR": "Invalid URL provided"};
    }
}

const tldrText = async ({ query: { text } }) => {
    console.log(text);
    if(text !== "") {
        return await (await fetch(`https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': api.key,
                'X-RapidAPI-Host': api.hosts.tldr
            },
            body: {
                text,
                min_length: 100,
                max_length: 300,
                is_detailed: false
            }
        })).json();
    } else {
        return {"ERROR": "Invalid Text Provided"};
    }
}

import { Elysia } from "elysia";

export default new Elysia().group("/api", (app) => {
        app.get("/books/:bookname", bookAPI);
        app.get("/tldr/url", tldrArticle);
        app.get("/tldr/text", tldrText);
        return app;
    });