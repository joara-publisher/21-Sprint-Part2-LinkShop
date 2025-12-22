import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import CreateShop from "./pages/CreateShop";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/listpost' element={<CreateShop />} />
        <Route path="*" element={<Navigate to="/listpost" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main;
