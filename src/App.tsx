import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { globalStyles } from './styles/global';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import Google Fonts
const googleFonts = [
  'Inter:300,400,500,600,700',
  'Poppins:300,400,500,600,700',
  'JetBrains+Mono:400,500,600,700&display=swap'
].join('&family=');

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=${googleFonts}');
  
  /* Apply font-display: swap for better performance */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <style>{fontStyles}</style>
      <Router>
        <div css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: theme.colors.background,
        }}>
          <Header />
          <main css={{
            flex: 1,
            padding: `${theme.spacing[8]} ${theme.spacing[4]}`,
            maxWidth: theme.breakpoints['2xl'],
            margin: '0 auto',
            width: '100%',
            '@media (min-width: 600px)': {
              padding: `${theme.spacing[12]} ${theme.spacing[8]}`,
            },
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App
