import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  menus = [
    {
      name: "心情记录",
      path: '/sprits'
    },
    {
      name: "管理",
      path: '/manage'
    }
  ]
}
