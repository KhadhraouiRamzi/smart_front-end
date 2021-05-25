import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus } from '@nebular/theme';
import { artiste } from '../../../../models/artiste';
import { ArtisteService } from '../../../../utils/services/artiste.service';

@Component({
  selector: 'ngx-form-artiste',
  templateUrl: './form-artiste.component.html',
  styleUrls: ['./form-artiste.component.scss']
})
export class FormArtisteComponent implements OnInit {
  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  u: artiste = new artiste();
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  constructor( private formBuilder: FormBuilder,private artiseService : ArtisteService) { }

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nArtistique: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      cin: ['', Validators.required],
      datecin: ['', Validators.required],
      date: ['', Validators.required],
      nationnalite: ['', Validators.required],
       contrat: ['', Validators.required],
      part: ['', Validators.required],
      retenu: ['', Validators.required],

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

    
    this.artiseService.addArtiste(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new artiste();
    });
  }
  
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  
   
  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [contrat] = event.target.files;
      reader.readAsDataURL(contrat);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.registerForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }

  
}
