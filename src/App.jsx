import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CreateShop from "./pages/CreateShop";
import ShopList from "./pages/ShopList";
import GlobalStyle from "./styles/GlobalStyle";

function Main() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/list" replace />} />
          <Route path="/list" element={<ShopList />} />
          <Route path="/linkpost" element={<CreateShop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
