import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ListItem = styled.li`
  color: #4f4141;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  color: #4f4141;
`;
