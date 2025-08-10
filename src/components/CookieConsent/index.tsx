import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже принято решение о cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  const handleLearnMore = () => {
    navigate('/cookies');
  };

  if (!showConsent) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: { xs: '90%', sm: '80%', md: '600px' },
        maxWidth: '600px',
      }}
    >
      <Paper
        elevation={24}
        sx={{
          p: 3,
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(233, 187, 90, 0.3)',
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            color: 'rgb(233, 187, 90)',
            fontWeight: 600,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {t('cookieConsent.title')}
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.6,
            textAlign: 'center',
          }}
        >
          {t('cookieConsent.description')}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            onClick={handleAccept}
            sx={{
              background: 'linear-gradient(135deg, rgb(233, 187, 90) 0%, rgb(255, 215, 0) 100%)',
              color: '#000',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              px: 3,
              py: 1.5,
              borderRadius: 2,
              minWidth: { xs: '100%', sm: 'auto' },
              '&:hover': {
                background: 'linear-gradient(135deg, rgb(255, 215, 0) 0%, rgb(233, 187, 90) 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(233, 187, 90, 0.4)',
              },
            }}
          >
            {t('cookieConsent.accept')}
          </Button>

          <Button
            variant="outlined"
            onClick={handleDecline}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              px: 3,
              py: 1.5,
              borderRadius: 2,
              minWidth: { xs: '100%', sm: 'auto' },
              '&:hover': {
                borderColor: 'rgb(233, 187, 90)',
                color: 'rgb(233, 187, 90)',
                backgroundColor: 'rgba(233, 187, 90, 0.1)',
              },
            }}
          >
            {t('cookieConsent.decline')}
          </Button>

          <Button
            variant="text"
            onClick={handleLearnMore}
            sx={{
              color: 'rgb(233, 187, 90)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              px: 3,
              py: 1.5,
              borderRadius: 2,
              minWidth: { xs: '100%', sm: 'auto' },
              textDecoration: 'underline',
              '&:hover': {
                backgroundColor: 'rgba(233, 187, 90, 0.1)',
                textDecoration: 'none',
              },
            }}
          >
            {t('cookieConsent.learnMore')}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default CookieConsent;
