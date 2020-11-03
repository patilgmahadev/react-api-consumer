import React, { Fragment, memo } from "react";
import { useHistory } from "react-router";
import "./ViewDetail.scss";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";

const ViewDetail = props => {
  const { location } = props;
  const detailData = get(location, "state.row", {});
  const history = useHistory();

  const backToHome = () => history.push("/");

  if (isEmpty(detailData)) {
    backToHome();
  }

  return (
    <Fragment>
      <h1 className="title">Sheetlabs Detail</h1>
      <div className="cartItem">
        <div className="prodInfo">
          <div className="card-container">
            <span className="label">Word: </span>
            <div className="labelText">{get(detailData, "word", "")}</div>
          </div>
          <div className="card-container">
            <span className="label">Nagari: </span>
            <div className="labelText">{get(detailData, "nagari", "")}</div>
          </div>
          <div className="card-container">
            <span className="label">Description: </span>
            <div className="labelText">{get(detailData, "description", "")}</div>
          </div>
          <div className="card-container">
            <span className="label">Category: </span>
            <div className="labelText">{get(detailData, "category", "")}</div>
          </div>
        </div>
      </div>
      <div className="backToHome">
        <button className="btn btn-primary" onClick={() => backToHome()}>
          Back To Home
        </button>
      </div>
    </Fragment>
  );
};

export default memo(ViewDetail);
