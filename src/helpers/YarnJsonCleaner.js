/* eslint-disable */

function weightMaker() {
  return true;
}

export default function YarnJsonCleaner(json) {
  var newJson = json;
  for (var i = 0; i < newJson.length; i++) {
    if (newJson[i]["first_photo"]) {
      if (newJson[i]["first_photo"]["square_url"]) {
        newJson[i]["first_photo"] = newJson[i]["first_photo"]["square_url"];
      }
    }

    if (newJson[i]["yarn_weight"]) {
      if (newJson[i]["yarn_weight"]["name"]) {
        newJson[i]["yarn_weight"] = newJson[i]["yarn_weight"]["name"];
      }
    }
  }

  //return JSON.stringify(newJson);
  return newJson;
}
