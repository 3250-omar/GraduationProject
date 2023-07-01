import React from "react";
import "./Styles/Modal.css";
export const Modal = ({ closeModal }) => {
  const { setOpenModal, logOut } = closeModal;
  return (
    <>
      <div className="contain">
        <div className="sure">
          <h3>Sure?</h3>{" "}
        </div>
        <div className="Options">
          <button onClick={() => logOut()}>LogOut</button>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
      </div>
    </>
  );
};
