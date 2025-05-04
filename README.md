# genius-lyrics-api 🎶🌈

The little Genius API that could.

A [fork](https://github.com/farshed/genius-lyrics-api) full of improvements and TypeScript typings.

Recommended to use with Node v22+

## Usage examples

### Song lookup by id - `getSongById`
Returns relevant song info, including album data and lyrics.

```ts
import { getSongById } from 'genius-lyrics-api';
const ids = [113119, 378195]

for(const id of ids) {
    console.log(`Results for "${id}":\n`,
        await getSongById(id, process.env.GENIUS_CLIENT_TOKEN)
    )
}
```

```ts
Results for "113119":
 {
  id: 113119,
  artist: 'Daft Punk',
  title: 'Around the World',
  albumName: 'Homework / Discovery / Alive 1997',
  releaseDate: 'January 20, 1997',
  thumbnail: 'https://images.genius.com/991042e40ea8888121e7fb309227ad09.300x300x1.png',
  url: 'https://genius.com/Daft-punk-around-the-world-lyrics',
  views: 204636,
  lyrics: '[Chorus]\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world\n' +
    'Around the world, around the world'
}

Results for "378195":
 {
  id: 378195,
  artist: 'Sia',
  title: 'Chandelier',
  albumName: 'This Is Acting / 1000 Forms Of Fear (2 CD Deux Albums Originaux)',
  releaseDate: 'March 17, 2014',
  thumbnail: 'https://images.genius.com/0503a01c6f9a632167d3de01ca687976.300x300x1.png',
  url: 'https://genius.com/Sia-chandelier-lyrics',
  views: 2809266,
  lyrics: '[Verse 1]\n' +
    "Party girls don't get hurt\n" +
    "Can't feel anythin', when will I learn?\n" +
    'I push it down, I push it down\n' +
    "I'm the one for a good time call\n" +
    "Phone's blowin' up, ringin' my doorbell\n" +
    'I feel the love, I feel the love\n' +
    '\n' +
    '[Pre-Chorus]\n' +
    'One, two, three, one, two, three, drink\n' +
    'One, two, three, one, two, three, drink\n' +
    'One, two, three, one, two, three, drink\n' +
    "Throw 'em back 'til I lose count\n" +
    '\n' +
    '[Chorus]\n' +
    "I'm gonna swing from the chandelier\n" +
    'From the chandelier\n' +
    "I'm gonna live like tomorrow doesn't exist\n" +
    "Like it doesn't exist\n" +
    "I'm gonna fly like a bird through the night\n" +
    'Feel my tears as they dry\n' +
    "I'm gonna swing from the chandelier\n" +
    'From the chandelier\n' +
    '\n' +
    '[Post-Chorus]\n' +
    "But I'm holdin' on for dear life\n" +
    "Won't look down, won't open my eyes\n" +
    "Keep my glass full until mornin' light\n" +
    "'Cause I'm just holdin' on for tonight\n" +
    "Help me, I'm holdin' on for dear life\n" +
    "Won't look down, won't open my eyes\n" +
    "Keep my glass full until mornin' light\n" +
    "'Cause I'm just holdin' on for tonight, on for tonight\n" +
    '\n' +
    '[Verse 2]\n' +
    "Sun is up, I'm a mess\n" +
    'Gotta get out now, gotta run from this\n' +
    'Here comes the shame, here comes the shame\n' +
    '(Ah)\n' +
    '\n' +
    '[Pre-Chorus]\n' +
    'One, two, three, one, two, three, drink\n' +
    'One, two, three, one, two, three, drink\n' +
    'One, two, three, one, two, three, drink\n' +
    "Throw 'em back 'til I lose count\n" +
    '\n' +
    '[Chorus]\n' +
    "I'm gonna swing from the chandelier\n" +
    'From the chandelier\n' +
    "I'm gonna live like tomorrow doesn't exist\n" +
    "Like it doesn't exist\n" +
    "I'm gonna fly like a bird through the night\n" +
    'Feel my tears as they dry\n' +
    "I'm gonna swing from the chandelier\n" +
    'From the chandelier\n' +
    '\n' +
    '[Post-Chorus]\n' +
    "But I'm holdin' on for dear life\n" +
    "Won't look down, won't open my eyes\n" +
    "Keep my glass full until mornin' light\n" +
    "'Cause I'm just holdin' on for tonight\n" +
    "Help me, I'm holdin' on for dear life\n" +
    "Won't look down, won't open my eyes\n" +
    "Keep my glass full until mornin' light\n" +
    "'Cause I'm just holdin' on for tonight, on for tonight\n" +
    '\n' +
    '[Outro]\n' +
    'On for tonight\n' +
    "'Cause I'm just holdin' on for tonight\n" +
    "Oh, I'm just holdin' on for tonight\n" +
    'On for tonight, on for tonight\n' +
    "'Cause I'm just holdin' on for tonight\n" +
    "'Cause I'm just holdin' on for tonight\n" +
    "Oh, I'm just holdin' on for tonight\n" +
    'On for tonight, on for tonight'
  }
```

### Song lookup by title or lyrics - `searchSongs`
Returns raw Genius API response as an array of objects.

```ts
import { searchSongs } from 'genius-lyrics-api';
const queries = ["Around The World Daft", "one two three one two three drink"]

for(const query of queries) {
    console.log(`Results for "${query}":\n`,
        await searchSongs({
            apiKey: process.env.GENIUS_CLIENT_TOKEN,
            query,
            maxResults: 1
        })
    )
}
```

```ts
Results for "Around The World Daft":
 [
  {
    annotation_count: 2,
    api_path: '/songs/113119',
    artist_names: 'Daft Punk',
    full_title: 'Around the World by Daft Punk',
    header_image_thumbnail_url: 'https://images.genius.com/991042e40ea8888121e7fb309227ad09.300x300x1.png',
    header_image_url: 'https://images.genius.com/991042e40ea8888121e7fb309227ad09.1000x1000x1.png',
    id: 113119,
    lyrics_owner_id: 295194,
    lyrics_state: 'complete',
    path: '/Daft-punk-around-the-world-lyrics',
    primary_artist_names: 'Daft Punk',
    pyongs_count: 44,
    relationships_index_url: 'https://genius.com/Daft-punk-around-the-world-sample',
    release_date_components: { year: 1997, month: 1, day: 20 },
    release_date_for_display: 'January 20, 1997',
    release_date_with_abbreviated_month_for_display: 'Jan. 20, 1997',
    song_art_image_thumbnail_url: 'https://images.genius.com/991042e40ea8888121e7fb309227ad09.300x300x1.png',
    song_art_image_url: 'https://images.genius.com/991042e40ea8888121e7fb309227ad09.1000x1000x1.png',
    stats: { unreviewed_annotations: 0, hot: false, pageviews: 204635 },
    title: 'Around the World',
    title_with_featured: 'Around the World',
    url: 'https://genius.com/Daft-punk-around-the-world-lyrics',
    featured_artists: [],
    primary_artist: {
      api_path: '/artists/13585',
      header_image_url: 'https://images.genius.com/3b93c1d666b37dc69147850b2c4cd300.1000x165x1.png',
      id: 13585,
      image_url: 'https://images.genius.com/095ab2347aab4166859e2b6b30d7a97e.768x768x1.jpg',
      is_meme_verified: false,
      is_verified: false,
      name: 'Daft Punk',
      url: 'https://genius.com/artists/Daft-punk'
    },
    primary_artists: [ [Object] ]
  }
]

Results for "one two three one two three drink":
 [
  {
    annotation_count: 32,
    api_path: '/songs/378195',
    artist_names: 'Sia',
    full_title: 'Chandelier by Sia',
    header_image_thumbnail_url: 'https://images.genius.com/0503a01c6f9a632167d3de01ca687976.300x300x1.png',
    header_image_url: 'https://images.genius.com/0503a01c6f9a632167d3de01ca687976.1000x1000x1.png',
    id: 378195,
    lyrics_owner_id: 47098,
    lyrics_state: 'complete',
    path: '/Sia-chandelier-lyrics',
    primary_artist_names: 'Sia',
    pyongs_count: 449,
    relationships_index_url: 'https://genius.com/Sia-chandelier-sample',
    release_date_components: { year: 2014, month: 3, day: 17 },
    release_date_for_display: 'March 17, 2014',
    release_date_with_abbreviated_month_for_display: 'Mar. 17, 2014',
    song_art_image_thumbnail_url: 'https://images.genius.com/0503a01c6f9a632167d3de01ca687976.300x300x1.png',
    song_art_image_url: 'https://images.genius.com/0503a01c6f9a632167d3de01ca687976.1000x1000x1.png',
    stats: {
      unreviewed_annotations: 1,
      concurrents: 2,
      hot: false,
      pageviews: 2809260
    },
    title: 'Chandelier',
    title_with_featured: 'Chandelier',
    url: 'https://genius.com/Sia-chandelier-lyrics',
    featured_artists: [],
    primary_artist: {
      api_path: '/artists/16775',
      header_image_url: 'https://images.genius.com/570d01b6da3e0d9f5abc5ddaebdd6825.1000x989x1.jpg',
      id: 16775,
      image_url: 'https://images.genius.com/00bbce98e16a5740dc234ef6e3e9bf9e.556x556x1.jpg',
      is_meme_verified: false,
      is_verified: true,
      name: 'Sia',
      url: 'https://genius.com/artists/Sia',
      iq: 9324
    },
    primary_artists: [ [Object] ]
  }
]
```

Genius API response can be then converted into a less-detailed, more friendly object using `parseSongInfo`.

If you're only interested in the lyrics, use `getLyrics` instead.

## Setup

1. Get a Genius API key [here](https://docs.genius.com),
2. Clone the repository:

```
git clone https://github.com/hi021/genius-lyrics-api.git
```
3. Install the dependencies:

```
npm ci
```
```
pnpm install
```
```
yarn install
```
4. Transpile into executable JavaScript:

```
tsc
```
5. That's it! You can now use the project like a package.
