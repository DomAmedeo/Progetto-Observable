import { Component, Input } from '@angular/core';
import { IconTabBarComponent, TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';







@Component({
  selector: 'app-home',
  imports: [IconTabBarComponent ],
  templateUrl: './home.html',
  styleUrl: '',
})
export class Home {
  @Input()
  withOverflowExample = false;
  items: TabConfig[] =[
    {
        icon: 'journey-arrive',
        label: 'Scan',
        counter: null,
        color: 'critical',
        active: true
    },
    {
        icon: 'list',
        label: 'List',
        counter: null,
        color: null,
        badge: true
    }, 
    {
        icon: 'activities',
        label: 'Log',
        counter: null,
        color: null
    },
    
  ];

  
  ngOnInit(){
    this.items
  }
  
}
