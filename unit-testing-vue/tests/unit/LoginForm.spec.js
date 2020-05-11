import { mount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm";

describe("LoginForm", () => {
  it("Should emit an event with user's name in the payload", () => {
    const wrapper = mount(LoginForm);
    const inputElement = wrapper.find('[data-testid="name-input"]');
    const expectedPayload = { name: "Joakim Bajoul Kakaei" };
    inputElement.setValue("Joakim Bajoul Kakaei");
    wrapper.trigger("submit");
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
