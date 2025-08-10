import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '2500+', label: t('about.stats.participants') },
    { number: '70+', label: t('about.stats.companies') },
    { number: '15+', label: t('about.stats.nominations') },
    { number: '20+', label: t('about.stats.speakers') },
  ];

  const images = [
    { src: '/img/about-1.jpg', alt: 'About 1' },
    { src: '/img/about-3.jpg', alt: 'About 3' },
    { src: '/img/about-2.webp', alt: 'About 2' },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Звездный фон */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            radial-gradient(1px 1px at 25px 5px, #ffffff, transparent),
            radial-gradient(1px 1px at 50px 25px, #ffffff, transparent),
            radial-gradient(1px 1px at 125px 20px, #ffffff, transparent),
            radial-gradient(1px 1px at 50px 75px, #ffffff, transparent),
            radial-gradient(1px 1px at 100px 50px, #ffffff, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 100px',
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Левая часть - статистика */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  mb: 2,
                  background: 'linear-gradient(135deg, #ffffff 0%, rgb(233, 187, 90) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {t('about.title')}
              </Typography>
              <Typography
                variant="h2"
                component="h3"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 900,
                  mb: 4,
                  background: 'linear-gradient(135deg, rgb(233, 187, 90) 0%, rgb(255, 215, 0) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {t('about.subtitle')}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 6,
                }}
              >
                {t('about.description')}
              </Typography>
            </Box>

            {/* Статистика */}
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid key={index} size={{ xs: 6, sm: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        fontWeight: 900,
                        color: '#ffffff',
                        mb: 1,
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Правая часть - изображения */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {images.map((image, index) => (
                <Grid key={index} size={{ xs: 12, sm: 4 }}>
                  <Card
                    sx={{
                      height: 200,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-10px) scale(1.02)',
                        borderColor: 'rgba(233, 187, 90, 0.5)',
                        boxShadow: '0 20px 40px rgba(233, 187, 90, 0.2)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100%"
                      image={image.src}
                      alt={image.alt}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
