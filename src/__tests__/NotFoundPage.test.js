import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../components/NotFoundPage";

describe("NotFoundPage Component", () => {
  it("Should render NotFoundPage", () => {
    let wrapped = shallow(<NotFoundPage />);
    expect(wrapped.find("div h1").text()).toBe("404 Page NotFound");
  });

  it("Should render  with text => Go to Home", () => {
    let wrapped = shallow(<NotFoundPage />);
    expect(wrapped.find("div p").text()).toBe("Go to Home");
  });
});
