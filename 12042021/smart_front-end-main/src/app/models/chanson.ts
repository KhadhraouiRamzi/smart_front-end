import { DetailPlateformeComponent } from '../pages/layout/palteforme-mgmnt/detail-plateforme/detail-plateforme.component';
import { album } from './album';
import { artiste } from './artiste';
import { fournisseur } from './fournisseur';
import { plateforme } from './plateforme';

export class chanson {
    id: Number;
    nom: String;
    datec: Date;
    featuring: String;
    genre: string;
    rbt_src: String;
    type: String;
    artiste : artiste;
    plateforme : plateforme;
    album : album;
    fournisseur : fournisseur;
   }