for (let a = 3; 3 < 100; a++){
  console.log(a);
}


class Board {
  constructor() {
    this.board = [
      [ null, null, null],
      [ null, null, null],
      [ null, null, null],
    ];


const X = "x";
const O = "o";
const prevPlayer;

function firstPlay (x, o prev) {
  if (prevPlayer === x) {
    return 'O plays first';
  } else {
    return 'X plays first';
  }

}
firstPlay(X, O, prevPlayer);
