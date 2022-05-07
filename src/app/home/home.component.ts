import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  destroyBreakpointObs = new Subject<void>();

  contentHeight = 350;
  contentSmall = false;

  constructor(breakpointObs: BreakpointObserver) {
    breakpointObs.observe(Breakpoints.XSmall).subscribe((result) => {
      if (result.matches) {
        this.contentHeight = 150;
        this.contentSmall = true;
      } else {
        this.contentHeight = 350;
        this.contentSmall = false;
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroyBreakpointObs.next();
    this.destroyBreakpointObs.complete();
  }
}
