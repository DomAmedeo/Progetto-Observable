import { Component, Input, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@fundamental-ngx/core/button';
import { LayoutGridModule } from '@fundamental-ngx/core/layout-grid';
import { LayoutPanelModule } from '@fundamental-ngx/core/layout-panel';
import { IconTabBarComponent, TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,IconTabBarComponent, ButtonComponent, LayoutPanelModule , LayoutGridModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bin2bin');
  @Input()
  withOverflowExample = false;

    items: TabConfig[] = [
      {
        icon: 'journey-arrive',
        label: 'Scan',
        counter: null,
        color: null,
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

    ngOnInit(): void {
      this.items
    }
}
