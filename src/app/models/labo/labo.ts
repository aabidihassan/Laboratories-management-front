import { User } from "../user/user";

export class Labo {
  public nom !: String;
  public adresse !: String;
  public telephone !: String;
  public membres !: Array<User>;
}
