import React from "react";
import { shallow } from "enzyme";
import Table from "../components/Table";

describe("Table Component", () => {
  it("renders Table", () => {
    let wrapped = shallow(<Table 
      tableData={[{word: 'word'}]}
      headingColumns={["Word", "Nagari", "Description", "Category"]}
      title="Sheetlabs"
      />);
      console.log('wrapped', wrapped);
    expect(wrapped).toBeDefined();
  });
});
