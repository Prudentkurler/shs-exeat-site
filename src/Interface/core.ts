export interface IDMixin {
    id: number;
  }
  
  export interface IDMixin_ {
    id: string;
  }
  
  export interface UserIDModelMixin{
      user_id: string;
  }
  
  export interface DateTimeMixin {
    created_at: Date;
    updated_at: Date;
  }
  
  export interface NameDescriptionMixin {
    name: string;
    description?: string;
  }