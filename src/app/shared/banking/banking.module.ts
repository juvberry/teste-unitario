import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investments/components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@NgModule({
  declarations: [
    BankingComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientTestingModule,
  ],
  exports: [
    BankingComponent,
    ListComponent
  ]
})
export class BankingModule { }