import { Byte } from "@angular/compiler/src/util";
import { marketing } from "./marketing";
import { role } from "./role";

export class users
{    id: Number;
     cdate: Date;
     nom: String;
     prenom: String;
     cin: Number;
     contrat: String;
     date: Date;
     datecin: Date;
     email: String;
     password : string ;
     image: String;
     nArtistique: String;
     nationnalite: String;
     part: Number;
     phone: Number;
     proposition: String;
     retenu: Number;
     udate : Date;
     name :string ;
     type : string;
     picByte : Byte;
     files : File;
     marketing : marketing;
     role : role;
}