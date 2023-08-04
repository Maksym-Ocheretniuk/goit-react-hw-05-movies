import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
  padding-top: 20px;
`;

export const StyledLinkBtn = styled(Link)`
  font-weight: 500;
  text-decoration: none;

  margin-left: 15px;
  padding: 6px 10px;

  border: 1px solid #808080;
  border-radius: 5px;

  color: #000000;
  background-color: #eeeee4;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #f5f59f;
  }
`;

export const AddInfo = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #000000;

  padding: 6px 10px;

  border: 1px solid #808080;
  border-radius: 5px;

  color: #000000;
  background-color: #eeeee4;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #f5f59f;
  }
`;
