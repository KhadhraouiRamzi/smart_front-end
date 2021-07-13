import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { album } from '../../../../models/album';
import { AlbumService } from '../../../../utils/services/album.service';
import { DataTableDirective } from 'angular-datatables';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { TokenStorageService } from "../../../../auth/services/token-storage.service";
import { Browser } from "leaflet";
import win = Browser.win;

@Component({
  selector: 'ngx-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.scss']
})
export class ListAlbumComponent implements OnInit {
  //statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  album: any;

  constructor(private albumService: AlbumService, private r: Router, private ar: ActivatedRoute, protected token: TokenStorageService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.albumService.getlistAlbum().subscribe(
      res => {

        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;

        if (role == "ROLE_ARTISTE") {
          this.albumService.getAlbumsByUserId(idUser).subscribe(data => {
            this.album = data;
          })
        }

        else {
          console.log(res);
          this.album = res;
          console.log(res);
        }
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentalbum: album;

  details(u: album) {
    this.currentalbum = u;
    this.displayBasic = true;
  }
  ajouter() {
    if (this.token.getUser()['roles'] == "ROLE_ADMIN") {
      this.r.navigate(['/pages/layout/form-album/']);
    }
    else window.alert("Désolé vous n'êtes pas autorisé !!");
  }
  modifier(u: album) {
    if (this.token.getUser()['roles'] == "ROLE_ADMIN") {
      this.r.navigate(['/pages/layout/edit-album/' + u.id]);
      console.log(u);
    }
    else window.alert("Désolé vous n'êtes pas autorisé !!");
  }

  delete(p: album) {
    if (this.token.getUser()['roles'] == "ROLE_ADMIN") {
      if (window.confirm("êtes-vous sûr suprrimer le produit " + p.titre + " ?")) {
        this.albumService.deleteAlbum(p.id).subscribe(res => {
          //alert('Produit deleted !');

          this.albumService.getlistAlbum().subscribe(res => {
            this.album = res;

            // rerender datatable
            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
              // Destroy the table first
              dtInstance.destroy();
              // Call the dtTrigger to rerender again
              this.dtTrigger.next();
            });

          });
        })
      }
    }
    else window.alert("Désolé vous n'êtes pas autorisé !!");
  }
}
