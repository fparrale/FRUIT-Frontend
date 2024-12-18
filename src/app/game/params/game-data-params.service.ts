import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDataParamsService {
 private gameData: any;
 private gameDataPractice: any;
 private gameResult: any = null;

  setGameData(data: any) {
    this.gameData = data;
  }

  setGameDataPractice(data: any) {
    this.gameDataPractice = data;
  }

  getGameData() {
    return this.gameData;
  }

  setGameDataLocalStorage(data: any) {
    localStorage.setItem('gameData', JSON.stringify(data));
  }

  setGamePracticeDataLocalStorage(data: any) {
    localStorage.setItem('gameDataPractice', JSON.stringify(data));
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

  removeGameRoomOptionLocalStorage() {
    localStorage.removeItem('gameOption');
  }

  getGameDataLocalStorage() {
    const data = localStorage.getItem('gameData');
    if (data != null) {  
      return JSON.parse(data!);
    }else{
      return null;
    }
  }

  getGamePracticeDataLocalStorage() {
    const data = localStorage.getItem('gameDataPractice');
    if (data != null) {  
      return JSON.parse(data!);
    }else{
      return null;
    }
  }

  clearGameDataLocalStorage() {
    localStorage.removeItem('gameData');
  }

  clearGameDataPractice(){
    localStorage.removeItem('gameDataPractice');
  }

  clearGamePracticeDataLocalStorage() {
    localStorage.removeItem('gameDataPractice');
  }

  setGameResult(result: any): void {
    this.gameResult = result;
  }

  getGameResult(): any {
    return this.gameResult;
  }
}
