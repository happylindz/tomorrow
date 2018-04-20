export const query = (_url) => {
  const pattern = /(\w+)=(\w+)/ig;
  const parames = {};
  _url.replace(pattern, (a, b, c) => {
    parames[b] = c;
  });
  return parames;
};

