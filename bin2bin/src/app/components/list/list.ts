import { Component } from '@angular/core';
import { TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';


@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {


    items: TabConfig[] = [
    {
      id:'List',
      icon: 'list',
      label: 'List',
      counter: null,
      color: null,
      badge: true, 
      active: true
    },
    ];

    ngOnInit(): void {
      console.log(this.items);
    }

}
