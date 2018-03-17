import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component             
      ],
      exports: [  // se exportan para que puedan ser accedidos desde otros módulos
        DashboardComponent,
        ProgressComponent,
        Graficas1Component 
      ],
      imports: [
        SharedModule,  // lo importo porque los componentes que declaro, usan otros componentes que no están en PagesModule sino en SharedModule
        PAGES_ROUTES
      ]
})

export class PagesModule {}