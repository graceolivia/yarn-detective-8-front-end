import { mount, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import SearchBar from "@/components/SearchBar.vue";
import ResultsList from "@/components/ResultsList.vue";

function TestYarnJson() {
  let text =
    '{ "Yarns" : [' +
    '{ "name":"Red Heart" , "id":"1" },' +
    '{ "name":"Silly Bamboo" , "id":"2" },' +
    '{ "name":"Gorgeous Goats" , "id":"3" } ]}';
  const obj = JSON.parse(text);
  return obj;
}

describe("App.vue", () => {
  it("renders child elements upon mount", () => {
    const wrapper = mount(App, {
      props: {},
      shallow: true,
    });
    expect(wrapper.html()).toContain("</search-bar-stub>");
    expect(wrapper.html()).toContain("</results-list-stub>");
  });

  it("calls RavelryQuery", async () => {
    const spySearchRavelry = jest.spyOn(App.methods, "searchRavelry");
    const wrapper = shallowMount(App);
    const childWrapper = wrapper.findComponent(SearchBar);

    childWrapper.vm.$emit("ravelryQuery", "big bang bulky", "yarns");
    await wrapper.vm.$nextTick();

    expect(spySearchRavelry).toBeCalled();
  });

  it("passes json to Results List and renders titles", async () => {
    const yarnJson = TestYarnJson();
    const wrapper = mount(App, {
      data() {
        return {
          results: yarnJson,
        };
      },
      components: {
        SearchBar,
        ResultsList,
      },
      props: {},
    });

    expect(wrapper.html()).toContain("Red Heart");
    expect(wrapper.html()).toContain("Silly Bamboo");
    expect(wrapper.html()).toContain("Gorgeous Goats");
  });
});
