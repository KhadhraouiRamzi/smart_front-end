import { Categories } from "./categories";

export class Produit
{
    id : number;
    nom : string;
    prix : number;
    quantite : number;
    iduser? : number ;
    idCategorie : number; 
    categorie:Categories;


}