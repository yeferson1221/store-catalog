import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/IProduts';
import { DataService } from '../service/data.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 listProduts: Product[] = [];
 listPrice: any[] = [];
 page?: number;
 styles: boolean;
  constructor(
    private dataService: DataService,
    public dialog: MatDialog
    ) { 
    this.styles = true;
  }

  ngOnInit(): void {
    this.productAll();
  }

   /**
   * [
   *  Metodo productAll(), se optiene todos los productos
   *  dataService.sendGetRequestProducts(), suscribe la data y la guardo
   *  this.listProduts para mostrarla en la vista
   * ]
   * @version [1,0.0]
   *
   * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
   * @since [1,0,0]
   *
   */

   productAll(){
    this.dataService.sendGetRequestProducts().subscribe((data) => {
      console.log(data);
      localStorage.setItem('product', JSON.stringify(data));
      this.listProduts = JSON.parse(localStorage.getItem("product")!);
    },
    (error) => {
      console.log(error);
    }
    );
  }

  buy(){
   
      alert("Compra Exitosa")
  
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
