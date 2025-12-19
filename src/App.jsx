import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import List from './pages/List';

function Main() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/list" replace />}  />
          <Route path="/list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
