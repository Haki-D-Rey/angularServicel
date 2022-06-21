import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentRoute: string = 'Demo';
  title = 'Servicel-Angular';
  isAdmin: boolean = false;

  constructor(public router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event);
        this.isAdmin = event.url.includes('/admin');
      }
    });
  }

  ngOnInit(): void {}
}
