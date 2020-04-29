import React from "react";
import { getDogs } from "../actions";
import { connect } from "react-redux";

const Dog = (getDogs, pictures) => {
  return (
    <div>
      <h2>Dog Pictures: {pictures}</h2>
      <div>
        <button onClick={getDogs}>Fetch</button>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    pictures: state.message,
    status: state.status,
  };
};
export default connect(mapStatetoProps, { getDogs })(Dog);
