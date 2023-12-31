import styled, { css } from 'styled-components';
import { DsButtonProps } from '.';

export const DsButton = styled.button<DsButtonProps>`
  padding: 16px 32px;
  color: ${({ variant }: { variant: 'primary' | 'secondary' }) =>
    variant === 'primary' ? '#fff' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ variant }: { variant: 'primary' | 'secondary' }) =>
    variant !== 'primary' ? '#fff' : '#eb9b00'};
  border: 2px solid #eb9b00;
  transition: all 0.3s;

  ${({ variant }: { variant: 'primary' | 'secondary' }) =>
    variant === 'primary'
      ? css`
          &:hover {
            background-color: #887900;
            border: 2px solid #887900;
          }
        `
      : css`
          &:hover {
            color: #fff;
            background-color: #887900;
            border: 2px solid #887900;
          }
        `};
`;
