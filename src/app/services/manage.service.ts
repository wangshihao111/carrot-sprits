import { Injectable } from '@angular/core';
import { Sprit } from 'src/app/interfaces/manage'

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  spritsList: Sprit[] = [];
  constructor() { }
  public getSpritList() {
    this.spritsList = [
      {
        title: '测试',
        content: '测试内容',
        createAt: '2020/10/19',
        lastUpdate: '2020/10/19',
      },
      {
        title: '测试',
        content: '测试内容',
        createAt: '2020/10/19',
        lastUpdate: '2020/10/19',
      },
      {
        title: '测试',
        content: '测试内容',
        createAt: '2020/10/19',
        lastUpdate: '2020/10/19',
      },
      {
        title: '测试',
        content: '测试内容',
        createAt: '2020/10/19',
        lastUpdate: '2020/10/19',
      }
    ]
  }
}
