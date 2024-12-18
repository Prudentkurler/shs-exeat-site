import { DateTimeMixin, IDMixin_ } from "./core";

//Parent interface
export interface IParent extends DateTimeMixin, IDMixin_ {
  parentName: string;
  parentPhone: string;
  email: string;
  password: string;
  residence: string;
  schoolId: string;
  studentId: string;
  title: string;
}