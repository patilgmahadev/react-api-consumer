import React from "react";
import { shallow } from "enzyme";
import Home from "../components/Home";

describe("Home Component", () => {
  it("renders Home", () => {
    let wrapped = shallow(<Home />);
    expect(wrapped).toBeDefined();
  });
});
