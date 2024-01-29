import { $Enums } from '@prisma/client';

export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  password_reset_token?: string | null;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ICategory {
  id?: number;
  name: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ITag {
  id?: number;
  name: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IMedia {
  id?: number;
  public_id: string;
  resource_type: string;
  url: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IProfile {
  id?: number;
  bio?: string | null ;
  birth_date?: Date | null;
  user_id: number;
  media_id?: number | null;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IMailOptions {
  from?: string;
  to: string;
  subject: string;
  html: {
    path: string;
    replacements: object;
  }
}

export interface IPost {
  id?: number;
  title: string;
  content: string;
  status: $Enums.Status;
  category_id: number;
  user_id: number;
  media_id?: number | null;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ILike {
  id?: number;
  post_id: number;
  user_id: number;
  createdAt?: Date;
  updateAt?: Date;
}

export interface IFavorite {
  id?: number;
  post_id: number;
  user_id: number;
  createdAt?: Date;
  updateAt?: Date;
}
