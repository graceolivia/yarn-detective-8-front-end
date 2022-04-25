import { mount } from "@vue/test-utils";
import ResultCard from "@/components/ResultCard.vue";

function TestYarnJson() {
  let text =
    '{ "yarns" : [' +
    '{ "name":"Red Heart" , "id":"1" },' +
    '{ "name":"Silly Bamboo" , "id":"2" },' +
    '{ "name":"Gorgeous Goats" , "id":"3" } ]}';
  const obj = JSON.parse(text);
  return obj;
}

describe("ResultCard.vue", () => {
  it("displays expected HTML", () => {
    let yarnJson = TestYarnJson();
    const wrapper = mount(ResultCard, {
      props: {
        item: yarnJson.yarns[0],
      },
      shallow: true,
    });
    expect(wrapper.html()).toContain("<h3>Red Heart</h3>");
  });
});
