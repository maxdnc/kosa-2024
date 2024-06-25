import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import AboutPage from './components/pages/About/AboutPage.jsx';
import DetailPage from './components/pages/DetailPage/DetailPage.jsx';
import ErrorPage from './components/pages/Error/ErrorPage.jsx';
import HomePage from './components/pages/Home/HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
