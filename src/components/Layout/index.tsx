import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000',
        color: 'white',
        position: 'relative',
      }}
    >
      {/* Звездный фон для всего сайта */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            radial-gradient(3px 3px at 20px 30px, #ffffff, transparent),
            radial-gradient(4px 4px at 40px 70px, #ffffff, transparent),
            radial-gradient(2px 2px at 90px 40px, #ffffff, transparent),
            radial-gradient(2px 2px at 130px 80px, #ffffff, transparent),
            radial-gradient(3px 3px at 160px 30px, #ffffff, transparent),
            radial-gradient(2px 2px at 200px 120px, #ffffff, transparent),
            radial-gradient(4px 4px at 250px 80px, #ffffff, transparent),
            radial-gradient(2px 2px at 300px 150px, #ffffff, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 200px',
          opacity: 0.2,
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          pt: 8, // Отступ для фиксированного header
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
