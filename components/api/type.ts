export type ID = string | number;

export interface AuthUser {
  name?: string;
  email: string;
  password: string;
}
