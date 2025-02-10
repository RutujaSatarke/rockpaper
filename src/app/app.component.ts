import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rockpaper';
  computer:string='';
  result:string='Make yor move';
  user_score:number=0;
  computer_score: number=0;

  play(user:string): void{
    const num = Math.random() * 100;

    if (num >= 0 && num <= 33) {
      this.computer = 'paper';
    } else if (num > 33 && num <= 66) {
      this.computer = 'rock';
    } else {
      this.computer = 'scissor';
    }
   
    if (user === this.computer) {
      this.result = "Game has been drawn";
    } else if (user === 'rock' && this.computer === 'paper') {
      this.result = "Computer has won";
      this.computer_score++;
    } else if (user === 'rock' && this.computer === 'scissor') {
      this.result = "You have won";
      this.user_score++;
    } else if (user === 'paper' && this.computer === 'scissor') {
      this.result = "Computer has won";
      this.computer_score++;
    } else if (user === 'paper' && this.computer === 'rock') {
      this.result = "You have won";
      this.user_score++;
    } else if (user === 'scissor' && this.computer === 'rock') {
      this.result = "Computer has won";
      this.computer_score++;
    } else if (user === 'scissor' && this.computer === 'paper') {
      this.result = "You have won";
      this.user_score++;
    }
  }

  
  resetGame(): void {
    this.user_score = 0;
    this.computer_score = 0;
    this.result = 'Make your move';
  }
}

    
  