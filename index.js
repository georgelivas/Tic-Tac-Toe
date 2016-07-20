class Board {
  static X = 'x';
  static O = 'O';

  constructor() {
    this.board = [
      [ null, null, null],
      [ null, null, null],
      [ null, null, null],
    ];
    this.currentPlayer = Board.X;
  }

  play(x, y) {
    if (this.board[x][y] === null) {
      this.board[x][y] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === Board.X ? Board.O : Board.X;
    }
  }

}

const bord = new Board();

board.firstPlay();
