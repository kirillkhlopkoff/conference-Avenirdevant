import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    IconButton,
} from '@mui/material';
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import MapComponent from '../../components/Map';

const ContactsPage: React.FC = () => {
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
                        {t('nav.contacts')}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        {t('contacts.subtitle')}
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card
                            sx={{
                                height: '100%',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(233, 187, 90, 0.2)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    borderColor: 'rgba(233, 187, 90, 0.5)',
                                    boxShadow: '0 20px 40px rgba(233, 187, 90, 0.2)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <IconButton
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: 'rgba(233, 187, 90, 0.1)',
                                        mb: 2,
                                        color: 'rgb(233, 187, 90)',
                                        border: '2px solid rgba(233, 187, 90, 0.3)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(233, 187, 90, 0.2)',
                                            borderColor: 'rgba(233, 187, 90, 0.6)',
                                        },
                                    }}
                                >
                                    <EmailIcon sx={{ fontSize: '2rem' }} />
                                </IconButton>
                                <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                                    Email
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    {t('footer.contact.email')}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card
                            sx={{
                                height: '100%',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(233, 187, 90, 0.2)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    borderColor: 'rgba(233, 187, 90, 0.5)',
                                    boxShadow: '0 20px 40px rgba(233, 187, 90, 0.2)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <IconButton
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: 'rgba(233, 187, 90, 0.1)',
                                        mb: 2,
                                        color: 'rgb(233, 187, 90)',
                                        border: '2px solid rgba(233, 187, 90, 0.3)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(233, 187, 90, 0.2)',
                                            borderColor: 'rgba(233, 187, 90, 0.6)',
                                        },
                                    }}
                                >
                                    <PhoneIcon sx={{ fontSize: '2rem' }} />
                                </IconButton>
                                <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                                    Phone
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    {t('footer.contact.phone')}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card
                            sx={{
                                height: '100%',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(233, 187, 90, 0.2)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    borderColor: 'rgba(233, 187, 90, 0.5)',
                                    boxShadow: '0 20px 40px rgba(233, 187, 90, 0.2)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <IconButton
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: 'rgba(233, 187, 90, 0.1)',
                                        mb: 2,
                                        color: 'rgb(233, 187, 90)',
                                        border: '2px solid rgba(233, 187, 90, 0.3)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(233, 187, 90, 0.2)',
                                            borderColor: 'rgba(233, 187, 90, 0.6)',
                                        },
                                    }}
                                >
                                    <LocationIcon sx={{ fontSize: '2rem' }} />
                                </IconButton>
                                <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                                    Location
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                                    Perpignan, France
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Карта */}
                <Box sx={{ mt: 8 }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 700,
                            mb: 4,
                            textAlign: 'center',
                            background: 'linear-gradient(135deg, #ffffff 0%, rgb(233, 187, 90) 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {t('contacts.location')}
                    </Typography>
                    <MapComponent
                        latitude={42.6547902}
                        longitude={2.9469962}
                        title="AVENIRDEVANT 2025"
                        description="Perpignan, France"
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default ContactsPage;
