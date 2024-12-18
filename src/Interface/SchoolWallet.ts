import { DateTimeMixin, IDMixin_ } from "./core";

/** Base wallet interface */
export interface IWallet extends IDMixin_, DateTimeMixin {
  schoolAdminId: string;
  schoolId: string;
  currentBalance: number;
  totalEarned: number;
  lastUpdated: Date;
}

/** Interface for creating a wallet */
export interface ICreateWallet {
  schoolAdminId: string;
  schoolId: string;
  currentBalance: number;
  totalEarned: number;
  lastUpdated: Date;
}

/** Interface for updating a wallet */
export interface IUpdateWallet {
  currentBalance?: number;
  totalEarned?: number;
  lastUpdated?: Date;
}