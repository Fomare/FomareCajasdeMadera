import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Pedidos',
      //icono: 'mdi mdi-gauge',
      icono: 'mdi mdi-cellphone-android',
      submenu: [
        //{ titulo: 'Dashboard', url: '/dashboard' },
        //{ titulo: 'ProgressBar', url: '/progress' },        
        //{ titulo: 'Promesas', url: '/promesas' },
        //{ titulo: 'RxJs', url: '/rxjs' },
        { titulo: 'No Atendidos' , url:'/pedidos'},        
        { titulo: 'Historial' , url:'/historial'}      
      ]
    },
    {
      titulo:'Mantenimiento',
      icono:'mdi mdi-settings',
      submenu:[
        { titulo: 'Usuarios', url:'/usuarios' },        
        { titulo: 'Productos', url:'/productos' }
      ]
    },
    {
      titulo:'Ajustes',
      icono:'mdi mdi-wrench',
      submenu:[
        { titulo: 'Gráficas', url: '/graficas1' },
        { titulo: 'Ajustes', url: '/account-settings' }       
      ]
    }
  ];

  constructor() { }

}
