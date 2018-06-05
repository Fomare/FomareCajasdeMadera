import { SharedModule } from './../shared/shared.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // para que funcione el [(ngModel)]

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// imprimir


// Temporal
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { FormularioProductoComponent } from './productos/formulario-producto/formulario-producto.component';
import { PedidoComponent } from './pedidos/pedido.component';
import { UsuarioComponent } from './usuarios/usuario.component';
import { UsuarioProductosComponent } from './usuarios/usuario-productos.component';
import { HistorialComponent } from './pedidos/historial.component';
//import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [        
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        HospitalesComponent,
        PedidosComponent,
        ProductosComponent,
        FormularioProductoComponent,
        PedidoComponent,
        UsuarioComponent,
        UsuarioProductosComponent,
        HistorialComponent        
        // ReactiveFormsModule        
      ],
      exports: [  // se exportan para que puedan ser accedidos desde otros módulos
        DashboardComponent,
        ProgressComponent,
        Graficas1Component 
      ],
      imports: [
        SharedModule,  // lo importo porque los componentes que declaro, usan otros componentes que no están en PagesModule sino en SharedModule
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule
      ]
})

export class PagesModule {}