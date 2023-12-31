import { Elysia } from "elysia";

import { api } from "../setup.js";
import urlCheck from "../lib/urlcheck.js";

const bookAPI = async ({ params: { bookname } }) => {
    if(bookname) {
        return await (await fetch(`https://book-finder1.p.rapidapi.com/api/search?title=${bookname}`, {
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


const summarizeURL = async ({ query: { article } }) => {
    if(urlCheck(article)) {
        return await (await fetch(`https://article-extractor-and-summarizer.p.rapidapi.com/summarize?lang=en&url=${article}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': api.key,
                'X-RapidAPI-Host': api.hosts.summarizer
            }
        })).json();
    } else {
        return {"ERROR": "No article url provided"};
    }
}

export default new Elysia().group("/api", (app) => {
        app.get("/books/:bookname", bookAPI);
        app.get("/summarize/url", summarizeURL);
        return app;
    });