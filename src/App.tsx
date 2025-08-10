import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import './i18/config';

import Layout from './components/Layout';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/home';
import JoinPage from './pages/join';
import ContactsPage from './pages/contacts';
import RulesPage from './pages/rules';
import CookiesPage from './pages/cookies';
import PrivacyPage from './pages/privacy';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(233, 187, 90)',
    },
    secondary: {
      main: 'rgb(233, 187, 90)',
    },
    background: {
      default: '#000000',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 900,
      letterSpacing: '0.1em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: 8,
          fontWeight: 600,
          letterSpacing: '0.1em',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          'input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset !important',
            WebkitTextFillColor: 'white !important',
            backgroundColor: 'rgba(0, 0, 0, 0.8) !important',
          },
          'input:-webkit-autofill:focus': {
            WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset !important',
            WebkitTextFillColor: 'white !important',
            backgroundColor: 'rgba(0, 0, 0, 0.8) !important',
          },
          'input:-webkit-autofill:hover': {
            WebkitBoxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.8) inset !important',
            WebkitTextFillColor: 'white !important',
            backgroundColor: 'rgba(0, 0, 0, 0.8) !important',
          },
        }}
      />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Layout>
        <CookieConsent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
