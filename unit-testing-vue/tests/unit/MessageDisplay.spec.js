import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDispay", () => {
  it("Given a successful call to getMessage, it should display the returned message", async () => {
    const expectedMessage = "Hello from the db!";
    getMessage.mockResolvedValueOnce({ text: expectedMessage });
    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find('[data-testid="message"]').element.textContent;
    expect(message).toEqual(expectedMessage)
  });

  it("Given an unsuccessful call to getMessage, it should display an error", async () => {
    const expectedErrorMessage = "Oops! Something went wrong.";
    getMessage.mockRejectedValueOnce({
      text: "",
      error: expectedErrorMessage
    });
    const wrapper = mount(MessageDisplay);
    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);
    const errorMessage = wrapper.find('[data-testid="message-error"]').element.textContent;
    expect(errorMessage).toEqual(expectedErrorMessage);
  });
});
