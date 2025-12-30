import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translate(-50%, 20px); }
  15% { opacity: 1; transform: translate(-50%, 0); }
  85% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -20px); }
`;

const ToastContainer = styled.div`
  position: absolute;
  top: ${(props) => props.$top || "auto"};
  right: -16px;

  background-color: #6166e9;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  width: max-content;
  white-space: nowrap;

  z-index: 9999;
  animation: ${fadeInOut} 2.5s ease-in-out forwards;
`;

export function Toast({ message, top }) {
  return <ToastContainer $top={top}>{message}</ToastContainer>;
}
