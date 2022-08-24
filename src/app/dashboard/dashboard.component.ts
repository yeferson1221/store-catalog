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
 listProdutsOut: Product[] = [];
 listProdutsFull: Product[] = [];
 listPrice: any[] = [];
 page?: number;
 styles: boolean;
 mostrarSout: boolean;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
    ) { 
    this.styles = false;
    this.mostrarSout = false
  }

  ngOnInit(): void {
    this.productAll();
  }

   /**
   * [
   *  Metodo productAll(), se optiene todos los productos
   *  dataService.sendGetRequestProducts(), suscribe la data y la guardo
   *  this.listProduts para mostrarla en la vista, adicional se tiene 
   *  un condicional para validar que productos no tienen existencias 
   *  y mandarles  una imagen de no disponible 
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
      data.forEach(element => {
  
        if(element.quantity === "0") {
          element.quantity = 'SOLD OUT'
          element.imageUrlOut ='../../assets/images/pngegg.png'
          this.styles = false;
          this.mostrarSout = true
        }
      
        this.listProduts.push(element)
         //this.listProduts = this.listProdutsFull.concat(this.listProdutsOut);
      });
      localStorage.setItem('product', JSON.stringify(data));
      //this.listProduts = JSON.parse(localStorage.getItem("product")!);

    },
    (error) => {
      console.log(error);
    }
    );
  }

     /**
   * [
   *  Metodo openDialog(), resive como parametros 
   *  enterAnimationDuration: string, exitAnimationDuration: string
   *  para animar el Component(dialog-animations-example-dialog.html).
   *  luego llamo this.dialog.open para abrir el  dicho componnet
   * ]
   * @version [1,0.0]
   *
   * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
   * @since [1,0,0]
   *
   */
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '25%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  mostrarQuantity(quantity: string ): boolean {
    console.log(quantity )
    return true
  }

}


   /**
   * [
   *  Component de 'dialog-animations-example-dialog.html'
   *  donde cargo el diseño del mensaje en el button Buy product
   * ]
   * @version [1,0.0]
   *
   * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
   * @since [1,0,0]
   *
   */

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
