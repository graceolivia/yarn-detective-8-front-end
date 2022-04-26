import JsonCapitalizationHelper from "@/helpers/JsonCapitalizationHelper.js";

function TestYarnJson() {
  let text =
    '{ "yarns" : [' +
    '{ "name":"Red Heart", "id":"1", "min_gauge":"28", "rating_average":"4.3" },' +
    '{ "name":"Silly Bamboo", "id":"2", "min_gauge":"28", "rating_average":"4.3" },' +
    '{ "name":"Gorgeous Goats", "id":"3", "min_gauge":"28", "rating_average":"4.3" } ]}';
  const obj = JSON.parse(text);
  return obj;
}

describe("JsonCapitalizationHelper", () => {
  it("changes Ids from snake case to Title Case", () => {
    let yarnJson = TestYarnJson();
    let yarnJsonCleaned = JSON.stringify(
      JsonCapitalizationHelper(yarnJson.yarns)
    );
    expect(yarnJsonCleaned).toContain("Rating Average");
    expect(yarnJsonCleaned).toContain("Min Gauge");
  });
});
