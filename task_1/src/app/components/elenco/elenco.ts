import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Order } from '../../classess/order';
import { OrderService } from '../../services/order-service';
import { debounceTime, from, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-elenco',
  imports: [CommonModule],
  templateUrl: './elenco.html',
  styleUrl: './elenco.css',
})
export class Elenco {
  elenco : Order[] = [];


  constructor(private service: OrderService){}

  //con ViewChild ho un riferimento all'elemento del dom dinamico in maniera diretta
  @ViewChild('searchBox') searchInput! : ElementRef


  //inserisco value perchè value è un array Order cosi risolvo l errore:
  // ERROR RuntimeError: NG0900: Error trying to diff '[object Object]'. Only arrays and iterables are allowed,
  // causato dall' *ngFor perchè non riesce ad iterare elenco nel template
  ngOnInit(){
    this.service.getJsonData().subscribe(val =>{
      this.elenco = val.value;
    });
  }

  
  ngAfterViewInit(){
    fromEvent(this.searchInput.nativeElement, 'input').pipe(
      debounceTime(500),
      map((evt : any) => String(evt.target.value)),
      switchMap((ord : string) => this.service.getOrderBySalesOrder(ord))
    )
    .subscribe(ris =>{
      this.elenco = ris;
    })
  }
}