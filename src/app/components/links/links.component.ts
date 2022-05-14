import { CdkVirtualForOf } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  links = {
    linkedIn: 'https://www.linkedin.com/in/kristof-tops-408378207/',
    CV: 'assets/docs/MijnCV.pdf',
    nitorReport: 'assets/docs/eindraport_KT_Nitor.pdf',
    nitorSite: 'https://www.nitor.be/',
    shoppingList_apk: 'assets/docs/reactNative-winkellijst.apk',
    gitHub_general: 'https://github.com/topsk',
    gitHub_portfolio: 'https://github.com/topsk/portfolio',
  };

  constructor() {}

  ngOnInit(): void {}
}
