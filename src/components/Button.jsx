import { DefaultButton } from "../styles/ButtonStyles";
/**
 * 공통 Button 컴포넌트
 * - flexLayoutType: display 방식 제어
 *   (flex: 전체 너비 버튼 / inline-flex: 내용 기준 버튼)
 * - buttonVariant: 버튼 스타일 종류
 *   (기본 파란 버튼 / cancel: 다른 스타일의 버튼)
 * - buttonHeight: 버튼 높이
 *   (단위 제외 숫자 입력, 기본값 36)
 * - disabled: 비활성화 상태
 *   (기본값 false)
 * - onClick: 버튼 클릭 이벤트
 */

function Button ({ 
  flexLayoutType = "inline-flex",
  buttonVariant = "primary",
  buttonHeight = 36,
  disabled = false,
  onClick, 
  children, 
}) {
  return (
    <DefaultButton 
      $flexLayoutType={flexLayoutType}
      $buttonVariant={buttonVariant}
      $buttonHeight={buttonHeight}
      disabled={disabled}
      onClick={onClick} 
    >{
      children}
    </DefaultButton>
  )
}

export default Button;