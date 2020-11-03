import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders Header", () => {
    let wrapped = shallow(<Header title="Test" />);
    expect(wrapped.find("header h1").text()).toBe("Test");
  });
});
