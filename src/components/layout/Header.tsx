import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../../theme';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { path: '/', label: 'ホーム' },
    { path: '#about', label: 'てらこやについて' },
    { path: '#programs', label: 'プログラム' },
    { path: '#schedule', label: 'スケジュール' },
    { path: '#access', label: 'アクセス' },
    { path: '#contact', label: 'お問い合わせ' },
  ];

  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: ${scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
        transition: all 0.3s ease-in-out;
        padding: ${scrolled ? '0.5rem 0' : '1rem 0'};
        backdrop-filter: blur(10px);
        border-bottom: 1px solid ${theme.colors.gray200};
        box-shadow: ${scrolled ? theme.shadows.md : 'none'};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        `}
      >
        <Link
          to="/"
          css={css`
            font-size: 1.5rem;
            font-weight: 700;
            color: ${theme.colors.primary};
            text-decoration: none;
            background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.3s ease;

            &:hover {
              opacity: 0.8;
            }
          `}
        >
          てらこや
        </Link>

        <button
          css={css`
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 32px;
            height: 24px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;

            @media (max-width: ${theme.breakpoints.lg}) {
              display: flex;
            }
          `}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-navigation"
        >
          <span
            css={css`
              width: 100%;
              height: 2px;
              background: ${theme.colors.gray700};
              border-radius: 2px;
              transition: all 0.3s ease-in-out;
              transform: ${mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
            `}
          />
          <span
            css={css`
              width: 100%;
              height: 2px;
              background: ${theme.colors.gray700};
              border-radius: 2px;
              transition: all 0.3s ease-in-out;
              opacity: ${mobileMenuOpen ? '0' : '1'};
            `}
          />
          <span
            css={css`
              width: 100%;
              height: 2px;
              background: ${theme.colors.gray700};
              border-radius: 2px;
              transition: all 0.3s ease-in-out;
              transform: ${mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
            `}
          />
        </button>
        
        <nav 
          id="main-navigation"
          aria-label="メインメニュー"
          css={css`
            @media (max-width: ${theme.breakpoints.lg}) {
              position: fixed;
              top: 0;
              right: ${mobileMenuOpen ? '0' : '-100%'};
              width: 70%;
              height: 100vh;
              background: white;
              padding: 6rem 2rem 2rem;
              transition: right 0.3s ease-in-out;
              box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
            }
          `}
        >
          <ul
            css={css`
              display: flex;
              list-style: none;
              margin: 0;
              padding: 0;
              gap: 1rem;

              @media (max-width: ${theme.breakpoints.lg}) {
                flex-direction: column;
                gap: 1.5rem;
              }
            `}
          >
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path || 
                             (location.pathname === '/' && item.path === '/');
              
              return (
                <li key={index}>
                  <Link 
                    to={item.path}
                    css={css`
                      color: ${isActive ? theme.colors.primary : theme.colors.gray700};
                      text-decoration: none;
                      font-weight: ${isActive ? '600' : '500'};
                      padding: 0.5rem 1rem;
                      border-radius: 4px;
                      transition: all 0.2s ease;
                      display: block;
                      
                      &:hover {
                        color: ${theme.colors.primary};
                        background: ${theme.colors.gray50};
                      }

                      @media (max-width: ${theme.breakpoints.lg}) {
                        font-size: 1.1rem;
                        padding: 0.75rem 1rem;
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
