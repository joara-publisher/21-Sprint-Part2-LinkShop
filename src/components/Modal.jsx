import { createPortal } from "react-dom";

function Modal ({ isOpen, children }) {
  if (!isOpen) {
    return null;
  }
  
  return createPortal (
    <div>
      {children}
    </div>
  , document.getElementById('root-modal'))
}

export default Modal;