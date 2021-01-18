import React from "react";

const errorModal = (props) => (
    <div className="error__modal">
      <p>Upssss!!!</p>
      <p>
        Algo no ha ido bien :{"("}</p>
      <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
        <p>Ok</p>
      </div>
    </div>
  );


export default errorModal;
