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
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const RulesPage: React.FC = () => {
  const { t } = useTranslation();

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
            {t('rules.title')}
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
            <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
              {t('rules.title')}
            </Typography>
            
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 4, lineHeight: 1.6, fontSize: '1.1rem' }}>
              {t('rules.description')}
            </Typography>
            
            <List sx={{ pl: 0 }}>
              {(t('rules.items', { returnObjects: true }) as string[]).map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1, alignItems: 'flex-start' }}>
                  <ListItemText
                    primary={item}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.6,
                        fontSize: '1rem',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default RulesPage;
