import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './Main';
import { Home, About, Contacts } from './Components';
import { ProductDetails } from './ProductDetails';
import { CategoryPage } from './CategoryPage';
import { NewsDetails } from './NewsDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="category/:categoryName" element={<CategoryPage />} />
          <Route path="news/:newsId" element={<NewsDetails />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
