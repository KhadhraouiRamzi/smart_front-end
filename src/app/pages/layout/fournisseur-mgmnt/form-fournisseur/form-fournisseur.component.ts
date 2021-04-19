import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { marketing } from '../../../../models/marketing';
import { users } from '../../../../models/users';
import { MarketingService } from '../../../../utils/services/marketing.service';
  import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-form-fournisseur',
  templateUrl: './form-fournisseur.component.html',
  styleUrls: ['./form-fournisseur.component.scss']
})
export class FormFournisseurComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  u: users = new users();
  marketing: marketing[] = [];

  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];  
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

  constructor(private marketingService : MarketingService, private formBuilder: FormBuilder ,private fournisseurService : UsersService,private r: Router) { }

  ngOnInit(): void {
     
    this.marketingService.getlistMarketing().subscribe(res => {
      this.marketing = res;
      // Calling the DT trigger to manually render the table
      console.log(this.marketing);
      console.log(res);

    });
    
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      date: ['', Validators.required],
      montant: ['', Validators.required],
      part: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required,Validators.email],
      nationnalite: ['', Validators.required],
      marketing: ['', Validators.required],

      
      acceptTerms: [false, Validators.requiredTrue]
    })
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;
    
    this.fournisseurService.test(this.u).subscribe(res => {
      alert("ajout avec succès !");
      console.log(this.u);
      this.u = new users();
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  Retour() {
    this.r.navigate(['/pages/layout/list-fournisseur/']);
  }
}
