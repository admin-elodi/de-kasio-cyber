// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/layout/MainLayout';


const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
    
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;