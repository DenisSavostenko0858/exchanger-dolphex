import { motion } from 'framer-motion';
import '../../assets/styles/containers.css'
import Box from '@mui/material/Box';

import logo from '../../assets/image.png'; 

function ContainerHead() {
  return (
    <>
    <motion.div 
          className="containers"
          style={{marginTop: "100px"}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
    >
    <div className='container-head'>
      <Box 
        component="img"
        className='logo-container-head'
        src={logo}
        alt="Логотип"
        sx={{ 
          height: 54,
        }}
      />
        <h3 style={{marginTop:"30px"}}>Обменный пункт и почему это отличный вариант</h3>
    </div>
    <div className='container-content'>
        <p>Онлайн-обменник Dolphex.io предлагает всем желающим осуществить обмен у себя на странице, позволяя менять криптовалюту на фиатные средства, , покупать цифровые активы, например купить и продать Bitcoin, многое другое.</p>
        <p>Сервис постоянно онлайн и стабильно работает для всех, без исключения пользователей в сети интернет. Администрация ресурса рассказывает о том, что платформа удобная и фунциональная, и что быстрота проведения обменной операции приятно удивит клиентов.</p>
        <p>На сайте есть множество позитивных отзывов от довольных клиентов, а простота осуществления обменных операций не оставляет сомнения в том, что ресурс прекрасно подходит для таких действий.</p>
    </div>
    </motion.div>
    </>
  )
}

export default ContainerHead;