import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { colors } from './constants/colors';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const theme = {
  colors,
  fonts: {
    main: '"M PLUS Rounded 1c", sans-serif',
    heading: '"M PLUS Rounded 1c", sans-serif',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${theme.fonts.main};
    color: ${colors.text};
    line-height: 1.6;
    background-color: ${colors.white};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Router>
        <div css={css`
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        `}>
          <Header />
          <main css={css`
            flex: 1;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          `}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
