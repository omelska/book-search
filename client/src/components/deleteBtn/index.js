import React from "react";

const DeleteBtn = props => {
  return (
    <button className="btn btn-warning" onClick={() => props.onClick(props)}>
      DELETE
    </button>
  );
};

export default DeleteBtn;
