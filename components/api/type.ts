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

export type RegionDataItem = {
  name: string;
  manager: string;
  id: ID;
};
export interface Region {
  id: ID;
  name: string;
  email: string;
  mobile: string;
  manager: string;
  data: RegionDataItem[];
}

export type SectorDataItem = {
  sectorName: string;
  category: string;
  sectorDescription:string
  code:string
  id: ID;
};
export interface Sector {
  id: ID;
  sectorName: string;
  sectorDescription: string;
  code: string;
  category: string;
  data: SectorDataItem[];
}

export type ManagerOption = {
  value: string;
  label: string;
  email: string;
  phone: string;
};


export type Userdata = {
  id: ID;
  name: string;
  email: string;
  mobile: string;
  manager: string;
};

export interface User {
  id: ID;
  name: string;
  email: string;
  mobile: string;
  manager: string;
  data: Userdata[];
}

export type BranchDataItem = {
  regionID: ID;
  branchName: string;
  branchAddress: string;
  branchMobile: string;
  branchState: string;
  branchManager: string;
  branchStatus: boolean;
  branchGLNumber: string;
  branchId: string;
};
export interface Branch {
  regionID: ID;
  branchName: string;
  branchAddress: string;
  branchMobile: string;
  branchState: string;
  branchManager: string;
  branchStatus: boolean;
  branchGLNumber: string;
  data: BranchDataItem[];
}
