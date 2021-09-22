import { Component, OnInit, ViewChild } from '@angular/core';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { users } from '../../../../models/users';
import { utils, WorkBook, WorkSheet, writeFile } from "xlsx";
import { DataTableDirective } from 'angular-datatables';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { Subject } from 'rxjs';
import { UsersService } from '../../../../utils/services/users.service';
import { HttpClient } from '@angular/common/http';
import { DatatableLanguage } from '../../../../../assets/data/DatatableLanguage';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'ngx-list-artiste',
  templateUrl: './list-artiste.component.html',
  styleUrls: ['./list-artiste.component.scss']
})
export class ListArtisteComponent implements OnInit {
  artistes: users;
  art: users;
  fileName = 'Liste des artistes.xlsx';

  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];
  statuses5: NbComponentStatus[] = ['warning'];
  statuses6: NbComponentStatus[] = ['basic'];
  statuses7: NbComponentStatus[] = ['control'];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  img: any;
  private pic: string;

  constructor(private httpClient: HttpClient, private service: SmartTableData, private usersService: UsersService,
    private r: Router, private ar: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [ 1, 'desc' ],
      language : DatatableLanguage.datatableFrench,
    };

    this.usersService.getArts().subscribe(
      res => {
        //  this.img ="img [src]='assets/images/revenu 2.png'";
        // Swal.fire('This is a simple and sweet alert')
        res[1].name = res[1].name
        let array = res;
        for (let i = 0; i < array.length; i++) {  
          let arr = array[i].picByte;
          //let img = this.artistes.prenom; this.artistes.name

          this.httpClient.get('http://localhost:8081/get/' + array[i].id).subscribe(
            response => {
              this.retrieveResonse = response;
              if (this.retrieveResonse.picByte == null) {
                this.retrievedImage = "assets/images/noPhoto.png"
                array[i].picByte = this.retrievedImage;
                res[i].picByte = array[i].picByte;
                this.artistes = res;
              }
              else
                array[i].picByte = this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
              res[i].picByte = array[i].picByte;
              this.artistes = res;
            }
          );
        }
        setTimeout(function () {
          (function ($) {
            $(document).ready(function () {
              $('#table-orange-stat').DataTable({
                "footerCallback": function (row, data, start, end, display) {
                console.log(res);
                },
                "order": [[1, "desc"]],
                "language": DatatableLanguage.datatableFrench
              });
            });
          })(jQuery);
        }, 150);
      });
  } 
  
  displayBasic: boolean;
  displayBasic2: boolean;
  displayBasic3: boolean;
  currentartiste: users;
  currentdetails: users;
  currenthist: users;

  details(u: users) {
    console.log( "test detail --------->" +u);
    this.currentartiste = u;
    this.displayBasic = true;
    //this.r.navigate(['/pages/layout/detail-artiste/' + u.id]);
  }

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('table-orange-stat');
    const ws: WorkSheet = utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: WorkBook = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    writeFile(wb, this.fileName);
  }


  header = [['Nom Artiste', 'Net Revenu', 'Nombre d écoute']]

  public openPDF(): void {
    let DATA = document.getElementById('table-orange-stat');

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)

      PDF.save('Liste des artistes.pdf');
    });
  }
  revenu(d: users) {
    console.log( "test Revenu--------->" +d);
    this.currentdetails = d;
    this.displayBasic2 = true;
  }

  hist(d: users) {
    this.currenthist = d;
    this.displayBasic3 = true;
  }
  modifier(u: users) {
    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/edit-artiste/' + u.id]);
    // }
  }

  ajouter() {
    this.r.navigate(['/pages/layout/form-artiste/']);
  }

  delete(p: users) {
    if (window.confirm("êtes-vous sûr suprrimer l'artiste " + p.nom + " " + p.prenom + " ?")) {
      this.usersService.deleteUser(p.id).subscribe(res => {
        //alert('Produit deleted !');
      /*  this.r.navigate(['/pages/layout/list-artiste/']);*/

            this.usersService.getArtistes().subscribe(res => {
            this.artistes = res;
    
          // rerender datatable
         /* this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
          });*/

          setTimeout(function () {
            (function ($) {
              $(document).ready(function () {
                $('#table-orange-stat').DataTable({
                  "footerCallback": function (row, data, start, end, display) {
                  console.log(res);
                  },
                  "order": [[1, "desc"]],
                  "language": DatatableLanguage.datatableFrench
                });
              });
            })(jQuery);
          }, 150);          

        });
      })
    }
  }
}
