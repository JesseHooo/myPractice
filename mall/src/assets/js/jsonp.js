import jsonp from 'jsonp';

const parseParam = param => {
  let params = [];
  
  for (const key in param) {
    params.push([key, encodeURIComponent(param[key])]);
    // [[k1=v1],[k2=v2],...]
  };
  return params.map(value => value.join('=')).join('&');
};

export const mjsonp = (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data);
  console.log('work');
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
