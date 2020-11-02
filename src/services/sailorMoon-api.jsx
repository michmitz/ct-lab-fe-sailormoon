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

export const createSailor = (sailorName, realName, description, attack, zodiacSign, imageUrl) => {
  return fetch(`${URL}/sailors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sailorName, realName, description, attack, zodiacSign, imageUrl })
  }).then(res => res.json())
};

