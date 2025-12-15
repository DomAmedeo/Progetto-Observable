import { Component } from '@angular/core';
import {  TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';

@Component({
  selector: 'app-log',
  imports: [],
  templateUrl: './log.html',
  styleUrl: './log.css',
})
export class Log {
      items: TabConfig[] = [
        { 
          id:'Log',
          icon: 'activities',
          label: 'Log',
          counter: null,
          color: null,
          active: true,
        },
    ];
    
    ngOnInit(): void {
      console.log(this.items);
    }

}
