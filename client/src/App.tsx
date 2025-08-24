import './App.css'
import { Routers } from "./Router"
import { useEffect, useState } from 'react'
import Footer from './components/footer'

function App() {
        // Функция для прокрутки вверх
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <>
    <Routers></Routers>
        <Footer />
      {/* Кнопка "Наверх" */}
      {showButton && (
        <button 
          onClick={scrollToTop}
          className="scroll-to-top-button"
        >
          ↑ Наверх
        </button>
      )}
    </>
  )
}

export default App
