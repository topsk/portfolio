import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  toolbarVisible: boolean = false;
  toolbarVisibleScroll: boolean = false;
  toolbarBtnDisabled: boolean = false;
  menuIcon: string = 'menu';
  scrollTimerId: any;

  constructor() {}

  ngOnInit(): void {}

  toggleToolbar() {
    this.toolbarVisible = !this.toolbarVisible;
    this.menuIcon = this.toolbarVisible ? 'menu_open' : 'menu';
    if (this.toolbarVisible) {
      this.toolbarBtnDisabled = false;
    }
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    if (el != null) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.toolbarVisible) {
      clearTimeout(this.scrollTimerId);

      this.toolbarVisibleScroll = true;
      this.toolbarBtnDisabled = false;

      this.scrollTimerId = setTimeout(() => {
        this.toolbarVisibleScroll = false;
        this.toolbarBtnDisabled = true;
      }, 1500);
    }
  }
}
