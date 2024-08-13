import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { en_US, NzI18nService, vi_VN } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,
    NzIconModule, NzLayoutModule, NzMenuModule, NzButtonComponent,
    NzAvatarComponent, NzSwitchComponent, FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isCollapsed = false;
  mode = false;

  private _router = inject(Router);
  private _i18n = inject(NzI18nService);

  onProfile() {

  }

  changeLanguage(event) {
    if (event) {
      this._i18n.setLocale(en_US);
    } else {
      this._i18n.setLocale(vi_VN);
    }
    console.log(`%cevent = `, `background-color: yellow`, event)

  }
  onLogout() {
    localStorage.removeItem('user_infor')
    this._router.navigate(['/login'])
  }
}
