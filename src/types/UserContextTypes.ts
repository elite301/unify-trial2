import { Invite } from "./Invite";
import { TeamMember } from "./UserTypes";

export interface UserContextType {
  teamMembers: TeamMember[]
  invites: Invite[]
}
