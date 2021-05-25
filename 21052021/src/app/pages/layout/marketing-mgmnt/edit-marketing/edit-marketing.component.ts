import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { marketing } from '../../../../models/marketing';
import { MarketingService } from '../../../../utils/services/marketing.service';

@Component({
  selector: 'ngx-edit-marketing',
  templateUrl: './edit-marketing.component.html',
  styleUrls: ['./edit-marketing.component.scss']
})
export class EditMarketingComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : marketing;
  marketings : marketing[] =[];
  constructor(private marketingService : MarketingService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.marketingService.getMarkById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
         
     )

    }else {

    }
   
}
 
  update(u : marketing)
  {
 
    this.marketingService.editMarketing(u).subscribe(res =>
      {
        alert("Edit avec succès de marketing "+this.u.nom+" !");
        this.router.navigate(['/pages/layout/list-marketing']);
        console.log('aa' || this.u);
        //alert("Edit avec succès du produit "+this.u.nom+" !");
        this.u=new marketing();

      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/layout/list-marketing/']);

  } 
}
