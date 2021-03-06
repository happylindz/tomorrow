const marked = require('marked');
const cheerio = require('cheerio');

function htmlDecode(str) {
  str = unescape(str.replace(/\\u/g, '%u'));
  str = str.replace(/&#(x)?(\w+);/g, function($, $1, $2) {
    return String.fromCharCode(parseInt($2, $1 ? 16 : 10));
  });

  return str;
}
marked.setOptions({
  highlight(code) {
    return require('highlight.js').highlightAuto(code).value;
  },
});

exports.parse2 = function (content) {
  return marked(content);
};


exports.parse = function (content) {
  const data = {};
  const html = marked(content);
  const $ = cheerio.load(html);
  const index = [];
  $('h1,h2,h3,h4,h5,56').each((idx, item) => {
    const anchor = `title-${idx}`;
    const $item = $(item);
    $item.attr('id', anchor);
    index.push({
      tag: item.name,
      content: $item.text(),
      anchor,
    });
  });
  data.html = htmlDecode($('body').html());
  const desc = $.root().text();
  data.index = index;
  data.desc = `${desc.replace(/\r|\n|\s/g, ' ').slice(0, 120)}...`;
  return data;
};
