export type Role = "Administrator" | "Standard";

export type Status = "request" | "pending" | "approved" | "declined" | "invited";

export interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

export interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

