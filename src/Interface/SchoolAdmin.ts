import { DateTimeMixin, IDMixin_ } from "./core";

//SchoolAdmin interface

export interface ISchoolAdmin extends DateTimeMixin, IDMixin_ {
  schoolAdminName: string;
  schoolAdminPhone: string;
  email: string;
  password: string;
  residence: string;
  schoolId: string;
  title: string;
  createdAt: Date;
    updatedAt: Date;
}

export interface ICreateSchoolAdmin {
  schoolAdminName: string;
  schoolAdminPhone: string;
  email: string;
  password: string;
  residence: string;
  schoolId: string;
  title: string;
  createdAt: Date;
    updatedAt: Date;
}

export interface IUpdateSchoolAdmin {
  schoolAdminName?: string;
  schoolAdminPhone?: string;
  email?: string;
  password?: string;
  residence?: string;
  schoolId?: string;
  title?: string;
  createdAt?: Date;
    updatedAt?: Date;
}

// SchoolAdmin Dashboard interface

export interface ISchoolAdminDashboard extends DateTimeMixin, IDMixin_ {
  schoolAdminId: string;
  schoolId: string;
  totalStudents: number;
  currentSignedIn: number;
  currentSignedOut: number;
  totalRevenue: number;
  dailyExeatCount: number;
  totalParents: number;
  revenueToday: number;
  revenueThisMonth: number;
    revenueThisYear: number;
    totalPaid: number;
    totalUnpaid: number;
  createdAt: Date;
    updatedAt: Date;
}