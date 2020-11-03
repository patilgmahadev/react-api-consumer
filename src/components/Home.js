import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import "../App.scss";

import Table from "./Table";
import { API_URL } from "./Constant";

const Home = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(API_URL)
      .then(res => {
        setTableData(res.data);
      })
      .catch(error => {
        setTableData([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
    return () => {
      setTableData([]);
    };
  }, []);

  if (isLoading && tableData.length <= 0) {
    return (
      <div className="loader">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
      <Table
        tableData={tableData}
        headingColumns={["Word", "Nagari", "Description", "Category"]}
        title="Sheetlabs"
      />
  );
};

export default memo(Home);
