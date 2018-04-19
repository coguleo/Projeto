import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { Produto } from './../../model/produto';
import { Vendedor } from './../../model/vendedor';
import { Venda } from './../../model/venda';
import { ItensVenda } from './../../model/itensvenda';
import { Cliente } from './../../model/cliente';
import { Component, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'processo-venda',
    templateUrl: 'processo-venda.html',
    styleUrls: ['processo-venda.scss'],

})

export class ProcessoVenda {

    codigo: Number;
    cliente: Cliente;
    vendedor: Vendedor;
    datavenda: Date;
    public form:FormGroup;


    constructor(public dialog: MatDialog,private formBuilder :FormBuilder) {
      this.form = this.formBuilder.group({
          codigo:[null, Validators.required],
          datavenda:[null, Validators.required],
          cliente:[null, Validators.required],
          vendedor:[null, Validators.required]
      });
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(Dialog, {
            width: '250px',
            data: { name: this.cliente }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.cliente = result;
        });
    }


    displayedColumns = ['venda', 'produto', 'quantidade', 'vlrunitario', 'vlrtotal,', ];
    dataSource =  new MatTableDataSource(itensvenda) ;
  }

  export interface Element {
    venda: Venda;
    produto: Produto;
    quantidade: Number;
    vlrunitario: Number;
    vlrtotal: Number;
  

  }

  const itensvenda: ItensVenda[] = [

  ];



@Component({
    selector: 'dialog',
    templateUrl: 'dialog.html',
  })
  export class Dialog {
  
    constructor(
      public dialogRef: MatDialogRef<Dialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }





