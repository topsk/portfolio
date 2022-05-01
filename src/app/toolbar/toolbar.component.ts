import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  toolbarVisible: boolean = false;
  menuIcon: string = 'menu';

  constructor() {}

  ngOnInit(): void {}

  toggleToolbar() {
    this.toolbarVisible = !this.toolbarVisible;
    this.menuIcon = this.toolbarVisible ? 'menu_open' : 'menu';
  }

  scroll(id: string) {
    console.log('test');
    let el = document.getElementById(id);
    if (el != null) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
