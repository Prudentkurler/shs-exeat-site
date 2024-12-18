import { DateTimeMixin,IDMixin_ } from "./core";

export interface ISchool extends DateTimeMixin,IDMixin_{
    schoolName:string,
    location:string,
    phoneNumber:string,
    email:string,
    registrationFee:number,
    updateAt:Date
}

export interface ICreatSchool{
    schoolName:string,
    registrationFee:string,
    location:string,
    updateAt:Date
}

export interface IUpdateSchool{
    schoolName?:string,
    registrationFee?:string,
    location?:string,
    updateAt?:Date
}

export interface SchoolProps{
    schoolName:string,
    schoolRegion:string,
    schoolAddress:string,
    schoolCode:string
    createdAt:Date
    
}
