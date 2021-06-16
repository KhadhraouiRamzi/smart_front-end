import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
import { FournisseurService } from '../../../../utils/services/fournisseur.service';
import { OperateurService } from '../../../../utils/services/operateur.service';
import { PlateformeService } from '../../../../utils/services/plateforme.service';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss']
})
export class EditDetailComponent implements OnInit {

  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  u : details;
  details : details[] =[];
  f: users[] = [];
  a: users[] = [];
  album: album[] = [];
  plateformee : plateforme[] = [];
  operateurr : operateur[] = [];

  constructor(private detailCrudService :DetailCrudService, private operateurService : OperateurService, private albumService : AlbumService,private fournisseurService : UsersService,private artisteService :UsersService,
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
      this.f = res;
      // Calling the DT trigger to manually render the table
      console.log('aaaaaaaaaaaa'+this.f);
      console.log('aa');
    });

    this.artisteService.getArts().subscribe(res => {
      this.a = res;
      // Calling the DT trigger to manually render the table
      console.log(this.a);
    });

    this.plateformeService.getlistPlateforme().subscribe(res => {
      this.plateformee = res;
      // Calling the DT trigger to manually render the table
      console.log(this.plateformee);
    });

    this.operateurService.getlistOperateur().subscribe(res => {
      this.operateurr = res;
      // Calling the DT trigger to manually render the table
      console.log(this.operateurr);
    });

    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.detailCrudService.getDetailById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
     )
    }else {
    }
}
  update(u : details)
  {
    this.detailCrudService.editDetail(u).subscribe(res =>
      {
        alert("Edit avec succès detail "+this.u.namea+" !");
        this.router.navigate(['/pages/layout/ngx-list-detail']);
        console.log('aa' || this.u);
        //alert("Edit avec succès du produit "+this.u.nom+" !");
        this.u=new details();

      });
  }


  annuler() {
    this.router.navigate(['/pages/layout/ngx-list-detail/']);

  }
}
