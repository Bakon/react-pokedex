const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 1337;
const cache = {};
const pokeApiUrl = 'https://pokeapi.co';
const localApiUrl = 'http://localhost:1337';

function fixApiUrls(obj_or_arr) {
   if (Array.isArray(obj_or_arr)) return obj_or_arr.map(fixApiUrls);
   return Object.entries(obj_or_arr).reduce((obj, [key, value]) => {
      if (Array.isArray(value)) value = value.map(fixApiUrls);
      if (typeof value === 'string' && value.startsWith(pokeApiUrl)) {
         value = value.replace(pokeApiUrl, localApiUrl);
      }
      return {...obj, [key]: value};
   }, {});
}

app.use(cors())

app.get('/api/*', (req, res) => {
  const fullApiUrl = `${pokeApiUrl}${req.url}`;

  if (cache[fullApiUrl]) {
    return res.send(cache[fullApiUrl]);
  }

  fetch(fullApiUrl)
    .then(res => res.json())
    .then(data => {

      console.log('cached data', {fullApiUrl});
      cache[fullApiUrl] = fixApiUrls(data);

      res.send(cache[fullApiUrl]); 
    });
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));