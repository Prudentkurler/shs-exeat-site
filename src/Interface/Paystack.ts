import { NetworkProvider } from "@/enums/NetworkProviders";

export interface IPaystackPromptParams {
  student_name: string;
  school_name: string;
  student_id: string;
  network_provider: NetworkProvider;
  payment_phone_number: string;
  amount: number;
  email: string;
}

export interface IChargeResponse {
  status: boolean;
  message: string;
  data?: IChargeResponseData;
}

export interface IChargeResponseData {
  reference: string;
  status: string;
  display_text?: string;
}

export interface IVerifyTransaction {
  status: boolean;
  message: string;
  data: Record<string, unknown>;
}