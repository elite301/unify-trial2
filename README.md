# Introduction

React Users & Invites 

This task is to create a React Class or Functional component where we need to render users and invites that we send to users.

We need to show all users and invites together, split into to 2 sections like in this Figma design:

https://www.figma.com/file/r6Y0zKifCDFtLdUh7Lemqi/Untitled?node-id=0%3A1

Please use 375px width for the screen (do not worry about other resolutions)

Imagine that you have an API:

1) Users.getUsers(): Promise<TeamMember[]>

interface TeamMember {
    id: number;
    status: Status;
    user: UserShortData;
    role: Role;
}

type Role = "Administrator" | "Standard";

type Status = "request" | "pending" | "approved" | "declined" | "invited";

interface UserShortData {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    email: string;
}

2) Users.getInvites(): Promise<Invite[]>

interface Invite {
    id: number;
    phone: string;
    role: Role;
}