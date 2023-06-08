import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public routes: IAppRoutes[] = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
    {
      name: 'Posts',
      path: '/posts',
    },
  ];
}

export interface IAppRoutes {
  name: string;
  path: string;
}
