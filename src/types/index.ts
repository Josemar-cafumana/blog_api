export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  password_reset_token?: string | null;
  createdAt?: Date;
  updateAt?: Date;
}