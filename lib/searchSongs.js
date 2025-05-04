"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSongs = searchSongs;
const utils_1 = require("./utils");
/**
 * @returns an array of results from a genius search query to be parsed by {@link parseSongInfo}
 */
async function searchSongs(options) {
    try {
        (0, utils_1.validateOptions)(options);
        const { apiKey, query, optimizeQuery = false, maxResults = Infinity } = options;
        const queryOptimized = optimizeQuery ? (0, utils_1.queryOptimize)(query) : query;
        const reqUrl = `${utils_1.API_SEARCH}${encodeURIComponent(queryOptimized)}`;
        const result = await fetch(reqUrl, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + apiKey
            }
        });
        if (!result.ok)
            throw new Error(`Genius responded with ${result.status}:\n${result.statusText}`);
        const resJson = await result.json();
        if (!resJson?.response?.hits?.length)
            return [];
        const limit = Math.min(resJson.response.hits.length, maxResults);
        const resParsed = [];
        for (let i = 0; i < limit; i++) {
            if (resJson.response.hits[i].type !== "song")
                continue;
            resParsed.push(resJson.response.hits[i].result);
        }
        return resParsed;
    }
    catch (e) {
        console.error(`Failed to fetch songs for "${options.query}":`, e);
        return [];
    }
}
