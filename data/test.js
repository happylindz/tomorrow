const cheerio = require('cheerio');

const $ = cheerio.load('<ul id="fruits"><li>1111</li><li>22222</li></ul>');
console.log($('ul').text());
