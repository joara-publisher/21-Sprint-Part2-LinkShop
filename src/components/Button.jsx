import { DefaultButton } from "../styles/ButtonStyles";
/**
 * 공통 Button 컴포넌트
 * - layout: 버튼 너비 종류
 *   (full: 전체 너비 버튼 / fit: 내용 기준 버튼)
 * - variant: 버튼 스타일 종류
 *   (기본 파란 버튼 / secondary: 취소 버튼)
 * - height: 버튼 높이
 *   (단위 제외 숫자 입력, 기본값 36)
 * - disabled: 비활성화 상태
 *   (기본값 false)
 * - onClick: 버튼 클릭 이벤트
 */

function Button({
  layout = "fit",
  variant = "primary",
  height = 36,
  disabled = false,
  onClick,
  children,
}) {
  return (
    <DefaultButton
      $layout={layout}
      $variant={variant}
      $height={height}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </DefaultButton>
  );
}

export default Button;
