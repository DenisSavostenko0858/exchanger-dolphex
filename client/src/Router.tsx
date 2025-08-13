import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import  News  from './pages/News';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';

// import Register from './pages/Register'; 
// import Login from './pages/Login';
// import Rules from './pages/Rules';  
// import { Appeal } from './pages/appeal';

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/reviews" element={<Reviews />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rules" element={<Rules />} /> */}
        <Route path="*" element={<NotFound />} />
        {
          /*<Route path="/appeal" element={<Appeal />} />
          <Route path="/logout" element={< />} />
        */}
      </Routes>
    </Router>
  );
};