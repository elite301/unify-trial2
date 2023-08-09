import styled from "styled-components";
import useUsers from "hooks/useUsers";
import List from "components/List";
import { PrivateGuardIcon, Typography, UserIcon } from "UILibrary";
import ListItem from "components/ListItem";
import { Divider } from "UILibrary/Divider";
import { Fragment } from "react";

const PageContainer = styled.div`
  padding: 15px 16px;
  background: var(--bg-default);
`;

export const UserAndInviteList = () => {
  const { administrators, standards, loading, error } = useUsers();

  if (loading) {
    return <Typography>Loading...</Typography>
  } 
  if (error) {
    return <Typography>Something wrong.</Typography>
  }
  
  return (
    <PageContainer>
      <List title="Administrators" icon={<PrivateGuardIcon />}>
        {administrators.teamMembers.map((user) => (
          <Fragment key={user.id}>
            <ListItem label={user.user.name} status={user.status} />
            <Divider />
          </Fragment>
        ))}
        {administrators.invites.map((invite) => (
          <Fragment key={invite.id}>
            <ListItem label={invite.phone} status="invited" />
            <Divider />
          </Fragment>
        ))}
      </List>
      <List title="Users" icon={<UserIcon />}>
        {standards.teamMembers.map((user) => (
          <Fragment key={user.id}>
            <ListItem label={user.user.name} status={user.status} />
            <Divider />
          </Fragment>
        ))}
        {standards.invites.map((invite) => (
          <Fragment key={invite.id}>
            <ListItem label={invite.phone} status="invited" />
            <Divider />
          </Fragment>
        ))}
      </List>
    </PageContainer>
  );
};
