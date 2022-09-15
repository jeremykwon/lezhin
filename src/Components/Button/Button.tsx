import styled from "styled-components";
import devices from "Styles/Devices";

export type Props = {
  selected: boolean;
  children: string;
  clickHandler: () => void | any;
};

export default function Button({ selected, children, clickHandler }: Props) {
  return (
    <StyledButton selected={selected} onClick={clickHandler}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  selected: boolean;
}>`
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 14px;
  background-color: var(
    ${({ selected }) => (selected ? "--primary-color" : "--lightgray-color")}
  );
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  padding: 0 20px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(
      ${({ selected }) => (selected ? "--primary-color" : "--gray-color")}
    );
  }

  @media ${devices.mobile} {
    padding: 0 10px;
    font-size: 13px;
  }
`;
