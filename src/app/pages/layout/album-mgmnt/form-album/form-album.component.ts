import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { album } from '../../../../models/album';
import { AlbumService } from '../../../../utils/services/album.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.scss']
})
export class FormAlbumComponent implements OnInit {
  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  album: album[] = [];
  u: album = new album();

  constructor(private albumService: AlbumService, private formBuilder: FormBuilder,private r: Router) { }

//statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
statuses: NbComponentStatus[] = [ 'primary' ];
statuses2: NbComponentStatus[] = [ 'warning' ];
statuses4: NbComponentStatus[] = ['info'];
statuses3: NbComponentStatus[] = ['danger'];

  ngOnInit(): void {

    this.albumService.getlistAlbum().subscribe(res => {
      this.album = res;
      // Calling the DT trigger to manually render the table
      console.log(this.album);
      console.log(res);

    });

    this.registerForm = this.formBuilder.group({
      titre: ['', Validators.required],
      dateA: ['', Validators.required],
       
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
   
    this.albumService.addAlbum(this.u).subscribe(res => {

      alert("ajout avec succès !");
      console.log(this.u);

      this.u = new album();
    });
  }
  
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  Retour() {
    this.r.navigate(['/pages/layout/list-album/']);
  }

  
}
