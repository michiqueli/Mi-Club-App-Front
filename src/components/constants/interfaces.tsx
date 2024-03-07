export interface UserData {
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
  };
}
