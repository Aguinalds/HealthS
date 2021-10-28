/* tslint:disable */
/* eslint-disable */
import { Consulta } from './consulta';
import { Remedio } from './remedio';
export interface Rotina {
  consultas?: null | Array<Consulta>;
  data?: string;
  id?: number;
  nome?: null | string;
  remedios?: null | Array<Remedio>;
}
