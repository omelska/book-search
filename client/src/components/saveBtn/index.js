import React, { useState } from "react";
import Modal from "../modal";

const SaveBtn = props => {
  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => props.onClick(props)}
        data-toggle="modal"
        data-target="#modal"
      >
        SAVE
      </button>
      <Modal action="save" />
    </>
  );
};

export default SaveBtn;
