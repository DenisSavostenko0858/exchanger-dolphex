import React, { useState } from 'react';
import DrawerAppBar from '../components/header';
import Container from '../components/containers/container';
import Box from '@mui/material/Box';
import {
  Card,
  CardContent,
  Typography,
  Pagination,
  useTheme,
  useMediaQuery,
  Button,
  Modal,
  Fade,
  Backdrop,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/image.png';
import { newsData } from '../data/newsData';
import '../App.css';

const ITEMS_PER_PAGE = 8;

function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState<typeof newsData[0] | null>(null);
  const [openModal, setOpenModal] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const groupNews = (news: typeof newsData) => {
    const groups = [];
    for (let i = 0; i < news.length; i += 2) {
      groups.push(news.slice(i, i + 2));
    }
    return groups;
  };

  const newsGroups = groupNews(currentNews);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (news: typeof newsData[0]) => {
    setSelectedNews(news);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedNews(null);
  };

  return (
    <>
      <DrawerAppBar />
      <div style={{ marginTop: "80px", minHeight: "calc(100vh - 160px)" }}>
        <Container className='text-rules'>
          <div className='container-head' style={{ border: "none" }}>
            <Box 
              component="img"
              className='logo-container-head'
              src={logo}
              alt="Логотип"
              sx={{ height: 52 }}
            />
            <h3 className="cosmic-title" style={{ fontSize: "22px", marginTop: "28px" }}>
              Новости
            </h3> 
          </div>
        </Container>
        <div style={{display: 'flex', justifyContent: 'center'}}>

        <div className='news-container'>
          <Container>
            {/* Группы новостей */}
            <div style={{ marginTop: '32px', marginBottom: '40px' }}>
              {newsGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="group" style={{ 
                  display: 'flex', 
                  gap: '24px', 
                  marginBottom: '32px',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>
                  {group.map((news) => (
                    <Card 
                      key={news.id}
                      sx={{ 
                        flex: '1 1 calc(50% - 12px)',
                        minWidth: isMobile ? '100%' : '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 6,
                        },
                        borderRadius: 2,
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <CardContent sx={{ 
                        flexGrow: 1, 
                        p: 3, 
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'space-between' // Это обеспечит прижатие кнопки к низу
                      }}>
                        <Box>
                          <Typography 
                            gutterBottom 
                            variant="h6" 
                            component="h3"
                            sx={{ 
                              fontWeight: 'bold',
                              mb: 2,
                              lineHeight: 1.3,
                              fontSize: '1.1rem',
                              color: 'black',
                            }}
                          >
                            {news.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              lineHeight: 1.6,
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              color: 'black',
                              mb: 2
                            }}
                          >
                            {news.description}
                          </Typography>
                        </Box>
                        
                        {/* Кнопка Подробно - всегда внизу */}
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'flex-start', // Выравнивание по левому краю
                          mt: 'auto', // Прижимает к низу
                          pt: 2 // Отступ сверху
                        }}>
                          <Button
                            variant="outlined"
                            onClick={() => handleOpenModal(news)}
                            sx={{
                              color: '#00ff88',
                              borderColor: '#00ff88',
                              '&:hover': {
                                borderColor: '#00ff88',
                                backgroundColor: 'rgba(0, 255, 136, 0.1)'
                              }
                            }}
                          >
                            Подробно
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>

            {/* Пагинация */}
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiPaginationItem-root': {
                      borderRadius: 2,
                      fontWeight: 'bold',
                      color: 'white',
                      '&.Mui-selected': {
                        backgroundColor: '#00ff88',
                        color: '#000'
                      }
                    }
                  }}
                />
              </Box>
            )}
          </Container>
        </div>
        </div>

        {/* Модальное окно */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModal}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: isMobile ? '90%' : '600px',
              maxWidth: '90vw',
              maxHeight: '80vh',
              bgcolor: '#1a1a1a',
              border: '2px solid #00ff88',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              overflow: 'auto',
              color: 'white'
            }}>
              <IconButton
                aria-label="close"
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: '#00ff88'
                }}
              >
                <CloseIcon />
              </IconButton>
              
              {selectedNews && (
                <>
                  <Typography variant="h4" component="h2" sx={{ 
                    mb: 3, 
                    color: '#00ff88',
                    fontWeight: 'bold'
                  }}>
                    {selectedNews.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ 
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    {selectedNews.description}
                  </Typography>

                  {selectedNews.image && (
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                      <img 
                        src={selectedNews.image} 
                        alt={selectedNews.title}
                        style={{ 
                          maxWidth: '100%', 
                          borderRadius: '8px',
                          maxHeight: '300px',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  )}
                </>
              )}
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export default NewsPage;