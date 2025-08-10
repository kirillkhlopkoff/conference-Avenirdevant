import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import { Check as CheckIcon, QrCode as QrCodeIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const TicketsSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const ticketTypes = [
    {
      type: 'standart',
      title: t('tickets.standart.title'),
      badge: t('tickets.standart.badge'),
      color: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      features: t('tickets.standart.features', { returnObjects: true }) as string[],
      buy: t('tickets.standart.buy'),
    },
    {
      type: 'vip',
      title: t('tickets.vip.title'),
      subtitle: t('tickets.vip.subtitle'),
      badge: t('tickets.vip.badge'),
      color: 'linear-gradient(135deg, rgb(184, 134, 11) 0%, rgb(233, 187, 90) 50%, rgb(255, 215, 0) 100%)',
      features: t('tickets.vip.features', { returnObjects: true }) as string[],
      buy: t('tickets.vip.buy'),
    },
    {
      type: 'deluxe',
      title: t('tickets.deluxe.title'),
      subtitle: t('tickets.deluxe.subtitle'),
      badge: t('tickets.deluxe.badge'),
      color: 'linear-gradient(135deg, rgb(184, 134, 11) 0%, rgb(233, 187, 90) 50%, rgb(255, 215, 0) 100%)',
      features: t('tickets.deluxe.features', { returnObjects: true }) as string[],
      buy: t('tickets.deluxe.buy'),
    },
  ];

  return (
    <Box
      id="tickets"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
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
            radial-gradient(1px 1px at 20px 30px, #ffffff, transparent),
            radial-gradient(1px 1px at 40px 70px, #ffffff, transparent),
            radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
            radial-gradient(1px 1px at 130px 80px, #ffffff, transparent),
            radial-gradient(1px 1px at 160px 30px, #ffffff, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px',
          opacity: 0.2,
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 900,
              mb: 2,
              background: 'linear-gradient(135deg, rgb(233, 187, 90) 0%, rgb(255, 215, 0) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {t('tickets.title')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 3,
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: '0.2em',
            }}
          >
            {t('tickets.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {ticketTypes.map((ticket) => (
            <Grid key={ticket.type} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  background: ticket.color,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-15px)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
                    borderColor: 'rgba(233, 187, 90, 0.5)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 'inherit',
                    zIndex: 1,
                  },
                }}
              >
                <CardContent
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    p: 4,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Badge */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Chip
                      label={ticket.badge}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}
                    />
                    <QrCodeIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.5rem' }} />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                      fontWeight: 900,
                      mb: 1,
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {ticket.title}
                  </Typography>
                  
                  {ticket.subtitle && (
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 3,
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {ticket.subtitle}
                    </Typography>
                  )}

                  {/* Features */}
                  <List sx={{ mb: 4, textAlign: 'left', flex: 1 }}>
                    {ticket.features.map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            '& .MuiListItemText-primary': {
                              color: 'white',
                              fontSize: '0.9rem',
                              lineHeight: 1.4,
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* Button - фиксированно внизу */}
                  <Box sx={{ mt: 'auto', pt: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate('/join')}
                      sx={{
                        width: '100%',
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#000',
                        border: '2px solid rgba(255, 255, 255, 0.9)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          backgroundColor: 'white',
                          transform: 'scale(1.05)',
                          boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)',
                        },
                      }}
                    >
                      {ticket.buy}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TicketsSection;
