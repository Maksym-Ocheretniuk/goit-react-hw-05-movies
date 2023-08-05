import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  gap: 15px;
`;

export const ListItem = styled.li`
  color: #4f4141;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 150px;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #000000;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: blue;
  }
`;

export const Image = styled.img`
  display: block;

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.03;
  }
`;
