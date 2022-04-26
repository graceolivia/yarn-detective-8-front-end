import { mount } from "@vue/test-utils";
import YarnCardInfo from "@/components/YarnCardInfo.vue";

function TestYarnJson() {
  let text =
    '{ "yarns" : [' +
    '{ "name":"Red Heart" , "id":"1" },' +
    '{ "name":"Silly Bamboo" , "id":"2" },' +
    '{ "name":"Gorgeous Goats" , "id":"3" } ]}';
  const obj = JSON.parse(text);
  return obj;
}

describe("YarnCardInfo.vue", () => {
  it("displays expected HTML", () => {
    let yarnJson = TestYarnJson();
    const wrapper = mount(YarnCardInfo, {
      props: {
        item: yarnJson.yarns[0],
      },
      shallow: true,
    });
    expect(wrapper.html()).toContain("<div>name : Red Heart</div>");
    expect(wrapper.html()).toContain("<div>id : 1</div>");
    expect(wrapper.html()).toContain('<div class="yarnCardInfo">');
  });
});
