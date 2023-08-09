import { Role } from "./UserTypes";

export interface Invite {
  id: number;
  phone: string;
  role: Role;
}
