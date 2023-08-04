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
  cursor: pointer;
`;

export const AddInfo = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;
