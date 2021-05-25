import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { operateur } from '../../../../models/operateur';
import { OperateurService } from '../../../../utils/services/operateur.service';

@Component({
  selector: 'ngx-form-operateur',
  templateUrl: './form-operateur.component.html',
  styleUrls: ['./form-operateur.component.scss']
})
export class FormOperateurComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  u: operateur = new operateur();

  operateur: operateur[] = [];
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];  
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

  constructor(private formBuilder: FormBuilder ,private operateurService : OperateurService,private r: Router) { }

  ngOnInit(): void {
    
    this.operateurService.getlistOperateur().subscribe(res => {
      this.operateur = res;
      // Calling the DT trigger to manually render the table
      console.log(this.operateur);
      console.log(res);

    });
    
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      datep: ['', Validators.required],
       part: ['', Validators.required],
        
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
    
    this.operateurService.addOperateur(this.u).subscribe(res => {
      alert("ajout avec succès !");
      console.log(this.u);
      this.u = new operateur();
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  Retour() {
    this.r.navigate(['/pages/layout/list-operateur/']);
  }
}
