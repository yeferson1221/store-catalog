import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/IProduts';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 listProduts: Product[] = [];
 page?: number;
  constructor(private dataService: DataService) { }

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
      this.listProduts = data;
    });
   }
}
