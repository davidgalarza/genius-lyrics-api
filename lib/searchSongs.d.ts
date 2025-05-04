import { SongApi, SongSearchOptions } from "./utils";
/**
 * @returns an array of results from a genius search query to be parsed by {@link parseSongInfo}
 */
export declare function searchSongs(options: SongSearchOptions): Promise<SongApi[]>;
