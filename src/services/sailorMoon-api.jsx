const fetch = require('node-fetch');
// import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export const getSailors = async() => {
  const res = await fetch(`${URL}sailors`);
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

