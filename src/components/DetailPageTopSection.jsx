import { Link } from "react-router-dom";
import {
  TopSection,
  BackButton,
  LinkWrapper,
  InnerContainer,
} from "../styles/DetailPageTopSectionStyles.js";
import DetailHeader from "../assets/img/detail_header.png";
import Back from "../assets/img/icon_back.svg";

function DetailPageTopSection() {
  return (
    <>
      <TopSection>
        <img src={DetailHeader} alt="상세페이지 상단 디자인" />
      </TopSection>
      <InnerContainer>
        <LinkWrapper to="/list">
          <BackButton>
            <img src={Back} alt="돌아가기 아이콘" />
            <p>돌아가기</p>
          </BackButton>
        </LinkWrapper>
      </InnerContainer>
    </>
  );
}

export default DetailPageTopSection;
