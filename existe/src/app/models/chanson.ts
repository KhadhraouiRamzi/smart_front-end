import { DetailPlateformeComponent } from '../pages/layout/palteforme-mgmnt/detail-plateforme/detail-plateforme.component';
import { album } from './album';
import { operateur } from './operateur';
 import { plateforme } from './plateforme';
import { users } from './users';

export class chanson {
    id: Number;
    nom: String;
    datec: Date;
    featuring: String;
    genre: string;
    rbt_src: String;
    type: String;
    user : users;
    plateforme : plateforme;
    album : album;
    operateur : operateur;
   }