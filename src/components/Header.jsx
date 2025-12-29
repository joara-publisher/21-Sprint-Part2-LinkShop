import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import ShopLogo from "../assets/img/shop_logo.png"
import { HeaderContainer } from "../styles/HeaderStyles";
function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <header>
      <HeaderContainer>
        <Link to="/list">
          <img src={ShopLogo} alt="링크샵 로고" />
        </Link>
        {location.pathname === "/list" ? (
          <Button onClick={() => navigate("/linkpost")} layout="fit">
            생성하기
          </Button>
        ) : (
          <Button onClick={() => navigate("/list")} layout="fit">
            돌아가기
          </Button>
        )}
      </HeaderContainer>
    </header>
  );
}

export default Header;
