import { NgModule } from '@angular/core';import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import {TreeViewModule} from '../tree-view/tree-view.module';

@NgModule({
  declarations: [
    EnviromentComponent,
  ],
  imports: [
    CommonModule,
    TreeViewModule,
  ],
  exports: [EnviromentComponent],
  providers: [
  ]
})
export class EnviromentModule { }