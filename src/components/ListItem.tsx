import { ArrowRightIcon, Typography } from "UILibrary";
import styled from "styled-components";
import { Status } from "types/UserTypes";

const ListItemContainer = styled.div`
  display: flex;
  padding: 24px 0;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled(Typography)`
  color: var(--color-black);
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatusLabel = styled.div`
  display: inline-flex;
  padding: 1px 10px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 24px;
  background: var(--color-light-grey);
  font-size: 11px;
  line-height: 20px;
`

export default function ListItem({ label, status }: {
  label: string
  status: Status
}) {
  return (
    <ListItemContainer>
      <Label>{label}</Label>
      <StatusWrapper>
        {status && status === "invited" && <StatusLabel>{status}</StatusLabel>}
        <ArrowRightIcon />
      </StatusWrapper>
    </ListItemContainer>
  )
}