import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { marketing } from '../../../../models/marketing';
import { users } from '../../../../models/users';
import { MarketingService } from '../../../../utils/services/marketing.service';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-edit-artiste',
  templateUrl: './edit-artiste.component.html',
  styleUrls: ['./edit-artiste.component.scss']
})
export class EditArtisteComponent implements OnInit {
  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  countryForm: FormGroup;
  myGroup: FormGroup;
  seletedValue = '';
  u: users;
  artiste: users[] = [];
  mark: marketing[] = [];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  selectedFile: File;
  message: string;
  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  myVar = [];
  constructor(private artisteService: UsersService, private router: Router, private ar: ActivatedRoute,
    private formBuilder: FormBuilder, private marketingService: MarketingService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    if (!isNaN(id)) {
      this.artisteService.getUserById(id).subscribe(
        response => {
          this.u = response;
          console.log(response);

          this.httpClient.get('http://localhost:8081/get/' + this.u.id).subscribe(

            res => {
              this.retrieveResonse = res;
              console.log(res);
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

            }
          );
        }
      )
    } else {
    }
    this.marketingService.getlistMarketing().subscribe(
      res => {
        this.mark = res;
        // Calling the DT trigger to manually render the table
        console.log(this.mark);
      });
  }

  update(u: users) {

    this.submitted = true;

    this.artisteService.editUser(u).subscribe(res => {
      alert("Edit avec succès d'artiste " + this.u.nom + " " + this.u.prenom + " !");
      this.router.navigate(['/pages/layout/list-artiste']);
      //alert("Edit avec succès du produit "+this.u.nom+" !");
      this.u = new users();

    });

    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    let routId = this.ar.snapshot.paramMap.get('id');
    this.artisteService.image(uploadImageData, routId).subscribe(response => {
      if (response) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
  }

  annuler() {
    this.router.navigate(['/pages/layout/list-artiste/']);
  }

  public onFileChanged(event) {

    //Select File

    this.selectedFile = event.target.files[0];

  }
}
