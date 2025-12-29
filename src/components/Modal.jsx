import { createPortal } from "react-dom";
import { ModalContainer, ModalOverlay } from "../styles/ModalStyles";

/**
 * 공통 Modal 컴포넌트
 *
 * @param {Object} props - Modal 컴포넌트 props
 * @param {'modal' | 'sheet'} [props.variant='modal'] - 모달 스타일 종류
 * @param {boolean} props.isOpen - 모달 열림 여부
 * @param {React.ReactNode} props.children - 모달 안쪽 컨텐츠
 */
function Modal({ isOpen, children, variant = "modal" }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalOverlay $variant={variant}>
      <ModalContainer $variant={variant}>{children}</ModalContainer>
    </ModalOverlay>,
    document.getElementById("root-modal")
  );
}

export default Modal;
