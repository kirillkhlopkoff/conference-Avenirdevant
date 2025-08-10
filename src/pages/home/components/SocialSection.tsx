import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import {
  Email as EmailIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const SocialSection: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: InstagramIcon,
      href: 'https://instagram.com',
      color: 'rgb(233, 187, 90)',
      label: 'Instagram',
    },
    {
      icon: TelegramIcon,
      href: 'https://telegram.org',
      color: 'rgb(233, 187, 90)',
      label: 'Telegram',
    },
    {
      icon: YouTubeIcon,
      href: 'https://youtube.com',
      color: 'rgb(233, 187, 90)',
      label: 'YouTube',
    },
    {
      icon: EmailIcon,
      href: 'mailto:avenirdevant@info.com.fr',
      color: 'rgb(233, 187, 90)',
      label: 'Email',
    },
  ];

  return (
    <Box
      id="social"
      sx={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* YouTube видео на фоне - адаптированное по высоте */}
      <Box
        component="iframe"
        src="https://www.youtube.com/embed/HIvqw74pCFc?autoplay=1&mute=1&loop=1&playlist=HIvqw74pCFc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
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

      {/* Контент поверх всего */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 5 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 900,
              mb: 2,
              background: 'linear-gradient(135deg, #ffffff 0%, rgb(233, 187, 90) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '0 0 30px rgba(233, 187, 90, 0.5)',
            }}
          >
            {t('social.title')}
          </Typography>
          <Typography
            variant="h2"
            component="h3"
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 900,
              mb: 6,
              background: 'linear-gradient(135deg, rgb(233, 187, 90) 0%, rgb(255, 215, 0) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textShadow: '0 0 30px rgba(233, 187, 90, 0.5)',
            }}
          >
            {t('social.subtitle')}
          </Typography>

          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
            {socialLinks.map((social) => (
              <Grid key={social.label} size="auto">
                <IconButton
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: { xs: 80, md: 100 },
                    height: { xs: 80, md: 100 },
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    color: social.color,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-8px) scale(1.1)',
                      borderColor: social.color,
                      boxShadow: `0 15px 40px ${social.color}60`,
                    },
                  }}
                >
                  <social.icon sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialSection;
