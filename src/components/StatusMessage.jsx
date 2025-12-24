import {
  StatusMessageWrapper,
  StatusText,
} from "../styles/StatusMessageStyles";
import LoadingImg from "../assets/img/shop_loading.png";
import NotFound from "../assets/img/not_found.png";

function StatusMessage({ status }) {
  const messages = {
    로딩중: "상품을 불러오는 중입니다.\n잠시만 기다려주세요",
    검색결과없음:
      "검색 결과가 없어요. \n 지금 프로필을 만들고 내 상품을 소개해보세요",
  };

  const images = {
    로딩중: LoadingImg,
    검색결과없음: NotFound,
  };

  if (!status) return null;

  return (
    <StatusMessageWrapper>
      <img
        src={images[status]}
        alt={`${status} 이미지`}
        width="375px"
        height="182px"
      />
      <StatusText>
        {messages[status].split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </StatusText>
    </StatusMessageWrapper>
  );
}

export default StatusMessage;
