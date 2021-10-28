/* tslint:disable */
/* eslint-disable */
import { Paciente } from './paciente';
export interface Consulta {
  consultas?: null | Array<Consulta>;
  data?: string;
  especialidade?: null | string;
  id?: number;
  medico?: null | string;
  paciente?: Paciente;
}
