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

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'general',
      title: t('privacy.general.title'),
      description: t('privacy.general.description'),
    },
    {
      key: 'information',
      title: t('privacy.information.title'),
      description: t('privacy.information.description'),
      items: t('privacy.information.items', { returnObjects: true }) as string[],
    },
    {
      key: 'usage',
      title: t('privacy.usage.title'),
      description: t('privacy.usage.description'),
      items: t('privacy.usage.items', { returnObjects: true }) as string[],
    },
    {
      key: 'protection',
      title: t('privacy.protection.title'),
      description: t('privacy.protection.description'),
    },
    {
      key: 'cookies',
      title: t('privacy.cookies.title'),
      description: t('privacy.cookies.description'),
    },
    {
      key: 'contact',
      title: t('privacy.contact.title'),
      description: t('privacy.contact.description'),
      email: t('privacy.contact.email'),
    },
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
            {t('privacy.title')}
          </Typography>
        </Box>

        <Card
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(233, 187, 90, 0.2)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {sections.map((section, index) => (
              <Box key={section.key}>
                <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                  {section.title}
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 3, lineHeight: 1.6 }}>
                  {section.description}
                </Typography>

                {section.items && (
                  <List sx={{ pl: 0, mb: 3 }}>
                    {section.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ px: 0, py: 0.5 }}>
                        <ListItemText
                          primary={item}
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
                )}

                {section.email && (
                  <Typography 
                    variant="body1" 
                    component="a"
                    href={`mailto:${section.email}`}
                    sx={{ 
                      color: 'rgb(233, 187, 90)', 
                      textDecoration: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {section.email}
                  </Typography>
                )}

                {index < sections.length - 1 && (
                  <Divider sx={{ borderColor: 'rgba(233, 187, 90, 0.3)', my: 4 }} />
                )}
              </Box>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default PrivacyPage;
