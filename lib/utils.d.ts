import { CheerioAPI } from "cheerio";
export declare const API_SEARCH = "https://api.genius.com/search?q=";
export declare const API_SONG = "https://api.genius.com/songs/";
export declare const validateOptions: (options: Options) => void;
/**
 * Removes feat./ft. and content between () and [], flattens whitespace
 *
 * (I don't recommend using this)
 */
export declare const queryOptimize: (query: string) => string;
export declare const decodeHtmlEntities: ($: CheerioAPI, value?: string) => string;
/**
 * Extracts lyrics from the song's genius page (e.g. https://genius.com/Sia-chandelier-lyrics)
 */
export declare function extractLyrics(url: string): Promise<string | null>;
export interface Options {
    readonly apiKey: string;
    query: string;
    optimizeQuery?: boolean;
}
export type SongOptions = Options & {
    showLyrics?: boolean;
};
export type SongSearchOptions = Options & {
    maxResults?: number;
};
export interface Song {
    id: number;
    artist: string;
    title: string;
    albumName: string;
    url: string;
    releaseDate?: string;
    thumbnail?: string;
    views?: number;
    lyrics?: string;
}
export type SongApi = Record<string, any>;
