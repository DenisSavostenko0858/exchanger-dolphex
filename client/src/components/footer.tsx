import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Modal,
  Fade,
  Backdrop,
  IconButton
} from '@mui/material';
import {
  Email,
  Telegram,
  Close
} from '@mui/icons-material';

import logo from '../assets/image.png'; 
import '../assets/styles/footer.css'

const Footer = () => {
  const [openRules, setOpenRules] = useState(false);

  const handleOpenRules = () => {
    setOpenRules(true);
  };

  const handleCloseRules = () => {
    setOpenRules(false);
  };

  return (
    <>
      <Box
        component="footer"
        className='footer'
        sx={{
          color: 'white',
          py: 4,
          mt: 'auto',
          marginTop: '100px'
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
                  href="mailto:info@dolphex.io" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#00ff88' } 
                  }}
                >
                  <Email sx={{ mr: 1, fontSize: 20 }} />
                  info@dolphex.io
                </Link>
                <Link 
                  href="https://t.me/dolphex" 
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
                  component="button"
                  onClick={handleOpenRules}
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#8076d4ff' },
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: 'inherit'
                  }}
                >
                  Предупреждение
                </Link>
                <Link 
                  href="/rules" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#8076d4ff' } 
                  }}
                >
                  Правила
                </Link>
                <Link 
                  href="/appeal" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#8076d4ff' } 
                  }}
                >
                  Обращение
                </Link>
                <Link 
                  href="/news" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { color: '#8076d4ff' } 
                  }}
                >
                  Новости
                </Link>
              </Box>
            </Box>        
          </Box>

          {/* Нижняя часть с копирайтом */}
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

      {/* Модальное окно с правилами сайта */}
      <Modal
        open={openRules}
        onClose={handleCloseRules}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openRules}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: '600px' },
            maxWidth: '90vw',
            maxHeight: '80vh',
            bgcolor: 'rgba(8, 20, 46, 0.8)',
            border: '2px solid #8076d4',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            overflow: 'auto',
            color: 'white'
          }}>
            <IconButton
              aria-label="close"
              onClick={handleCloseRules}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#8076d4'
              }}
            >
              <Close />
            </IconButton>
            
            <Typography variant="h4" component="h4" sx={{ 
              mb: 3, 
              color: '#8076d4',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Правила сайта
            </Typography>
            
            <Box sx={{ lineHeight: 1.8 }}>
              <Typography variant="body1">
                Уважаемые клиенты! Безопасность проведения транзакций может быть поставлена под угрозу, в связи с независящими от нашего сервиса обстоятельствами. Чтобы этого не произошло, рекомендуем ознакомиться со следующими правилами конвертации электронной валюты:
              </Typography>
              <Typography variant="body1">
                <ul>
                  <li>
                     Всегда требуйте подтверждения личности лица, на реквизиты которого вы собираетесь выполнить перевод средств. Сделать это можно посредством личного звонка на skype, icq либо посредством запроса информации о статусе кошелька оппонента на сайте платежной системы;
                  </li>
                  <li>
                    Будьте предельно внимательны при заполнении поля «Номер счета» адресата. Допустив ошибку, вы отправляете собственные средства в неизвестном направлении без возможности их возврата;
                  </li>
                  <li>
                    Никогда не предоставляете займы, используя «безотзывные» электронные системы оплаты. В данном случае шанс столкнуться с фактом мошенничества чрезвычайно велик;
                  </li>
                  <li>
                    Если вам предлагается сделать оплату способом, отличным от указанного в инструкции к использованию нашего сервиса, откажитесь от выполнения платежа и сообщите о случившемся нашему специалисту. То же касается выплат по заявкам, созданным не лично вами;
                  </li>
                  <li>
                    Откажитесь от проведения средств, собственниками которых являются третьи лица, через собственные банковские счета. Известны случаи, когда проведение таких транзакций за вознаграждение, приводило к тому, что владелец счета становился соучастником финансового преступления, не подозревая о злом умысле со стороны мошенников;
                  </li>
                  <li>
                     Всегда уточняйте у сотрудника обменного пункта информацию, приходящую на вашу почту.
                  </li>
                </ul>
              </Typography>
              <Typography variant="body1">
                Наш и подобные сервисы не предоставляют займов, не берут средства у пользователей в долг или под проценты, не принимают пожертвований. При получении сообщений подозрительного характера от нашего имени с похожих на наши либо иных реквизитов, воздержитесь от выполнения указанных там требований и сообщите о произошедшем в нашу <a href="/appeal">службу поддержки</a>
              </Typography>
              <Typography variant="body1">
                <br />
                С заботой о вашем финансовом благополучии.
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Footer;