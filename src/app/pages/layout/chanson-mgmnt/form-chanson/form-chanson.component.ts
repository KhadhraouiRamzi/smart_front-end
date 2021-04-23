import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { album } from '../../../../models/album';
import { chanson } from '../../../../models/chanson';
import { operateur } from '../../../../models/operateur';
import { plateforme } from '../../../../models/plateforme';
 import { users } from '../../../../models/users';
import { AlbumService } from '../../../../utils/services/album.service';
 import { ChansonService } from '../../../../utils/services/chanson.service';
import { MarketingService } from '../../../../utils/services/marketing.service';
import { OperateurService } from '../../../../utils/services/operateur.service';
import { PlateformeService } from '../../../../utils/services/plateforme.service';
import { UsersService } from '../../../../utils/services/users.service';
 
@Component({
  selector: 'ngx-form-chanson',
  templateUrl: './form-chanson.component.html',
  styleUrls: ['./form-chanson.component.scss']
})
export class FormChansonComponent implements OnInit {
  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  u: chanson = new chanson();
  user: users[] = [];
  plateforme: plateforme[] = [];
  operateur : operateur [] = [];
  album: album[] = [];
  
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];



  constructor(private formBuilder: FormBuilder, private albumService :AlbumService ,private plateformeService: PlateformeService,
    private userService: UsersService, private chansonService: ChansonService,private r: Router, private operateurService : OperateurService) { }

  ngOnInit(): void {
    
    this.operateurService.getlistOperateur().subscribe(res => {
      this.operateur = res;
      // Calling the DT trigger to manually render the table
      console.log(this.operateur);
      console.log(res);

    });
 
    
    this.plateformeService.getlistPlateforme().subscribe(res => {
      this.plateforme = res;
      // Calling the DT trigger to manually render the table
      console.log(this.plateforme);
      console.log(res);

    });

    this.albumService.getlistAlbum().subscribe(res => {
      this.album = res;
      // Calling the DT trigger to manually render the table
      console.log(this.album);
      console.log(res);

    });
    this.userService.getlistArtFour().subscribe(res => {
      this.user = res;
      // Calling the DT trigger to manually render the table
      console.log(this.user);
      console.log(res);

    });

    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      nAlbum: ['', Validators.required],
      nArtiste: ['', Validators.required],
      datec: ['', Validators.required],
      genre: ['', Validators.required],
       type: ['', Validators.required],
      plateforme: ['', Validators.required],
      featuring: ['', Validators.required],
      operateur: ['', Validators.required],
  
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

    this.chansonService.addChanson(this.u).subscribe(res => {
      alert("ajout avec succès !");
      console.log(this.u);
     // this.u = new chanson();
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  
  Retour() {
    this.r.navigate(['/pages/layout/list-chanson/']);
  }

}
