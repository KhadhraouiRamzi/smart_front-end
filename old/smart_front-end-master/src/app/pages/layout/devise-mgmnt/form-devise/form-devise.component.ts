import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus } from '@nebular/theme';
import { devise } from '../../../../models/devise';
import { DeviseService } from '../../../../utils/services/devise.service';

@Component({
  selector: 'ngx-form-devise',
  templateUrl: './form-devise.component.html',
  styleUrls: ['./form-devise.component.scss']
})
export class FormDeviseComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  u: devise = new devise();

  devises: devise[] = [];
  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  constructor(private formBuilder: FormBuilder, private deviseService: DeviseService) { }

  ngOnInit(): void {

    this.deviseService.getlistDevise().subscribe(res => {
      this.devises = res;
      // Calling the DT trigger to manually render the table
      console.log(this.devises);
      console.log(res);
    });

      this.registerForm = this.formBuilder.group({
        nomd: ['', Validators.required],
        cours: ['', Validators.required],
        code: ['', Validators.required],
        datecours: ['', Validators.required],
 
        acceptTerms: [false, Validators.requiredTrue]
      })
    }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if(this.registerForm.invalid) {
      return;
    }
    this.submitted = true;

    this.deviseService.addDevise(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new devise();
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }



}
