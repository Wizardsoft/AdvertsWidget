import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { IAdv } from '../interfaces/Adv';
import { AdvDataService } from '../services/adv-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'advwidget-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private _sdvDataService: AdvDataService, private route: ActivatedRoute) { }

  public loadAdverts: IAdv;
  private errorMesage: string;
  private isLoading: boolean = false;
  private sub: any;
  token: string;

  ngOnInit() {
    this.isLoading = true;
    this.errorMesage = ""; 

    this.sub = this.route.params.subscribe(params => {
      this.token = params['token']; 
   });

    this._sdvDataService.getAdvForClient(this.token)
        .subscribe(adv => {
           this.loadAdverts =  adv ? JSON.parse(adv) : null   
        }, error => {
            this.errorMesage = <any>error;        
        });
       
  }

}
