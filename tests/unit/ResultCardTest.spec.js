import { mount, shallowMount } from "@vue/test-utils";
import ResultCard from "@/components/ResultCard.vue";
import YarnCardInfo from "@/components/YarnCardInfo.vue";

function TestYarnJson() {
  let text =
    '{ "yarns" : [' +
    '{ "Name":"Red Heart" , "id":"1" },' +
    '{ "Name":"Silly Bamboo" , "id":"2" },' +
    '{ "Name":"Gorgeous Goats" , "id":"3" } ]}';
  const obj = JSON.parse(text);
  return obj;
}

describe("ResultCard.vue", () => {
  it("displays expected Title and Button", () => {
    let yarnJson = TestYarnJson();
    const wrapper = mount(ResultCard, {
      props: {
        item: yarnJson.yarns[0],
      },
      shallow: true,
    });
    expect(wrapper.html()).toContain("<h3>Red Heart</h3>");
    expect(wrapper.html()).toContain("</button>");
  });

  it("button Text changes on Click", async () => {
    let yarnJson = TestYarnJson();

    const wrapper = mount(ResultCard, {
      props: {
        item: yarnJson.yarns[0],
      },
      components: {
        YarnCardInfo,
      },
    });

    const button = wrapper.find({ ref: "toggleShowInfo" });
    expect(button.html()).toContain("Expand");
    await button.trigger("click");
    expect(button.html()).toContain("Hide");
  });

  it("displays child component of yarnCardInfo", () => {
    let yarnJson = TestYarnJson();
    const wrapper = shallowMount(ResultCard, {
      props: {
        item: yarnJson.yarns[0],
      },
    });
    expect(wrapper.html()).toContain("yarn-card-info-stub");
  });
});
