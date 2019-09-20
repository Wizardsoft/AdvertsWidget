import { Component } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'advwidget-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'advwidget';
  constructor(private spinnerService: Ng4LoadingSpinnerService) { 
    spinnerService.show();
  }
}

