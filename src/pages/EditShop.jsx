/**
 * - [React 공식 문서 - 상태 업데이트](https://react.dev/learn/updating-objects-in-state)
 * - [Kent C. Dodds - Application State Management](https://kentcdodds.com/blog/application-state-management-with-react)
 * - 클린 코드 (로버트 C. 마틴) - 2장 의미 있는 이름
 * - 좋은 코드, 나쁜 코드 (톰 롱) - 6장 코드를 오용하기 어렵게 만들라
 */

/**
 * 리팩토링을 한다
 * - 한번에 한가지만 바꾼다! (한번에 여러가지를 바꾸면 문제 원인을 찾기가 어렵다)
 * - 항상 동작하는 상태를 유지한다! (동작하지 않는 코드 위에 추가 작업을 하지 않는다)
 * - 각 단계를 검증한 후 넘어간다! (테스트코드 / 수동으로 동작 확인)
 *
 * 우리 코드의 불편함이 무얼까
 * 1. 불변성을 위반한다
 * 2. 상태 구조가 비효율적이다
 */

/**
 * 상태 구조 재설계
 *
 * 이 컴포넌트의 목적이 뭔가요?
 * - 쇼핑몰 정보를 수정하는 것
 *
 * 수정 -> API에 Put 요청을 하는 것
 * 우리 컴포넌트의 상태 구조를 API스펙에 맞춰서 설계한다면,
 * 변환 논리를 제거할 수 있겠다!
 *
 * 데이터 지향 설계 (Data Oriented Design)
 * - 데이터의 형태가 코드의 복잡도를 낮춰줄 수 있따!
 *
 * 상태 구조를 잘 설계하면 코드가 단순해지고
 * 잘못 설계하면 온갖 변환 / 매핑 논리가 필요해진다
 *
 * 이 관점에서, 이 데이터를 최종적으로 누가 어떤형태로 소비하나요?
 * - 최종 소비자: API 서버
 * 서버가 원하는 형태로 상태를 유지하면,
 * 전송 시점에 불피료한 변환등을 할 필요가 없고
 * 행복한 개발자 + 행복한 리뷰어가 되어 -> 행복한 사용자가 된다!
 */
import { useState } from "react";
import InputProduct from "../components/InputProduct";
import InputShopInfo from "../components/InputShopInfo";
import Button from "../components/Button";
import { useShopEditor } from "../hooks/useShopEditor";

function EditShop() {
  const {
    linkShopData,
    updateLinkShopField,
    updateShopField,
    updateProductField,
    handleAddProduct,
  } = useShopEditor();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateShop(linkShopData);
    } catch (error) {
      alert("에러났대요 얼레리 꼴레리");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputProduct
        products={productInputs}
        onChange={handleProductChange}
        onAdd={handleAddProduct}
      />
      <InputShopInfo shopInputs={shopInputs} onChange={handleShopChange} />
      <Button type="submit">수정하기</Button>
    </form>
  );
}

export default EditShop;
