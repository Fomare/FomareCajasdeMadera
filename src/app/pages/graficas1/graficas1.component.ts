import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Empresa 1', 'Empresa 2', 'Empresa 3'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'Pedidos por usuario'
    },
    'grafico2': {
      'labels': ['Producto1', 'Producto 2','Producto 3','Producto 4','Producto 5','Producto 6',],
      'data':  [4500, 6000, 20, 133, 1000, 3333],
      'type': 'pie',
      'leyenda': 'Pedidos por producto'
    },
    'grafico3': {
      'labels': ['Ene', 'Feb','Mar', 'Abr','May', 'Jun','Jul', 'Ago','Sep', 'Oct','Nov', 'Dic'],
      'data':  [95, 55, 35, 65, 88, 89, 99, 100, 122, 133, 144, 200],
      'type': 'bar',
      'leyenda': 'Pedidos por mes'
    },
    'grafico4': {
      'labels': ['2017', '2018','2019', '2020'],
      'data':  [2000, 2818,3014, 3988],
      'type': 'line',
      'leyenda': 'Pedidos por año'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
