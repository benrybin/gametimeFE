import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/Services/game.service';
import { Game } from 'src/app/Class/game';
@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.css']
})
export class SearchGameComponent implements OnInit {
game:Game;
  constructor(private gameService:GameService) {
    

   }

  ngOnInit(): void {
  }
  onSubmit(title:String){
    this.gameService.searchGame(title)
  }

}
