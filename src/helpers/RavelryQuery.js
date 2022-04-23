const axios = require("axios").default;

export default async function RavelryQuery(message, category) {
  const url =
    "http://127.0.0.1:3000/api/" + category + ".json?query=" + message;
  const response = await axios.get(url);
  return response.data;
}
