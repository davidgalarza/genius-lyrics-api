"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getLyrics;
const searchSongs_1 = require("./searchSongs");
const utils_1 = require("./utils");
async function getLyrics(optionsOrUrl) {
    // provided genius URL
    if (optionsOrUrl && typeof optionsOrUrl === "string")
        return await (0, utils_1.extractLyrics)(optionsOrUrl);
    if (typeof optionsOrUrl !== "object")
        throw new TypeError("Invalid argument type");
    // provided song artist and title - look up the song first
    (0, utils_1.validateOptions)(optionsOrUrl);
    const result = await (0, searchSongs_1.searchSongs)({ ...optionsOrUrl, maxResults: 1 });
    return result.length ? (0, utils_1.extractLyrics)(result[0].url) : null;
}
