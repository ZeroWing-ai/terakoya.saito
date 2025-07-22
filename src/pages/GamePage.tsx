import { useState, useEffect } from 'react';
import { css, keyframes } from '@emotion/react';
import type { CSSObject } from '@emotion/react';
import { Link } from 'react-router-dom';
import { colors } from '../constants/colors';

// じゃんけんの手の型
type Hand = 'rock' | 'paper' | 'scissors' | null;

// じゃんけんの結果の型
type Result = 'win' | 'lose' | 'draw' | null;

const GamePage = () => {
  const [playerHand, setPlayerHand] = useState<Hand>(null);
  const [computerHand, setComputerHand] = useState<Hand>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [accessMessage, setAccessMessage] = useState('');
  const [scores, setScores] = useState({
    player: 0,
    computer: 0,
    draw: 0,
    total: 0
  });

  // スコアをリセットする関数
  const resetScores = () => {
    setScores({
      player: 0,
      computer: 0,
      draw: 0,
      total: 0
    });
  };

  // 勝敗に応じてスコアを更新
  const updateScores = (gameResult: Result) => {
    setScores(prevScores => {
      const newScores = { ...prevScores, total: prevScores.total + 1 };
      
      switch (gameResult) {
        case 'win':
          newScores.player += 1;
          break;
        case 'lose':
          newScores.computer += 1;
          break;
        case 'draw':
          newScores.draw += 1;
          break;
      }
      
      return newScores;
    });
  };

  // アクセスカウントを増やすエフェクト
  useEffect(() => {
    // 3〜10秒ごとにランダムな地域からのアクセスを表示
    const regions = [
      '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
      '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
      '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
      '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
      '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
      '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
      '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
    ] as const;
    
    const interval = setInterval(() => {
      const randomRegion = regions[Math.floor(Math.random() * regions.length)];
      const newMessage = `${randomRegion}からアクセスがありました！`;
      setAccessMessage(newMessage);
      
      // 3秒後にメッセージをクリア
      setTimeout(() => {
        setAccessMessage('');
      }, 3000);
    }, Math.floor(Math.random() * 7000) + 3000);
    
    return () => clearInterval(interval);
  }, []);

  // じゃんけんの手を選ぶ
  const chooseHand = (hand: Hand) => {
    if (isAnimating) return;
    
    setPlayerHand(hand);
    setComputerHand(null);
    setResult(null);
    setGameStarted(true);
    setIsAnimating(true);
    setShowResult(false);
    
    // コンピュータの手をランダムに選ぶ（アニメーション用）
    const hands: Hand[] = ['rock', 'paper', 'scissors'];
    let count = 0;
    const interval = setInterval(() => {
      setComputerHand(hands[count % 3]);
      count++;
    }, 100);
    
    // アニメーション後に結果を表示
    setTimeout(() => {
      clearInterval(interval);
      const computerChoice = hands[Math.floor(Math.random() * 3)];
      setComputerHand(computerChoice);
      setIsAnimating(false);
      
      // 勝敗判定
      let gameResult: Result | null = null;
      if (hand === computerChoice) {
        gameResult = 'draw';
      } else if (
        (hand === 'rock' && computerChoice === 'scissors') ||
        (hand === 'scissors' && computerChoice === 'paper') ||
        (hand === 'paper' && computerChoice === 'rock')
      ) {
        gameResult = 'win';
      } else {
        gameResult = 'lose';
      }
      
      setResult(gameResult);
      updateScores(gameResult); // スコアを更新
      setShowResult(true);
    }, 1500);
  };

  // 手の画像を取得
  const getHandImage = (hand: Hand) => {
    switch (hand) {
      case 'rock':
        return '✊';
      case 'paper':
        return '✋';
      case 'scissors':
        return '✌️';
      default:
        return '❓';
    }
  };

  // 結果メッセージを取得
  const getResultMessage = () => {
    if (!showResult) return '';
    
    switch (result) {
      case 'win':
        return 'かち！ やったね！🎉';
      case 'lose':
        return 'まけちゃった... もういちど！';
      case 'draw':
        return 'あいこだよ！';
      default:
        return '';
    }
  };

  return (
    <div css={pageStyle}>
      <div css={container}>
        <h1 css={title}>じゃんけんゲーム</h1>
        <p css={subtitle}>てらこやのキャラクターとじゃんけん勝負！</p>
        
        <div css={scoreBoard}>
          <div css={scoreItem}>
            <span>あなたの勝ち</span>
            <span css={scoreNumber}>{scores.player}</span>
          </div>
          <div css={scoreItem}>
            <span>あいこ</span>
            <span css={scoreNumber}>{scores.draw}</span>
          </div>
          <div css={scoreItem}>
            <span>コンピュータの勝ち</span>
            <span css={scoreNumber}>{scores.computer}</span>
          </div>
          <div css={[scoreItem, { marginTop: '10px', borderTop: '1px solid #ddd', paddingTop: '10px' }]}>
            <span>対戦数</span>
            <span css={scoreNumber}>{scores.total}</span>
          </div>
          <button 
            onClick={resetScores}
            css={{
              marginTop: '10px',
              padding: '5px 10px',
              background: colors.lightBeige,
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              '&:hover': {
                background: colors.softGreen,
                color: 'white',
              }
            }}
          >
            スコアをリセット
          </button>
        </div>
        
        <div css={gameArea}>
          <div css={handArea}>
            <div css={handContainer}>
              <div css={handLabel}>あなたの手</div>
              <div css={[handDisplay, playerHand ? handAnimation : undefined].filter(Boolean) as unknown as CSSObject}>
                {playerHand ? getHandImage(playerHand) : '？'}
              </div>
            </div>
            
            <div css={vsText}>VS</div>
            
            <div css={handContainer}>
              <div css={handLabel}>コンピュータ</div>
              <div css={[handDisplay, computerHand ? handAnimation : handWaiting].filter(Boolean) as unknown as CSSObject}>
                {computerHand ? getHandImage(computerHand) : '？'}
              </div>
            </div>
          </div>
          
          {showResult && (
            <div css={[
              resultMessage,
              result === 'win' ? resultWin : undefined,
              result === 'lose' ? resultLose : undefined
            ].filter(Boolean) as unknown as CSSObject}>
              {getResultMessage()}
            </div>
          )}
          
          <div css={buttonContainer}>
            <button 
              css={[handButton, rockButton]} 
              onClick={() => chooseHand('rock')}
              disabled={isAnimating}
            >
              ✊ グー
            </button>
            <button 
              css={[handButton, paperButton]} 
              onClick={() => chooseHand('paper')}
              disabled={isAnimating}
            >
              ✋ パー
            </button>
            <button 
              css={[handButton, scissorsButton]} 
              onClick={() => chooseHand('scissors')}
              disabled={isAnimating}
            >
              ✌️ チョキ
            </button>
          </div>
          
          {!gameStarted && (
            <div css={instruction}>
              <p>ボタンを押してじゃんけんを始めよう！</p>
              <p>かてばスコアが1点アップ！</p>
            </div>
          )}
        </div>
        
        <div css={backLinkContainer}>
          <Link to="/" css={backLink}>← ホームに戻る</Link>
        </div>
        
        {accessMessage && (
          <div css={css`
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: ${colors.softGreen};
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: fadeIn 0.3s ease-in-out;
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}>
            🎉 {accessMessage}
          </div>
        )}
      </div>
    </div>
  );
};

// スタイル
const pageStyle = css`
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.lightBeige}, ${colors.lightBlue});
  padding: 2rem 1rem;
`;

const container = css`
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const title = css`
  text-align: center;
  color: ${colors.darkGreen};
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
`;

const subtitle = css`
  text-align: center;
  color: ${colors.text};
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const scoreBoard = css`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  background-color: ${colors.lightBeige};
  padding: 1rem;
  border-radius: 10px;
`;

const scoreItem = css`
  text-align: center;
  
  span {
    display: block;
    font-size: 0.9rem;
    color: ${colors.text};
  }
`;

const scoreNumber = css`
  font-size: 2rem !important;
  font-weight: bold;
  color: ${colors.darkGreen} !important;
  margin-top: 0.5rem;
`;

const gameArea = css`
  margin: 2rem 0;
`;

const handArea = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const handContainer = css`
  text-align: center;
  flex: 1;
`;

const handLabel = css`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${colors.darkGreen};
  font-weight: 500;
`;

const handAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const handDisplay = css`
  font-size: 5rem;
  background-color: white;
  border: 4px solid ${colors.softGreen};
  border-radius: 15px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${handAnimation} 0.5s ease-in-out;
`;

const handWaiting = css`
  background-color: ${colors.lightBeige};
  color: #ccc;
`;

const vsText = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.darkGreen};
  margin: 0 1rem;
`;

const resultMessage = css`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 10px;
  animation: ${handAnimation} 1s ease-in-out infinite;
`;

const resultWin = css`
  background-color: rgba(168, 216, 185, 0.3);
  color: ${colors.darkGreen};
`;

const resultLose = css`
  background-color: rgba(255, 154, 158, 0.3);
  color: #d32f2f;
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const handButtonBase = css`
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 600;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const handButton = css`
  ${handButtonBase}
  background-color: white;
  border: 2px solid ${colors.softGreen};
  color: ${colors.darkGreen};
  min-width: 120px;
`;

const rockButton = css`
  border-color: #FF9A9E;
  color: #d32f2f;
`;

const paperButton = css`
  border-color: #A8D8B9;
  color: ${colors.darkGreen};
`;

const scissorsButton = css`
  border-color: #B8E0F5;
  color: #1565c0;
`;

const instruction = css`
  text-align: center;
  margin: 2rem 0;
  color: ${colors.text};
  font-size: 1.1rem;
  
  p {
    margin: 0.5rem 0;
  }
`;

const backLinkContainer = css`
  text-align: center;
  margin-top: 2rem;
`;

const backLink = css`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: ${colors.lightBeige};
  color: ${colors.darkGreen};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${colors.softGreen};
    transform: translateY(-2px);
  }
`;

const accessMessage = css`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.darkGreen};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 100;
  animation: ${handAnimation} 1s ease-in-out;
`;

export default GamePage;
