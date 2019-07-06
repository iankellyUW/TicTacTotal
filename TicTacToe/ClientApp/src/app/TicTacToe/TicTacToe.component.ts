import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe-component',
  templateUrl: './TicTacToe.component.html'
})
export class TicTacToeComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
