"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHtmlEntities = exports.queryOptimize = exports.validateOptions = exports.API_SONG = exports.API_SEARCH = void 0;
exports.extractLyrics = extractLyrics;
const cheerio_1 = require("cheerio");
exports.API_SEARCH = "https://api.genius.com/search?q=";
exports.API_SONG = "https://api.genius.com/songs/";
const SNIPPET_SEPARATOR = "\n\n";
const validateOptions = (options) => {
    if (!options.apiKey)
        throw new TypeError("No API key was provided");
    if (!options.query)
        throw new TypeError("No search query was provided");
};
exports.validateOptions = validateOptions;
/**
 * Removes feat./ft. and content between () and [], flattens whitespace
 *
 * (I don't recommend using this)
 */
const queryOptimize = (query) => {
    return query
        .toLowerCase()
        .replace(/ *\([^)]*\) */g, " ")
        .replace(/ *\[[^\]]*\]/, "")
        .replace(/feat\.|ft\./g, "")
        .replace(/\s+/g, " ")
        .trim();
};
exports.queryOptimize = queryOptimize;
const decodeHtmlEntities = ($, value = "") => $("<textarea/>").html(value).text();
exports.decodeHtmlEntities = decodeHtmlEntities;
/**
 * Extracts lyrics from the song's genius page (e.g. https://genius.com/Sia-chandelier-lyrics)
 */
async function extractLyrics(url) {
    try {
        const result = await fetch(url);
        const resultTxt = await result.text();
        const $ = (0, cheerio_1.load)(resultTxt);
        let lyrics = "";
        const lyricsContainers = $("div[data-lyrics-container]");
        lyricsContainers.children("[data-exclude-from-selection]").remove();
        lyricsContainers.each((_, elem) => {
            const snippet = (0, exports.decodeHtmlEntities)($, $(elem).html()?.replace(/<br\s*\/?>/g, "\n")?.replace(/<[^>]+>/g, ""));
            lyrics += snippet ? snippet.trim() + SNIPPET_SEPARATOR : '';
        });
        return lyrics ? lyrics.trim() : null;
    }
    catch (e) {
        console.error(`Failed to scrape lyrics for "${url}":`, e);
        return null;
    }
}
