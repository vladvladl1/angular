import {Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  value: number = 1;
  interval:any;

  constructor() { }

  ngOnInit(): void {
   this.interval = setInterval(() => {
      this.value = this.value + 1;
    }, 1000)
  }

  ngOnDestroy(): void {
    if(this.interval){
    clearInterval(this.interval);
    }
  }


}
