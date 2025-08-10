import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
      }}
    >
      {/* YouTube видео на фоне - адаптированное по высоте */}
      <Box
        component="iframe"
        src="https://www.youtube.com/embed/xp7lCcgS9Zo?autoplay=1&mute=1&loop=1&playlist=xp7lCcgS9Zo&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          transform: 'translate(-50%, -50%) scale(1.5, 1.5)',
          zIndex: 1,
          border: 'none',
          '@media (max-width: 768px)': {
            transform: 'translate(-50%, -50%) scale(2, 2)',
          },
          '@media (max-width: 480px)': {
            transform: 'translate(-50%, -50%) scale(2.5, 2.5)',
          },
        }}
        allow="autoplay; encrypted-media; picture-in-picture"
        frameBorder="0"
        title="Background Video"
      />

             {/* Градиентное затемнение сверху */}
       <Box
         sx={{
           position: 'absolute',
           top: 0,
           left: 0,
           width: '100%',
           height: '30%',
           background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)',
           zIndex: 2,
         }}
       />

       {/* Градиентное затемнение снизу */}
       <Box
         sx={{
           position: 'absolute',
           bottom: 0,
           left: 0,
           width: '100%',
           height: '30%',
           background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)',
           zIndex: 2,
         }}
       />

       {/* Центральное затемнение поверх видео */}
       <Box
         sx={{
           position: 'absolute',
           top: 0,
           left: 0,
           width: '100%',
           height: '100%',
           backgroundColor: 'rgba(0, 0, 0, 0.3)',
           zIndex: 3,
         }}
       />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 4 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 12, md: 10 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                  fontWeight: 900,
                  mb: 2,
                  background: 'linear-gradient(135deg, #ffffff 0%, rgb(233, 187, 90) 50%, rgb(255, 215, 0) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(233, 187, 90, 0.5)',
                  letterSpacing: '0.1em',
                }}
              >
                {t('hero.title')}
              </Typography>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  fontWeight: 900,
                  mb: 4,
                  background: 'linear-gradient(135deg, rgb(233, 187, 90) 0%, rgb(255, 215, 0) 50%, rgb(233, 187, 90) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(233, 187, 90, 0.5)',
                  letterSpacing: '0.1em',
                }}
              >
                {t('hero.subtitle')}
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                {t('hero.location')}
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  mb: 6,
                  maxWidth: 800,
                  mx: 'auto',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {t('hero.description')}
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/join')}
                sx={{
                  fontSize: '1.3rem',
                  px: 6,
                  py: 3,
                  borderRadius: 3,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  background: 'linear-gradient(135deg, rgb(233, 187, 90) 0%, rgb(255, 215, 0) 100%)',
                  color: '#000',
                  boxShadow: '0 10px 30px rgba(233, 187, 90, 0.3)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 40px rgba(233, 187, 90, 0.5)',
                    background: 'linear-gradient(135deg, rgb(255, 215, 0) 0%, rgb(233, 187, 90) 100%)',
                  },
                }}
              >
                {t('hero.buyTickets')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
