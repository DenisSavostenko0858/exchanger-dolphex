import {
  Box,
  Container,
  Typography,
  Link,
} from '@mui/material';
import {
  Email,
  Telegram,
} from '@mui/icons-material';

import logo from '../assets/image.png'; 

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: 4,
        mt: 'auto',
        borderTop: '2px solid #00ff88',
        marginTop: '100px',
      }}
    >
      <Container maxWidth="lg">
        {/* Основной контент футера */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          mb: 4
        }}>
          {/* Блок с названием и описанием */}
          <Box sx={{
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: { xs: '100%', md: '300px' }
          }}>
            <Box 
                component="img"
                className='logo-container-head'
                src={logo}
                alt="Логотип"
                sx={{ 
                height: 54,
                }}
            />
            <Typography variant="body2" sx={{ 
              mb: 2, 
              opacity: 0.8,
              lineHeight: 1.6
            }}>
                Сервис обмена электронных валют.
            </Typography>
            <Typography variant="body2" sx={{ 
              mb: 2, 
              opacity: 0.8,
              lineHeight: 1.6
            }}>
                Пн. — Пт. с 6:30 до 22:00 по мск.
                Сб. — Вск. свободный график.
            </Typography>
          </Box>

          {/* Блок контактов */}
          <Box sx={{
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography variant="subtitle1" sx={{ 
              fontWeight: 'bold', 
              mb: 2 
            }}>
              Контакты
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1,
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Link 
                href="mailto:support@cryptoexchange.com" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': { color: '#00ff88' } 
                }}
              >
                <Email sx={{ mr: 1, fontSize: 20 }} />
                support@cryptoexchange.com
              </Link>
              <Link 
                href="https://t.me/cryptoexchange" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': { color: '#00ff88' } 
                }}
              >
                <Telegram sx={{ mr: 1, fontSize: 20 }} />
                Telegram
              </Link>
            </Box>
          </Box>

          {/* Блок ссылки */}
          <Box sx={{
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography variant="subtitle1" sx={{ 
              fontWeight: 'bold', 
              mb: 2 
            }}>
              Ссылки
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1,
              alignItems: { xs: 'center', md: 'flex-start' }
            }}>
              <Link 
                href="/rules" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': { color: '#00ff88' } 
                }}
              >
                <Email sx={{ mr: 1, fontSize: 20 }} />
                Правила сайта
              </Link>
              <Link 
                href="/appeal" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': { color: '#00ff88' } 
                }}
              >
                <Telegram sx={{ mr: 1, fontSize: 20 }} />
                Обращение
              </Link>
              <Link 
                href="/news" 
                color="inherit" 
                sx={{ 
                  textDecoration: 'none', 
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': { color: '#00ff88' } 
                }}
              >
                <Telegram sx={{ mr: 1, fontSize: 20 }} />
                Новости
              </Link>
            </Box>
          </Box>        
        </Box>

        {/* Нижняя часть с копирайтом - ВЫНЕСЕНА НАРУЖУ */}
        <Box sx={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          pt: 2, 
          textAlign: 'center' 
        }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © 2025 Dolphex.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;