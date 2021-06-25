import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { album } from '../../../../models/album';
import { AlbumService } from '../../../../utils/services/album.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss']
})
export class EditAlbumComponent implements OnInit {
  //statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  statuses: NbComponentStatus[] = [ 'primary' ];
  statuses2: NbComponentStatus[] = [ 'warning' ];
  countryForm: FormGroup;
  myGroup : FormGroup;
  seletedValue = '';
  u : album;
  album : album[] =[];

  constructor(private albumService : AlbumService,private router: Router, private ar : ActivatedRoute,
     private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let routeId = this.ar.snapshot.paramMap.get('id');
    let id = parseInt(routeId);  /// car les param tj considerés comme String dans l'url
    console.log(id);
    if (!isNaN(id)){
     this.albumService.getAlbumById(id).subscribe(
       response => {
         this.u = response;
         console.log(response);}
         
     )

    }else {

    }
   
}
 
  update(u : album)
  {
 
    this.albumService.editAlbum(u).subscribe(res =>
      {
        alert("Edit avec succès d'album "+this.u.titre+" !");
        this.router.navigate(['/pages/layout/list-album']);
        console.log('aa' || this.u);
        //alert("Edit avec succès du produit "+this.u.nom+" !");
        this.u=new album();

      });
  } 

 
  annuler() {
    this.router.navigate(['/pages/layout/list-album/']);

  }
/*
   changement(evenement) {
    //Evenement contient l'évènement transmis, on peut accéder à la donnée sélectionnée en manipulant l'attribut target
   var objet = this.u.categorie;
}*/

}
