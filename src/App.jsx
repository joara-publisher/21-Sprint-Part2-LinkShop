import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import List from './pages/List';
import CreateShop from "./pages/CreateShop";
import GlobalStyle from './styles/GlobalStyle';

function Main() {
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/list" replace />}  />
          <Route path="/list" element={<List />} />
          <Route path='/listpost' element={<CreateShop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
