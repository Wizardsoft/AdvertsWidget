import { Pipe, PipeTransform } from '@angular/core';
import { IJob } from '../interfaces/job';

@Pipe({
  name: 'advertFilter'
})
export class AdvertFilterPipe implements PipeTransform {

  transform(value: IJob[], term: string): IJob[] {
    
        if (!term) return value;
        term = term.toLowerCase();
    
        if (value.filter(ad => {
          
                      if (typeof ad.Title !== 'undefined' &&  ad.Title  !== null) {
                          return  ad.Title.toLocaleLowerCase().includes(term);
                      }
                      return false;
                  }).length > 0) {
                      return value.filter(ad => {
          
                          if (typeof ad.Title !== 'undefined' && ad.Title !== null) {
                              return ad.Title.toLocaleLowerCase().includes(term);
                          }
                          return false;
                      });
                  }
    
                  else if (value.filter(ad => {
                    
                                if (typeof ad.Summary !== 'undefined' &&  ad.Summary  !== null) {
                                    return  ad.Summary.toLocaleLowerCase().includes(term);
                                }
                                return false;
                            }).length > 0) {
                                return value.filter(ad => {
                    
                                    if (typeof ad.Summary !== 'undefined' && ad.Summary !== null) {
                                        return ad.Summary.toLocaleLowerCase().includes(term);
                                    }
                                    return false;
                                });
                            } 
    
        return value;
    
      }
    

}
