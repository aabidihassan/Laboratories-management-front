import { Besoin } from "../besoins/besoin";
import { BudgetPersonnel } from "../budgetpersonnel/budget-personnel";
import { Labo } from "../labo/labo";

export class User {

  public username !: String;
  public password !: String;
  public email !: String;
  public adresse !: String;
  public telephone !: String;
  public roles !: any;
  public labo !: Labo;
  public budgetPersonnels : Array<BudgetPersonnel>
  public besoins : Array<Besoin>
}
