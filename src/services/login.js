import {EndPoint} from '../config/config.js'
const ENDPOINT = EndPoint();

export default function login({ email, password }) {
    return fetch(`${ENDPOINT}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ 
        "email":email,
        "password":password 
    }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Response is NOT ok");
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }
  