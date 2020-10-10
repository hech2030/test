import { Article } from "./article";
import { Commande } from "./commande";

export class Fournisseur {
  constructor() {
  this.id = '';
}
  id: string = '';
  numF: string;
  NomF: string;
  adresse: string;
  codP: number;
  ville: string;
  payes: string;
  tele: number;
  fax: number;
  email: string;
  COMMANDE: Commande[];
  ARTICLE: Article[];
}
