import { css } from '@emotion/react';
import { colors } from '../constants/colors';

const HomePage = () => {
  return (
    <div css={pageStyle}>
      {/* メインビジュアル */}
      <section css={heroSection}>
        <div css={heroContent}>
          <h1>まなびは どこでも だれとでも</h1>
          <p>子どもたちの「やってみたい」を大切にする学びの場</p>
          <div css={buttonGroup}>
            <a href="#about" css={[button, primaryButton]}>てらこやについて</a>
            <a href="#contact" css={[button, outlineButton]}>お問い合わせ</a>
          </div>
        </div>
      </section>

      {/* てらこやとは */}
      <section id="about" css={sectionStyle}>
        <div css={sectionContent}>
          <h2 css={sectionTitle}>てらこやとは</h2>
          <p css={sectionText}>
            てらこやは、子どもたちがのびのびと学び、遊び、成長できる場所です。
            年齢や地域を超えた交流を通じて、子どもたちの「やってみたい」を応援します。
            勉強だけでなく、自然体験やものづくり、地域の方々との交流など、
            さまざまな体験を通じて、子どもたちの可能性を広げます。
          </p>
          
          <div css={studentCountContainer}>
            <h3>2025年度 在籍人数</h3>
            <div css={studentCountGrid}>
              {[
                { grade: '1年生', count: 3, isTotal: false },
                { grade: '2年生', count: 4, isTotal: false },
                { grade: '3年生', count: 4, isTotal: false },
                { grade: '4年生', count: 3, isTotal: false },
                { grade: '5年生', count: 6, isTotal: false },
                { grade: '6年生', count: 4, isTotal: false },
                { grade: '合計', count: 24, isTotal: true }
              ].map((item, index) => (
                <div 
                  key={index} 
                  css={[
                    studentCountItem, 
                    ...(item.isTotal ? [totalCountItem] : [])
                  ]}
                >
                  <span>{item.grade}</span>
                  <span>{item.count}名</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 活動内容 */}
      <section id="activities" css={[sectionStyle, { backgroundColor: colors.lightBeige }]}>
        <div css={sectionContent}>
          <h2 css={sectionTitle}>活動内容</h2>
          <div css={activityGrid}>
            {activities.map((activity, index) => (
              <div key={index} css={activityCard}>
                <div css={activityIcon}>{activity.icon}</div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* スタッフ紹介 */}
      <section id="staff" css={sectionStyle}>
        <div css={sectionContent}>
          <h2 css={sectionTitle}>スタッフ紹介</h2>
          <div css={staffGrid}>
            {staffMembers.map((staff, index) => (
              <div key={index} css={staffCard}>
                <div css={staffImage}></div>
                <h3>{staff.name}</h3>
                <p>{staff.role}</p>
                <p css={staffMessage}>「{staff.message}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ミニゲーム紹介 */}
      <section css={[sectionStyle, { backgroundColor: colors.lightBeige }]}>
        <div css={sectionContent}>
          <h2 css={sectionTitle}>ミニゲームで遊ぼう！</h2>
          <div css={gameSection}>
            <div css={gameContent}>
              <h3>じゃんけんゲーム</h3>
              <p>てらこやのキャラクターとじゃんけん勝負！</p>
              <a href="/game" css={[button, primaryButton]}>遊んでみる</a>
            </div>
            <div css={gameImage}></div>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" css={sectionStyle}>
        <div css={sectionContent}>
          <h2 css={sectionTitle}>アクセス</h2>
          <div css={accessInfo}>
            <p>〒747-0041</p>
            <p>山口県防府市○○町1-2-3</p>
            <p>TEL: 0835-XX-XXXX</p>
            <p>営業時間: 10:00 - 18:00（月曜定休）</p>
          </div>
          <div css={mapContainer}>
            {/* 地図のプレースホルダー */}
            <div css={mapPlaceholder}>
              <p>Google Map が表示されます</p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" css={[sectionStyle, { backgroundColor: colors.lightBeige }]}>
        <div css={sectionContent}>
          <h2 css={sectionTitle}>お問い合わせ</h2>
          <div css={contactGrid}>
            <div css={contactInfo}>
              <h3>ご質問・ご相談はお気軽に</h3>
              <p>メールまたはお電話でお問い合わせください。</p>
              <p>メール: info@terakoya.example.com</p>
              <p>電話: 0835-XX-XXXX</p>
              <div css={socialIcons}>
                <a href="#" aria-label="Twitter">🐦 Twitter</a>
                <a href="#" aria-label="Instagram">📷 Instagram</a>
                <a href="#" aria-label="LINE">💬 LINE</a>
              </div>
            </div>
            <form css={contactForm}>
              <div css={formGroup}>
                <label htmlFor="name">お名前</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div css={formGroup}>
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div css={formGroup}>
                <label htmlFor="message">メッセージ</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" css={[button, primaryButton, { width: '100%' }]}>
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// 活動内容データ
const activities = [
  {
    icon: '📚',
    title: '学習支援',
    description: '学校の勉強から興味のあることまで、一人ひとりに合わせた学習サポートを行います。'
  },
  {
    icon: '🌳',
    title: '自然体験',
    description: '野外活動や農業体験を通じて、自然と触れ合う機会を提供します。'
  },
  {
    icon: '🎨',
    title: 'ものづくり',
    description: '工作やアートなど、創造力を育む活動を行っています。'
  },
  {
    icon: '🎭',
    title: 'イベント',
    description: '季節ごとのイベントや地域のお祭りに参加しています。'
  }
];

// スタッフデータ
const staffMembers = [
  {
    name: '山田 太郎',
    role: '代表',
    message: '子どもたちの「できた！」を大切にしています。'
  },
  {
    name: '鈴木 花子',
    role: '学習サポート',
    message: '一人ひとりの個性を伸ばせるようサポートします。'
  },
  {
    name: '佐藤 健太',
    role: '自然体験指導員',
    message: '自然の中での学びを一緒に楽しみましょう！'
  }
];

// スタイル
const pageStyle = css`
  width: 100%;
`;

const heroSection = css`
  background: linear-gradient(135deg, ${colors.softGreen}, ${colors.lightBlue});
  color: white;
  padding: 6rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (min-width: 768px) {
    padding: 8rem 1rem;
    
    h1 {
      font-size: 3.5rem;
    }
  }
`;

const heroContent = css`
  position: relative;
  z-index: 2;
`;

const buttonGroup = css`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const button = css`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const primaryButton = css`
  background-color: ${colors.darkGreen};
  color: white;
  
  &:hover {
    background-color: darken(${colors.darkGreen}, 10%);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const outlineButton = css`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const sectionStyle = css`
  padding: 4rem 1rem;
  
  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const sectionContent = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const sectionTitle = css`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${colors.darkGreen};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${colors.softGreen};
    margin: 1rem auto 0;
  }
`;

const sectionText = css`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 2rem;
  color: ${colors.text};
`;

const studentCountContainer = css`
  background-color: ${colors.lightBeige};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  h3 {
    text-align: center;
    color: ${colors.darkGreen};
    margin-bottom: 1.2rem;
    font-size: 1.3rem;
  }
`;

const studentCountGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const studentCountItem = css`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  
  span:first-of-type {
    font-weight: 500;
    margin-bottom: 0.3rem;
  }
  
  span:last-child {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${colors.softGreen};
  }
`;

const totalCountItem = css`
  grid-column: 1 / -1;
  background: ${colors.softGreen};
  color: white;
  
  span:last-child {
    color: white;
    font-size: 1.6rem;
  }
`;

const activityGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const activityCard = css`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin: 1rem 0;
    color: ${colors.darkGreen};
  }
  
  p {
    color: ${colors.text};
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const activityIcon = css`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const staffGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const staffCard = css`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  padding-bottom: 1.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    margin: 1rem 0 0.5rem;
    color: ${colors.darkGreen};
  }
  
  p {
    margin: 0.3rem 0;
    color: ${colors.text};
  }
`;

const staffImage = css`
  width: 100%;
  height: 250px;
  background-color: ${colors.lightBeige};
  margin-bottom: 1rem;
  background-size: cover;
  background-position: center;
`;

const staffMessage = css`
  font-style: italic;
  margin: 1rem 1.5rem 0 !important;
  padding-top: 1rem;
  border-top: 1px solid ${colors.lightBeige};
`;

const gameSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 4rem;
  }
`;

const gameContent = css`
  flex: 1;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${colors.darkGreen};
  }
  
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const gameImage = css`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background-color: ${colors.lightBlue};
  border-radius: 10px;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const accessInfo = css`
  text-align: center;
  margin-bottom: 2rem;
  
  p {
    margin: 0.5rem 0;
  }
`;

const mapContainer = css`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const mapPlaceholder = css`
  background-color: ${colors.lightBeige};
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.darkGreen};
  font-weight: 500;
`;

const contactGrid = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const contactInfo = css`
  h3 {
    color: ${colors.darkGreen};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.8;
  }
`;

const socialIcons = css`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: white;
    border-radius: 50px;
    color: ${colors.darkGreen};
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;

const contactForm = css`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const formGroup = css`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${colors.darkGreen};
  }
  
  input, textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${colors.softGreen};
      box-shadow: 0 0 0 2px rgba(168, 216, 185, 0.3);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

export default HomePage;
