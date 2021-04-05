import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { marketing } from '../../../../models/marketing';
import { role } from '../../../../models/role';
import { users } from '../../../../models/users';
import { MarketingService } from '../../../../utils/services/marketing.service';
import { RoleService } from '../../../../utils/services/role.service';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-form-artiste',
  templateUrl: './form-artiste.component.html',
  styleUrls: ['./form-artiste.component.scss']
})
export class FormArtisteComponent implements OnInit {
  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  u: users = new users();
  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];


  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private artiseService: UsersService, 
    private marketingService : MarketingService,private roleService : RoleService,private r: Router) { }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  marketing: marketing[] = [];
  role: role[] = [];

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nArtistique: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required,Validators.email],
      cin: ['', Validators.required],
      datecin: ['', Validators.required],
      date: ['', Validators.required],
      nationnalite: ['', Validators.required],
      part: ['', Validators.required],
      retenu: ['', Validators.required],
      marketing: ['', Validators.required],
      image: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],

      acceptTerms: [false, Validators.requiredTrue]
    })

    this.roleService.getlistRole().subscribe(res => {
      this.role = res;
      // Calling the DT trigger to manually render the table
      console.log(this.role);
      console.log(res);

    });
    this.marketingService.getlistMarketing().subscribe(res => {
      this.marketing = res;
      // Calling the DT trigger to manually render the table
      console.log(this.marketing);
      console.log(res);

    });
  }

  public onFileChanged(event) {

    //Select File

    this.selectedFile = event.target.files[0];

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;

    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
   
    this.artiseService.test( this.u).subscribe(res => {
      alert("ajout avec succès !");
      console.log(this.u);
      console.log(this.u.id);
    });
    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name );

    //Make a call to the Spring Boot Application to save the image
    // this.HttpClient.post(this.baseUrl + "/new-user", u);

    // this.httpClient.put('http://localhost:8081/upload', uploadImageData, { observe: 'response' }).subscribe((response) => {
      console.log(this.u.id);
      this.artiseService.imageIn(uploadImageData).subscribe(response => {
        if (response) {
          console.log(response);
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }  
      }
      );
    //  this.u.name = this.selectedFile.name;
    //this.u.type = 'imageFile';
    // this.u.files =this.selectedFile;

 
    
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  
  Retour() {
    this.r.navigate(['/pages/layout/list-artiste/']);
  }

}
