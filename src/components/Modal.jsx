import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import check from "../assets/Group.png";

const Modal = ({ visible, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    visible ? modalRef.current.showModal() : modalRef.current.close();
  }, [visible]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleESC = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <dialog
      ref={modalRef}
      id="my_modal_1"
      className="modal"
      onCancel={handleESC}
    >
      <form method="dialog" className="modal-box flex flex-col items-center">
        <img src={check} />
        <h3 className="font-bold text-lg">Payment Successfull!</h3>
        <div className="divider"></div>
        <p className="text-primaryText">Thanks for Purchasing</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
