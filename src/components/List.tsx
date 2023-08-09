import React from "react";
import { Typography } from "UILibrary";
import { styled } from "styled-components";

const Container = styled.div`
  margin-bottom: 32px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding-left: 8px;
`

const ListContainer = styled.div`
  border-radius: 16px;
  background: var(--bg-card);
  padding: 0 16px;
  box-shadow: 0px 3px 24px 0px rgba(130, 139, 151, 0.06);
`;

const Title = styled(Typography)`
  color: var(--color-grey);
`;

export default function List({ title, icon, children }: {
  title: string,
  icon: JSX.Element,
  children?: React.ReactNode
}) {
  return (
    <Container>
      <TitleWrapper>
        {icon}
        <Title>{title}</Title> 
      </TitleWrapper>
      <ListContainer>
        {children}
      </ListContainer>
    </Container>
  )
}