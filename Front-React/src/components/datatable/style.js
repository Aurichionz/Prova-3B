import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Title = styled.h3`
  color: #e7ca39ff;
  margin-top: 18px;
`;

export const ButtonAtualizar = styled(Button)`
  background-color: #3956e7ff !important;
  border-color: #3956e7ff !important;
  color: #fff !important;

  &:hover {
    background-color: #3956e7ff!important;
    border-color: #3956e7ff !important;
  }
`;

export const ButtonRemover = styled(Button)`
  background-color: #3956e7ff!important;
  border-color: #3956e7ff !important;
  color: #fff !important;

  &:hover {
    background-color:  !important;
    border-color: #3956e7ff !important;
  }
`;
