import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from '../../../../models/users';
import { UsersService } from '../../../../utils/services/users.service';

@Component({
  selector: 'ngx-chart-panel-summary',
  styleUrls: ['./chart-panel-summary.component.scss'],
  template: `
    <div class="summary-container">
      <div *ngFor="let item of fournisseurs">
        <div>{{ item.nom }}</div>
        <div class="h6">{{ item.part }}</div>
      </div>
    </div>
  `,
  /*  template: `
    <div class="summary-container">
      <div *ngFor="let item of summary">
        <div>{{ item.title }}</div>
        <div class="h6">{{ item.value }}</div>
      </div>
    </div>
  `,*/
})
export class ChartPanelSummaryComponent {
  @Input() summary: {title: string; value: number}[];
  fournisseurs: users;
  
  constructor(  private fournisseurService: UsersService, private r: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    

    this.fournisseurService.getFours().subscribe(
      res => {
        // Swal.fire('This is a simple and sweet alert')
        console.log(res);
        this.fournisseurs = res;
        console.log(res);
       });
  }


}

