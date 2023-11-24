import React, { ComponentProps, ReactNode } from 'react';
import styled from 'styled-components';

type DsButtonProps = ComponentProps<'button'> & {
  children: ReactNode;
};

const DsButtonStyle = styled.button`
  padding: 16px 32px;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  background-color: #eb9b00;
  border: 2px solid #eb9b00;
  transition: all 0.3s;

  &:hover {
    background-color: #887900;
    border: 2px solid #887900;
  }
`;

export default function DsButton({ children, ...props }: DsButtonProps) {
  return <DsButtonStyle {...props}>{children}</DsButtonStyle>;
}
