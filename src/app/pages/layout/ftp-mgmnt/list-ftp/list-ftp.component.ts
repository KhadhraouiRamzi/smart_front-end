import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { FTP } from '../../../../models/FTP';
import { FtpService } from '../../../../utils/services/ftp.service';

@Component({
  selector: 'ngx-list-ftp',
  templateUrl: './list-ftp.component.html',
  styleUrls: ['./list-ftp.component.scss']
})
export class ListFtpComponent implements OnInit {

  ftps: FTP[] = [];
  statuses: NbComponentStatus[] = ['success'];
  statuses2: NbComponentStatus[] = ['primary'];
  statuses3: NbComponentStatus[] = ['danger'];
  statuses4: NbComponentStatus[] = ['info'];


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: SmartTableData, private ftpService: FtpService, 
    private r: Router, private ar: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.ftpService.getlistFtp().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.ftps = res;
        console.log(res);
        this.dtTrigger.next();

      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  displayBasic: boolean;
  currentftp: FTP;

  details(u: FTP) {
    this.currentftp = u;
    this.displayBasic = true;
  }

  ajouter() {
    this.r.navigate(['/pages/layout/form-ftp/']);
  }

  modifier(u: FTP) {

    //if (window.confirm("êtes-vous sûr de modifier le produit " + u.nom + " ?")) {
    this.r.navigate(['/pages/layout/edit-ftp/' + u.id]);
    console.log(u);

    // }

  }

  delete(p: FTP) {
    if (window.confirm("êtes-vous sûr suprrimer le produit " + p.identifiant + " ?")) {
      this.ftpService.deleteFtp(p.id).subscribe(res => {
        //alert('Produit deleted !');

        this.ftpService.getlistFtp().subscribe(res => {
          this.ftps = res;

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

}
