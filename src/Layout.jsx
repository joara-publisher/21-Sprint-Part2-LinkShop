import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

function Layout() {
  const location = useLocation();
  const showHeader = !location.pathname.startsWith("/link/"); // 상세 페이지에서는 숨김


  return (
    <>
      {showHeader && <Header />}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
