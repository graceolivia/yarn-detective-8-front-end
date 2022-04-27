/* eslint-disable */
import { startCase } from "lodash";

export default function JsonCapitalizationHelper(json) {
  var newJson = json;
  var key, upKey;
  for (key in newJson) {
    if (newJson.hasOwnProperty(key)) {
      upKey = startCase(key).replace(/ /g, " ");
      if (upKey !== key) {
        newJson[upKey] = newJson[key];
        delete newJson[key];
      }
      if (typeof newJson[upKey] === "object") {
        JsonCapitalizationHelper(newJson[upKey]);
      }
    }
  }
  return newJson;
}
