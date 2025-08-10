import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Menu,
  MenuItem,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Language as LanguageIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null);

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'rules', path: '/rules' },
    { key: 'cookies', path: '/cookies' },
    { key: 'privacy', path: '/privacy' },
    { key: 'contacts', path: '/contacts' },
    { key: 'join', path: '/join' },
  ];

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setLanguageAnchor(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const drawerContent = (
    <Box sx={{ 
      width: 250, 
      backgroundColor: 'rgba(0, 0, 0, 0.95)', 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <List sx={{ flex: 1 }}>
        {/* Навигационные элементы */}
        {navigationItems.map((item) => (
          <ListItem
            key={item.key}
            onClick={() => handleNavigation(item.path)}
            sx={{ 
              cursor: 'pointer',
              backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }
            }}
          >
            <ListItemText 
              primary={t(`nav.${item.key}`)} 
              sx={{
                '& .MuiListItemText-primary': {
                  color: 'white',
                  fontWeight: 500,
                }
              }}
            />
          </ListItem>
        ))}
        
        {/* Разделитель */}
        <ListItem sx={{ py: 0 }}>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', my: 2 }} />
        </ListItem>
        
        {/* Смена языка */}
        <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 1,
              px: 2,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {t('header.language')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, px: 2 }}>
            <Button
              variant={i18n.language === 'fr' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => handleLanguageChange('fr')}
              sx={{
                color: i18n.language === 'fr' ? '#000' : 'rgb(233, 187, 90)',
                backgroundColor: i18n.language === 'fr' ? 'rgb(233, 187, 90)' : 'transparent',
                borderColor: 'rgb(233, 187, 90)',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                '&:hover': {
                  backgroundColor: i18n.language === 'fr' ? 'rgb(255, 215, 0)' : 'rgba(233, 187, 90, 0.1)',
                }
              }}
            >
              FR
            </Button>
            <Button
              variant={i18n.language === 'en' ? 'contained' : 'outlined'}
              size="small"
              onClick={() => handleLanguageChange('en')}
              sx={{
                color: i18n.language === 'en' ? '#000' : 'rgb(233, 187, 90)',
                backgroundColor: i18n.language === 'en' ? 'rgb(233, 187, 90)' : 'transparent',
                borderColor: 'rgb(233, 187, 90)',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                '&:hover': {
                  backgroundColor: i18n.language === 'en' ? 'rgb(255, 215, 0)' : 'rgba(233, 187, 90, 0.1)',
                }
              }}
            >
              EN
            </Button>
          </Box>
        </ListItem>
      </List>

      {/* Футер в боковом меню */}
      <Box sx={{ 
        p: 2, 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }}>
        {/* Контакты */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 1,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600,
            }}
          >
            {t('footer.contact.title')}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ color: 'rgb(233, 187, 90)', fontSize: '1rem' }} />
              <Link
                href={`mailto:${t('footer.contact.email')}`}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  '&:hover': {
                    color: 'rgb(233, 187, 90)',
                  },
                }}
              >
                {t('footer.contact.email')}
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ color: 'rgb(233, 187, 90)', fontSize: '1rem' }} />
              <Link
                href={`tel:${t('footer.contact.phone')}`}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  '&:hover': {
                    color: 'rgb(233, 187, 90)',
                  },
                }}
              >
                {t('footer.contact.phone')}
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Копирайт */}
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.7rem',
            display: 'block',
            textAlign: 'center',
          }}
        >
          {t('footer.copyright')}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Toolbar sx={{ minHeight: '80px', justifyContent: 'space-between' }}>
        {/* Логотип */}
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            cursor: 'pointer',
            fontWeight: 900,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, rgb(233, 187, 90) 50%, rgb(255, 215, 0) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
          onClick={() => navigate('/')}
        >
         AVENIRDEVANT 2025
        </Typography>

        {/* Центральная навигация - только на десктопе */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
          <Button
            color="inherit"
            onClick={() => scrollToSection('hero')}
            sx={{
              color: 'white',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('header.home')}
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection('about')}
            sx={{
              color: 'white',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('header.about')}
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection('tickets')}
            sx={{
              color: 'white',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('header.tickets')}
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection('social')}
            sx={{
              color: 'white',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {t('header.social')}
          </Button>
        </Box>

        {/* Правая часть - язык (только на десктопе) и бургер */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Смена языка - только на десктопе */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <IconButton
              color="inherit"
              onClick={(e) => setLanguageAnchor(e.currentTarget)}
              sx={{
                color: 'rgb(233, 187, 90)',
                '&:hover': {
                  backgroundColor: 'rgba(233, 187, 90, 0.1)',
                }
              }}
            >
              <LanguageIcon />
            </IconButton>

            <Menu
              anchorEl={languageAnchor}
              open={Boolean(languageAnchor)}
              onClose={() => setLanguageAnchor(null)}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              <MenuItem 
                onClick={() => handleLanguageChange('fr')}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Français
              </MenuItem>
              <MenuItem 
                onClick={() => handleLanguageChange('en')}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                English
              </MenuItem>
            </Menu>
          </Box>

          {/* Бургер-меню всегда видимо */}
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{
              color: 'rgb(233, 187, 90)',
              '&:hover': {
                backgroundColor: 'rgba(233, 187, 90, 0.1)',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
            }
          }}
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
