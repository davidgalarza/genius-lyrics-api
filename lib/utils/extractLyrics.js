const axios = require('axios');
const cheerio = require('cheerio-without-node-native');

/**
 * @param {string} url - Genius URL
 */
module.exports = async function (url) {
	try {
		const { data } = await axios.get(url);

   		const $ = cheerio.load(data);

    		let lyrics = "";

	    $("div[data-lyrics-container]").each((i, elem) => {
	      const snippet = $(elem)
		.html()
		.replace(/<br\s*\/?>/g, "\n")
		.replace(/<[^>]+>/g, "");
	
	      lyrics += snippet.trim() + "\n\n";
	    });
	
	    if (!lyrics) {
	      console.log("No letters found.");
	      return null;
	    }
	
	    return lyrics.trim();
	} catch (e) {
		throw e;
	}
};
