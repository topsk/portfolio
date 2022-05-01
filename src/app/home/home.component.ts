import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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

  snackBarOptions = {
    duration: 3000,
    horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
    verticalPosition: 'top' as MatSnackBarVerticalPosition,
  };

  constructor(
    private _snackBar: MatSnackBar,
    breakpointObs: BreakpointObserver
  ) {
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

  //#region Events

  ngOnInit(): void {
    this.showSnackBar();
  }

  ngOnDestroy(): void {
    this.destroyBreakpointObs.next();
    this.destroyBreakpointObs.complete();
  }

  //#endregion Events

  //#region Functions

  showSnackBar() {
    this._snackBar.open(
      'Work In Progress (please revisit later)',
      undefined,
      this.snackBarOptions
    );
  }

  //#endregion Functions
}
