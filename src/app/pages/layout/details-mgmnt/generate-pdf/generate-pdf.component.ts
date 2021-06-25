import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { details } from '../../../../models/details';
import { users } from '../../../../models/users';
import { DetailsService } from '../../../../utils/services/details.service';
import { UsersService } from '../../../../utils/services/users.service';
import {catchError, map, tap} from "rxjs/operators";
import {formatDate} from "@angular/common";

@Component({
  selector: 'ngx-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.scss']
})
export class GeneratePDFComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  u: details = new details();
  p: users = new users();
  fusers:users;
  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  statuses4: NbComponentStatus[] = ['info'];
  statuses3: NbComponentStatus[] = ['danger'];

    form: any = {
    datedebut: null,
    datefin: null,
    retenue: null,
  };
  constructor(private artisteService: UsersService, private router: Router, private ar: ActivatedRoute,
    private detailsService: DetailsService, private formBuilder: FormBuilder, private r: Router) { }

  @Input() inputUser: users;
  @Output() onChange: EventEmitter<users> = new EventEmitter();
  ngOnChanges() { // <- it will run every time and give you the latest value of fieldType
    if (this.inputUser) {
      this.artisteService.getUserById(this.inputUser.id).subscribe(
        res => {
          this.fusers = res;
          console.log(res);
        }
      );
    }
    else {
    }
  }
  ngOnInit(): void {

  }
  onSubmit() {
    //let routeId = this.ar.snapshot.paramMap.get('this.inputUser.id');
    //let idUser = parseInt();  /// car les param tj considerés comme String dans l'url

    const {datedebut,datefin,retenue} = this.form;

     console.log(this.fusers.id+datedebut+datefin+retenue);

    this.detailsService.generatePdf(this.fusers.id,datedebut,datefin,retenue).subscribe((res) => {
      console.log(res);
      const blob = new Blob([res], { type: 'application/pdf' });
      // window.open(URL.createObjectURL(blob));
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, 'testss.pdf');
      } else {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        const currentDate = new Date();
        const cValue = formatDate(currentDate, 'yyyyMMdd_HHmmss', 'en-US');
        a.download = 'rapport_'+this.fusers.nom+'_'+this.fusers.prenom+'_'+cValue+'.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    })

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  Retour() {
    this.r.navigate(['/pages/layout/list-artiste/']);
  }
  displayBasic: boolean;
  currenthist:users;

  hist(u: users) {
    this.currenthist = u;
    this.displayBasic = true;
  }

 }
