import { DefaultSession } from "next-auth";

export interface UserDataInterface {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  id: string;
  email: string;
  password: string;
  role: string;
  socio: {
    createdAt: Date;
    updatedAt: string;
    deletedAt: null;
    number: number;
    id: string;
    dni: string;
    name: string;
    last_name: string;
    email: string;
    dob: string;
    address: string;
    phone: string;
    image: string;
    cuotas: [
      {
        id: string
        name: string
        month: number
        year: number
        price: number
        isPayed: boolean
      }
    ]
    actividades: [
      {
        id: string
        name: string
        days: string
        hours: string
      }
    ]
  };
}

export interface FieldProps {
  placeholder: string;
  name: string;
  type: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export interface CredentialsLogin {
  email: string;
  password: string;
}

export interface Errors {
  name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  street?: string;
  dni?: string;
  dob?: Date;
  phone?: string
}

export interface LoguedUser extends DefaultSession {
      name: string;
      email: string;
      image: string;
      userId?: string,
      detail?: {
        message?: [
          string
        ]
      }
}

export interface UserResumeProps {
  setMostrar: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

export interface UserResumeProps {
  setMostrar: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}