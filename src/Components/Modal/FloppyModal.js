import React from "react";
import Modal from "react-responsive-modal";
import "./modal.css";

const FloppyModal = props => {
  return (
    <div>
      <Modal open={props.open} onClose={props.onCloseModal} center>
        <p className="m-20">{props.modalMessage}</p>
      </Modal>
    </div>
  );
};

export default FloppyModal;
