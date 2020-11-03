import React from "react";
import { shallow } from "enzyme";
import ViewDetail from "../components/ViewDetail";
import { Router } from "react-router-dom";

describe("ViewDetail Component", () => {
  const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

  it("renders ViewDetail", () => {
    const props = {
      location: {
        state: {
          row: {
            word: "word",
            nagari: "nagari",
            description: "description",
            category: "category"
          }
        }
      }
    };
    let wrapped = shallow(<ViewDetail {...props} />);
    expect(wrapped.find("h1").text()).toBe("Sheetlabs Detail");
  });

  it("renders ViewDetail with empty data", () => {
    const props = {};
    let wrapped = shallow(
      <Router history={historyMock}>
        <ViewDetail {...props} />
      </Router>
    );
    expect(wrapped).toBeDefined();
  });
});
