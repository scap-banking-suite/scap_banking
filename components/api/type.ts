import { AxiosRequestConfig } from "axios";

export type ID = string | number;

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiError {
  response?: any;
  message?: string;
  status?: number;
  data?: any;
}
export interface AuthResponse {
  access_token: string;
  user: AuthUser;
}

export interface ApiOptions extends Omit<AxiosRequestConfig, "url" | "method"> {
  url: string;
  method: HttpMethod;
}
export interface AuthUser {
  fullname?: string;
  email: string;
  password: string;
}

export interface Region {
  id: ID;
  name: string;
  data: {
    name: string;
    id: ID;
  };
}

export interface User {
  id: ID;
  name: string;
  data: {
    name: string;
    id: ID;
  };
}

export interface Branch {
  regionID: ID;
  branchName: string;
  branchAddress: string;
  branchMobile: string;
  branchState: string;
  branchManager: string;
  branchStatus: boolean;
  branchGLNumber: string;
  data: {
    regionID: ID;
    branchName: string;
    branchAddress: string;
    branchMobile: string;
    branchState: string;
    branchManager: string;
    branchStatus: boolean;
    branchGLNumber: string;
  };
}
