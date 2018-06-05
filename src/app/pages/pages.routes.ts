
import { UsuarioComponent } from './usuarios/usuario.component';
import { FormularioProductoComponent } from './productos/formulario-producto/formulario-producto.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { AuthGuard } from '../auth/auth.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PedidoComponent } from './pedidos/pedido.component';
import { UsuarioProductosComponent } from './usuarios/usuario-productos.component';
import { HistorialComponent } from './pedidos/historial.component';


const pagesRoutes: Routes = [
    { 
        path: '',
        component: PagesComponent,
        //canActivate:[AuthGuard],
        children: [  //estos son los hijos del router-outlet que hay en PagesComponent
            { path: 'dashboard', component: DashboardComponent, data : {titulo:'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data : {titulo:'ProgressBars'} },
            { path: 'graficas1', component: Graficas1Component, data : {titulo:'Gráficas'} },
            { path: 'promesas', component: PromesasComponent, data : {titulo:'Promesas'} },
            { path: 'rxjs', component:  RxjsComponent, data : {titulo:'RxJs'} },            
            { path: 'account-settings', component: AccountSettingsComponent, data : {titulo:'Ajustes de Tema'} }, 
            { path: 'perfil', component:  ProfileComponent, data : {titulo:'Perfil de usuario'} },            
            // Mantenimiento
            { path: 'usuarios', component:  UsuariosComponent, data : {titulo:'Mantenimiento de usuarios'} },
            { path: 'usuario/:id', component:  UsuarioComponent, data : {titulo:'Direcciones del usuario'} },
            { path: 'usuario-productos/:id', component:  UsuarioProductosComponent, data : {titulo:'Productos del usuario'} },
            { path: 'pedidos', component:  PedidosComponent, data : {titulo:'Gestión de Pedidos'} },
            { path: 'pedido/:id', component:  PedidoComponent, data : {titulo:'Detalle del Pedido'} },
            { path: 'historial', component:  HistorialComponent, data : {titulo:'Historial de Pedidos'} },
            { path: 'productos', component:  ProductosComponent, data : {titulo:'Mantenimiento de productos'} },
            { path: 'formulario-producto', component:  FormularioProductoComponent, data : {titulo:'Mantenimiento de productos'} },
            { path: '', redirectTo: '/pedidos', pathMatch: 'full' }
        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );