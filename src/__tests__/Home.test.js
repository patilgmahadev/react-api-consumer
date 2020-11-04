import React from "react";
import { shallow } from "enzyme";
import Home from "../components/Home";
import Table from "../components/Table";

describe("Home Component", () => {
  it("renders Home", () => {
    let wrapped = shallow(<Home />);
    expect(wrapped).toBeDefined();
  });

  it("renders Table", () => {
    let wrapped = shallow(<Home />);
    expect(wrapped.find(Table).exists()).toBe(true);
  });
});
