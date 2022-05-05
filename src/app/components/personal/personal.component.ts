import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  personal = {
    lastName: 'Tops',
    firstName: 'Kristof',
    birthDate: new Date(1985, 11, 25),
    adress: 'Herentals',
    email: 'topsk@hotmail.com',
    GSM: '0472/23.24.86',
    linkedIn: 'https://www.linkedin.com/in/kristof-tops-408378207/',
    CV: 'assets/docs/MijnCV.pdf',
    age: 0,
  };

  constructor() {
    this.personal.age = this.getAge();
  }

  ngOnInit(): void {}

  getAge = () => {
    var today = new Date();
    var age = today.getFullYear() - this.personal.birthDate.getFullYear();
    var m = today.getMonth() - this.personal.birthDate.getMonth();
    if (
      m < 0 ||
      (m === 0 && today.getDate() < this.personal.birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
}
