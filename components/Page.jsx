import React from "react";
import { connect } from "react-redux";
import Placeholder from "./Placeholder";

function Page({ placeholder, title }) {
  return (
    <React.Fragment>
      <Placeholder placeholder={placeholder} />
    </React.Fragment>
  );
}

export default connect(state => state)(Page);
