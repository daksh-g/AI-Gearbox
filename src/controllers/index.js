import { Elysia } from "elysia";

import { api } from "../setup.js";
import urlCheck from "../lib/urlcheck.js";

const bookAPI = async ({ query: { bookname } }) => {
    if(bookname) {
        return await (await fetch(`https://book-finder1.p.rapidapi.com/api/search?title=${bookname}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': api.key,
                'X-RapidAPI-Host': api.hosts.book
            }
        })).json();
    } else {
        return {"ERROR": "No bookname is provided"};
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

const spellcheck = async ({ query: { text } }) => {
    if(text) {
        return await (await fetch(`https://grammar-and-spellcheck.p.rapidapi.com/grammarandspellcheck`, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
        		'X-RapidAPI-Key': api.key,
                'X-RapidAPI-Host': api.hosts.spellcheck
            },
            body: new URLSearchParams({
                query: text
            })   
        })).json();
    } else {
        return {"ERROR": "No bookname provided"};
    }
}

export default new Elysia().group("/api", (app) => {
        app.get("/books", bookAPI);
        app.get("/summarize", summarizeURL);
        app.get("/spellcheck", spellcheck);
        return app;
    });
