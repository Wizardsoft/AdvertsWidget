import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { IAdv } from '../interfaces/Adv';
import { AdvDataService } from '../services/adv-data.service';
import { ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'advwidget-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private _sdvDataService: AdvDataService, private route: ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService) { 
    
  }

  public loadAdverts: IAdv;
  private errorMesage: string;
  private isLoading: boolean = true;
  private sub: any;
  token: string;
  company: string;

  ngOnInit() {
    this.errorMesage = ""; 
    this.isLoading = true;
    this.sub = this.route.params.subscribe(params => {
      this.token = params['token']; 
      this.company = params['company']; 
   });

    this._sdvDataService.getAdvForClient(this.token)
        .subscribe(adv => {
           this.loadAdverts =  adv ? JSON.parse(adv) : null;
           this.spinnerService.hide();
        }, error => {
            this.spinnerService.hide();
            this.isLoading = false;
            this.errorMesage = <any>error;        
        });
  }

}
