import React, { useState } from 'react';
import Container from '../components/containers/container'
import { Box, TextField, Button, Alert, InputAdornment } from '@mui/material';
import { Email, Person, Subject } from '@mui/icons-material';
import DrawerAppBar from '../components/header';
import logo from '../assets/image.png';
import '../assets/styles/containers.css';

const AppealPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при вводе
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Тема обязательна';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Сообщение обязательно';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Здесь будет отправка данных на сервер
      console.log('Форма отправлена:', formData);
      setIsSubmitted(true);
      
      // Очищаем форму после успешной отправки
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Через 5 секунд скрываем сообщение об успехе
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <>
      <DrawerAppBar />
        <Container className='text-rules container-form'>
          <div className='container-head' style={{ border: "none"}}>
            <Box 
              component="img"
              className='logo-container-head'
              src={logo}
              alt="Логотип"
              sx={{ 
                height: 52,
              }}
            />
            <h3 className="cosmic-title" style={{ fontSize: "22px", marginTop: "28px" }}>
              Обращение в поддержку
            </h3> 
          </div>
        </Container>
      <div className='form'>
        <Container>
            <h3 className="cosmic-title" style={{ fontSize: "22px", marginTop: "28px", marginLeft: "20px" }}>
              Форма обращение
            </h3> 
            <div style={{textAlign:"start", width:"100%", marginLeft: "20px"}}>
                <p>Опишите вашу проблему или вопрос, и мы обязательно вам поможем.</p> 
            </div>
            {isSubmitted && (
              <Alert 
                severity="success" 
                sx={{ 
                  mb: 3,
                  backgroundColor: '#2e7d32',
                  color: 'white'
                }}
              >
                Ваше обращение успешно отправлено! Мы свяжемся с вами в ближайшее время.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Ваше имя"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: '#8076d4' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#8076d4',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0037ffff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0037ffff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#8076d4',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: '#8076d4' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#8076d4',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0037ffff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0037ffff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#8076d4',
                  },
                }}
              />

              <TextField
                fullWidth
                label="ID операции"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                error={!!errors.subject}
                helperText={errors.subject}
                margin="normal"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Subject sx={{ color: '#8076d4' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#8076d4',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0037ffff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0037ffff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#8076d4',
                  },
                }}
              />

              <TextField
                fullWidth
                label="Сообщение"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                error={!!errors.message}
                helperText={errors.message}
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#8076d4',
                    },
                    '&:hover fieldset': {
                      borderColor: '#0037ffff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0037ffff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#8076d4',
                  },
                }}
              />
                <div style={{display:'flex', justifyContent: "center", width: "100%", marginTop: "20px", marginBottom: "20px"}}>
                    <Button
                        className='btn-form'
                        type="submit"
                    >
                        Отправить обращение
                    </Button>
                </div>
            </Box>
        </Container>
      </div>
    </>
  );
};

export default AppealPage;