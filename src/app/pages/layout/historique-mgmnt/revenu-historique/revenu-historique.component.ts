import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';
import { details } from '../../../../models/details';
import { users } from '../../../../models/users';
import { DetailsService } from '../../../../utils/services/details.service';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-revenu-historique',
  templateUrl: './revenu-historique.component.html',
  styleUrls: ['./revenu-historique.component.scss']
})
export class RevenuHistoriqueComponent implements OnInit {

  @Input() details: details; 
  statuses: NbComponentStatus[] = ['primary'];
  statuses2: NbComponentStatus[] = ['warning'];
  statuses4: NbComponentStatus[] = ['info'];
  statuses3: NbComponentStatus[] = ['danger'];
  fusers: users;

  form: any = {
    datedebut: null,
    datefin: null,
    retenue: null,
  };
  registerForm: FormGroup;
  submitted = false;

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

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  Retour() {
    this.r.navigate(['/pages/layout/list-artiste/']);
  }
  onSubmit() {
  }
}
