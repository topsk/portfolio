import { Component, OnInit } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  snackBarOptions = {
    duration: 5000,
    horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
    verticalPosition: 'top' as MatSnackBarVerticalPosition,
  };

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.showSnackBar();
  }

  showSnackBar() {
    this._snackBar.open(
      'Work In Progress (please revisit later)',
      undefined,
      this.snackBarOptions
    );
  }
}
