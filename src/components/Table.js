import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import get from "lodash/get";

const Table = ({ tableData, headingColumns, title, breakOn = 'medium' }) => {
  const history = useHistory();

  let tableClass = 'table-container__table';

  if (breakOn === 'small') {
    tableClass += ' table-container__table--break-sm';
  } else if (breakOn === 'medium') {
    tableClass += ' table-container__table--break-md';
  } else if (breakOn === 'large') {
    tableClass += ' table-container__table--break-lg';
  }

  const handleClickView = (row) => {
    history.push({
      pathname: '/view-detail',
      state: { row }
    });
  }

  const data = tableData.map((row, index) => {
    let rowData = [];
    let i = 0;
    for (const key in row) {
      rowData.push({
        key: headingColumns[i],
        val: get(row, `${key}`, '')
      });
      i++;
    }

    return <tr key={index} onClick={() => handleClickView(row)}>
      {rowData.map((data, index) => <td key={index} data-heading={get(data, 'key' ,'')}>{get(data, 'val', '')}</td>)}
    </tr>
  });

  return (
    <div className="table-container">
      <div className="table-container__title">
        <h2>{title}</h2>
      </div>
      <table className={tableClass}>
        <thead>
          <tr>
            {headingColumns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  breakOn: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default memo(Table);