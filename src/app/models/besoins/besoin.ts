import { BudgetPersonnel } from "../budgetpersonnel/budget-personnel";
import { TypeBesoin } from "../typeBesoin/type-besoin";
import { User } from "../user/user";

export class Besoin {
  public id_besoin : number;
  public description : String;
  public montant : number;
  public typeBesoin : TypeBesoin;
  public utilisateur : User;
  public pudgetPersonnel : BudgetPersonnel;
}
