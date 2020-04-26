import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Class/game';
import { GameService } from 'src/app/Services/game.service';

@Component({
  selector: 'app-creategame',
  templateUrl: './creategame.component.html',
  styleUrls: ['./creategame.component.css']
})
export class CreategameComponent implements OnInit {
  newgame:Game;


  constructor(private gameService:GameService) { 
    this.newgame = new Game();
  }

  ngOnInit(): void {
  }
  onSubmit(){
    return this.gameService.addGame(this.newgame)

  }

}
