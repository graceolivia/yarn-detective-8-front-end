import { mount } from "@vue/test-utils";
import ResultsList from "@/components/ResultsList.vue";
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

describe("ResultsList.vue", () => {
  it("renders results when passed array of data", () => {
    const yarnJson = TestYarnJson();
    const wrapper = mount(ResultsList, {
      props: {
        results: yarnJson.yarns,
      },
      components: {
        ResultCard,
      },
    });

    expect(wrapper.html()).toContain('<div class="container">');
    expect(wrapper.html()).toContain('<div class="card">');
    expect(wrapper.html()).toContain("<h3>Red Heart</h3>");
    expect(wrapper.html()).toContain("<h3>Silly Bamboo</h3>");
    expect(wrapper.html()).toContain("<h3>Gorgeous Goats</h3>");
  });
});
