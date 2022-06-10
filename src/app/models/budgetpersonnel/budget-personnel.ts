import { Budget } from "../budget/budget";
import { User } from "../user/user";

export class BudgetPersonnel {
  public id_budget_personnel : number;
  public utilisateur : User;
  public budget : Budget;
  public montant : number;
}
