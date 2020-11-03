import React from "react";
import { shallow } from "enzyme";
import ViewDetail from "../components/ViewDetail";

describe("ViewDetail Component", () => {
  it("renders ViewDetail", () => {
    const props = {
      location: {
        state: {
          row: {
            word: 'word'
          }
        }
      }
    }
    let wrapped = shallow(<ViewDetail {...props}/>);
    expect(wrapped).toBeDefined();
  });
});
