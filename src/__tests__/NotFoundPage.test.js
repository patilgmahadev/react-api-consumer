import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../components/NotFoundPage";

describe("NotFoundPage Component", () => {
  it("renders NotFoundPage", () => {
    let wrapped = shallow(<NotFoundPage />);
    expect(wrapped).toBeDefined();
  });
});
