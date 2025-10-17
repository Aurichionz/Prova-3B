import styled from 'styled-components';
import { Button, Table as RbTable } from 'react-bootstrap';

export const Title = styled.h3`
  color: #e7ca39ff;
  margin-top: 18px;
`;

export const ButtonAtualizar = styled(Button)`
  background-color: #3956e7ff !important;
  border-color: #3956e7ff !important;
  color: #fff !important;

  &:hover {
    background-color: #2f46c5 !important;
    border-color: #2f46c5 !important;
  }
`;

export const ButtonRemover = styled(Button)`
  background-color: #3956e7ff !important;
  border-color: #3956e7ff !important;
  color: #fff !important;

  &:hover {
    background-color: #2f46c5 !important;
    border-color: #2f46c5 !important;
  }
`;

export const TableHeader = styled.th`
  color: #3956e7ff !important; /* azul */
  font-weight: 700 !important;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const StyledTable = styled(RbTable)`
  thead th {
    color: #3956e7ff !important;
    font-weight: 700 !important;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;
