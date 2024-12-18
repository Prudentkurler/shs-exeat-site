import { DateTimeMixin, IDMixin_ } from "./core";

//UserRole interface

export interface IUserRole extends DateTimeMixin, IDMixin_ {
  userId: string;
  roleId: string;
  roleName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUserRole {
  userId: string;
  roleId: string;
  roleName: string;
  createdAt: Date;
  updatedAt: Date;
}