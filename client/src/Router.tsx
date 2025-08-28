import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import News  from './pages/News';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';
import Rules from './pages/Rules';  
import Appeal from './pages/Appeal';

// import Register from './pages/Register'; 
// import Login from './pages/Login';

export const Routers = () => {
  return (
    <Router basename={"/exchanger-dolphex/client"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/appeal" element={<Appeal />} />
      </Routes>
    </Router>
  );
};