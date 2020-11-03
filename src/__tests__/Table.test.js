import React from "react";
import { shallow } from "enzyme";
import Table from "../components/Table";

describe("Table Component", () => {
  it("renders Table", () => {
    let wrapped = shallow(<Table
      tableData={[{
        word: "word",
        nagari: "nagari",
        description: "description",
        category: "category"
      }]}
      headingColumns={["Word", "Nagari", "Description", "Category"]}
      title="Sheetlabs"
    />);

    expect(wrapped.find('div').contains('Sheetlabs')).toBe(true);
  });
});
