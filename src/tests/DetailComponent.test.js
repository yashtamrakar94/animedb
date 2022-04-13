import React from "react";
import { mount } from "enzyme";
import { DetailComponent } from "../components/DetailComponent";

let wrapper;

beforeEach(() => {
  jest.clearAllMocks();
  wrapper = mount(<DetailComponent />);
});

describe("Table tests", () => {
  it("should render correctly", () => {
    expect(wrapper.toBeTruthy());
  });
});
