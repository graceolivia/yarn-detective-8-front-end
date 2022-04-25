import { mount } from "@vue/test-utils";
import ResultsList from "@/components/ResultsList.vue";

describe("ResultsList.vue", () => {
  it("renders results when passed", () => {
    const wrapper = mount(ResultsList, {
      props: {
        results: "Some random results",
      },
      shallow: true,
    });

    expect(wrapper.html()).toContain("<div>Some random results</div>");
  });
});
