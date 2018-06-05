
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { 
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  PedidoService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    PedidoService
  ],
  declarations: []
})
export class ServiceModule { }
