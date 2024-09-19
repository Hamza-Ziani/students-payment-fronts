import { Students } from "./students.model";

export interface Payment {
  id: number;
  firstname: string;
  date: string;
  amount: number;
  type: string;
  status: string;
  file : string;
  students : Students;
}
