import { DateTimeMixin, IDMixin_ } from "./core";

/** Enum for Payment Status */
export enum PaymentStatus {
  Pending = "pending",
  Completed = "completed",
  Failed = "failed",
}

/** Base interface for Payment */
export interface IPayment extends IDMixin_, DateTimeMixin {
  studentId: string;
  schoolId: string;
  totalAmount: number; // Total payment amount
  schoolAmount: number; // 80% amount to school
  adminAmount: number; // 20% amount to admin
  paymentStatus: PaymentStatus; // Enum for status
  paymentMethod: string; // e.g., 'momo', 'bank'
  transactionReference: string; // Unique reference for transaction
  paidAt?: Date; // Optional payment date
}

/** Interface for creating a Payment */
export interface ICreatePayment {
  studentId: string;
  schoolId: string;
  totalAmount: number;
  schoolAmount: number;
  adminAmount: number;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  transactionReference: string;
  paidAt?: Date;
}
export interface PaymentData {
  phoneNumber: string;
  operator: string;
  otp?: string; // Optional OTP field
}


/** Interface for updating a Payment */
export interface IUpdatePayment {
  paymentStatus?: PaymentStatus;
  paymentMethod?: string;
  transactionReference?: string;
  paidAt?: Date;
}

/** Interface for Payment in the database */
export interface IPaymentInDb extends ICreatePayment, IDMixin_, DateTimeMixin {
  // Inherits fields from creation model and mixins
}

/** Interface for public representation of Payment */
export interface IPaymentPublic extends IPayment {
  // Public representation contains the same fields as the base payment
}