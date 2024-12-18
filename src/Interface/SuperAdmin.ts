import { DateTimeMixin, IDMixin_ } from "./core";

// SuperAdmin interface

export interface ISuperAdmin extends DateTimeMixin, IDMixin_ {
  superAdminName: string;
  superAdminPhone: string;
  email: string;
  password: string;
  residence: string;
  title: string;
  id: string;
}

export interface ICreateSuperAdmin {
  superAdminName: string;
  superAdminPhone: string;
  email: string;
  password: string;
  residence: string;
  title: string;
  id: string;
}

export interface IUpdateSuperAdmin {
  superAdminName?: string;
  superAdminPhone?: string;
  email?: string;
  password?: string;
  residence?: string;
  title?: string;
  id: string;
}

// SuperAdmin Dashboard interface

export interface ISuperAdminDashboard extends DateTimeMixin, IDMixin_ {
  superAdminId: string;
  totalSchools: number;
  totalSchoolAdmins: number;
  totalParents: number;
  totalStudents: number;
  totalRevenue: number;
  totalExeat: number;
  totalSignedIn: number;
  totalSignedOut: number;
  totalPaid: number;
  totalUnpaid: number;
  createdAt: Date;
  updatedAt: Date;
}