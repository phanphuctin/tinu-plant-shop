import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzResultComponent } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NzResultComponent, NzButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  router = inject(Router);

  goBack() {
    this.router.navigate(["/dashboard/welcome"])
  }

}
