import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.scss']
})
export class HomeAdministradorComponent implements OnInit {

  personals: any[] = [
    {
      nomePersonal: 'Nirav joshi (nbj@gmail.com)',
      image: 'assets/images/users/1.jpg',
      cpf: '000.000.000-00',
    },
    {
      nomePersonal: 'Nirav joshi (nbj@gmail.com)',
      image: 'assets/images/users/2.jpg',
      cpf: '111.000.111-11',
    },
    {
      nomePersonal: 'Nirav joshi (nbj@gmail.com)',
      image: 'assets/images/users/3.jpg',
      cpf: '000.222.000-22',
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
