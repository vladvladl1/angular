import { Component, OnInit } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-demo';
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => {
      if (event instanceof NavigationEnd) {
        return true;
      } else {
        return false;
      }
    })).subscribe((event) => { console.log(event) });
  }



}



