import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routeEvent;
  showDashoaard: boolean = true;
  constructor(private router: Router) {
    // console.log(route);
    this.routeEvent
      = this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
              console.log(event.url);
              if (event.url === '/dashboard') {
                this.showDashoaard = true;
              } else {
                this.showDashoaard = false
              }
            }
          });
  }

  ngOnInit() { }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  ngOnDestroy() {
    this.routeEvent.unsubscribe();
  }

}
