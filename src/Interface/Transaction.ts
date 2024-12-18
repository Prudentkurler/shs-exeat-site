import { DateTimeMixin, IDMixin_ } from "./core";

//Base transaction Interface

export interface ITransaction extends IDMixin_,DateTimeMixin{
    amount:number,
    studentName:string,
    schoolName:string,
    refernce:string
}

//Interface for creating a transaction

export interface ICreateTransaction{
    amount:number,
    studentName:string,
    reference:string,
    schoolName:string
}

export interface IUpdateTransaction{
    amount?:number,
    studentName?:string,
    reference?:string,
    schoolName?:string
}