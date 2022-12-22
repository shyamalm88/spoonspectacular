import axios from "axios";

axios.defaults.params = {
  apiKey: "8f34eebc110f47fab97fee49980e7c7e", //"bb4929d3f68d498eb4b5a5d96b95bb98", //"8f34eebc110f47fab97fee49980e7c7e",
};

const API = axios.create({
  baseURL: "https://api.spoonacular.com/",
});

export { API };
