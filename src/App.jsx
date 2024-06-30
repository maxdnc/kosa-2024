import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import AboutPage from './components/pages/About/AboutPage.jsx';
import AccommodationDetailPage from './components/pages/AccommodationDetail/AccommodationDetailPage.jsx';
import ErrorPage from './components/pages/Error/ErrorPage.jsx';
import HomePage from './components/pages/Home/HomePage.jsx';

function App() {
  return (
    <BrowserRouter basename="/kosa-2024/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="detail/:id" element={<AccommodationDetailPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
