import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Order } from '../../classess/order';
import { OrderService } from '../../services/order-service';
import { debounceTime,  fromEvent, map, switchMap } from 'rxjs';
import {  TableModule } from '@fundamental-ngx/core';
import { FormsModule } from '@angular/forms';
import { FormItemComponent, FormLabelComponent } from '@fundamental-ngx/core/form';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';





@Component({
  selector: 'app-elenco',
  imports: [CommonModule , TableModule,  FormsModule, FormItemComponent, FormLabelComponent, InputGroupModule],
  templateUrl: './elenco.html',
  styleUrl: './elenco.css',
})
export class Elenco {
  elenco : Order[] = [];


  constructor(private service: OrderService){}

  


  //inserisco value perchè value è un array Order cosi risolvo l errore:
  // ERROR RuntimeError: NG0900: Error trying to diff '[object Object]'. Only arrays and iterables are allowed,
  // causato dall' *ngFor perchè non riesce ad iterare elenco nel template
  ngOnInit(){
    this.service.getJsonData().subscribe(val =>{
      this.elenco = val.value;
    });
  }

  
  ngAfterViewInit(){
    const input = document.getElementById("fd-input-group-search-label-2");
    if(input){
      const input$ =  fromEvent(input, 'fd-input-group-search-label-2').pipe(
      debounceTime(500),
      map((evt : any) => String(evt.target.value)),
      switchMap((ord : string) => this.service.getOrderBySalesOrder(ord))
    )
    input$.subscribe(ris =>{
      this.elenco = ris;
    })
    }

  }




}