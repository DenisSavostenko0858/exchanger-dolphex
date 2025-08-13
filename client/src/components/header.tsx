import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styles from '../assets/styles/styles.module.css';
import logo from '../assets/image.png'; 

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'Новости', path: '/news' },
  { name: 'Отзывы', path: '/reviews' },
  { name: 'Обращения', path: '/appeal' },
  { name: 'Правила📕', path: '/rules' }
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box 
        component={Link}
        to="/"
        sx={{ display: 'inline-block' }}
      >
        <Box 
          component="img"
          src={logo}
          alt="Логотип"
          sx={{ 
            height: 44, marginTop: "15px" 
          }}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link}
              to={item.path}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box className={styles.containerHeaderButtons} 
        sx={{
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          width: "140px", 
          borderTop: "1px solid white", 
          marginTop: "10px", 
          paddingTop: "20px"
        }}>
          <Button
            component={Link}
            to="/login"
            sx={{width: "100%"}}
            className={`${styles.headerBtn} ${styles.loginBtn}`}>
            Войти
          </Button>
          <Button
            component={Link}
            to="/register" 
            sx={{width: "100%"}} 
            className={`${styles.headerBtn} ${styles.registerBtn}`}>
            Регистрация
          </Button>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className={styles.headerContainer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
            component={Link}
            to="/"
            sx={{ 
              display: { xs: 'none', md: 'block' },
              flexGrow: 1,
              marginRight: "10px"
            }}
          >
            <Box 
              component="img"
              src={logo}
              alt="Логотип"
              sx={{ 
                height: 45,
                objectFit: 'contain' 
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item.name}
                component={Link}
                to={item.path}
                sx={{ color: '#fff' }} 
                className={styles.headerLink}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box 
            component={Link}
            to="/"
            sx={{ 
              height: 44 
            }}
            className={styles.logoMob}
          >
          <Box 
              component="img"
              src={logo}
              alt="Логотип"
              sx={{ height: '100%' }}
          />
          </Box>
          <Box className={`${styles.containerHeaderButtons} ${styles.containerHeaderButtonsMob}`}>
            <Button component={Link} to="/login" className={`${styles.headerBtn} ${styles.loginBtn}`}>Войти</Button>
            <Button component={Link} to="/register" className={`${styles.headerBtn} ${styles.registerBtn}`}>Регистрация</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' }, // Изменено с sm на md
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth, 
              background: "rgba(5, 10, 30, 0.8) !important", 
              color: "white" 
            },
          }} 
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}