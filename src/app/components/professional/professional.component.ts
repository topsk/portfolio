import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css'],
})
export class ProfessionalComponent implements OnInit {
  softskills = [
    { name: 'vergaderen', stars: 4 },
    { name: 'analyseren', stars: 5 },
    { name: 'plannen', stars: 3 },
    { name: 'teamspeler', stars: 4 },
    { name: 'empathie', stars: 2 },
    { name: 'creativiteit', stars: 4 },
    { name: 'leiderschap', stars: 3 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
