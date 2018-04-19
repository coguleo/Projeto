import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'pesquisa-marca',
  styleUrls: ['pesquisa-marca.scss'],
  templateUrl: 'pesquisa-marca.html',
})

export class PesquisaMarca {
    displayedColumns = ['position', 'codigo', 'nome'];
    dataSource =  new MatTableDataSource(ELEMENT_DATA) ;
  }

  export interface Element {
    position: Number;
    codigo: Number;
    nome: String;
  }

  const ELEMENT_DATA: Element[] = [
    {position: 1, codigo: 1, nome: 'M1' },
    {position: 2, codigo: 2, nome:'M2'},
    {position: 3, codigo: 3, nome: 'M3'},

  ];