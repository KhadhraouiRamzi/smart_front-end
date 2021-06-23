import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { operateur } from '../../../../models/operateur';
import { OperateurService } from '../../../../utils/services/operateur.service';

@Component({
  selector: 'ngx-edit-operateur',
  templateUrl: './edit-operateur.component.html',
  styleUrls: ['./edit-operateur.component.scss']
})
export class EditOperateurComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : operateur;
  operateur : operateur[] =[];
  constructor(private operateurservice : OperateurService,private router: Router, private ar : ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.operateurservice.getOperateurById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
     )
    }else {
    }  
}
  update(u : operateur)
  {
    this.operateurservice.editOperateur(u).subscribe(res =>
      {
        alert("Edit avec succès de operateur "+this.u.nom+" !");
        this.router.navigate(['/pages/layout/list-operateur']);
        console.log('aa' || this.u);
         this.u=new operateur();
      });
  } 
 
  annuler() {
    this.router.navigate(['/pages/layout/list-operateur/']);
  } 
}
