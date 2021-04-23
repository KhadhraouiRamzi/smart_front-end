import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { plateforme } from '../../../../models/plateforme';
import { PlateformeService } from '../../../../utils/services/plateforme.service';

@Component({
  selector: 'ngx-form-plateforme',
  templateUrl: './form-plateforme.component.html',
  styleUrls: ['./form-plateforme.component.scss']
})
export class FormPlateformeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  u: plateforme = new plateforme();
   
  plateforme: plateforme[] = [];
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];  
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

  constructor(private formBuilder: FormBuilder ,private plateformeService : PlateformeService,private r: Router) { }

  ngOnInit(): void {
    
    this.plateformeService.getlistPlateforme().subscribe(res => {
      this.plateforme = res;
      // Calling the DT trigger to manually render the table
      console.log(this.plateforme);
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
    
    this.plateformeService.addPlateforme(this.u).subscribe(res => {
      alert("ajout avec succès !");
      console.log(this.u);
      this.u = new plateforme();
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  Retour() {
    this.r.navigate(['/pages/layout/list-plateforme/']);
  }
}
