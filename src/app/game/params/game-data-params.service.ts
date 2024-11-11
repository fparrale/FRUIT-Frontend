import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDataParamsService {
 private gameData: any;

  setGameData(data: any) {
    this.gameData = data;
  }

  getGameData() {
    return this.gameData;
  }

  setGameDataLocalStorage(data: any) {
    localStorage.setItem('gameData', JSON.stringify(data));
  }

  getGameDataLocalStorage() {
    const data = localStorage.getItem('gameData');
    if (data != null) {  
      return JSON.parse(data!);
    }else{
      return null;
    }
  }

  clearGameDataLocalStorage() {
    localStorage.removeItem('gameData');
  }
}
