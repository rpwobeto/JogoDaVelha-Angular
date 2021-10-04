import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: String = '0';
  winner: String = '';
  board: String[][] = [
    ['', '', '',],
    ['', '', '',],
    ['', '', '',]
  ];
  
  processPlay (line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == ''){
      this.board[line][col] = this.currentPlayer;
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }
      if (this.currentPlayer == '0'){
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = '0';
      }
    }
  }

  checkWinner(player: String): boolean {
    for (let i = 0; i < this.board.length; i++){
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player){
        return true;
      }
    }
    for (let i = 0; i < this.board.length; i++){
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player){
        return true;
      }
      if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player){
        return true;
      }
      if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player){
        return true;
      }
    }
    return false;
  }

  reset(){
    this.currentPlayer = '0',
    this.winner = '',
    this.board = [
    ['', '', '',],
    ['', '', '',],
    ['', '', '',]
    ];
  }


}
