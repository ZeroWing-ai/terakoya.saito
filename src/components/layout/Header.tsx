import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';

const Header = () => {
  return (
    <header css={headerStyle}>
      <div css={headerContent}>
        <h1 css={logoStyle}>
          <Link to="/">てらこや</Link>
        </h1>
        <nav css={navStyle}>
          <ul css={navList}>
            <li><Link to="/">ホーム</Link></li>
            <li><a href="#about">てらこやとは</a></li>
            <li><a href="#activities">活動内容</a></li>
            <li><a href="#staff">スタッフ</a></li>
            <li><Link to="/game">ミニゲーム</Link></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = css`
  background-color: ${colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const headerContent = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logoStyle = css`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${colors.darkGreen};
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const navStyle = css`
  @media (max-width: 768px) {
    display: none;
  }
`;

const navList = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  
  a {
    text-decoration: none;
    color: ${colors.text};
    font-weight: 500;
    transition: color 0.2s;
    
    &:hover {
      color: ${colors.darkGreen};
    }
  }
`;

export default Header;
