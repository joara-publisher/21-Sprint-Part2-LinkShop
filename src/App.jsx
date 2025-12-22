
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ShopList from './pages/ShopList';
import GlobalStyle from './styles/GlobalStyle';

function Main() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/list" replace />}  />
          <Route path="/list" element={<ShopList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default Main;
