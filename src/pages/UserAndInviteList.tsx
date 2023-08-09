import styled from "styled-components";
import useUsers from "hooks/useUsers";
import List from "components/List";
import { PrivateGuardIcon, UserIcon } from "UILibrary";
import ListItem from "components/ListItem";
import { Divider } from "UILibrary/Divider";
import { Fragment } from "react";

const PageContainer = styled.div`
  padding: 15px 16px;
  background: var(--bg-default);
`;

export const UserAndInviteList = () => {
  const users = useUsers();

  return (
    <PageContainer>
      <List title="Administrators" icon={<PrivateGuardIcon />}>
        {
          users.teamMembers.filter(user => user.role === "Administrator").map((user) => (
            <Fragment key={user.id}>
              <ListItem label={user.user.name} status={user.status} />
              <Divider />
            </Fragment>
          ))
        }
        {
          users.invites.filter(invite => invite.role === "Administrator").map((invite) => (
            <Fragment key={invite.id}>
              <ListItem label={invite.phone} status="invited" />
              <Divider />
            </Fragment>
          ))
        }
      </List>
      <List title="Users" icon={<UserIcon />}>
        {
          users.teamMembers.filter(user => user.role === "Standard").map((user) => (
            <Fragment key={user.id}>
              <ListItem label={user.user.name} status={user.status} />
              <Divider />
            </Fragment>
          ))
        }
        {
          users.invites.filter(invite => invite.role === "Standard").map((invite) => (
            <Fragment key={invite.id}>
              <ListItem label={invite.phone} status="invited" />
              <Divider />
            </Fragment>
          ))
        }
      </List>
    </PageContainer>
  );
}
