import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus } from '@nebular/theme';
import { marketing } from '../../../../models/marketing';
import { MarketingService } from '../../../../utils/services/marketing.service';

@Component({
  selector: 'ngx-form-marketing',
  templateUrl: './form-marketing.component.html',
  styleUrls: ['./form-marketing.component.scss']
})
export class FormMarketingComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  u: marketing = new marketing();

  marketings: marketing[] = [];
  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  constructor(private formBuilder: FormBuilder, private marketingService: MarketingService) { }

  ngOnInit(): void {

    this.marketingService.getlistMarketing().subscribe(res => {
      this.marketings = res;
      // Calling the DT trigger to manually render the table
      console.log(this.marketings);
      console.log(res);
    });

      this.registerForm = this.formBuilder.group({
        nom: ['', Validators.required],
        datemark: ['', Validators.required],
        montant: ['', Validators.required],
        type: ['', Validators.required],
        devise: ['', Validators.required],

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

    this.marketingService.addMarketing(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new marketing();
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }



}
