import { mount, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import SearchBar from "@/components/SearchBar.vue";

describe("App.vue", () => {
  it("renders intended text before user names query", () => {
    const wrapper = mount(App, {
      props: {},
      shallow: true,
    });
    console.log(wrapper.html());
    expect(wrapper.html()).toContain("Results Will Appear Here");
  });

  it("renders child elements upon mount", () => {
    const wrapper = mount(App, {
      props: {},
      shallow: true,
    });
    console.log(wrapper.html());
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
});
