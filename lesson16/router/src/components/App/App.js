import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { Catalog } from "../../pages/Catalog/Catalog";
import { CardPage } from "../../pages/CardPage/CardPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:goodId" element={< CardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
