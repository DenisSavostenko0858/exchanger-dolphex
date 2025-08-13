import { motion } from 'framer-motion';
import '../../assets/styles/error.css'
import Box from '@mui/material/Box';

import logo from '../../assets/image.png'; 

function NotFound() {
  return (
    <>
    <motion.div 
          className="error-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
    >
        <Box 
        component="img"
        src={logo}
        alt="Логотип"
        sx={{ 
          height: 54,
        }}
        />
        <h3>Страница не найдена 🫥</h3>
        <a href="/" className='error-link' >Вернитесь на главную</a>
    </motion.div>
    </>
  )
}

export default NotFound