import styles from './GameBoard.module.css';

type GameBoardProps = {
  rows: number;
  cols: number;
  children?: React.ReactNode;
};

const GameBoard: React.FC<GameBoardProps> = ({ rows, cols, children }) => {
  return (
    <div className={styles.gameBoard}>
      <div 
        className={styles.grid}
        style={{
          gridTemplateRows: `repeat(${rows}, 20px)`,
          gridTemplateColumns: `repeat(${cols}, 20px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GameBoard;