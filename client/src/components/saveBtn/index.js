import React, { useState } from "react";

const SaveBtn = props => {
  return (
    <button className="btn btn-warning" onClick={() => props.onClick(props)}>
      SAVE
    </button>
  );
};

export default SaveBtn;
