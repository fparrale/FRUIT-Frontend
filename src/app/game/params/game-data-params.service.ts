import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDataParamsService {
 private gameData: any;
 private gameResult: any = null;

  setGameData(data: any) {
    this.gameData = data;
  }

  getGameData() {
    return this.gameData;
  }

  setGameDataLocalStorage(data: any) {
    localStorage.setItem('gameData', JSON.stringify(data));
  }

  setGameRoomIdLocalStorage(roomId: string) {
    localStorage.setItem('gameRoomId', roomId);
  }

  getGameRoomIdLocalStorage() {
    return localStorage.getItem('gameRoomId');
  }

  removeGameRoomIdLocalStorage() {
    localStorage.removeItem('gameRoomId');
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

  setGameResult(result: any): void {
    this.gameResult = result;
  }

  getGameResult(): any {
    return this.gameResult;
  }
}
