import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { album } from '../../../../models/album';
import { chanson } from '../../../../models/chanson';
import { details } from '../../../../models/details';
import { operateur } from '../../../../models/operateur';
import { plateforme } from '../../../../models/plateforme';
 import { users } from '../../../../models/users';
import { AlbumService } from '../../../../utils/services/album.service';
 import { ChansonService } from '../../../../utils/services/chanson.service';
import { DetailCrudService } from '../../../../utils/services/detail-crud.service';
import { OperateurService } from '../../../../utils/services/operateur.service';
import { PlateformeService } from '../../../../utils/services/plateforme.service';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
  imageSrc: string;
  registerForm: FormGroup;
  submitted = false;
  u: details = new details();
  details: details[]=[]; 
  users: users[]=[];
  plateforme: plateforme[] = [];
  operateur : operateur [] = [];
  album: album[] = [];
  chanson : chanson[] = [];
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

 
  constructor(private formBuilder: FormBuilder, private albumService :AlbumService ,private plateformeService: PlateformeService,
    private userService: UsersService, private chansonService: ChansonService,  private detailCrudService: DetailCrudService,
   private r: Router, private operateurService : OperateurService ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      namea: ['', Validators.required],
      nomC: ['', Validators.required],
      album: ['', Validators.required],
      date1: ['', Validators.required],
      date2: ['', Validators.required],
      uniteprice: ['', Validators.required],
      quantite: ['', Validators.required],
      plateforme: ['', Validators.required],
      netrevenu: ['', Validators.required],
      grossrevenu: ['', Validators.required],
      devise: ['', Validators.required],
      label: ['', Validators.required],
      upc: ['', Validators.required],
      isrc: ['', Validators.required],
      content: ['', Validators.required],
      producer: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
      country: ['', Validators.required],
      TTC: ['', Validators.required],
      part_smart: ['', Validators.required],
      tax_telecom: ['', Validators.required],
      part_TTC: ['', Validators.required],
      HTVA: ['', Validators.required],
      part_artiste: ['', Validators.required],

      acceptTerms: [false, Validators.requiredTrue]
    })
   
    this.operateurService.getlistOperateur().subscribe(res => {
      this.operateur = res;
      // Calling the DT trigger to manually render the table
      console.log(this.operateur);
    });

     
    this.operateurService.getlistOperateur().subscribe(res => {
      this.operateur = res;
      // Calling the DT trigger to manually render the table
      console.log(this.operateur);
    });
    
    this.plateformeService.getlistPlateforme().subscribe(res => {
      this.plateforme = res;
      // Calling the DT trigger to manually render the table
      console.log(this.plateforme);
    });

    this.albumService.getlistAlbum().subscribe(res => {
      this.album = res;
      // Calling the DT trigger to manually render the table
      console.log(this.album);
    });

    this.userService.getlistArtFour().subscribe(res => {
      this.users = res;
      // Calling the DT trigger to manually render the table
      console.log(this.users);
    });

    this.detailCrudService.getlistDetail().subscribe(res => {
      this.details = res;
      // Calling the DT trigger to manually render the table
      console.log(this.details);
    });
    this.chansonService.getlistChanson().subscribe(res => {
      this.chanson = res;
      // Calling the DT trigger to manually render the table
      console.log(this.chanson);
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true;
     this.detailCrudService.addDetail(this.u).subscribe(res => {
      console.log(this.u);
      alert("ajout avec succès !");
      //console.log(this.u);
     // this.u = new detail();
    });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  Retour() {
    this.r.navigate(['/pages/layout/ngx-list-detail/']);
  }

}
