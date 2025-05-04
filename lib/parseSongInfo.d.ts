import { Song, SongApi } from "./utils";
/**
 * Turns {@link SongApi|Genius API response} into a {@link Song} object
 */
export declare function parseSongInfo(song: SongApi, showLyrics?: boolean): Promise<Song>;
