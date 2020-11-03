import React from "react";
import { shallow } from "enzyme";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  it("renders Footer", () => {
    let wrapped = shallow(<Footer />);
    expect(wrapped).toBeDefined();
  });
});
