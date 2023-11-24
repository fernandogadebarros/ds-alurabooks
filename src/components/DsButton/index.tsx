import React, { ComponentProps, ReactNode } from 'react';
import * as S from './styles';

export type DsButtonProps = ComponentProps<'button'> & {
  children: ReactNode;
  variant: 'primary' | 'secondary';
};

export default function DsButton({
  children,
  variant = 'primary',
  ...props
}: DsButtonProps) {
  return (
    <S.DsButton variant={variant} onClick={props.onClick} {...props}>
      {children}
    </S.DsButton>
  );
}
