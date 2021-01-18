import React from "react";

const successModal = (props) => (
  <div className="sucess__modal">
    <p>Mensaje enviado!</p>
    <p>
      Gracias por tu email.<br></br>Prometo responder lo antes posible.
    </p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>Ok</p>
    </div>
  </div>
);

export default successModal;
