import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { FTP } from '../../../../models/FTP';
import { users } from '../../../../models/users';
import { FtpService } from '../../../../utils/services/ftp.service';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-edit-ftp',
  templateUrl: './edit-ftp.component.html',
  styleUrls: ['./edit-ftp.component.scss']
})
export class EditFtpComponent implements OnInit {
  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  countryForm: FormGroup;
  myGroup: FormGroup;
  seletedValue = '';
  u: FTP;
  user : users[] = [];
  ftps: FTP[] = [];
  constructor(private ftpService: FtpService, private router: Router, private ar: ActivatedRoute,
    private formBuilder: FormBuilder,private usersService : UsersService) { }
  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)) {
      this.ftpService.getFtpById(id).subscribe(
        response => {
          this.u = response;
          console.log(response);
        }
      )
    } else {
    }
    this.usersService.getlistUser().subscribe(res => {
      this.user = res;
      // Calling the DT trigger to manually render the table
       console.log(this.user);
      console.log(res);
    });
  }
  update(u: FTP) {
    this.ftpService.editFtp(u).subscribe(res => {
      console.log( this.u || 'aaa');
      alert("Edit avec succès de FTP " + this.u.identifiant + " !");
      this.router.navigate(['/pages/layout/list-ftp']);
      this.u = new FTP();
    });
  }
  annuler() {
    this.router.navigate(['/pages/layout/list-ftp/']);
  }
}
