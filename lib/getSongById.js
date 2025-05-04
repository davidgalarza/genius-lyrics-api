"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSongById = getSongById;
const parseSongInfo_1 = require("./parseSongInfo");
const utils_1 = require("./utils");
async function getSongById(id, apiKey) {
    if (!id)
        throw new TypeError("No song id was provided");
    if (!apiKey)
        throw new TypeError("No API key was provided");
    const result = await fetch(`${utils_1.API_SONG}${encodeURIComponent(id)}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + apiKey
        }
    });
    const resJson = await result.json();
    return resJson?.response?.song ? (0, parseSongInfo_1.parseSongInfo)(resJson.response.song, true) : null;
}
