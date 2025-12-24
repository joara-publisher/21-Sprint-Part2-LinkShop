import { createPortal } from "react-dom";
import { ModalContainer, ModalOverlay } from "../styles/ModalStyles";

/**
 * 공통 Modal 컴포넌트
 *
 * @param {Object} props - Modal 컴포넌트 props
 * @param {'none' | 'dim'} [props.backdrop='none'] - 배경 스타일 (none/dim)
 * @param {'default' | 'sheet'} [props.variant='default'] - 모달 스타일 종류
 * @param {boolean} props.isOpen - 모달 열림 여부
 * @param {React.ReactNode} props.children - 모달 안쪽 컨텐츠
 */
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
