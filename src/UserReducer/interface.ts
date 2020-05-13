export interface RegisterInterface {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}
export interface LoginInterface {
  email: string;
  password: string;
}

export interface ActionInterface {
  REGISTER?: string;
  LOGIN?: string;
  LOADING?: string;
}
