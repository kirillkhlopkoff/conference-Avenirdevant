import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const JoinPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = t('join.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('join.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('join.emailInvalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('join.phoneRequired');
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Здесь будет логика отправки формы
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
    // Очищаем ошибку при вводе
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Grid container justifyContent="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(233, 187, 90, 0.2)',
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2rem', md: '3rem' },
                      fontWeight: 700,
                      mb: 2,
                      background: 'linear-gradient(135deg, #ffffff 0%, rgb(233, 187, 90) 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {t('join.title')}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      mb: 4,
                    }}
                  >
                    {t('join.subtitle')}
                  </Typography>
                </Box>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('join.name')}
                        value={formData.name}
                        onChange={handleChange('name')}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            '& fieldset': {
                              borderColor: 'rgba(233, 187, 90, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(233, 187, 90, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'rgb(233, 187, 90)',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(233, 187, 90, 0.8)',
                          },
                          '& .MuiInputBase-input': {
                            color: 'white',
                            '&:-webkit-autofill': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                            '&:-webkit-autofill:focus': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                            '&:-webkit-autofill:hover': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                          },
                          '& .MuiFormHelperText-root': {
                            color: 'rgba(233, 187, 90, 0.8)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('join.email')}
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            '& fieldset': {
                              borderColor: 'rgba(233, 187, 90, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(233, 187, 90, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'rgb(233, 187, 90)',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(233, 187, 90, 0.8)',
                          },
                          '& .MuiInputBase-input': {
                            color: 'white',
                            '&:-webkit-autofill': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                            '&:-webkit-autofill:focus': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                            '&:-webkit-autofill:hover': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                          },
                          '& .MuiFormHelperText-root': {
                            color: 'rgba(233, 187, 90, 0.8)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label={t('join.phone')}
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            '& fieldset': {
                              borderColor: 'rgba(233, 187, 90, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(233, 187, 90, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'rgb(233, 187, 90)',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(233, 187, 90, 0.8)',
                          },
                          '& .MuiInputBase-input': {
                            color: 'white',
                            '&:-webkit-autofill': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                            '&:-webkit-autofill:focus': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                            '&:-webkit-autofill:hover': {
                              WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset',
                              WebkitTextFillColor: 'white',
                            },
                          },
                          '& .MuiFormHelperText-root': {
                            color: 'rgba(233, 187, 90, 0.8)',
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 4,
                      py: 2,
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgb(233, 187, 90) 0%, rgb(255, 215, 0) 100%)',
                      color: '#000',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgb(255, 215, 0) 0%, rgb(233, 187, 90) 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(233, 187, 90, 0.3)',
                      },
                    }}
                  >
                    {t('join.submit')}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinPage;
