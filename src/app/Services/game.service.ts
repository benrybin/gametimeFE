import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Game } from '../Class/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  response: Boolean;
  game:Game;
  private url = "http://localhost:8080/";
  constructor(private http:HttpClient) {
    
   }
   public addGame(game:Game){

    return this.http.post<Boolean>(this.url+"game/add",game).subscribe(response=> this.response = response)
   }
   public searchGame(title:String){
     return this.http.get<Game>(this.url+"game/search"+"?title="+title)
   }
}
