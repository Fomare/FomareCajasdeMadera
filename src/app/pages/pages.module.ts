import { SharedModule } from './../shared/shared.module';

import { FormsModule } from '@angular/forms'; // para que funcione el [(ngModel)]

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// Temporal
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent
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
        ChartsModule
      ]
})

export class PagesModule {}