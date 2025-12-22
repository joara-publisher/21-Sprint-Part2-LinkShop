import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

function Header () {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <header>
      <div>
        <Link to="/list">
          <img src="" alt="링크샵 로고" />
        </Link>
        {location.pathname === '/list' ? 
          <>
            <Button onClick={() => navigate('/linkpost')} flexLayoutType="inline-flex">생성하기</Button> 
          </>
          : 
          <Button onClick={() => navigate('/list')} flexLayoutType="inline-flex">돌아가기</Button>
        }
      </div>
    </header>
  )
}

export default Header;