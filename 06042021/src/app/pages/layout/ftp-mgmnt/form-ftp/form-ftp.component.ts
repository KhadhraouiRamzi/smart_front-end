import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus } from '@nebular/theme';
import { FTP } from '../../../../models/FTP';
import { users } from '../../../../models/users';
import { FtpService } from '../../../../utils/services/ftp.service';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-form-ftp',
  templateUrl: './form-ftp.component.html',
  styleUrls: ['./form-ftp.component.scss']
})
export class FormFtpComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  u: FTP = new FTP();
  ftps: FTP[] = [];
  user: users[] = [];
  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];



  constructor(private formBuilder: FormBuilder, private ftpService: FtpService,
    private userService: UsersService) { }

  ngOnInit(): void {


    this.ftpService.getlistFtp().subscribe(res => {
      this.ftps = res;
      // Calling the DT trigger to manually render the table
      console.log(this.ftps);
      console.log(res);

    });
   this.userService.getlistUser().subscribe(res => {
      this.user = res;
      // Calling the DT trigger to manually render the table
      console.log(this.user);
      console.log(res);

    });

    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],
      haut: ['', Validators.required],
      identifiant: ['', Validators.required],
      mp: ['', Validators.required],
      port: ['', Validators.required],
      
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

    this.ftpService.addFtp(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);
      this.u = new FTP();
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}