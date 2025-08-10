import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'rules', path: '/rules' },
    { key: 'cookies', path: '/cookies' },
    { key: 'privacy', path: '/privacy' },
    { key: 'contacts', path: '/contacts' },
    { key: 'join', path: '/join' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        color: 'white',
        py: 6,
        mt: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Копирайт */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="body2" color="text.secondary">
              {t('footer.copyright')}
            </Typography>
          </Grid>

          {/* Навигация */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
              {t('footer.navigation')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  onClick={() => navigate(item.path)}
                  sx={{
                    textDecoration: 'none',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'rgb(233, 187, 90)',
                    },
                  }}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Контакты */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
              {t('footer.contact.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: 'rgb(233, 187, 90)', fontSize: '1.2rem' }} />
                <Link
                  href={`mailto:${t('footer.contact.email')}`}
                  color="text.secondary"
                  sx={{ 
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'rgb(233, 187, 90)',
                    },
                  }}
                >
                  {t('footer.contact.email')}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: 'rgb(233, 187, 90)', fontSize: '1.2rem' }} />
                <Link
                  href={`tel:${t('footer.contact.phone')}`}
                  color="text.secondary"
                  sx={{ 
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'rgb(233, 187, 90)',
                    },
                  }}
                >
                  {t('footer.contact.phone')}
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
