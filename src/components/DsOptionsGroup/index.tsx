import React, { useState } from 'react';
import * as S from './styles';

type DsOptionsProps = {
  id: number;
  title: string;
  body: string;
  footer: string;
};

type DsOptionsGroups = {
  options: DsOptionsProps[];
  selected?: boolean;
  defaultValue?: DsOptionsProps | null;
  onChange?: (option: DsOptionsProps) => void;
};

export default function DsOptionsGroups({
  options,
  onChange,
  defaultValue,
}: DsOptionsGroups) {
  const [selectOption, setSelectOption] = useState<DsOptionsProps | null>(
    defaultValue ?? null
  );

  const handleOption = (option: DsOptionsProps): void => {
    setSelectOption(option);
    if (onChange) {
      onChange(option);
    }
  };

  console.log(selectOption);

  return (
    <>
      {options.map(option => (
        <S.DsOptionsGroups
          key={option.id}
          selected={selectOption?.id == option.id}
          onClick={() => handleOption(option)}
        >
          <header>{option.title} </header>
          <div>
            <strong>{option.body}</strong>
          </div>
          <footer>{option.footer}</footer>
        </S.DsOptionsGroups>
      ))}
    </>
  );
}
