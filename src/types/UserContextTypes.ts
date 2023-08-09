import { Invite } from "./Invite";
import { TeamMember } from "./UserTypes";

export interface UserContextType {
  administrators: {
    teamMembers: TeamMember[];
    invites: Invite[];
  };
  standards: {
    teamMembers: TeamMember[];
    invites: Invite[];
  };
  loading: boolean;
  error: any;
}
