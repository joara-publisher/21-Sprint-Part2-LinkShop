import { createPortal } from "react-dom";
import { ModalContainer, ModalOverlay } from "../styles/ModalStyles";

function Modal({ isOpen, children, backdrop = "none", variant = "default" }) {
  if (!isOpen) {
    return null;
  }

  const overlayPlacementByVariant = {
    default: "center",
    sheet: "end",
  };

  return createPortal(
    <ModalOverlay
      $backdrop={backdrop}
      $placement={overlayPlacementByVariant[variant]}
    >
      <ModalContainer $variant={variant}>{children}</ModalContainer>
    </ModalOverlay>,
    document.getElementById("root-modal")
  );
}

export default Modal;
