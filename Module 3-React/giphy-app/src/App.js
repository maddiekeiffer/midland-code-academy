import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import FavoritesPage from './components/FavoritesPage';


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </Router>
  );
}

export default App;
