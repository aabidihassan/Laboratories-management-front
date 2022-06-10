import { Annee } from "../annee/annee";
import { Labo } from "../labo/labo";

export class Budget {
  public id_budget : Number;
  public db : number;
  public dr : number;
  public annee : Annee;
  public labo : Labo;
}
