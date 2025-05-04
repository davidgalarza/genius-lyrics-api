"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSongInfo = parseSongInfo;
const utils_1 = require("./utils");
/**
 * Turns {@link SongApi|Genius API response} into a {@link Song} object
 */
async function parseSongInfo(song, showLyrics) {
    const { title_with_featured, primary_artist, album, song_art_image_thumbnail_url, release_date_for_display, id, url, stats } = song;
    const parsed = {
        id,
        artist: primary_artist?.name || song.artist_names,
        title: title_with_featured || song.title,
        albumName: album?.name ?? "",
        releaseDate: release_date_for_display || song.release_date,
        thumbnail: song_art_image_thumbnail_url || song.song_art_image_url,
        url,
        views: stats?.pageviews,
        lyrics: showLyrics ? (await (0, utils_1.extractLyrics)(url)) ?? undefined : undefined
    };
    return parsed;
}
