const fetch = require('node-fetch');
// import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export const getSailors = async() => {
  const res = await fetch(`${URL}/sailors`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return json.map(sailor => ({
    id: sailor.id,
    sailorName: sailor.sailorName,
    realName: sailor.realName,
    description: sailor.description,
    attack: sailor.attack,
    zodiacSign: sailor.ZodiacSign,
    imageUrl: sailor.imageUrl
  }))
}

export const getSailorById = async(id) => {
  const res = await fetch(`${URL}/sailors/${id}`);
  const json = await res.json();

  if(!res.ok) throw 'Unable to fetch';

  return {
    id: json.id,
    sailorName: json.sailorName,
    realName: json.realName,
    description: json.description,
    attack: json.attack,
    zodiacSign: json.zodiacSign,
    imageUrl: json.imageUrl
  };
}

// export const getResponse = (url, method, body) => {
//   if(method !== 'GET') {
//     return fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
//       method,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body
//     })
//       .then(res => res.json())
//   } else if (method === 'GET') {
//     return fetch(`https://cors-anywhere.herokuapp.com/${url}`)
//       .then(res => res.json())
//   }
// };