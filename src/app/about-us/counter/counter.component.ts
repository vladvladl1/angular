import {Input, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {
  @Input()
  value?:number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
