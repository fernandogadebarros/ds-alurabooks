import styled from 'styled-components';

export const DsOptionsGroups = styled.section<{
  selected: boolean;
}>`
  width: 194px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  border: 1px solid;
  background-color: ${({ selected }: { selected: boolean }) =>
    selected ? '#002F52' : '#ffffff'};
  border-color: ${({ selected }: { selected: boolean }) =>
    selected ? '#002F52' : '#eb9b00'};
  border-radius: 8px;

  header {
    font-size: 12px;
    color: ${({ selected }: { selected: boolean }) =>
      selected ? '#ffffff' : '#eb9b00'};
  }

  strong {
    color: ${({ selected }: { selected: boolean }) =>
      selected ? '#ffffff' : '#eb9b00'};
    font-size: 16ox;
    font-weight: bold;
  }

  footer {
    font-size: 12px;
    font-weight: 400;
    color: ${({ selected }: { selected: boolean }) =>
      selected ? '#ffffff' : 'rgba(0, 0, 0, 0.54)'};
  }
`;
