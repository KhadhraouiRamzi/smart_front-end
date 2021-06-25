import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { SolarData } from '../../@core/data/solar';
import { DetailsService } from "../../utils/services/details.service";
import { details } from "../../models/details";
import { Subject } from "rxjs";
import { TokenStorageService } from '../../auth/services/token-storage.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy, OnInit {

  dtTrigger = new Subject();
  detailsTopChanson: details[];
  detailsTopArtiste: details[];
  detailsTopCategory: details[];
  detailsTopPlatform: details[];
  detailsTopDate: details[];


  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService, private token: TokenStorageService,
              private solarService: SolarData, private detaisSerivce: DetailsService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
      });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  ngOnInit(): void {

    this.detaisSerivce.getTopChanson().subscribe(
      res => {

        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.detaisSerivce.getTopChansonById(idUser).subscribe(data => {
            this.detailsTopChanson = data;
            this.dtTrigger.next();
          })
        }
        // Swal.fire('This is a simple and sweet alert')
        else {
          console.log(res);
          this.detailsTopChanson = res;
          console.log(res);
          this.dtTrigger.next();

        }


      });
    this.detaisSerivce.getTopArtiste().subscribe(
      res => {
        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.detaisSerivce.getTopArtisteById(idUser).subscribe(data => {
            this.detailsTopArtiste = data;
            this.dtTrigger.next();
          })
        }
        // Swal.fire('This is a simple and sweet alert')
        else {
          console.log(res);
          this.detailsTopArtiste = res;
          console.log(res);
          this.dtTrigger.next();
        }


      });
    this.detaisSerivce.getTopCategory().subscribe(
      res => {

        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.detaisSerivce.getTopCategoryById(idUser).subscribe(data => {
            this.detailsTopCategory = data;
            this.dtTrigger.next();
          })
        }
        // Swal.fire('This is a simple and sweet alert')
        else {
          console.log(res);
          this.detailsTopCategory = res;
          console.log(res);
          this.dtTrigger.next();
        }


      });
    this.detaisSerivce.getTopPlateforme().subscribe(
      res => {
        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.detaisSerivce.getTopPlateformeById(idUser).subscribe(data => {
            this.detailsTopPlatform = data;
            this.dtTrigger.next();
          })
        }
        // Swal.fire('This is a simple and sweet alert')
        else {
          console.log(res);
          this.detailsTopPlatform = res;
          console.log(res);
          this.dtTrigger.next();

        }

      });
    this.detaisSerivce.getTopDate().subscribe(
      res => {

        let role = this.token.getUser()['roles'];
        let idUser = this.token.getUser().id;
        if (role == "ROLE_ARTISTE") {
          this.detaisSerivce.getTopDateById(idUser).subscribe(data => {
            this.detailsTopDate = data;
            this.dtTrigger.next();
          })
        }
        // Swal.fire('This is a simple and sweet alert')
        else {
          console.log(res);
          this.detailsTopDate = res;
          console.log(res);
          this.dtTrigger.next();
        }

      });

  }
}
