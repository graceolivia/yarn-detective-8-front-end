import { mount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  it("emits ravelryQueryEvent with passed results", async () => {
    const wrapper = mount(SearchBar);

    wrapper.vm.$emit("ravelryQuery", "yarns", "cascade superwash");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().ravelryQuery).toBeTruthy();
    expect(wrapper.emitted().ravelryQuery).toEqual([
      ["yarns", "cascade superwash"],
    ]);
  });
});
