import { css } from '@emotion/react';
import { colors } from '../../constants/colors';

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <div css={footerContent}>
        <div css={footerSection}>
          <h3 css={footerHeading}>てらこや</h3>
          <p>まなびは どこでも だれとでも</p>
        </div>
        
        <div css={footerSection}>
          <h4 css={footerSubHeading}>メニュー</h4>
          <ul css={footerList}>
            <li><a href="#about">てらこやとは</a></li>
            <li><a href="#activities">活動内容</a></li>
            <li><a href="#staff">スタッフ紹介</a></li>
            <li><a href="/game">ミニゲーム</a></li>
          </ul>
        </div>
        
        <div css={footerSection}>
          <h4 css={footerSubHeading}>お問い合わせ</h4>
          <p>質問やご相談はお気軽に</p>
          <div css={socialLinks}>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LINE">💬</a>
          </div>
        </div>
      </div>
      
      <div css={copyright}>
        <p>© {new Date().getFullYear()} てらこや All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = css`
  background-color: ${colors.lightBeige};
  padding: 3rem 1rem 1rem;
  margin-top: 3rem;
`;

const footerContent = css`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const footerSection = css`
  h3, h4 {
    color: ${colors.darkGreen};
    margin-bottom: 1rem;
  }
  
  p {
    margin: 0.5rem 0;
  }
`;

const footerHeading = css`
  font-size: 1.5rem;
  font-weight: 700;
`;

const footerSubHeading = css`
  font-size: 1.1rem;
  font-weight: 600;
`;

const footerList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: ${colors.text};
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: ${colors.darkGreen};
      text-decoration: underline;
    }
  }
`;

const socialLinks = css`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    font-size: 1.5rem;
    color: ${colors.darkGreen};
    transition: transform 0.2s;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const copyright = css`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  
  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${colors.text};
  }
`;

export default Footer;
