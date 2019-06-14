import React from "react";

const DeleteBtn = props => {
  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => props.onClick(props)}
        data-toggle="modal"
        data-target="#modal"
      >
        DELETE
      </button>
    </>
  );
};

export default DeleteBtn;
