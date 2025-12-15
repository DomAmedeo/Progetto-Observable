import { Component, signal} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { LayoutGridModule } from '@fundamental-ngx/core/layout-grid';
import { LayoutPanelModule } from '@fundamental-ngx/core/layout-panel';
import { IconTabBarComponent, TabConfig,  } from '@fundamental-ngx/platform/icon-tab-bar';
import { Log } from './components/log/log';
import { List } from './components/list/list';
import { Home } from './components/home/home';
import { CommonModule } from '@angular/common';
import { SegmentedButtonComponent,} from '@fundamental-ngx/core/segmented-button';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,IconTabBarComponent, ButtonComponent, LayoutPanelModule , LayoutGridModule, RouterModule, List,Home,Log, CommonModule,RouterOutlet, RouterModule, SegmentedButtonComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('bin2bin');

  // items: TabConfig[] = [
  // {
  //   id: 'home',
  //   icon: 'journey-arrive',
  //   label: 'home',
  // },
  // {
  //   id: 'list',
  //   icon: 'list',
  //   label: 'list',
  // },
  // {
  //   id:'log',
  //   icon: 'activities',
  //   label: 'log',
  // },];


  // ngOnInit(){
  //   var iconBar = document.getElementById("TabBar");
  //   var icon = iconBar?.getElementsByClassName("fd-icon-tab-bar__item fd-icon-tab-bar__item--default")
  //   if(icon){
  //     var Icon$= addEventListener('click', function(){
  //       console.log(icon)        
  //       return Icon$;       
  //     })
  //   }
  // }




}