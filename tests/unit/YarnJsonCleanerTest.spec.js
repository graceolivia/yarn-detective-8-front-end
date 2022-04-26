import YarnJsonCleaner from "@/helpers/YarnJsonCleaner.js";

function TestYarnJson() {
  let text =
    '{ "yarns" : [' +
    '{ "name":"Red Heart", "id":"1", "min_gauge":"28", "rating_average":"4.3", "first_photo": {"id":76598541,"square_url":"https://images4-f.ravelrycache.com/example.jpg"}, "yarn_weight":{"crochet_gauge":"","id":6,"knit_gauge":"7-12","max_gauge":null,"min_gauge":null,"name":"Super Bulky"}},' +
    '{ "name":"Silly Bamboo", "id":"2", "min_gauge":"28", "rating_average":"4.3" },' +
    '{ "name":"Gorgeous Goats", "id":"3", "min_gauge":"28", "rating_average":"4.3" } ]}';
  const obj = JSON.parse(text);
  return obj;
}

function TestYarnJsonNoWeightOrPhoto() {
  let text =
    '{ "yarns" : [' +
    '{ "name":"Red Heart" , "id":"1" },' +
    '{ "name":"Silly Bamboo" , "id":"2" },' +
    '{ "name":"Gorgeous Goats" , "id":"3" } ]}';
  const obj = JSON.parse(text);
  return obj;
}

describe("YarnJsonCleaner", () => {
  it("simplifies yarn weight and picture url when they are present in JSON", () => {
    let yarnJson = TestYarnJson();
    let yarnJsonCleaned = JSON.stringify(YarnJsonCleaner(yarnJson.yarns));
    expect(yarnJsonCleaned).toContain(
      '"first_photo":"https://images4-f.ravelrycache.com/example.jpg"'
    );
    expect(yarnJsonCleaned).toContain('"yarn_weight":"Super Bulky"');
  });

  it("does not change anything when yarn weight and first photo aren't present", () => {
    let yarnJson = TestYarnJsonNoWeightOrPhoto();
    let yarnJsonCleaned = JSON.stringify(YarnJsonCleaner(yarnJson.yarns));
    expect(JSON.stringify(yarnJson.yarns)).toEqual(yarnJsonCleaned);
  });
});
