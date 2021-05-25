import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { album } from '../../../../models/album';
import { chanson } from '../../../../models/chanson';
import { plateforme } from '../../../../models/plateforme';
import { users } from '../../../../models/users';
import { AlbumService } from '../../../../utils/services/album.service';
import { ChansonService } from '../../../../utils/services/chanson.service';
import { FournisseurService } from '../../../../utils/services/fournisseur.service';
import { PlateformeService } from '../../../../utils/services/plateforme.service';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-edit-chanson',
  templateUrl: './edit-chanson.component.html',
  styleUrls: ['./edit-chanson.component.scss']
})
export class EditChansonComponent implements OnInit {
   
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  registerForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : chanson;
  chanson : chanson[] =[];
  user: users[] = [];
  users: users[] = [];
  album: album[] = [];
  plateforme : plateforme[] = [];

  constructor(private albumService : AlbumService,private fournisseurService : UsersService,private artisteService :UsersService,
    private chansonService : ChansonService,private router: Router, private ar : ActivatedRoute,private formBuilder: FormBuilder,
    private plateformeService : PlateformeService) { }

  ngOnInit(): void {   
    this.albumService.getlistAlbum().subscribe(res => {
      this.album = res;
      // Calling the DT trigger to manually render the table
      console.log(this.album);
      console.log(res);
    });

    this.fournisseurService.getFours().subscribe(res => {
      this.users = res;
      // Calling the DT trigger to manually render the table
      console.log(this.users);
      console.log('aa');
    });
    
    this.artisteService.getArts().subscribe(res => {
      this.user = res;
      // Calling the DT trigger to manually render the table
      console.log(this.user);
      console.log(res);
    });

    this.plateformeService.getlistPlateforme().subscribe(res => {
      this.plateforme = res;
      // Calling the DT trigger to manually render the table
      console.log(this.plateforme);
      console.log(res);
    });

    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.chansonService.getChansonById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
     )
    }else {
    }
}
  update(u : chanson)
  {
    this.chansonService.editChanson(u).subscribe(res =>
      {
        alert("Edit avec succès d'album "+this.u.nom+" !");
        this.router.navigate(['/pages/layout/list-chanson']);
        console.log('aa' || this.u);
        //alert("Edit avec succès du produit "+this.u.nom+" !");
        this.u=new chanson();

      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/layout/list-chanson/']);

  }
}
