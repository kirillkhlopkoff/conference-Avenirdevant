import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const CookiesPage: React.FC = () => {
  const { t } = useTranslation();

  const cookieTypes = [
    {
      key: 'essential',
      title: t('cookies.types.essential.title'),
      description: t('cookies.types.essential.description'),
    },
    {
      key: 'analytics',
      title: t('cookies.types.analytics.title'),
      description: t('cookies.types.analytics.description'),
    },
    {
      key: 'preference',
      title: t('cookies.types.preference.title'),
      description: t('cookies.types.preference.description'),
    },
    {
      key: 'advertising',
      title: t('cookies.types.advertising.title'),
      description: t('cookies.types.advertising.description'),
    },
  ];

  const browserGuides = [
    { name: 'Chrome', link: 'https://support.google.com/chrome/answer/95647' },
    { name: 'Firefox', link: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop' },
    { name: 'Edge', link: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
    { name: 'Safari', link: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(135deg, #ffffff 0%, rgb(233, 187, 90) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('cookies.title')}
          </Typography>
        </Box>

        <Card
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(233, 187, 90, 0.2)',
            mb: 4,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 4, lineHeight: 1.6 }}>
              {t('cookies.overview')}
            </Typography>

            {/* What Are Cookies */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                {t('cookies.whatAreCookies.title')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}>
                {t('cookies.whatAreCookies.description')}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: 'rgba(233, 187, 90, 0.3)', my: 4 }} />

            {/* Types of Cookies */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
                {t('cookies.types.title')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {cookieTypes.map((type) => (
                  <Box key={type.key} sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ color: 'rgb(233, 187, 90)', mb: 1, fontWeight: 600 }}>
                      {type.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}>
                      {type.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ borderColor: 'rgba(233, 187, 90, 0.3)', my: 4 }} />

            {/* Why We Use Cookies */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                {t('cookies.whyWeUse.title')}
              </Typography>
              <List sx={{ pl: 0 }}>
                {(t('cookies.whyWeUse.reasons', { returnObjects: true }) as string[]).map((reason, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                    <ListItemText
                      primary={reason}
                      sx={{
                        '& .MuiListItemText-primary': {
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: 1.6,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Divider sx={{ borderColor: 'rgba(233, 187, 90, 0.3)', my: 4 }} />

            {/* Managing Cookie Preferences */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                {t('cookies.managing.title')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 3, lineHeight: 1.6 }}>
                {t('cookies.managing.description')}
              </Typography>
              
              <Typography variant="h6" sx={{ color: 'rgb(233, 187, 90)', mb: 2, fontWeight: 600 }}>
                {t('cookies.managing.guides.title')}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {browserGuides.map((browser) => (
                  <Box
                    key={browser.name}
                    component="a"
                    href={browser.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgb(233, 187, 90)',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      border: '1px solid rgba(233, 187, 90, 0.3)',
                      borderRadius: 1,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(233, 187, 90, 0.1)',
                        borderColor: 'rgba(233, 187, 90, 0.6)',
                      },
                    }}
                  >
                    {browser.name}
                  </Box>
                ))}
              </Box>
            </Box>

            <Divider sx={{ borderColor: 'rgba(233, 187, 90, 0.3)', my: 4 }} />

            {/* Policy Updates */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                {t('cookies.updates.title')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}>
                {t('cookies.updates.description')}
              </Typography>
            </Box>

            <Divider sx={{ borderColor: 'rgba(233, 187, 90, 0.3)', my: 4 }} />

            {/* Contact Us */}
            <Box>
              <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                {t('cookies.contact.title')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}>
                {t('cookies.contact.description')}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default CookiesPage;
