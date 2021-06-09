import { Component, OnInit } from '@angular/core';
import {users} from "../../models/users";
import {UsersService} from "../../utils/services/users.service";
import {TokenStorageService} from "../services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: users;
  currentUser: any;
  submitted= false;
  selectedFile: File;
  retrievedImage: any;
  message: string;
  retrieveResonse: any;
  base64Data: any;

  constructor(private userService: UsersService,
              private token: TokenStorageService,
              private router: Router,
              private ar: ActivatedRoute,
              private httpClient : HttpClient) { }

  ngOnInit(): void {
    let u=this.currentUser = this.token.getUser();
    this.userService.getUserById(u.id).subscribe(data=>{
      this.user=data;

      this.userService.getImage(this.user.id).subscribe(res=>{


      if(res.picByte==null){
        this.retrievedImage="assets/images/noPhoto.png";
      }
        else this.retrievedImage = 'data:image/jpeg;base64,' + res.picByte;})


    });
  }

  update(u: users) {

    this.submitted = true;

    console.log(this.selectedFile);


    this.userService.editUser(u).subscribe(res => {
      alert("Edit du profile " + this.user.nom + " " + this.user.prenom + " !");
      /*this.router.navigate(['/pages/layout/list-artiste']);*/
      /*console.log('aa' || this.u);*/
      //alert("Edit avec succès du produit "+this.u.nom+" !");
      this.user = new users();

    });

    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name );
    let uu=this.currentUser = this.token.getUser();
    this.userService.image(uploadImageData,uu.id).subscribe(response => {
        if (response) {
          console.log(response);
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
    );
  }

  public onFileChanged(event) {

    //Select File

    this.selectedFile = event.target.files[0];

  }

}
